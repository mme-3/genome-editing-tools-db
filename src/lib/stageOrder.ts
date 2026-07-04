/**
 * Maps a tool's primary `category` to a workflow stage for the workflow
 * explorer page. Add new categories here as they're introduced — a category
 * that isn't mapped falls into "Other" and logs a build warning so it doesn't
 * silently disappear from the explorer.
 */

interface Stage {
  name: string;
  categories: string[];
}

export const stages: Stage[] = [
  {
    name: 'Plan & Design',
    categories: [
      'Guide RNA Design',
      'On-target Scoring',
      'Off-target Prediction',
      'Primer Design',
      'CRISPR Screen Design',
      'Multiplex Optimization',
      'CRISPRi/a Design',
    ],
  },
  {
    name: 'Build & Deliver',
    categories: ['Vector Design', 'Delivery Systems', 'Sequence Management'],
  },
  {
    name: 'Edit',
    categories: ['Base Editing Design', 'Prime Editing Design', 'Epigenome Editing Design'],
  },
  {
    name: 'Validate & Analyze',
    categories: [
      'Off-target Validation',
      'Editing Outcome Analysis',
      'Sequencing Analysis',
      'Screen Analysis',
    ],
  },
  {
    name: 'Manage & Report',
    categories: ['Workflow Automation', 'Visualization', 'Databases', 'Therapeutic Design'],
  },
];

const OTHER_STAGE = 'Other';

export function stageForCategory(category: string): string {
  const stage = stages.find((s) => s.categories.includes(category));
  if (!stage) {
    console.warn(`[stage-order] category "${category}" has no workflow stage mapping; add it to src/lib/stageOrder.ts`);
    return OTHER_STAGE;
  }
  return stage.name;
}

export function orderedStageNames(): string[] {
  return [...stages.map((s) => s.name), OTHER_STAGE];
}
