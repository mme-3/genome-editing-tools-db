---
id: guidescan2
name: GuideScan2
aka: []
category: Guide RNA Design
secondary_categories: [Off-target Prediction, CRISPR Screen Design, Multiplex Optimization]
description: "GuideScan2 builds high-specificity guide RNA databases across whole genomes using a Burrows-Wheeler transform index and a reverse-prefix trie traversal that makes exhaustive off-target enumeration fast and parallelizable. It supports design and analysis of individual guides, guide libraries, coding and non-coding targeting, and allele-specific guides in hybrid genomes. The paper also demonstrated that low-specificity guides create widespread confounding effects in published screens, and used GuideScan2 to build cleaner libraries."
supported_editors: [Cas9, Cas12a]
installation: "pip and source; web for interactive queries."
web_interface: { available: true, url: "https://guidescan.com", login_required: false }
license: "Open source"
platform: [Command line, Python, Web]
maintenance_status: Active
superseded_by: null
publication:
  title: "Genome-wide CRISPR guide RNA design and specificity analysis with GuideScan2"
  venue: "Genome Biology"
  year: 2025
  doi: "10.1186/s13059-025-03488-8"
  url: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03488-8"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "Predecessor GuideScan highly cited; v2 accumulating since 2025." }
github: { available: true, url: "https://github.com/pritykinlab/guidescan-cli", stars: null, last_commit: null }
documentation: "https://guidescan.com"
strengths:
  - "Exhaustive, memory-efficient off-target enumeration that scales to whole genomes and custom genomes."
  - "Directly addresses guide specificity as a confounder in screens, with library construction guidance."
  - "Supports allele-specific design in hybrid genomes, a niche few tools handle."
  - "Both a queryable database and a design tool."
weaknesses:
  - "More computational and less point-and-click than CRISPOR or CHOPCHOP for a single quick guide."
  - "Building custom genome indexes requires setup and resources."
ideal_use_cases:
  - "Designing genome-wide or focused CRISPR screen libraries with strict specificity control."
  - "Allele-specific editing design in hybrid or highly polymorphic genomes."
  - "Auditing an existing library for low-specificity guides."
limitations:
  - "Focused on nuclease guide specificity; not a base or prime editing design tool."
  - "Custom genomes require index construction rather than instant web lookup."
competing_tools: [flashfry, crispritz, crispor]
related_tools: [cas-offinder, mageck]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Current reference for genome-wide specificity and screen library design; benchmarked against CRISPRitz and FlashFry for off-target enumeration speed and memory."
  as_of: "2026-07-03"
tags: [genome-wide, specificity-database, allele-specific, bwt-index]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication, venue, and DOI confirmed via Genome Biology. Confirm the canonical repository and web URLs and latest commit at build time. Editors beyond Cas9 and Cas12a should be checked against current docs."
---

# GuideScan2

> Successor to GuideScan for memory-efficient, genome-wide high-specificity guide design, from the Leslie lab and collaborators (MSKCC).

## Example workflow

1. Choose or build a genome index.
2. Query a region or gene set to retrieve guides with precomputed specificity scores.
3. Filter to high-specificity guides and assemble a library.
4. Feed the library into a pooled screen and analyze hits downstream.

## Notes

Figures in the 2025 Genome Biology paper illustrate the index, specificity analysis, and allele-specific design (Figures 1 to 5), attributed to Schmidt et al., Genome Biology 2025. Predecessor: Perez AR et al., GuideScan software for improved single and paired CRISPR guide RNA design, Nature Biotechnology, 2017, 35:347-349. The GuideScan2 paper itself reanalyzes multiple published screens; downstream adoption is growing since 2025.
