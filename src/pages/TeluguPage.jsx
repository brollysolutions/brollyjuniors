import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { teluguVocab } from '../data/languageVocab.js';
import {
  SectionHead,
  QuickAnswer,
  Curriculum,
  Pillars,
  FaqList,
  QuickAnswers,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { NumberedRows, PhraseCards, VocabTabs } from '../components/ProgramBits.jsx';

/* The Telugu programme page.
 *
 * Ported from the standalone telugu-classes-for-kids-in-hyderabad build. The
 * route, the SEO record, the four-level curriculum and the FAQ set stay in
 * data/catalog/programmes.js; this component supplies the body.
 *
 * Handled rather than transcribed:
 *
 *   - Every Telugu word, its romanisation and its meaning came across by
 *     script rather than by hand, into data/languageVocab.js. Retyping a
 *     hundred words in a script the author cannot proofread is how a language
 *     page ends up teaching a spelling mistake.
 *   - Contact details come from data/site.js; the placeholder demo form is
 *     replaced by the real booking form.
 *   - The source's "contact us" answers on timings, modes and fees stay as
 *     written, because those genuinely are not published.
 *
 * Telugu text is marked lang="te" wherever it appears, so a browser picks a
 * font that can draw the script and a screen reader reads it as Telugu rather
 * than spelling it out in English.
 */

const TRUST = [
  { title: 'Telugu reading', text: 'Letters, then words, then sentences, then simple stories.' },
  { title: 'Telugu writing', text: 'Letter formation, handwriting, spelling and sentence writing.' },
  { title: 'Speaking practice', text: 'Everyday conversation, pronunciation and question-answer practice.' },
  { title: 'Vocabulary', text: 'New words grouped by theme, so they connect to daily life.' },
  { title: 'Grammar', text: 'Nouns, verbs and sentence building, taught through examples.' },
];

const FOUR_SKILLS = [
  'Reading — letters, words, sentences, stories',
  'Writing — letter shapes, spelling, sentences',
  'Speaking — conversation and pronunciation',
  'Understanding — listening and comprehension',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Telugu has its own letters. Once a child knows the letters, they can read words. Once they can read words, they can read sentences and stories. Classes take a child through those steps in order, one small piece at a time.',
  },
  {
    tag: 'Easy example',
    text: 'A child learns the letter అ and the letter మ. Put them together and they can read అమ్మ — amma, which means mother. Two letters, one real word.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Script and speech are taught together from the first session, because a child who can read but not speak stops using the language the moment class ends. Book a free trial and your child can try a session before you decide anything.',
  },
];

const WHY_LEARN = [
  {
    title: 'Reading practice',
    text: 'Regular reading turns slow letter-by-letter decoding into smooth reading. That change usually takes a few months of steady practice.',
  },
  {
    title: 'Writing practice',
    text: 'Guided handwriting practice makes letters neat and quick to write, which matters for school work.',
  },
  {
    title: 'Vocabulary',
    text: 'More words means more a child can say and understand. Words are taught in themes so they connect to daily life.',
  },
  {
    title: 'Better communication',
    text: 'Children speak more confidently with grandparents, relatives and neighbours when the words come easily.',
  },
  {
    title: 'Understanding stories',
    text: 'Telugu stories and poems open up once a child can read them alone rather than being read to.',
  },
  {
    title: 'Comprehension',
    text: 'Reading a passage and answering questions about it is a skill of its own, and it is practised directly.',
  },
  {
    title: 'Language confidence',
    text: 'A child who can read a signboard or a storybook stops feeling shut out of a language they hear every day.',
  },
  {
    title: 'Support for school',
    text: 'School Telugu asks for reading fluency, spelling and comprehension. These are the same skills practised here.',
  },
  {
    title: 'A link to family',
    text: 'For many families, Telugu is how grandparents talk. Reading and writing it keeps that connection whole.',
  },
];

