import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { foreignLanguageSamples } from '../data/languageVocab.js';
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

/* The foreign languages programme page.
 *
 * Ported from the standalone foreign-language-classes-for-kids-in-hyderabad
 * build. The route, the SEO record, the four-phase curriculum and the FAQ set
 * stay in data/catalog/programmes.js; this component supplies the body.
 *
 * Two things the source insisted on, kept:
 *
 *   - Which languages actually run is a question to ask, not a list to read.
 *     Batches open when four children form at a similar level, so a page that
 *     promises five languages year-round would be lying twice a term. The
 *     sample words below are labelled as illustrations for that reason.
 *   - No claim that a second language makes a child smarter or improves their
 *     grades. It is the most common claim in this category and the least
 *     supportable.
 *
 * Hindi used to sit inside this page as the one language running year-round.
 * It now has a programme of its own, so this page points there rather than
 * competing with it.
 */

const FIRST_CONVERSATION_STEPS = [
  <>
    Start with a <strong>greeting</strong>. Every language has one, and it is always taught first.
  </>,
  <>
    Add an <strong>introduction</strong>: “My name is…”
  </>,
  <>
    Then a <strong>question</strong>, and listen to the answer.
  </>,
  <>
    Finish with <strong>goodbye</strong>. That is a real exchange, in about six words.
  </>,
];

const TRUST = [
  { title: 'Vocabulary', text: 'Everyday words in themes, so they connect to daily life.' },
  { title: 'Speaking', text: 'Saying new words out loud from the very first session.' },
  { title: 'Listening', text: 'Hearing the language properly before trying to produce it.' },
  { title: 'Pronunciation', text: 'Practising sounds that do not exist in the languages a child knows.' },
  { title: 'Conversation', text: 'Short real exchanges, built from the words already learned.' },
];

const STARTING_FROM_ZERO = [
  'No prior exposure is assumed at any point',
  'Greetings and everyday words come first',
  'Speaking starts in the first session, not later',
  'Reading and writing come only when they help',
];

const WILL_NOT_CLAIM = [
  'That learning a language makes children smarter or raises IQ',
  'That it guarantees better grades or career success',
  'That a child will be fluent in a fixed period',
  'That children will develop a native accent or perfect pronunciation',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'A new language starts the same way for everyone: a greeting, a few nouns, and a phrase you can actually say to someone. Grammar comes much later, and for young children it barely comes at all.',
  },
  {
    tag: 'Easy example',
    text: 'A child learns three things — how to say hello, how to say their name, and how to ask someone else’s. That is enough for a real exchange, and most children can do it within the first few sessions.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Listening and speaking come first; the script arrives once the ear is there. The same four phases are used for every language offered, so a child who finishes one knows exactly how the next will feel.',
  },
];

const WHY_LEARN = [
  { title: 'A new sound system', text: 'Children meet sounds that do not exist in the languages they already speak, and get used to producing them.' },
  { title: 'Listening', text: 'Following speech you only partly understand is a skill of its own, and it transfers.' },
  { title: 'Vocabulary', text: 'Words in themes, learned with a picture and a phrase rather than as a list.' },
  { title: 'Speaking without fear', text: 'Everyone in the room is a beginner, which makes it an unusually easy place to try.' },
  { title: 'Memory practice', text: 'Recalling a word you learned last week is memory work with an immediate reward.' },
  { title: 'Cultural context', text: 'Festivals, food and everyday habits — the part that makes a language make sense.' },
  { title: 'A foundation for later', text: 'A good accent and a few hundred words is exactly what makes a serious course succeed later.' },
  { title: 'Enjoyment', text: 'Most children find a new language genuinely fun, which is reason enough at this age.' },
];

const TOPICS = [
  'Greetings',
  'Basic words',
  'Numbers',
  'Colours',
  'Family words',
  'Food words',
  'Everyday objects',
  'Simple phrases',
  'Pronunciation',
  'Listening',
  'Speaking',
  'Question and answer',
  'Simple conversation',
  'Songs and rhymes',
  'Script and reading',
  'Cultural activities',
];

