import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { toolSchema } from './lib/schema';

const tools = defineCollection({
  loader: glob({
    pattern: '**/[!_]*.md',
    base: './profiles',
  }),
  schema: toolSchema,
});

export const collections = { tools };
