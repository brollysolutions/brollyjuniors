import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { englishVocab } from '../data/languageVocab.js';
import {
  SectionHead,
  QuickAnswer,
  Curriculum,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { NumberedRows, TrickCard, VocabTabs } from '../components/ProgramBits.jsx';

/* The English programme page.
 *
 * Ported from the standalone english-classes-for-kids-in-hyderabad build. The
 * route, the SEO record, the four-strand curriculum and the FAQ set stay in
 * data/catalog/programmes.js; this component supplies the body.
 *
 * The source's sentence builder — drag four word cards into order — does not
 * survive the move intact, so the idea it teaches is kept in the form the site
 * already has for it: the shared TrickCard, revealing the doer / action / thing
 * pattern one step at a time.
 *
 * Three pages now answer neighbouring searches, and each says which is which
 * rather than leaving a parent to guess: this one covers reading, writing,
 * grammar and speaking together; Spoken English is conversation only; English
 * tuition under Tuitions follows the school syllabus for marks.
 */

const SENTENCE_STEPS = [
  <>
    Find the <strong>doer</strong> first. Who is doing something? The cat.
  </>,
  <>
    Then the <strong>action</strong>. What is the cat doing? Drinking.
  </>,
  <>
    Then the <strong>thing</strong>. Drinking what? Milk.
  </>,
  <>Doer, action, thing — that order works for most English sentences.</>,
];

const TRUST = [
  { title: 'English reading', text: 'Letter sounds, then words, then sentences, then whole stories.' },
  { title: 'English writing', text: 'Letter formation, spelling, sentences and short paragraphs.' },
  { title: 'Speaking practice', text: 'Everyday conversation and question-answer practice every session.' },
  { title: 'Vocabulary', text: 'New words grouped by theme so they connect to daily life.' },
  { title: 'Communication', text: 'Storytelling and simple presentations that build speaking confidence.' },
];

const FOUR_SKILLS = [
  'Reading — sounds, words, sentences, stories',
  'Writing — letters, spelling, sentences, paragraphs',
  'Speaking — conversation, pronunciation, presenting',
  'Listening — following and understanding what is said',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'English has four parts that work together: reading, writing, speaking and listening. A child who only reads will hesitate when asked to talk. A child who only talks will struggle to spell. Good classes practise all four, in every session.',
  },
  {
    tag: 'Easy example',
    text: 'A child learns the words cat, drinks and milk. Put them in the right order and they have made a sentence: “The cat drinks milk.” Three words, one complete idea.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Grammar is taught as a pattern rather than a rule to memorise, and every new word is used in a sentence the same session. Book a free trial and your child can try a session before you decide anything.',
  },
];

const WHY_LEARN = [
  { title: 'Reading practice', text: 'Regular reading turns slow word-by-word decoding into smooth reading. That shift usually takes a few months of steady practice.' },
  { title: 'Writing practice', text: 'Guided writing helps children put ideas into full sentences instead of single words, which is what school work asks for.' },
  { title: 'Stronger vocabulary', text: 'More words means more a child can say, read and understand. Words are taught in themes so they are easier to recall.' },
  { title: 'Better communication', text: 'Children learn to explain what they mean clearly, which matters well beyond the English period.' },
  { title: 'Better listening', text: 'Following spoken English and picking out what matters is a skill of its own, and it is practised directly.' },
  { title: 'Improved comprehension', text: 'Reading a passage and answering questions about it is different from reading it aloud. Both are practised.' },
  { title: 'Speaking confidence', text: 'A child who has spoken in a small group is far more willing to speak in a large one.' },
  { title: 'Story understanding', text: 'Stories carry vocabulary, sentence patterns and ideas all at once, which is why so much learning is built around them.' },
  { title: 'Creative expression', text: 'Once a child has enough words they can write their own stories — usually when English stops feeling like homework.' },
];

