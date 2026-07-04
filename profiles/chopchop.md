---
id: chopchop
name: CHOPCHOP
aka: []
category: Guide RNA Design
secondary_categories: [On-target Scoring, Off-target Prediction, CRISPRi/a Design]
description: "CHOPCHOP identifies and ranks CRISPR and TALEN target sites for knockout, knock-in, activation, repression, and base editing, and presents results as an intuitive visual gene map rather than a raw table. Version 3 expanded the toolbox beyond classic Cas9 editing to isoform-aware targeting, Cas13 for RNA targeting, and repair-outcome oriented options. It exists as a hosted server and as a standalone Python tool for scripted use."
supported_editors: [Cas9, Cas12a, CRISPRi, CRISPRa, Base editing (CBE), Base editing (ABE)]
installation: "Web only for most users; standalone Python available."
web_interface: { available: true, url: "https://chopchop.cbu.uib.no", login_required: false }
license: "Open source"
platform: [Web, Command line, Python]
maintenance_status: Active
superseded_by: null
publication:
  title: "CHOPCHOP v3: expanding the CRISPR web toolbox beyond genome editing"
  venue: "Nucleic Acids Research"
  year: 2019
  doi: "10.1093/nar/gkz365"
  url: "https://academic.oup.com/nar/article/47/W1/W171/5491735"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "Thousands across three version papers (v1 2014, v2 2016, v3 2019 NAR)." }
github: { available: true, url: "https://bitbucket.org/valenlab/chopchop", stars: null, last_commit: null }
documentation: "https://chopchop.cbu.uib.no/instructions"
strengths:
  - "Clear visual output overlaid on gene structure, which lowers the barrier for non-computational users."
  - "Isoform-aware targeting and a wide range of goals in one interface, including repression, activation, and RNA targeting."
  - "Standalone version enables reproducible scripted design."
weaknesses:
  - "Fewer aggregated off-target scoring options than CRISPOR in a single view."
  - "The breadth of modes can make it less obvious which preset is correct for a given editor."
ideal_use_cases:
  - "Fast, readable guide selection for a single gene when a visual gene map helps decision making."
  - "Designing guides for knock-in, CRISPRi, or CRISPRa where the goal is set explicitly."
limitations:
  - "Not a genome-wide library specificity indexer."
  - "Deep base editor efficiency and window prediction is better served by dedicated base editing tools."
competing_tools: [crispor, e-crisp, benchling]
related_tools: [cas-offinder, crispresso2]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "Leading multi-goal web design tool valued for visualization and isoform awareness. Remains a leading and heavily used general-purpose web design tool, particularly valued for its visualization and multi-goal support. Complementary to CRISPOR rather than strictly better or worse."
  as_of: "2026-07-03"
tags: [web-server, command-line, visual-output, knockout, knock-in, nanopore]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "v3 publication and DOI confirmed. Confirm the current canonical repository URL (Bitbucket vs GitHub mirror) and latest release date at build time. Citation count needs a manual Google Scholar pull."
---

# CHOPCHOP

> Web tool and command-line package for guide selection from the Valen lab (University of Bergen).

## Example workflow

1. Enter a gene name or sequence and select organism and target action (knockout, knock-in, CRISPRi, CRISPRa).
2. View candidate sites plotted on the gene model, ranked by efficiency and specificity.
3. Select a target and export the primers and oligos suggested for cloning and validation.

## Notes

Interface figures appear in the CHOPCHOP v3 NAR paper and on the tool site, attributed to Labun et al., NAR 2019. Broadly cited as the design step across model organism and cell line editing studies, especially in zebrafish and other developmental systems.
