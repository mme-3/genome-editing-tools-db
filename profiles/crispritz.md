---
id: crispritz
name: CRISPRitz
aka: []
category: Off-target Prediction
secondary_categories: [Guide RNA Design, Visualization]
description: "CRISPRitz identifies candidate off-target sites at scale, supporting DNA and RNA bulges and mismatches of arbitrary user-specified size, and can incorporate genetic variants to build variant-aware search spaces. It produces graphical reports that annotate putative off-targets against functional genomic features such as ENCODE chromatin and insulator regions. It is the high-throughput enumeration engine that underpins the interactive CRISPRme workflow."
supported_editors: [Cas9, Cas12a]
installation: "conda (bioconda) or source."
web_interface: { available: false, url: null, login_required: null }
license: "Open source"
platform: [Command line, Python]
maintenance_status: Active
superseded_by: null
publication:
  title: "CRISPRitz: rapid, high-throughput and variant-aware in silico off-target site identification for CRISPR genome editing"
  venue: "Bioinformatics"
  year: 2020
  doi: "10.1093/bioinformatics/btz867"
  url: "https://academic.oup.com/bioinformatics/article/36/7/2001/5640496"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 200 to 400 (Google Scholar, as of 2026-07)." }
github: { available: true, url: "https://github.com/pinellolab/CRISPRitz", stars: null, last_commit: null }
documentation: "https://github.com/pinellolab/CRISPRitz"
strengths:
  - "Handles DNA and RNA bulges plus arbitrary mismatch counts, which many tools cannot."
  - "Variant-aware search space construction via an add-variants step."
  - "Fast and memory-conscious for genome-wide enumeration."
  - "Annotation overlays link off-targets to functional genomic context."
weaknesses:
  - "Command-line only; the friendly interface is the separate CRISPRme layer."
  - "Index construction and variant integration require setup."
ideal_use_cases:
  - "Genome-wide off-target enumeration where bulges and larger mismatch sets matter."
  - "Building the variant-aware search backend for a therapeutic assessment."
  - "High-throughput batch off-target analysis in a pipeline."
limitations:
  - "Enumeration and annotation focused; pair with a cleavage-likelihood score for ranking."
  - "Not a base or prime editing tool."
competing_tools: [cas-offinder, flashfry, guidescan2]
related_tools: [crisprme, cfd-score]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Leading high-throughput bulge-aware, variant-capable enumeration; typically paired with CRISPRme. Often used together with CRISPRme rather than in competition with it."
  as_of: "2026-07-03"
tags: [command-line, variant-aware, bulges, high-throughput, annotation-overlay, encode]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication, DOI, PMID, and repository confirmed via Bioinformatics and PMC. Confirm latest release and bioconda availability at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# CRISPRitz

> Fast, high-throughput, variant-aware in silico off-target search tool from the Pinello lab and University of Verona.

## Example workflow

1. Optionally run add-variants to build a variant-augmented reference.
2. Build the genome index with index-genome to enable bulge-aware search.
3. Run the search for a guide and PAM with chosen mismatch and bulge limits.
4. Generate annotated graphical reports of candidate off-targets.

## Notes

Report figures in the 2020 Bioinformatics paper, attributed to Cancellieri et al., Bioinformatics 2020. Used as the enumeration engine in CRISPRme analyses and cited in variant-aware off-target methodology.
