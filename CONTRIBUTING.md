# Contributing a tool

Every tool is a single Markdown file in [`profiles/`](profiles/). There is no
separate data file to update — the site's search index, filters, comparison
data, workflow explorer, and timeline are all generated from these files at
build time.

## Add a tool

1. Copy [`profiles/_TEMPLATE.md`](profiles/_TEMPLATE.md) to `profiles/<tool-id>.md`,
   where `<tool-id>` is a lowercase kebab-case slug (e.g. `crispor`, `cas-offinder`).
   This becomes the tool's permanent `id` — don't reuse or change it later.
2. Fill in the frontmatter. Every field is described in
   [`schema/tool-profile.schema.json`](schema/tool-profile.schema.json); the
   template lists them in the same order with inline hints.
3. Write the body: a one-line tagline, a numbered `## Example workflow`, and an
   optional `## Notes` section for anything that doesn't fit the schema
   (loose citation notes, screenshot attribution, a related tool that doesn't
   have its own profile yet).
4. Reference other tools by their `id` in `competing_tools`, `related_tools`,
   and `superseded_by`. If the id doesn't match an existing profile yet, that's
   fine — the build will print a warning (not an error) so it's easy to catch
   and fix later once that profile exists.
5. Run `npm run dev` and check the tool's page renders as expected, then open
   a PR.

That's it — one file, no other edits required for a typical addition.

## Adding a brand-new category

If your tool introduces a `category` that doesn't exist yet, add one line to
`src/lib/stageOrder.ts` mapping it to the workflow stage it belongs to
(Plan & Design, Build & Deliver, Edit, Validate & Analyze, or Manage & Report).
If you skip this, the tool still appears everywhere else on the site — it just
falls into an "Other" bucket on the Workflow page and prints a reminder
warning at build time.

## Local development

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build; validates every profile against the schema
```

The build fails if a profile doesn't match `schema/tool-profile.schema.json`
(enforced via the Zod schema in `src/lib/schema.ts` — keep the two in sync if
you change one). It does not fail on unresolved `competing_tools` /
`related_tools` / `superseded_by` ids — those print as console warnings during
`npm run build` (or `npm run dev`) so you can catch typos and tools that still
need a profile.