const BUILDS = [
  { icon: '📖', title: 'Reading skills', text: 'From sounding out single words to reading a short story without help.' },
  { icon: '✍️', title: 'Writing skills', text: 'Clear letter formation, correct spelling, and writing full sentences unaided.' },
  { icon: '💬', title: 'Speaking practice', text: 'Everyday conversation practised out loud in every session, not saved for later.' },
  { icon: '🗂️', title: 'Vocabulary building', text: 'New words grouped by theme — family, food, animals — so they are easier to remember.' },
  { icon: '⚙️', title: 'Grammar basics', text: 'Nouns, verbs, adjectives and sentence order, taught through examples rather than rules.' },
  { icon: '👂', title: 'Listening skills', text: 'Following spoken English and picking out the part that answers the question.' },
  { icon: '🔊', title: 'Pronunciation', text: 'Saying sounds clearly, including the ones children commonly mix up.' },
  { icon: '🔎', title: 'Comprehension', text: 'Reading a passage and answering questions about it in the child’s own words.' },
];

const TOPICS = [
  'English alphabet',
  'Letter recognition',
  'Phonics basics',
  'Word formation',
  'Vocabulary',
  'Reading',
  'Writing',
  'Spelling',
  'Grammar',
  'Sentence formation',
  'Speaking',
  'Listening',
  'Pronunciation',
  'Comprehension',
  'Storytelling',
  'Conversation practice',
  'Creative writing',
];

const LEVELS = [
  {
    title: 'English basics',
    text: 'The starting point for every child. The alphabet, letter sounds, simple words, basic vocabulary and listening activities.',
    example: 'Matching a letter card to the picture that starts with that sound.',
    skill: 'Letter recognition and sound awareness.',
  },
  {
    title: 'Reading & writing',
    text: 'Sounds become words, and words become sentences. Word reading, simple sentences, spelling, writing practice and steady vocabulary building.',
    example: 'Reading a word card aloud, then writing it from memory.',
    skill: 'Reading fluency and correct spelling.',
  },
  {
    title: 'Communication skills',
    text: 'Grammar basics, sentence formation, speaking practice, listening and reading comprehension. The four skills start working together.',
    example: 'Reading a short paragraph, then answering three questions about it.',
    skill: 'Comprehension and sentence building.',
  },
  {
    title: 'Advanced language practice',
    text: 'Longer passages, creative writing, storytelling, conversation, advanced vocabulary, grammar applied in real writing, and comprehension.',
    example: 'Writing a short story, then reading it aloud to the group.',
    skill: 'Independent writing and confident speaking.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 4–6',
    title: 'Letters & sounds',
    chips: ['Alphabet', 'Sounds', 'Simple words', 'Rhymes', 'Picture vocabulary'],
  },
  {
    kv: 'Ages 7–9',
    title: 'Reading & sentences',
    chips: ['Reading', 'Writing', 'Vocabulary', 'Simple grammar', 'Stories'],
  },
  {
    kv: 'Ages 10–12',
    title: 'Grammar & comprehension',
    chips: ['Grammar', 'Comprehension', 'Writing', 'Speaking', 'Storytelling'],
  },
  {
    kv: 'Ages 13+',
    title: 'Advanced & communication',
    chips: ['Advanced grammar', 'Comprehension', 'Writing', 'Communication', 'Creative expression'],
  },
];

const READING_STAGES = [
  { title: 'Letter recognition', text: 'Naming any letter and its sound instantly.' },
  { title: 'Word reading', text: 'Reading whole words rather than sounding out each letter.' },
  { title: 'Sentence reading', text: 'Reading a full sentence smoothly, with the right pauses.' },
  { title: 'Reading practice', text: 'Regular short readings that build speed and confidence.' },
  { title: 'Story reading', text: 'A short story read from start to finish, alone.' },
  { title: 'Comprehension', text: 'Answering questions about what was just read.' },
];

