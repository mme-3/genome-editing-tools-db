---
id: gpp-sgrna-designer
name: GPP sgRNA Designer (Broad)
aka: [Rule Set 2 Designer]
category: Guide RNA Design
secondary_categories: [On-target Scoring, CRISPR Screen Design]
description: "The GPP sgRNA Designer is the Broad Institute Genetic Perturbation Platform's web-based guide designer, implementing Rule Set 2 and later on-target models for Cas9 and CRISPRi/a guide picking."
supported_editors: [Cas9, CRISPRi, CRISPRa]
installation: "Web only."
web_interface: { available: true, url: "https://portals.broadinstitute.org/gpp/public/analysis-tools/sgrna-design", login_required: false }
license: "Academic"
platform: [Web]
maintenance_status: Active
superseded_by: null
publication:
  title: "Optimized sgRNA design to maximize activity and minimize off-target effects of CRISPR-Cas9 (Rule Set 2)"
  venue: "Nature Biotechnology"
  year: 2016
  doi: "10.1038/nbt.3437"
  url: "https://www.nature.com/articles/nbt.3437"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "Shared with the CFD Score paper; not yet pulled separately." }
github: { available: false, url: null, stars: null, last_commit: null }
documentation: null
strengths: []
weaknesses: []
ideal_use_cases: []
limitations: []
competing_tools: [crisprscan]
related_tools: [cfd-score]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: null
  rationale: null
  as_of: "2026-07-03"
tags: [web-server, rule-set-2, broad, screen-design]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Stub profile created from compact JSON record during data migration; still needs a full pass for strengths, weaknesses, ideal use cases, limitations, and a real state-of-the-art assessment."
---

# GPP sgRNA Designer (Broad)

> Broad Institute Genetic Perturbation Platform's web designer, from the same Doench/Root group behind the CFD score.

## Example workflow

1. Submit gene targets or sequences for Cas9, CRISPRi, or CRISPRa picking.
2. Review guides ranked by the Rule Set 2 (or later) on-target model.

## Notes

Shares its founding paper with the [CFD score](cfd-score.md). Needs a full profile pass: strengths/weaknesses and current model version should be verified against the live tool.
