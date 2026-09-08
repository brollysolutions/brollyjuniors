/* Academic tuitions — Classes 4 to 10.
 *
 * These pages answer a different search from the programme pages, which is why
 * "Telugu" and "English" exist in both menus. A parent looking for tuition
 * types "class 8 physics tuition in hyderabad"; a parent looking for the
 * programme types "english classes for kids in hyderabad". Same subject, two
 * intents, two pages — and each page says plainly which one it is and links
 * across to the other.
 *
 * Mental Maths is not duplicated: the tuition menu links to the programme page
 * because there is genuinely only one such class.
 */

const BOARD_CHIP = { strong: 'CBSE · ICSE · State', span: 'Boards covered' };
const BATCH_CHIP = { strong: 'Max 8', span: 'Students per batch' };

export const tuitions = {
  key: 'tuitions',
  label: 'Tuitions',
  base: '/tuitions',
  hubPath: '/tuitions',
  menuTitle: 'Academic Tuitions',
  groups: [
    {
      id: 'languages',
      title: 'Languages',
      icon: '🗣️',
      blurb: 'Syllabus coverage, writing practice and exam technique.',
      items: [
        {
          slug: 'telugu',
          name: 'Telugu',
          icon: '🪔',
          summary: 'Textbook coverage, grammar and answer writing for the exam.',
          seo: {
            title: 'Telugu Tuition in Hyderabad | Class 4-10 | Brolly Juniors',
            description:
              'Telugu tuition in Hyderabad for Classes 4 to 10. Textbook coverage, vyakaranam, padyalu and answer-writing practice for CBSE, ICSE and State board exams.',
            keyword: 'telugu tuition in hyderabad',
            crumb: 'Telugu Tuition',
          },
          page: {
            eyebrow: 'Telugu Tuition · Classes 4–10',
            title: 'Telugu tuition in Hyderabad for children who lose marks on the paper, not the language.',
            subtitle:
              'Chapter-by-chapter textbook coverage, vyakaranam, padyalu and the answer-writing technique the exam actually rewards.',
            chips: [
              { strong: 'Classes 4–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Weekly', span: 'Written practice' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides Telugu tuition in Hyderabad for Classes 4 to 10 across CBSE, ICSE and State boards. Sessions follow the school textbook chapter by chapter, cover vyakaranam and padyalu, and build answer-writing technique through weekly written practice marked against the board pattern.',
            curriculum: {
              eyebrow: 'How the year runs',
              title: 'Four strands through every term',
              lead: 'Coverage keeps pace with school; the other three strands are what actually move the marks.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '📘',
                  title: 'Textbook coverage',
                  text: 'Every prescribed lesson read, explained and revised ahead of the school test, not after it.',
                  bullets: ['Chapter-wise explanation', 'Prose and poetry with meaning', 'Ahead of the school schedule'],
                  outcome: 'Enters each school test already revised.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🧩',
                  title: 'Vyakaranam',
                  text: 'Grammar taught as rules that can be applied, with the sandhi and samasa that carry reliable marks.',
                  bullets: ['Sandhulu and samasalu', 'Alankaralu and chandassu', 'Rule-based practice sets'],
                  outcome: 'Applies grammar rules to unseen examples.',
                },
                {
                  tag: 'Strand 3',
                  icon: '📜',
                  title: 'Padyalu & comprehension',
                  text: 'Verse memorisation with meaning, plus unseen passage technique.',
                  bullets: ['Padyalu with bhavam', 'Unseen passage strategy', 'Precise short answers'],
                  outcome: 'Answers an unseen passage confidently.',
                },
                {
                  tag: 'Strand 4',
                  icon: '✍️',
                  title: 'Answer writing & exams',
                  text: 'Structure, length and presentation for each mark weight, practised against past papers.',
                  bullets: ['Answer length by mark weight', 'Past-paper practice under time', 'Presentation and handwriting'],
                  outcome: 'Writes a full paper within the time limit.',
                },
              ],
            },
            sections: [
              {
                title: 'Marked the way the board marks it',
                text: 'Every written submission is marked against the board’s own pattern, with the mark breakdown shown. A child who has only ever seen a total does not know that four of their lost marks were presentation and two were length.',
                bullets: [
                  'Weekly written work marked and returned',
                  'Mark breakdown shown, not just a total',
                  'Past papers from Class 7 upward',
                  'Progress note to families each month',
                ],
              },
              {
                title: 'Looking for the language rather than the marks?',
                text: 'If your child understands Telugu but never learned to read or write it, and school marks are not the issue, the Telugu programme under Programmes is the better fit — it starts from the aksharamala and works towards fluency rather than following a textbook.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'english',
          name: 'English',
          icon: '📖',
          summary: 'Literature, grammar and writing to the board’s marking scheme.',
          seo: {
            title: 'English Tuition in Hyderabad | Class 4-10 | Brolly Juniors',
            description:
              'English tuition in Hyderabad for Classes 4 to 10. Literature, grammar, unseen passages and writing formats marked to the CBSE, ICSE and State pattern.',
            keyword: 'english tuition in hyderabad',
            crumb: 'English Tuition',
          },
          page: {
            eyebrow: 'English Tuition · Classes 4–10',
            title: 'English tuition in Hyderabad that turns fluent speakers into high scorers.',
            subtitle:
              'Literature, grammar, unseen comprehension and every writing format on the paper — marked against the board’s own scheme.',
            chips: [
              { strong: 'Classes 4–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Weekly', span: 'Marked writing' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides English tuition in Hyderabad for Classes 4 to 10 across CBSE, ICSE and State boards. Sessions cover the prescribed literature, grammar, unseen comprehension and the full range of writing formats — letters, notices, reports and essays — with weekly writing marked to the board pattern.',
            curriculum: {
              eyebrow: 'How the year runs',
              title: 'Four strands through every term',
              lead: 'Most marks lost in English are lost in the writing section, so that is where the practice weight sits.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '📚',
                  title: 'Literature',
                  text: 'Prose, poetry and drama explained for meaning, theme and character rather than summarised.',
                  bullets: ['Chapter-wise explanation', 'Theme, character and context', 'Reference-to-context practice'],
                  outcome: 'Answers a context question with textual evidence.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🧱',
                  title: 'Grammar',
                  text: 'Tenses, voice, narration and clauses drilled to the exact formats the paper uses.',
                  bullets: ['Tense, voice and narration', 'Editing and gap-fill formats', 'Clauses and sentence transformation'],
                  outcome: 'Completes a full grammar section accurately.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🔎',
                  title: 'Unseen comprehension',
                  text: 'A reliable method for a passage never seen before: scan, locate, infer, answer in the right length.',
                  bullets: ['Retrieval versus inference questions', 'Timing the passage section', 'Answering in the marked length'],
                  outcome: 'Scores consistently on unseen passages.',
                },
                {
                  tag: 'Strand 4',
                  icon: '✍️',
                  title: 'Writing formats',
                  text: 'Letter, notice, report, article, story and essay — each with its format marks learned cold.',
                  bullets: ['Format marks for each type', 'Planning within the time budget', 'Past-paper writing under time'],
                  outcome: 'Produces any format to the marking scheme.',
                },
              ],
            },
            sections: [
              {
                title: 'Format marks are the easiest marks on the paper',
                text: 'A notice with the wrong heading loses marks no matter how well it is written. Children learn each format’s skeleton until it is automatic, which frees the whole of their thinking for the content the examiner is actually reading.',
                bullets: [
                  'Every writing format drilled to its skeleton',
                  'Weekly writing marked with the board’s breakdown',
                  'Vocabulary built from the prescribed texts',
                  'Past papers from Class 7 upward',
                ],
              },
              {
                title: 'Tuition or the English programme?',
                text: 'This page is syllabus and exam work. If your child reads well but writes flatly, and marks are not the immediate worry, the English programme under Programmes builds comprehension, vocabulary and creative writing without following a textbook.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'hindi',
          name: 'Hindi',
          icon: '🇮🇳',
          summary: 'Vyakaran, textbook chapters and written practice.',
          seo: {
            title: 'Hindi Tuition in Hyderabad | Class 4-10 | Brolly Juniors',
            description:
              'Hindi tuition in Hyderabad for Classes 4 to 10. Vyakaran, textbook chapters, unseen passages and writing formats for CBSE, ICSE and State board exams.',
            keyword: 'hindi tuition in hyderabad',
            crumb: 'Hindi Tuition',
          },
          page: {
            eyebrow: 'Hindi Tuition · Classes 4–10',
            title: 'Hindi tuition in Hyderabad for children whose second language became their weakest paper.',
            subtitle:
              'Vyakaran taught as rules, textbook chapters covered ahead of school, and the writing formats where most Hindi marks are quietly lost.',
            chips: [
              { strong: 'Classes 4–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Weekly', span: 'Written practice' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides Hindi tuition in Hyderabad for Classes 4 to 10 across CBSE, ICSE and State boards. Sessions cover the prescribed gadya and padya chapters, vyakaran, unseen passages and writing formats such as patra lekhan and anuchhed, with weekly marked written practice.',
            curriculum: {
              eyebrow: 'How the year runs',
              title: 'Four strands through every term',
              lead: 'For most Hyderabad students Hindi is a third language, so vocabulary and writing get more weight here than in a Hindi-medium programme.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '📘',
                  title: 'Gadya & padya',
                  text: 'Prescribed prose and poetry explained with meaning, context and expected answers.',
                  bullets: ['Chapter-wise explanation', 'Bhavarth of prescribed poetry', 'Short and long answer practice'],
                  outcome: 'Answers chapter questions without the guide book.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🧩',
                  title: 'Vyakaran',
                  text: 'Sandhi, samas, kaarak and muhavare taught as rules, then applied to unseen examples.',
                  bullets: ['Sandhi, samas and upsarg-pratyay', 'Kaarak and vaakya bhed', 'Muhavare and lokoktiyan'],
                  outcome: 'Applies each rule to a word never seen before.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🔎',
                  title: 'Apathit gadyansh',
                  text: 'Unseen passage technique, which is where third-language students gain the most ground fastest.',
                  bullets: ['Locating the answer in the passage', 'Inference questions in Hindi', 'Answering in the expected length'],
                  outcome: 'Scores reliably on unseen passages.',
                },
                {
                  tag: 'Strand 4',
                  icon: '✍️',
                  title: 'Lekhan',
                  text: 'Patra, anuchhed, samvaad and suchna — formats with marks attached to their structure.',
                  bullets: ['Patra lekhan formats', 'Anuchhed and samvaad lekhan', 'Timed writing practice'],
                  outcome: 'Writes each format to the required structure.',
                },
              ],
            },
            sections: [
              {
                title: 'Built for third-language learners',
                text: 'Most students here speak Telugu or English at home and meet Hindi only at school. Vocabulary is therefore built deliberately alongside the syllabus rather than assumed, and explanations are given in whichever language the child follows fastest.',
                bullets: [
                  'Vocabulary built alongside every chapter',
                  'Explanation in the language the child follows',
                  'Devanagari handwriting corrected in class',
                  'Weekly written work marked and returned',
                ],
              },
              {
                title: 'Starting from further back',
                text: 'If a child cannot yet read Devanagari fluently, we start there rather than pretending the syllabus is accessible. It costs a term and it is the difference between tuition working and tuition being attended.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      icon: '➗',
      blurb: 'Understanding first, then speed, then exam technique.',
      items: [
        {
          slug: 'mathematics',
          name: 'Mathematics',
          icon: '📐',
          summary: 'The school syllabus, taught until it makes sense.',
          seo: {
            title: 'Maths Tuition in Hyderabad | Class 4-10 | Brolly Juniors',
            description:
              'Maths tuition in Hyderabad for Classes 4 to 10. Every chapter taught from the concept up, with graded practice and past-paper work. Batches of 8.',
            keyword: 'maths tuition in hyderabad',
            crumb: 'Maths Tuition',
          },
          page: {
            eyebrow: 'Maths Tuition · Classes 4–10',
            title: 'Maths tuition in Hyderabad that goes back to the chapter where it broke.',
            subtitle:
              'Every topic taught from the concept up, with graded practice, error analysis and past papers — and no pretending a gap two years back is not there.',
            chips: [
              { strong: 'Classes 4–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Diagnostic', span: 'Before enrolment' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides maths tuition in Hyderabad for Classes 4 to 10 across CBSE, ICSE and State boards. Every child sits a short diagnostic first so the real gap is found, then works through the syllabus concept by concept with graded practice, marked error analysis and past-paper technique.',
            curriculum: {
              eyebrow: 'How each topic is taught',
              title: 'Four steps on every single chapter',
              lead: 'The sequence never varies, because the usual failure in maths tuition is jumping to practice before the concept is actually in place.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '💡',
                  title: 'Concept, concretely',
                  text: 'What the idea means, shown with a model or a diagram before any formula appears.',
                  bullets: ['Visual or physical model first', 'Why the rule is true, not just what it is', 'Connecting to what they already know'],
                  outcome: 'Explains the concept in their own words.',
                },
                {
                  tag: 'Step 2',
                  icon: '📝',
                  title: 'Worked examples',
                  text: 'The method demonstrated in full, then done together, then done alone — in that order.',
                  bullets: ['Fully worked demonstration', 'Guided practice together', 'Standard method written out'],
                  outcome: 'Reproduces the standard method unaided.',
                },
                {
                  tag: 'Step 3',
                  icon: '📈',
                  title: 'Graded practice',
                  text: 'Problems that climb from routine to genuinely hard, so nobody stops at comfortable.',
                  bullets: ['Routine to challenging progression', 'Mixed practice from earlier chapters', 'Word problems from the start'],
                  outcome: 'Solves unfamiliar problems on the topic.',
                },
                {
                  tag: 'Step 4',
                  icon: '🔬',
                  title: 'Error analysis & exams',
                  text: 'Marked work reviewed for the pattern behind the mistakes, then past papers under time.',
                  bullets: ['Categorising own errors', 'Presentation and steps that earn marks', 'Timed past-paper practice'],
                  outcome: 'Identifies and fixes their own error pattern.',
                },
              ],
            },
            sections: [
              {
                title: 'The diagnostic is not a formality',
                text: 'A Class 8 student struggling with algebra usually has an unfinished problem with fractions or negative numbers. The entry diagnostic looks two years back deliberately, and if that is what it finds, that is what we teach first — even though it is not what the school test next month covers.',
                bullets: [
                  'Short written diagnostic before the first session',
                  'Gaps addressed at their actual level, not the current class',
                  'Monthly progress note showing topics secured',
                  'Board-specific paper patterns from Class 7 upward',
                ],
              },
              {
                title: 'Homework is set, and it is short',
                text: 'Fifteen to twenty problems a week, chosen to mix the current topic with two older ones. Long problem sets get copied; short mixed ones get done and reveal what has actually stuck.',
              },
            ],
            cta: 'family',
          },
        },
        { name: 'Mental Maths', href: '/programs/mental-maths', note: 'Ages 7–14' },
        {
          slug: 'advanced-maths',
          name: 'Advanced Maths',
          icon: '🧮',
          summary: 'For students who find the syllabus easy and are bored.',
          seo: {
            title: 'Advanced Maths Classes in Hyderabad | Class 7-10 | Brolly Juniors',
            description:
              'Advanced maths in Hyderabad for Classes 7 to 10. Number theory, combinatorics, geometry and proof for students already ahead of the school syllabus.',
            keyword: 'advanced maths classes in hyderabad',
            crumb: 'Advanced Maths',
          },
          page: {
            eyebrow: 'Advanced Maths · Classes 7–10',
            title: 'Advanced maths classes in Hyderabad for students the syllabus stopped challenging.',
            subtitle:
              'Number theory, combinatorics, geometry and proof — real mathematics beyond the textbook, for students who finish the chapter and ask what else there is.',
            chips: [
              { strong: 'Classes 7–10', span: 'Levels covered' },
              { strong: 'Beyond syllabus', span: 'Not revision' },
              { strong: 'Proof-based', span: 'Reasoning, not drills' },
              { strong: 'Max 8', span: 'Students per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs advanced maths classes in Hyderabad for Classes 7 to 10, for students already comfortable with the school syllabus. Topics include number theory, combinatorics, advanced geometry and proof technique. Entry is by assessment, and the class complements rather than replaces regular maths tuition.',
            curriculum: {
              eyebrow: 'Topic areas',
              title: 'Four areas, revisited at increasing depth',
              lead: 'These are the four areas olympiad problems are built from, taught for their own interest rather than as competition drilling.',
              stages: [
                {
                  tag: 'Area 1',
                  icon: '🔢',
                  title: 'Number theory',
                  text: 'Divisibility, primes and modular arithmetic — the part of maths that feels like a puzzle.',
                  bullets: ['Divisibility and prime factorisation', 'Modular arithmetic and remainders', 'Digit and base problems'],
                  outcome: 'Solves a remainder problem from first principles.',
                },
                {
                  tag: 'Area 2',
                  icon: '🎲',
                  title: 'Combinatorics',
                  text: 'Counting without listing, and knowing when you have counted something twice.',
                  bullets: ['Counting principles and arrangements', 'Pigeonhole principle', 'Inclusion and exclusion'],
                  outcome: 'Counts a structured set without enumeration.',
                },
                {
                  tag: 'Area 3',
                  icon: '📏',
                  title: 'Geometry & proof',
                  text: 'Constructions, circle theorems, and writing an argument that actually proves something.',
                  bullets: ['Angle chasing and circle theorems', 'Similar triangles and ratios', 'Writing a rigorous proof'],
                  outcome: 'Writes a complete geometric proof.',
                },
                {
                  tag: 'Area 4',
                  icon: '🧠',
                  title: 'Problem solving & strategy',
                  text: 'Invariants, extremal arguments and the strategies that unlock a problem with no obvious start.',
                  bullets: ['Invariants and monovariants', 'Working backwards and extremal cases', 'Olympiad-style problem sets'],
                  outcome: 'Makes progress on a problem with no known method.',
                },
              ],
            },
            sections: [
              {
                title: 'Entry by assessment, and honestly so',
                text: 'A student placed in this class before they are ready has a miserable term. Entry is by a short assessment, and if the answer is not yet, we say so and suggest what would make it yes — usually two terms of the regular maths class.',
                bullets: [
                  'Short entry assessment, with feedback either way',
                  'Runs alongside regular tuition, not instead of it',
                  'Olympiad preparation available for those who want it',
                  'Problems discussed as a batch, not raced through',
                ],
              },
              {
                title: 'Not a marks class',
                text: 'This will not directly raise a school percentage — a student here is already scoring well. What it does is stop a strong mathematician deciding, at thirteen, that maths is boring, which is a far more expensive outcome than a few marks.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'science',
      title: 'Science',
      icon: '🔬',
      blurb: 'Concepts made concrete, then numerical and diagram practice.',
      items: [
        {
          slug: 'physics',
          name: 'Physics',
          icon: '🧲',
          summary: 'Concepts, numericals and diagrams — in that order.',
          seo: {
            title: 'Physics Tuition in Hyderabad | Class 8-10 | Brolly Juniors',
            description:
              'Physics tuition in Hyderabad for Classes 8 to 10. Concept-first teaching, numerical practice, ray and circuit diagrams, and past-paper technique.',
            keyword: 'physics tuition in hyderabad',
            crumb: 'Physics Tuition',
          },
          page: {
            eyebrow: 'Physics Tuition · Classes 8–10',
            title: 'Physics tuition in Hyderabad where the concept comes before the formula.',
            subtitle:
              'Motion, light, electricity and energy taught with demonstrations first, then numericals, then the diagrams that carry so many marks.',
            chips: [
              { strong: 'Classes 8–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Demonstrations', span: 'Before formulae' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides physics tuition in Hyderabad for Classes 8 to 10 across CBSE, ICSE and State boards. Each topic starts with a demonstration or a real example, then moves to the formula, structured numerical practice and the ray, circuit and force diagrams that carry a large share of the marks.',
            curriculum: {
              eyebrow: 'How each topic is taught',
              title: 'Four steps on every chapter',
              lead: 'Physics marks are lost in three predictable places — units, diagrams and the step before the substitution. All three are drilled explicitly.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🔭',
                  title: 'Demonstration & intuition',
                  text: 'See it happen, or see a real example of it, before meeting any symbol.',
                  bullets: ['Classroom demonstration or video', 'Everyday examples of the effect', 'Predict-then-observe questions'],
                  outcome: 'Predicts what will happen and says why.',
                },
                {
                  tag: 'Step 2',
                  icon: '📐',
                  title: 'Formula & derivation',
                  text: 'Where the equation comes from, so it can be reconstructed rather than only recalled.',
                  bullets: ['Deriving rather than memorising', 'Units and dimensional sense', 'What each symbol actually represents'],
                  outcome: 'Rebuilds a formula they have forgotten.',
                },
                {
                  tag: 'Step 3',
                  icon: '🔢',
                  title: 'Numericals',
                  text: 'A fixed method — list the given, choose the equation, substitute with units, sanity-check the answer.',
                  bullets: ['Structured solution layout', 'Unit conversion drilled', 'Checking the answer is plausible'],
                  outcome: 'Solves numericals with full working and units.',
                },
                {
                  tag: 'Step 4',
                  icon: '📊',
                  title: 'Diagrams & exam technique',
                  text: 'Ray diagrams, circuits and force diagrams drawn to the standard the examiner expects.',
                  bullets: ['Ray and circuit diagram conventions', 'Labelling for marks', 'Timed past-paper sections'],
                  outcome: 'Draws a fully labelled diagram from memory.',
                },
              ],
            },
            sections: [
              {
                title: 'The three places physics marks disappear',
                text: 'Missing units, an unlabelled diagram and skipping the line that shows the formula being chosen. None of these are about understanding physics and all three are worth marks, so they are corrected on every single submission until they stop happening.',
                bullets: [
                  'Every numerical marked for method, not just answer',
                  'Diagram conventions practised until automatic',
                  'Board-specific paper patterns from Class 9',
                  'Monthly progress note to families',
                ],
              },
              {
                title: 'Taken with chemistry and biology',
                text: 'Most families take physics alongside chemistry, and from Class 9 the three sciences are timetabled so a student can take all three in one visit. Each is taught by a subject specialist rather than one general science teacher.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'chemistry',
          name: 'Chemistry',
          icon: '⚗️',
          summary: 'Equations, reactions and the reasoning behind them.',
          seo: {
            title: 'Chemistry Tuition in Hyderabad | Class 8-10 | Brolly Juniors',
            description:
              'Chemistry tuition in Hyderabad for Classes 8 to 10. Balancing equations, reaction types, periodic trends and numericals with weekly marked practice.',
            keyword: 'chemistry tuition in hyderabad',
            crumb: 'Chemistry Tuition',
          },
          page: {
            eyebrow: 'Chemistry Tuition · Classes 8–10',
            title: 'Chemistry tuition in Hyderabad that replaces memorising with reasoning.',
            subtitle:
              'Balancing, reaction types, periodic trends and mole calculations — taught so a student can predict a product rather than recall one.',
            chips: [
              { strong: 'Classes 8–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Weekly', span: 'Equation practice' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides chemistry tuition in Hyderabad for Classes 8 to 10 across CBSE, ICSE and State boards. Students learn to balance equations reliably, classify reaction types, read periodic trends and handle mole and concentration calculations — with weekly marked practice on equations and numericals.',
            curriculum: {
              eyebrow: 'How each topic is taught',
              title: 'Four steps on every chapter',
              lead: 'Chemistry becomes memorisation the moment a student stops seeing why a reaction goes the way it does. The order below is designed to prevent exactly that.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🧱',
                  title: 'Structure & bonding',
                  text: 'What the particles are doing, because every reaction rule follows from that.',
                  bullets: ['Atomic structure and electron arrangement', 'Ionic and covalent bonding', 'Why an element behaves as it does'],
                  outcome: 'Predicts bonding type from position in the table.',
                },
                {
                  tag: 'Step 2',
                  icon: '⚖️',
                  title: 'Equations & balancing',
                  text: 'A systematic method for balancing, drilled until it is quick and reliable.',
                  bullets: ['Systematic balancing method', 'State symbols and conditions', 'Ionic equations where required'],
                  outcome: 'Balances any syllabus equation confidently.',
                },
                {
                  tag: 'Step 3',
                  icon: '🔁',
                  title: 'Reaction types & trends',
                  text: 'Classifying reactions and reading the periodic table as a map rather than a list.',
                  bullets: ['Displacement, neutralisation, redox', 'Reactivity series in use', 'Group and period trends'],
                  outcome: 'Predicts the product of an unseen reaction.',
                },
                {
                  tag: 'Step 4',
                  icon: '🧮',
                  title: 'Numericals & exam technique',
                  text: 'Mole, mass and concentration calculations laid out the way the marking scheme wants.',
                  bullets: ['Mole concept and stoichiometry', 'Concentration and percentage composition', 'Timed past-paper sections'],
                  outcome: 'Completes stoichiometry problems with working.',
                },
              ],
            },
            sections: [
              {
                title: 'Balancing is a skill, not a knack',
                text: 'Students who balance equations by trial and error are fine until the equations get long. A systematic method is taught explicitly in the first weeks and practised every session thereafter, which removes the single biggest source of avoidable error in the subject.',
                bullets: [
                  'One systematic balancing method, drilled weekly',
                  'Reaction equations built up rather than memorised',
                  'Safe demonstrations where the syllabus allows',
                  'Weekly marked practice returned with corrections',
                ],
              },
              {
                title: 'Organic chemistry from Class 10',
                text: 'Class 10 introduces carbon compounds, which is where students who have been coping by memorising usually come unstuck. Nomenclature and functional groups are taught as a system, so the number of things to remember stays small.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'biology',
          name: 'Biology',
          icon: '🧬',
          summary: 'Diagrams, processes and precise terminology.',
          seo: {
            title: 'Biology Tuition in Hyderabad | Class 8-10 | Brolly Juniors',
            description:
              'Biology tuition in Hyderabad for Classes 8 to 10. Labelled diagrams, life processes, terminology and structured answer writing for board exams.',
            keyword: 'biology tuition in hyderabad',
            crumb: 'Biology Tuition',
          },
          page: {
            eyebrow: 'Biology Tuition · Classes 8–10',
            title: 'Biology tuition in Hyderabad where diagrams and terminology earn the marks.',
            subtitle:
              'Life processes taught as connected systems, with the labelled diagrams and precise vocabulary that decide a biology grade.',
            chips: [
              { strong: 'Classes 8–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Diagram drill', span: 'Every week' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides biology tuition in Hyderabad for Classes 8 to 10 across CBSE, ICSE and State boards. Life processes are taught as connected systems rather than isolated chapters, with weekly labelled-diagram practice, precise terminology drilling and structured answer writing to the board pattern.',
            curriculum: {
              eyebrow: 'How each topic is taught',
              title: 'Four steps on every chapter',
              lead: 'Biology rewards precision. A right idea in loose words scores less than the same idea in the syllabus term, and students deserve to be told that plainly.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🔗',
                  title: 'The process, end to end',
                  text: 'How the whole system works before any single part is named.',
                  bullets: ['Following a process start to finish', 'Connecting organs to function', 'Why the system exists at all'],
                  outcome: 'Explains a life process in sequence.',
                },
                {
                  tag: 'Step 2',
                  icon: '✏️',
                  title: 'Diagrams & labelling',
                  text: 'Drawn by hand, repeatedly, to the standard the examiner expects.',
                  bullets: ['Standard syllabus diagrams drawn from memory', 'Label placement and neat lines', 'Common labelling errors'],
                  outcome: 'Reproduces a labelled diagram from memory.',
                },
                {
                  tag: 'Step 3',
                  icon: '🔤',
                  title: 'Terminology',
                  text: 'The exact word, spelled correctly, because a near-miss is often a lost mark.',
                  bullets: ['Term lists per chapter with meaning', 'Spelling drilled for key terms', 'Distinguishing similar terms'],
                  outcome: 'Uses the precise term without prompting.',
                },
                {
                  tag: 'Step 4',
                  icon: '📝',
                  title: 'Answer structure',
                  text: 'How long an answer should be for its marks, and what has to appear in it.',
                  bullets: ['Answer length by mark weight', 'Points-based answer structure', 'Timed past-paper practice'],
                  outcome: 'Writes to length with every marking point.',
                },
              ],
            },
            sections: [
              {
                title: 'Diagrams drawn, not traced',
                text: 'Students draw each syllabus diagram by hand several times across the year until it can be reproduced under exam pressure. Tracing or printing feels productive and teaches nothing — the recall has to be in the hand.',
                bullets: [
                  'Every syllabus diagram drawn from memory repeatedly',
                  'Chapter term lists tested weekly',
                  'Answers marked for structure as well as content',
                  'Class 10 human physiology given extra weight',
                ],
              },
              {
                title: 'For students considering NEET later',
                text: 'Class 9 and 10 biology is the actual foundation of NEET biology, far more so than in physics or chemistry. Students planning that route should look at the NEET Foundation page, which runs alongside this rather than replacing it.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'general-science',
          name: 'General Science',
          icon: '🔭',
          summary: 'Classes 4–7, before the three subjects separate.',
          seo: {
            title: 'Science Tuition for Class 4 to 7 in Hyderabad | Brolly Juniors',
            description:
              'General science tuition in Hyderabad for Classes 4 to 7. Physics, chemistry and biology basics taught through activities, with clear written answers.',
            keyword: 'science tuition for class 4 to 7 in hyderabad',
            crumb: 'General Science',
          },
          page: {
            eyebrow: 'General Science · Classes 4–7',
            title: 'Science tuition for Class 4 to 7 in Hyderabad, before the subjects split.',
            subtitle:
              'Activity-led sessions covering the physics, chemistry and biology basics — building the habit of explaining an observation rather than memorising a fact.',
            chips: [
              { strong: 'Classes 4–7', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Activity-led', span: 'Every session' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides general science tuition in Hyderabad for Classes 4 to 7 across CBSE, ICSE and State boards. Sessions are activity-led: children observe something happen, explain it in their own words, then learn the correct terms and write a clear answer. This is the stage where science either becomes interesting or becomes memorisation.',
            curriculum: {
              eyebrow: 'How each topic is taught',
              title: 'Four steps on every chapter',
              lead: 'At this age the aim is not exam technique. It is that a child expects science to make sense, and notices when it does not.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '👀',
                  title: 'Observe',
                  text: 'An activity, demonstration or everyday example, with children predicting first.',
                  bullets: ['Predict before observing', 'Simple safe activities', 'Recording what actually happened'],
                  outcome: 'Records an observation accurately.',
                },
                {
                  tag: 'Step 2',
                  icon: '💬',
                  title: 'Explain in their own words',
                  text: 'Before the textbook language arrives, children put the idea into their own sentences.',
                  bullets: ['Explaining an observation aloud', 'Comparing competing explanations', 'Identifying what would test it'],
                  outcome: 'Offers a reasoned explanation unprompted.',
                },
                {
                  tag: 'Step 3',
                  icon: '📗',
                  title: 'The correct terms',
                  text: 'The syllabus vocabulary attached to an idea the child already holds.',
                  bullets: ['Chapter terms with meaning', 'Diagrams and labelling basics', 'Linking to the textbook wording'],
                  outcome: 'Uses syllabus terms for their own explanation.',
                },
                {
                  tag: 'Step 4',
                  icon: '✍️',
                  title: 'Writing a clear answer',
                  text: 'Turning understanding into a written answer that a marker can follow.',
                  bullets: ['Answering the question that was asked', 'Short structured written answers', 'Neat labelled diagrams'],
                  outcome: 'Writes a complete, on-question answer.',
                },
              ],
            },
            sections: [
              {
                title: 'The years that decide whether science stays interesting',
                text: 'Classes 4 to 7 are where children either keep asking why or start learning answers by heart. Sessions here are deliberately slower and more hands-on than exam-focused tuition, because the return on curiosity at this age is much larger than the return on marks.',
                bullets: [
                  'Hands-on activity in most sessions',
                  'Questions encouraged even when off-syllabus',
                  'Written answers introduced gradually from Class 5',
                  'Feeds directly into Class 8 physics, chemistry and biology',
                ],
              },
              {
                title: 'Moving up to separate subjects',
                text: 'From Class 8 the sciences separate and each is taught by a specialist. Children who have come through general science here arrive with observation and explanation habits already in place, which makes the numerical and diagram work land much faster.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'social-studies',
      title: 'Social Studies',
      icon: '🌍',
      blurb: 'Cause and effect, maps and answers written to the mark.',
      items: [
        {
          slug: 'history',
          name: 'History',
          icon: '🏛️',
          summary: 'Causes and consequences, not just dates.',
          seo: {
            title: 'History Tuition in Hyderabad | Class 6-10 | Brolly Juniors',
            description:
              'History tuition in Hyderabad for Classes 6 to 10. Timelines, causes and consequences, source questions and structured answer writing for board exams.',
            keyword: 'history tuition in hyderabad',
            crumb: 'History Tuition',
          },
          page: {
            eyebrow: 'History Tuition · Classes 6–10',
            title: 'History tuition in Hyderabad that teaches why it happened, not just when.',
            subtitle:
              'Timelines a student can actually hold, cause-and-consequence reasoning, source questions and answers written to the marking scheme.',
            chips: [
              { strong: 'Classes 6–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Timelines', span: 'Built, not given' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides history tuition in Hyderabad for Classes 6 to 10 across CBSE, ICSE and State boards. Students build their own timelines, learn to argue cause and consequence, handle source-based questions and write structured answers to the length each mark weight requires.',
            curriculum: {
              eyebrow: 'How each chapter is taught',
              title: 'Four steps on every chapter',
              lead: 'Dates alone are the least useful and most forgettable part of history, and they are the only part most students revise.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🧵',
                  title: 'The narrative',
                  text: 'The story of the period told as a story, so events have somewhere to attach.',
                  bullets: ['Period narrative told in sequence', 'Key figures and their motives', 'Connecting to what came before'],
                  outcome: 'Retells the period in sequence.',
                },
                {
                  tag: 'Step 2',
                  icon: '📅',
                  title: 'Timeline & anchors',
                  text: 'Students build the timeline themselves and anchor dates to events they can picture.',
                  bullets: ['Student-built chapter timelines', 'A handful of anchor dates only', 'Ordering events without a list'],
                  outcome: 'Places events correctly without prompting.',
                },
                {
                  tag: 'Step 3',
                  icon: '🔗',
                  title: 'Cause & consequence',
                  text: 'The reasoning that long answers are actually marked on.',
                  bullets: ['Separating cause from trigger', 'Short and long-term consequences', 'Weighing which cause mattered most'],
                  outcome: 'Argues which cause mattered most, with support.',
                },
                {
                  tag: 'Step 4',
                  icon: '📝',
                  title: 'Sources & answer writing',
                  text: 'Reading an extract or a cartoon, and writing to the length the marks require.',
                  bullets: ['Source and extract questions', 'Answer structure by mark weight', 'Timed past-paper practice'],
                  outcome: 'Writes a structured long answer to time.',
                },
              ],
            },
            sections: [
              {
                title: 'Students build the timeline themselves',
                text: 'A handed-out timeline gets filed. A timeline a student assembled from the chapter gets remembered, because the act of ordering the events is the act of understanding them. Every chapter ends with one, and revision is done from those rather than from notes.',
                bullets: [
                  'One student-built timeline per chapter',
                  'Only a small set of dates memorised deliberately',
                  'Long answers marked for argument, not length',
                  'Past papers from Class 8 upward',
                ],
              },
              {
                title: 'Taken with civics and geography',
                text: 'Most boards examine history, civics and geography together as social studies, and we timetable them so a student can take all three in one visit. Cross-links are made deliberately — a geography of trade routes explains a good deal of the history.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'geography',
          name: 'Geography',
          icon: '🗺️',
          summary: 'Map work, physical processes and case studies.',
          seo: {
            title: 'Geography Tuition in Hyderabad | Class 6-10 | Brolly Juniors',
            description:
              'Geography tuition in Hyderabad for Classes 6 to 10. Map work, physical and human geography, case studies and diagram-based answers for board exams.',
            keyword: 'geography tuition in hyderabad',
            crumb: 'Geography Tuition',
          },
          page: {
            eyebrow: 'Geography Tuition · Classes 6–10',
            title: 'Geography tuition in Hyderabad built around the map, where the marks are.',
            subtitle:
              'Map work practised properly, physical processes explained with diagrams, and case studies a student can actually recall in the exam hall.',
            chips: [
              { strong: 'Classes 6–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Map work', span: 'Every session' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides geography tuition in Hyderabad for Classes 6 to 10 across CBSE, ICSE and State boards. Every session includes map work, physical processes are taught with drawn diagrams, and each topic is anchored to a case study students can recall and use in long answers.',
            curriculum: {
              eyebrow: 'How each chapter is taught',
              title: 'Four steps on every chapter',
              lead: 'Map marks are the most reliably winnable marks in social studies, and the most commonly under-practised.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🗺️',
                  title: 'Map work',
                  text: 'Locating, labelling and marking on a blank map, every single session.',
                  bullets: ['Blank map location practice', 'Symbols, scale and direction', 'Marking to exam conventions'],
                  outcome: 'Marks required features on a blank map.',
                },
                {
                  tag: 'Step 2',
                  icon: '⛰️',
                  title: 'Physical processes',
                  text: 'How landforms, climate and rivers actually work, drawn rather than described.',
                  bullets: ['Landform formation with diagrams', 'Climate, monsoon and pressure systems', 'River and coastal processes'],
                  outcome: 'Draws and explains a formation process.',
                },
                {
                  tag: 'Step 3',
                  icon: '🏙️',
                  title: 'Human geography',
                  text: 'Population, resources, agriculture and industry — and the links between them.',
                  bullets: ['Population and settlement patterns', 'Resources, agriculture and industry', 'Reading data tables and graphs'],
                  outcome: 'Interprets a data table in an answer.',
                },
                {
                  tag: 'Step 4',
                  icon: '📍',
                  title: 'Case studies & answers',
                  text: 'One memorable example per topic, and the answer structure that uses it.',
                  bullets: ['One case study per topic', 'Using an example inside a long answer', 'Timed past-paper practice'],
                  outcome: 'Supports a long answer with a real example.',
                },
              ],
            },
            sections: [
              {
                title: 'Blank maps every week',
                text: 'Students work on blank outline maps from the first session rather than looking at a labelled one. It is harder and slightly demoralising for a fortnight, and after that the map section stops being a place where marks are lost.',
                bullets: [
                  'Blank map practice in every session',
                  'India and world maps built up across the year',
                  'Diagrams drawn by hand, not photocopied',
                  'Case studies chosen to be memorable, not exhaustive',
                ],
              },
              {
                title: 'Local geography where it helps',
                text: 'The Deccan plateau, the Krishna and Godavari basins and Hyderabad’s own growth make several syllabus topics concrete in a way a distant example cannot. Where the syllabus allows, examples are drawn from where students actually live.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'civics',
          name: 'Civics',
          icon: '⚖️',
          summary: 'How the system works, with current examples.',
          seo: {
            title: 'Civics Tuition in Hyderabad | Class 6-10 | Brolly Juniors',
            description:
              'Civics tuition in Hyderabad for Classes 6 to 10. Constitution, government, rights and democracy taught with current examples and exam answer practice.',
            keyword: 'civics tuition in hyderabad',
            crumb: 'Civics Tuition',
          },
          page: {
            eyebrow: 'Civics Tuition · Classes 6–10',
            title: 'Civics tuition in Hyderabad that connects the textbook to this week’s news.',
            subtitle:
              'The Constitution, the three branches, rights and duties and how elections run — taught with current examples so the definitions have something to stick to.',
            chips: [
              { strong: 'Classes 6–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Current examples', span: 'Every chapter' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides civics tuition in Hyderabad for Classes 6 to 10 across CBSE, ICSE and State boards. Students learn the Constitution, the structure of government, fundamental rights and duties, and the electoral process — each anchored to a current, real example, then written up to the board answer pattern.',
            curriculum: {
              eyebrow: 'How each chapter is taught',
              title: 'Four steps on every chapter',
              lead: 'Civics is the subject students most often reduce to definitions. Attaching every concept to something happening now is what prevents that.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '📜',
                  title: 'The idea & the Constitution',
                  text: 'What the provision says and, more usefully, what problem it was written to solve.',
                  bullets: ['Constitutional provisions in plain language', 'The problem each was designed for', 'Preamble and its terms'],
                  outcome: 'Explains why a provision exists.',
                },
                {
                  tag: 'Step 2',
                  icon: '🏛️',
                  title: 'Institutions & how they work',
                  text: 'Legislature, executive and judiciary — who does what, and what checks whom.',
                  bullets: ['Three branches and separation of powers', 'Centre, state and local government', 'How a bill becomes law'],
                  outcome: 'Traces a decision through the institutions.',
                },
                {
                  tag: 'Step 3',
                  icon: '📰',
                  title: 'Current examples',
                  text: 'A real, current instance for each concept, discussed and written up.',
                  bullets: ['Linking a concept to a news story', 'Discussing without partisanship', 'Applying the concept to a new case'],
                  outcome: 'Applies a concept to an unseen situation.',
                },
                {
                  tag: 'Step 4',
                  icon: '📝',
                  title: 'Answer writing',
                  text: 'Definitions, differences and long answers to the structure the marking scheme expects.',
                  bullets: ['Definition and difference questions', 'Long answers with examples', 'Timed past-paper practice'],
                  outcome: 'Writes a structured answer with an example.',
                },
              ],
            },
            sections: [
              {
                title: 'Current, but not partisan',
                text: 'Real examples make civics land, and they also make it possible to teach it badly. Discussion focuses on how institutions and processes work, examples are chosen across the political spectrum, and educators do not offer opinions on parties or leaders.',
                bullets: [
                  'Examples chosen across the spectrum',
                  'Focus on process and institution, not politics',
                  'Students practise arguing both sides',
                  'Families welcome to raise any concern directly',
                ],
              },
              {
                title: 'Where civics quietly pays off',
                text: 'It is a small part of the social studies paper and a large part of general awareness later — for competitive exams, for interviews, and for a young adult who understands what a municipal corporation actually does.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'economics',
          name: 'Economics',
          icon: '📈',
          summary: 'Concepts, data interpretation and clear definitions.',
          seo: {
            title: 'Economics Tuition in Hyderabad | Class 9-10 | Brolly Juniors',
            description:
              'Economics tuition in Hyderabad for Classes 9 and 10. Core concepts, sectors, development indicators, data interpretation and structured answer writing.',
            keyword: 'economics tuition in hyderabad',
            crumb: 'Economics Tuition',
          },
          page: {
            eyebrow: 'Economics Tuition · Classes 9–10',
            title: 'Economics tuition in Hyderabad for a subject students meet for the first time.',
            subtitle:
              'Core concepts, the three sectors, development indicators and data interpretation — taught from scratch, because almost nobody arrives with a background in it.',
            chips: [
              { strong: 'Classes 9–10', span: 'Levels covered' },
              BOARD_CHIP,
              { strong: 'Data work', span: 'Tables and graphs' },
              BATCH_CHIP,
            ],
            quickAnswer:
              'Brolly Juniors provides economics tuition in Hyderabad for Classes 9 and 10 across CBSE, ICSE and State boards. Students build the core vocabulary from scratch, learn the sectors of the economy and development indicators, practise interpreting tables and graphs, and write definitions and long answers to the board pattern.',
            curriculum: {
              eyebrow: 'How each chapter is taught',
              title: 'Four steps on every chapter',
              lead: 'Economics at this level is mostly precise vocabulary plus the ability to read a table. Both are teachable and neither is usually taught deliberately.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🔤',
                  title: 'Vocabulary from zero',
                  text: 'Terms like sector, income, resource and development given precise, usable meanings.',
                  bullets: ['Core terms defined precisely', 'Distinguishing similar terms', 'Everyday examples of each'],
                  outcome: 'Defines core terms without the textbook.',
                },
                {
                  tag: 'Step 2',
                  icon: '🏭',
                  title: 'Sectors & structure',
                  text: 'Primary, secondary and tertiary, organised and unorganised, and where real jobs sit.',
                  bullets: ['The three sectors with local examples', 'Organised versus unorganised work', 'Employment and its measurement'],
                  outcome: 'Classifies real occupations correctly.',
                },
                {
                  tag: 'Step 3',
                  icon: '📊',
                  title: 'Data interpretation',
                  text: 'Reading a table or graph and saying something true and useful about it.',
                  bullets: ['Reading tables, bar and line graphs', 'Comparing across years or states', 'Spotting a misleading presentation'],
                  outcome: 'Draws a supported conclusion from a table.',
                },
                {
                  tag: 'Step 4',
                  icon: '📝',
                  title: 'Answer writing',
                  text: 'Definitions, comparisons and long answers with examples, written to the mark weight.',
                  bullets: ['Definition and comparison questions', 'Long answers with real examples', 'Timed past-paper practice'],
                  outcome: 'Writes a full answer with supporting data.',
                },
              ],
            },
            sections: [
              {
                title: 'A new subject, taught as one',
                text: 'Class 9 economics assumes no prior knowledge and students still find it abstract, because the vocabulary is doing unfamiliar work. Sessions spend deliberate time on terms before concepts, which sounds slow and is the fastest route through.',
                bullets: [
                  'No assumed background; vocabulary built explicitly',
                  'Local and Indian examples throughout',
                  'Data interpretation practised weekly',
                  'Past papers from the start of Class 10',
                ],
              },
              {
                title: 'Alongside financial literacy',
                text: 'Several families take the Financial Literacy programme alongside this. They are different things — one is a school subject, the other is practical money skill — but each makes the other noticeably easier to hold on to.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'foundation',
      title: 'Foundation',
      icon: '🎓',
      blurb: 'Early preparation that strengthens school marks at the same time.',
      items: [
        {
          slug: 'iit-foundation',
          name: 'IIT Foundation',
          icon: '🏗️',
          summary: 'Classes 8–10 · depth in physics, chemistry and maths.',
          seo: {
            title: 'IIT Foundation Classes in Hyderabad | Class 8-10 | Brolly Juniors',
            description:
              'IIT Foundation coaching in Hyderabad for Classes 8 to 10. Physics, chemistry and maths taught beyond board depth, with reasoning-first problem solving.',
            keyword: 'iit foundation classes in hyderabad',
            crumb: 'IIT Foundation',
          },
          page: {
            eyebrow: 'IIT Foundation · Classes 8–10',
            title: 'IIT Foundation classes in Hyderabad, built on understanding rather than early cramming.',
            subtitle:
              'Physics, chemistry and maths taken deeper than the board requires — so Class 11 starts from strength instead of from panic.',
            chips: [
              { strong: 'Classes 8–10', span: 'Levels covered' },
              { strong: 'PCM', span: 'Three subjects' },
              { strong: 'Reasoning-first', span: 'Not shortcut drills' },
              { strong: 'Max 10', span: 'Students per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs IIT Foundation classes in Hyderabad for Classes 8 to 10, covering physics, chemistry and mathematics at greater depth than the board syllabus. The emphasis is on reasoning and problem solving rather than shortcut drilling, and the work directly strengthens board performance rather than competing with it.',
            curriculum: {
              eyebrow: 'How the programme runs',
              title: 'Four strands across three years',
              lead: 'Foundation should mean deeper roots, not an early start on Class 11 material a fourteen-year-old is not ready for.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '🧱',
                  title: 'Concept depth',
                  text: 'Board topics taken further — the why behind each result, and the cases the textbook skips.',
                  bullets: ['Beyond-syllabus extensions of board topics', 'Derivations done properly', 'Edge cases and exceptions'],
                  outcome: 'Handles a problem outside the textbook pattern.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🧩',
                  title: 'Problem solving',
                  text: 'Multi-step problems where the method is not stated, worked without a template.',
                  bullets: ['Multi-concept problems', 'Choosing an approach unaided', 'Working without a worked example'],
                  outcome: 'Starts an unfamiliar problem independently.',
                },
                {
                  tag: 'Strand 3',
                  icon: '⏱️',
                  title: 'Accuracy & speed',
                  text: 'Objective-format practice introduced gradually from Class 9, never at the cost of method.',
                  bullets: ['MCQ technique and elimination', 'Accuracy before speed', 'Timed sectional practice'],
                  outcome: 'Maintains accuracy under timed conditions.',
                },
                {
                  tag: 'Strand 4',
                  icon: '🎯',
                  title: 'Board alignment',
                  text: 'Everything mapped back to the board syllabus, so foundation work lifts school marks too.',
                  bullets: ['Board topics covered to full depth', 'School exam preparation included', 'No clash with school schedule'],
                  outcome: 'Scores well on boards and on objective tests.',
                },
              ],
            },
            sections: [
              {
                title: 'What we will not do',
                text: 'We do not start Class 11 physics in Class 8, run six-hour Sunday marathons, or publish rank predictions. Children who are pushed into competitive preparation too early frequently burn out before Class 11, which is the year that actually counts.',
                bullets: [
                  'Depth in the current syllabus, not early Class 11 material',
                  'Reasonable weekly hours alongside school',
                  'No rank claims, no pressure ranking of students',
                  'Honest advice if this is not the right route for a child',
                ],
              },
              {
                title: 'Choosing between the foundation tracks',
                text: 'IIT Foundation and JEE Foundation overlap heavily at this age. IIT Foundation is the broader, depth-first option for Classes 8 to 10; JEE Foundation is more exam-shaped and suits Class 9 and 10 students already set on that route.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'jee-foundation',
          name: 'JEE Foundation',
          icon: '🚀',
          summary: 'Classes 9–10 · exam-shaped physics, chemistry and maths.',
          seo: {
            title: 'JEE Foundation Classes in Hyderabad | Class 9-10 | Brolly Juniors',
            description:
              'JEE Foundation coaching in Hyderabad for Classes 9 and 10. Exam-pattern PCM, objective technique and timed practice alongside full board preparation.',
            keyword: 'jee foundation classes in hyderabad',
            crumb: 'JEE Foundation',
          },
          page: {
            eyebrow: 'JEE Foundation · Classes 9–10',
            title: 'JEE Foundation classes in Hyderabad for students who have already decided.',
            subtitle:
              'Exam-pattern physics, chemistry and maths, objective technique and timed practice — with the board syllabus fully covered alongside, not sacrificed.',
            chips: [
              { strong: 'Classes 9–10', span: 'Levels covered' },
              { strong: 'PCM', span: 'Three subjects' },
              { strong: 'Weekly test', span: 'Objective pattern' },
              { strong: 'Max 10', span: 'Students per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs JEE Foundation classes in Hyderabad for Classes 9 and 10. Physics, chemistry and mathematics are taught to exam depth with objective-pattern practice and a weekly test, while the board syllabus is covered in full so school performance does not slip during the two preparation years.',
            curriculum: {
              eyebrow: 'How the programme runs',
              title: 'Four strands across two years',
              lead: 'The purpose of these two years is a student who arrives in Class 11 able to learn fast, not one who has already seen Class 11 badly.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '📚',
                  title: 'Exam-depth concepts',
                  text: 'Every board topic taken to the depth the competitive pattern assumes.',
                  bullets: ['Board topics to competitive depth', 'Standard results derived, not given', 'Common exam traps identified'],
                  outcome: 'Answers beyond-textbook questions on syllabus topics.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🧮',
                  title: 'Problem sets',
                  text: 'Graded problem sets weekly, from routine through to genuinely difficult.',
                  bullets: ['Graded weekly problem sets', 'Multi-concept questions', 'Full solutions discussed, not handed out'],
                  outcome: 'Completes a hard set with correct method.',
                },
                {
                  tag: 'Strand 3',
                  icon: '⏱️',
                  title: 'Objective technique',
                  text: 'MCQ strategy, elimination, approximation and managing negative marking.',
                  bullets: ['Elimination and approximation', 'Deciding when to skip', 'Handling negative marking'],
                  outcome: 'Improves score without guessing blindly.',
                },
                {
                  tag: 'Strand 4',
                  icon: '📊',
                  title: 'Weekly testing & review',
                  text: 'A test every week, and — the part that matters — a proper review of what went wrong.',
                  bullets: ['Weekly timed objective test', 'Error log maintained per student', 'Individual review of repeated errors'],
                  outcome: 'Tracks and eliminates a repeated error type.',
                },
              ],
            },
            sections: [
              {
                title: 'The error log is the whole method',
                text: 'Every student keeps a log of what they got wrong and why — concept, careless, or ran out of time. Reviewing that log is worth more than another test, and it is the single practice that most reliably separates students who improve from those who plateau.',
                bullets: [
                  'Per-student error log, reviewed fortnightly',
                  'Errors categorised by cause, not just marked wrong',
                  'Board syllabus covered in full throughout',
                  'Test scores shared privately, never ranked publicly',
                ],
              },
              {
                title: 'An honest word on timing',
                text: 'Two years of foundation is enough. Starting in Class 6 does not help and frequently harms — students arrive at Class 11 already tired of the material. If your child is younger, IIT Foundation or simply strong maths and science tuition is the better use of the time.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'neet-foundation',
          name: 'NEET Foundation',
          icon: '🩺',
          summary: 'Classes 9–10 · biology-led, with physics and chemistry.',
          seo: {
            title: 'NEET Foundation Classes in Hyderabad | Brolly Juniors',
            description:
              'NEET Foundation coaching in Hyderabad for Classes 9 and 10. Biology-led preparation with physics and chemistry, diagram work and objective practice.',
            keyword: 'neet foundation classes in hyderabad',
            crumb: 'NEET Foundation',
          },
          page: {
            eyebrow: 'NEET Foundation · Classes 9–10',
            title: 'NEET Foundation classes in Hyderabad, led by the subject that decides the score.',
            subtitle:
              'Biology given the weight it deserves, with physics and chemistry to matching depth — plus the diagram and terminology precision NEET rewards.',
            chips: [
              { strong: 'Classes 9–10', span: 'Levels covered' },
              { strong: 'Biology-led', span: 'PCB covered' },
              { strong: 'Weekly test', span: 'Objective pattern' },
              { strong: 'Max 10', span: 'Students per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs NEET Foundation classes in Hyderabad for Classes 9 and 10. Biology takes the largest share of time because it carries the largest share of the NEET paper, with physics and chemistry taught to matching depth. Diagram accuracy, terminology precision and objective technique are practised weekly.',
            curriculum: {
              eyebrow: 'How the programme runs',
              title: 'Four strands across two years',
              lead: 'Class 9 and 10 biology is genuinely the foundation of the NEET syllabus, far more directly than in physics or chemistry. The time split reflects that.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '🧬',
                  title: 'Biology depth',
                  text: 'Life processes, diagrams and terminology taken well past board depth.',
                  bullets: ['Beyond-board depth on life processes', 'Diagram accuracy and labelling', 'Precise terminology drilled'],
                  outcome: 'Answers NEET-style biology questions accurately.',
                },
                {
                  tag: 'Strand 2',
                  icon: '⚗️',
                  title: 'Chemistry',
                  text: 'Bonding, reactions and calculations to the depth the later syllabus assumes.',
                  bullets: ['Bonding and periodic reasoning', 'Reaction prediction', 'Stoichiometry to exam depth'],
                  outcome: 'Predicts and balances unfamiliar reactions.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🧲',
                  title: 'Physics',
                  text: 'The mechanics, optics and electricity NEET draws on, with numerical fluency.',
                  bullets: ['Core mechanics and optics', 'Numerical method and units', 'Formula reconstruction'],
                  outcome: 'Solves numericals reliably under time.',
                },
                {
                  tag: 'Strand 4',
                  icon: '📊',
                  title: 'Objective practice',
                  text: 'Weekly timed tests, an error log, and review of every repeated mistake.',
                  bullets: ['Weekly timed objective test', 'Error log by cause', 'Individual fortnightly review'],
                  outcome: 'Eliminates a repeated error category.',
                },
              ],
            },
            sections: [
              {
                title: 'Why biology gets the largest share',
                text: 'Biology is half the NEET paper and the half most amenable to early preparation, because it rewards accumulated precision rather than problem-solving speed. Diagram work and terminology started in Class 9 compound in a way that late cramming cannot replicate.',
                bullets: [
                  'Biology weighted heaviest in the timetable',
                  'Diagrams drawn from memory every week',
                  'Board syllabus covered in full alongside',
                  'Scores shared privately, never ranked publicly',
                ],
              },
              {
                title: 'Deciding between NEET and JEE foundation',
                text: 'Most Class 9 students have not genuinely decided, and that is fine. If your child is undecided, IIT Foundation covers physics, chemistry and maths at depth and keeps both routes open for another year.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'olympiad-foundation',
          name: 'Olympiad Foundation',
          icon: '🏅',
          summary: 'Classes 4–10 · reasoning for maths, science and English olympiads.',
          seo: {
            title: 'Olympiad Foundation Classes in Hyderabad | Brolly Juniors',
            description:
              'Olympiad preparation in Hyderabad for Classes 4 to 10. Maths, science, English and reasoning for NSO, IMO, IEO and NSTSE with weekly practice papers.',
            keyword: 'olympiad foundation classes in hyderabad',
            crumb: 'Olympiad Foundation',
          },
          page: {
            eyebrow: 'Olympiad Foundation · Classes 4–10',
            title: 'Olympiad foundation classes in Hyderabad that train reasoning, not question banks.',
            subtitle:
              'Maths, science, English and logical reasoning for IMO, NSO, IEO and NSTSE — with the higher-order thinking section treated as the main event.',
            chips: [
              { strong: 'Classes 4–10', span: 'Levels covered' },
              { strong: 'IMO · NSO · IEO', span: 'Exams covered' },
              { strong: 'Weekly paper', span: 'Timed practice' },
              { strong: 'Max 10', span: 'Students per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs olympiad preparation in Hyderabad for Classes 4 to 10, covering IMO, NSO, IEO and NSTSE. Sessions train logical reasoning, non-routine maths, science application and English usage, with a timed practice paper each week and a full review of the higher-order thinking section.',
            curriculum: {
              eyebrow: 'How the programme runs',
              title: 'Four strands, matched to the paper',
              lead: 'Olympiad papers are largely a reasoning test wearing a subject costume. Training the reasoning transfers across all four exams.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '🧠',
                  title: 'Logical reasoning',
                  text: 'Patterns, series, coding and spatial reasoning — the section that appears in every paper.',
                  bullets: ['Series, patterns and analogies', 'Coding-decoding and direction sense', 'Spatial and figure reasoning'],
                  outcome: 'Solves reasoning questions quickly and reliably.',
                },
                {
                  tag: 'Strand 2',
                  icon: '➗',
                  title: 'Non-routine maths',
                  text: 'Problems that use school topics in ways the school textbook never does.',
                  bullets: ['Applying syllabus topics unusually', 'Counting and number puzzles', 'Multi-step word problems'],
                  outcome: 'Attacks a problem with no taught method.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🔬',
                  title: 'Science application',
                  text: 'Predicting and explaining in unfamiliar scenarios rather than recalling definitions.',
                  bullets: ['Applying concepts to new situations', 'Interpreting experimental setups', 'Reading data and graphs'],
                  outcome: 'Explains an unfamiliar scientific scenario.',
                },
                {
                  tag: 'Strand 4',
                  icon: '📝',
                  title: 'English & exam craft',
                  text: 'Usage, comprehension and vocabulary, plus timing and the achievers section.',
                  bullets: ['Usage, idioms and comprehension', 'Timing across sections', 'Higher-order thinking section practice'],
                  outcome: 'Completes a full paper within the time limit.',
                },
              ],
            },
            sections: [
              {
                title: 'Reasoning transfers; question banks do not',
                text: 'Memorising past olympiad questions works until the paper changes, which it does every year. Sessions are built around strategies that apply to a question nobody has seen, and past papers are used to test that training rather than to supply answers.',
                bullets: [
                  'Strategy taught before any past paper is opened',
                  'One timed practice paper each week',
                  'Higher-order thinking section given full attention',
                  'Suits any student in Classes 4 to 10, not only toppers',
                ],
              },
              {
                title: 'Worth doing even without the medal',
                text: 'Most students will not place, and that is not the point. Reasoning practice at this age improves school performance across every subject, and a child who has sat a hard timed paper at eleven finds board exams considerably less frightening at fifteen.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
  ],
};
