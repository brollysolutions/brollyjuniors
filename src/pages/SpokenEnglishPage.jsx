import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { spokenEnglishVocab } from '../data/languageVocab.js';
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

/* The spoken English programme page.
 *
 * Ported from the standalone spoken-english-classes-for-kids-in-hyderabad
 * build. The route, the SEO record, the four-level curriculum and the FAQ set
 * stay in data/catalog/programmes.js; this component supplies the body.
 *
 * The section worth keeping above everything else is "Spoken English, English
 * or Public Speaking?". Three programmes here answer searches that sound
 * identical to a parent, and the honest thing — the thing that saves a phone
 * call and stops a child being enrolled in the wrong class — is to say plainly
 * which is which and link to the other two. It is also the only defence
 * against three of our own pages competing for the same query.
 */

const FULL_ANSWER_STEPS = [
  <>
    Ask: <strong>“What game do you like?”</strong>
  </>,
  <>
    Most children answer with one word: <strong>“Football.”</strong>
  </>,
  <>
    We ask for the whole sentence: <strong>“I like football.”</strong>
  </>,
  <>
    Then one more: <strong>“Why?”</strong> — and now the child is having a conversation.
  </>,
];

const TRUST = [
  { title: 'Speaking practice', text: 'Children talk in every session. That is the whole class.' },
  { title: 'Everyday English', text: 'The English used at home, at school and in a shop.' },
  { title: 'Vocabulary', text: 'Words taught with the phrase you would actually say them in.' },
  { title: 'Conversation', text: 'Asking, answering and keeping a conversation going.' },
  { title: 'Pronunciation', text: 'Being clearly understood, with gentle correction on hard words.' },
];

const WHICH_CLASS = [
  {
    title: 'Spoken English',
    kv: 'This page',
    text: 'For a child who understands English but does not speak it much. Everyday conversation with one or two people — at home, at school, in a shop. No reading or writing focus.',
    sign: 'Answers in one word, or switches language halfway through a sentence.',
    to: null,
  },
  {
    title: 'English classes',
    kv: 'The full subject',
    text: 'Reading, writing, spelling, grammar and comprehension, with speaking alongside. This is the one that supports school English work.',
    sign: 'Struggles with reading, spelling or written work.',
    to: '/programs/english',
  },
  {
    title: 'Public speaking',
    kv: 'Speaking to a group',
    text: 'Presenting to an audience — structure, body language, eye contact. Usually comes after a child is comfortable in ordinary conversation.',
    sign: 'Talks freely but freezes in front of the class.',
    to: '/junior-skills/public-speaking',
  },
];

const EVERYDAY_LINES = [
  '“Good morning.”',
  '“My name is Rahul.”',
  '“I like drawing.”',
  '“Can I have some water?”',
  '“I finished my homework.”',
];

const WHY_QUIET = [
  'They are worried about making a mistake',
  'They know the word but cannot find it fast enough',
  'They have never been asked to answer in a full sentence',
  'Everyone around them switches to another language to help',
];

const WILL_NOT_CLAIM = [
  'That your child will become fluent in a set number of days or months',
  'That these classes guarantee confidence or particular school results',
  'That children will develop a native accent — being clearly understood is the goal',
  'That progress is steady; most children move in bursts, with quiet weeks in between',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Many children in Hyderabad understand English perfectly well but answer in one word, or switch to another language mid-sentence. That is not a knowledge problem. It is a practice problem, and practice is the whole of what these classes are.',
  },
  {
    tag: 'Easy example',
    text: 'Ask a child what game they like and most say “Football.” Ask for the full sentence — “I like football” — then ask why. Two small steps, and a one-word answer has become a conversation.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Errors are noted while the child speaks and addressed afterwards, as patterns rather than personal mistakes. Interrupting a hesitant child to fix a tense is the fastest way to make them stop talking.',
  },
];