const PHASES = [
  {
    title: 'Sounds & first exchanges',
    text: 'Listening before reading. Greetings, names and numbers, said aloud until they are automatic.',
    example: 'Introducing yourself and asking the same question back.',
    skill: 'Producing unfamiliar sounds without hesitating.',
  },
  {
    title: 'Everyday vocabulary',
    text: 'Family, food, school, time — the topics a beginner can talk about within a month.',
    example: 'A paired dialogue about your family and daily routine.',
    skill: 'Using core vocabulary in whole sentences.',
  },
  {
    title: 'Script & reading',
    text: 'The writing system, introduced once the sounds are secure — accents or kana as the language requires.',
    example: 'Reading a short simple text aloud, then writing two sentences.',
    skill: 'Reading and writing simple sentences in the script.',
  },
  {
    title: 'Conversation & culture',
    text: 'Longer exchanges, past and future forms, and the cultural context that makes the language make sense.',
    example: 'Role-play: a shop, directions, a phone call.',
    skill: 'Holding a three-minute conversation on a known topic.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 8–10',
    title: 'Words & greetings',
    chips: ['Greetings', 'Numbers', 'Colours', 'Songs', 'Picture matching'],
  },
  {
    kv: 'Ages 10–12',
    title: 'Phrases & exchanges',
    chips: ['Everyday phrases', 'Question and answer', 'Vocabulary themes', 'Role play'],
  },
  {
    kv: 'Ages 12–14',
    title: 'Script & sentences',
    chips: ['Reading the script', 'Writing sentences', 'Present tense', 'Short dialogues'],
  },
  {
    kv: 'Ages 14–16',
    title: 'Conversation',
    chips: ['Longer exchanges', 'Past and future', 'Culture', 'Independent speaking'],
  },
];

const SESSION_FLOW = [
  { title: 'Listening warm-up', text: 'Hearing the language before producing it, usually as a short song or exchange.' },
  { title: 'New words', text: 'Six to eight words on one theme, each said aloud several times.' },
  { title: 'Repeat and correct', text: 'Pronunciation practice while the words are still new, which is when it is easiest to fix.' },
  { title: 'Paired dialogue', text: 'A short exchange using the new words, taken from both sides.' },
  { title: 'Game or song', text: 'Word games and songs, which is how vocabulary gets repeated without it feeling like drill.' },
  { title: 'Script practice', text: 'Once the phase reaches it — reading a line, writing a word.' },
  { title: 'Recap', text: 'The day’s words said once more, and what to practise before next week.' },
];

const ACTIVITIES = [
  'Word games',
  'Picture matching',
  'Flashcards',
  'Songs and rhymes',
  'Role play',
  'Listening games',
  'Describe and guess',
  'Culture activities',
];

const HOME_SUPPORT = [
  { title: 'Practise a few words daily', text: 'New vocabulary fades quickly without review. Five minutes most days beats an hour once a week.' },
  { title: 'Use greetings at home', text: 'Say hello and goodbye in the new language. It costs nothing and it repeats daily.' },
  { title: 'Listen to songs together', text: 'Music carries pronunciation and rhythm better than any exercise.' },
  { title: 'Ask them to teach you', text: 'You do not need to know the language. Being taught is the best possible practice for the child.' },
  { title: 'Label a few things', text: 'A sticky note on the door, the fridge, the mirror. Passive repetition, all week.' },
  { title: 'Watch something short', text: 'A cartoon they already know, in the new language, with subtitles off for two minutes.' },
  { title: 'Do not test them', text: 'Testing turns a language into a subject. Ask them to use it instead.' },
  { title: 'Let the accent be theirs', text: 'Clear is the goal, not native. A self-conscious child stops speaking.' },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '🕉️', title: 'Hindi', text: 'Taught as its own programme, year-round — Devanagari, reading, writing and conversation.', to: '/programs/hindi' },
  { icon: '🪔', title: 'Telugu', text: 'The aksharamala, reading, writing and conversation for children in Hyderabad.', to: '/programs/telugu' },
  { icon: '💬', title: 'Spoken English', text: 'Fluency in English built from real conversation.', to: '/programs/spoken-english' },
  { icon: '📖', title: 'English', text: 'Reading, writing, grammar and comprehension.', to: '/programs/english' },
  { icon: '🎤', title: 'Public speaking', text: 'Presenting to a group, once conversation is comfortable.', to: '/junior-skills/public-speaking' },
  { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a conversation well.', to: '/programs/communication-skills' },
];

