import { z } from 'astro/zod';

// Mirrors schema/tool-profile.schema.json. Keep the two in sync when either changes.

export const editorEnum = z.enum([
  'Cas9',
  'Cas12a',
  'Cas12 (other)',
  'Cas13',
  'Base editing (CBE)',
  'Base editing (ABE)',
  'Prime editing',
  'CRISPRa',
  'CRISPRi',
  'Epigenome editing',
  'RNA editing',
  'TALEN',
  'ZFN',
  'Modality-agnostic',
]);

export const platformEnum = z.enum([
  'Web',
  'Linux',
  'macOS',
  'Windows',
  'Python',
  'R',
  'Java',
  'Command line',
  'Cloud',
  'API',
  'Desktop GUI',
]);

export const maintenanceStatusEnum = z.enum([
  'Active',
  'Legacy',
  'Superseded',
  'Experimental',
  'Abandoned',
  'Unknown',
]);

const webInterfaceSchema = z.object({
  available: z.boolean(),
  url: z.string().nullable().optional(),
  login_required: z.boolean().nullable().optional(),
});

const publicationSchema = z.object({
  title: z.string().nullable().optional(),
  venue: z.string().nullable().optional(),
  year: z.number().int().nullable().optional(),
  doi: z.string().nullable().optional(),
  url: z.string().nullable().optional(),
});

const citationsSchema = z.object({
  count: z.number().int().nullable().optional(),
  source: z.string().optional(),
  as_of: z.string().nullable().optional(),
  note: z.string().optional(),
});

const githubSchema = z.object({
  available: z.boolean(),
  url: z.string().nullable().optional(),
  stars: z.number().int().nullable().optional(),
  last_commit: z.string().nullable().optional(),
});

const screenshotSchema = z.object({
  url: z.string(),
  caption: z.string().optional(),
  source: z.string().optional(),
});

const notablePublicationSchema = z.object({
  citation: z.string(),
  doi: z.string().nullable().optional(),
});

const stateOfTheArtSchema = z.object({
  is_sota: z.boolean().nullable().optional(),
  rationale: z.string().nullable().optional(),
  as_of: z.string().nullable().optional(),
});

export const toolSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
  name: z.string(),
  aka: z.array(z.string()).default([]),
  category: z.string(),
  secondary_categories: z.array(z.string()).default([]),
  description: z.string(),
  supported_editors: z.array(editorEnum).default([]),
  installation: z.string().nullable().optional(),
  web_interface: webInterfaceSchema.optional(),
  license: z.string().nullable().optional(),
  platform: z.array(platformEnum).default([]),
  maintenance_status: maintenanceStatusEnum,
  superseded_by: z.string().nullable().optional(),
  publication: publicationSchema.optional(),
  citations: citationsSchema.optional(),
  github: githubSchema.optional(),
  documentation: z.string().nullable().optional(),
  strengths: z.array(z.string()).default([]),
  weaknesses: z.array(z.string()).default([]),
  ideal_use_cases: z.array(z.string()).default([]),
  limitations: z.array(z.string()).default([]),
  competing_tools: z.array(z.string()).default([]),
  related_tools: z.array(z.string()).default([]),
  screenshots: z.array(screenshotSchema).default([]),
  notable_publications_using: z.array(notablePublicationSchema).default([]),
  last_known_update: z.string().nullable().optional(),
  state_of_the_art: stateOfTheArtSchema.optional(),
  tags: z.array(z.string()).default([]),
  ai_enabled: z.boolean().default(false),
  verified_on: z.string(),
  verification_notes: z.string().optional(),
});

export type Tool = z.infer<typeof toolSchema>;
