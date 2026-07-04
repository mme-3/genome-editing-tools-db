---
id: crispr-hawk
name: CRISPR-HAWK
aka: []
category: Off-target Prediction
secondary_categories: [Guide RNA Design]
description: "CRISPR-HAWK is a variant- and haplotype-aware CRISPR guide design toolkit from the Pinello lab that can call CRISPRitz for off-target estimation; a newer entrant to watch."
supported_editors: [Cas9, Cas12a]
installation: "conda or source; optional CRISPRitz dependency for off-target estimation."
web_interface: { available: false, url: null, login_required: null }
license: "Open source"
platform: [Command line, Python]
maintenance_status: Experimental
superseded_by: null
publication:
  title: null
  venue: null
  year: null
  doi: null
  url: "https://github.com/pinellolab/CRISPR-HAWK"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "Preprint/repository stage; verify primary publication at build time." }
github: { available: true, url: "https://github.com/pinellolab/CRISPR-HAWK", stars: null, last_commit: null }
documentation: null
strengths: []
weaknesses: []
ideal_use_cases: []
limitations: []
competing_tools: [crisprme, crispritz]
related_tools: [crispritz]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: null
  rationale: null
  as_of: "2026-07-03"
tags: [variant-aware, haplotype-aware, newer, to-watch]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Stub profile created from compact JSON record during data migration. No primary publication was found at time of writing (repository/preprint stage) — confirm and add strengths, weaknesses, ideal use cases, limitations, and a real state-of-the-art assessment once a citable paper exists."
---

# CRISPR-HAWK

> Newer variant- and haplotype-aware guide design toolkit from the Pinello lab, from the same group behind CRISPRme and CRISPRitz.

## Example workflow

1. Provide a genome, guide, and variant/haplotype data.
2. Optionally call CRISPRitz for off-target estimation on the variant-aware search space.

## Notes

Same lab as [CRISPRme](crisprme.md) and [CRISPRitz](crispritz.md). Still an early-stage entrant; needs a full profile pass once a primary publication is available.