const WRITING = [
  { title: 'Letter formation', text: 'Correct stroke order, which makes handwriting quicker and easier to read.' },
  { title: 'Word writing', text: 'Writing whole words correctly, joining what a child already knows.' },
  { title: 'Spelling', text: 'Writing a word from memory, which is harder than copying and far more useful.' },
  { title: 'Sentence writing', text: 'Putting words in the right order with a capital letter and a full stop.' },
  { title: 'Guided writing', text: 'Writing to a prompt with help available while the child works.' },
  { title: 'Short paragraphs', text: 'Linking several sentences so they follow on from each other.' },
  { title: 'Creative writing', text: 'Writing their own story or description — usually the part children enjoy most.' },
  { title: 'Checking own work', text: 'Reading back what they wrote and spotting the missing capital or full stop.' },
];

const SPEAKING = [
  { q: 'What is your name?', a: 'My name is Rahul.', note: 'Answering in a full sentence, not just the name.' },
  { q: 'What do you like?', a: 'I like drawing.', note: 'Using “I like” with a doing word.' },
  { q: 'How old are you?', a: 'I am eight years old.', note: 'Practising numbers inside a sentence.' },
  { q: 'Where do you live?', a: 'I live in Hyderabad.', note: 'Using “in” with a place name.' },
  {
    q: 'What did you do today?',
    a: 'I went to school and played football.',
    note: 'Joining two ideas with “and”, in the past tense.',
  },
  {
    q: 'Can you tell me about your family?',
    a: 'I have a mother, a father and one sister.',
    note: 'A longer answer, listing several things.',
  },
];

const GRAMMAR = [
  {
    title: 'Nouns',
    text: 'A noun is a naming word — a person, animal, place or thing.',
    eg: 'teacher · dog · school · book — The dog sat on the chair.',
  },
  {
    title: 'Pronouns',
    text: 'A pronoun stands in for a name, so you do not repeat it every time.',
    eg: 'I · you · he · she · we · they — Rahul is late. He missed the bus.',
  },
  {
    title: 'Verbs',
    text: 'A verb is a doing word. It tells you what is happening.',
    eg: 'run · eat · write · sing — She writes a letter.',
  },
  {
    title: 'Adjectives',
    text: 'An adjective describes a noun. It tells you what something is like.',
    eg: 'big · red · happy · cold — The big dog ran to the red gate.',
  },
  {
    title: 'Sentence order',
    text: 'Most English sentences follow the same order: who, then what they do, then to what.',
    eg: 'The cat → drinks → milk. Doer, action, thing.',
  },
  {
    title: 'Singular and plural',
    text: 'Most English words add s to show there is more than one. Some change completely.',
    eg: 'book → books · box → boxes · child → children · foot → feet',
  },
  {
    title: 'Simple tenses',
    text: 'Tense tells you when something happened. Children learn three to begin with.',
    eg: 'I play (now) · I played (before) · I will play (later)',
  },
];

const PHONICS = [
  { letter: 'a', title: '“a” as in apple', text: 'The short sound most words use: cat, hat, man.' },
  { letter: 'e', title: '“e” as in egg', text: 'Short and quick: bed, pen, red.' },
  { letter: 'i', title: '“i” as in ink', text: 'Easy to confuse with “e”: sit, pin, big.' },
  { letter: 'sh', title: '“sh” as in ship', text: 'Two letters, one sound: shop, fish, wash.' },
  { letter: 'ch', title: '“ch” as in chair', text: 'Another pair that makes a single sound: chin, much.' },
  { letter: 'th', title: '“th” as in three', text: 'One of the trickier sounds, so it gets extra practice.' },
];

