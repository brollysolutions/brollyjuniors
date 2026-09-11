/* The long-form body of the three language tuition pages — Telugu, English
 * and Hindi — keyed by route and merged into data/tuitionDetails.js.
 *
 * The three language tuition pages rendered through the short InfoPage while
 * their programme counterparts under /programs (pages/TeluguPage.jsx,
 * EnglishPage.jsx, HindiPage.jsx) carried the full body: the four skills,
 * reading stages, writing, speaking phrases, grammar, a session, activities,
 * home support and the parent Q&A. That body is what a parent comparing the
 * two pages found missing here, so it is carried across — with the framing
 * changed, not the substance.
 *
 * The framing matters because the two URLs answer different searches (see the
 * header of data/catalog/tuitions.js). So, the same rule the other fourteen
 * tuition entries follow:
 *
 *   - The H1 and the lead are the tuition page's own, held to "<language>
 *     tuition in hyderabad" and to Classes 4–10, the boards and the exam.
 *   - The programme's age bands (4–6, 7–9, 10–12, 13+) become class bands
 *     (4–5, 6–7, 8, 9–10), because a tuition parent thinks in classes.
 *   - Each page says plainly which of the two classes it is and links to the
 *     other, so a family that wants the language rather than the marks is
 *     sent to the right place instead of enrolled in the wrong one.
 *
 * Telugu and Hindi script is carried exactly as it appears on the programme
 * pages, which was itself brought across by script rather than retyped.
 * Nothing here quotes a fee, a timing or a mark — those stay "ask us".
 */

const BOARD_FACT = { strong: 'CBSE · ICSE · State', span: 'Boards covered' };
const CLASSES_FACT = { strong: 'Classes 4–10', span: 'Levels covered' };
const BATCH_FACT = { strong: 'Max 8', span: 'Students per batch' };

const PRACTICAL = {
  options: [
    'Classroom batches at the centre, grouped by class',
    'Online availability varies by batch',
    'We will say honestly which suits your child',
  ],
  timings: ['Weekday, after school', 'Weekend batches', 'Exam-season revision slots are added as needed'],
  fees: [
    'Depends on class, board and batch format',
    'We explain what is included first',
    'Free trial before you decide anything',
  ],
};

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

