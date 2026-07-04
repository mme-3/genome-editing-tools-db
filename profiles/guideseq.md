---
id: guideseq
name: guideseq (GUIDE-seq analysis)
aka: [GUIDE-seq]
category: Off-target Prediction
secondary_categories: [Sequencing Analysis, Editing Outcome Analysis]
description: "GUIDE-seq is a wet-lab method that captures double-strand break sites genome-wide by integrating a short oligo, and the guideseq software is the computational pipeline that processes those sequencing reads into a ranked list of empirically detected off-target sites. It handles unique molecular index consolidation, alignment, and identification of off-target cleavage sites with read support. It is included here because it is the analysis counterpart that turns the assay into actionable off-target calls, distinct from purely in silico prediction."
supported_editors: [Cas9, Cas12a]
installation: "pip or source from the Joung/Tsai lab repository."
web_interface: { available: false, url: null, login_required: null }
license: "Open source"
platform: [Python, Command line]
maintenance_status: Legacy
superseded_by: null
publication:
  title: "GUIDE-seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases"
  venue: "Nature Biotechnology"
  year: 2015
  doi: "10.1038/nbt.3117"
  url: "https://www.nature.com/articles/nbt.3117"
citations: { count: null, source: "Google Scholar", as_of: "2026-07", note: "est. 2000 to 2600 for the method paper (Google Scholar, as of 2026-07)." }
github: { available: true, url: "https://github.com/tsailabSJ/guideseq", stars: null, last_commit: null }
documentation: "https://github.com/tsailabSJ/guideseq"
strengths:
  - "Empirical genome-wide off-target detection rather than prediction, giving ground-truth-like evidence."
  - "Established, widely trusted, and a common benchmark for in silico tools."
  - "Handles UMI consolidation for accurate read support."
weaknesses:
  - "Requires the wet-lab GUIDE-seq assay first; the software alone is not predictive."
  - "Reflects editing in the assayed cell context, which may differ from the therapeutic context."
  - "Development is stable rather than actively expanding."
ideal_use_cases:
  - "Empirically validating predicted off-target sites for a guide."
  - "Benchmarking and calibrating in silico off-target scores."
  - "Regulatory or safety-oriented off-target profiling."
limitations:
  - "Not a design or prediction tool; it analyzes assay output."
  - "Tied to double-strand break detection, so base and prime editors need adapted assays."
competing_tools: [crisprme]
related_tools: [crispresso2, cas-offinder]
screenshots: []
notable_publications_using: []
last_known_update: null
state_of_the_art:
  is_sota: true
  rationale: "GUIDE-seq family remains a leading empirical off-target detection approach; CHANGE-seq extends sensitivity. Software is stable and still used."
  as_of: "2026-07-03"
tags: [empirical, ngs-analysis, python, umi, off-target-detection, joung-lab]
ai_enabled: false
verified_on: "2026-07-03"
verification_notes: "Method publication and DOI confirmed. Confirm latest repository commit and whether the lab recommends a newer pipeline at build time. Citation figure is an estimate pending a Google Scholar pull."
---

# guideseq (GUIDE-seq analysis)

> The computational analysis pipeline for GUIDE-seq, the empirical genome-wide off-target detection assay from the Joung lab.

## Example workflow

1. Run the GUIDE-seq wet-lab assay and sequence the libraries.
2. Run the guideseq pipeline to consolidate UMIs and align reads.
3. Identify and rank empirically detected off-target sites by read support.
4. Compare the empirical hits with in silico predictions.

## Notes

Assay and analysis figures in Tsai et al., Nature Biotechnology 2015. The standard empirical reference cited across off-target validation and therapeutic safety studies. CHANGE-seq and other empirical off-target assay pipelines are close competitors but do not yet have their own profile here.
