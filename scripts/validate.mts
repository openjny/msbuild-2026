#!/usr/bin/env tsx
/**
 * validate.mts
 * Standalone validation runner. Exits with code 1 on any validation error.
 * Used by pre-commit hook and CI.
 *
 * Flags:
 *   --check-links  Also check that reference links return 2XX/3XX (slow, network-dependent)
 */

import {
  loadContentEntries,
  loadTags,
  loadTopics,
  loadAllowedDomains,
} from './lib/content.mjs';
import { validateAllEntries, checkLinksLiveness, checkCrossLinks } from './lib/validate.mjs';

const checkLinks = process.argv.includes('--check-links');

const entries = loadContentEntries();
const tags = loadTags();
const topics = loadTopics();
const domains = loadAllowedDomains();

try {
  const warnings = validateAllEntries(entries, tags, topics, domains);
  if (warnings.length > 0) {
    console.warn(`[validate] ${warnings.length} body-depth warnings:`);
    for (const w of warnings) {
      console.warn(`  ⚠ ${w}`);
    }
  }
  console.log(`[validate] ${entries.length} entries — frontmatter OK`);

  // Cross-link validation (always runs, fast)
  const crossLinkErrors = checkCrossLinks(entries);
  if (crossLinkErrors.length > 0) {
    console.error(`[validate] ${crossLinkErrors.length} dead cross-link(s):`);
    for (const e of crossLinkErrors) {
      console.error(`  ✗ ${e}`);
    }
    process.exit(1);
  }

  if (checkLinks) {
    console.log('[validate] Checking reference link liveness...');
    const linkWarnings = await checkLinksLiveness(entries);
    if (linkWarnings.length > 0) {
      console.warn(`[validate] ${linkWarnings.length} dead links:`);
      for (const w of linkWarnings) {
        console.warn(`  ⚠ ${w}`);
      }
    } else {
      console.log('[validate] All reference links alive');
    }
  }
} catch (err: unknown) {
  console.error((err as Error).message);
  process.exit(1);
}