const SESSION_FLOW = [
  { title: 'Warm-up', text: 'A quick, easy start that revisits words or sounds from last time.' },
  { title: 'New words', text: 'A small set of new vocabulary, taught with pictures and said out loud together.' },
  { title: 'Reading practice', text: 'Reading the new words, then a sentence or two that uses them.' },
  { title: 'Writing practice', text: 'Writing the same words by hand, which fixes their spelling in memory.' },
  { title: 'Speaking activity', text: 'Using the new words in a short conversation, usually in pairs.' },
  { title: 'Story or game', text: 'A story, role-play or word game that pulls the whole session together.' },
  { title: 'Quick recap', text: 'A short review of what was learned and what to practise at home.' },
];

const ACTIVITIES = [
  'Word games',
  'Reading stories',
  'Picture-to-word matching',
  'Role-play',
  'Storytelling',
  'Rhymes and songs',
  'Conversation practice',
  'Writing activities',
  'Phonics activities',
  'Sentence building',
];

const WHY_US = [
  { icon: '❤️', title: 'Child-friendly learning', text: 'Sessions are pitched at how children actually learn — short, varied and hands-on.' },
  { icon: '💡', title: 'Simple explanations', text: 'Everything is explained in words a child can repeat back in their own way.' },
  { icon: '🎲', title: 'Activity-based', text: 'Games, stories, role-play and conversation rather than worksheets alone.' },
  { icon: '🧑', title: 'Age-appropriate lessons', text: 'A four-year-old and a twelve-year-old learn the same language in very different ways.' },
  { icon: '💬', title: 'Parent communication', text: 'We tell you what your child is working on and what would help at home.' },
  { icon: '🪜', title: 'Structured learning', text: 'Sounds, then words, then sentences, then stories — always in that order.' },
  { icon: '🗣️', title: 'All four skills', text: 'Reading, writing, speaking and listening in every session, not one at a time.' },
  { icon: '🔎', title: 'Focus on understanding', text: 'A child who can only recite has not learned. Understanding comes first.' },
];

const HOME_SUPPORT = [
  { title: 'Read together every day', text: 'Take turns reading a line each. Your child hears fluent reading and practises their own.' },
  { title: 'Talk about the story afterwards', text: 'Two questions about what happened does more than another page of reading.' },
  { title: 'Practise a few words daily', text: 'Five words a day is plenty. Short and regular beats long and occasional.' },
  { title: 'Speak English at home where you can', text: 'Even one exchange a day counts as practice, whatever the accent.' },
  { title: 'Ask about new words', text: '“What new word did you learn today?” makes a child recall it, which is what fixes it.' },
  { title: 'Let them write for real reasons', text: 'A shopping list, a birthday card, a note. Real writing beats an exercise.' },
  { title: 'Do not correct every mistake', text: 'Let the sentence finish. A child corrected mid-sentence stops starting sentences.' },
  { title: 'Make it fun', text: 'Word games and rhymes work better than testing. A child who enjoys it will keep going.' },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '💬', title: 'Spoken English', text: 'Conversation only — for a child who reads well but goes quiet when asked to talk.', to: '/programs/spoken-english' },
  { icon: '🔤', title: 'Phonics & early reading', text: 'The sound-by-sound route into reading, for ages 4 to 9.', to: '/junior-skills/phonics' },
  { icon: '🎤', title: 'Public speaking', text: 'From show-and-tell to a prepared presentation, one stage at a time.', to: '/junior-skills/public-speaking' },
  { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a conversation well.', to: '/programs/communication-skills' },
  { icon: '🪔', title: 'Telugu', text: 'The aksharamala, reading, writing and conversation.', to: '/programs/telugu' },
  { icon: '📚', title: 'English tuition', text: 'School syllabus, textbook coverage and exam practice — a different class from this one.', to: '/tuitions/english' },
];