const BUILDS = [
  { icon: '📖', title: 'Reading skills', text: 'From recognising single letters to reading a short story without help.' },
  { icon: '✍️', title: 'Writing skills', text: 'Correct letter shapes, neat handwriting, and writing full sentences unaided.' },
  { icon: '💬', title: 'Speaking practice', text: 'Everyday conversation practised out loud in every session, not saved for later.' },
  { icon: '🗂️', title: 'Vocabulary building', text: 'New words grouped by theme — family, food, animals — so they are easier to remember.' },
  { icon: '⚙️', title: 'Grammar basics', text: 'Nouns, verbs and sentence order, taught through examples rather than rules.' },
  { icon: '🔊', title: 'Pronunciation', text: 'Saying sounds clearly, including the ones that are easy to mix up.' },
  { icon: '👂', title: 'Listening skills', text: 'Following spoken Telugu and picking out what matters in what was said.' },
  { icon: '🔎', title: 'Comprehension', text: 'Reading a passage and answering questions about it in the child’s own words.' },
];

const TOPICS = [
  'Telugu alphabet',
  'Vowels',
  'Consonants',
  'Letter recognition',
  'Word formation',
  'Vocabulary',
  'Reading',
  'Writing',
  'Spelling',
  'Grammar',
  'Sentence formation',
  'Speaking',
  'Listening',
  'Comprehension',
  'Storytelling',
  'Poems and rhymes',
  'Conversation practice',
  'Pronunciation',
];

/* The source's four learning levels. The stage track above carries the four
   published levels; these show what a session at each level looks like. */
const LEVELS = [
  {
    title: 'Telugu basics',
    text: 'The starting point for every child, whether or not they speak Telugu at home. Telugu letters, vowels, basic sounds, letter recognition and simple words.',
    example: 'Matching a letter card to the picture that starts with that sound.',
    skill: 'Letter recognition and sound awareness.',
  },
  {
    title: 'Reading & writing',
    text: 'Letters become words. Word reading, writing practice, spelling, simple sentences and steady vocabulary building.',
    example: 'Reading a word card aloud, then writing it from memory.',
    skill: 'Reading fluency and correct spelling.',
  },
  {
    title: 'Language skills',
    text: 'Grammar basics, sentence formation, reading comprehension, speaking practice and listening activities. The four skills start working together.',
    example: 'Reading a short paragraph, then answering three questions about it.',
    skill: 'Comprehension and sentence building.',
  },
  {
    title: 'Advanced practice',
    text: 'Longer passages, story reading, creative writing, conversation, grammar applied in real writing, and comprehension activities.',
    example: 'Writing a short story in Telugu and reading it aloud to the group.',
    skill: 'Independent reading and writing.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 4–6',
    title: 'Letters & sounds',
    chips: ['Telugu letters', 'Sounds', 'Simple words', 'Rhymes', 'Language games'],
  },
  {
    kv: 'Ages 7–9',
    title: 'Reading & writing',
    chips: ['Reading', 'Writing', 'Vocabulary', 'Simple sentences', 'Stories'],
  },
  {
    kv: 'Ages 10–12',
    title: 'Grammar & comprehension',
    chips: ['Grammar', 'Reading comprehension', 'Writing', 'Speaking', 'Vocabulary'],
  },
  {
    kv: 'Ages 13+',
    title: 'Advanced & school focus',
    chips: ['Advanced grammar', 'Comprehension', 'Writing', 'Communication', 'School practice'],
  },
];

const READING_STAGES = [
  { title: 'Letter recognition', text: 'Naming any letter quickly and correctly.' },
  { title: 'Word reading', text: 'Reading whole words rather than sounding out each letter.' },
  { title: 'Sentence reading', text: 'Reading a full sentence smoothly, with the right pauses.' },
  { title: 'Reading practice', text: 'Regular short readings that build speed and confidence.' },
  { title: 'Story reading', text: 'A short Telugu story read from start to finish, alone.' },
  { title: 'Comprehension', text: 'Answering questions about what was just read.' },
];

const WRITING = [
  { title: 'Letter formation', text: 'Learning the correct order of strokes, which makes writing quicker and neater.' },
  { title: 'Handwriting practice', text: 'Regular short practice so letters become consistent in size and shape.' },
  { title: 'Word writing', text: 'Writing whole words correctly, joining what a child already knows.' },
  { title: 'Sentence writing', text: 'Putting words in the right Telugu order to make a complete sentence.' },
  { title: 'Spelling', text: 'Writing a word from memory, which is harder than copying and more useful.' },
  { title: 'Guided writing', text: 'Writing to a prompt with help available while the child works.' },
  { title: 'Creative writing', text: 'Writing a few sentences of their own — a short story or a description.' },
  { title: 'Neatness and speed', text: 'Both matter for school work, and both come from steady practice rather than pressure.' },
];

