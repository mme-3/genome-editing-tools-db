---
id: mit-specificity-score
name: MIT Specificity Score
aka: []
category: Off-target Prediction
secondary_categories: [On-target Scoring]
description: "The MIT score assigns each candidate off-target a weight based on the position of mismatches relative to the PAM, then aggregates these into a per-guide specificity score between 0 and 100, where higher means fewer concerning off-targets. It was the first specificity metric in broad use and shaped how the field thought about guide selection. The original crispr.mit.edu server is defunct, but the score itself lives on inside CRISPOR and other tools."
supported_editors: [Cas9]
installation: "Reimplemented in downstream tools; original server retired."
web_interface: { available: false, url: null, login_required: null }
license: "Academic"
platform: [Python]
maintenance_status: Legacy
superseded_by: cfd-score
publication:
  title: "DNA targeting specificity of RNA-guided Cas9 nucleases"
  venue: "Nature Biotechnology"
  year: 2013
  doi: "10.1038/nbt.2647"
  url: "https://www.nature.com/articles/nbt.2647"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 5000 to 7000 (Google Scholar, as of 2026-07). One of the foundational specificity papers." }
github: { available: false, url: null, stars: null, last_commit: null }
documentation: null
strengths:
  - "Historically foundational and simple to interpret on a 0 to 100 scale."
  - "Still reported by tools like CRISPOR for continuity with older literature."
weaknesses:
  - "Based on a small early dataset; less accurate than CFD and machine learning scores."
  - "Original hosting server is gone, so it is not independently accessible."
  - "Mismatch only and SpCas9 specific."
ideal_use_cases:
  - "Comparing against historical guide selections that used the MIT score."
  - "Providing continuity when reproducing older analyses."
limitations:
  - "Not recommended as the primary modern specificity metric."
  - "No variant or bulge awareness."
competing_tools: [cfd-score, elevation]
related_tools: [crispor]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: false
  rationale: "Superseded by CFD and ML scores; retained as a historical milestone still reported for comparability."
  as_of: "2026-07-03"
tags: [scoring-metric, historical-milestone, mismatch-model, defunct-site]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. Note the original server is retired; point users to CRISPOR for the score. Citation figure is an estimate pending a Google Scholar pull."
---

# MIT Specificity Score

> The original widely used off-target specificity score, from the Zhang lab, introduced with the first crispr.mit.edu design server.

## Example workflow

1. Enumerate candidate off-targets for a guide.
2. Weight each by mismatch position and aggregate to a 0 to 100 score.
3. Compare to the CFD-based aggregate when interpreting older results.

## Notes

Original interface figures appear in Hsu et al., Nature Biotechnology 2013. Cited across a vast body of early and ongoing CRISPR specificity work; the default score for years before CFD.
