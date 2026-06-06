/**
 * build-skills.mts
 * Transforms content/ → skills/msbuild-2026/ (SKILL.md hub + references)
 * Also generates plugin.json at the repo root
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

const SKILLS_DIR = path.resolve(import.meta.dirname, '../skills');
const ROOT_DIR = path.resolve(import.meta.dirname, '..');

function shouldBuildSkills(entry: ContentEntry): boolean {
  const d = entry.frontmatter.deliveries ?? DEFAULT_DELIVERIES;
  return d.skills;
}

/** Build the hub SKILL.md */
function buildSkillHub(entries: ContentEntry[], topics: TopicDef[]): string {
  const skillEntries = entries.filter(shouldBuildSkills);
  const info = loadBuildInfo();
  const startDate = info.dates.start.replace(/-/g, '/');
  const endDate = info.dates.end.split('-')[2];
  const eventDesc = `${info.event} (${startDate}-${endDate}, ${info.location.split(',')[0]})`;

  const lines: string[] = [
    '---',
    'name: msbuild-2026',
    "description: 'Microsoft Build 2026 でのアナウンス、セッション情報や関連リソース情報を提供するスキル。Triggers: Build 2026, アナウンス, セッション, 新機能, GA, Preview'",
    '---',
    '',
    '# Microsoft Build 2026 Info Hub',
    '',
    `${eventDesc} の発表情報を集約したスキル。`,
    'アナウンス、セッション要約、リソースリンクを提供する。',
    '',
    '各アナウンスの詳細は references/ 配下を参照。',
    '',
  ];

  // Group by topic
  for (const topic of topics) {
    const topicEntries = skillEntries.filter(
      (e) => e.frontmatter.topic === topic.slug,
    );
    if (topicEntries.length === 0) continue;

    lines.push(`## ${topic.name}`);
    lines.push('');
    for (const e of topicEntries) {
      const refPath = `references/${e.relativePath.replace(/\.md$/, '.md')}`;
      lines.push(
        `- [${e.frontmatter.title}](${refPath}): ${e.frontmatter.summary.split('\n')[0]}`,
      );
    }
    lines.push('');
  }

  return lines.join('\n');
}

/** Build a reference file for a single entry (strips ## 参考リンク to avoid duplication with ## 公式ソース) */
function buildReference(entry: ContentEntry): string {
  const fm = entry.frontmatter;

  const lines: string[] = [`# ${fm.title}`, '', fm.summary, ''];

  // Strip ## 参考リンク section from body to avoid duplication with 公式ソース
  if (entry.body) {
    const body = entry.body.replace(/## 参考リンク[\s\S]*$/, '').trim();
    if (body) {
      lines.push(body);
      lines.push('');
    }
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

/** Generate plugin.json */
function buildPluginJson(): string {
  const plugin = {
    name: 'msbuild-2026',
    description:
      'Microsoft Build 2026 の発表情報・セッション・リソースを提供するスキルプラグイン',
    version: '0.1.0',
    author: { name: 'openjny' },
    license: 'CC-BY-4.0',
    skills: ['skills/msbuild-2026/'],
  };
  return JSON.stringify(plugin, null, 2) + '\n';
}

// --- Main ---

const entries = loadContentEntries();
const topics = loadTopics();

console.log(
  `[build-skills] ${entries.filter(shouldBuildSkills).length} entries for skills`,
);

// Clean generated references directory
cleanDir(path.join(SKILLS_DIR, 'msbuild-2026', 'references'));

// SKILL.md hub
writeFile(
  path.join(SKILLS_DIR, 'msbuild-2026', 'SKILL.md'),
  buildSkillHub(entries, topics),
);

// References
for (const entry of entries) {
  if (!shouldBuildSkills(entry)) continue;
  const outPath = path.join(
    SKILLS_DIR,
    'msbuild-2026',
    'references',
    entry.relativePath,
  );
  writeFile(outPath, buildReference(entry));
}

// plugin.json (at repo root for /plugin install compatibility)
writeFile(path.join(ROOT_DIR, 'plugin.json'), buildPluginJson());

console.log('[build-skills] Done');
