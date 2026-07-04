---
id: wge
name: WGE (Wellcome Sanger)
aka: [Wellcome Genome Editing]
category: Guide RNA Design
secondary_categories: [Off-target Prediction]
description: "WGE is the Wellcome Sanger Institute's Genome Editing web resource for finding and scoring guides, with precomputed off-targets in human and mouse."
supported_editors: [Cas9]
installation: "Web only."
web_interface: { available: true, url: "https://wge.stemcell.sanger.ac.uk/", login_required: false }
license: "Academic"
platform: [Web]
maintenance_status: Legacy
superseded_by: null
publication:
  title: "WGE: a CRISPR database for genome engineering"
  venue: "Bioinformatics"
  year: 2015
  doi: "10.1093/bioinformatics/btv308"
  url: "https://academic.oup.com/bioinformatics/article/31/18/3078/240467"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "Not yet pulled." }
github: { available: true, url: "https://github.com/htgt/WGE", stars: null, last_commit: null }
documentation: null
strengths: []
weaknesses: []
ideal_use_cases: []
limitations: []
competing_tools: [crispor, guidescan2]
related_tools: [cas-offinder]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: null
  rationale: null
  as_of: "2026-07-03"
tags: [web-server, sanger, precomputed-off-targets, mouse, human]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Stub profile created from compact JSON record during data migration; still needs a full pass for strengths, weaknesses, ideal use cases, limitations, and a real state-of-the-art assessment."
---

# WGE (Wellcome Sanger)

> Wellcome Sanger Institute's Genome Editing database of guides and precomputed off-targets, limited to human and mouse.

## Example workflow

1. Search a gene or region in human or mouse.
2. Retrieve guides with precomputed off-target counts and choose paired guides for larger deletions.

## Notes

Needs a full profile pass: strengths/weaknesses and current maintenance activity should be verified against the live tool and GitHub repository.
