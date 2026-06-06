/** Frontmatter schema shared across all build scripts */

export type ContentType = 'announcement' | 'session' | 'resource';

export interface Deliveries {
  site: boolean;
  llms: boolean;
  skills: boolean;
}

export interface Frontmatter {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  content_type: ContentType;
  topic: string;
  official_sources: string[];
  deliveries?: Deliveries;
}

export interface ContentEntry {
  frontmatter: Frontmatter;
  body: string;
  /** Relative path from content/ root, e.g. "announcements/github-copilot-agent-mode.md" */
  relativePath: string;
}

export interface TopicDef {
  slug: string;
  name: string;
}

export interface TagDef {
  slug: string;
  name: string;
  aka: string[];
}

export interface BuildInfo {
  event: string;
  year: number;
  site_base: string;
  dates: { start: string; end: string };
  location: string;
  timezone: string;
  urls: Record<string, string>;
}

export const DEFAULT_DELIVERIES: Deliveries = {
  site: true,
  llms: true,
  skills: true,
};
