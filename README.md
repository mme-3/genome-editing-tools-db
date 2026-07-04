# genome-editing-tools-db

A maintainable reference site for computational genome editing tools — guide RNA
design, off-target prediction, and (over time) every stage of a CRISPR experiment.

Built with [Astro](https://astro.build) content collections. Each tool is a single
Markdown file in [`profiles/`](profiles/); the site's search, filters, comparison
view, workflow explorer, and timeline are all generated from those files at build
time. See [`schema/tool-profile.schema.json`](schema/tool-profile.schema.json) for
the canonical field definitions.

## Adding a tool

See [CONTRIBUTING.md](CONTRIBUTING.md) — copy the template, fill in the
frontmatter, open a PR.

## Local development

```bash
npm install
npm run dev
```

Deploys automatically to GitHub Pages on push to `main`.
