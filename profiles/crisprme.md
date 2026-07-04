---
id: crisprme
name: CRISPRme
aka: []
category: Off-target Prediction
secondary_categories: [Databases, Therapeutic Design]
description: "CRISPRme nominates and prioritizes off-target sites while accounting for human genetic variation, integrating single-nucleotide variants, indels, and bona fide haplotypes from population datasets alongside orthogonal genomic annotations. Its central finding is that common variants can create or strengthen off-target sites that a reference-only search misses, which matters directly for clinical editing. It supports population-wide and personal-genome analyses and allows mismatches and DNA or RNA bulges."
supported_editors: [Cas9, Cas12a]
installation: "Docker image pinellolab/crisprme; large reference dataset (~410 GB full setup, chromosome-scoped setup available for testing)."
web_interface: { available: true, url: "https://pinellolab.github.io/CRISPRme/", login_required: false }
license: "AGPL-3.0"
platform: [Command line, Python, Cloud, Web]
maintenance_status: Active
superseded_by: null
publication:
  title: "Human genetic diversity alters off-target outcomes of therapeutic gene editing"
  venue: "Nature Genetics"
  year: 2023
  doi: "10.1038/s41588-022-01257-y"
  url: "https://www.nature.com/articles/s41588-022-01257-y"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 250 to 450 (Google Scholar, as of 2026-07). Growing quickly given therapeutic relevance." }
github: { available: true, url: "https://github.com/pinellolab/CRISPRme", stars: null, last_commit: null }
documentation: "https://pinellolab.github.io/CRISPRme/"
strengths:
  - "Variant and haplotype aware, so it surfaces ancestry-dependent off-targets a reference search cannot see."
  - "Directly framed for therapeutic risk assessment, with genomic annotation overlays."
  - "Handles both population-scale and personal genomes."
  - "Open source with a reproducible Docker workflow and a validation module against brute-force ground truth."
weaknesses:
  - "Heavy resource footprint; the full variant dataset download is very large."
  - "Setup is more involved than a hosted web tool now that the public server is retired."
  - "AGPL and academic-only license restricts commercial use without a separate agreement."
ideal_use_cases:
  - "Off-target risk assessment for therapeutic guides where population variation matters."
  - "Checking clinically relevant loci for variant-created off-targets."
  - "Personal-genome off-target analysis."
limitations:
  - "Not a lightweight quick-lookup tool; expect infrastructure setup."
  - "Focused on nuclease off-target nomination, not base or prime editor design."
competing_tools: [crispritz, cas-offinder]
related_tools: [crispor, crispresso2]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Reference for variant-aware, therapeutically oriented off-target nomination; unique combination of haplotypes, annotations, and bulge-aware search. No other widely used tool combines population haplotypes, annotations, and bulge-aware search at this scale."
  as_of: "2026-07-03"
tags: [variant-aware, population-genetics, allele-specific, docker, command-line, therapeutic, agpl]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication, DOI, PMID, license, and repository confirmed via Nature Genetics and the project GitHub. Confirm the latest release tag and current dataset size at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# CRISPRme

> Variant-aware, population-scale off-target nomination tool from the Pinello and Bauer labs, built for therapeutic risk assessment.

## Example workflow

1. Set up the reference and variant datasets via Docker (optionally chromosome-scoped for a test run).
2. Provide the guide and PAM and run a variant-aware search allowing mismatches and bulges.
3. Review nominated off-targets ranked with CFD and annotated by genomic context and population frequency.
4. Prioritize sites for empirical validation in relevant genotypes.

## Notes

Figures in the 2023 Nature Genetics paper (Figures 1 to 4 and Extended Data), attributed to Cancellieri et al., Nature Genetics 2023. Cited in therapeutic editing safety assessments and referenced in FDA-facing discussions of variant-aware off-target evaluation; relevant to Casgevy-adjacent BCL11A work from the same group.