const PHRASES = [
  {
    ask: 'నీ పేరు ఏమిటి?',
    roman: 'nee peru emiti?',
    askEnglish: 'What is your name?',
    reply: 'నా పేరు రవి.',
    replyEnglish: 'My name is Ravi.',
  },
  {
    ask: 'మీకు ఏమి ఇష్టం?',
    roman: 'meeku emi ishtam?',
    askEnglish: 'What do you like?',
    reply: 'నాకు పాలు ఇష్టం.',
    replyEnglish: 'I like milk.',
  },
  {
    ask: 'నువ్వు ఎలా ఉన్నావు?',
    roman: 'nuvvu elaa unnaavu?',
    askEnglish: 'How are you?',
    reply: 'నేను బాగున్నాను.',
    replyEnglish: 'I am fine.',
  },
  {
    ask: 'నీకు ఎన్ని సంవత్సరాలు?',
    roman: 'neeku enni samvatsaraalu?',
    askEnglish: 'How old are you?',
    reply: 'నాకు ఎనిమిది సంవత్సరాలు.',
    replyEnglish: 'I am eight years old.',
  },
  {
    ask: 'నీ బడి పేరు ఏమిటి?',
    roman: 'nee badi peru emiti?',
    askEnglish: 'What is the name of your school?',
    reply: 'నా బడి పేరు…',
    replyEnglish: 'The name of my school is…',
  },
  {
    ask: 'నమస్కారం!',
    roman: 'namaskaaram!',
    askEnglish: 'Hello, greetings.',
    reply: 'ధన్యవాదాలు.',
    replyEnglish: 'Thank you.',
  },
];

const GRAMMAR = [
  {
    title: 'Nouns',
    text: 'A noun is a naming word — a person, animal, place or thing.',
    eg: 'అమ్మ (amma — mother) · పిల్లి (pilli — cat) · బడి (badi — school)',
  },
  {
    title: 'Pronouns',
    text: 'A pronoun stands in for a name, so you do not repeat it every time.',
    eg: 'నేను (nenu — I) · నువ్వు (nuvvu — you) · అతను (athanu — he) · ఆమె (aame — she)',
  },
  {
    title: 'Verbs',
    text: 'A verb is a doing word. It tells you what is happening.',
    eg: 'తినడం (tinadam — eating) · చదవడం (chadavadam — reading) · ఆడటం (aadatam — playing)',
  },
  {
    title: 'Sentence order',
    text: 'In Telugu the verb comes last. English says “I eat rice”; Telugu says “I rice eat”.',
    eg: 'నేను అన్నం తింటాను. (nenu annam tintaanu — I eat rice.)',
  },
  {
    title: 'Singular and plural',
    text: 'Most Telugu words change their ending to show there is more than one.',
    eg: 'పుస్తకం → పుస్తకాలు (book → books) · చెట్టు → చెట్లు (tree → trees)',
  },
  {
    title: 'Asking questions',
    text: 'Question words come inside the sentence rather than always at the start.',
    eg: 'ఇది ఏమిటి? (idi emiti? — What is this?) · ఎక్కడ? (ekkada? — where?)',
  },
];

const SESSION_FLOW = [
  { title: 'Warm-up', text: 'A quick, easy start that revisits letters or words from last time.' },
  { title: 'New Telugu words', text: 'A small set of new words, taught with pictures and said out loud together.' },
  { title: 'Reading practice', text: 'Reading the new words, then a sentence or two using them.' },
  { title: 'Writing practice', text: 'Writing the same words by hand, which fixes the letter shapes in memory.' },
  { title: 'Speaking activity', text: 'Using the new words in a short conversation, usually in pairs.' },
  { title: 'Story or game', text: 'A Telugu story, poem or word game that uses everything from the session.' },
  { title: 'Quick recap', text: 'A short review of what was learned and what to practise at home.' },
];

const ACTIVITIES = [
  'Telugu word games',
  'Reading stories',
  'Picture-to-word matching',
  'Vocabulary games',
  'Storytelling',
  'Telugu poems',
  'Conversation practice',
  'Writing activities',
  'Letter recognition',
  'Sentence building',
];

