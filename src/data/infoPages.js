import { phonicsFaqs, abacusFaqs } from './site.js';

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
        title: 'What are abacus classes for kids?',
        text: 'An abacus is a simple frame with beads on rods. Each rod stands for a place value — ones, tens, hundreds — and each bead has a fixed worth. A child sets a number by sliding beads, then adds or subtracts by moving them. Once the movements are familiar the tool starts to move inward: the child pictures the same beads instead of touching them, and calculates from that mental image. That shift, from a tool in the hand to a picture in the head, is what people mean by mental maths.',
        bullets: [
          'See → move → understand → visualise → calculate',
          'Sounds and rules taught in the order calculation needs them',
          'Children placed by what they can already do, not only by age',
          'The physical stage is never rushed — the mental stage is built on it',
        ],
      },
      {
        title: 'Why the abacus works for young children',
        text: 'Numbers are abstract. Beads are not. The abacus gives a child something to look at and touch while an idea like carrying over is still new, so the idea has somewhere to live before it becomes purely mental.',
        bullets: ['Place value', 'Number bonds', 'Finger accuracy', 'Visual memory'],
      },
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
    /* Extra blocks, rendered by components/Shared.jsx → PageBlocks.
     *
     * Brought across from the abacus content brief. Four of its sections are
     * deliberately not here: the mentor profiles, the parent reviews, the
     * five-level ladder and the curriculum-by-theme list. The first two were
     * placeholders the brief itself marked "do not publish invented
     * credentials"; the last two duplicate the real ten-level curriculum
     * above, which is the one that describes what is actually taught. */
    blocks: [
      {
        kind: 'cards',
        eyebrow: 'Why it works',
        title: 'Why choose abacus learning for your child?',
        lead: 'Abacus is a practice-based skill programme, not a shortcut to school marks. This is what regular, structured practice helps a child build.',
        items: [
          {
            icon: '⚡',
            title: 'Faster calculation',
            text: 'Working through structured bead patterns repeatedly makes common calculations quicker to reach, because the child recognises the pattern instead of rebuilding it each time.',
          },
          {
            icon: '🎯',
            title: 'Concentration',
            text: 'Each sum has to be finished before the next one starts. Sessions are built around short bursts of focused attention — a skill children practise, not one they either have or lack.',
          },
          {
            icon: '🧠',
            title: 'Memory and recall',
            text: 'Repeated number exercises give children practice at holding a value in mind while working on the next one, and at recalling combinations they have met before.',
          },
          {
            icon: '🔢',
            title: 'Number sense',
            text: 'Children get comfortable with how numbers behave — what is bigger, what breaks into what, what a reasonable answer looks like. That comfort carries into ordinary school maths.',
          },
          {
            icon: '👁️',
            title: 'Visualisation',
            text: 'Mental calculation asks the child to hold a picture of the abacus in their head and change it. Visualising something and then altering it deliberately is a genuinely useful thinking habit.',
          },
          {
            icon: '🌟',
            title: 'Confidence',
            text: 'Getting steadily better at something visible changes how a child feels about numbers. Most parents notice the willingness to attempt a sum before they notice the speed.',
          },
        ],
        note: 'These are learning outcomes that regular practice supports. They are not medical, psychological or guaranteed academic results, and no programme can promise them for every child.',
      },
      {
        kind: 'cards',
        columns: 4,
        eyebrow: 'Beyond arithmetic',
        title: 'Skills children develop through abacus learning',
        lead: 'Ten things abacus practice touches, beyond the calculation itself.',
        items: [
          { title: 'Number sense', text: 'Recognising how numbers split, combine and compare.' },
          { title: 'Mental calculation', text: 'Working an answer out without paper or a device.' },
          { title: 'Concentration', text: 'Staying with one problem until it is finished.' },
          { title: 'Memory', text: 'Holding numbers in mind while working on the next step.' },
          { title: 'Visualisation', text: 'Picturing the abacus and changing that picture accurately.' },
          { title: 'Listening', text: 'Following numbers read aloud in flash and dictation rounds.' },
          { title: 'Accuracy', text: 'Valuing a correct answer over a fast wrong one.' },
          { title: 'Problem solving', text: 'Choosing an approach when the sum is not straightforward.' },
          { title: 'Confidence', text: 'Being willing to attempt a number problem unprompted.' },
          { title: 'Learning discipline', text: 'Keeping a short daily practice habit going.' },
        ],
      },
      {
        kind: 'ages',
        eyebrow: 'Starting point',
        title: 'Abacus classes for different age groups',
        lead: 'Children join at different stages, so the starting level is set by a short assessment during the trial class rather than by age alone. These bands show how the focus typically shifts as children grow.',
        items: [
          {
            title: 'Ages 5–7',
            kv: 'Foundation stage',
            text: 'Getting comfortable with the tool and with numbers themselves.',
            bullets: ['Number recognition', 'Basic counting', 'Simple bead movements', 'Seeing numbers visually'],
          },
          {
            title: 'Ages 7–9',
            kv: 'Skill-building stage',
            text: 'Real calculation begins, with the first steps toward mental work.',
            bullets: ['Addition', 'Subtraction', 'Number combinations', 'Guided mental practice'],
          },
          {
            title: 'Ages 9–11',
            kv: 'Mental maths development',
            text: 'The abacus moves into the head and the work gets more demanding.',
            bullets: ['Larger mixed calculations', 'Visualisation', 'Speed with accuracy', 'Problem solving'],
          },
        ],
        cta: { label: 'Find the right starting point', to: '/book-free-demo' },
      },
      {
        kind: 'steps',
        eyebrow: 'The method',
        title: 'How abacus learning works',
        lead: 'Six stages, in order. Most children spend the longest on stages three and four.',
        items: [
          {
            title: 'Learn the abacus',
            text: 'The child meets the frame, the rods and the beads, and learns what each part is worth.',
          },
          {
            title: 'Understand number positions',
            text: 'Ones, tens and hundreds stop being words and become places the child can point to.',
          },
          {
            title: 'Practise basic calculations',
            text: 'Addition and subtraction on the beads — slowly and correctly before quickly.',
          },
          {
            title: 'Develop visualisation',
            text: 'The child begins to picture the abacus rather than touch it, starting with small numbers.',
          },
          {
            title: 'Move to mental calculation',
            text: 'The picture does the work. The physical abacus is used less and less.',
          },
          {
            title: 'Practise speed and accuracy',
            text: 'Timed and mixed exercises, with accuracy kept ahead of speed throughout.',
          },
        ],
      },
      {
        kind: 'rhythm',
        eyebrow: 'Inside a session',
        title: 'What happens in an abacus class?',
        lead: 'A session has a predictable shape. Children settle faster when they know what is coming next, and you can see exactly what the hour is spent on.',
        items: [
          { title: 'Warm-up', text: 'A short number game or quick recall round to get everyone into the right frame of mind.' },
          { title: 'Concept introduction', text: 'The educator introduces the day’s idea on the board and on the abacus, with worked examples.' },
          { title: 'Guided practice', text: 'Children try the new idea while the educator watches finger technique and corrects errors early.' },
          { title: 'Interactive activity', text: 'A game, challenge or paired activity that uses the same skill in a different form.' },
          { title: 'Mental maths practice', text: 'A set worked without the physical abacus, at whatever level the child has reached.' },
          { title: 'Recap and practice set', text: 'A quick review of what was covered, plus the short practice to do before the next class.' },
        ],
        cta: { label: 'See it for yourself — book a trial', to: '/book-free-demo' },
      },
      {
        kind: 'cards',
        columns: 4,
        eyebrow: 'Not just drills',
        title: 'Fun abacus activities for kids',
        lead: 'Activities that teach something, rather than fill time.',
        items: [
          { title: 'Number flash challenges', text: 'Numbers appear briefly and the child adds them as they go — listening, memory and speed practised together.' },
          { title: 'Abacus calculation games', text: 'Turn-based bead games where the correct answer moves the game forward.' },
          { title: 'Mental maths challenges', text: 'Short sets worked entirely in the head, at each child’s own level.' },
          { title: 'Number memory activities', text: 'Holding a sequence in mind and reproducing or working with it afterwards.' },
          { title: 'Speed calculation rounds', text: 'Timed sets where accuracy still counts more than finishing first.' },
          { title: 'Visualisation exercises', text: 'Picturing bead movements with eyes closed before saying the answer.' },
          { title: 'Puzzle-based number activities', text: 'Missing-number and pattern puzzles that need reasoning as well as calculation.' },
          { title: 'Dictation rounds', text: 'The educator reads numbers aloud at a steady pace and children keep up on the abacus.' },
        ],
      },
      {
        kind: 'compare',
        eyebrow: 'Straight answers',
        title: 'Why parents choose Brolly Juniors for abacus',
        lead: 'What we actually do differently, and what we will not tell you.',
        us: {
          title: 'How we teach abacus',
          items: [
            'Child-friendly pace — lessons follow understanding, not a fixed weekly schedule',
            'Structured progression, so each level ends where the next begins and nothing is skipped',
            'Interactive learning: games, flash rounds and paired activities alongside written practice',
            'Regular short practice — a small set between classes beats one long session a week',
            'Parent visibility: you are told what was covered and where your child needs work',
            'Skills beyond maths — concentration, accuracy and confidence are part of the programme',
          ],
        },
        them: {
          title: 'What we do not claim',
          items: [
            'No guaranteed exam marks or school rank improvements',
            'No claims about IQ, brain development or medical benefit',
            'No promise of a fixed timeline — children progress differently',
            'No results shown that we cannot evidence',
          ],
          note: 'We would rather set expectations you can hold us to.',
        },
      },
      {
        kind: 'cards',
        eyebrow: 'Classroom or online',
        title: 'Choose the right learning mode for your child',
        lead: 'Younger children, and children who fidget, usually do better in a classroom. Older children who are already independent often manage online well. Tell us about your child and we will say honestly which we would recommend.',
        items: [
          {
            icon: '🏫',
            title: 'Classroom abacus classes',
            text: 'At the centre near Nizampet X Roads, Hyderabad.',
            bullets: [
              'Interaction with other children',
              'Finger technique corrected directly',
              'Group and paired challenges',
              'Hands-on help in the moment',
            ],
          },
          {
            icon: '💻',
            title: 'Online abacus classes',
            text: 'Live, educator-led sessions from home.',
            bullets: [
              'No travel time',
              'Instructor-led live sessions',
              'Works around tight evenings',
              'Digital practice between classes',
            ],
          },
          {
            icon: '🕒',
            title: 'Batch timings',
            text: 'Batches change through the year as groups fill and new ones open, so we confirm current availability when you enquire rather than publish times that go stale.',
            bullets: ['Weekday, after school', 'Weekend batches', 'Straight-from-school slots', 'Flexible online slots'],
          },
        ],
      },
      {
        kind: 'plans',
        eyebrow: 'Fees',
        title: 'Abacus classes fees in Hyderabad',
        lead: 'Fees depend on the level, the learning mode and the duration your child enrols for, so a single number would be misleading. Tell us your child’s age and preferred mode and we will send the current fee for exactly that.',
        items: [
          {
            title: 'What the fee covers',
            kv: 'Included',
            items: [
              'Educator-led sessions',
              'Level practice material',
              'Progress updates for parents',
              'Guidance on home practice',
            ],
            cta: { label: 'Get current fees', to: '/contact' },
          },
          {
            title: 'What affects the fee',
            kv: 'Varies by',
            items: [
              'The level your child starts at',
              'Classroom or online',
              'Duration and batch frequency',
              'Whether an abacus kit is included',
            ],
            cta: { label: 'Ask us', to: '/contact' },
          },
          {
            title: 'Before you pay anything',
            kv: 'Free trial first',
            items: [
              'Attend the free trial class',
              'Meet the educator',
              'See the level placement',
              'Then decide',
            ],
            cta: { label: 'Book a free trial', to: '/book-free-demo' },
          },
        ],
        note: 'Fees vary with programme level, learning mode and duration. Nothing is payable before the trial class.',
      },
      {
        kind: 'cards',
        eyebrow: 'Progress',
        title: 'Track your child’s learning progress',
        lead: 'Abacus progress is easy to see once you know what to look at. Speed is the last thing to arrive and the first thing parents look for — these usually come earlier.',
        items: [
          {
            icon: '📋',
            title: 'What we share with you',
            text: 'After each level, and any time you ask.',
            bullets: [
              'Topics covered this level',
              'Practice completion',
              'Areas needing work',
              'Participation in class',
              'Level milestones',
            ],
          },
          {
            icon: '👀',
            title: 'Signs worth noticing at home',
            text: 'These show up well before calculation speed does.',
            bullets: [
              'Attempts a sum instead of asking for the answer',
              'Finishes a practice set without being reminded twice',
              'Can explain how they got there',
              'Stops reaching for fingers or paper on small sums',
            ],
          },
        ],
      },
      {
        kind: 'cards',
        columns: 4,
        eyebrow: 'At home',
        title: 'How parents can support abacus learning at home',
        lead: 'Ten to fifteen focused minutes on most days does more than an hour on Sunday. A few things that help.',
        items: [
          { title: 'Keep practice short and regular', text: 'A small daily set holds the skill in place. Long catch-up sessions tire children and teach them to dread it.' },
          { title: 'Give them a quiet corner', text: 'No television, no phone on the table. Abacus practice needs attention more than it needs time.' },
          { title: 'Praise the effort', text: '“You stayed with that one” is more useful than “you’re so quick”. Effort is something they can repeat.' },
          { title: 'Do not compare children', text: 'Siblings and classmates progress at different rates. Comparison is the fastest way to make a child quit.' },
          { title: 'Let them finish alone', text: 'Stepping in with the answer ends the thinking. Wait, even when it takes longer than you expected.' },
          { title: 'Ask them to explain', text: '“How did you get that?” tells you far more than the answer does, and strengthens their own understanding.' },
          { title: 'Keep a routine', text: 'The same slot each day, so practice becomes a habit rather than a negotiation.' },
          { title: 'Tell the educator what you see', text: 'If something at home is consistently hard, say so. It usually has a quick fix in class.' },
        ],
      },
      {
        kind: 'areas',
        eyebrow: 'Where we teach',
        title: 'Abacus classes in Hyderabad — where we teach',
        lead: 'Brolly Juniors teaches abacus from its centre at Nizampet X Roads. Families in the surrounding neighbourhoods usually find the classroom batches easiest to attend; if travel is difficult, ask about online sessions instead.',
        linkPrefix: 'Kids classes in',
        items: ['Nizampet', 'Bachupally', 'Kukatpally', 'Miyapur', 'Pragathi Nagar', 'Hydernagar'],
        note: 'Areas families travel in from — not branches. Only the neighbourhoods with a page of their own are linked.',
      },
      {
        kind: 'cards',
        eyebrow: 'What comes next',
        title: 'Explore more kids learning programs',
        lead: 'Children who take to abacus often enjoy these too.',
        items: [
          { icon: '♟️', title: 'Chess', text: 'Planning, patience and thinking a few moves ahead.', to: '/programs/chess' },
          { icon: '➗', title: 'Vedic Maths', text: 'Calculation shortcuts that complement abacus mental maths.', to: '/junior-skills/vedic-maths' },
          { icon: '🔢', title: 'Mental Maths', text: 'Number fluency without the bead frame.', to: '/programs/mental-maths' },
          { icon: '🧩', title: 'Brain Games', text: 'Puzzles and reasoning that build patience with hard problems.', to: '/programs/brain-games' },
          { icon: '💻', title: 'Coding for kids', text: 'Logic and step-by-step problem solving on a screen.', to: '/programs/coding' },
          { icon: '📚', title: 'School tuitions', text: 'Subject support alongside the skill programmes.', to: '/tuitions' },
        ],
      },
    ],    faqs: abacusFaqs,
    faqTitle: 'Frequently asked questions about abacus classes in Hyderabad',
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
    faqTitle: 'Public speaking classes: frequently asked questions',
    faqs: [
      {
        q: 'What are public speaking classes for kids?',
        a: 'They help children practise speaking clearly, sharing ideas, presenting to others, storytelling, body language and communication through age-appropriate activities. Every child speaks in every session rather than only listening.',
      },
      {
        q: 'What age can children start public speaking?',
        a: 'Often from around age five, starting with saying their name and speaking one or two sentences. Activities are adapted to the child’s age and communication level rather than fixed by year group.',
      },
      {
        q: 'My child is quiet around new people. Is this suitable?',
        a: 'Many children who join are quiet at first. Sessions start small, with speaking in pairs before any group, and children are never put on the spot. We would not describe these classes as a fix for shyness — if you have a specific concern about your child, that is a conversation for a professional.',
      },
      {
        q: 'Are public speaking classes suitable for beginners?',
        a: 'Yes. Beginners start with very small steps such as saying their name or describing a picture. Nobody is asked to give a speech on day one.',
      },
      {
        q: 'What do kids learn in public speaking classes?',
        a: 'Self introduction, clear speaking, voice practice, pronunciation, vocabulary, storytelling, show and tell, presentation structure, body language, eye contact, question answering, group speaking and how to organise ideas before speaking.',
      },
      {
        q: 'Do children learn presentation skills?',
        a: 'Yes — a simple six-part structure: greeting, topic introduction, main ideas, an example, conclusion and thank you. Having a structure removes most of the difficulty, because a child always knows what comes next.',
      },
      {
        q: 'Do public speaking classes include storytelling?',
        a: 'Yes, and it is one of the main activities, because a story gives children something to say and a natural order to say it in. Children practise a beginning, a middle and an ending.',
      },
      {
        q: 'Do children practise speaking in groups?',
        a: 'Yes. Children speak in pairs first, then to a small group, then to the whole class. Group discussions and question-answer activities are added once speaking to a few people feels comfortable.',
      },
      {
        q: 'Can children practise body language?',
        a: 'Yes: standing position, eye contact, facial expression, simple hand gestures and how to listen while someone else is speaking. These are taught as practical habits, not personality traits.',
      },
      {
        q: 'Can public speaking support school presentations?',
        a: 'It can. School presentations ask for the same things practised here — a clear structure, speaking loudly enough, and looking at the audience. We do not promise particular results, but the practice is directly relevant.',
      },
      {
        q: 'How can parents support public speaking at home?',
        a: 'Let your child talk about their day, ask open questions that need more than yes or no, encourage storytelling, and give them time to think before answering. Short daily conversation helps more than formal practice.',
      },
      {
        q: 'What should parents look for in a public speaking class?',
        a: 'How much each child actually speaks, and how large the group is. A class where children take turns rarely gives enough practice. Ask what a quiet child does in the first few sessions.',
      },
      {
        q: 'How much do public speaking classes cost?',
        a: 'Fees vary with the child’s age, level and learning format, so we share current fees directly rather than publishing one figure that may not apply to your child.',
      },
      {
        q: 'How can I book a public speaking trial class?',
        a: 'Use the booking form with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and how they usually are around new people, so the activities are pitched at the right level.',
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
    faqTitle: 'Digital literacy classes: frequently asked questions',
    faqs: [
      {
        q: 'What are digital literacy classes for kids?',
        a: 'Digital literacy classes for kids teach children how to use computers, digital tools and the internet safely and sensibly. Children practise real tasks such as saving a file, searching for information and recognising when something online is not safe.',
      },
      {
        q: 'Why should kids learn digital literacy?',
        a: 'Most children can already use a phone, but using a device is not the same as understanding it. Digital literacy gives children the skills to find information, judge whether it is reliable, protect their privacy and behave responsibly online.',
      },
      {
        q: 'What age can children start digital literacy classes?',
        a: 'Children can usually start once they are reading and can follow simple instructions on a screen. Younger children begin with computer basics and safe habits; older children move to search skills, privacy and practical digital tasks.',
      },
      {
        q: 'What do kids learn in digital literacy classes?',
        a: 'Computer basics, keyboard and mouse skills, files and folders, basic digital tools, internet and search basics, online safety, password and privacy awareness, digital communication and etiquette, and responsible technology use.',
      },
      {
        q: 'Are digital literacy classes useful for school students?',
        a: 'Yes. School work increasingly involves typing, saving files, looking things up and submitting work digitally. Digital literacy makes those everyday tasks quicker and less stressful for a child.',
      },
      {
        q: 'Do children learn internet safety?',
        a: 'Yes. Children learn practical safety habits such as keeping personal information private, using strong passwords, being careful with unknown links, and asking a trusted adult when something feels wrong.',
      },
      {
        q: 'Do kids learn about online privacy?',
        a: 'Yes. Children learn what counts as personal information, why it should not be shared with people they do not know, and how what they post can be seen by others later.',
      },
      {
        q: 'Are digital literacy classes suitable for beginners?',
        a: 'Yes. The programme starts from the basics, so a child who has never used a computer properly can begin comfortably.',
      },
      {
        q: 'Can digital literacy help children use technology responsibly?',
        a: 'It gives children the understanding and habits to make better choices online. Responsible use also depends on the child, on family rules and on ongoing conversation at home, so classes support that rather than replace it.',
      },
      {
        q: 'Is digital literacy the same as coding?',
        a: 'No. Digital literacy is about using computers and the internet well and safely. Coding is about writing instructions for a computer. Digital literacy usually comes first and makes coding classes easier to follow.',
      },
      {
        q: 'Does my child need a computer at home?',
        a: 'For classroom sessions, practice happens in the class. For online learning a suitable device and connection are needed. Confirm device requirements with us for the batch you are considering.',
      },
      {
        q: 'How much do digital literacy classes cost?',
        a: 'Fees depend on the child’s age, the programme structure, the learning mode and the duration, so we share current fees directly rather than publishing one figure. Ask us and you will get the number that applies to your child.',
      },
      {
        q: 'Are online classes available?',
        a: 'Availability of online and classroom batches changes over time. Contact us to check which learning modes are currently running for digital literacy.',
      },
      {
        q: 'How can I book a free digital literacy trial?',
        a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. We will confirm a suitable slot.',
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
