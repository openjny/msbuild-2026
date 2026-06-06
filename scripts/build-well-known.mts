/**
 * build-well-known.mts
 * Generates public/.well-known/ files:
 *   - ai-agent.json
 *   - docs-index.json
 *   - build-info.json
 */

import path from 'node:path';
import {
  loadContentEntries,
  loadBuildInfo,
  loadTopics,
  cleanDir,
  writeFile,
} from './lib/content.mjs';
import { DEFAULT_DELIVERIES } from './lib/types.mjs';
import type { ContentEntry } from './lib/types.mjs';

const WELL_KNOWN_DIR = path.resolve(
  import.meta.dirname,
  '../public/.well-known',
);
const buildInfoData = loadBuildInfo();
const SITE_BASE = buildInfoData.site_base;

function shouldBuildLlms(entry: ContentEntry): boolean {
  const d = entry.frontmatter.deliveries ?? DEFAULT_DELIVERIES;
  return d.llms;
}

// --- Main ---

const entries = loadContentEntries();
const buildInfo = buildInfoData;
const topics = loadTopics();

// Clean generated directory
cleanDir(WELL_KNOWN_DIR);

// 1. build-info.json (copy from content)
writeFile(
  path.join(WELL_KNOWN_DIR, 'build-info.json'),
  JSON.stringify(buildInfo, null, 2) + '\n',
);

// 2. ai-agent.json
const aiAgent = {
  name: buildInfo.event,
  description: `${buildInfo.event} の情報ハブ。アナウンス・セッション・リソースを集約。`,
  homepage: `${SITE_BASE}/`,
  llms_txt: `${SITE_BASE}/llms.txt`,
  docs_index: `${SITE_BASE}/.well-known/docs-index.json`,
  build_info: `${SITE_BASE}/.well-known/build-info.json`,
  content_language: 'ja',
  last_updated: new Date().toISOString().split('T')[0],
};
writeFile(
  path.join(WELL_KNOWN_DIR, 'ai-agent.json'),
  JSON.stringify(aiAgent, null, 2) + '\n',
);

// 3. docs-index.json (parent-child index)
interface DocEntry {
  id: string;
  title: string;
  type: string;
  topic: string;
  tags: string[];
  summary: string;
  paths: {
    site: string;
    llms: string | null;
  };
}

const docsIndex: DocEntry[] = entries.filter(shouldBuildLlms).map((e) => {
  const slug = e.relativePath.replace(/\.md$/, '');
  return {
    id: e.frontmatter.id,
    title: e.frontmatter.title,
    type: e.frontmatter.content_type,
    topic: e.frontmatter.topic,
    tags: e.frontmatter.tags,
    summary: e.frontmatter.summary,
    paths: {
      site: `${SITE_BASE}/${slug}`,
      llms: `${SITE_BASE}/llms/${slug}/llms.txt`,
    },
  };
});

writeFile(
  path.join(WELL_KNOWN_DIR, 'docs-index.json'),
  JSON.stringify(
    { entries: docsIndex, topics, generated: new Date().toISOString() },
    null,
    2,
  ) + '\n',
);

console.log(`[build-well-known] ${docsIndex.length} entries indexed`);
console.log('[build-well-known] Done');
