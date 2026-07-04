---
id: cfd-score
name: CFD Score (Cutting Frequency Determination)
aka: []
category: Off-target Prediction
secondary_categories: [On-target Scoring, Guide RNA Design]
description: "The CFD score estimates the likelihood that SpCas9 will cleave a given off-target site based on the identity and position of each mismatch between the guide and the site, using a mismatch penalty matrix derived from large empirical datasets. It is a scoring metric rather than a standalone application, and it is embedded in most modern design and off-target tools as the default per-site cleavage estimate. An aggregate form summarizes total off-target risk across sites for a guide."
supported_editors: [Cas9]
installation: "Delivered via Broad GPP resources and reimplemented across tools."
web_interface: { available: false, url: null, login_required: null }
license: "Academic"
platform: [Python, R]
maintenance_status: Active
superseded_by: null
publication:
  title: "Optimized sgRNA design to maximize activity and minimize off-target effects of CRISPR-Cas9"
  venue: "Nature Biotechnology"
  year: 2016
  doi: "10.1038/nbt.3437"
  url: "https://www.nature.com/articles/nbt.3437"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 3000 to 4500 (Google Scholar, as of 2026-07); same paper introduced Rule Set 2." }
github: { available: false, url: null, stars: null, last_commit: null }
documentation: "https://portals.broadinstitute.org/gpp/public/"
strengths:
  - "Position and identity aware mismatch model grounded in large empirical data."
  - "The de facto standard, so results are comparable across tools that use it."
  - "Simple to compute and embed."
weaknesses:
  - "Models mismatches only; the classic form does not handle bulges or indels well."
  - "SpCas9 specific; not calibrated for other nucleases or editors."
  - "A fixed 2016 model that does not learn from newer datasets."
ideal_use_cases:
  - "Ranking enumerated off-target sites by cleavage likelihood."
  - "Producing an aggregate specificity score to compare candidate guides."
limitations:
  - "Not variant aware and not bulge aware on its own."
  - "Inappropriate for Cas12a, base editors, or prime editors without recalibration."
competing_tools: [mit-specificity-score, elevation, crista]
related_tools: [cas-offinder, crispritz, gpp-sgrna-designer]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Default per-site mismatch scoring metric; ML scores and bulge-aware methods extend beyond it. Newer machine learning scores (Elevation, CRISTA) and bulge-aware methods extend beyond its assumptions."
  as_of: "2026-07-03"
tags: [scoring-metric, mismatch-model, broad, embedded-in-tools, de-facto-standard]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. There is no single canonical repository, so link to the host tool implementation at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# CFD Score (Cutting Frequency Determination)

> The dominant per-site off-target scoring metric, from the Doench and Root lab at the Broad Institute.

## Example workflow

1. Enumerate candidate off-target sites for a guide.
2. Compute the CFD score per site from the mismatch pattern.
3. Aggregate per-guide to compare specificity across candidate guides.

## Notes

Model and matrix figures appear in Doench et al., Nature Biotechnology 2016. Embedded in CRISPOR and CRISPRme and cited across the majority of specificity analyses since 2016.