const QUICK_ANSWERS = [
  {
    q: 'What is the best way for kids to learn English?',
    a: 'All four skills together — reading, writing, speaking and listening — with new vocabulary used in a sentence the same session. Regular short practice works better than long occasional sessions.',
  },
  {
    q: 'How can kids improve English reading?',
    a: 'By reading a little every day at a comfortable level, and talking about it afterwards. Vocabulary grows through reading more than through any other activity.',
  },
  {
    q: 'How can kids improve English speaking?',
    a: 'By speaking, in full sentences, without being corrected mid-sentence. A child who has spoken in a small group is far more willing to speak in a large one.',
  },
  {
    q: 'Why is English spelling so inconsistent?',
    a: 'Because English borrowed from many languages. Through, though and tough all end differently. Children learn the common phonics patterns first and meet the exceptions gradually, as sight words.',
  },
  {
    q: 'What age should children start English classes?',
    a: 'From around age four with the alphabet, letter sounds and rhymes. Older children start wherever their level sits, because activities adapt to the child rather than the age.',
  },
  {
    q: 'Is this the same as English tuition?',
    a: 'No. This class builds the underlying skill and is not tied to a school textbook. English tuition, under Tuitions, covers the school syllabus chapter by chapter for exams. Many families take one of each.',
  },
];

