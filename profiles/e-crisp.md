---
id: e-crisp
name: E-CRISP
aka: []
category: Guide RNA Design
secondary_categories: [Off-target Prediction, On-target Scoring]
description: "E-CRISP evaluates candidate guides using a bowtie-based off-target search and gene annotation to report on-target sites with efficiency and specificity information across many organisms. It was one of the first broadly adopted web design tools and introduced practical annotation-aware ranking. It remains online and cited, but active development has slowed and newer tools now lead on scoring and scale."
supported_editors: [Cas9]
installation: "Web only."
web_interface: { available: true, url: "http://www.e-crisp.org/E-CRISP", login_required: false }
license: "Academic"
platform: [Web]
maintenance_status: Legacy
superseded_by: crispor
publication:
  title: "E-CRISP: fast CRISPR target site identification"
  venue: "Nature Methods"
  year: 2014
  doi: "10.1038/nmeth.2812"
  url: "https://www.nature.com/articles/nmeth.2812"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "High, likely 1000-plus given early release. Pull current number from Google Scholar at build time." }
github: { available: false, url: null, stars: null, last_commit: null }
documentation: "http://www.e-crisp.org"
strengths:
  - "Broad organism support at a time when few tools offered it."
  - "Annotation-aware output that ties guides to gene features."
  - "Simple, stable web access with no login."
weaknesses:
  - "On-target scoring predates modern machine learning models and is less accurate than current predictors."
  - "Slower and less specific than BWT-indexed tools for large off-target searches."
  - "Limited to Cas9 and to nuclease editing."
ideal_use_cases:
  - "Quick historical or teaching context for how early guide design worked."
  - "Simple Cas9 guide lookup in supported organisms where a lightweight tool suffices."
limitations:
  - "No base, prime, or RNA editing support."
  - "Not suitable as a genome-wide specificity backend."
competing_tools: [crispor, chopchop]
related_tools: [cas-offinder]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: false
  rationale: "Superseded in practice by CRISPOR, CHOPCHOP, and GuideScan2 for accuracy and scale, though still online and occasionally used. Retained here as an influential legacy milestone."
  as_of: "2026-07-03"
tags: [web-server, early-tool, many-organisms, annotation-aware]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. Confirm the site is still live at build time, since legacy academic servers can lapse. Citation count needs a manual pull."
---

# E-CRISP

> Early and influential web design tool from the German Cancer Research Center (DKFZ), Boutros lab.

## Example workflow

1. Enter a gene or sequence and select the organism.
2. Retrieve annotated candidate guides with efficiency and specificity flags.
3. Pick a guide for cloning.

## Notes

Interface shown in the 2014 Nature Methods correspondence and on e-crisp.org, attributed to Heigwer et al., Nature Methods 2014. Cited as the design step in many mid-2010s CRISPR studies; often mentioned alongside CRISPOR in methods sections.
