import type { CollectionEntry } from 'astro:content';

/**
 * Cross-checks competing_tools / related_tools / superseded_by against the
 * actual set of tool ids in the collection. Unresolved ids are expected to
 * happen (e.g. a tool mentions a competitor that doesn't have a profile yet)
 * and should surface as a build warning rather than fail the build.
 */
export function findBrokenLinks(tools: CollectionEntry<'tools'>[]): string[] {
  const ids = new Set(tools.map((t) => t.data.id));
  const warnings: string[] = [];

  for (const t of tools) {
    for (const ref of t.data.competing_tools) {
      if (!ids.has(ref)) {
        warnings.push(`${t.data.id}: competing_tools references unknown id "${ref}"`);
      }
    }
    for (const ref of t.data.related_tools) {
      if (!ids.has(ref)) {
        warnings.push(`${t.data.id}: related_tools references unknown id "${ref}"`);
      }
    }
    if (t.data.superseded_by && !ids.has(t.data.superseded_by)) {
      warnings.push(`${t.data.id}: superseded_by references unknown id "${t.data.superseded_by}"`);
    }
  }

  return warnings;
}

export function warnBrokenLinks(tools: CollectionEntry<'tools'>[]): string[] {
  const warnings = findBrokenLinks(tools);
  for (const warning of warnings) {
    console.warn(`[tool-links] ${warning}`);
  }
  return warnings;
}