export default function EnglishPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>English classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children build English reading, writing and speaking together. Lessons cover vocabulary,
                grammar, listening, pronunciation and comprehension — all taught through stories,
                conversation and activities rather than worksheets alone.
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
            <TrickCard
              label="How a sentence gets built"
              sum="cat · the · milk · drinks  ="
              answer="The cat drinks milk."
              steps={SENTENCE_STEPS}
              note="Grammar taught as a pattern, not a rule to memorise."
              showLabel="Show me how"
              hideLabel="Hide the steps"
            />
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
            title="English learning for kids, made simple"
            lead="What children learn, and why the lessons are built this way."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Children learn four things together: reading, writing, speaking and listening. Each one
                helps the others, so none of them is saved for later.
              </p>
              <p>
                Reading and speaking both matter, for different reasons. Reading builds vocabulary and
                shows a child how sentences are put together. Speaking is where that knowledge gets used.
                A child who reads well but never speaks will freeze the first time someone asks them a
                question.
              </p>
              <p>
                Vocabulary is the part that unlocks everything else. A child cannot say an idea they have
                no word for. More words means more they can say, more they can understand, and more they
                can write.
              </p>
              <p>
                Writing practice is useful because it slows thinking down. When a child writes a sentence
                they have to choose each word deliberately, which is why writing shows up gaps that
                speaking hides.
              </p>
              <p>
                Grammar is taught simply, through examples. A seven-year-old does not need the phrase
                “present continuous tense”. They need to hear “she is running” enough times that it sounds
                right, and to notice why.
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
                <h2>A note on English spelling</h2>
                <p>
                  English does not always sound the way it is written. <em>Through</em>, <em>though</em>{' '}
                  and <em>tough</em> all end differently despite looking similar. This is why phonics is
                  taught alongside whole-word recognition rather than on its own.
                </p>
                <p>Children learn the common patterns first, and the exceptions as they meet them.</p>
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
            title="Why should kids learn English here?"
            lead="Most children in Hyderabad meet English at school. These classes give them the practice a large classroom rarely has time for."
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
            where they start. We do not promise fluency, particular school marks or a fixed timeline —
            what we commit to is structured teaching and regular guided practice.
          </p>
        </div>
      </section>

      {/* ---------- What it builds ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What English classes build"
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
            title="English classes by age group"
            lead="Suggested groupings. Activities adapt to the child’s age and current English level."
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
        </div>
      </section>

      {/* ---------- Reading ---------- */}
      <section className="band-soft" id="reading">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Skill one</span>
            <h2>English reading</h2>
            <p>
              Reading is built in stages. A child never jumps from letter sounds straight to a storybook —
              each stage is practised until it feels easy.
            </p>
            <p>
              Vocabulary grows through reading more than through any other activity. A child who reads
              regularly meets thousands of words they would never hear in conversation, which is why
              reading practice does so much work.
            </p>
            <p>
              Comprehension is added once a child reads sentences comfortably. Reading the words is one
              skill; understanding what they mean is another, and both are practised separately.
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
            title="English writing"
            lead="Writing is practised alongside reading, because putting a word on paper is what fixes its spelling in memory."
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
            title="English speaking"
            lead="Children speak English in every session. These are the kind of everyday exchanges they practise — and what each one is quietly teaching."
          />
          <div className="grid-3">
            {SPEAKING.map((s) => (
              <div className="card" key={s.q}>
                <h3>{s.q}</h3>
                <p>
                  <strong>{s.a}</strong>
                </p>
                <p className="ai-eg">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Vocabulary ---------- */}
      <section id="vocabulary">
        <div className="container">
          <SectionHead
            eyebrow="Vocabulary"
            title="English words, by theme"
            lead="Tap a theme to see the words. New vocabulary is taught in groups like these, with an example sentence, so children learn how the word is actually used."
          />
          <VocabTabs themes={englishVocab} label="English vocabulary themes" />
        </div>
      </section>

      {/* ---------- Grammar ---------- */}
      <section className="band-soft" id="grammar">
        <div className="container">
          <SectionHead
            eyebrow="Grammar made simple"
            title="English grammar for kids"
            lead="Grammar is taught through examples, not rules to memorise. Here is what children learn and what each part looks like."
          />
          <div className="grid-3">
            {GRAMMAR.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <p className="ai-eg">{g.eg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Phonics ---------- */}
      <section id="phonics">
        <div className="container">
          <SectionHead
            eyebrow="Sounds first"
            title="English sounds and pronunciation"
            lead="Phonics is the link between what a letter looks like and what it sounds like. Once a child knows the sounds, they can attempt a word they have never seen."
          />
          <div className="grid-3">
            {PHONICS.map((p) => (
              <div className="card" key={p.letter}>
                <span className="icon" aria-hidden="true">
                  {p.letter}
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Why phonics is not the whole answer: English spelling is inconsistent, so some words simply
            have to be recognised on sight. Children learn the common sound patterns first and meet the
            exceptions gradually. For the full sound-by-sound pathway, see{' '}
            <Link to="/junior-skills/phonics">phonics and early reading</Link>.
          </p>
        </div>
      </section>

      {/* ---------- Sample class ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in an English class?"
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
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practice"
            title="English activities for kids"
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
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="About us"
            title="Why choose Brolly Juniors"
            lead="English sits alongside our other language and communication programmes for children in Hyderabad."
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
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section>
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
              <h3>English class fees</h3>
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
      <section className="band-soft" id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free English trial</h2>
            <p>
              Let your child experience a session and try reading, writing, speaking and language
              activities for themselves.
            </p>
            <ul className="pill-row">
              <li>Your child tries real English activities</li>
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
            <TrialForm program="English" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support English at home"
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

      {/* ---------- Hyderabad ---------- */}
      <section className="band-soft">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad</span>
            <h2>English classes for kids in Hyderabad</h2>
            <p>
              Almost every child in Hyderabad meets English at school, and many are taught in it. What a
              large classroom rarely has time for is the practice: reading aloud, being asked a question
              and answering it in a full sentence, writing something and having it read back.
            </p>
            <p>
              That is what these sessions are for. Where a child starts depends on what they can already
              do rather than their age, and that is best settled in a trial rather than guessed at.
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
              Tell us your child’s age and current English level, and we will suggest where they should
              start.
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

      {/* ---------- Related ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Which one you want depends on what your child needs: the language itself, the confidence to use it, or the school syllabus."
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
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Quick answers"
            title="English for kids: quick answers"
            lead="Short, direct answers to the questions parents search for most."
          />
          <div className="grid-3">
            {QUICK_ANSWERS.map((qa) => (
              <div className="ansblock" key={qa.q}>
                <h3>{qa.q}</h3>
                <p>{qa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant={page.cta} />
    </>
  );
}
