---
id: crista
name: CRISTA
aka: []
category: Off-target Prediction
secondary_categories: [On-target Scoring]
description: "CRISTA (CRISPR Target Assessment) uses a regression machine learning model to predict how strongly SpCas9 will cleave a given genomic site for a given guide, learning from features of the guide, target, and their pairing rather than relying on a fixed mismatch penalty. It frames off-target assessment as predicting cleavage efficiency at any site, including the intended target. It was distributed as a web server."
supported_editors: [Cas9]
installation: "Python code accompanying the paper."
web_interface: { available: true, url: "http://crista.tau.ac.il", login_required: false }
license: "Academic"
platform: [Web, Python]
maintenance_status: Legacy
superseded_by: null
publication:
  title: "A machine learning approach for predicting CRISPR-Cas9 cleavage efficiencies and patterns underlying its mechanism of action"
  venue: "PLOS Computational Biology"
  year: 2017
  doi: "10.1371/journal.pcbi.1005807"
  url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005807"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 150 to 300 (Google Scholar, as of 2026-07)." }
github: { available: false, url: null, stars: null, last_commit: null }
documentation: null
strengths:
  - "Learns cleavage determinants rather than assuming fixed mismatch penalties."
  - "Predicts both on-target and off-target cleavage in one framework."
  - "Offered insight into mechanistic features driving cleavage."
weaknesses:
  - "Older model with limited recent maintenance."
  - "Web-server dependent, with uncertain long-term availability."
  - "SpCas9 specific."
ideal_use_cases:
  - "Alternative machine learning cleavage prediction for benchmarking against CFD and Elevation."
  - "Research into features underlying Cas9 cleavage."
limitations:
  - "Not variant or bulge aware."
  - "Not a modern therapeutic assessment tool."
competing_tools: [cfd-score, elevation]
related_tools: [cas-offinder]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: false
  rationale: "Useful benchmark method, superseded by better-maintained scores and variant-aware tools. A useful benchmark method, but superseded in practice by newer and better-maintained scores and variant-aware tools."
  as_of: "2026-07-03"
tags: [machine-learning, random-forest, web-server, cleavage-prediction]
ai_enabled: true
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. Confirm current web server and code hosting at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# CRISTA

> Machine learning method that predicts Cas9 cleavage propensity at a genomic site, from the Pupko lab (Tel Aviv University).

## Example workflow

1. Provide a guide and candidate genomic site.
2. Predict cleavage propensity from the learned model.
3. Compare predictions across candidate off-targets.

## Notes

Model and feature figures in Abadi et al., PLOS Computational Biology 2017. Cited in off-target prediction benchmarking studies.