const WHY_US = [
  { icon: '❤️', title: 'Child-friendly learning', text: 'Sessions are pitched at how children actually learn — short, varied and hands-on.' },
  { icon: '💡', title: 'Simple explanations', text: 'Everything is explained in words a child can repeat back in their own way.' },
  { icon: '🎲', title: 'Activity-based', text: 'Games, stories and conversation rather than worksheets alone.' },
  { icon: '🧑', title: 'Age-appropriate lessons', text: 'A four-year-old and a twelve-year-old learn the same language in very different ways.' },
  { icon: '💬', title: 'Parent communication', text: 'We tell you what your child is working on and what would help at home.' },
  { icon: '🪜', title: 'Structured learning', text: 'Letters, then words, then sentences, then stories — always in that order.' },
  { icon: '✍️', title: 'Practice-based', text: 'Children read, write and speak in every session, not just listen.' },
  { icon: '🔎', title: 'Focus on understanding', text: 'A child who can only recite has not learned. Understanding comes first.' },
];

const HOME_SUPPORT = [
  { title: 'Read Telugu stories together', text: 'Take turns reading a line each. Your child hears fluent reading and practises their own.' },
  { title: 'Practise a few words daily', text: 'Five words a day is plenty. Short and regular beats long and occasional.' },
  { title: 'Encourage Telugu conversations', text: 'Ask a question in Telugu at dinner. Even one exchange a day counts as practice.' },
  { title: 'Read the Telugu around you', text: 'Signboards, shop names, bus boards. Real Telugu in the world is good practice.' },
  { title: 'Use storytelling', text: 'Ask your child to tell you what happened in a story, in Telugu, in their own words.' },
  { title: 'Practise writing', text: 'A few letters or one sentence a day keeps handwriting steady between sessions.' },
  { title: 'Ask about new words', text: '“What new word did you learn today?” makes a child recall it, which is what fixes it.' },
  { title: 'Make it fun', text: 'Word games and rhymes work better than testing. A child who enjoys it will keep going.' },
];

const PARENT_QA = [
  {
    q: 'Is Telugu difficult for children?',
    a: 'Not especially. Telugu is written as it sounds, so reading is easier than in English once the letters are known. The alphabet is large, which is why it is taught a few letters at a time.',
  },
  {
    q: 'How can children improve Telugu reading?',
    a: 'By reading a little every day at a level that is comfortable. Reading something slightly too hard slows a child down; reading something easy builds speed and confidence.',
  },
  {
    q: 'How can children improve Telugu speaking?',
    a: 'By speaking, even imperfectly. Ask questions in Telugu at home and accept whatever answer comes. Correcting every mistake makes children stop trying.',
  },
  {
    q: 'How often should children practise?',
    a: 'A little most days works better than a long session once a week. Ten or fifteen minutes of reading or writing is enough to keep progress steady.',
  },
  {
    q: 'Can beginners join?',
    a: 'Yes. Children who cannot read a single Telugu letter are welcome and start from the vowels. No prior knowledge is assumed at any point.',
  },
  {
    q: 'Can Telugu classes support school learning?',
    a: 'They can. School Telugu asks for reading fluency, spelling and comprehension, which are the same skills practised here. We would not promise particular marks.',
  },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '📖', title: 'English', text: 'Reading comprehension, grammar in context and writing a child is pleased with.', to: '/programs/english' },
  { icon: '🕉️', title: 'Hindi', text: 'Devanagari, reading, writing and everyday conversation from the beginning.', to: '/programs/hindi' },
  { icon: '💬', title: 'Spoken English', text: 'Fluency built from real conversation, not memorised paragraphs.', to: '/programs/spoken-english' },
  { icon: '🎤', title: 'Public speaking', text: 'From show-and-tell to a prepared presentation, one stage at a time.', to: '/junior-skills/public-speaking' },
  { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a conversation well.', to: '/programs/communication-skills' },
  { icon: '📚', title: 'Telugu tuition', text: 'School syllabus, textbook coverage and exam practice — a different class from this one.', to: '/tuitions/telugu' },
];

