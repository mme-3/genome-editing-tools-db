---
id: elevation
name: Elevation
aka: []
category: Off-target Prediction
secondary_categories: [On-target Scoring]
description: "Elevation predicts guide off-target effects with a two-layer machine learning approach: one model scores individual guide-to-off-target mismatches, and a second model aggregates those per-site predictions into a single guide-level off-target summary. It was trained on large mismatch activity datasets and framed as the specificity counterpart to the Azimuth on-target predictor. It was released as a web service and open-source code."
supported_editors: [Cas9]
installation: "Python source from repository."
web_interface: { available: true, url: null, login_required: false }
license: "Open source"
platform: [Python, Web]
maintenance_status: Legacy
superseded_by: null
publication:
  title: "Prediction of off-target activities for the end-to-end design of CRISPR guide RNAs"
  venue: "Nature Biomedical Engineering"
  year: 2018
  doi: "10.1038/s41551-017-0178-6"
  url: "https://www.nature.com/articles/s41551-017-0178-6"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 250 to 450 (Google Scholar, as of 2026-07)." }
github: { available: true, url: "https://github.com/microsoft/Elevation", stars: null, last_commit: null }
documentation: "https://github.com/microsoft/Elevation"
strengths:
  - "Learns mismatch effects from data rather than fixed penalties, improving on heuristic scores in its benchmarks."
  - "Two-layer design produces both per-site and aggregate guide-level predictions."
  - "Pairs cleanly with the Azimuth on-target model for end-to-end design."
weaknesses:
  - "Development activity has slowed; it reflects its 2018 training data."
  - "Hosting has shifted over time, so the web service may not be reliably available."
  - "SpCas9 focused."
ideal_use_cases:
  - "Machine learning based off-target ranking when a learned model is preferred over CFD."
  - "End-to-end guide design paired with Azimuth for on-target scoring."
limitations:
  - "Not variant or bulge aware."
  - "Not maintained as actively as newer specificity tooling."
competing_tools: [cfd-score, crista]
related_tools: [cas-offinder]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: null
  rationale: "Was a leading learned specificity model; activity slowed and variant-aware methods now lead for therapeutic use. It was a leading learned specificity model and remains a reasonable choice, but activity has slowed."
  as_of: "2026-07-03"
tags: [machine-learning, two-layer-model, aggregate-score, microsoft-research, web-server]
ai_enabled: true
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. Confirm current web service availability and latest commit at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# Elevation

> Machine learning off-target prediction system from Microsoft Research (Listgarten, Fusi and colleagues), a companion to the Azimuth on-target model.

## Example workflow

1. Enumerate candidate off-targets for a guide.
2. Score each site with the mismatch model.
3. Aggregate to a guide-level off-target summary for ranking.

## Notes

Model schematic and benchmarks in Listgarten et al., Nature Biomedical Engineering 2018. Cited in machine learning specificity benchmarking and end-to-end design discussions. Pairs with the Azimuth on-target model from the same group (no standalone profile yet).