const QUICK_ANSWERS = [
  {
    q: 'Which foreign language should my child learn?',
    a: 'There is no single best language. What matters more is whether your child is interested in it and whether they will get chances to use it. A language a child enjoys will be practised; one chosen only for its usefulness often is not.',
  },
  {
    q: 'Which languages are running right now?',
    a: 'Ask us. Beginner courses open when four children form a batch at a similar level, so usually one or two run at any time. A page that promised five languages year-round would be wrong twice a term.',
  },
  {
    q: 'Can a complete beginner join?',
    a: 'Almost everyone is. No prior exposure is assumed, and greetings and everyday words come first.',
  },
  {
    q: 'When does the writing system get taught?',
    a: 'Once the sounds are secure — usually the third phase. A child who can already hold a short exchange finds the script far easier than one who met it first.',
  },
  {
    q: 'Will my child become fluent?',
    a: 'Not in a term, and we do not sell that. A beginner course reliably produces a good accent, a working vocabulary of a few hundred words and the confidence to keep going.',
  },
  {
    q: 'Does learning a language improve school results?',
    a: 'We would not claim it. It gives children practice with new words, sounds, listening and memory, and many enjoy it a great deal. Anything beyond that depends on far too many other things to promise.',
  },
];

export default function ForeignLanguagesPage({ page }) {
  const [langKey, setLangKey] = useState(foreignLanguageSamples[0].key);
  const language = foreignLanguageSamples.find((l) => l.key === langKey);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Foreign language classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children start with basic words and everyday phrases, then build listening, speaking,
                pronunciation and vocabulary until they can hold a simple conversation. It happens through
                games, songs and talking — not grammar tables.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#which-language" className="btn btn-outline">
                  Which languages run?
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Complete beginners
                </li>
                <li>
                  <span className="tick">★</span> Speaking from week one
                </li>
              </ul>
            </div>
            <TrickCard
              label="Your child’s first conversation"
              sum="Hello · My name is…  →"
              answer="A conversation"
              steps={FIRST_CONVERSATION_STEPS}
              note="Same pattern in every language a child might learn."
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

      {/* ---------- Which language ---------- */}
      <section id="which-language">
        <div className="container">
          <SectionHead
            eyebrow="Before anything else"
            title="Which language can your child learn?"
            lead="This is the first question most parents ask, and it is the one we will not guess at."
          />
          <div className="quick-answer">
            <h2>Ask before you plan</h2>
            <p>
              Beginner courses in French, German, Spanish and Japanese open when a batch of at least four
              children forms at a similar level, which usually means one or two of them are running at any
              given time. Which ones depends on the term, the age group and demand — so the honest answer
              is to ask rather than to read a list that may be out of date.
            </p>
            <p>
              <strong>Hindi is different.</strong> It runs year-round and has a programme of its own:{' '}
              <Link to="/programs/hindi">Hindi classes for kids</Link>.
            </p>
            <div className="btn-row">
              <a href={site.phoneHref} className="btn btn-primary">
                Call {site.phone}
              </a>
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            A note on the examples further down this page: the words shown are real and correct, but they
            are illustrations of how foreign language learning works — not a list of what is running this
            term. Please check availability before you plan.
          </p>
        </div>
      </section>

      {/* ---------- What is a foreign language ---------- */}
      <section className="band-soft" id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is a foreign language, for a child here?"
            lead="A language different from the one a child normally speaks at home or at school — for a child in Hyderabad, usually something outside Telugu, Hindi and English."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                That is what makes it different from the other language classes we run. A child learning
                Telugu or Hindi already hears it somewhere. A child learning a foreign language is starting
                from nothing, and the teaching has to account for that.
              </p>
              <p>
                So listening comes before reading, speaking starts in the first session, and the script
                waits until the sounds are secure. A child who meets an unfamiliar alphabet before they can
                say anything usually decides the language is hard, and they are not wrong.
              </p>
              <p>
                Languages children commonly learn include French, Spanish, German, Japanese, Korean and
                Mandarin. Those are examples of foreign languages, not a list of what runs here — ask us
                what is currently available.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>Starting from zero is normal</h2>
                <ul className="pill-row">
                  {STARTING_FROM_ZERO.map((s) => (
                    <li key={s}>{s}</li>
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

      {/* ---------- Sample words ---------- */}
      <section id="sample-words">
        <div className="container">
          <SectionHead
            eyebrow="What the first weeks look like"
            title="Everyday words, in four languages"
            lead="Pick a language, then a theme. Every word carries a pronunciation line, because a word a child cannot say is not yet a word they know."
          />
          <ul className="ai-pickbar" role="group" aria-label="Choose a language">
            {foreignLanguageSamples.map((l) => (
              <li key={l.key}>
                <button
                  type="button"
                  className="ai-pick"
                  aria-pressed={langKey === l.key}
                  onClick={() => setLangKey(l.key)}
                >
                  {l.name} · {l.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 28 }}>
            <VocabTabs
              key={language.key}
              themes={language.themes}
              label={`${language.name} vocabulary themes`}
              lang={language.key}
            />
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            These words are correct, and they are illustrations. Which languages are running this term is a
            question to ask us, not to read from a page.
          </p>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why learn a foreign language at this age?"
            lead="Eight things a beginner course genuinely works on — none of which is “it will make them smarter”."
          />
          <div className="grid-4">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
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
            lead="The same ground in every language offered, in the same order."
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
            eyebrow="Phase by phase"
            title="What a session looks like in each phase"
            lead="The same structure is used for every language offered, so a child who finishes one knows exactly how the next will feel."
          />
          <NumberedRows items={PHASES} badge="Phase" />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Foreign languages by age group"
            lead="Suggested groupings. Activities adapt to the child’s age and level rather than being fixed by year group."
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
            title="What happens in a foreign language class?"
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
            title="Foreign language activities for kids"
            lead="The activity types used to keep vocabulary repeating without it feeling like drill."
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
            lead="We share these directly so what you get is current and specific to the language your child wants."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Which languages run</h3>
              <p className="kv">Ask before you plan</p>
              <ul>
                <li>Batches open when four children form at a similar level</li>
                <li>Usually one or two languages running at a time</li>
                <li>Two-term beginner course, roughly 48 sessions</li>
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
              <h3>Fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on the language, age group and format</li>
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
            <h2>Book a free foreign language trial</h2>
            <p>
              Tell us which language interests your child and we will confirm what is currently running,
              then arrange a session so they can try it before you decide anything.
            </p>
            <ul className="pill-row">
              <li>Your child hears and says their first words</li>
              <li>We see how they take to an unfamiliar sound system</li>
              <li>You get an honest answer on availability</li>
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
            <TrialForm program="Foreign Languages" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support a new language at home"
            lead="Eight things that work even if you do not speak the language yourself."
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
            <h2>Foreign language classes for kids in Hyderabad</h2>
            <p>
              Most children here already move between two or three languages before they meet a foreign
              one, which is a real advantage: they are used to the idea that the same thing has different
              names, and they are less self-conscious about an accent than an adult would be.
            </p>
            <p>
              What they usually have not met is a language nobody around them speaks. That changes the
              teaching — everything has to be heard in class, because nothing is heard outside it.
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
              Tell us your child’s age and which language interests them, and we will confirm what is
              currently available.
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
            lead="Hindi and Telugu are taught as their own programmes rather than as foreign languages, because most children here already hear them."
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
            title="Foreign languages for kids: quick answers"
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
