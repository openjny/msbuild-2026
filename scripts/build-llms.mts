/**
 * build-llms.mts
 * Transforms content/ → public/llms.txt (hub) + public/llms/{type}/{id}/llms.txt (details)
 * Follows the llms.txt specification: H1, blockquote, H2 sections, link lists
 */

import path from 'node:path';
import {
  loadContentEntries,
  loadTopics,
  loadBuildInfo,
  cleanDir,
  writeFile,
} from './lib/content.mjs';
import { DEFAULT_DELIVERIES } from './lib/types.mjs';
import type { ContentEntry, TopicDef } from './lib/types.mjs';

const PUBLIC_DIR = path.resolve(import.meta.dirname, '../public');
const buildInfo = loadBuildInfo();
const SITE_BASE = buildInfo.site_base;
// TODO: Replace with actual domain when deployed
const SITE_ORIGIN = 'https://openjny.github.io';

function shouldBuildLlms(entry: ContentEntry): boolean {
  const d = entry.frontmatter.deliveries ?? DEFAULT_DELIVERIES;
  return d.llms;
}

function detailPath(entry: ContentEntry): string {
  const parts = entry.relativePath.replace(/\.md$/, '').split('/');
  return `/llms/${parts.join('/')}/llms.txt`;
}

/** Build the hub llms.txt */
function buildHub(entries: ContentEntry[], topics: TopicDef[]): string {
  const info = buildInfo;
  const llmsEntries = entries.filter(shouldBuildLlms);

  const lines: string[] = [
    `# ${info.event}`,
    '',
    `> ${info.event} (${info.dates.start} – ${info.dates.end}, ${info.location}) の情報ハブ。アナウンス、セッション、リソースを集約。`,
    '',
  ];

  // Group by topic
  for (const topic of topics) {
    const topicEntries = llmsEntries.filter(
      (e) => e.frontmatter.topic === topic.slug,
    );
    if (topicEntries.length === 0) continue;

    lines.push(`## ${topic.name}`);
    lines.push('');
    for (const e of topicEntries) {
      const url = `${SITE_ORIGIN}${SITE_BASE}${detailPath(e)}`;
      lines.push(
        `- [${e.frontmatter.title}](${url}): ${e.frontmatter.summary.split('\n')[0]}`,
      );
    }
    lines.push('');
  }

  // Entries without a matching topic
  const ungrouped = llmsEntries.filter(
    (e) => !topics.some((t) => t.slug === e.frontmatter.topic),
  );
  if (ungrouped.length > 0) {
    lines.push('## その他');
    lines.push('');
    for (const e of ungrouped) {
      const url = `${SITE_ORIGIN}${SITE_BASE}${detailPath(e)}`;
      lines.push(
        `- [${e.frontmatter.title}](${url}): ${e.frontmatter.summary.split('\n')[0]}`,
      );
    }
    lines.push('');
  }

  return lines.join('\n');
}

/** Build a detail llms.txt for a single entry */
function buildDetail(entry: ContentEntry): string {
  const fm = entry.frontmatter;

  const lines: string[] = [`# ${fm.title}`, '', `> ${fm.summary}`, ''];

  // Extract body sections (## headings)
  const sections = entry.body.split(/^## /m).filter(Boolean);
  for (const section of sections) {
    const [heading, ...rest] = section.split('\n');
    lines.push(`## ${heading.trim()}`);
    lines.push('');
    lines.push(rest.join('\n').trim());
    lines.push('');
  }

  // Official sources
  if (fm.official_sources.length > 0) {
    lines.push('## 公式ソース');
    lines.push('');
    for (const url of fm.official_sources) {
      lines.push(`- [${url}](${url})`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

// --- Main ---

const entries = loadContentEntries();
const topics = loadTopics();

console.log(
  `[build-llms] ${entries.filter(shouldBuildLlms).length} entries for llms`,
);

// Clean generated directories
cleanDir(path.join(PUBLIC_DIR, 'llms'));

// Hub
writeFile(path.join(PUBLIC_DIR, 'llms.txt'), buildHub(entries, topics));

// Details
for (const entry of entries) {
  if (!shouldBuildLlms(entry)) continue;
  const parts = entry.relativePath.replace(/\.md$/, '').split('/');
  const outPath = path.join(PUBLIC_DIR, 'llms', ...parts, 'llms.txt');
  writeFile(outPath, buildDetail(entry));
}

console.log('[build-llms] Done');