const SITUATIONS = [
  {
    icon: '🏠',
    title: 'At home',
    lines: ['“Can I have some water?”', '“I finished my homework.”', '“May I watch television now?”'],
  },
  {
    icon: '🏫',
    title: 'At school',
    lines: ['“May I come in, please?”', '“I did not understand this question.”', '“Can you please repeat that?”'],
  },
  {
    icon: '👋',
    title: 'With friends',
    lines: ['“Do you want to play with me?”', '“What did you do yesterday?”', '“That looks really nice.”'],
  },
  {
    icon: '⚽',
    title: 'At the playground',
    lines: ['“Can I join the game?”', '“It is my turn now.”', '“Let us play again tomorrow.”'],
  },
  {
    icon: '🛒',
    title: 'At a shop',
    lines: ['“How much does this cost?”', '“I would like two, please.”', '“Do you have a smaller one?”'],
  },
  {
    icon: '🎨',
    title: 'About hobbies',
    lines: ['“I like drawing in my free time.”', '“I started learning it last year.”', '“What do you like doing?”'],
  },
  {
    icon: '🍎',
    title: 'About food',
    lines: ['“My favourite food is dosa.”', '“I do not like this very much.”', '“It tastes a little spicy.”'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'About family',
    lines: ['“I have one brother and one sister.”', '“My father works in an office.”', '“We go out together on Sundays.”'],
  },
];

const CONVERSATIONS = [
  {
    q1: '“What is your favourite game?”',
    a1: '“I like football.”',
    q2: '“Why do you like it?”',
    a2: '“Because it is fun to play with friends.”',
    note: 'The second question is what turns an answer into a conversation.',
  },
  {
    q1: '“What did you do at school today?”',
    a1: '“We had a drawing class.”',
    q2: '“What did you draw?”',
    a2: '“I drew a house with a big garden.”',
    note: 'Talking about the past, in simple everyday words.',
  },
  {
    q1: '“Do you have any pets?”',
    a1: '“Yes, I have a dog.”',
    q2: '“What is his name?”',
    a2: '“His name is Bruno and he is two years old.”',
    note: 'Adding one extra detail without being asked.',
  },
  {
    q1: '“Can you help me, please?”',
    a1: '“Yes, of course. What do you need?”',
    q2: '“I cannot open this box.”',
    a2: '“Let me try. I think it is stuck.”',
    note: 'Asking for and offering help — useful every single day.',
  },
  {
    q1: '“Where do you live?”',
    a1: '“I live in Hyderabad.”',
    q2: '“Do you like it there?”',
    a2: '“Yes, because my school is very close to my house.”',
    note: 'Giving a reason with “because” makes any answer longer.',
  },
  {
    q1: '“What do you want to be when you grow up?”',
    a1: '“I want to be a doctor.”',
    q2: '“Why do you want to be a doctor?”',
    a2: '“Because I want to help people who are sick.”',
    note: 'Talking about the future, and explaining a choice.',
  },
];

const SENTENCE_PATTERN = [
  { eg: 'I · eat · an apple.', note: 'who, does what, to what' },
  { eg: 'She · reads · a book.', note: 'same order, different words' },
  { eg: 'They · play · football.', note: 'works for any number of people' },
];

const TOPICS = [
  'Greetings',
  'Self introduction',
  'Everyday sentences',
  'Question words',
  'Answering questions',
  'Vocabulary',
  'Pronunciation',
  'Sentence formation',
  'Conversation',
  'Listening',
  'Storytelling',
  'Role play',
  'Picture description',
  'Reading aloud',
];

const LEVELS = [
  {
    title: 'Everyday phrases',
    text: 'Greetings, basic words, one-line answers and simple questions. The aim is that a child says something in English out loud and it goes fine.',
    example: 'Answering five questions about yourself in full sentences.',
    skill: 'Speaking without waiting to be perfect.',
  },
  {
    title: 'Describing & narrating',
    text: 'From single sentences to connected ones — describing a picture, saying what happened yesterday, adding a detail without being asked.',
    example: 'Describing a picture for thirty seconds without stopping.',
    skill: 'Keeping going for more than one sentence.',
  },
  {
    title: 'Opinion & discussion',
    text: 'Saying what you think, giving a reason with “because”, and disagreeing without falling silent.',
    example: 'Taking a side in a small-group discussion about a familiar topic.',
    skill: 'Explaining a choice out loud.',
  },
  {
    title: 'Fluency & pronunciation',
    text: 'Sounding natural: stress, rhythm and the confidence to speak on something unrehearsed.',
    example: 'One minute on an unseen topic, with a minute to think first.',
    skill: 'Speaking unrehearsed and staying clear.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 4–6',
    title: 'First words out loud',
    chips: ['Greetings', 'Basic words', 'One-line answers', 'Rhymes', 'Picture talk'],
  },
  {
    kv: 'Ages 7–9',
    title: 'Full sentences',
    chips: ['Everyday sentences', 'Question words', 'Vocabulary', 'Role play', 'Storytelling'],
  },
  {
    kv: 'Ages 10–12',
    title: 'Conversation',
    chips: ['Two-way conversation', 'Giving reasons', 'Describing', 'Pronunciation', 'Listening'],
  },
  {
    kv: 'Ages 13+',
    title: 'Fluency',
    chips: ['Discussion', 'Opinions', 'Unrehearsed speaking', 'Stress and rhythm'],
  },
];

const SESSION_FLOW = [
  { title: 'Warm-up', text: 'A quick round where everyone says something, so nobody sits silent for the first ten minutes.' },
  { title: 'New words', text: 'A handful of words for the day’s situation, each said inside a whole phrase.' },
  { title: 'Listen and repeat', text: 'Hearing the phrase said properly before trying it, which fixes most pronunciation problems early.' },
  { title: 'Pair conversation', text: 'Both sides of a real exchange, taken in turn. This is the longest part of the session.' },
  { title: 'Role play or picture talk', text: 'A shop, a phone call, a picture to describe — a reason to keep talking past one sentence.' },
  { title: 'Group round', text: 'Each child says a few sentences to the group, which is a bigger step than it sounds.' },
  { title: 'Feedback', text: 'Two or three corrections, given after the speaking rather than during it.' },
];

const ACTIVITIES = [
  'Conversation games',
  'Role play',
  'Picture talk',
  'Show and tell',
  'Vocabulary games',
  'Listen and repeat',
  'Storytelling',
  'Question rounds',
  'Reading aloud',
  'Describing games',
];

const HOME_SUPPORT = [
  { title: 'Use simple English daily', text: 'During ordinary activities — cooking, travelling, tidying up. Real situations beat exercises.' },
  { title: 'Ask questions that need a sentence', text: '“What was the best part of today?” cannot be answered with yes or no.' },
  { title: 'Ask for the full answer', text: 'Not as a correction — just “say the whole sentence”. That single habit changes the most.' },
  { title: 'Learn a few words together', text: 'Three or four a day, each used in a phrase the same day.' },
  { title: 'Do not correct mid-sentence', text: 'Let it finish. Mention one thing afterwards, if anything at all.' },
  { title: 'Let them order and ask', text: 'At a shop or a restaurant, let your child do the talking.' },
  { title: 'Read aloud together', text: 'It practises pronunciation and rhythm without feeling like speaking practice.' },
  { title: 'Accept the accent', text: 'Clear is the goal, not native. A child self-conscious about their accent speaks less.' },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '📖', title: 'English', text: 'Reading, writing, grammar and comprehension — the full subject.', to: '/programs/english' },
  { icon: '🎤', title: 'Public speaking', text: 'Presenting to a group, once ordinary conversation is comfortable.', to: '/junior-skills/public-speaking' },
  { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a group conversation well.', to: '/programs/communication-skills' },
  { icon: '🔤', title: 'Phonics & early reading', text: 'The sound-by-sound route into reading, for ages 4 to 9.', to: '/junior-skills/phonics' },
  { icon: '🪔', title: 'Telugu', text: 'Reading, writing and speaking Telugu, for children who understand but cannot read it.', to: '/programs/telugu' },
  { icon: '🌏', title: 'Foreign languages', text: 'Beginner courses in French, German, Spanish and Japanese.', to: '/programs/foreign-languages' },
];

const QUICK_ANSWERS = [
  {
    q: 'Why does my child answer in one word?',
    a: 'Usually because nobody has asked for more, or because they are worried about making a mistake. Asking for the full sentence, kindly and every time, is the single habit that changes it fastest.',
  },
  {
    q: 'My child understands English but will not speak it.',
    a: 'That is the most common starting point here, and it is a practice problem rather than a knowledge one. Children who understand already usually move quickly once they are speaking every session.',
  },
  {
    q: 'Will my child develop a native accent?',
    a: 'No, and that is not the goal. Being clearly understood is. A child made self-conscious about their accent speaks less, which is the opposite of what these classes are for.',
  },
  {
    q: 'Is this the same as English classes?',
    a: 'No. Spoken English is conversation only. English classes cover reading, writing, spelling, grammar and comprehension as well. If your child reads and writes well but goes quiet when spoken to, this is the better fit.',
  },
  {
    q: 'How can parents help at home?',
    a: 'Use simple English during daily activities, ask questions that need more than yes or no, and let your child finish without being corrected mid-sentence.',
  },
  {
    q: 'How long before we see a change?',
    a: 'Most children move in bursts, with quiet weeks in between. We do not promise fluency in a set number of months, and would be wary of anyone who does.',
  },
];

export default function SpokenEnglishPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Spoken English classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children practise everyday English out loud — real conversations, useful vocabulary, clear
                pronunciation and simple sentences. The focus here is talking, not worksheets, because
                speaking only improves through speaking.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#which-class" className="btn btn-outline">
                  Is this the right class?
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
              label="One question, one full answer"
              sum="“Football.”  →"
              answer="“I like football.”"
              steps={FULL_ANSWER_STEPS}
              note="Full answers, every time. That one habit changes everything."
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

      {/* ---------- Which class ---------- */}
      <section id="which-class">
        <div className="container">
          <SectionHead
            eyebrow="Choosing"
            title="Spoken English, English or public speaking?"
            lead="We run three programmes that sound similar and are not. Reading this first will save you a phone call, and will stop your child being put in the wrong one."
          />
          <div className="grid-3">
            {WHICH_CLASS.map((c) => {
              const body = (
                <>
                  <p className="kv">{c.kv}</p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <p className="ai-eg">
                    <b>The sign:</b> {c.sign}
                  </p>
                </>
              );
              return c.to ? (
                <Link className="card" to={c.to} key={c.title}>
                  {body}
                </Link>
              ) : (
                <div className="card" key={c.title}>
                  {body}
                </div>
              );
            })}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Still not sure? Tell us what your child does rather than what you think they need, and we will
            say which one fits.
          </p>
        </div>
      </section>

      {/* ---------- What is spoken English ---------- */}
      <section className="band-soft" id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is spoken English?"
            lead="Using English words and sentences to communicate with other people in everyday situations — the English you use without thinking about it."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>Here is what that actually looks like:</p>
              <ul className="pill-row">
                {EVERYDAY_LINES.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <p style={{ marginTop: 24 }}>
                None of it is complicated. What makes it hard is that a child needs to produce it quickly,
                out loud, while someone is waiting.
              </p>
              <p>
                Children learn this by listening, speaking and practising — in that order, and repeatedly.
                There is no shortcut that skips the speaking part.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>Why children stay quiet</h2>
                <ul>
                  {WHY_QUIET.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>What we will not claim</h2>
                <ul>
                  {WILL_NOT_CLAIM.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
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

      {/* ---------- Everyday situations ---------- */}
      <section id="everyday">
        <div className="container">
          <SectionHead
            eyebrow="Real situations"
            title="English for everyday conversations"
            lead="Eight situations children actually meet, with the sentences they need in each. These are the phrases practised in class, not textbook examples."
          />
          <div className="grid-4">
            {SITUATIONS.map((s) => (
              <div className="card" key={s.title}>
                <span className="icon" aria-hidden="true">
                  {s.icon}
                </span>
                <h3>{s.title}</h3>
                <ul>
                  {s.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Conversations ---------- */}
      <section className="band-soft" id="conversations">
        <div className="container">
          <SectionHead
            eyebrow="Two-way practice"
            title="Practising English through conversation"
            lead="Children work in pairs, taking both sides in turn. Notice that every answer is a full sentence, and every conversation goes past the first question."
          />
          <div className="grid-3">
            {CONVERSATIONS.map((c) => (
              <div className="card" key={c.q1}>
                <h3>{c.q1}</h3>
                <p>
                  <strong>{c.a1}</strong>
                </p>
                <p>{c.q2}</p>
                <p>
                  <strong>{c.a2}</strong>
                </p>
                <p className="ai-eg">{c.note}</p>
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
            title="Everyday English words, by theme"
            lead="Tap a theme to see the words. Each comes with a phrase showing how you would actually say it — because a word a child cannot use in a sentence is not much use."
          />
          <VocabTabs themes={spokenEnglishVocab} label="Everyday English vocabulary themes" />
        </div>
      </section>

      {/* ---------- Sentence pattern ---------- */}
      <section className="band-soft" id="sentences">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">One pattern</span>
            <h2>Making simple English sentences</h2>
            <p>
              Most everyday English sentences follow one order: <strong>who</strong> does something,{' '}
              <strong>what</strong> they do, and <strong>what</strong> they do it to.
            </p>
            <p>
              Teachers call that subject, verb, object. Children do not need the words — they need to hear
              the pattern enough times that a wrong order starts to sound wrong.
            </p>
            <p>
              That is as far as grammar goes on this page. Spoken English is not a grammar course, and
              children corrected on rules while speaking usually stop speaking. If your child needs grammar
              properly, that sits in <Link to="/programs/english">English classes</Link>.
            </p>
          </div>
          <div className="panel">
            <h2>The pattern in action</h2>
            {SENTENCE_PATTERN.map((s) => (
              <p key={s.eg}>
                <span className="kv">{s.eg}</span>
                {s.note}
              </p>
            ))}
            <p className="note-line">
              Once a child has this, they can build a sentence about anything — which is exactly what the
              pair work asks them to do.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Topics ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Topics covered"
            title="What will kids learn?"
            lead="All of it practised out loud, in pairs and small groups."
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
            lead="A learning structure rather than a certification. Ask us for the current programme detail for your child’s level."
          />
          <NumberedRows items={LEVELS} badge="Level" />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Spoken English by age group"
            lead="Suggested groupings. Activities adapt to the child’s age, English level and learning needs."
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

      {/* ---------- Sample class ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in a spoken English class?"
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
            title="Spoken English activities for kids"
            lead="The activity types used to keep children talking for far longer than a formal lesson would."
          />
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
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
                <li>Small groups so every child speaks every session</li>
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
              <h3>Spoken English fees</h3>
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
            <h2>Book a free spoken English trial</h2>
            <p>
              Let your child try a speaking session. Tell us how much English they already speak, so the
              session starts at the right level rather than above or below it.
            </p>
            <ul className="pill-row">
              <li>Your child does the talking, not the listening</li>
              <li>We hear where they are starting from</li>
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
            <TrialForm program="Spoken English" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support spoken English at home"
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
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad</span>
            <h2>Spoken English classes for kids in Hyderabad</h2>
            <p>
              In most schools here English is read and written far more often than it is spoken. Children
              can score well in the subject and still hesitate when someone talks to them, which is a
              different problem with a different fix.
            </p>
            <p>
              The fix is speaking time — enough of it, often enough, in a group small enough that nobody
              can hide. That is the whole design of the class.
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
              Tell us your child’s age and how much English they already speak, and we will suggest where
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

      {/* ---------- Related ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Where children usually go next, and what to take instead if conversation is not the gap."
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
            title="Spoken English for kids: quick answers"
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