const QUICK_ANSWERS = [
  {
    q: 'What is the best way for kids to learn Telugu?',
    a: 'In order, and out loud. Letters first, then words, then sentences, then stories — with reading, writing and speaking practised together rather than one at a time. Regular short practice works better than long occasional sessions.',
  },
  {
    q: 'How can kids improve Telugu reading?',
    a: 'By reading a little every day at a comfortable level. Material that is slightly too hard slows a child down. Letter recognition should be quick and automatic first, because everything else depends on it.',
  },
  {
    q: 'How can kids improve Telugu speaking?',
    a: 'By speaking, even imperfectly. Short daily conversations at home help more than formal practice. Correcting every mistake makes children hesitant, so let the sentence finish first.',
  },
  {
    q: 'What age should children start learning Telugu?',
    a: 'From around age four, children can start with letters, sounds and rhymes. Older children start wherever their level sits. Activities are adapted to the child’s current Telugu level rather than fixed by age.',
  },
  {
    q: 'My child speaks Telugu at home but cannot read it. Can they join?',
    a: 'Yes, and this is very common — it is the starting point the pathway is built for. A child who already speaks Telugu usually moves quickly, because the vocabulary is familiar and only the reading and writing are new.',
  },
  {
    q: 'How much Telugu practice does my child need?',
    a: 'Ten to fifteen minutes on most days is enough to keep progress steady between sessions. Short and regular beats long and occasional.',
  },
];

