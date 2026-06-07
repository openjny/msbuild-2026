/**
 * build-site.mts
 * Transforms content/ → site/ for VitePress.
 * Generates:
 *   - site/announcements/*.md
 *   - site/sessions/*.md
 *   - site/topics/{slug}.md (auto-aggregation)
 *   - site/tags/{slug}.md (auto-aggregation)
 *   - site/index.md (landing page)
 *   - site/.vitepress/nav.json (imported by config.ts)
 */

import path from 'node:path';
import {
  loadContentEntries,
  loadTopics,
  loadTags,
  loadAllowedDomains,
  cleanDir,
  writeFile,
} from './lib/content.mjs';
import { resolveDeliveries } from './lib/types.mjs';
import { validateAllEntries } from './lib/validate.mjs';
import type { ContentEntry, TopicDef, TagDef } from './lib/types.mjs';

const SITE_DIR = path.resolve(import.meta.dirname, '../site');

function shouldBuildSite(entry: ContentEntry): boolean {
  return resolveDeliveries(entry.frontmatter.deliveries).site;
}

/** Display title for sessions includes the uppercased ID prefix */
function displayTitle(entry: ContentEntry): string {
  if (entry.frontmatter.content_type === 'session') {
    return `${entry.frontmatter.id.toUpperCase()}: ${entry.frontmatter.title}`;
  }
  return entry.frontmatter.title;
}

/** Sort sessions: keynotes first, then by ID */
function sortSessions(sessions: ContentEntry[]): ContentEntry[] {
  return [...sessions].sort((a, b) => {
    const aKey = a.frontmatter.id.startsWith('key') ? 0 : 1;
    const bKey = b.frontmatter.id.startsWith('key') ? 0 : 1;
    if (aKey !== bKey) return aKey - bKey;
    return a.frontmatter.id.localeCompare(b.frontmatter.id);
  });
}

/** Format tags as inline badge links */
function formatTags(entry: ContentEntry, tags: TagDef[]): string {
  return entry.frontmatter.tags
    .map((slug) => {
      const tag = tags.find((t) => t.slug === slug);
      const name = tag ? tag.name : slug;
      return `[\`${name}\`](/tags/${slug})`;
    })
    .join(' ');
}

