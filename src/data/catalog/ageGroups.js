/* Age groups — the same catalogue, entered from the other direction.
 *
 * A parent who knows their child is seven does not know whether they want
 * abacus or phonics. These four pages answer "what is right at this age",
 * which is a different question from "what is this class", and they route
 * into the programme pages rather than duplicating them.
 *
 * The menu shows all four side by side, which is why each carries a short
 * `stage` line — it is the card subtitle in the mega panel.
 */

export const ageGroups = {
  key: 'age-groups',
  label: 'Age Groups',
  /* The navbar has room for one word here; the hub page and the breadcrumb
     still say "Age Groups", where the extra word is doing real work. */
  navLabel: 'Age',
  allLabel: 'ages',
  base: '/age-groups',
  hubPath: '/age-groups',
  menuTitle: 'Learning by Age',
  /* The four ages read as four cards in the menu rather than one list inside
     a single card, so the navbar renders each item as its own panel card. */
  menuItemsAsCards: true,
  groups: [
    {
      id: 'by-age',
      title: 'Learning by age',
      icon: '🎈',
      blurb: 'Right learning experiences for every stage of a child’s growth.',
      items: [
        {
          slug: 'ages-3-5',
          name: 'Ages 3–5',
          icon: '👶',
          stage: 'Explore & Discover',
          summary: 'Phonics, art, music, movement and brain games.',
          seo: {
            title: 'Classes for 3 to 5 Year Olds in Hyderabad | Brolly Juniors',
            description:
              'Classes for 3 to 5 year olds in Hyderabad. Phonics, art, music, movement and brain games — play-led, screen-free and capped at eight children.',
            keyword: 'classes for 3 to 5 year olds in hyderabad',
            crumb: 'Ages 3–5',
          },
          page: {
            eyebrow: 'Ages 3–5 · Explore & Discover',
            title: 'Classes for 3 to 5 year olds in Hyderabad, where the job is still curiosity.',
            subtitle:
              'Phonics, art, music, movement and puzzles — short, play-led sessions that build the attention and language everything later depends on.',
            chips: [
              { strong: 'Ages 3–5', span: 'Age range' },
              { strong: '45 min', span: 'Session length' },
              { strong: 'Screen-free', span: 'Entirely' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'For 3 to 5 year olds Brolly Juniors runs short, play-led sessions in phonics, art, music, movement and brain games. Sessions are forty-five minutes, entirely screen-free and capped at eight children. Nothing at this stage is assessed, and the aim is sound awareness, fine motor control, attention and a child who likes coming.',
            curriculum: {
              eyebrow: 'What this stage needs',
              title: 'Four things worth building before school gets serious',
              lead: 'Almost everything a five-year-old needs to succeed later is one of these four. None of them is a subject.',
              stages: [
                {
                  tag: 'Foundation 1',
                  icon: '👂',
                  title: 'Sound & early language',
                  text: 'Hearing the sounds inside words is the single best predictor of later reading.',
                  bullets: ['Rhyme, rhythm and syllables', 'First letter sounds', 'Talking, listening and story'],
                  outcome: 'Hears and says the first sound in a word.',
                },
                {
                  tag: 'Foundation 2',
                  icon: '✋',
                  title: 'Hands & fine motor',
                  text: 'Grip, control and strength — the reason handwriting is comfortable or exhausting at six.',
                  bullets: ['Pencil grip and control', 'Cutting, threading, building', 'Drawing and painting'],
                  outcome: 'Holds a pencil correctly and controls a line.',
                },
                {
                  tag: 'Foundation 3',
                  icon: '🎯',
                  title: 'Attention & sitting',
                  text: 'Sustaining interest in one thing for fifteen minutes, which is entirely learnable.',
                  bullets: ['Finishing a chosen activity', 'Taking turns and waiting', 'Following two-step instructions'],
                  outcome: 'Stays with one activity for fifteen minutes.',
                },
                {
                  tag: 'Foundation 4',
                  icon: '🎵',
                  title: 'Movement & music',
                  text: 'Rhythm, coordination and the pure enjoyment that makes a child want to come back.',
                  bullets: ['Rhythm and clapping games', 'Balance and coordination', 'Singing and movement'],
                  outcome: 'Keeps a beat and moves in time.',
                },
              ],
            },
            sections: [
              {
                title: 'What we offer at this age',
                text: 'Phonics and Early Reading from age four, Brain Games from age five, and the youngest batches of Drawing and Painting, Singing, Dance, Music and Yoga. Everything else in the catalogue starts later, and we will say so rather than enrolling a three-year-old into something built for a seven-year-old.',
                bullets: [
                  'Phonics & Early Reading — from age 4',
                  'Brain Games, Drawing & Painting, Singing — from age 5',
                  'Dance, Music and Yoga — youngest batches from age 5',
                  'No academic tuition, and no homework, at this stage',
                ],
              },
              {
                title: 'What we deliberately do not do',
                text: 'No worksheets sent home, no assessment, no early academic pushing and no screens. A four-year-old made to sit through formal instruction learns mainly that learning is unpleasant, and that is remarkably hard to undo later.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'ages-6-8',
          name: 'Ages 6–8',
          icon: '🧒',
          stage: 'Build Foundations',
          summary: 'Abacus, maths, coding and communication.',
          seo: {
            title: 'Classes for 6 to 8 Year Olds in Hyderabad | Brolly Juniors',
            description:
              'Classes for 6 to 8 year olds in Hyderabad. Abacus, phonics, block coding, chess, art and public speaking — the foundation years, in batches of eight.',
            keyword: 'classes for 6 to 8 year olds in hyderabad',
            crumb: 'Ages 6–8',
          },
          page: {
            eyebrow: 'Ages 6–8 · Build Foundations',
            title: 'Classes for 6 to 8 year olds in Hyderabad, the years the foundations actually set.',
            subtitle:
              'Reading fluency, number sense, first logic and the confidence to speak up — the four things that make Classes 4 and 5 easy or hard.',
            chips: [
              { strong: 'Ages 6–8', span: 'Age range' },
              { strong: '60 min', span: 'Session length' },
              { strong: '1–2 classes', span: 'Recommended load' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'For 6 to 8 year olds Brolly Juniors offers Abacus, Phonics, Brain Games, Chess, block-based Coding, Drawing, Dance, Music and Public Speaking. Sessions are an hour, and we recommend no more than two classes a week at this age. This is the stage where reading fluency and number sense are either secured or quietly left behind.',
            curriculum: {
              eyebrow: 'What this stage needs',
              title: 'Four foundations worth getting right now',
              lead: 'Gaps that open in these three years are the ones that show up as "bad at maths" at eleven. They are far cheaper to close now.',
              stages: [
                {
                  tag: 'Foundation 1',
                  icon: '📖',
                  title: 'Reading fluency',
                  text: 'From decoding word by word to reading a sentence and hearing meaning in it.',
                  bullets: ['Blending and tricky words', 'Reading aloud with expression', 'Understanding what was read'],
                  outcome: 'Reads a levelled book aloud and retells it.',
                },
                {
                  tag: 'Foundation 2',
                  icon: '🔢',
                  title: 'Number sense',
                  text: 'Knowing what numbers mean and how they behave, before any speed is asked for.',
                  bullets: ['Place value and number bonds', 'Abacus visualisation', 'Mental strategies with names'],
                  outcome: 'Calculates mentally with a method they can explain.',
                },
                {
                  tag: 'Foundation 3',
                  icon: '🧩',
                  title: 'First logic',
                  text: 'Sequence, cause and consequence — through puzzles, chess and block coding.',
                  bullets: ['Sequencing and pattern', 'If-then reasoning', 'Planning two steps ahead'],
                  outcome: 'Plans a sequence before starting it.',
                },
                {
                  tag: 'Foundation 4',
                  icon: '🗣️',
                  title: 'Speaking up',
                  text: 'Being willing to answer, ask and be wrong in front of other children.',
                  bullets: ['Answering in front of a group', 'Asking when stuck', 'Short prepared talks'],
                  outcome: 'Volunteers an answer without being asked.',
                },
              ],
            },
            sections: [
              {
                title: 'What we offer at this age',
                text: 'Abacus and Phonics are the two most-taken classes at this age and complement each other well. Chess, Brain Games and block-based Coding suit children with energy for logic; Drawing, Dance, Music and Public Speaking round it out. Academic tuition starts from Class 4.',
                bullets: [
                  'Abacus (from 5), Phonics (to 9), Vedic Maths (from 8)',
                  'Chess, Brain Games and Coding from age 7',
                  'Drawing, Dance, Music, Singing, Yoga and Indoor Games',
                  'Public Speaking and Junior Skills for Classes 1–5',
                ],
              },
              {
                title: 'Two classes a week is plenty',
                text: 'Families often ask whether a child can take four. They can, and they should not. Two classes leaves room for the unstructured play that six to eight year olds still need, and children who are over-scheduled at this age stop enjoying any of it by about ten.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'ages-9-12',
          name: 'Ages 9–12',
          icon: '👦',
          stage: 'Develop New Skills',
          summary: 'Mental maths, Python, robotics and public speaking.',
          seo: {
            title: 'Classes for 9 to 12 Year Olds in Hyderabad | Brolly Juniors',
            description:
              'Classes for 9 to 12 year olds in Hyderabad. Python, robotics, mental maths, Vedic maths, public speaking and academic tuition from Class 4 onward.',
            keyword: 'classes for 9 to 12 year olds in hyderabad',
            crumb: 'Ages 9–12',
          },
          page: {
            eyebrow: 'Ages 9–12 · Develop New Skills',
            title: 'Classes for 9 to 12 year olds in Hyderabad, when interests start to become real.',
            subtitle:
              'Old enough for genuine skill and young enough that nothing is at stake yet — which makes this the best window a child gets.',
            chips: [
              { strong: 'Ages 9–12', span: 'Age range' },
              { strong: '60–90 min', span: 'Session length' },
              { strong: 'Classes 4–7', span: 'Tuition available' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'For 9 to 12 year olds Brolly Juniors offers Python and Coding, Robotics, Mental Maths, Vedic Maths, Chess, Public Speaking, Communication Skills, Financial Literacy and the creative and sports programmes — plus academic tuition from Class 4. This is the age where a child can commit to a real skill without exam pressure crowding it out.',
            curriculum: {
              eyebrow: 'What this stage needs',
              title: 'Four things this age is uniquely ready for',
              lead: 'Nine to twelve is the last stretch before board pressure starts eating discretionary time. It is worth spending deliberately.',
              stages: [
                {
                  tag: 'Focus 1',
                  icon: '⌨️',
                  title: 'A real technical skill',
                  text: 'Typed code and working hardware are both well within reach now, and land far better than they would at seven.',
                  bullets: ['Typed Python and real programs', 'Robotics with sensors and logic', 'Debugging as a normal activity'],
                  outcome: 'Builds and debugs something that works.',
                },
                {
                  tag: 'Focus 2',
                  icon: '🧮',
                  title: 'Fluent, flexible number work',
                  text: 'Strategy and speed together, which is exactly what secondary maths will assume.',
                  bullets: ['Mental strategies chosen deliberately', 'Vedic methods with reasoning', 'Estimating and self-checking'],
                  outcome: 'Chooses a method and checks their own answer.',
                },
                {
                  tag: 'Focus 3',
                  icon: '🎤',
                  title: 'Being heard',
                  text: 'Presenting, discussing and disagreeing — before self-consciousness peaks in the teenage years.',
                  bullets: ['Structured talks and presentations', 'Group discussion and listening', 'Disagreeing calmly'],
                  outcome: 'Presents to a group and handles questions.',
                },
                {
                  tag: 'Focus 4',
                  icon: '📚',
                  title: 'Study habits, early',
                  text: 'How to revise, how to plan and how to work when nobody is watching.',
                  bullets: ['Planning a week of work', 'Revising rather than rereading', 'Owning a mistake and fixing it'],
                  outcome: 'Plans and completes a week of work unprompted.',
                },
              ],
            },
            sections: [
              {
                title: 'What we offer at this age',
                text: 'Almost the whole catalogue is open by now. Python and Coding, Robotics, Mental and Vedic Maths, Chess, Public Speaking, Communication, Financial Literacy, Problem Solving, the arts and sports programmes, plus academic tuition from Class 4 and Olympiad Foundation from Class 4.',
                bullets: [
                  'Python and AI pathways from Class 6',
                  'Robotics, Coding and Problem Solving from age 8–9',
                  'Academic tuition and Olympiad Foundation from Class 4',
                  'Creative, communication and sports programmes throughout',
                ],
              },
              {
                title: 'Choosing between too many options',
                text: 'The honest advice is one skill programme and, if needed, one tuition subject. A child doing four things does none of them well enough to feel good at any of them, and feeling good at something is what makes an eleven-year-old keep going.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'ages-13-16',
          name: 'Ages 13–16',
          icon: '🧑',
          stage: 'Prepare for the Future',
          summary: 'AI, Python, advanced coding, leadership and life skills.',
          seo: {
            title: 'Classes for 13 to 16 Year Olds in Hyderabad | Brolly Juniors',
            description:
              'Classes for 13 to 16 year olds in Hyderabad. AI, Python, advanced coding, leadership, financial literacy and Class 8–10 tuition and foundation courses.',
            keyword: 'classes for 13 to 16 year olds in hyderabad',
            crumb: 'Ages 13–16',
          },
          page: {
            eyebrow: 'Ages 13–16 · Prepare for the Future',
            title: 'Classes for 13 to 16 year olds in Hyderabad, when time gets genuinely scarce.',
            subtitle:
              'Board pressure arrives and everything has to earn its place — so what remains should be either real skill or real academic support.',
            chips: [
              { strong: 'Ages 13–16', span: 'Age range' },
              { strong: '90 min', span: 'Session length' },
              { strong: 'Classes 8–10', span: 'Tuition & foundation' },
              { strong: 'Max 10', span: 'Students per batch' },
            ],
            quickAnswer:
              'For 13 to 16 year olds Brolly Juniors offers AI and Python pathways, advanced coding, Robotics, Leadership, Communication Skills, Financial Literacy and Problem Solving, alongside Class 8 to 10 academic tuition and IIT, JEE, NEET and Olympiad foundation courses. Timetables are built around school and board commitments.',
            curriculum: {
              eyebrow: 'What this stage needs',
              title: 'Four things worth protecting time for',
              lead: 'Everything else gets squeezed out by Class 10. These four repay the time they cost.',
              stages: [
                {
                  tag: 'Focus 1',
                  icon: '🤖',
                  title: 'Technology that compounds',
                  text: 'AI and Python at this age are not enrichment — they are the skills the next decade assumes.',
                  bullets: ['AI systems and how they fail', 'Python beyond the basics', 'Building and shipping projects'],
                  outcome: 'Builds a project worth showing to somebody.',
                },
                {
                  tag: 'Focus 2',
                  icon: '📈',
                  title: 'Academic depth',
                  text: 'Board syllabus taught properly, and taken deeper for students heading to competitive exams.',
                  bullets: ['Class 8–10 subject tuition', 'IIT, JEE and NEET foundation', 'Exam technique and error analysis'],
                  outcome: 'Improves both marks and understanding.',
                },
                {
                  tag: 'Focus 3',
                  icon: '🧭',
                  title: 'Leading and communicating',
                  text: 'Group work, delegation, feedback and disagreement — the skills that decide how far the rest goes.',
                  bullets: ['Leading a real team project', 'Structured group discussion', 'Giving and taking feedback'],
                  outcome: 'Leads a team project to a deadline.',
                },
                {
                  tag: 'Focus 4',
                  icon: '💰',
                  title: 'Life skills before they are needed',
                  text: 'Money, decisions and self-management, taught while the stakes are still zero.',
                  bullets: ['Budgeting, saving and interest', 'Recognising a bad deal or a scam', 'Planning and prioritising work'],
                  outcome: 'Manages a budget and defends a decision.',
                },
              ],
            },
            sections: [
              {
                title: 'What we offer at this age',
                text: 'The AI and Python annual pathways for Classes 6 to 10, advanced Coding and Robotics, Leadership, Communication Skills, Financial Literacy and Problem Solving — plus Class 8 to 10 tuition in maths, the three sciences, languages and social studies, and the four foundation tracks.',
                bullets: [
                  'AI and Python annual pathways, Classes 6–10',
                  'Class 8–10 tuition across all core subjects',
                  'IIT, JEE, NEET and Olympiad foundation',
                  'Leadership, Communication and Financial Literacy',
                ],
              },
              {
                title: 'An honest word about load',
                text: 'A Class 10 student cannot do three skill programmes and four tuitions, whatever the timetable claims. We would rather advise dropping something than watch a student attend everything badly, and we say so at enrolment rather than at the end of the term.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
  ],
};