export default function TeluguPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Telugu classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children learn to read, write and speak Telugu step by step. Lessons cover letters,
                words, vocabulary, basic grammar, listening and comprehension — all taught through
                simple activities, stories and conversation.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#curriculum" className="btn btn-outline">
                  See the levels
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Beginners welcome
                </li>
                <li>
                  <span className="tick">★</span> Ages 4 and up
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>Where every child starts: the vowels</h2>
              <p>
                <span lang="te" style={{ fontSize: 28 }}>
                  అ ఆ ఇ ఈ
                </span>
              </p>
              <ul>
                <li>
                  First the vowels. <span lang="te">అ</span> sounds like the “a” in <em>up</em>.
                </li>
                <li>
                  Then consonants. <span lang="te">మ</span> is the “ma” sound.
                </li>
                <li>Letters join to make sounds, and sounds join to make words.</li>
                <li>
                  Soon your child reads <span lang="te">అమ్మ</span> — <strong>amma</strong>, mother.
                  Their first word.
                </li>
              </ul>
              <p className="note-line">A few letters at a time, never the whole alphabet at once.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trust strip ---------- */}
      <section className="stats-band section-tight">
        <div className="container">
          <div className="ab-statbar">
            {TRUST.map((t) => (
              <div className="stat" key={t.title}>
                <b>{t.title}</b>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="Telugu learning for kids, made simple"
            lead="What children learn, and why the lessons are built this way."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Children learn four things together: reading, writing, speaking and understanding. Each
                one helps the others, so none of them is left until later.
              </p>
              <p>
                Structured practice matters because Telugu has a large alphabet. Learning it in a fixed
                order, a few letters at a time, is far easier than meeting letters at random. Every new
                letter builds on the ones before it.
              </p>
              <p>
                Reading and writing are practised together. When a child writes a letter, their hand
                learns its shape, and that makes the letter much easier to recognise the next time they
                read it. Doing only one of the two makes both slower.
              </p>
              <p>
                Speaking matters because a language you say out loud sticks. A child who only reads Telugu
                on a page will hesitate in a real conversation, so children talk in every session, even in
                the first few weeks.
              </p>
              <p>
                Activities make all of this easier. Word games, picture matching, stories and poems keep a
                child going for longer than a worksheet would, and it is the extra practice that makes the
                difference.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>The four skills</h2>
                <ul className="pill-row">
                  {FOUR_SKILLS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>Good news about Telugu</h2>
                <p>
                  Telugu is written almost exactly as it sounds. Once a child knows the letters, they can
                  read a word they have never seen before and say it correctly. That makes reading easier
                  than in English, where spelling often surprises you.
                </p>
                <p>
                  The alphabet is large, which is why it is taught a few letters at a time rather than all
                  at once.
                </p>
              </div>
            </div>
          </div>

          <div className="quick-answer" style={{ marginTop: 48 }}>
            <h2>The same thing, three ways</h2>
            {ANSWER_ROWS.map((r) => (
              <p key={r.tag}>
                <span className="kv">{r.tag}</span>
                {r.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids learn Telugu?"
            lead="Many children in Hyderabad speak Telugu at home but cannot read or write it. These classes close that gap."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            A note on expectations: how fast a child progresses depends on how often they practise and
            where they start. We do not promise particular school marks or a fixed timeline — what we
            commit to is structured teaching and regular guided practice.
          </p>
        </div>
      </section>

      {/* ---------- What it builds ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What Telugu classes build"
            lead="Eight things children work on across the programme."
          />
          <div className="grid-4">
            {BUILDS.map((b) => (
              <div className="card" key={b.title}>
                <span className="icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Topics ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Topics covered"
            title="What will kids learn?"
            lead="Everything below is taught in order, with each step resting on the one before it."
          />
          <div className="skill-tiles">
            {TOPICS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Curriculum ---------- */}
      <div id="curriculum">
        <Curriculum curriculum={page.curriculum} />
      </div>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Level by level"
            title="What a session looks like at each level"
            lead="A learning structure rather than a school-board syllabus. Ask us for the current programme detail for your child’s level."
          />
          <NumberedRows items={LEVELS} badge="Level" />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Telugu classes by age group"
            lead="Suggested groupings. Activities adapt to the child’s current Telugu level rather than being fixed by age."
          />
          <div className="grid-4">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.kv}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <ul className="pill-row">
                  {a.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Not sure where your child fits? A free trial is the quickest way to find out. We see what your
            child can already do and suggest a starting point.
          </p>
        </div>
      </section>

      {/* ---------- Reading ---------- */}
      <section className="band-soft" id="reading">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Skill one</span>
            <h2>Telugu reading</h2>
            <p>
              Reading is built in stages. A child never jumps from letters straight to a storybook — each
              stage is practised until it feels easy.
            </p>
            <p>
              The good news is that Telugu is written as it sounds. Once a child knows the letters, they
              can read a word they have never seen before. That is why letter recognition gets so much
              attention early on.
            </p>
            <p>
              Comprehension is added once a child reads sentences comfortably. Reading the words is one
              skill; understanding what they mean is another, and both are practised.
            </p>
          </div>
          <div className="panel">
            <h2>How reading is built</h2>
            <ol className="rhythm">
              {READING_STAGES.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Writing ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Skill two"
            title="Telugu writing"
            lead="Writing is practised alongside reading, because forming a letter by hand is what makes it easy to recognise later."
          />
          <div className="grid-4">
            {WRITING.map((w) => (
              <div className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Speaking ---------- */}
      <section className="band-soft" id="speaking">
        <div className="container">
          <SectionHead
            eyebrow="Skill three"
            title="Telugu speaking"
            lead="Children speak Telugu in every session. These are the kind of everyday exchanges they practise — the romanisation is there so you can say them at home too."
          />
          <PhraseCards items={PHRASES} lang="te" />
          <div className="grid-3" style={{ marginTop: 24 }}>
            <div className="card">
              <h3>Pronunciation</h3>
              <p>Saying each sound clearly, with gentle correction the moment it slips rather than later.</p>
            </div>
            <div className="card">
              <h3>Question and answer</h3>
              <p>Children take turns asking and answering, so they practise both sides of a conversation.</p>
            </div>
            <div className="card">
              <h3>Storytelling</h3>
              <p>Retelling a short story in their own Telugu words — the hardest and most useful speaking task.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Vocabulary ---------- */}
      <section id="vocabulary">
        <div className="container">
          <SectionHead
            eyebrow="Vocabulary"
            title="Telugu words, by theme"
            lead="Tap a theme to see the words. New vocabulary is always taught in groups like these, so each word connects to something a child already talks about."
          />
          <VocabTabs themes={teluguVocab} label="Telugu vocabulary themes" lang="te" />
        </div>
      </section>

      {/* ---------- Grammar ---------- */}
      <section className="band-soft" id="grammar">
        <div className="container">
          <SectionHead
            eyebrow="Grammar made simple"
            title="Telugu grammar for kids"
            lead="Grammar is taught through examples, not rules to memorise. Here is what children learn and what each part looks like."
          />
          <div className="grid-3">
            {GRAMMAR.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <p className="ai-eg" lang="te">
                  {g.eg}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sample class ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in a Telugu class?"
            lead="An example of how a session flows. Ask us for the current class structure and batch detail."
          />
          <ol className="rhythm">
            {SESSION_FLOW.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practice"
            title="Telugu activities for kids"
            lead="The activity types used to keep practice varied and enjoyable."
          />
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="About us"
            title="Why choose Brolly Juniors"
            lead="Telugu sits alongside our other skill programmes for children in Hyderabad."
          />
          <div className="grid-4">
            {WHY_US.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Experienced educators guide children through age-appropriate Telugu activities. Ask us who
            teaches the batch you are considering and we will tell you.
          </p>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning options, timings and fees"
            lead="We share these directly so what you get is current and specific to your child."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning options</h3>
              <p className="kv">Ask us</p>
              <ul>
                <li>Classroom sessions at the centre</li>
                <li>Online availability varies by batch</li>
                <li>We will say honestly which suits your child</li>
              </ul>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <div className="plan">
              <h3>Class timings</h3>
              <p className="kv">Changes through the year</p>
              <ul>
                <li>Weekday, after school</li>
                <li>Weekend batches</li>
                <li>Availability shifts as groups fill</li>
              </ul>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
            <div className="plan">
              <h3>Telugu class fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on age group, level and format</li>
                <li>We explain what is included first</li>
                <li>Free trial before you decide anything</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free Telugu trial</h2>
            <p>
              Let your child experience a Telugu session and try reading, writing, speaking and language
              activities for themselves.
            </p>
            <ul className="pill-row">
              <li>Your child tries real Telugu activities</li>
              <li>We see what they can already read, write and say</li>
              <li>You get a suggested starting level</li>
              <li>Options, timings and fees explained clearly</li>
              <li>No obligation to enrol afterwards</li>
            </ul>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <p className="note-line">{formattedAddress()}</p>
          </div>
          <div className="trial-panel">
            <h2>Request your free trial</h2>
            <TrialForm program="Telugu" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support Telugu at home"
            lead="Eight simple things that make a real difference between sessions. None of them takes long."
          />
          <div className="grid-4">
            {HOME_SUPPORT.map((h) => (
              <div className="guide-card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Parent questions ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Parent guide"
            title="Questions parents ask us"
            lead="Six short answers to the things that come up most in a first phone call."
          />
          <div className="grid-3">
            {PARENT_QA.map((qa) => (
              <div className="ansblock" key={qa.q}>
                <h3>{qa.q}</h3>
                <p>{qa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Hyderabad ---------- */}
      <section className="band-soft">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad</span>
            <h2>Telugu classes for kids in Hyderabad</h2>
            <p>
              Telugu is all around children in Hyderabad — at home, on signboards, in conversations with
              grandparents. Many children understand it perfectly well but have never learned to read or
              write it.
            </p>
            <p>
              That gap is what these classes close. A child who already speaks Telugu usually moves
              quickly, because the vocabulary is familiar and only the letters are new. A child starting
              from nothing takes a little longer, and that is fine too.
            </p>
            <h3>Areas within easy reach</h3>
            <ul className="area-links">
              {AREAS.map((name) => {
                const loc = publishedLocations.find(
                  (l) => l.name.toLowerCase() === name.toLowerCase()
                );
                return (
                  <li key={name}>
                    {loc ? (
                      <Link to={locationPath(loc.slug)}>Kids classes in {name}</Link>
                    ) : (
                      <span>{name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="panel">
            <h2>Visit Brolly Juniors</h2>
            <p>{formattedAddress()}</p>
            <p>{address.landmarks}.</p>
            <p className="note-line">
              Tell us your child’s age and how much Telugu they already know, and we will suggest where
              they should start.
            </p>
            <div className="btn-row">
              <a href={site.phoneHref} className="btn btn-primary">
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn btn-outline">
                Directions &amp; contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Near me ---------- */}
      <section className="section-tight">
        <div className="container center">
          <SectionHead
            title="Looking for Telugu classes near you?"
            lead="Parents searching for Telugu classes near me usually want the same few things: a place that is easy to reach, a teacher who explains simply, and a class pitched at the right level. The level is the part worth checking carefully — a child who speaks Telugu at home but cannot read it needs something quite different from a complete beginner."
          />
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a free trial
            </Link>
            <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Language and communication programmes that sit alongside Telugu."
          />
          <div className="grid-3">
            {RELATED.map((r) => (
              <Link className="card" to={r.to} key={r.title}>
                <span className="icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={page.faqs} title={page.faqTitle} />

      {/* ---------- Quick answers ---------- */}
      <QuickAnswers
        items={QUICK_ANSWERS}
        faqs={page.faqs}
        title="Telugu for kids: quick answers"
        lead="Short, direct answers to the questions parents search for most."
      />

      <CtaBand variant={page.cta} />
    </>
  );
}