/** Convert a content entry to a VitePress-compatible markdown page */
function buildPage(entry: ContentEntry): string {
  const fm = entry.frontmatter;
  const title = displayTitle(entry);
  const escYaml = (s: string) => s.replace(/"/g, '\\"').replace(/\n/g, ' ');
  const vpFrontmatter = [
    '---',
    `title: "${escYaml(title)}"`,
    `description: "${escYaml(fm.summary)}"`,
    '---',
  ].join('\n');

  const tagLine = formatTags(entry, tags);
  return `${vpFrontmatter}\n\n# ${title}\n\n${tagLine}\n\n${entry.body}\n`;
}

/** Generate a topic aggregation page */
function buildTopicPage(topic: TopicDef, entries: ContentEntry[]): string {
  const matching = entries.filter(
    (e) => e.frontmatter.topic === topic.slug && shouldBuildSite(e),
  );
  const announcements = matching.filter((e) => e.frontmatter.content_type === 'announcement');
  const sessions = sortSessions(matching.filter((e) => e.frontmatter.content_type === 'session'));

  const lines = [
    '---',
    `title: "${topic.name}"`,
    `description: "Microsoft Build 2026 — ${topic.name} 関連のコンテンツ一覧"`,
    '---',
    '',
    `# ${topic.name}`,
    '',
    `Microsoft Build 2026 の ${topic.name} に関連するコンテンツ。`,
    '',
  ];

  if (matching.length === 0) {
    lines.push('*まだコンテンツが登録されていません。*');
  }

  if (announcements.length > 0) {
    lines.push('## 📢 アナウンス');
    lines.push('');
    for (const e of announcements) {
      const link = `/${e.relativePath.replace(/\.md$/, '')}`;
      lines.push(`### [${e.frontmatter.title}](${link})`);
      lines.push('');
      lines.push(e.frontmatter.summary);
      lines.push('');
    }
  }

  if (sessions.length > 0) {
    lines.push('## 🎤 セッション');
    lines.push('');
    for (const e of sessions) {
      const link = `/${e.relativePath.replace(/\.md$/, '')}`;
      lines.push(`### [${displayTitle(e)}](${link})`);
      lines.push('');
      lines.push(e.frontmatter.summary);
      lines.push('');
    }
  }

  return lines.join('\n');
}

/** Generate a tag aggregation page */
function buildTagPage(tag: TagDef, entries: ContentEntry[]): string {
  const matching = entries.filter(
    (e) => e.frontmatter.tags.includes(tag.slug) && shouldBuildSite(e),
  );

  const lines = [
    '---',
    `title: "${tag.name}"`,
    `description: "Microsoft Build 2026 — ${tag.name} 関連のコンテンツ一覧"`,
    '---',
    '',
    `# ${tag.name}`,
    '',
    `${tag.name} に関連する Microsoft Build 2026 コンテンツ。`,
    '',
  ];

  const announcements = matching.filter((e) => e.frontmatter.content_type === 'announcement');
  const sessions = sortSessions(matching.filter((e) => e.frontmatter.content_type === 'session'));

  if (matching.length === 0) {
    lines.push('*まだコンテンツが登録されていません。*');
  }

  if (announcements.length > 0) {
    lines.push('## 📢 アナウンス');
    lines.push('');
    for (const e of announcements) {
      const link = `/${e.relativePath.replace(/\.md$/, '')}`;
      lines.push(
        `- [${e.frontmatter.title}](${link}) — ${e.frontmatter.summary.split('\n')[0]}`,
      );
    }
    lines.push('');
  }

  if (sessions.length > 0) {
    lines.push('## 🎤 セッション');
    lines.push('');
    for (const e of sessions) {
      const link = `/${e.relativePath.replace(/\.md$/, '')}`;
      lines.push(
        `- [${displayTitle(e)}](${link}) — ${e.frontmatter.summary.split('\n')[0]}`,
      );
    }
    lines.push('');
  }

  return lines.join('\n');
}

/** Generate the landing page */
function buildIndexPage(entries: ContentEntry[], topics: TopicDef[]): string {
  const siteEntries = entries.filter(shouldBuildSite);
  const announcements = siteEntries.filter(
    (e) => e.frontmatter.content_type === 'announcement',
  );
  const sessions = sortSessions(siteEntries.filter(
    (e) => e.frontmatter.content_type === 'session',
  ));

  const lines = [
    '---',
    'layout: home',
    'hero:',
    '  name: Microsoft Build 2026',
    '  text: Info Hub',
    '  tagline: アナウンス・セッション・リソースを日本語で集約',
    '  actions:',
    '    - theme: brand',
    '      text: アナウンス一覧',
    '      link: /announcements/',
    '    - theme: alt',
    '      text: セッション一覧',
    '      link: /sessions/',
    '---',
    '',
    '## トピック別',
    '',
  ];

  for (const topic of topics) {
    const count = siteEntries.filter(
      (e) => e.frontmatter.topic === topic.slug,
    ).length;
    if (count > 0) {
      lines.push(`- [${topic.name}](/topics/${topic.slug}) (${count}件)`);
    }
  }

  lines.push('');
  lines.push('## 最新アナウンス');
  lines.push('');

  for (const e of announcements.slice(0, 10)) {
    const link = `/${e.relativePath.replace(/\.md$/, '')}`;
    lines.push(`- [${e.frontmatter.title}](${link})`);
  }

  lines.push('');
  lines.push('## セッション');
  lines.push('');

  for (const e of sessions.slice(0, 10)) {
    const link = `/${e.relativePath.replace(/\.md$/, '')}`;
    lines.push(`- [${displayTitle(e)}](${link})`);
  }

  if (sessions.length > 10) {
    lines.push('');
    lines.push(`[…全${sessions.length}件を見る](/sessions/)`);
  }

  lines.push('');
  return lines.join('\n');
}

/** Generate nav.json for config.ts to import */
function buildNavJson(entries: ContentEntry[], topics: TopicDef[]) {
  const siteEntries = entries.filter(shouldBuildSite);

  const topicItems = topics
    .filter((t) => siteEntries.some((e) => e.frontmatter.topic === t.slug))
    .map((t) => ({ text: t.name, link: `/topics/${t.slug}` }));

  const nav = [
    { text: 'ホーム', link: '/' },
    {
      text: 'トピック',
      items: topicItems,
    },
    { text: 'アナウンス', link: '/announcements/' },
    { text: 'セッション', link: '/sessions/' },
    { text: 'タグ', link: '/tags/' },
  ];

  const sidebar: Record<
    string,
    { text: string; items: { text: string; link: string }[] }[]
  > = {};

  // Announcements sidebar
  const announcements = siteEntries.filter(
    (e) => e.frontmatter.content_type === 'announcement',
  );
  sidebar['/announcements/'] = [
    {
      text: 'アナウンス',
      items: announcements.map((e) => ({
        text: e.frontmatter.title,
        link: `/${e.relativePath.replace(/\.md$/, '')}`,
      })),
    },
  ];

  // Sessions sidebar
  const sessions = sortSessions(siteEntries.filter(
    (e) => e.frontmatter.content_type === 'session',
  ));
  sidebar['/sessions/'] = [
    {
      text: 'セッション',
      items: sessions.map((e) => ({
        text: displayTitle(e),
        link: `/${e.relativePath.replace(/\.md$/, '')}`,
      })),
    },
  ];

  return { nav, sidebar };
}

// --- Main ---

const entries = loadContentEntries();
const topics = loadTopics();
const tags = loadTags();
const allowedDomains = loadAllowedDomains();

// Validate all entries before building
validateAllEntries(entries, tags, topics, allowedDomains);

console.log(`[build-site] ${entries.length} content entries loaded`);

// Clean generated directories
for (const subdir of [
  'announcements',
  'sessions',
  'resources',
  'topics',
  'tags',
]) {
  cleanDir(path.join(SITE_DIR, subdir));
}

// 1. Individual pages
for (const entry of entries) {
  if (!shouldBuildSite(entry)) continue;
  const outPath = path.join(SITE_DIR, entry.relativePath);
  writeFile(outPath, buildPage(entry));
}

// 2. Topic aggregation pages
for (const topic of topics) {
  const outPath = path.join(SITE_DIR, 'topics', `${topic.slug}.md`);
  writeFile(outPath, buildTopicPage(topic, entries));
}

// 3. Tag aggregation pages (only for tags that have content)
for (const tag of tags) {
  const hasContent = entries.some(
    (e) => e.frontmatter.tags.includes(tag.slug) && shouldBuildSite(e),
  );
  if (hasContent) {
    const outPath = path.join(SITE_DIR, 'tags', `${tag.slug}.md`);
    writeFile(outPath, buildTagPage(tag, entries));
  }
}

// 4. Index page
writeFile(path.join(SITE_DIR, 'index.md'), buildIndexPage(entries, topics));

// 5. Announcements index
const announcementEntries = entries.filter(
  (e) => e.frontmatter.content_type === 'announcement' && shouldBuildSite(e),
);
const announcementsIndex = [
  '---',
  'title: アナウンス一覧',
  '---',
  '',
  '# アナウンス一覧',
  '',
  ...announcementEntries.map((e) => {
    const link = `/${e.relativePath.replace(/\.md$/, '')}`;
    const tagLine = formatTags(e, tags);
    return `## [${e.frontmatter.title}](${link})\n\n${tagLine}\n\n${e.frontmatter.summary}\n`;
  }),
].join('\n');
writeFile(path.join(SITE_DIR, 'announcements', 'index.md'), announcementsIndex);

// 6. Sessions index
const sessionEntries = sortSessions(entries.filter(
  (e) => e.frontmatter.content_type === 'session' && shouldBuildSite(e),
));
const sessionsIndex = [
  '---',
  'title: セッション一覧',
  '---',
  '',
  '# セッション一覧',
  '',
  ...sessionEntries.map((e) => {
    const link = `/${e.relativePath.replace(/\.md$/, '')}`;
    const tagLine = formatTags(e, tags);
    return `## [${displayTitle(e)}](${link})\n\n${tagLine}\n\n${e.frontmatter.summary}\n`;
  }),
].join('\n');
writeFile(path.join(SITE_DIR, 'sessions', 'index.md'), sessionsIndex);

// 7. Tags index
const tagsWithContent = tags.filter((tag) =>
  entries.some((e) => e.frontmatter.tags.includes(tag.slug) && shouldBuildSite(e)),
);
const tagsIndex = [
  '---',
  'title: タグ一覧',
  '---',
  '',
  '# タグ一覧',
  '',
  ...tagsWithContent.map((tag) => {
    const count = entries.filter(
      (e) => e.frontmatter.tags.includes(tag.slug) && shouldBuildSite(e),
    ).length;
    return `- [${tag.name}](/tags/${tag.slug}) (${count}件)`;
  }),
  '',
].join('\n');
writeFile(path.join(SITE_DIR, 'tags', 'index.md'), tagsIndex);

// 8. Nav JSON
const navData = buildNavJson(entries, topics);
writeFile(
  path.join(SITE_DIR, '.vitepress', 'nav.json'),
  JSON.stringify(navData, null, 2) + '\n',
);

console.log('[build-site] Done');
