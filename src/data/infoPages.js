import { phonicsFaqs } from './site.js';

// Data-driven inner pages rendered by pages/InfoPage.jsx
export const infoPages = [
  /* ---------- Junior skills ---------- */
  {
    path: '/junior-skills/phonics',
    eyebrow: 'Phonics & Early Reading · Ages 4–9',
    title: 'Phonics classes in Hyderabad that turn sounds into confident reading.',
    subtitle:
      'A six-level synthetic phonics pathway: hear the sound, blend the word, spell it back and finally read a whole story out loud.',
    image: '/images/phonics.svg',
    imageAlt: 'Phonics letter blocks, blending arrows and sound bubbles',
    chips: [
      { strong: 'Ages 4–9', span: 'Age range' },
      { strong: '6 levels', span: 'Complete pathway' },
      { strong: '9–12 months', span: 'Typical duration' },
      { strong: 'Max 8', span: 'Children per batch' },
    ],
    quickAnswer:
      'Brolly Juniors runs phonics classes in Hyderabad for ages 4 to 9, teaching the 44 English sounds and their spellings across six levels. Children learn to blend sounds into words, segment words for spelling, read tricky words on sight and finish the pathway reading levelled stories aloud with expression.',
    curriculum: {
      eyebrow: 'Level-wise curriculum',
      title: 'Six levels, from first sound to first storybook',
      lead: 'Every level runs on the same rhythm—hear it, say it, build it, read it, write it—so children always know what a session will feel like.',
      stages: [
        {
          tag: 'Level 1',
          icon: '👂',
          title: 'Sound awareness & first sounds',
          text: 'Children tune their ears before they touch a letter, then meet the first sound group.',
          bullets: ['Rhyme, rhythm and syllable clapping', 'Hearing the first sound in a word', 'Sound group s · a · t · p · i · n', 'Correct letter formation'],
          outcome: 'Says and writes 12+ letter sounds accurately.',
        },
        {
          tag: 'Level 2',
          icon: '🔗',
          title: 'Blending & first words',
          text: 'The moment reading clicks—three separate sounds become one whole word.',
          bullets: ['Sound group c · k · e · h · r · m · d', 'Blending c-a-t into cat', 'Word building with sound cards', 'First decodable word lists'],
          outcome: 'Reads and builds 50+ three-sound words.',
        },
        {
          tag: 'Level 3',
          icon: '✏️',
          title: 'Segmenting & early spelling',
          text: 'Reading in reverse: children pull a spoken word apart and write the sounds they hear.',
          bullets: ['Sound group g · o · u · l · f · b', 'Segmenting words for spelling', 'First tricky words: the, I, to, go, no', 'Sound dictation practice'],
          outcome: 'Spells simple words from dictation without prompting.',
        },
        {
          tag: 'Level 4',
          icon: '🧩',
          title: 'Digraphs & blends',
          text: 'Two letters, one sound—plus the consonant clusters that unlock longer words.',
          bullets: ['sh · ch · th · ng · qu', 'Beginning and end blends: st, tr, cl, nd', 'Reading four and five-sound words', 'First full sentences read aloud'],
          outcome: 'Reads short sentences independently.',
        },
        {
          tag: 'Level 5',
          icon: '🪄',
          title: 'Long vowels & alternative spellings',
          text: 'The same sound can be written more than one way—children learn to choose.',
          bullets: ['Magic e: cake, bike, home', 'ai / ay, ee / ea, oa / ow, oo', 'ir · ur · er and vowel families', 'Growing tricky-word bank'],
          outcome: 'Reads a short levelled story with support.',
        },
        {
          tag: 'Level 6',
          icon: '📖',
          title: 'Fluency, expression & comprehension',
          text: 'Accuracy becomes reading that sounds like talking—and children show they understood it.',
          bullets: ['Punctuation, pace and expression', 'Retelling a story in order', 'Answering how and why questions', 'Weekly dictation and reading log'],
          outcome: 'Reads a levelled book aloud and retells it in their own words.',
        },
      ],
    },
    sections: [
      {
        title: 'Why sounds come before letter names',
        text: 'A child who knows the word "bee" for the letter B cannot use it to read the word bat. Brolly Juniors teaches the pure sound first, so blending works from the very first week.',
        bullets: [
          'Sounds taught in reading-useful order, not A to Z',
          'Blending and segmenting practised in every session',
          'Tricky words taught separately, on sight',
          'Handwriting formation practised alongside the sound',
        ],
      },
      {
        title: 'Small batches and a weekly home note',
        text: 'Batches are capped at eight children so the educator can hear every child read aloud in every session. Families receive a short note each week with the sounds covered and one five-minute practice idea—no worksheets pile-up.',
      },
    ],
    faqs: phonicsFaqs,
    cta: 'family',
  },
  {
    path: '/junior-skills/abacus',
    eyebrow: 'Abacus Mastery · Ages 5–11',
    title: 'Abacus classes in Hyderabad for focus, memory and number confidence.',
    subtitle:
      'A structured Soroban journey from physical bead movement to mental visualisation, delivered in small, supportive batches.',
    image: '/images/abacus.svg',
    imageAlt: 'A wooden soroban abacus with amber and teal beads',
    chips: [
      { strong: 'Ages 5–11', span: 'Age range' },
      { strong: '10 levels', span: 'Complete pathway' },
      { strong: '24–36 months', span: 'Typical duration' },
      { strong: 'Max 8', span: 'Children per batch' },
    ],
    quickAnswer:
      'Brolly Juniors runs abacus classes in Hyderabad for ages 5 to 11: a 10-level curriculum completed over two to three years, in batches capped at eight children. Children build calculation fluency, concentration, working memory and mental visualisation through structured practice and close instructor observation.',
    curriculum: {
      eyebrow: 'Level-wise curriculum',
      title: 'Ten levels, grouped into five clear stages',
      lead: 'Children move from moving beads with their fingers to seeing the beads in their head—one small, checked step at a time.',
      stages: [
        {
          tag: 'Levels 1–2',
          icon: '🧮',
          title: 'Soroban foundations',
          text: 'Correct finger technique and confident bead handling on the physical abacus.',
          bullets: ['Place value on the rods', 'Thumb and index finger technique', 'Simple addition and subtraction', 'Posture, pace and accuracy'],
          outcome: 'Adds and subtracts single digits on the abacus.',
        },
        {
          tag: 'Levels 3–4',
          icon: '➕',
          title: 'Small and big friend rules',
          text: 'The complement rules that make fast bead calculation possible.',
          bullets: ['Small friend (5) combinations', 'Big friend (10) combinations', 'Two and three-digit work', 'Timed accuracy drills'],
          outcome: 'Handles two-digit sums with the complement rules.',
        },
        {
          tag: 'Levels 5–6',
          icon: '🧠',
          title: 'The mental transition',
          text: 'The abacus moves off the table and into visualisation.',
          bullets: ['Visualising the bead frame', 'Anzan (mental) addition rows', 'Dictation-style listening sums', 'Mixed physical and mental practice'],
          outcome: 'Calculates short rows entirely in the head.',
        },
        {
          tag: 'Levels 7–8',
          icon: '⚡',
          title: 'Speed and complexity',
          text: 'Longer number strings, multiplication and division enter the pathway.',
          bullets: ['Multiplication on the Soroban', 'Division techniques', 'Three-digit mental rows', 'Speed-versus-accuracy checkpoints'],
          outcome: 'Completes multi-digit operations at pace.',
        },
        {
          tag: 'Levels 9–10',
          icon: '🏆',
          title: 'Mastery and assessment',
          text: 'Fluency, endurance and the confidence to demonstrate it in front of others.',
          bullets: ['Long mental calculation sets', 'Level assessments', 'Competition-style practice rounds', 'Mastery demonstration'],
          outcome: 'Completes the 10-level pathway with a mastery demonstration.',
        },
      ],
    },
    sections: [
      {
        title: 'What the levels build, beyond arithmetic',
        text: 'Bead work asks for sustained attention, sequencing and visual memory—which is why parents usually notice the concentration change before the calculation speed.',
        bullets: [
          'Sustained concentration in short, repeated bursts',
          'Working memory and mental visualisation',
          'Listening accuracy through dictation sums',
          'Confidence with numbers under mild time pressure',
        ],
      },
      {
        title: 'Small batches, close observation',
        text: 'Classes stay capped at eight students so instructors can observe and correct bead technique, hand movement, pacing and accuracy individually.',
      },
    ],
    cta: 'family',
  },
  {
    path: '/junior-skills/vedic-maths',
    eyebrow: 'Vedic Maths · Ages 7–13',
    title: 'Vedic Maths classes in Hyderabad that make numbers feel lighter.',
    subtitle:
      'Pattern-based mental maths techniques taught through understanding, guided practice and friendly speed challenges.',
    image: '/images/vedic-maths.svg',
    imageAlt: 'A board showing quick mental multiplication patterns',
    chips: [
      { strong: '12 weeks', span: 'Program duration' },
      { strong: 'Ages 7–13', span: 'Age group' },
      { strong: 'Mental maths', span: 'Focus area' },
      { strong: 'Pattern thinking', span: 'Focus area' },
    ],
    quickAnswer:
      'Vedic Maths classes in Hyderabad: a 12-week program for children aged 7 to 13 that teaches mental calculation patterns with an emphasis on speed, flexibility and number confidence—complementing school mathematics rather than replacing it.',
    curriculum: {
      eyebrow: 'Week-by-week curriculum',
      title: '12 weeks in four short, satisfying blocks',
      lead: 'Each block introduces a family of patterns, proves why it works, then drills it until the child can do it out loud without paper.',
      stages: [
        {
          tag: 'Weeks 1–3',
          icon: '🔟',
          title: 'Complements & fast addition',
          text: 'The base-10 thinking every later shortcut depends on.',
          bullets: ['Number complements to 10 and 100', 'Adding by rounding and adjusting', 'Left-to-right addition', 'Subtraction using complements'],
          outcome: 'Adds and subtracts two-digit numbers mentally.',
        },
        {
          tag: 'Weeks 4–6',
          icon: '✖️',
          title: 'Multiplication patterns',
          text: 'The famous shortcuts—taught with the reason, not just the rule.',
          bullets: ['Multiplying by 11, 9 and 99', 'Numbers near a base (98 × 97)', 'Vertically and crosswise method', 'Why each pattern works'],
          outcome: 'Multiplies two-digit numbers without written working.',
        },
        {
          tag: 'Weeks 7–9',
          icon: '⏹️',
          title: 'Squares, cubes & division',
          text: 'Special-case patterns that make hard-looking questions quick.',
          bullets: ['Squares ending in 5', 'Squares near a base', 'Quick divisibility checks', 'Simple division shortcuts'],
          outcome: 'Squares two-digit numbers and checks answers fast.',
        },
        {
          tag: 'Weeks 10–12',
          icon: '🎯',
          title: 'Speed, accuracy & application',
          text: 'Mixed practice under friendly time pressure, plus school-style questions.',
          bullets: ['Mixed pattern recognition drills', 'Accuracy-first speed rounds', 'Applying shortcuts to school sums', 'Final mental maths challenge'],
          outcome: 'Chooses the right shortcut on the spot and explains it.',
        },
      ],
    },
    sections: [
      {
        title: 'Understanding first, speed second',
        text: 'Children learn why each pattern works before they are asked to be fast with it, so the technique survives once the class ends.',
        bullets: [
          'Every method is derived, not memorised',
          'Accuracy checkpoints before speed rounds',
          'Children explain their method aloud',
          'Friendly challenges instead of ranked tests',
        ],
      },
      {
        title: 'A complement, not a replacement',
        text: "The program adds flexible strategies; it does not replace a child's school syllabus or the need to understand mathematical concepts.",
      },
    ],
    cta: 'family',
  },
  {
    path: '/junior-skills/public-speaking',
    eyebrow: 'Public Speaking · Classes 1–5',
    title: 'Public speaking classes for kids in Hyderabad who deserve to be heard.',
    subtitle:
      'A five-stage speaking pathway from show-and-tell to clear, confident presentations and respectful conversation.',
    image: '/images/public-speaking.svg',
    imageAlt: 'A child speaking at a microphone with a friendly audience',
    chips: [
      { strong: 'Classes 1–5', span: 'Program tier' },
      { strong: 'Weekly', span: 'Practice frequency' },
      { strong: 'Storytelling', span: 'Focus area' },
      { strong: 'Presentations', span: 'Focus area' },
    ],
    quickAnswer:
      'Brolly Juniors runs public speaking classes for kids in Hyderabad, helping children in Classes 1–5 develop voice clarity, posture, vocabulary, storytelling, listening and presentation confidence through weekly age-appropriate activities.',
    curriculum: {
      eyebrow: 'Stage-wise curriculum',
      title: 'A five-stage confidence ladder',
      lead: 'No child is asked to give a speech in week one. Each stage adds one new demand—first the voice, then the structure, then the audience.',
      stages: [
        {
          tag: 'Stage 1',
          icon: '🗣️',
          title: 'Voice & show-and-tell',
          text: 'Getting comfortable being heard, on a topic the child already loves.',
          bullets: ['Volume, pace and clear endings', 'Standing tall and looking up', 'One-minute show-and-tell', 'Warm-up tongue twisters'],
          outcome: 'Speaks for a minute to the group without prompting.',
        },
        {
          tag: 'Stage 2',
          icon: '📚',
          title: 'Words & storytelling',
          text: 'Vocabulary and story shape—beginning, middle and a proper ending.',
          bullets: ['Describing words and feelings', 'Story sequencing', 'Voice expression and pauses', 'Retelling a favourite story'],
          outcome: 'Tells a complete story in order, with expression.',
        },
        {
          tag: 'Stage 3',
          icon: '👂',
          title: 'Listening & conversation',
          text: 'Speaking is half the skill; responding well is the other half.',
          bullets: ['Listening for the main point', 'Asking follow-up questions', 'Turn-taking and disagreeing politely', 'Paired interviews'],
          outcome: 'Holds a two-way conversation and responds to questions.',
        },
        {
          tag: 'Stage 4',
          icon: '🧭',
          title: 'Structure & spontaneous speaking',
          text: 'Organising ideas quickly, even without preparation time.',
          bullets: ['Point, reason, example, close', 'One-minute impromptu topics', 'Opening lines that grab attention', 'Handling a blank moment'],
          outcome: 'Speaks on a surprise topic with a clear structure.',
        },
        {
          tag: 'Stage 5',
          icon: '🎤',
          title: 'Presentation & showcase',
          text: 'Putting it together in front of a real audience, with visuals.',
          bullets: ['Simple slides and props', 'Gestures and eye contact', 'Answering audience questions', 'Final showcase presentation'],
          outcome: 'Delivers a prepared presentation and takes questions.',
        },
      ],
    },
    sections: [
      {
        title: 'A speaking ladder, not a one-day workshop',
        text: 'The program progresses from simple topics toward structured narratives, spontaneous speaking and visual presentations.',
        bullets: ['Speak clearly', 'Organise ideas', 'Listen and respond', 'Present with confidence'],
      },
      {
        title: 'Confidence without pressure',
        text: 'The learning environment emphasises psychological safety. Assessment focuses on willingness, clarity and communication rather than accent or memorisation standards.',
      },
    ],
    cta: 'family',
  },
  {
    path: '/junior-skills/digital-literacy',
    eyebrow: 'Digital Literacy · Classes 1–5',
    title: 'Digital literacy classes for kids in Hyderabad, safe and capable.',
    subtitle:
      'Practical computer habits, online safety, creative tools and age-appropriate introductions to how modern technology works.',
    image: '/images/digital-literacy.svg',
    imageAlt: 'A laptop with creative tools, a safety shield and folders',
    chips: [
      { strong: 'Computer basics', span: 'Core area' },
      { strong: 'Online safety', span: 'Core area' },
      { strong: 'Creative tools', span: 'Core area' },
      { strong: 'Responsible use', span: 'Core area' },
    ],
    quickAnswer:
      'Brolly Juniors runs digital literacy classes for kids in Hyderabad, helping children use computers carefully and confidently, with lessons on devices, files, typing, search awareness, privacy, communication and creative projects.',
    curriculum: {
      eyebrow: 'Module-wise curriculum',
      title: 'Six modules that build capability and caution together',
      lead: 'Every module pairs a "what you can now do" skill with a "when to stop and ask" habit.',
      stages: [
        {
          tag: 'Module 1',
          icon: '💻',
          title: 'Devices & desktop basics',
          text: 'Confident, careful handling of the machine itself.',
          bullets: ['Parts of a computer', 'Mouse, trackpad and shortcuts', 'Opening, closing and saving', 'Caring for a device'],
          outcome: 'Starts, uses and shuts down a computer independently.',
        },
        {
          tag: 'Module 2',
          icon: '⌨️',
          title: 'Typing & documents',
          text: 'Getting ideas onto the screen without hunting for keys.',
          bullets: ['Home-row typing practice', 'Writing and formatting a document', 'Headings, lists and pictures', 'Printing and exporting'],
          outcome: 'Types and formats a one-page document.',
        },
        {
          tag: 'Module 3',
          icon: '🗂️',
          title: 'Files, folders & organisation',
          text: 'Where work lives, and how to find it again next week.',
          bullets: ['Naming files sensibly', 'Folders and moving files', 'Copy, rename and delete safely', 'Cloud versus device storage'],
          outcome: 'Keeps an organised folder of their own work.',
        },
        {
          tag: 'Module 4',
          icon: '🔎',
          title: 'Searching & spotting the truth',
          text: 'Finding information—and questioning what comes back.',
          bullets: ['Writing a good search', 'Comparing two sources', 'Adverts versus results', 'Age-appropriate fact-checking'],
          outcome: 'Answers a question using two checked sources.',
        },
        {
          tag: 'Module 5',
          icon: '🛡️',
          title: 'Online safety & privacy',
          text: 'The rules that keep a young user safe, taught as habits.',
          bullets: ['What is private information', 'Strong passwords', 'Unkind messages and what to do', 'When to stop and tell an adult'],
          outcome: 'Explains their own safety rules and follows them.',
        },
        {
          tag: 'Module 6',
          icon: '🎨',
          title: 'Create, don’t only consume',
          text: 'Screen time becomes making time with a real finished project.',
          bullets: ['Simple design and drawing tools', 'Slides and visual stories', 'Presenting the project', 'Feedback and improvement'],
          outcome: 'Builds and presents a digital project of their own.',
        },
      ],
    },
    sections: [
      {
        title: 'Capability and safety grow together',
        text: 'Children learn what technology can do while understanding when to pause, ask an adult and protect their information.',
      },
      {
        title: "Create, don't only consume",
        text: 'Projects include documents, visual stories, presentations and organised digital folders—so screen time becomes making time.',
      },
    ],
    cta: 'family',
  },

  /* ---------- Schools ---------- */
  {
    path: '/schools/school-partnership-program',
    eyebrow: 'School partnerships',
    title: 'School partnership programs in Hyderabad, built around measurable learning.',
    subtitle:
      'A practical framework for introducing future skills without adding avoidable operational burden to the school.',
    image: '/images/schools.svg',
    imageAlt: 'A school building with a calendar and graduation cap',
    chips: [
      { strong: 'Planning', span: 'Program stage' },
      { strong: 'Delivery', span: 'Program stage' },
      { strong: 'Assessment', span: 'Program stage' },
      { strong: 'Showcase', span: 'Program stage' },
    ],
    quickAnswer:
      'Partnerships include curriculum planning, scheduled instruction, student projects, assessment checkpoints, progress communication and annual showcases—customised per school agreement.',
    curriculum: {
      eyebrow: 'Implementation pathway',
      title: 'From first conversation to a running classroom',
      lead: 'Four stages, each with a clear owner and a decision point, so a school always knows what happens next.',
      stages: [
        {
          tag: 'Stage 1',
          icon: '🤝',
          title: 'Discovery meeting',
          text: 'Understanding the school before proposing anything.',
          bullets: ['Grades, cohort sizes and timetable', 'Lab and device availability', 'Existing computer syllabus', 'Goals for the academic year'],
          outcome: 'A shared, written picture of what the school needs.',
        },
        {
          tag: 'Stage 2',
          icon: '🗺️',
          title: 'Program mapping',
          text: 'Selecting pathways and mapping 72 sessions onto the school calendar.',
          bullets: ['AI, Python or both', 'Class-wise curriculum selection', 'Calendar around exams and holidays', 'Trainer and resource plan'],
          outcome: 'An agreed scope, schedule and delivery format.',
        },
        {
          tag: 'Stage 3',
          icon: '🚀',
          title: 'Pilot or launch',
          text: 'Starting small or starting full—whichever the school prefers.',
          bullets: ['Sample class or workshop', 'Trainer onboarding', 'Student and teacher orientation', 'First module delivery'],
          outcome: 'Classes running with the first projects underway.',
        },
        {
          tag: 'Stage 4',
          icon: '📊',
          title: 'Review checkpoints',
          text: 'Regular evidence that the program is doing what it promised.',
          bullets: ['Mid-term progress reports', 'Student project reviews', 'Teacher and coordinator feedback', 'Annual showcase'],
          outcome: 'Documented progress and a plan for the next year.',
        },
      ],
    },
    sections: [
      {
        title: 'From needs discussion to classroom delivery',
        text: 'A clear, low-friction process takes a school from first conversation to running classes.',
        bullets: ['Discovery meeting', 'Program mapping', 'Pilot or launch', 'Review checkpoints'],
      },
      {
        title: 'Built for continuity',
        text: 'Class-wise progression prevents repetition and builds skills over multiple years.',
      },
    ],
    cta: 'school',
  },
  {
    path: '/schools/annual-academic-program',
    eyebrow: 'Annual academic program',
    title: 'An annual academic program for schools, 36 weeks long.',
    subtitle:
      'Two one-hour sessions each week, 72 sessions per pathway, with projects and review points across the school year.',
    image: '/images/methodology.svg',
    imageAlt: 'A four-step learning cycle: explain, practise, create, reflect',
    chips: [
      { strong: '36 weeks', span: 'Program duration' },
      { strong: '2 / week', span: 'Session frequency' },
      { strong: '72 sessions', span: 'Total sessions' },
      { strong: 'June/July–March', span: 'Timeline' },
    ],
    quickAnswer:
      'The Brolly Juniors annual academic model runs for 36 instructional weeks from the June/July period to March. AI and Python are separate pathways, each containing 72 one-hour sessions and a structured class-wise curriculum.',
    curriculum: {
      eyebrow: 'Inside one module',
      title: 'How eight sessions are actually spent',
      lead: 'Nine modules of eight sessions make up the 72-session year. Every module follows the same predictable rhythm.',
      stages: [
        {
          tag: 'Sessions 1–2',
          icon: '💡',
          title: 'Explain',
          text: 'The concept is modelled live, with examples the class can question.',
          bullets: ['Concept introduction', 'Live demonstration', 'Vocabulary for the module', 'Success criteria shared upfront'],
          outcome: 'Students can describe what they are about to build.',
        },
        {
          tag: 'Sessions 3–4',
          icon: '🛠️',
          title: 'Practise',
          text: 'Guided activities with the educator circulating and correcting.',
          bullets: ['Step-by-step guided tasks', 'Common mistakes surfaced early', 'Peer checking', 'Short recall quizzes'],
          outcome: 'Students complete the core skill with support.',
        },
        {
          tag: 'Sessions 5–7',
          icon: '🏆',
          title: 'Create',
          text: 'Independent project work—the artefact for this module.',
          bullets: ['Own problem or brief', 'Build, test and debug', 'Documentation of choices', 'Educator checkpoints'],
          outcome: 'A working module project per student.',
        },
        {
          tag: 'Session 8',
          icon: '🧭',
          title: 'Reflect & review',
          text: 'Presenting the work, then recording what changed and why.',
          bullets: ['Short demonstrations', 'Peer and educator feedback', 'Reflection notes for the portfolio', 'Readiness check for the next module'],
          outcome: 'Progress captured before the next module starts.',
        },
      ],
    },
    sections: [
      {
        title: 'A clear instructional rhythm',
        text: 'Each eight-session module combines explanation, guided activity, independent practice, project work and review. Nine modules complete the annual pathway.',
      },
      {
        title: 'Calendar planning with the school',
        text: 'The 72 sessions are mapped around examinations, holidays and school events before implementation begins.',
      },
    ],
    cta: 'school',
  },
  {
    path: '/schools/request-proposal',
    eyebrow: 'Request a proposal',
    title: 'Request a Brolly Juniors school proposal.',
    subtitle:
      'Tell us the classes, approximate student count and program interest. We will arrange a discussion before recommending a format.',
    image: '/images/contact.svg',
    imageAlt: 'A phone, chat bubbles and a location pin',
    chips: [
      { strong: 'Needs discussion', span: 'Step 1' },
      { strong: 'Custom scope', span: 'Step 2' },
      { strong: 'Academic planning', span: 'Step 3' },
      { strong: 'Implementation', span: 'Step 4' },
    ],
    quickAnswer:
      'Schools may request proposals for annual AI or Python curricula, clubs, workshops, innovation labs or teacher training. A needs discussion happens before scope, timeline and pricing are proposed.',
    sections: [
      {
        title: 'What to share',
        text: 'To prepare a useful first conversation, share:',
        bullets: [
          'School name and city',
          'Grades and estimated student numbers',
          'Computer lab availability',
          'Preferred program and academic calendar',
          'Contact person details',
        ],
      },
      {
        title: 'How it works',
        text: 'The Brolly Juniors academic team schedules a conversation, assesses requirements and recommends an appropriate pilot or annual pathway.',
      },
    ],
    cta: 'school',
  },
  {
    path: '/schools/ai-curriculum',
    eyebrow: 'AI curriculum for schools',
    title: 'A class-wise AI curriculum for modern schools.',
    subtitle:
      'Responsible, practical artificial intelligence education for Classes 6–10—72 sessions for every class.',
    image: '/images/ai.svg',
    imageAlt: 'A friendly AI robot beside a chat window',
    chips: [
      { strong: 'Classes 6–10', span: 'Coverage' },
      { strong: '72 sessions', span: 'Per class' },
      { strong: 'Projects', span: 'Every module' },
      { strong: 'AI safety', span: 'Embedded throughout' },
    ],
    quickAnswer:
      'Students use suitable AI tools for learning, research, communication and projects while practising privacy, verification, attribution, bias awareness and responsible decision-making.',
    sections: [
      {
        title: 'One framework, five levels',
        text: 'Class 6 focuses on safe everyday use; Classes 7–8 develop prompting and multimodal creation; Classes 9–10 advance to evaluation and automation concepts. Each class receives 36 weeks, 72 sessions, 9 modules and 1 capstone project.',
      },
      {
        title: 'Durable by design',
        text: 'The curriculum teaches durable concepts and workflows, allowing individual platforms to be replaced when safety, access or capability changes.',
      },
    ],
    cta: 'school',
  },
  {
    path: '/schools/python-curriculum',
    eyebrow: 'Python curriculum for schools',
    title: 'A five-year Python coding curriculum for schools.',
    subtitle:
      'Progressive programming from Class 6 foundations to Class 10 applications, data, web development and responsible AI concepts.',
    image: '/images/python.svg',
    imageAlt: 'A code editor window with a friendly python snake',
    chips: [
      { strong: 'Classes 6–10', span: 'Program structure' },
      { strong: 'Coding practice', span: 'Skill development' },
      { strong: 'Projects', span: 'Hands-on creation' },
      { strong: 'Capstones', span: 'Year-end demos' },
    ],
    quickAnswer:
      'The school Python pathway provides a separate 72-session curriculum for every class from 6 to 10. Students learn through live coding, debugging, mini-projects and annual capstones, with progression that avoids teaching the same basics every year.',
    sections: [
      {
        title: 'Progress students can show',
        text: 'Each module ends in a working artefact. Annual showcases give students a reason to document, explain and improve their code.',
      },
      {
        title: 'Infrastructure',
        text: 'A computer lab with regular student access is recommended. Technical requirements are reviewed with the school before delivery.',
      },
    ],
    cta: 'school',
  },
  {
    path: '/schools/ai-and-coding-clubs',
    eyebrow: 'AI & coding clubs',
    title: 'AI and coding clubs for schools in Hyderabad that turn curiosity into projects.',
    subtitle:
      'A flexible, project-led format for students who want to explore beyond a standard classroom period.',
    image: '/images/projects.svg',
    imageAlt: 'A rocket, chart and prototype cards from a project showcase',
    chips: [
      { strong: 'After-school', span: 'Format' },
      { strong: 'Projects', span: 'Focus' },
      { strong: 'Teamwork', span: 'Element' },
      { strong: 'Showcases', span: 'Component' },
    ],
    quickAnswer:
      'Brolly Juniors AI and Coding Clubs offer guided project time, collaborative challenges, demonstrations and showcases. Clubs can complement—not duplicate—the annual curriculum.',
    sections: [
      {
        title: 'A club should feel like a studio',
        text: 'Students choose problems, test ideas, receive coaching and present both unfinished and completed work.',
      },
      {
        title: 'Themes that keep participation fresh',
        text: 'Possible themes include AI for school life, coding games, digital storytelling, data challenges and community problem-solving.',
      },
    ],
    cta: 'school',
  },
  {
    path: '/schools/teacher-training',
    eyebrow: 'Teacher training',
    title: 'Practical AI and coding teacher training in Hyderabad.',
    subtitle:
      'Help educators use AI thoughtfully for planning, explanation, assessment design and administration while protecting student trust.',
    image: '/images/teacher-training.svg',
    imageAlt: 'A teacher presenting at a board with AI planning tools',
    chips: [
      { strong: 'Planning', span: 'Pillar' },
      { strong: 'Verification', span: 'Pillar' },
      { strong: 'Policy', span: 'Pillar' },
      { strong: 'Classroom use', span: 'Pillar' },
    ],
    quickAnswer:
      'Training addresses practical AI workflows, prompt design, verification, privacy, academic integrity and classroom policies—customised by grade level and school priorities.',
    curriculum: {
      eyebrow: 'Training modules',
      title: 'Four modules educators can use the next morning',
      lead: 'Each module ends with a template, checklist or policy draft the teacher takes back to the staffroom.',
      stages: [
        {
          tag: 'Module 1',
          icon: '🧾',
          title: 'Planning & preparation',
          text: 'Using AI for lesson plans, differentiation and explanations—without losing the teacher’s voice.',
          bullets: ['Prompting for lesson objectives', 'Differentiated worksheets', 'Explaining a concept three ways', 'Reusable prompt templates'],
          outcome: 'A personal prompt template set for planning.',
        },
        {
          tag: 'Module 2',
          icon: '🔍',
          title: 'Verification & accuracy',
          text: 'Where AI is wrong, and how to catch it before students see it.',
          bullets: ['Hallucinations in subject content', 'Source checking workflow', 'Reviewing generated questions', 'Subject-specific pitfalls'],
          outcome: 'A review checklist applied to generated material.',
        },
        {
          tag: 'Module 3',
          icon: '📐',
          title: 'Assessment design',
          text: 'Setting work that AI cannot simply complete for the student.',
          bullets: ['AI-resistant task design', 'Process evidence and drafts', 'Oral defence and demonstrations', 'Rubrics for AI-assisted work'],
          outcome: 'One redesigned assessment for their own class.',
        },
        {
          tag: 'Module 4',
          icon: '⚖️',
          title: 'Policy & classroom practice',
          text: 'Clear, fair rules students and parents can understand.',
          bullets: ['Privacy and student data', 'Academic integrity expectations', 'Age-appropriate tool access', 'Communicating the policy home'],
          outcome: 'A draft classroom AI policy ready for review.',
        },
      ],
    },
    sections: [
      {
        title: 'Teacher judgement stays central',
        text: 'AI is treated as an assistant. Educators remain responsible for accuracy, context, fairness and decisions affecting students.',
      },
      {
        title: 'From isolated tips to repeatable workflows',
        text: 'Educators receive tested templates, review checklists and practical examples they can reuse across the term.',
      },
    ],
    cta: 'school',
  },

  /* ---------- Explore ---------- */
  {
    path: '/student-projects',
    eyebrow: 'Student projects',
    title: 'Projects that make learning visible.',
    subtitle:
      'From first prompts and Python games to research explainers, podcasts, chatbots and capstone applications.',
    image: '/images/projects.svg',
    imageAlt: 'A rocket, data chart and prototype cards from student projects',
    chips: [
      { strong: 'Mini-projects', span: 'Every module' },
      { strong: 'Capstones', span: 'Every year' },
      { strong: 'Reflection', span: 'Documented' },
      { strong: 'Showcases', span: 'Public demos' },
    ],
    quickAnswer:
      'Every Brolly Juniors annual AI and Python module produces a student artefact. The purpose is not only to finish a project, but to explain the problem, choices, verification, testing and learning behind it.',
    sections: [
      {
        title: 'AI project pathways',
        text: 'Students develop study tools, cited explainers, visual campaigns, podcasts, videos, chatbot prototypes, data stories and AI-for-good concepts.',
      },
      {
        title: 'Python project pathways',
        text: 'Progression includes quizzes, simulations, games, data tools, databases, web applications and responsible AI-enabled features.',
      },
    ],
    cta: 'family',
  },
  /* /resources is no longer an info page. It described guides without linking
     to any, which is a thin page by any definition — it is now a real hub over
     src/data/articles.js, rendered by pages/Resources.jsx. */
  {
    path: '/teaching-methodology',
    eyebrow: 'How we teach',
    title: 'Explain. Practise. Create. Reflect.',
    subtitle:
      'A repeatable learning cycle that turns new ideas into working skills and visible student confidence.',
    image: '/images/methodology.svg',
    imageAlt: 'A four-step learning cycle: explain, practise, create, reflect',
    chips: [
      { strong: '💡 Explain', span: 'Clear explanation' },
      { strong: '🛠️ Practise', span: 'Guided activities' },
      { strong: '🏆 Create', span: 'Visible outcomes' },
      { strong: '🧭 Reflect', span: 'Completes the cycle' },
    ],
    quickAnswer:
      'Brolly Juniors lessons use a four-part cycle: clear explanation, guided practice, independent creation and reflection. Annual programs add module projects, review checkpoints and a final showcase.',
    sections: [
      {
        title: 'Small steps, meaningful projects',
        text: 'Students first see a concept modelled, then practise with support, apply it to a task and explain what worked or changed.',
      },
      {
        title: 'Feedback children can use',
        text: 'Feedback identifies the next improvement rather than labelling a child as naturally good or bad at a skill.',
      },
    ],
    cta: 'family',
  },
];
