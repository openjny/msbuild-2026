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
}

/** Validate all entries. Throws on first error. */
export function validateAllEntries(
  entries: ContentEntry[],
  tags: TagDef[],
  topics: TopicDef[],
  allowedDomains: string[],
): void {
  for (const entry of entries) {
    validateEntry(entry, tags, topics, allowedDomains);
  }
}
