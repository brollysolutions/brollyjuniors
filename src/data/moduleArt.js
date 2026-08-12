/* Per-module illustrations.
   Each entry lines up index-for-index with that class's `modules` array, so
   module 3 of Class 7 Python gets art matching what module 3 actually teaches.
   No image repeats within a single class. Files live in /images/modules/. */

export const moduleArt = {
  python: {
    6: ['algorithm-steps', 'variables', 'branching', 'loops', 'functions', 'collections', 'turtle-art', 'game-logic', 'capstone'],
    7: ['clean-code', 'branching', 'dice-simulation', 'functions', 'collections', 'files', 'game-logic', 'debug-test', 'capstone'],
    8: ['clean-code', 'collections', 'modules-package', 'csv-data', 'objects', 'algorithms-sort', 'charts', 'arcade', 'capstone'],
    9: ['terminal-cli', 'collections', 'docs-tests', 'objects', 'api-json', 'database', 'web-app', 'python-ai', 'capstone-deploy'],
    10: ['git-version', 'algorithms-sort', 'design-blueprint', 'data-pipeline', 'database', 'web-app', 'security-test', 'python-ai', 'capstone-deploy'],
  },
  ai: {
    6: ['ai-around-us', 'prompt-craft', 'study-buddy', 'story-writing', 'image-gen', 'voice-audio', 'video-explainer', 'truth-safety', 'showcase'],
    7: ['how-ai-works', 'prompt-craft', 'research-sources', 'study-buddy', 'image-gen', 'voice-audio', 'video-explainer', 'chatbot-flow', 'community-impact'],
    8: ['how-ai-works', 'prompt-system', 'research-sources', 'data-patterns', 'multimodal', 'video-explainer', 'automation', 'deepfake-safety', 'community-impact'],
    9: ['ai-system-map', 'prompt-system', 'research-sources', 'data-patterns', 'multimodal', 'chatbot-flow', 'automation', 'ethics-careers', 'showcase'],
    10: ['ai-system-map', 'prompt-system', 'research-sources', 'dashboard', 'multimodal', 'ai-product', 'automation', 'ethics-careers', 'showcase'],
  },
};

/* Alt text for each illustration, used on the <img>. */
export const moduleArtAlt = {
  'algorithm-steps': 'Three numbered instruction cards linked by arrows',
  'variables': 'Three labelled boxes holding a name, a number and a score',
  'branching': 'A path splitting at a decision diamond into a tick and a cross',
  'loops': 'A circular repeat arrow around a repeating pattern',
  'functions': 'A machine with an input arrow, gears inside and an output arrow',
  'collections': 'A numbered list shelf with items in slots zero to three',
  'turtle-art': 'A turtle drawing a neat square spiral',
  'game-logic': 'A game controller beside a score and lives panel',
  'capstone': 'A gold trophy on a pedestal with a ribbon and confetti',
  'clean-code': 'A tidy code window with a sparkle badge',
  'dice-simulation': 'Two dice above a bar chart of rolled totals',
  'files': 'An open journal file with dated entries and a save badge',
  'debug-test': 'A magnifying glass over code finding a bug, beside a passing test',
  'modules-package': 'A package box of reusable tools with an import arrow',
  'csv-data': 'A spreadsheet table with a highlighted row of records',
  'objects': 'A class blueprint producing three identical pet objects',
  'algorithms-sort': 'Unsorted bars being rearranged into ascending order',
  'charts': 'A card showing a bar chart with a trend line',
  'arcade': 'An arcade cabinet showing a brick-breaker game',
  'terminal-cli': 'A terminal window running a Python command',
  'docs-tests': 'A documented function card beside three passing tests',
  'api-json': 'Two programs exchanging a JSON data packet',
  'database': 'A database cylinder beside a table of records',
  'web-app': 'A browser window showing a multi-page web application',
  'python-ai': 'An AI chip connected to a Python code window',
  'capstone-deploy': 'A rocket arcing from a laptop screen up to a cloud',
  'git-version': 'A commit history line with a branch splitting and merging back',
  'design-blueprint': 'A blueprint of connected class boxes',
  'data-pipeline': 'Messy data entering a funnel and leaving as clean records',
  'security-test': 'A shield with a padlock and a passing test badge',

  'ai-around-us': 'A phone surrounded by everyday AI features',
  'prompt-craft': 'A vague prompt being rewritten into a clear, structured prompt',
  'study-buddy': 'A friendly robot helping with an open book and flashcards',
  'story-writing': 'An open storybook with a quill and sparks of imagination',
  'image-gen': 'A written description turning into a generated picture',
  'voice-audio': 'A microphone with a sound wave and headphones',
  'video-explainer': 'A video player with captions and a stack of slides behind',
  'truth-safety': 'A claim being fact-checked under a magnifier beside a shield',
  'showcase': 'A presentation board with a chart and a presenting student',
  'how-ai-works': 'A sentence with predicted next words ranked by probability',
  'research-sources': 'Stacked source documents being compared with a magnifier',
  'chatbot-flow': 'Chat bubbles arranged as a branching conversation flow',
  'community-impact': 'An idea lightbulb over a map pin surrounded by people',
  'prompt-system': 'Chained prompt stages checked against a scoring rubric',
  'data-patterns': 'A scatter plot with a trend line and one circled outlier',
  'multimodal': 'One idea branching into text, image and audio outputs',
  'automation': 'An automated workflow with gears and a human approval step',
  'deepfake-safety': 'Two identical portraits, one flagged as synthetic',
  'ai-system-map': 'Data feeding a model that produces an output',
  'ethics-careers': 'Balance scales beside a signpost of career directions',
  'dashboard': 'A dashboard of key numbers above a summary chart',
  'ai-product': 'A phone app design with an AI action button and a cursor',
};

/* Returns { image, imageAlt } for a module, or null if none is mapped. */
export function getModuleArt(subjectKey, klass, index) {
  const name = ((moduleArt[subjectKey] || {})[klass] || [])[index];
  if (!name) return null;
  return { image: `/images/modules/${name}.svg`, imageAlt: moduleArtAlt[name] || '' };
}
