import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { warnBrokenLinks } from '../lib/links';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('tools');
  warnBrokenLinks(entries);

  const tools = entries
    .map((entry) => ({ slug: entry.id, ...entry.data }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return new Response(JSON.stringify(tools), {
    headers: { 'Content-Type': 'application/json' },
  });
};
