/**
 * validate.mts
 * Validates content entries against metadata JSON definitions.
 * Fails the build with clear error messages when rules are violated.
 */

import type { ContentEntry, ContentType, TagDef, TopicDef } from './types.mjs';

const VALID_CONTENT_TYPES: ContentType[] = [
  'announcement',
  'session',
  'resource',
];

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(filePath: string, message: string): never {
  throw new Error(`[validate] ${filePath}: ${message}`);
}

/** Validate that a slug is safe (kebab-case, no path traversal) */
export function validateSlug(slug: string, filePath: string): void {
  if (!SLUG_PATTERN.test(slug)) {
    fail(filePath, `invalid slug "${slug}" — must be kebab-case`);
  }
}

/** Validate a single content entry against metadata definitions */
export function validateEntry(
  entry: ContentEntry,
  tags: TagDef[],
  topics: TopicDef[],
  allowedDomains: string[],
): void {
  const fm = entry.frontmatter;
  const fp = entry.relativePath;

  // Required fields
  const requiredStrings: [string, unknown][] = [
    ['id', fm.id],
    ['title', fm.title],
    ['summary', fm.summary],
    ['content_type', fm.content_type],
    ['topic', fm.topic],
  ];
  for (const [field, value] of requiredStrings) {
    if (!value || typeof value !== 'string') {
      fail(fp, `missing or invalid required field "${field}"`);
    }
  }
  if (!Array.isArray(fm.tags) || fm.tags.length === 0) {
    fail(fp, 'missing or empty "tags" array');
  }
  if (!Array.isArray(fm.official_sources) || fm.official_sources.length === 0) {
    fail(fp, 'missing or empty "official_sources" array');
  }

  // id must match filename
  const expectedId = entry.relativePath.split('/').pop()!.replace(/\.md$/, '');
  if (fm.id !== expectedId) {
    fail(fp, `id "${fm.id}" does not match filename "${expectedId}"`);
  }
  validateSlug(fm.id, fp);

  // content_type
  if (!VALID_CONTENT_TYPES.includes(fm.content_type)) {
    fail(fp, `invalid content_type "${fm.content_type}"`);
  }

  // topic must exist in topics.json
  const topicSlugs = topics.map((t) => t.slug);
  if (!topicSlugs.includes(fm.topic)) {
    fail(fp, `topic "${fm.topic}" not found in topics.json`);
  }
  validateSlug(fm.topic, fp);

  // tags must exist in tags.json
  const tagSlugs = tags.map((t) => t.slug);
  for (const tag of fm.tags) {
    if (!tagSlugs.includes(tag)) {
      fail(fp, `tag "${tag}" not found in tags.json`);
    }
    validateSlug(tag, fp);
  }

  // official_sources must use allowed domains
  for (const url of fm.official_sources) {
    let hostname: string;
    try {
      hostname = new URL(url).hostname;
    } catch {
      fail(fp, `invalid URL in official_sources: "${url}"`);
    }
    if (
      !allowedDomains.some((d) => hostname === d || hostname.endsWith(`.${d}`))
    ) {
      fail(
        fp,
        `domain "${hostname}" not in allowed-domains.json (URL: ${url})`,
      );
    }
  }

  // Body-level depth checks (announcement only) — warnings, not errors
  if (fm.content_type === 'announcement') {
    const warnings = checkAnnouncementBody(entry.body, fp);
    if (warnings.length > 0) {
      entry._bodyWarnings = warnings;
    }
  }

  // Body-level depth checks (session only) — warnings, not errors
  if (fm.content_type === 'session') {
    const warnings = checkSessionBody(entry.body, fp);
    if (warnings.length > 0) {
      entry._bodyWarnings = warnings;
    }
  }
}

// ---------------------------------------------------------------------------
// Announcement body depth validation (returns warnings, does not throw)
// ---------------------------------------------------------------------------

const REQUIRED_SECTIONS = [
  '概要',
  '主な発表',
  '詳細',
  '応用シナリオ',
  '参考リンク',
];

/** Extract text between `## {heading}` and the next `## ` (or EOF). */
function extractSection(body: string, heading: string): string | null {
  const marker = `## ${heading}`;
  const idx = body.indexOf(marker);
  if (idx === -1) return null;
  const start = body.indexOf('\n', idx);
  if (start === -1) return '';
  const nextSection = body.indexOf('\n## ', start);
  return nextSection === -1
    ? body.slice(start)
    : body.slice(start, nextSection);
}

