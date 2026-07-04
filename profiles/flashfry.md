---
id: flashfry
name: FlashFry
aka: []
category: Guide RNA Design
secondary_categories: [Off-target Prediction, On-target Scoring, CRISPR Screen Design]
description: "FlashFry is a Java command-line tool that discovers candidate guides and scores them for on-target activity and off-target risk at high throughput without a web server. It is designed for users who need to process large sequence sets or whole target panels locally and reproducibly. It bundles several established scoring schemes and is a common building block in custom pipelines."
supported_editors: [Cas9, Cas12a]
installation: "Download runnable JAR; requires Java."
web_interface: { available: false, url: null, login_required: null }
license: "Open source"
platform: [Java, Command line, Linux, macOS, Windows]
maintenance_status: Legacy
superseded_by: null
publication:
  title: "FlashFry: a fast and flexible tool for large-scale CRISPR target design"
  venue: "BMC Biology"
  year: 2018
  doi: "10.1186/s12915-018-0545-0"
  url: "https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-018-0545-0"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "Hundreds. Pull current number from Google Scholar at build time." }
github: { available: true, url: "https://github.com/mckennalab/FlashFry", stars: null, last_commit: null }
documentation: "https://github.com/mckennalab/FlashFry"
strengths:
  - "Very fast local batch scoring with no server dependency, good for reproducible pipelines."
  - "Flexible PAM and scoring configuration."
  - "Simple single-JAR distribution."
weaknesses:
  - "Command-line only, so a higher barrier for bench scientists."
  - "Development activity has slowed; scoring reflects its 2018 era."
ideal_use_cases:
  - "Scoring thousands to millions of candidate guides offline."
  - "Embedding a guide scoring step inside a larger automated pipeline."
limitations:
  - "No interactive interface or visualization."
  - "Nuclease focused; not a base or prime editing designer."
competing_tools: [guidescan2, crispritz]
related_tools: [cas-offinder, crispor]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: null
  rationale: "Still a solid, fast offline scorer; genome-wide specificity leadership has moved to GuideScan2 and CRISPRitz, as shown in the GuideScan2 2025 benchmarks."
  as_of: "2026-07-03"
tags: [command-line, java, high-throughput, offline, batch]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. Confirm latest GitHub release and commit date at build time to validate the Legacy status. Citation count needs a manual pull."
---

# FlashFry

> Fast, offline, command-line guide discovery and scoring tool from Aaron McKenna and Jay Shendure.

## Example workflow

1. Build or download a FlashFry database for the target genome.
2. Run the discover step over input FASTA to enumerate candidate guides.
3. Run the score step to annotate on-target and off-target metrics.
4. Filter the tab-delimited output in your pipeline.

## Notes

Command-line tool; see the BMC Biology paper figures for benchmarking, attributed to McKenna and Shendure, BMC Biology 2018. Used as a scoring backend in various large-scale design and screen preparation studies since 2018.
