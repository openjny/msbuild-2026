import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type {
  ContentEntry,
  Frontmatter,
  TopicDef,
  TagDef,
  BuildInfo,
} from './types.mjs';

const CONTENT_DIR = path.resolve(import.meta.dirname, '../../content');

export function loadContentEntries(): ContentEntry[] {
  const entries: ContentEntry[] = [];
  const subdirs = ['announcements', 'sessions', 'resources'];

  for (const subdir of subdirs) {
    const dir = path.join(CONTENT_DIR, subdir);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      entries.push({
        frontmatter: data as Frontmatter,
        body: content.trim(),
        relativePath: `${subdir}/${file}`,
      });
    }
  }

  return entries;
}

export function loadTopics(): TopicDef[] {
  return JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, 'topics.json'), 'utf-8'),
  );
}

export function loadTags(): TagDef[] {
  return JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, 'tags.json'), 'utf-8'),
  );
}

export function loadBuildInfo(): BuildInfo {
  return JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, 'build-info.json'), 'utf-8'),
  );
}

export function loadAllowedDomains(): string[] {
  return JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, 'allowed-domains.json'), 'utf-8'),
  );
}

export function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

/**
 * Remove all contents of a directory (but keep the directory itself).
 * No-op if the directory does not exist.
 */
export function cleanDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
}

export function writeFile(filePath: string, content: string): void {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf-8');
}