/** Count occurrences of a pattern inside a text block. */
function countPattern(text: string, pattern: RegExp): number {
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

function checkAnnouncementBody(body: string, fp: string): string[] {
  const warnings: string[] = [];

  // 1. Required sections
  for (const section of REQUIRED_SECTIONS) {
    if (!body.includes(`## ${section}`)) {
      warnings.push(`${fp}: missing required section "## ${section}"`);
    }
  }

  // 2. 「詳細」 must have ≥ 3 subsections (### headings)
  const detailSection = extractSection(body, '詳細');
  if (detailSection) {
    const subCount = countPattern(detailSection, /^### /gm);
    if (subCount < 3) {
      warnings.push(`${fp}: "## 詳細" has ${subCount} subsections (### ), need ≥ 3`);
    }
  }

  // 3. 「主な発表」 must have ≥ 3 items (- **…**)
  const announcementsSection = extractSection(body, '主な発表');
  if (announcementsSection) {
    const itemCount = countPattern(announcementsSection, /^- \*\*/gm);
    if (itemCount < 3) {
      warnings.push(`${fp}: "## 主な発表" has ${itemCount} items (- **), need ≥ 3`);
    }
  }

  // 4. 「応用シナリオ」 must have ≥ 3 items (- …)
  const scenarioSection = extractSection(body, '応用シナリオ');
  if (scenarioSection) {
    const itemCount = countPattern(scenarioSection, /^- /gm);
    if (itemCount < 3) {
      warnings.push(`${fp}: "## 応用シナリオ" has ${itemCount} items, need ≥ 3`);
    }
  }

  // 5. 「参考リンク」 must have ≥ 3 links (- […])
  const refsSection = extractSection(body, '参考リンク');
  if (refsSection) {
    const linkCount = countPattern(refsSection, /^- \[/gm);
    if (linkCount < 3) {
      warnings.push(`${fp}: "## 参考リンク" has ${linkCount} links, need ≥ 3`);
    }
  }

  // 6. Body must be ≥ 60 lines
  const lineCount = body.split('\n').length;
  if (lineCount < 60) {
    warnings.push(`${fp}: body has ${lineCount} lines, need ≥ 60`);
  }

  return warnings;
}

// ---------------------------------------------------------------------------
// Session body depth validation (returns warnings, does not throw)
// ---------------------------------------------------------------------------

const SESSION_REQUIRED_SECTIONS = [
  'セッション情報',
  '概要',
  'キーポイント',
  '詳細',
  '参考リンク',
];

function checkSessionBody(body: string, fp: string): string[] {
  const warnings: string[] = [];

  // 1. Required sections
  for (const section of SESSION_REQUIRED_SECTIONS) {
    if (!body.includes(`## ${section}`)) {
      warnings.push(`${fp}: missing required section "## ${section}"`);
    }
  }

  // 2. 「キーポイント」 must have ≥ 3 items (numbered list)
  const keypointsSection = extractSection(body, 'キーポイント');
  if (keypointsSection) {
    const itemCount = countPattern(keypointsSection, /^\d+\. /gm);
    if (itemCount < 3) {
      warnings.push(`${fp}: "## キーポイント" has ${itemCount} items, need ≥ 3`);
    }
  }

  // 3. 「詳細」 must have ≥ 2 subsections (### headings)
  const detailSection = extractSection(body, '詳細');
  if (detailSection) {
    const subCount = countPattern(detailSection, /^### /gm);
    if (subCount < 2) {
      warnings.push(`${fp}: "## 詳細" has ${subCount} subsections (###), need ≥ 2`);
    }
  }

  // 4. 「参考リンク」 must have ≥ 3 links (- […])
  const refsSection = extractSection(body, '参考リンク');
  if (refsSection) {
    const linkCount = countPattern(refsSection, /^- \[/gm);
    if (linkCount < 3) {
      warnings.push(`${fp}: "## 参考リンク" has ${linkCount} links, need ≥ 3`);
    }
  }

  // 5. Body must be ≥ 40 lines
  const lineCount = body.split('\n').length;
  if (lineCount < 40) {
    warnings.push(`${fp}: body has ${lineCount} lines, need ≥ 40`);
  }

  return warnings;
}

/** Validate all entries. Throws on first error for frontmatter checks. */
export function validateAllEntries(
  entries: ContentEntry[],
  tags: TagDef[],
  topics: TopicDef[],
  allowedDomains: string[],
): string[] {
  const allWarnings: string[] = [];
  for (const entry of entries) {
    validateEntry(entry, tags, topics, allowedDomains);
    if (entry._bodyWarnings) {
      allWarnings.push(...entry._bodyWarnings);
    }
  }
  return allWarnings;
}

// ---------------------------------------------------------------------------
// Cross-reference link validation
// Ensures relative markdown links within site-delivered entries only point to
// other site-delivered entries. Catches dead links before VitePress build.
// ---------------------------------------------------------------------------

/** Relative .md link pattern: [text](relative/path.md) or [text](../dir/file.md) */
const RELATIVE_LINK_RE = /\]\((?!https?:\/\/)([^)#]+\.md)(?:#[^)]*)?\)/g;

/**
 * Check that relative markdown links from site-delivered entries point to
 * other site-delivered entries. Returns error messages for dead cross-links.
 */
export function checkCrossLinks(entries: ContentEntry[]): string[] {
  // Build set of relativePaths for entries with site: true
  const siteEntryPaths = new Set(
    entries
      .filter((e) => e.frontmatter.deliveries?.site)
      .map((e) => e.relativePath),
  );

  const errors: string[] = [];

  for (const entry of entries) {
    // Only check entries that are delivered to the site
    if (!entry.frontmatter.deliveries?.site) continue;

    const dir = entry.relativePath.replace(/\/[^/]+$/, '');

    for (const match of entry.body.matchAll(RELATIVE_LINK_RE)) {
      const rawTarget = match[1];
      // Resolve relative path against entry's directory
      const parts = [...dir.split('/'), ...rawTarget.split('/')];
      const resolved: string[] = [];
      for (const p of parts) {
        if (p === '..') resolved.pop();
        else if (p !== '.') resolved.push(p);
      }
      const targetPath = resolved.join('/');

      if (!siteEntryPaths.has(targetPath)) {
        errors.push(
          `${entry.relativePath}: dead cross-link to "${rawTarget}" (resolved: ${targetPath}) — target missing or not site-delivered`,
        );
      }
    }
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Reference link liveness check (optional, network-dependent)
// Results cached in .cache/link-check.json with 24h TTL.
// ---------------------------------------------------------------------------

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const LINK_CACHE_PATH = resolve('.cache/link-check.json');
const LINK_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface LinkCacheEntry {
  status: number | null; // null = unreachable
  method: string; // HTTP method used (e.g. 'HEAD', 'GET')
  error?: string;
  checkedAt: number; // epoch ms
}

type LinkCache = Record<string, LinkCacheEntry>;

function loadLinkCache(): LinkCache {
  try {
    return JSON.parse(readFileSync(LINK_CACHE_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

function saveLinkCache(cache: LinkCache): void {
  mkdirSync(resolve('.cache'), { recursive: true });
  writeFileSync(LINK_CACHE_PATH, JSON.stringify(cache, null, 2));
}

/** Extract all URLs from 「参考リンク」 sections across all entries */
function extractReferenceLinks(entries: ContentEntry[]): { fp: string; url: string }[] {
  const links: { fp: string; url: string }[] = [];
  for (const entry of entries) {
    const refsSection = extractSection(entry.body, '参考リンク');
    if (!refsSection) continue;
    const urlMatches = refsSection.matchAll(/\]\((https?:\/\/[^)]+)\)/g);
    for (const m of urlMatches) {
      links.push({ fp: entry.relativePath, url: m[1] });
    }
  }
  return links;
}

/** Check that reference links return 2XX or 3XX. Returns warnings for dead links. */
export async function checkLinksLiveness(entries: ContentEntry[]): Promise<string[]> {
  const links = extractReferenceLinks(entries);
  const warnings: string[] = [];
  const seen = new Set<string>();
  const cache = loadLinkCache();
  const now = Date.now();
  let cacheHits = 0;

  for (const { fp, url } of links) {
    if (seen.has(url)) continue;
    seen.add(url);

    // Use cached result if fresh
    const cached = cache[url];
    if (cached && (now - cached.checkedAt) < LINK_CACHE_TTL_MS) {
      cacheHits++;
      if (cached.status === null) {
        warnings.push(`${fp}: unreachable link (${cached.error}) — ${url}`);
      } else if (cached.status >= 400) {
        warnings.push(`${fp}: dead link (${cached.status}) — ${url}`);
      }
      continue;
    }

    // Fetch: try HEAD first, fallback to GET on 4xx
    let status: number | null = null;
    let method = 'HEAD';
    let errorMsg: string | undefined;

    try {
      const res = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
        signal: AbortSignal.timeout(10_000),
      });
      status = res.status;

      // Fallback to GET if HEAD returns 4xx (some sites block HEAD)
      if (status >= 400) {
        method = 'GET';
        const getRes = await fetch(url, {
          method: 'GET',
          redirect: 'follow',
          signal: AbortSignal.timeout(10_000),
        });
        status = getRes.status;
        // Discard body to release connection
        await getRes.body?.cancel();
      }
    } catch (err: unknown) {
      // If HEAD threw (connection reset, timeout), try GET as fallback
      try {
        method = 'GET';
        const getRes = await fetch(url, {
          method: 'GET',
          redirect: 'follow',
          signal: AbortSignal.timeout(10_000),
        });
        status = getRes.status;
        await getRes.body?.cancel();
      } catch (getErr: unknown) {
        errorMsg = getErr instanceof Error ? getErr.message : 'unknown error';
      }
    }

    if (errorMsg) {
      cache[url] = { status: null, method, error: errorMsg, checkedAt: now };
      warnings.push(`${fp}: unreachable link (${errorMsg}) — ${url}`);
    } else {
      cache[url] = { status, method, checkedAt: now };
      if (status !== null && status >= 400) {
        warnings.push(`${fp}: dead link (${status}) — ${url}`);
      }
    }
  }

  saveLinkCache(cache);
  if (cacheHits > 0) {
    console.log(`[validate] Link cache: ${cacheHits} hits, ${seen.size - cacheHits} fetched`);
  }
  return warnings;
}
