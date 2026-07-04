---
id: crispor
name: CRISPOR
aka: []
category: Guide RNA Design
secondary_categories: [On-target Scoring, Off-target Prediction, Primer Design]
description: "CRISPOR finds guide RNAs in an input sequence and ranks them by a panel of published on-target and off-target scoring algorithms across a large and continuously expanding list of genomes. It goes beyond guide selection to cover cloning oligos, expression primers, off-target validation primers, and batch design for genome-wide and saturation screens. It is available both as a hosted web tool and as open standalone source, which makes it a common backend for other pipelines."
supported_editors: [Cas9, Cas12a, Base editing (CBE), Base editing (ABE)]
installation: "Web only for most users; standalone command-line via source from the CRISPOR repo."
web_interface: { available: true, url: "http://crispor.org", login_required: false }
license: "Open source"
platform: [Web, Command line, Python]
maintenance_status: Active
superseded_by: null
publication:
  title: "CRISPOR: intuitive guide selection for CRISPR/Cas9 genome editing experiments and screens"
  venue: "Nucleic Acids Research"
  year: 2018
  doi: "10.1093/nar/gky354"
  url: "https://academic.oup.com/nar/article/46/W1/W242/4995687"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "2016 and 2018 papers together are in the thousands; pull exact numbers at build time." }
github: { available: true, url: "https://github.com/maximilianh/crisporWebsite", stars: null, last_commit: null }
documentation: "http://crispor.org"
strengths:
  - "Aggregates many independent on-target and off-target scores in one view rather than committing to a single algorithm."
  - "Very broad genome coverage, including non-model organisms, which is where it originally filled a gap."
  - "End-to-end practical outputs: cloning oligos, primers for validation, and saturation and genome-wide batch design."
  - "Open standalone version means it can be scripted and embedded, and results are reproducible."
weaknesses:
  - "The multi-score table is information dense and can overwhelm first-time users who just want one recommendation."
  - "On-target models are largely pre-deep-learning era classics; it is a score aggregator, not a novel predictor."
  - "Web performance on very large batch jobs is slower than dedicated command-line indexers."
ideal_use_cases:
  - "Selecting and validating a small number of guides for a specific locus in almost any sequenced organism."
  - "Designing NGS or Sanger validation primers alongside the guide in one pass."
  - "Saturation mutagenesis and tiling screen design."
limitations:
  - "Not built for whole-genome library specificity indexing at the scale of GuideScan2 or FlashFry."
  - "Base and prime editing support is limited compared with purpose-built tools."
competing_tools: [chopchop, e-crisp, cas-designer, benchling]
related_tools: [cas-offinder, crispresso2]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Still a leading and arguably the default general-purpose web tool for locus-specific guide design as of 2025, especially where broad organism coverage matters. For genome-wide specificity indexing at scale it is complemented rather than replaced by GuideScan2 and FlashFry."
  as_of: "2026-07-03"
tags: [web-server, command-line, 150-plus-genomes, screen-design, de-facto-standard, saturation-mutagenesis]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication, DOIs, and repository confirmed via NAR and PMC. Citation count and latest commit date should be refreshed from Google Scholar and GitHub at build time. Base editor preset scope should be confirmed against the current live tool."
---

# CRISPOR

> Web and command-line guide RNA selection tool from Jean-Paul Concordet (MNHN, Paris) and Maximilian Haeussler (UC Santa Cruz).

## Example workflow

1. Paste a genomic sequence or coordinates and pick the target genome and enzyme.
2. Review the ranked guide table with per-guide on-target and off-target scores.
3. Choose a guide and copy the auto-generated cloning oligos.
4. Export the suggested validation primers for the predicted off-target sites.

## Notes

Interface figures are shown in the 2018 NAR paper (Figures 1 to 3) and on crispor.org, attributed to Concordet and Haeussler, NAR 2018. Widely cited as the guide design step across thousands of CRISPR method and screening papers.
