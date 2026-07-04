---
id: cas-offinder
name: Cas-OFFinder
aka: []
category: Off-target Prediction
secondary_categories: [Guide RNA Design]
description: "Cas-OFFinder enumerates every potential off-target site for a given guide across a genome by brute-force search, without relying on a fixed PAM or a heuristic seed. It is GPU and CPU parallelized, which makes exhaustive enumeration practical, and it imposes no restriction on mismatch number, PAM type, or nuclease, so it generalizes to Cas9, Cas12a, and engineered variants. It is offered as a command-line binary and a web interface, and is widely embedded as the enumeration engine inside other design tools."
supported_editors: [Cas9, Cas12a, Cas12 (other)]
installation: "Precompiled binary or source; OpenCL for GPU."
web_interface: { available: true, url: "http://www.rgenome.net/cas-offinder/", login_required: false }
license: "BSD-3-Clause"
platform: [Command line, Web, Linux, macOS, Windows]
maintenance_status: Active
superseded_by: null
publication:
  title: "Cas-OFFinder: a fast and versatile algorithm that searches for potential off-target sites of Cas9 RNA-guided endonucleases"
  venue: "Bioinformatics"
  year: 2014
  doi: "10.1093/bioinformatics/btu048"
  url: "https://academic.oup.com/bioinformatics/article/30/10/1473/267560"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 2000 to 3000 (Google Scholar, as of 2026-07). Foundational and heavily embedded, so real count is high." }
github: { available: true, url: "https://github.com/snugel/cas-offinder", stars: null, last_commit: null }
documentation: "http://www.rgenome.net/cas-offinder/"
strengths:
  - "Truly exhaustive: it does not miss sites the way seed-based heuristics can."
  - "PAM-agnostic and nuclease-agnostic, so it handles engineered and non-Cas9 systems."
  - "GPU acceleration makes genome-wide enumeration fast."
  - "Stable, open, and used as the backend engine by many downstream tools."
weaknesses:
  - "Enumeration only; it does not score or rank off-targets by cleavage likelihood, so it needs a scoring layer on top."
  - "No variant awareness; it searches a single reference genome."
  - "Raw output can be large and needs downstream filtering."
ideal_use_cases:
  - "Generating the complete candidate off-target set for a guide before scoring."
  - "Off-target search for non-standard PAMs and engineered nucleases."
  - "Serving as the enumeration engine inside a custom pipeline."
limitations:
  - "Not variant or haplotype aware; use CRISPRme or CRISPRitz when population variants matter."
  - "Provides no cleavage probability estimate on its own."
competing_tools: [crispritz, flashfry]
related_tools: [cfd-score, elevation, crispor]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Standard exhaustive reference-genome enumeration engine. It remains the standard as of 2026-07-03. For variant-aware nomination it is complemented by CRISPRme and CRISPRitz, and for ranking it needs a scoring layer."
  as_of: "2026-07-03"
tags: [command-line, web-server, gpu-accelerated, exhaustive-search, pam-agnostic, rgen-tools]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Publication and DOI confirmed. Confirm latest release and license text at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# Cas-OFFinder

> Fast, PAM-agnostic, exhaustive off-target search tool from the CRISPR RGEN Tools suite (Bae, Park, Kim, Seoul National University).

## Example workflow

1. Provide the genome, PAM, guide sequence, and allowed mismatch count.
2. Run the search on GPU or CPU to enumerate all candidate off-target sites.
3. Pass the enumerated sites to a scoring tool to rank cleavage likelihood.

## Notes

Web interface at rgenome.net and figures in the 2014 Bioinformatics paper, attributed to Bae et al., Bioinformatics 2014. Used as the off-target enumeration step across a very large number of CRISPR studies and as the engine inside multiple design tools.