export const tuitionLanguageDetails = {
  /* ======================================================================
   * TELUGU
   * ==================================================================== */
  '/tuitions/telugu': {
    h1: 'Telugu tuition in Hyderabad for children who lose marks on the paper, not the language.',
    lead: 'Chapter-by-chapter textbook coverage, vyakaranam, padyalu and the answer-writing technique the exam actually rewards — built on the same reading, writing and speaking practice that makes the language stick.',
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 4–10 · CBSE, ICSE, State', 'Batches of eight'],
    heroSecondary: 'See how the year runs',
    hero: {
      title: 'Where every child starts: అ ఆ ఇ ఈ',
      bullets: [
        'First the vowels. అ sounds like the “a” in up.',
        'Then consonants. మ is the “ma” sound.',
        'Letters join to make sounds, and sounds join to make words.',
        'Soon your child reads అమ్మ — amma, mother. Their first word.',
      ],
      note: 'A child who cannot yet read Telugu fluently starts here, whatever class they are in. Fluent readers start at the textbook.',
    },
    facts: [CLASSES_FACT, BOARD_FACT, { strong: 'Weekly', span: 'Written practice' }, BATCH_FACT],

    method: {
      eyebrow: 'What shapes the tuition',
      title: 'Textbook first, but not textbook only',
      lead: 'Most children who lose marks in Telugu understand the language perfectly well. What they lack is reading speed, spelling and the habit of writing an answer the way the examiner expects. So the class works on both.',
      bullets: [
        {
          term: 'Coverage ahead of school.',
          text: 'Every prescribed lesson is read, explained and revised before the school test, not after it.',
        },
        {
          term: 'The four skills together.',
          text: 'Reading, writing, speaking and understanding are practised in every session, because each one makes the others faster.',
        },
        {
          term: 'Grammar as rules that apply.',
          text: 'Sandhulu, samasalu and alankaralu are taught as patterns a child can use on an unseen example, not lists to recite.',
        },
        {
          term: 'Writing that is marked.',
          text: 'One written piece a week, marked against the board pattern with the mark breakdown shown.',
        },
      ],
      panel: {
        title: 'The four skills',
        pills: [
          'Reading — letters, words, sentences, lessons',
          'Writing — letter shapes, spelling, answers',
          'Speaking — reading aloud and question-answer',
          'Understanding — listening and comprehension',
        ],
        note: 'School Telugu asks for reading fluency, spelling and comprehension. These are the same skills practised here.',
      },
    },

    trust: {
      eyebrow: 'How it is taught',
      title: 'Six things Telugu tuition works on every week',
      lead: 'The textbook is the spine of the class. Everything else is what makes the textbook readable, writable and rememberable.',
      cols: 3,
      items: [
        { icon: '📘', title: 'Textbook coverage', text: 'Prose and poetry lessons explained with meaning, context and the answers the exam expects.' },
        { icon: '📖', title: 'Telugu reading', text: 'Letters, then words, then sentences, then the lesson itself — read aloud until it is smooth.' },
        { icon: '✍️', title: 'Telugu writing', text: 'Letter formation, handwriting, spelling and full answers written to the required length.' },
        { icon: '🗣️', title: 'Speaking practice', text: 'Reading aloud, pronunciation and question-answer practice, so the language is used and not only studied.' },
        { icon: '🗂️', title: 'Vocabulary', text: 'New words from the prescribed texts grouped by theme, so they connect to daily life and stay learned.' },
        { icon: '🧩', title: 'Vyakaranam', text: 'Nouns, verbs, sandhi and samasa taught through examples, then applied to unseen questions.' },
      ],
    },

    whatIs: {
      eyebrow: 'The basics',
      title: 'What is Telugu tuition for Classes 4 to 10?',
      lead: 'A class that follows the school syllabus and builds the language skills the syllabus quietly assumes a child already has.',
      paras: [
        'Telugu tuition covers the prescribed textbook chapter by chapter — gadyam, padyam, vyakaranam and the writing section — ahead of the school schedule, so a child walks into each test already revised.',
        'That alone is not enough for many children in Hyderabad. A child in an English-medium school may speak Telugu fluently at home and still read it slowly, spell it uncertainly and freeze on a padyam they cannot decode. Structured practice matters because Telugu has a large alphabet: a few letters at a time, in a fixed order, is far easier than meeting letters at random inside a textbook lesson.',
        'Reading and writing are practised together. When a child writes a letter, their hand learns its shape, and that makes the letter much easier to recognise the next time they read it. Doing only one of the two makes both slower — and slow reading is where exam time goes.',
        'Speaking matters even in a tuition class. A child who reads each lesson aloud, answers questions on it out loud and retells it in their own words remembers it in a way that silent reading never manages.',
      ],
      panels: [
        {
          title: 'Good news about Telugu',
          paras: [
            'Telugu is written almost exactly as it sounds. Once a child knows the letters, they can read a word they have never seen before and say it correctly. That makes reading easier than in English, where spelling often surprises you.',
            'The alphabet is large, which is why it is taught a few letters at a time rather than all at once — and why a fluent speaker can still be a slow reader.',
          ],
        },
        {
          title: 'Tuition or the Telugu programme?',
          paras: [
            'This page is syllabus and exam work for Classes 4 to 10. If your child understands Telugu but never learned to read or write it, and school marks are not the issue, the Telugu programme under Programmes starts from the aksharamala and works towards fluency without following a textbook. Many families take one, then the other.',
          ],
        },
      ],
      answerRowsTitle: 'The same thing, three ways',
      answerRows: [
        {
          tag: 'Simple explanation',
          text: 'Telugu has its own letters. Once a child knows the letters, they can read words. Once they can read words, they can read a lesson. Once they can read a lesson, they can answer questions on it. Tuition takes a child through those steps in order, one small piece at a time, and then practises the answering until it is automatic.',
        },
        {
          tag: 'Easy example',
          text: 'A child learns the letter అ and the letter మ. Put them together and they can read అమ్మ — amma, which means mother. Two letters, one real word. A Class 6 lesson is the same thing, thousands of times over, at speed.',
        },
        {
          tag: 'At Brolly Juniors',
          text: 'The textbook is covered ahead of school, every written answer is marked the way the board marks it, and reading, writing and speaking are practised in every session rather than saved for later. Book a free trial and your child can try a session before you decide anything.',
        },
      ],
    },

    whyLearn: {
      eyebrow: 'For parents',
      title: 'Why Telugu tuition, and not just more homework?',
      lead: 'Many children in Hyderabad speak Telugu at home but read and write it slowly. The school period has no time to fix that. This class does.',
      cols: 3,
      items: [
        { title: 'Reading practice', text: 'Regular reading turns slow letter-by-letter decoding into smooth reading. That change usually takes a few months of steady practice, and it is what frees up exam time.' },
        { title: 'Writing practice', text: 'Guided handwriting and answer-writing practice makes letters neat and quick to write, which matters when a paper is marked for presentation as well as content.' },
        { title: 'Vocabulary', text: 'More words means more a child can read and understand in the textbook. Words are taught in themes so they connect to daily life.' },
        { title: 'Comprehension', text: 'Reading a passage and answering questions about it is a skill of its own, and it is practised directly — including the unseen passage.' },
        { title: 'Understanding the lessons', text: 'Telugu padyalu and stories open up once a child can read them alone rather than being read to. That is when the lesson stops being memorised and starts being understood.' },
        { title: 'Grammar that transfers', text: 'A rule learned as a pattern can be applied to a question the child has never seen. A rule learned as a list cannot.' },
        { title: 'Support for school', text: 'School Telugu asks for reading fluency, spelling and comprehension. These are the same skills practised here, on the same textbook.' },
        { title: 'Language confidence', text: 'A child who can read the paper without hesitation stops feeling shut out of a language they hear every day.' },
        { title: 'A link to family', text: 'For many families, Telugu is how grandparents talk. Reading and writing it well keeps that connection whole, whatever the marks do.' },
      ],
      note: 'A note on expectations: how fast a child progresses depends on how often they practise and where they start. We do not promise particular marks or a fixed timeline — what we commit to is structured teaching and regular marked practice.',
    },

    benefits: {
      eyebrow: 'Benefits',
      title: 'What Telugu tuition builds',
      lead: 'Eight things children work on across the year, alongside the textbook.',
      cols: 4,
      items: [
        { icon: '📖', title: 'Reading fluency', text: 'From sounding out single letters to reading a full lesson aloud without stumbling.' },
        { icon: '✍️', title: 'Writing skills', text: 'Correct letter shapes, neat handwriting, and full answers written unaided to the required length.' },
        { icon: '💬', title: 'Speaking practice', text: 'Reading aloud and answering questions out loud in every session, not saved for later.' },
        { icon: '🗂️', title: 'Vocabulary', text: 'Words from the prescribed texts grouped by theme — family, food, nature — so they are easier to remember.' },
        { icon: '⚙️', title: 'Vyakaranam', text: 'Nouns, verbs, sandhi and samasa taught through examples, then applied to unseen questions.' },
        { icon: '🔊', title: 'Pronunciation', text: 'Saying each sound clearly, including the aspirated letters that are easy to mix up on paper.' },
        { icon: '👂', title: 'Listening skills', text: 'Following spoken Telugu and picking out what matters in what was said — the dictation and oral parts of the paper.' },
        { icon: '🔎', title: 'Comprehension', text: 'Reading a passage and answering questions about it in the child’s own words, within the mark weight.' },
      ],
    },

    topics: {
      eyebrow: 'Topics covered',
      title: 'What will children learn?',
      lead: 'Everything below is taught in order, with each step resting on the one before it. The textbook decides the sequence; these are the skills underneath it.',
      items: [
        'Telugu alphabet',
        'Vowels and consonants',
        'Letter recognition',
        'Word formation',
        'Vocabulary',
        'Reading',
        'Writing',
        'Spelling',
        'Vyakaranam',
        'Sandhulu',
        'Samasalu',
        'Padyalu with bhavam',
        'Sentence formation',
        'Speaking',
        'Listening',
        'Comprehension',
        'Unseen passages',
        'Answer writing',
        'Letter and essay writing',
        'Past papers',
      ],
    },

    levels: {
      eyebrow: 'Where a child starts',
      title: 'Four starting points, decided by what the child can already do',
      lead: 'Class decides the textbook. What the child can already read and write decides where the language work begins — a Class 7 child who cannot read fluently starts with reading, not with Class 7 answers.',
      badge: 'Start',
      items: [
        {
          title: 'Telugu basics',
          text: 'For a child who recognises few letters. Telugu letters, vowels, basic sounds, letter recognition and simple words — run alongside the textbook, not instead of it.',
          example: 'Matching a letter card to the picture that starts with that sound, then finding that letter in the day’s lesson.',
          skill: 'Letter recognition and sound awareness.',
        },
        {
          title: 'Reading & writing',
          text: 'Letters become words. Word reading, writing practice, spelling, simple sentences and steady vocabulary from the prescribed texts.',
          example: 'Reading a word card from the lesson aloud, then writing it from memory.',
          skill: 'Reading fluency and correct spelling.',
        },
        {
          title: 'Language skills',
          text: 'Vyakaranam basics, sentence formation, reading comprehension, speaking practice and listening activities. The four skills start working together on the textbook.',
          example: 'Reading a short paragraph from the lesson, then answering three questions about it in writing.',
          skill: 'Comprehension and sentence building.',
        },
        {
          title: 'Exam practice',
          text: 'Longer passages, padyalu with bhavam, answer writing by mark weight, letters and essays, grammar applied in real answers, and past papers under time.',
          example: 'Writing a full five-mark answer, then marking it against the board scheme with the educator.',
          skill: 'Independent answer writing under time.',
        },
      ],
      note: 'A learning structure rather than a school-board syllabus. Ask us where your child would start — the trial class is how we find out.',
    },

    ageBands: {
      eyebrow: 'By class',
      title: 'Telugu tuition by class',
      lead: 'What the emphasis is at each stage. The textbook changes every year; the skills build on each other.',
      cols: 4,
      items: [
        { kv: 'Classes 4–5', title: 'Reading & spelling', chips: ['Letter fluency', 'Word reading', 'Spelling', 'Short answers', 'Rhymes and padyalu'] },
        { kv: 'Classes 6–7', title: 'Lessons & grammar', chips: ['Chapter coverage', 'Sandhulu', 'Vocabulary', 'Comprehension', 'Paragraph answers'] },
        { kv: 'Class 8', title: 'Writing formats', chips: ['Samasalu', 'Alankaralu', 'Letter writing', 'Essay writing', 'Unseen passages'] },
        { kv: 'Classes 9–10', title: 'Board preparation', chips: ['Full syllabus', 'Answer length by marks', 'Past papers', 'Timed writing', 'Presentation'] },
      ],
      note: 'Not sure where your child fits? A free trial is the quickest way to find out. We see what your child can already read, write and answer, and suggest a starting point.',
    },

    extras: [
      {
        id: 'reading',
        kind: 'split',
        band: true,
        eyebrow: 'Skill one',
        title: 'Telugu reading',
        lead: 'Reading is built in stages. A child never jumps from letters straight to a Class 8 lesson — each stage is practised until it feels easy.',
        paras: [
          'The good news is that Telugu is written as it sounds. Once a child knows the letters, they can read a word they have never seen before. That is why letter recognition gets so much attention early on, even with older children.',
          'Comprehension is added once a child reads sentences comfortably. Reading the words is one skill; understanding what they mean is another, and both are practised — because the exam tests the second one.',
          'Reading speed is the hidden exam skill. A child who reads the question paper slowly has less time to write. Regular short readings, a little faster each week, are what move it.',
        ],
        panel: {
          title: 'How reading is built',
          bullets: [
            'Letter recognition — naming any letter quickly and correctly.',
            'Word reading — reading whole words rather than sounding out each letter.',
            'Sentence reading — reading a full sentence smoothly, with the right pauses.',
            'Reading practice — regular short readings that build speed and confidence.',
            'Lesson reading — a full textbook lesson read from start to finish, alone.',
            'Comprehension — answering questions about what was just read.',
          ],
        },
      },
      {
        id: 'writing',
        kind: 'cards',
        cols: 4,
        eyebrow: 'Skill two',
        title: 'Telugu writing',
        lead: 'Writing is practised alongside reading, because forming a letter by hand is what makes it easy to recognise later — and because the exam is written.',
        items: [
          { title: 'Letter formation', text: 'Learning the correct order of strokes, which makes writing quicker and neater.' },
          { title: 'Handwriting practice', text: 'Regular short practice so letters become consistent in size and shape. Presentation carries marks.' },
          { title: 'Word writing', text: 'Writing whole words correctly, joining what a child already knows.' },
          { title: 'Sentence writing', text: 'Putting words in the right Telugu order to make a complete sentence.' },
          { title: 'Spelling', text: 'Writing a word from memory, which is harder than copying and what the exam asks for.' },
          { title: 'Answer writing', text: 'Structure, length and presentation for each mark weight — two-mark, five-mark, ten-mark.' },
          { title: 'Letters and essays', text: 'Every writing format drilled to its skeleton, so the whole of a child’s thinking goes into the content.' },
          { title: 'Neatness and speed', text: 'Both matter in a timed paper, and both come from steady practice rather than pressure.' },
        ],
      },
      {
        id: 'speaking',
        kind: 'answers',
        band: true,
        cols: 3,
        eyebrow: 'Skill three',
        title: 'Telugu speaking',
        lead: 'Children speak Telugu in every session — reading aloud, answering questions and retelling the lesson. These are the kind of everyday exchanges they practise; the romanisation is there so you can say them at home too.',
        items: [
          { q: 'నీ పేరు ఏమిటి? — nee peru emiti? (What is your name?)', a: 'నా పేరు రవి. — My name is Ravi.' },
          { q: 'మీకు ఏమి ఇష్టం? — meeku emi ishtam? (What do you like?)', a: 'నాకు పాలు ఇష్టం. — I like milk.' },
          { q: 'నువ్వు ఎలా ఉన్నావు? — nuvvu elaa unnaavu? (How are you?)', a: 'నేను బాగున్నాను. — I am fine.' },
          { q: 'నీకు ఎన్ని సంవత్సరాలు? — neeku enni samvatsaraalu? (How old are you?)', a: 'నాకు ఎనిమిది సంవత్సరాలు. — I am eight years old.' },
          { q: 'నీ బడి పేరు ఏమిటి? — nee badi peru emiti? (What is the name of your school?)', a: 'నా బడి పేరు… — The name of my school is…' },
          { q: 'నమస్కారం! — namaskaaram! (Hello, greetings.)', a: 'ధన్యవాదాలు. — Thank you.' },
        ],
        note: 'Pronunciation is corrected gently the moment it slips rather than later. Children take turns asking and answering, and retell each lesson in their own Telugu words — the hardest and most useful speaking task, and the one that fixes it in memory for the exam.',
      },
      {
        id: 'grammar',
        kind: 'cards',
        cols: 3,
        eyebrow: 'Vyakaranam made simple',
        title: 'Telugu grammar for the paper',
        lead: 'Grammar is taught through examples, not rules to memorise. Here is what children learn first, and what each part looks like — the sandhi and samasa questions build on exactly this.',
        items: [
          { title: 'Nouns', text: 'A noun is a naming word — a person, animal, place or thing.', eg: 'అమ్మ (amma — mother) · పిల్లి (pilli — cat) · బడి (badi — school)' },
          { title: 'Pronouns', text: 'A pronoun stands in for a name, so you do not repeat it every time.', eg: 'నేను (nenu — I) · నువ్వు (nuvvu — you) · అతను (athanu — he) · ఆమె (aame — she)' },
          { title: 'Verbs', text: 'A verb is a doing word. It tells you what is happening.', eg: 'తినడం (tinadam — eating) · చదవడం (chadavadam — reading) · ఆడటం (aadatam — playing)' },
          { title: 'Sentence order', text: 'In Telugu the verb comes last. English says “I eat rice”; Telugu says “I rice eat”.', eg: 'నేను అన్నం తింటాను. (nenu annam tintaanu — I eat rice.)' },
          { title: 'Singular and plural', text: 'Most Telugu words change their ending to show there is more than one.', eg: 'పుస్తకం → పుస్తకాలు (book → books) · చెట్టు → చెట్లు (tree → trees)' },
          { title: 'Asking questions', text: 'Question words come inside the sentence rather than always at the start.', eg: 'ఇది ఏమిటి? (idi emiti? — What is this?) · ఎక్కడ? (ekkada? — where?)' },
        ],
        note: 'From Class 6 the same approach carries into sandhulu, samasalu, alankaralu and chandassu: the rule shown on three examples, then applied to a fourth the child has never seen.',
      },
      {
        id: 'exam',
        kind: 'cards',
        band: true,
        cols: 3,
        eyebrow: 'The paper',
        title: 'Marked the way the board marks it',
        lead: 'Every written submission is marked against the board’s own pattern, with the mark breakdown shown. A child who has only ever seen a total does not know that four of their lost marks were presentation and two were length.',
        items: [
          { icon: '📏', title: 'Answer length by mark weight', text: 'A two-mark answer and a five-mark answer are different shapes. Children learn each shape until it is automatic.' },
          { icon: '📜', title: 'Padyalu with bhavam', text: 'Verse memorised with meaning, so the bhavam question is answered from understanding rather than recall.' },
          { icon: '🔎', title: 'Unseen passage strategy', text: 'Locating the answer in the passage, answering in the expected length, and not paraphrasing what can be quoted.' },
          { icon: '✉️', title: 'Writing formats', text: 'Letter, essay and report skeletons drilled so the heading, opening and close are never where marks are lost.' },
          { icon: '⏱️', title: 'Past papers under time', text: 'From Class 7 upward, full papers written in the time allowed, then marked with the breakdown.' },
          { icon: '📝', title: 'A monthly note home', text: 'What was covered, what the last piece scored, and the one thing to work on before the next.' },
        ],
      },
      {
        id: 'parent-qa',
        kind: 'answers',
        cols: 3,
        eyebrow: 'Parent guide',
        title: 'Questions parents ask us',
        lead: 'Six short answers to the things that come up most in a first phone call.',
        items: [
          { q: 'Is Telugu difficult for children?', a: 'Not especially. Telugu is written as it sounds, so reading is easier than in English once the letters are known. The alphabet is large, which is why it is taught a few letters at a time — and why a child who speaks it fluently can still read it slowly.' },
          { q: 'My child speaks Telugu but scores badly. Why?', a: 'Usually reading speed, spelling and answer structure — none of which speaking teaches. The class works on those three directly, on the child’s own textbook.' },
          { q: 'How can children improve Telugu reading?', a: 'By reading a little every day at a level that is comfortable. Reading something slightly too hard slows a child down; reading something easy builds speed and confidence.' },
          { q: 'How often should children practise?', a: 'A little most days works better than a long session once a week. Ten or fifteen minutes of reading or writing is enough to keep progress steady between classes.' },
          { q: 'Can a child who cannot read Telugu join?', a: 'Yes. They start from the vowels alongside the textbook, and usually move quickly because the vocabulary is already familiar — only the letters are new.' },
          { q: 'Does this cover my child’s board?', a: 'CBSE, ICSE and the Telangana State syllabus. Tell us the class and the textbook and we will confirm the batch before you commit to anything.' },
        ],
      },
    ],

    session: {
      eyebrow: 'Inside a session',
      title: 'What happens in a Telugu tuition class?',
      lead: 'An example of how a session flows. Ask us for the current class structure and batch detail for your child’s class.',
      items: [
        { title: 'Warm-up', text: 'A quick, easy start that revisits words or a rule from last time.' },
        { title: 'The lesson, ahead of school', text: 'The next textbook chapter read aloud and explained — meaning, context and the questions the exam asks on it.' },
        { title: 'New Telugu words', text: 'A small set of new words from the lesson, said out loud together and connected to something the child already knows.' },
        { title: 'Reading practice', text: 'Reading the new words, then the passage they came from, a little faster than last week.' },
        { title: 'Writing practice', text: 'Writing the same words by hand, then one answer to the required length.' },
        { title: 'Speaking activity', text: 'Retelling the lesson or answering questions on it out loud, usually in pairs.' },
        { title: 'Grammar or exam skill', text: 'One rule or one format — a sandhi, a letter skeleton, an unseen passage — practised on fresh examples.' },
        { title: 'Quick recap', text: 'A short review of what was learned and what to practise at home before the next class.' },
      ],
      note: 'Weekly written work is marked and returned with the breakdown, not just a total.',
    },

    activities: {
      eyebrow: 'Practice',
      title: 'Telugu activities used in tuition',
      lead: 'The activity types used to keep practice varied — because a child who is engaged practises more, and practice is what moves the marks.',
      items: [
        'Reading the lesson aloud',
        'Telugu word games',
        'Picture-to-word matching',
        'Vocabulary from the text',
        'Retelling the lesson',
        'Padyalu recitation with meaning',
        'Question-answer practice',
        'Answer-writing drills',
        'Sandhi and samasa sets',
        'Sentence building',
        'Timed past-paper sections',
        'Marking against the scheme',
      ],
    },

    whyUs: {
      eyebrow: 'Why us',
      title: 'Why choose Brolly Juniors for Telugu tuition',
      lead: 'Telugu sits alongside our other academic tuitions and skill programmes for children in Hyderabad.',
      cols: 4,
      items: [
        { icon: '📘', title: 'Ahead of school', text: 'Every lesson covered before the school test, so revision is revision and not first contact.' },
        { icon: '💡', title: 'Simple explanations', text: 'Everything is explained in words a child can repeat back in their own way.' },
        { icon: '🪜', title: 'Structured learning', text: 'Letters, then words, then sentences, then the lesson, then the answer — always in that order.' },
        { icon: '🧑', title: 'Placed by ability', text: 'Class decides the textbook. What the child can already do decides where the language work starts.' },
        { icon: '✍️', title: 'Marked the board’s way', text: 'Weekly written work marked against the board pattern, with the breakdown shown.' },
        { icon: '🗣️', title: 'Speaking every session', text: 'The part the school period rarely has time for is the part that makes the lesson stick.' },
        { icon: '💬', title: 'Parent communication', text: 'A monthly note on what was covered, what the last piece scored and what to work on.' },
        { icon: '🔎', title: 'Focus on understanding', text: 'A child who can only recite has not learned. Understanding comes first, then the exam technique.' },
      ],
      note: 'Experienced educators guide children through class-appropriate Telugu work. Ask us who teaches the batch you are considering and we will tell you.',
    },

    practical: { ...PRACTICAL, feeTitle: 'Telugu tuition fees' },

    trial: {
      title: 'Book a free Telugu tuition trial',
      paras: [
        'Let your child sit in a real session. They read, write and answer alongside the batch, and we see where the marks are actually going.',
      ],
      includes: [
        'Your child tries a real lesson and a written answer',
        'We see what they can already read, write and answer',
        'You get a suggested starting point',
        'Options, timings and fees explained clearly',
        'No obligation to enrol afterwards',
      ],
    },

    homeGuide: {
      eyebrow: 'At home',
      title: 'How parents can support Telugu at home',
      lead: 'Eight simple things that make a real difference between classes. None of them takes long.',
      cols: 4,
      items: [
        { title: 'Read the lesson together', text: 'Take turns reading a line each from the textbook. Your child hears fluent reading and practises their own.' },
        { title: 'Practise a few words daily', text: 'Five words from the lesson a day is plenty. Short and regular beats long and occasional.' },
        { title: 'Encourage Telugu conversations', text: 'Ask a question in Telugu at dinner. Even one exchange a day counts as practice.' },
        { title: 'Read the Telugu around you', text: 'Signboards, shop names, bus boards. Real Telugu in the world is good reading practice.' },
        { title: 'Ask for the story back', text: 'Ask your child to tell you what happened in the lesson, in Telugu, in their own words.' },
        { title: 'Practise writing', text: 'A few letters or one sentence a day keeps handwriting steady between classes.' },
        { title: 'Ask about new words', text: '“What new word did you learn today?” makes a child recall it, which is what fixes it.' },
        { title: 'Make it fun', text: 'Word games and rhymes work better than testing. A child who enjoys it will keep going.' },
      ],
    },

    local: {
      title: 'Telugu tuition in Hyderabad',
      paras: [
        'Telugu is all around children in Hyderabad — at home, on signboards, in conversations with grandparents. Many children understand it perfectly well but read it slowly and write it uncertainly, and the marks show it.',
        'That gap is what this class closes. A child who already speaks Telugu usually moves quickly, because the vocabulary is familiar and only the reading, the spelling and the answer technique are new. A child starting from fewer letters takes a little longer, and that is fine too.',
      ],
      areas: AREAS,
      note: 'Tell us your child’s class, board and how comfortably they read Telugu, and we will suggest where they should start.',
    },

    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Telugu tuition near you?',
      lead: 'Parents searching for Telugu tuition near me usually want the same few things: a place that is easy to reach, a teacher who explains simply, and a class that follows their child’s textbook. The level is the part worth checking carefully.',
      cols: 4,
      items: [
        { title: 'Your child’s board', text: 'CBSE, ICSE or State — the textbook and the marking pattern differ, and the batch should match.' },
        { title: 'Reading fluency', text: 'A fluent speaker who reads slowly needs something different from a fluent reader who writes badly.' },
        { title: 'Marked writing', text: 'Ask to see how written work is marked. A total alone tells a child nothing.' },
        { title: 'Ahead or behind', text: 'Ask whether the class covers lessons before school does, or catches up after.' },
      ],
    },

    relatedTitle: 'Related classes at Brolly Juniors',
    relatedLead: 'Language tuitions and programmes that sit alongside Telugu tuition.',
    related: [
      { icon: '🪔', title: 'Telugu programme', text: 'The aksharamala, reading, writing and conversation — for the language rather than the marks.', to: '/programs/telugu' },
      { icon: '📖', title: 'English tuition', text: 'Literature, grammar and every writing format, marked to the board’s scheme.', to: '/tuitions/english' },
      { icon: '🇮🇳', title: 'Hindi tuition', text: 'Vyakaran, textbook chapters and the writing formats where Hindi marks are lost.', to: '/tuitions/hindi' },
      { icon: '🎤', title: 'Public speaking', text: 'From show-and-tell to a prepared presentation, one stage at a time.', to: '/junior-skills/public-speaking' },
      { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a conversation well.', to: '/programs/communication-skills' },
      { icon: '📚', title: 'All academic tuitions', text: 'Maths, science, social studies and languages for Classes 4 to 10.', to: '/tuitions' },
    ],

    faqTitle: 'Frequently asked questions about Telugu tuition in Hyderabad',
    faqs: [
      {
        q: 'What does Telugu tuition at Brolly Juniors cover?',
        a: 'The prescribed textbook chapter by chapter — gadyam, padyam and vyakaranam — plus unseen passages, letter and essay writing, and answer-writing technique for each mark weight. Reading, writing and speaking are practised in every session because the exam quietly depends on all three.',
      },
      {
        q: 'Which classes and boards are covered?',
        a: 'Classes 4 to 10 across CBSE, ICSE and the Telangana State syllabus. Batches are grouped by class so the textbook and the marking pattern match.',
      },
      {
        q: 'My child speaks Telugu at home but scores badly. Can tuition help?',
        a: 'This is the most common starting point. A fluent speaker who reads slowly, spells uncertainly or writes unstructured answers loses marks on the paper, not the language. Those three are exactly what the class works on, and such children usually move quickly because the vocabulary is already there.',
      },
      {
        q: 'Can a child who cannot read Telugu join tuition?',
        a: 'Yes. They start from the vowels alongside the textbook rather than instead of it, a few letters at a time, and catch up to the lesson as reading becomes fluent.',
      },
      {
        q: 'How is written work marked?',
        a: 'Against the board’s own pattern, with the mark breakdown shown — content, length, structure and presentation separately. Weekly written work is marked and returned, and past papers are written under time from Class 7 upward.',
      },
      {
        q: 'Is this the same as the Telugu programme under Programmes?',
        a: 'No. This page is syllabus and exam work for Classes 4 to 10. The Telugu programme starts from the aksharamala and builds reading, writing and conversation without following a textbook. If marks are not the issue, that is the better fit. Many families take one, then the other.',
      },
      {
        q: 'How much practice does my child need at home?',
        a: 'Ten to fifteen minutes on most days — a few lines of the lesson read aloud, five words, one written sentence. Short and regular beats a long session once a week.',
      },
      {
        q: 'How large are the batches?',
        a: 'Capped at eight, so the educator can hear every child read aloud and mark every child’s writing individually each week.',
      },
      {
        q: 'What is the Telugu tuition fee in Hyderabad?',
        a: 'It depends on the class, the board and the batch format, so a single number would be misleading. Tell us your child’s class and we will send the current fee for exactly that. Nothing is payable before the free trial.',
      },
      {
        q: 'Where are the Telugu tuition classes held?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre, near JNTU Metro Station. Ask us about current online availability.',
      },
    ],

    quickAnswersTitle: 'Telugu tuition in Hyderabad: quick answers',
    quickAnswers: [
      {
        q: 'What is the best way for children to improve Telugu marks?',
        a: 'Cover the lesson before school does, read it aloud until it is fluent, write one marked answer a week, and learn grammar as rules that apply to unseen examples. Speaking Telugu at home helps the vocabulary; it does not fix reading speed or answer structure — tuition does.',
      },
      {
        q: 'How can children improve Telugu reading speed?',
        a: 'By reading a little every day at a comfortable level. Material that is slightly too hard slows a child down. Letter recognition should be quick and automatic first, because everything else — including exam time — depends on it.',
      },
      {
        q: 'Why do children lose marks in Telugu?',
        a: 'Usually presentation, answer length and structure rather than understanding. Marking with the breakdown shown is what makes those losses visible and fixable.',
      },
      {
        q: 'What age or class can children start Telugu tuition?',
        a: 'From Class 4. Older children start wherever their reading and writing sit; the textbook is decided by class and the language work by ability.',
      },
      {
        q: 'Are Telugu tuition classes available near me?',
        a: 'Brolly Juniors runs Telugu tuition from its centre at Nizampet X Roads, Hyderabad, with batches after school and at weekends. Tell us your locality and preferred timing and we will confirm what is open.',
      },
    ],
  },

  /* ======================================================================
   * ENGLISH
   * ==================================================================== */
  '/tuitions/english': {
    h1: 'English tuition in Hyderabad that turns fluent speakers into high scorers.',
    lead: 'Literature, grammar, unseen comprehension and every writing format on the paper — marked against the board’s own scheme, and built on the reading, writing, speaking and listening practice that makes the marks hold.',
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 4–10 · CBSE, ICSE, State', 'Batches of eight'],
    heroSecondary: 'See how the year runs',
    hero: {
      title: 'A full sentence, in three moves',
      bullets: [
        'Find the doer first. Who is doing something? The cat.',
        'Then the action. What is the cat doing? Drinking.',
        'Then the thing. Drinking what? Milk.',
        'Doer, action, thing — “The cat drinks milk.” That order works for most English sentences, and most exam answers.',
      ],
      note: 'A child who can build a sentence deliberately can build a paragraph, and a paragraph is what every writing question is asking for.',
    },
    facts: [CLASSES_FACT, BOARD_FACT, { strong: 'Weekly', span: 'Marked writing' }, BATCH_FACT],

    method: {
      eyebrow: 'What shapes the tuition',
      title: 'Most English marks are lost in the writing section',
      lead: 'Children in Hyderabad who speak English comfortably still write flatly, miss the format, and lose marks on unseen passages they understood perfectly well. So the practice weight sits where the marks go.',
      bullets: [
        {
          term: 'Coverage ahead of school.',
          text: 'Every prescribed prose and poetry lesson explained — theme, character, language and the questions the exam asks — before the school test.',
        },
        {
          term: 'All four skills, every session.',
          text: 'Reading, writing, speaking and listening are practised together. A child who only reads hesitates when asked to talk; a child who only talks struggles to spell.',
        },
        {
          term: 'Grammar as a pattern.',
          text: 'Tenses, articles and clauses are taught as patterns a child can apply in their own writing, not lists to recite for the grammar section alone.',
        },
        {
          term: 'Writing that is marked.',
          text: 'One written piece a week — a letter, a notice, a paragraph — marked against the board pattern with the breakdown shown.',
        },
      ],
      panel: {
        title: 'The four skills',
        pills: [
          'Reading — sounds, words, sentences, texts',
          'Writing — spelling, sentences, paragraphs, formats',
          'Speaking — conversation, pronunciation, presenting',
          'Listening — following and understanding what is said',
        ],
        note: 'School English asks for comprehension, grammar in context and structured writing. These are the same skills practised here.',
      },
    },

    trust: {
      eyebrow: 'How it is taught',
      title: 'Six things English tuition works on every week',
      lead: 'The textbook is the spine of the class. Everything else is what makes it readable, writable and rememberable.',
      cols: 3,
      items: [
        { icon: '📘', title: 'Literature coverage', text: 'Prose and poetry lessons explained with theme, character and the answers the exam expects.' },
        { icon: '📖', title: 'English reading', text: 'Letter sounds, then words, then sentences, then whole texts — including the unseen passage.' },
        { icon: '✍️', title: 'English writing', text: 'Spelling, sentences, short paragraphs and every writing format on the paper.' },
        { icon: '🗣️', title: 'Speaking practice', text: 'Everyday conversation and question-answer practice every session, so English is used and not only studied.' },
        { icon: '🗂️', title: 'Vocabulary', text: 'New words from the prescribed texts grouped by theme, so they connect to daily life and stay learned.' },
        { icon: '🎤', title: 'Communication', text: 'Storytelling and simple presentations that build the confidence the oral assessment asks for.' },
      ],
    },

    whatIs: {
      eyebrow: 'The basics',
      title: 'What is English tuition for Classes 4 to 10?',
      lead: 'A class that follows the school syllabus and builds the language skills the syllabus quietly assumes a child already has.',
      paras: [
        'English tuition covers the prescribed literature, the grammar section, unseen comprehension and the full range of writing formats — letters, notices, reports, essays — ahead of the school schedule, so a child walks into each test already revised.',
        'English has four parts that work together: reading, writing, speaking and listening. A child who only reads will hesitate when asked to talk. A child who only talks will struggle to spell. Good tuition practises all four, in every session, because the paper tests all four.',
        'Reading and writing are practised together. When a child writes a word, their hand learns its spelling, and that makes the word easier to recognise the next time they read it. Doing only one of the two makes both slower.',
        'Speaking matters even in a tuition class. A child who reads each lesson aloud, answers questions on it out loud and retells it in their own words remembers it in a way that silent reading never manages — and walks into the oral assessment already practised.',
      ],
      panels: [
        {
          title: 'The tricky part of English',
          paras: [
            'English spelling is inconsistent because English borrowed from many languages. Through, though and tough all end differently. Children learn the common phonics patterns first and meet the exceptions gradually, as sight words.',
            'That is also why spelling is practised from memory and not by copying: the exam does not let a child look at the word.',
          ],
        },
        {
          title: 'Tuition or the English programme?',
          paras: [
            'This page is syllabus and exam work for Classes 4 to 10. If your child reads well but writes flatly, and marks are not the immediate worry, the English programme under Programmes builds comprehension, vocabulary and creative writing without following a textbook. Many families take one, then the other.',
          ],
        },
      ],
      answerRowsTitle: 'The same thing, three ways',
      answerRows: [
        {
          tag: 'Simple explanation',
          text: 'A child learns to read a lesson, understand it, and write about it in the shape the examiner expects. Tuition takes a child through those steps in order, one lesson at a time, and then practises the writing until the shape is automatic.',
        },
        {
          tag: 'Easy example',
          text: 'A child learns the words cat, drinks and milk. Put them in the right order and they have made a sentence: “The cat drinks milk.” Three words, one complete idea. A five-mark answer is the same thing, five or six times over, in order.',
        },
        {
          tag: 'At Brolly Juniors',
          text: 'Grammar is taught as a pattern rather than a rule to memorise, every new word is used in a sentence the same session, and every written piece is marked to the board’s scheme. Book a free trial and your child can try a session before you decide anything.',
        },
      ],
    },

    whyLearn: {
      eyebrow: 'For parents',
      title: 'Why English tuition, and not just more homework?',
      lead: 'Many children in Hyderabad speak English comfortably and still lose marks in it. The school period has no time to fix why. This class does.',
      cols: 3,
      items: [
        { title: 'Reading practice', text: 'Regular reading turns slow word-by-word decoding into smooth reading. That shift usually takes a few months of steady practice, and it is what frees up exam time.' },
        { title: 'Writing practice', text: 'Guided writing helps children put ideas into full sentences and paragraphs instead of single words, which is what every writing question asks for.' },
        { title: 'Stronger vocabulary', text: 'More words means more a child can read and understand in the textbook and the unseen passage. Words are taught in themes so they are easier to recall.' },
        { title: 'Improved comprehension', text: 'Reading a passage and answering questions about it is different from reading it aloud. Both are practised, including the inference questions that cost the most.' },
        { title: 'Better listening', text: 'Following spoken English and picking out what matters is a skill of its own — and the listening assessment tests it directly.' },
        { title: 'Grammar that transfers', text: 'A pattern learned in the grammar section shows up in the child’s own writing. A rule learned as a list does not.' },
        { title: 'Speaking confidence', text: 'A child who has spoken in a small group is far more willing to speak in a large one — or in front of an examiner.' },
        { title: 'Story understanding', text: 'Stories carry vocabulary, sentence patterns and ideas all at once, which is why so much of the literature section is built around them.' },
        { title: 'Creative expression', text: 'Once a child has enough words they can write their own — usually when the essay question stops feeling like a threat.' },
      ],
      note: 'A note on expectations: how fast a child progresses depends on how often they practise and where they start. We do not promise particular marks or a fixed timeline — what we commit to is structured teaching and regular marked practice.',
    },

    benefits: {
      eyebrow: 'Benefits',
      title: 'What English tuition builds',
      lead: 'Eight things children work on across the year, alongside the textbook.',
      cols: 4,
      items: [
        { icon: '📖', title: 'Reading skills', text: 'From sounding out single words to reading an unseen passage without help, at exam speed.' },
        { icon: '✍️', title: 'Writing skills', text: 'Correct spelling, full sentences, linked paragraphs and every format on the paper, written unaided.' },
        { icon: '💬', title: 'Speaking practice', text: 'Everyday conversation practised out loud in every session, not saved for the oral assessment.' },
        { icon: '🗂️', title: 'Vocabulary building', text: 'New words from the prescribed texts grouped by theme — so they are easier to remember and reuse in writing.' },
        { icon: '⚙️', title: 'Grammar basics', text: 'Nouns, verbs, adjectives, tenses and sentence order, taught through examples rather than rules.' },
        { icon: '👂', title: 'Listening skills', text: 'Following spoken English and picking out the part that answers the question.' },
        { icon: '🔊', title: 'Pronunciation', text: 'Saying sounds clearly, including the ones children commonly mix up.' },
        { icon: '🔎', title: 'Comprehension', text: 'Reading a passage and answering questions about it in the child’s own words, within the mark weight.' },
      ],
    },

    topics: {
      eyebrow: 'Topics covered',
      title: 'What will children learn?',
      lead: 'Everything below is taught in order, with each step resting on the one before it. The textbook decides the sequence; these are the skills underneath it.',
      items: [
        'Phonics basics',
        'Word formation',
        'Vocabulary',
        'Reading',
        'Writing',
        'Spelling',
        'Grammar',
        'Tenses',
        'Sentence formation',
        'Speaking',
        'Listening',
        'Pronunciation',
        'Comprehension',
        'Unseen passages',
        'Prose and poetry',
        'Letter and notice writing',
        'Reports and essays',
        'Storytelling',
        'Creative writing',
        'Past papers',
      ],
    },

    levels: {
      eyebrow: 'Where a child starts',
      title: 'Four starting points, decided by what the child can already do',
      lead: 'Class decides the textbook. What the child can already read and write decides where the language work begins — a Class 7 child who reads slowly starts with reading, not with Class 7 answers.',
      badge: 'Start',
      items: [
        {
          title: 'English basics',
          text: 'For a child whose reading is still letter by letter. Letter sounds, simple words, basic vocabulary and listening activities — run alongside the textbook, not instead of it.',
          example: 'Matching a letter card to the picture that starts with that sound, then finding the sound in the day’s lesson.',
          skill: 'Letter recognition and sound awareness.',
        },
        {
          title: 'Reading & writing',
          text: 'Sounds become words, and words become sentences. Word reading, simple sentences, spelling from memory and steady vocabulary from the prescribed texts.',
          example: 'Reading a word card from the lesson aloud, then writing it from memory.',
          skill: 'Reading fluency and correct spelling.',
        },
        {
          title: 'Communication skills',
          text: 'Grammar basics, sentence formation, speaking practice, listening and reading comprehension. The four skills start working together on the textbook.',
          example: 'Reading a short paragraph from the lesson, then answering three questions about it in writing.',
          skill: 'Comprehension and sentence building.',
        },
        {
          title: 'Exam practice',
          text: 'Longer passages, the writing formats, grammar applied in real answers, literature questions by mark weight, and past papers under time.',
          example: 'Writing a formal letter to the board format, then marking it against the scheme with the educator.',
          skill: 'Independent writing under time.',
        },
      ],
      note: 'A learning structure rather than a school-board syllabus. Ask us where your child would start — the trial class is how we find out.',
    },

    ageBands: {
      eyebrow: 'By class',
      title: 'English tuition by class',
      lead: 'What the emphasis is at each stage. The textbook changes every year; the skills build on each other.',
      cols: 4,
      items: [
        { kv: 'Classes 4–5', title: 'Reading & sentences', chips: ['Phonics patterns', 'Spelling', 'Simple grammar', 'Short answers', 'Stories'] },
        { kv: 'Classes 6–7', title: 'Lessons & grammar', chips: ['Chapter coverage', 'Tenses', 'Vocabulary', 'Comprehension', 'Paragraph writing'] },
        { kv: 'Class 8', title: 'Writing formats', chips: ['Letters and notices', 'Reports', 'Unseen passages', 'Clauses', 'Poetry devices'] },
        { kv: 'Classes 9–10', title: 'Board preparation', chips: ['Full syllabus', 'Answer length by marks', 'Past papers', 'Timed writing', 'Speaking assessment'] },
      ],
      note: 'Not sure where your child fits? A free trial is the quickest way to find out. We see what your child can already read, write and answer, and suggest a starting point.',
    },

    extras: [
      {
        id: 'reading',
        kind: 'split',
        band: true,
        eyebrow: 'Skill one',
        title: 'English reading',
        lead: 'Reading is built in stages. A child never jumps from letter sounds straight to an unseen passage — each stage is practised until it feels easy.',
        paras: [
          'English is not written as it sounds, which is why phonics patterns come first and the exceptions come gradually as sight words. A child who has the common patterns can read most of a passage; the rest is vocabulary.',
          'Comprehension is added once a child reads sentences comfortably. Reading the words is one skill; understanding what they mean is another, and both are practised — because the exam tests the second one, and the inference questions test it hardest.',
          'Reading speed is the hidden exam skill. A child who reads the unseen passage slowly has less time to answer it. Regular short readings, a little faster each week, are what move it.',
        ],
        panel: {
          title: 'How reading is built',
          bullets: [
            'Letter recognition — naming any letter and its sound instantly.',
            'Word reading — reading whole words rather than sounding out each letter.',
            'Sentence reading — reading a full sentence smoothly, with the right pauses.',
            'Reading practice — regular short readings that build speed and confidence.',
            'Text reading — a full lesson or unseen passage read from start to finish, alone.',
            'Comprehension — answering questions about what was just read.',
          ],
        },
      },
      {
        id: 'writing',
        kind: 'cards',
        cols: 4,
        eyebrow: 'Skill two',
        title: 'English writing',
        lead: 'Writing is practised alongside reading, because writing a word is what fixes its spelling — and because most English marks are in the writing section.',
        items: [
          { title: 'Spelling', text: 'Writing a word from memory, which is harder than copying and what the exam asks for.' },
          { title: 'Sentence writing', text: 'Putting words in the right order with a capital letter and a full stop — the doer, action, thing pattern.' },
          { title: 'Short paragraphs', text: 'Linking several sentences so they follow on from each other, with one idea per paragraph.' },
          { title: 'Guided writing', text: 'Writing to a prompt with help available while the child works.' },
          { title: 'Writing formats', text: 'Letters, notices, reports and essays drilled to their skeletons, so the format never costs a mark.' },
          { title: 'Answer writing', text: 'Structure, length and presentation for each mark weight — two-mark, five-mark, ten-mark.' },
          { title: 'Creative writing', text: 'Writing their own story or description — usually the part children enjoy most, and the essay question in disguise.' },
          { title: 'Checking own work', text: 'Reading back what they wrote and spotting the missing capital, full stop or tense — before the examiner does.' },
        ],
      },
      {
        id: 'speaking',
        kind: 'answers',
        band: true,
        cols: 3,
        eyebrow: 'Skill three',
        title: 'English speaking',
        lead: 'Children speak English in every session — reading aloud, answering questions and presenting. These are the kind of everyday exchanges they practise, and what each one is teaching.',
        items: [
          { q: 'What is your name?', a: '“My name is Rahul.” — Answering in a full sentence, not just the name.' },
          { q: 'What do you like?', a: '“I like drawing.” — Using “I like” with a doing word.' },
          { q: 'How old are you?', a: '“I am eight years old.” — Practising numbers inside a sentence.' },
          { q: 'Where do you live?', a: '“I live in Hyderabad.” — Using “in” with a place name.' },
          { q: 'What did you do today?', a: '“I went to school and played football.” — Joining two ideas with “and”, in the past tense.' },
          { q: 'Can you tell me about your family?', a: '“I have a mother, a father and one sister.” — A longer answer, listing several things.' },
        ],
        note: 'Pronunciation is corrected gently the moment it slips rather than later. Children take turns asking and answering, retell each lesson in their own words, and from Class 8 give short prepared presentations — the format the speaking assessment uses.',
      },
      {
        id: 'grammar',
        kind: 'cards',
        cols: 3,
        eyebrow: 'Grammar made simple',
        title: 'English grammar for the paper',
        lead: 'Grammar is taught through examples, not rules to memorise. Here is what children learn first, and what each part looks like — the editing, gap-fill and transformation questions build on exactly this.',
        items: [
          { title: 'Nouns', text: 'A noun is a naming word — a person, animal, place or thing.', eg: 'teacher · dog · school · book — The dog sat on the chair.' },
          { title: 'Pronouns', text: 'A pronoun stands in for a name, so you do not repeat it every time.', eg: 'I · you · he · she · we · they — Rahul is late. He missed the bus.' },
          { title: 'Verbs', text: 'A verb is a doing word. It tells you what is happening.', eg: 'run · eat · write · sing — She writes a letter.' },
          { title: 'Adjectives', text: 'An adjective describes a noun. It tells you what something is like.', eg: 'big · red · happy · cold — The big dog ran to the red gate.' },
          { title: 'Sentence order', text: 'Most English sentences follow the same order: who, then what they do, then to what.', eg: 'The cat → drinks → milk. Doer, action, thing.' },
          { title: 'Singular and plural', text: 'Most English words add s to show there is more than one. Some change completely.', eg: 'book → books · box → boxes · child → children · foot → feet' },
          { title: 'Simple tenses', text: 'Tense tells you when something happened. Children learn three to begin with, then the rest.', eg: 'I play (now) · I played (before) · I will play (later)' },
          { title: 'Articles', text: 'A, an and the — small words that the editing question loves.', eg: 'a book · an apple · the book on the table' },
          { title: 'Joining sentences', text: 'And, but, because, although — the words that turn two short sentences into one better one.', eg: 'I was tired. I finished. → Although I was tired, I finished.' },
        ],
        note: 'From Class 6 the same approach carries into clauses, reported speech, voice and transformation: the pattern shown on three examples, then applied to a fourth the child has never seen.',
      },
      {
        id: 'phonics',
        kind: 'cards',
        band: true,
        cols: 3,
        eyebrow: 'Why spelling is hard',
        title: 'The sounds children get wrong most',
        lead: 'For younger classes, spelling errors cluster around a handful of sounds. These get extra practice, because a word spelled right is a mark kept.',
        items: [
          { kv: 'a', title: '“a” as in apple', text: 'The short sound most words use: cat, hat, man.' },
          { kv: 'e', title: '“e” as in egg', text: 'Short and quick: bed, pen, red.' },
          { kv: 'i', title: '“i” as in ink', text: 'Easy to confuse with “e”: sit, pin, big.' },
          { kv: 'sh', title: '“sh” as in ship', text: 'Two letters, one sound: shop, fish, wash.' },
          { kv: 'ch', title: '“ch” as in chair', text: 'Another pair that makes a single sound: chin, much.' },
          { kv: 'th', title: '“th” as in three', text: 'One of the trickier sounds, so it gets extra practice.' },
        ],
      },
      {
        id: 'exam',
        kind: 'cards',
        cols: 3,
        eyebrow: 'The paper',
        title: 'Marked the way the board marks it',
        lead: 'Every written submission is marked against the board’s own pattern, with the mark breakdown shown. A child who has only ever seen a total does not know that four of their lost marks were format and two were length.',
        items: [
          { icon: '📏', title: 'Answer length by mark weight', text: 'A two-mark answer and a five-mark answer are different shapes. Children learn each shape until it is automatic.' },
          { icon: '✉️', title: 'Writing formats', text: 'A notice with the wrong heading loses marks no matter how well it is written. Letter, notice, report and essay skeletons are drilled first.' },
          { icon: '🔎', title: 'Unseen passage strategy', text: 'Locating the answer in the passage, answering inference questions in the expected length, and not paraphrasing what can be quoted.' },
          { icon: '📜', title: 'Literature by question type', text: 'Extract-based, short-answer and long-answer questions on each lesson, with the expected content for each.' },
          { icon: '⏱️', title: 'Past papers under time', text: 'From Class 7 upward, full papers written in the time allowed, then marked with the breakdown.' },
          { icon: '📝', title: 'A monthly note home', text: 'What was covered, what the last piece scored, and the one thing to work on before the next.' },
        ],
      },
      {
        id: 'parent-qa',
        kind: 'answers',
        band: true,
        cols: 3,
        eyebrow: 'Parent guide',
        title: 'Questions parents ask us',
        lead: 'Six short answers to the things that come up most in a first phone call.',
        items: [
          { q: 'My child speaks English well but scores badly. Why?', a: 'Usually the writing section — format, length and structure — and the inference questions on unseen passages. None of that is taught by speaking. The class works on those directly, on the child’s own textbook.' },
          { q: 'Why is English spelling so inconsistent?', a: 'Because English borrowed from many languages. Through, though and tough all end differently. Children learn the common phonics patterns first and meet the exceptions gradually, as sight words.' },
          { q: 'How can children improve English reading?', a: 'By reading a little every day at a comfortable level, and talking about it afterwards. Vocabulary grows through reading more than through any other activity.' },
          { q: 'How often should children practise?', a: 'A little most days works better than a long session once a week. Ten or fifteen minutes of reading or one short piece of writing is enough to keep progress steady.' },
          { q: 'Can a weak reader join tuition?', a: 'Yes. They start with phonics patterns alongside the textbook rather than instead of it, and catch up to the lesson as reading becomes fluent.' },
          { q: 'Does this cover my child’s board?', a: 'CBSE, ICSE and the Telangana State syllabus. Tell us the class and the textbook and we will confirm the batch before you commit to anything.' },
        ],
      },
    ],

    session: {
      eyebrow: 'Inside a session',
      title: 'What happens in an English tuition class?',
      lead: 'An example of how a session flows. Ask us for the current class structure and batch detail for your child’s class.',
      items: [
        { title: 'Warm-up', text: 'A quick, easy start that revisits words or a pattern from last time.' },
        { title: 'The lesson, ahead of school', text: 'The next prose or poetry chapter read aloud and explained — theme, character, language and the questions the exam asks on it.' },
        { title: 'New words', text: 'A small set of new vocabulary from the lesson, said out loud together and used in a sentence the same session.' },
        { title: 'Reading practice', text: 'Reading the new words, then the passage they came from, a little faster than last week.' },
        { title: 'Writing practice', text: 'Writing the same words by hand, then one answer or one format to the required length.' },
        { title: 'Speaking activity', text: 'Retelling the lesson or answering questions on it out loud, usually in pairs.' },
        { title: 'Grammar or exam skill', text: 'One pattern or one format — a tense, a notice skeleton, an unseen passage — practised on fresh examples.' },
        { title: 'Quick recap', text: 'A short review of what was learned and what to practise at home before the next class.' },
      ],
      note: 'Weekly written work is marked and returned with the breakdown, not just a total.',
    },

    activities: {
      eyebrow: 'Practice',
      title: 'English activities used in tuition',
      lead: 'The activity types used to keep practice varied — because a child who is engaged practises more, and practice is what moves the marks.',
      items: [
        'Reading the lesson aloud',
        'Word games',
        'Vocabulary from the text',
        'Role-play',
        'Retelling the lesson',
        'Short presentations',
        'Question-answer practice',
        'Format drills',
        'Editing and gap-fill sets',
        'Sentence building',
        'Timed past-paper sections',
        'Marking against the scheme',
      ],
    },

    whyUs: {
      eyebrow: 'Why us',
      title: 'Why choose Brolly Juniors for English tuition',
      lead: 'English sits alongside our other academic tuitions and skill programmes for children in Hyderabad.',
      cols: 4,
      items: [
        { icon: '📘', title: 'Ahead of school', text: 'Every lesson covered before the school test, so revision is revision and not first contact.' },
        { icon: '💡', title: 'Simple explanations', text: 'Everything is explained in words a child can repeat back in their own way.' },
        { icon: '🪜', title: 'Structured learning', text: 'Sounds, then words, then sentences, then the text, then the answer — always in that order.' },
        { icon: '🧑', title: 'Placed by ability', text: 'Class decides the textbook. What the child can already do decides where the language work starts.' },
        { icon: '✍️', title: 'Marked the board’s way', text: 'Weekly written work marked against the board pattern, with the breakdown shown.' },
        { icon: '🗣️', title: 'All four skills', text: 'Reading, writing, speaking and listening in every session, not one at a time.' },
        { icon: '💬', title: 'Parent communication', text: 'A monthly note on what was covered, what the last piece scored and what to work on.' },
        { icon: '🔎', title: 'Focus on understanding', text: 'A child who can only recite has not learned. Understanding comes first, then the exam technique.' },
      ],
      note: 'Experienced educators guide children through class-appropriate English work. Ask us who teaches the batch you are considering and we will tell you.',
    },

    practical: { ...PRACTICAL, feeTitle: 'English tuition fees' },

    trial: {
      title: 'Book a free English tuition trial',
      paras: [
        'Let your child sit in a real session. They read, write and answer alongside the batch, and we see where the marks are actually going.',
      ],
      includes: [
        'Your child tries a real lesson and a written piece',
        'We see what they can already read, write and answer',
        'You get a suggested starting point',
        'Options, timings and fees explained clearly',
        'No obligation to enrol afterwards',
      ],
    },

    homeGuide: {
      eyebrow: 'At home',
      title: 'How parents can support English at home',
      lead: 'Eight simple things that make a real difference between classes. None of them takes long.',
      cols: 4,
      items: [
        { title: 'Read together every day', text: 'Take turns reading a line each — from the textbook or anything else. Your child hears fluent reading and practises their own.' },
        { title: 'Talk about it afterwards', text: 'Two questions about what happened does more than another page of reading. That is comprehension practice.' },
        { title: 'Practise a few words daily', text: 'Five words from the lesson a day is plenty. Short and regular beats long and occasional.' },
        { title: 'Speak English at home where you can', text: 'Even one exchange a day counts as practice, whatever the accent.' },
        { title: 'Ask about new words', text: '“What new word did you learn today?” makes a child recall it, which is what fixes it.' },
        { title: 'Let them write for real reasons', text: 'A shopping list, a birthday card, a note. Real writing beats an exercise — and it is still format practice.' },
        { title: 'Do not correct every mistake', text: 'Let the sentence finish. A child corrected mid-sentence stops starting sentences.' },
        { title: 'Make it fun', text: 'Word games and rhymes work better than testing. A child who enjoys it will keep going.' },
      ],
    },

    local: {
      title: 'English tuition in Hyderabad',
      paras: [
        'English is the medium of instruction for most children in Hyderabad, which is exactly why weak English costs marks in every other subject too. Many children speak it comfortably and still write flatly, miss the format and lose inference questions they understood.',
        'That gap is what this class closes. A child who already speaks English usually moves quickly, because the vocabulary is familiar and only the structure, the format and the exam technique are new. A child whose reading is still slow takes a little longer, and that is fine too.',
      ],
      areas: AREAS,
      note: 'Tell us your child’s class, board and how comfortably they read and write English, and we will suggest where they should start.',
    },

    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for English tuition near you?',
      lead: 'Parents searching for English tuition near me usually want the same few things: a place that is easy to reach, a teacher who explains simply, and a class that follows their child’s textbook. The writing is the part worth checking carefully.',
      cols: 4,
      items: [
        { title: 'Your child’s board', text: 'CBSE, ICSE or State — the textbook, the formats and the marking pattern differ, and the batch should match.' },
        { title: 'Where the marks go', text: 'A fluent speaker who writes flatly needs something different from a slow reader who writes well.' },
        { title: 'Marked writing', text: 'Ask to see how written work is marked. A total alone tells a child nothing.' },
        { title: 'Ahead or behind', text: 'Ask whether the class covers lessons before school does, or catches up after.' },
      ],
    },

    relatedTitle: 'Related classes at Brolly Juniors',
    relatedLead: 'Language tuitions and programmes that sit alongside English tuition.',
    related: [
      { icon: '📖', title: 'English programme', text: 'Reading comprehension, grammar in context and writing a child is pleased with — for the language rather than the marks.', to: '/programs/english' },
      { icon: '💬', title: 'Spoken English', text: 'Conversation only — for a child who reads well but goes quiet when asked to talk.', to: '/programs/spoken-english' },
      { icon: '🔤', title: 'Phonics & early reading', text: 'The sound-by-sound route into reading, for ages 4 to 9.', to: '/junior-skills/phonics' },
      { icon: '🎤', title: 'Public speaking', text: 'From show-and-tell to a prepared presentation, one stage at a time.', to: '/junior-skills/public-speaking' },
      { icon: '🪔', title: 'Telugu tuition', text: 'Textbook coverage, vyakaranam and answer writing for the Telugu paper.', to: '/tuitions/telugu' },
      { icon: '📚', title: 'All academic tuitions', text: 'Maths, science, social studies and languages for Classes 4 to 10.', to: '/tuitions' },
    ],

    faqTitle: 'Frequently asked questions about English tuition in Hyderabad',
    faqs: [
      {
        q: 'What does English tuition at Brolly Juniors cover?',
        a: 'The prescribed literature, the grammar section, unseen comprehension and every writing format on the paper — letters, notices, reports, essays — with one written piece a week marked to the board’s scheme. Reading, writing, speaking and listening are practised in every session because the paper tests all four.',
      },
      {
        q: 'Which classes and boards are covered?',
        a: 'Classes 4 to 10 across CBSE, ICSE and the Telangana State syllabus. Batches are grouped by class so the textbook, the formats and the marking pattern match.',
      },
      {
        q: 'My child speaks English fluently but scores badly. Can tuition help?',
        a: 'This is the most common starting point. Fluent speakers lose marks in the writing section — format, length, structure — and on inference questions, none of which speaking teaches. Those are exactly what the class works on, and such children usually move quickly because the vocabulary is already there.',
      },
      {
        q: 'Can a weak reader join English tuition?',
        a: 'Yes. They start with the common phonics patterns alongside the textbook rather than instead of it, and catch up to the lesson as reading becomes fluent.',
      },
      {
        q: 'How is written work marked?',
        a: 'Against the board’s own pattern, with the mark breakdown shown — content, format, length and expression separately. Weekly written work is marked and returned, and past papers are written under time from Class 7 upward.',
      },
      {
        q: 'Is this the same as the English programme under Programmes?',
        a: 'No. This page is syllabus and exam work for Classes 4 to 10. The English programme builds comprehension, vocabulary and creative writing without following a textbook. If marks are not the immediate worry, that is the better fit. Many families take one, then the other.',
      },
      {
        q: 'Does the class prepare for the speaking and listening assessment?',
        a: 'Yes. Children speak in every session — reading aloud, question-answer and, from Class 8, short prepared presentations in the assessment format. Listening tasks are practised directly.',
      },
      {
        q: 'How much practice does my child need at home?',
        a: 'Ten to fifteen minutes on most days — a few lines read aloud and talked about, five words, one written sentence or short paragraph. Short and regular beats a long session once a week.',
      },
      {
        q: 'What is the English tuition fee in Hyderabad?',
        a: 'It depends on the class, the board and the batch format, so a single number would be misleading. Tell us your child’s class and we will send the current fee for exactly that. Nothing is payable before the free trial.',
      },
      {
        q: 'Where are the English tuition classes held?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre, near JNTU Metro Station. Ask us about current online availability.',
      },
    ],

    quickAnswersTitle: 'English tuition in Hyderabad: quick answers',
    quickAnswers: [
      {
        q: 'What is the best way for children to improve English marks?',
        a: 'Cover the lesson before school does, practise the writing formats until the skeleton is automatic, write one marked piece a week, and learn grammar as patterns that show up in the child’s own writing. Speaking English at home helps the vocabulary; it does not fix format or structure — tuition does.',
      },
      {
        q: 'How can children improve English reading?',
        a: 'By reading a little every day at a comfortable level, and talking about it afterwards. Vocabulary grows through reading more than through any other activity, and the unseen passage rewards exactly that.',
      },
      {
        q: 'Why do children lose marks in English?',
        a: 'Mostly in the writing section — format, length and structure — and on inference questions. Marking with the breakdown shown is what makes those losses visible and fixable.',
      },
      {
        q: 'What class can children start English tuition?',
        a: 'From Class 4. Older children start wherever their reading and writing sit; the textbook is decided by class and the language work by ability.',
      },
      {
        q: 'Are English tuition classes available near me?',
        a: 'Brolly Juniors runs English tuition from its centre at Nizampet X Roads, Hyderabad, with batches after school and at weekends. Tell us your locality and preferred timing and we will confirm what is open.',
      },
    ],
  },

  /* ======================================================================
   * HINDI
   * ==================================================================== */
  '/tuitions/hindi': {
    h1: 'Hindi tuition in Hyderabad for children whose second language became their weakest paper.',
    lead: 'Vyakaran taught as rules, textbook chapters covered ahead of school, and the writing formats where most Hindi marks are quietly lost — built on the reading, writing and speaking practice that a third language needs most.',
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 4–10 · CBSE, ICSE, State', 'Batches of eight'],
    heroSecondary: 'See how the year runs',
    hero: {
      title: 'Your child’s first Hindi word: क + ल + म',
      bullets: [
        'Three letters: क (ka), ल (la) and म (ma).',
        'Put them together and they can read कलम — kalam, which means pen.',
        'Then the matras — the vowel marks that turn क into का, कि, कु — one at a time, once the plain letters are secure.',
        'A child who cannot yet read Devanagari fluently starts here, whatever class they are in.',
      ],
      note: 'Fluent readers start at the textbook. Nothing assumes a Hindi-speaking home.',
    },
    facts: [CLASSES_FACT, BOARD_FACT, { strong: 'Weekly', span: 'Written practice' }, BATCH_FACT],

    method: {
      eyebrow: 'What shapes the tuition',
      title: 'For most Hyderabad students, Hindi is a third language',
      lead: 'Most children here hear Hindi on television and from friends but rarely speak it, and meet it formally only in a crowded school period with little time to talk. So vocabulary, reading and writing get more weight here than they would in a Hindi-medium programme.',
      bullets: [
        {
          term: 'Coverage ahead of school.',
          text: 'Every prescribed gadya and padya chapter explained — meaning, context and the expected answers — before the school test.',
        },
        {
          term: 'The four skills together.',
          text: 'Reading, writing, speaking and understanding are practised in every session, because a language that is only read is forgotten by the exam.',
        },
        {
          term: 'Vyakaran as rules that apply.',
          text: 'Sandhi, samas, kaarak and vaakya bhed are taught as patterns a child can use on an unseen example, not lists to recite.',
        },
        {
          term: 'Writing that is marked.',
          text: 'One written piece a week — a patra, an anuchhed, a samvaad — marked against the board pattern with the breakdown shown.',
        },
      ],
      panel: {
        title: 'The four skills',
        pills: [
          'Reading — letters, matras, words, chapters',
          'Writing — letter shapes, spelling, formats',
          'Speaking — reading aloud and question-answer',
          'Understanding — listening and comprehension',
        ],
        note: 'School Hindi asks for reading fluency, spelling and comprehension. These are the same skills practised here.',
      },
    },

    trust: {
      eyebrow: 'How it is taught',
      title: 'Six things Hindi tuition works on every week',
      lead: 'The textbook is the spine of the class. Everything else is what makes the textbook readable, writable and rememberable.',
      cols: 3,
      items: [
        { icon: '📘', title: 'Gadya & padya coverage', text: 'Prescribed prose and poetry explained with meaning, context and the answers the exam expects.' },
        { icon: '📖', title: 'Hindi reading', text: 'Letters, matras, words, sentences, then the chapter itself — read aloud until it is smooth.' },
        { icon: '✍️', title: 'Hindi writing', text: 'Letter formation, matras in the right place, spelling and every lekhan format on the paper.' },
        { icon: '🗣️', title: 'Speaking practice', text: 'Reading aloud, pronunciation and question-answer practice — the part a crowded school period never has time for.' },
        { icon: '🗂️', title: 'Vocabulary', text: 'New words from the prescribed texts grouped by theme, so they connect to daily life and stay learned.' },
        { icon: '🧩', title: 'Vyakaran', text: 'Nouns, verbs, gender, sandhi and samas taught through examples, then applied to unseen questions.' },
      ],
    },

    whatIs: {
      eyebrow: 'The basics',
      title: 'What is Hindi tuition for Classes 4 to 10?',
      lead: 'A class that follows the school syllabus and builds the language skills the syllabus quietly assumes a child already has — which, for a third-language student, it usually cannot.',
      paras: [
        'Hindi tuition covers the prescribed textbook chapter by chapter — gadya, padya and vyakaran — plus apathit gadyansh and the lekhan formats, ahead of the school schedule, so a child walks into each test already revised.',
        'That alone is not enough for most children in Hyderabad. A child who meets Hindi only at school reads Devanagari slowly, places matras uncertainly and freezes on a padya they cannot decode. Structured practice matters because the script has a large alphabet and a system of vowel marks on top of it: a few letters at a time, in a fixed order, with the matras introduced only once the plain letters are secure.',
        'Reading and writing are practised together. When a child writes a letter, their hand learns its shape — including the headline that joins Devanagari letters — and that makes the letter much easier to recognise the next time they read it. Doing only one of the two makes both slower, and slow reading is where exam time goes.',
        'Speaking matters most of all in a third language. A child who reads each chapter aloud, answers questions on it out loud and retells it in their own Hindi words remembers it in a way that silent reading never manages.',
      ],
      panels: [
        {
          title: 'Good news about Hindi',
          paras: [
            'Hindi is written as it sounds. Once a child knows the letters and the matras, they can read a word they have never seen before and say it correctly. That makes reading easier than in English, where spelling often surprises you.',
            'The two trickier parts are the matras and noun gender, and both are taught gradually, by ear and by example.',
          ],
        },
        {
          title: 'Tuition or the Hindi programme?',
          paras: [
            'This page is syllabus and exam work for Classes 4 to 10. If your child needs to learn to read and speak Hindi from the beginning, and school marks are not the issue, the Hindi programme under Programmes starts from the Devanagari letters and works towards fluency without following a textbook. Many families take one, then the other.',
          ],
        },
      ],
      answerRowsTitle: 'The same thing, three ways',
      answerRows: [
        {
          tag: 'Simple explanation',
          text: 'Hindi is written in the Devanagari script. Once a child knows the letters, they can read words. Once they can read words, they can read a chapter. Once they can read a chapter, they can answer questions on it. Tuition takes a child through those steps in order, one small piece at a time, and then practises the answering until it is automatic.',
        },
        {
          tag: 'Easy example',
          text: 'A child learns three letters: क, ल and म. Put them together and they can read कलम — kalam, which means pen. Three letters, one real word. A Class 6 chapter is the same thing, thousands of times over, at speed.',
        },
        {
          tag: 'At Brolly Juniors',
          text: 'The textbook is covered ahead of school, every written answer is marked the way the board marks it, and speaking is practised in every session rather than saved until the reading is finished — which is the part a crowded school period rarely has time for. Book a free trial and your child can try a session before you decide anything.',
        },
      ],
    },

    whyLearn: {
      eyebrow: 'For parents',
      title: 'Why Hindi tuition, and not just more homework?',
      lead: 'Most children in Hyderabad meet Hindi only at school, and the school period has no time to build the reading and vocabulary the textbook assumes. This class does.',
      cols: 3,
      items: [
        { title: 'Hindi reading practice', text: 'Regular reading turns slow letter-by-letter decoding into smooth reading. That change usually takes a few months of steady practice, and it is what frees up exam time.' },
        { title: 'Writing practice', text: 'Guided handwriting practice makes Devanagari letters neat and quick to write, with the matras in the right place — which is where most early spelling marks are lost.' },
        { title: 'Vocabulary building', text: 'More words means more a child can read and understand in the textbook. Words are taught in themes so they connect to daily life.' },
        { title: 'Speaking practice', text: 'Children get to actually use Hindi out loud, which a crowded school period rarely allows time for — and which is what makes the chapter stick.' },
        { title: 'Listening skills', text: 'Following spoken Hindi and understanding what was asked is a skill of its own, practised directly.' },
        { title: 'Better comprehension', text: 'Reading a passage and answering questions about it is different from reading it aloud. Both are practised — and apathit gadyansh is where third-language students gain the most ground fastest.' },
        { title: 'Grammar that transfers', text: 'A rule learned as a pattern can be applied to a question the child has never seen. A rule learned as a list cannot.' },
        { title: 'Support for school', text: 'School Hindi asks for reading fluency, spelling and comprehension. These are the same skills practised here, on the same textbook.' },
        { title: 'Language confidence', text: 'A child who can read the paper without hesitation stops feeling shut out of a language they hear around them every day.' },
      ],
      note: 'A note on expectations: how fast a child progresses depends on how often they practise and where they start. We do not promise particular marks or a fixed timeline — what we commit to is structured teaching and regular marked practice.',
    },

    benefits: {
      eyebrow: 'Benefits',
      title: 'What Hindi tuition builds',
      lead: 'Eight things children work on across the year, alongside the textbook.',
      cols: 4,
      items: [
        { icon: '📖', title: 'Reading fluency', text: 'From recognising single letters to reading a full chapter aloud without stumbling over a matra.' },
        { icon: '✍️', title: 'Writing skills', text: 'Correct letter shapes, the headline, matras in place, and full answers written unaided to the required length.' },
        { icon: '💬', title: 'Speaking practice', text: 'Reading aloud and answering questions out loud in every session, not saved for later.' },
        { icon: '🗂️', title: 'Vocabulary building', text: 'Words from the prescribed texts grouped by theme — family, food, nature — so they are easier to remember.' },
        { icon: '⚙️', title: 'Vyakaran', text: 'Nouns, verbs, gender, sandhi and samas taught through examples, then applied to unseen questions.' },
        { icon: '🔊', title: 'Pronunciation', text: 'Saying sounds clearly, including the aspirated and retroflex letters that are easy to mix up on paper.' },
        { icon: '👂', title: 'Listening skills', text: 'Following spoken Hindi and picking out what matters in what was said — the dictation and oral parts of the paper.' },
        { icon: '🔎', title: 'Comprehension', text: 'Reading a passage and answering questions about it in the child’s own words, within the mark weight.' },
      ],
    },

    topics: {
      eyebrow: 'Topics covered',
      title: 'What will children learn?',
      lead: 'Everything below is taught in order, with each step resting on the one before it. The textbook decides the sequence; these are the skills underneath it.',
      items: [
        'Devanagari alphabet',
        'Vowels and consonants',
        'Matras',
        'Letter recognition',
        'Word formation',
        'Vocabulary',
        'Reading',
        'Writing',
        'Spelling',
        'Vyakaran',
        'Gender',
        'Sandhi and samas',
        'Kaarak',
        'Muhavare',
        'Sentence formation',
        'Speaking',
        'Listening',
        'Apathit gadyansh',
        'Patra and anuchhed lekhan',
        'Past papers',
      ],
    },

    levels: {
      eyebrow: 'Where a child starts',
      title: 'Four starting points, decided by what the child can already do',
      lead: 'Class decides the textbook. What the child can already read and write decides where the language work begins — a Class 7 child who cannot read Devanagari fluently starts with reading, not with Class 7 answers.',
      badge: 'Start',
      items: [
        {
          title: 'Hindi basics',
          text: 'For a child who recognises few letters. Devanagari letters, vowels, consonants, sounds, letter recognition and simple words — run alongside the textbook, not instead of it.',
          example: 'Matching a letter card to the picture that starts with that sound, then finding that letter in the day’s chapter.',
          skill: 'Letter recognition and sound awareness.',
        },
        {
          title: 'Reading & writing',
          text: 'Letters become words. Word reading, writing practice, spelling, simple sentences and steady vocabulary from the prescribed texts. The matra vowel marks are introduced here.',
          example: 'Reading a word card from the chapter aloud, then writing it from memory with the matras in place.',
          skill: 'Reading fluency and correct spelling.',
        },
        {
          title: 'Language skills',
          text: 'Vyakaran basics, sentence formation, reading comprehension, speaking practice and listening activities. The four skills start working together on the textbook.',
          example: 'Reading a short paragraph from the chapter, then answering three questions about it in writing.',
          skill: 'Comprehension and sentence building.',
        },
        {
          title: 'Exam practice',
          text: 'Longer passages, apathit gadyansh, the lekhan formats, answer writing by mark weight, grammar applied in real answers, and past papers under time.',
          example: 'Writing a full patra to the board format, then marking it against the scheme with the educator.',
          skill: 'Independent answer writing under time.',
        },
      ],
      note: 'A learning structure rather than a school-board syllabus. Ask us where your child would start — the trial class is how we find out.',
    },

    ageBands: {
      eyebrow: 'By class',
      title: 'Hindi tuition by class',
      lead: 'What the emphasis is at each stage. The textbook changes every year; the skills build on each other.',
      cols: 4,
      items: [
        { kv: 'Classes 4–5', title: 'Letters & matras', chips: ['Letter fluency', 'Matras', 'Word reading', 'Spelling', 'Short answers'] },
        { kv: 'Classes 6–7', title: 'Chapters & grammar', chips: ['Chapter coverage', 'Gender and number', 'Vocabulary', 'Comprehension', 'Paragraph answers'] },
        { kv: 'Class 8', title: 'Writing formats', chips: ['Sandhi and samas', 'Patra lekhan', 'Anuchhed', 'Apathit gadyansh', 'Muhavare'] },
        { kv: 'Classes 9–10', title: 'Board preparation', chips: ['Full syllabus', 'Answer length by marks', 'Past papers', 'Timed writing', 'Presentation'] },
      ],
      note: 'Not sure where your child fits? A free trial is the quickest way to find out. We see what your child can already read, write and answer, and suggest a starting point.',
    },

    extras: [
      {
        id: 'reading',
        kind: 'split',
        band: true,
        eyebrow: 'Skill one',
        title: 'Hindi reading',
        lead: 'Reading is built in stages. A child never jumps from letters straight to a Class 8 chapter — each stage is practised until it feels easy.',
        paras: [
          'The good news is that Hindi is written as it sounds. Once a child knows the letters and the matras, they can read a word they have never seen before. That is why letter recognition gets so much attention early on, even with older children.',
          'The matras are introduced once the plain letters are secure, because meeting them too early is what makes Devanagari feel hard. Then comprehension is added once a child reads sentences comfortably — reading the words is one skill; understanding what they mean is another, and the exam tests the second one.',
          'Reading speed is the hidden exam skill. A child who reads the question paper slowly has less time to write. Regular short readings, a little faster each week, are what move it.',
        ],
        panel: {
          title: 'How reading is built',
          bullets: [
            'Letter recognition — naming any letter quickly and correctly.',
            'Matras — reading का, कि, कु as one sound, not two symbols.',
            'Word reading — reading whole words rather than sounding out each letter.',
            'Sentence reading — reading a full sentence smoothly, with the right pauses.',
            'Chapter reading — a full textbook chapter read from start to finish, alone.',
            'Comprehension — answering questions about what was just read.',
          ],
        },
      },
      {
        id: 'writing',
        kind: 'cards',
        cols: 4,
        eyebrow: 'Skill two',
        title: 'Hindi writing',
        lead: 'Writing is practised alongside reading, because forming a letter by hand is what makes it easy to recognise later — and because the exam is written.',
        items: [
          { title: 'Letter formation', text: 'The correct order of strokes, including the headline that joins Devanagari letters.' },
          { title: 'Handwriting practice', text: 'Regular short practice so letters become consistent in size and shape. Presentation carries marks.' },
          { title: 'Matras', text: 'Adding vowel marks in the right place, which is where most early spelling errors — and marks — come from.' },
          { title: 'Word and sentence writing', text: 'Writing whole words correctly, then putting them in the right Hindi order to make a complete sentence.' },
          { title: 'Spelling', text: 'Writing a word from memory, which is harder than copying and what the exam asks for.' },
          { title: 'Answer writing', text: 'Structure, length and presentation for each mark weight — two-mark, five-mark, ten-mark.' },
          { title: 'Lekhan formats', text: 'Patra, anuchhed, samvaad and suchna drilled to their skeletons, so the whole of a child’s thinking goes into the content.' },
          { title: 'Neatness and speed', text: 'Both matter in a timed paper, and both come from steady practice rather than pressure.' },
        ],
      },
      {
        id: 'speaking',
        kind: 'answers',
        band: true,
        cols: 3,
        eyebrow: 'Skill three',
        title: 'Hindi speaking',
        lead: 'Children speak Hindi in every session — reading aloud, answering questions and retelling the chapter. These are the kind of everyday exchanges they practise; the romanisation is there so you can say them at home too.',
        items: [
          { q: 'आपका नाम क्या है? — aapka naam kya hai? (What is your name?)', a: 'मेरा नाम राहुल है। — My name is Rahul.' },
          { q: 'आपको क्या पसंद है? — aapko kya pasand hai? (What do you like?)', a: 'मुझे पढ़ना पसंद है। — I like reading.' },
          { q: 'आप कैसे हैं? — aap kaise hain? (How are you?)', a: 'मैं ठीक हूँ। — I am fine.' },
          { q: 'तुम्हारी उम्र कितनी है? — tumhaari umar kitni hai? (How old are you?)', a: 'मैं आठ साल का हूँ। — I am eight years old.' },
          { q: 'आप कहाँ रहते हैं? — aap kahaan rehte hain? (Where do you live?)', a: 'मैं हैदराबाद में रहता हूँ। — I live in Hyderabad.' },
          { q: 'नमस्ते! — namaste! (Hello, greetings.)', a: 'धन्यवाद। — Thank you.' },
        ],
        note: 'Pronunciation is corrected gently the moment it slips rather than later. Children take turns asking and answering, and retell each chapter in their own Hindi words — the hardest and most useful speaking task, and the one that fixes it in memory for the exam.',
      },
      {
        id: 'grammar',
        kind: 'cards',
        cols: 3,
        eyebrow: 'Vyakaran made simple',
        title: 'Hindi grammar for the paper',
        lead: 'Grammar is taught through examples, not rules to memorise. Here is what children learn first, and what each part looks like — the sandhi, samas and kaarak questions build on exactly this.',
        items: [
          { title: 'Nouns', text: 'A noun is a naming word — a person, animal, place or thing.', eg: 'माँ (maa — mother) · बिल्ली (billi — cat) · स्कूल (school)' },
          { title: 'Pronouns', text: 'A pronoun stands in for a name, so you do not repeat it every time.', eg: 'मैं (main — I) · तुम (tum — you) · वह (vah — he or she) · हम (hum — we)' },
          { title: 'Verbs', text: 'A verb is a doing word. It tells you what is happening.', eg: 'खाना (khaana — to eat) · पढ़ना (padhna — to read) · खेलना (khelna — to play)' },
          { title: 'Sentence order', text: 'In Hindi the verb comes last. English says “I eat rice”; Hindi says “I rice eat”.', eg: 'मैं चावल खाता हूँ। (main chaawal khaata hoon — I eat rice.)' },
          { title: 'Singular and plural', text: 'Most Hindi words change their ending to show there is more than one.', eg: 'किताब → किताबें (book → books) · लड़का → लड़के (boy → boys)' },
          { title: 'Gender', text: 'Every Hindi noun is masculine or feminine, and the verb changes to match. Children learn this by ear, through examples — it is the rule third-language students lose most marks on.', eg: 'लड़का खाता है। (the boy eats) · लड़की खाती है। (the girl eats)' },
        ],
        note: 'From Class 6 the same approach carries into sandhi, samas, upsarg-pratyay, kaarak and vaakya bhed: the rule shown on three examples, then applied to a fourth the child has never seen.',
      },
      {
        id: 'exam',
        kind: 'cards',
        band: true,
        cols: 3,
        eyebrow: 'The paper',
        title: 'Marked the way the board marks it',
        lead: 'Every written submission is marked against the board’s own pattern, with the mark breakdown shown. A child who has only ever seen a total does not know that four of their lost marks were matras and two were format.',
        items: [
          { icon: '📏', title: 'Answer length by mark weight', text: 'A two-mark answer and a five-mark answer are different shapes. Children learn each shape until it is automatic.' },
          { icon: '🔎', title: 'Apathit gadyansh', text: 'Locating the answer in the passage, inference questions in Hindi, and answering in the expected length — where third-language students gain the most ground fastest.' },
          { icon: '✉️', title: 'Lekhan formats', text: 'Patra, anuchhed, samvaad and suchna skeletons drilled so the heading, opening and close are never where marks are lost.' },
          { icon: '📜', title: 'Padya with bhaav', text: 'Verse read with meaning, so the bhaav question is answered from understanding rather than recall.' },
          { icon: '⏱️', title: 'Past papers under time', text: 'From Class 7 upward, full papers written in the time allowed, then marked with the breakdown.' },
          { icon: '📝', title: 'A monthly note home', text: 'What was covered, what the last piece scored, and the one thing to work on before the next.' },
        ],
      },
      {
        id: 'parent-qa',
        kind: 'answers',
        cols: 3,
        eyebrow: 'Parent guide',
        title: 'Questions parents ask us',
        lead: 'Six short answers to the things that come up most in a first phone call.',
        items: [
          { q: 'Is Hindi difficult for children?', a: 'Not especially. Hindi is written as it sounds, so reading is easier than in English once the letters are known. The two trickier parts are the matras and noun gender, and both are taught gradually.' },
          { q: 'Nobody speaks Hindi at home. Can my child still do well?', a: 'Yes — that is the usual starting point in Hyderabad, and the class is built for it. Nothing assumes a Hindi-speaking home; vocabulary and speaking get extra weight for exactly this reason.' },
          { q: 'How can children improve Hindi reading?', a: 'By reading a little every day at a level that is comfortable. Reading something slightly too hard slows a child down; reading something easy builds speed and confidence.' },
          { q: 'How often should children practise?', a: 'A little most days works better than a long session once a week. Ten or fifteen minutes of reading or writing is enough to keep progress steady between classes.' },
          { q: 'Can a child who cannot read Devanagari join?', a: 'Yes. They start from the vowels alongside the textbook, a few letters at a time, and catch up to the chapter as reading becomes fluent.' },
          { q: 'Does this cover my child’s board?', a: 'CBSE, ICSE and the Telangana State syllabus. Tell us the class and the textbook and we will confirm the batch before you commit to anything.' },
        ],
      },
    ],

    session: {
      eyebrow: 'Inside a session',
      title: 'What happens in a Hindi tuition class?',
      lead: 'An example of how a session flows. Ask us for the current class structure and batch detail for your child’s class.',
      items: [
        { title: 'Warm-up', text: 'A quick, easy start that revisits words or a rule from last time.' },
        { title: 'The chapter, ahead of school', text: 'The next gadya or padya chapter read aloud and explained — meaning, context and the questions the exam asks on it.' },
        { title: 'New Hindi words', text: 'A small set of new words from the chapter, said out loud together and connected to something the child already knows.' },
        { title: 'Reading practice', text: 'Reading the new words, then the passage they came from, a little faster than last week.' },
        { title: 'Writing practice', text: 'Writing the same words by hand with the matras in place, then one answer to the required length.' },
        { title: 'Speaking activity', text: 'Retelling the chapter or answering questions on it out loud, usually in pairs.' },
        { title: 'Grammar or exam skill', text: 'One rule or one format — a sandhi, a patra skeleton, an apathit gadyansh — practised on fresh examples.' },
        { title: 'Quick recap', text: 'A short review of what was learned and what to practise at home before the next class.' },
      ],
      note: 'Weekly written work is marked and returned with the breakdown, not just a total.',
    },

    activities: {
      eyebrow: 'Practice',
      title: 'Hindi activities used in tuition',
      lead: 'The activity types used to keep practice varied — because a child who is engaged practises more, and practice is what moves the marks.',
      items: [
        'Reading the chapter aloud',
        'Hindi word games',
        'Picture-to-word matching',
        'Matra drills',
        'Vocabulary from the text',
        'Retelling the chapter',
        'Question-answer practice',
        'Answer-writing drills',
        'Sandhi and samas sets',
        'Sentence building',
        'Timed past-paper sections',
        'Marking against the scheme',
      ],
    },

    whyUs: {
      eyebrow: 'Why us',
      title: 'Why choose Brolly Juniors for Hindi tuition',
      lead: 'Hindi sits alongside our other academic tuitions and skill programmes for children in Hyderabad.',
      cols: 4,
      items: [
        { icon: '📘', title: 'Ahead of school', text: 'Every chapter covered before the school test, so revision is revision and not first contact.' },
        { icon: '💡', title: 'Simple explanations', text: 'Everything is explained in words a child can repeat back in their own way.' },
        { icon: '🪜', title: 'Structured learning', text: 'Letters, then matras, then words, then the chapter, then the answer — always in that order.' },
        { icon: '🧑', title: 'Placed by ability', text: 'Class decides the textbook. What the child can already do decides where the language work starts.' },
        { icon: '✍️', title: 'Marked the board’s way', text: 'Weekly written work marked against the board pattern, with the breakdown shown.' },
        { icon: '🗣️', title: 'Speaking every session', text: 'The part school Hindi rarely has time for is the part practised most here.' },
        { icon: '💬', title: 'Parent communication', text: 'A monthly note on what was covered, what the last piece scored and what to work on.' },
        { icon: '🔎', title: 'Focus on understanding', text: 'A child who can only recite has not learned. Understanding comes first, then the exam technique.' },
      ],
      note: 'Experienced educators guide children through class-appropriate Hindi work. Ask us who teaches the batch you are considering and we will tell you.',
    },

    practical: { ...PRACTICAL, feeTitle: 'Hindi tuition fees' },

    trial: {
      title: 'Book a free Hindi tuition trial',
      paras: [
        'Let your child sit in a real session. They read, write and answer alongside the batch, and we see where the marks are actually going.',
      ],
      includes: [
        'Your child tries a real chapter and a written answer',
        'We see what they can already read, write and answer',
        'You get a suggested starting point',
        'Options, timings and fees explained clearly',
        'No obligation to enrol afterwards',
      ],
    },

    homeGuide: {
      eyebrow: 'At home',
      title: 'How parents can support Hindi at home',
      lead: 'Eight simple things that make a real difference between classes — even in a home where nobody speaks Hindi. None of them takes long.',
      cols: 4,
      items: [
        { title: 'Read the chapter together', text: 'Take turns reading a line each from the textbook. Your child hears reading and practises their own, whatever your own Hindi is like.' },
        { title: 'Practise a few words daily', text: 'Five words from the chapter a day is plenty. Short and regular beats long and occasional.' },
        { title: 'Ask a question in Hindi', text: 'One exchange at dinner counts as practice, whatever answer comes back.' },
        { title: 'Read the Hindi around you', text: 'Signboards, packets, television captions. Real Hindi in the world is good reading practice.' },
        { title: 'Ask for the story back', text: 'Ask your child to tell you what happened in the chapter, in Hindi, in their own words.' },
        { title: 'Practise writing', text: 'A few letters or one sentence a day keeps handwriting and matras steady between classes.' },
        { title: 'Ask about new words', text: '“What new word did you learn today?” makes a child recall it, which is what fixes it.' },
        { title: 'Make it fun', text: 'Word games and rhymes work better than testing. A child who enjoys it will keep going.' },
      ],
    },

    local: {
      title: 'Hindi tuition in Hyderabad',
      paras: [
        'Most children in Hyderabad hear Hindi on television and from friends but rarely speak it, and meet it formally only in a crowded school period with little time to talk. For many it is a third language after Telugu and English, and the marks show it.',
        'That is a specific starting point, and this class is built for it: nothing assumes a Hindi-speaking home. A child who already understands spoken Hindi usually moves quickly, because only the script, the spelling and the answer technique are new. A child starting from fewer letters takes a little longer, and that is fine too.',
      ],
      areas: AREAS,
      note: 'Tell us your child’s class, board and how comfortably they read Devanagari, and we will suggest where they should start.',
    },

    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Hindi tuition near you?',
      lead: 'Parents searching for Hindi tuition near me usually want the same few things: a place that is easy to reach, a teacher who explains simply, and a class that follows their child’s textbook. The starting level is the part worth checking carefully.',
      cols: 4,
      items: [
        { title: 'Your child’s board', text: 'CBSE, ICSE or State — the textbook and the marking pattern differ, and the batch should match.' },
        { title: 'Third-language friendly', text: 'Ask whether the class assumes Hindi at home. In Hyderabad it usually should not.' },
        { title: 'Marked writing', text: 'Ask to see how written work is marked. A total alone tells a child nothing.' },
        { title: 'Ahead or behind', text: 'Ask whether the class covers chapters before school does, or catches up after.' },
      ],
    },

    relatedTitle: 'Related classes at Brolly Juniors',
    relatedLead: 'Language tuitions and programmes that sit alongside Hindi tuition.',
    related: [
      { icon: '🇮🇳', title: 'Hindi programme', text: 'Devanagari, reading, writing and everyday conversation from the beginning — for the language rather than the marks.', to: '/programs/hindi' },
      { icon: '🪔', title: 'Telugu tuition', text: 'Textbook coverage, vyakaranam and answer writing for the Telugu paper.', to: '/tuitions/telugu' },
      { icon: '📖', title: 'English tuition', text: 'Literature, grammar and every writing format, marked to the board’s scheme.', to: '/tuitions/english' },
      { icon: '🌏', title: 'Foreign languages', text: 'Beginner courses in French, German, Spanish and Japanese.', to: '/programs/foreign-languages' },
      { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a conversation well.', to: '/programs/communication-skills' },
      { icon: '📚', title: 'All academic tuitions', text: 'Maths, science, social studies and languages for Classes 4 to 10.', to: '/tuitions' },
    ],

    faqTitle: 'Frequently asked questions about Hindi tuition in Hyderabad',
    faqs: [
      {
        q: 'What does Hindi tuition at Brolly Juniors cover?',
        a: 'The prescribed gadya and padya chapters, vyakaran, apathit gadyansh and the lekhan formats — patra, anuchhed, samvaad, suchna — with one written piece a week marked to the board’s scheme. Reading, writing and speaking are practised in every session because a third language that is only read is forgotten by the exam.',
      },
      {
        q: 'Which classes and boards are covered?',
        a: 'Classes 4 to 10 across CBSE, ICSE and the Telangana State syllabus. Batches are grouped by class so the textbook and the marking pattern match.',
      },
      {
        q: 'Nobody speaks Hindi at home. Can tuition still help?',
        a: 'Yes — that is the usual starting point in Hyderabad, and the class is built for it. Nothing assumes a Hindi-speaking home. Vocabulary, reading and speaking get more weight here than they would in a Hindi-medium programme, for exactly this reason.',
      },
      {
        q: 'Can a child who cannot read Devanagari join tuition?',
        a: 'Yes. They start from the vowels alongside the textbook rather than instead of it, a few letters at a time with the matras introduced once the plain letters are secure, and catch up to the chapter as reading becomes fluent.',
      },
      {
        q: 'What are matras, and why do children lose marks on them?',
        a: 'The vowel marks that change a consonant’s sound — का, कि, कु. A matra in the wrong place is a spelling error, and spelling errors are where most early Hindi marks go. They are practised from memory every week, not by copying.',
      },
      {
        q: 'How is written work marked?',
        a: 'Against the board’s own pattern, with the mark breakdown shown — content, spelling, format and presentation separately. Weekly written work is marked and returned, and past papers are written under time from Class 7 upward.',
      },
      {
        q: 'Is this the same as the Hindi programme under Programmes?',
        a: 'No. This page is syllabus and exam work for Classes 4 to 10. The Hindi programme starts from the Devanagari letters and builds reading, writing and conversation without following a textbook. If marks are not the issue, that is the better fit. Many families take one, then the other.',
      },
      {
        q: 'How much practice does my child need at home?',
        a: 'Ten to fifteen minutes on most days — a few lines of the chapter read aloud, five words, one written sentence with the matras checked. Short and regular beats a long session once a week.',
      },
      {
        q: 'What is the Hindi tuition fee in Hyderabad?',
        a: 'It depends on the class, the board and the batch format, so a single number would be misleading. Tell us your child’s class and we will send the current fee for exactly that. Nothing is payable before the free trial.',
      },
      {
        q: 'Where are the Hindi tuition classes held?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre, near JNTU Metro Station. Ask us about current online availability.',
      },
    ],

    quickAnswersTitle: 'Hindi tuition in Hyderabad: quick answers',
    quickAnswers: [
      {
        q: 'What is the best way for children to improve Hindi marks?',
        a: 'Cover the chapter before school does, read it aloud until it is fluent, write one marked piece a week with the matras checked, and learn vyakaran as rules that apply to unseen examples. For a third-language student, speaking in every session is what makes the vocabulary stay.',
      },
      {
        q: 'How can children improve Hindi reading?',
        a: 'By reading a little every day at a comfortable level. Letter recognition should be quick and automatic first, then the matras, because everything else — including exam time — depends on them.',
      },
      {
        q: 'Why do children lose marks in Hindi?',
        a: 'Usually matras, gender agreement, format and answer length rather than understanding. Marking with the breakdown shown is what makes those losses visible and fixable.',
      },
      {
        q: 'What class can children start Hindi tuition?',
        a: 'From Class 4. Older children start wherever their reading and writing sit; the textbook is decided by class and the language work by ability.',
      },
      {
        q: 'Are Hindi tuition classes available near me?',
        a: 'Brolly Juniors runs Hindi tuition from its centre at Nizampet X Roads, Hyderabad, with batches after school and at weekends. Tell us your locality and preferred timing and we will confirm what is open.',
      },
    ],
  },
};
