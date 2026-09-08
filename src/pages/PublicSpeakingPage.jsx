import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import {
  SectionHead,
  QuickAnswer,
  Curriculum,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { NumberedRows, PickSteps, TrickCard } from '../components/ProgramBits.jsx';

/* The public speaking programme page.
 *
 * Ported from the standalone public-speaking-classes-for-kids-in-hyderabad
 * build. The route, the SEO record, the five-stage curriculum and the FAQ set
 * stay in data/infoPages.js; this component supplies the body.
 *
 * The source's most valuable paragraph is the one that says what these classes
 * are not: they do not treat shyness, anxiety or a communication difficulty,
 * and a quiet child does not become an outgoing one. It is kept word for word.
 * Every competitor page in this category promises confidence, and a parent
 * whose child is genuinely struggling deserves to be pointed at a professional
 * rather than sold a weekly class.
 *
 * Its self-introduction form becomes a template a family can read aloud, and
 * its topic picker becomes the shared PickSteps — pick a topic, get the three
 * prompts, give the child a minute to think.
 */

const TALK_STEPS = [
  <>
    Start with a <strong>greeting</strong>. “Good morning, everyone.”
  </>,
  <>
    Say your <strong>topic</strong>. “Today I will talk about my dog.”
  </>,
  <>
    Share <strong>two or three ideas</strong>, with one example each.
  </>,
  <>
    Finish with <strong>thank you</strong>. That is a complete talk, at any age.
  </>,
];

const TRUST = [
  { title: 'Speaking practice', text: 'Every child speaks in every session, not once a month.' },
  { title: 'Storytelling', text: 'Beginning, middle and ending — a natural order to speak in.' },
  { title: 'Presentation skills', text: 'A simple six-part structure children can use for any topic.' },
  { title: 'Communication', text: 'Asking, answering and listening — both sides of a conversation.' },
  { title: 'Confidence practice', text: 'Small steps first: a pair, then a group, then the whole class.' },
];

const EVERYDAY_MOMENTS = [
  'Introducing yourself to a new group',
  'Telling a story to the class',
  'Talking about your favourite book',
  'Giving a short presentation at school',
  'Answering a question in front of others',
  'Speaking up in a group discussion',
];

const PRACTICE_GIVES = [
  'A structure to fall back on when their mind goes blank',
  'Experience of having spoken and survived it',
  'Habits like looking up and speaking loudly enough',
  'The words to explain what they actually mean',
];

const WILL_NOT_CLAIM = [
  'That these classes guarantee confidence or fluency',
  'That a quiet child will become an outgoing one',
  'That public speaking treats shyness, anxiety or any communication difficulty — that is a conversation for a professional, not a learning centre',
  'That progress follows a fixed timeline',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Most children find speaking hard for one reason: they do not know what to say next. Give them a structure — greeting, topic, ideas, thank you — and the hardest part disappears. What is left is practice.',
  },
  {
    tag: 'Easy example',
    text: '“Good morning. Today I will talk about my dog. His name is Bruno. He likes running. Thank you.” That is a complete talk, and a six-year-old can give it.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Children speak in pairs before they speak to a group, and to a group before the whole class. Nobody is put on the spot, and nobody waits three weeks for a turn.',
  },
];

const WHY_LEARN = [
  { title: 'Clear speaking', text: 'Speaking slowly enough and loudly enough to be understood, which is a habit rather than a talent.' },
  { title: 'Idea expression', text: 'Getting from a thought in the head to a sentence someone else understands — harder than it sounds.' },
  { title: 'Presentation practice', text: 'Using a structure so a child is never standing there wondering what comes next.' },
  { title: 'Listening', text: 'Speaking is half a conversation. Children practise listening properly and responding to what was actually said.' },
  { title: 'Vocabulary', text: 'New words are given when a child needs them to say something, which is when they stick best.' },
  { title: 'Storytelling', text: 'Stories give children something to say and a natural order to say it in, which is why so much starts here.' },
  { title: 'Body language', text: 'Where to stand, where to look, what to do with your hands — practical habits, taught simply.' },
  { title: 'Communication practice', text: 'Asking, answering, explaining and disagreeing politely, all practised in a small group.' },
  { title: 'Speaking confidence', text: 'Confidence here means having done it before. That comes from repetition, not from being told to be confident.' },
];

const BUILDS = [
  { icon: '💬', title: 'Clear communication', text: 'Saying what you mean in a way the listener actually follows, first time.' },
  { icon: '🎤', title: 'Speaking practice', text: 'Regular time on their feet, because speaking improves through doing rather than watching.' },
  { icon: '💡', title: 'Idea expression', text: 'Turning a half-formed thought into a sentence that makes sense out loud.' },
  { icon: '📋', title: 'Presentation skills', text: 'A repeatable structure children can apply to any topic they are given.' },
  { icon: '📖', title: 'Storytelling', text: 'Beginning, middle and ending — the simplest way to organise anything you say.' },
  { icon: '🗂️', title: 'Vocabulary building', text: 'Words learned at the moment a child needs them to express something.' },
  { icon: '👂', title: 'Listening skills', text: 'Hearing what was said well enough to respond to it, not just waiting to talk.' },
  { icon: '🧍', title: 'Body language', text: 'Standing steady, looking up, and keeping hands calm while speaking.' },
];

const TOPICS_COVERED = [
  'Self introduction',
  'Clear speaking',
  'Voice practice',
  'Pronunciation',
  'Vocabulary',
  'Storytelling',
  'Show and tell',
  'Presentation skills',
  'Body language',
  'Eye contact',
  'Question answering',
  'Group speaking',
  'Conversation',
  'Speech structure',
  'Idea organisation',
  'Listening skills',
];

const LEVELS = [
  {
    title: 'Speaking basics',
    text: 'Self introduction, simple sentences, voice practice, vocabulary and speaking games. The aim here is simply that a child has spoken out loud and it went fine.',
    example: 'Saying your name and one thing you like, to a partner first.',
    skill: 'Speaking aloud without freezing.',
  },
  {
    title: 'Expression',
    text: 'Storytelling, show and tell, describing pictures, sharing ideas and question-answer practice. Children move from single sentences to saying several things in a sensible order.',
    example: 'Describing a picture for thirty seconds without stopping.',
    skill: 'Keeping going, and organising ideas as you speak.',
  },
  {
    title: 'Presentation',
    text: 'Presentation structure, openings and closings, speaking clearly, body language and eye contact. This is where a talk starts to look like a talk.',
    example: 'A two-minute presentation using the six-part structure.',
    skill: 'Delivering a structured talk to a group.',
  },
  {
    title: 'Advanced speaking',
    text: 'Short speeches, group discussions, impromptu speaking and structured communication. Children speak on topics they have not prepared, which is the real test.',
    example: 'One minute on a topic drawn at random, with sixty seconds to think.',
    skill: 'Thinking and speaking at the same time.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 5–7',
    title: 'First words out loud',
    chips: ['Self introduction', 'Simple speaking', 'Picture talk', 'Rhymes', 'Show and tell'],
  },
  {
    kv: 'Ages 8–10',
    title: 'Topics & stories',
    chips: ['Storytelling', 'Speaking on topics', 'Vocabulary', 'Presentations', 'Question-answer'],
  },
  {
    kv: 'Ages 11–13',
    title: 'Structure & discussion',
    chips: ['Structured speaking', 'Presentations', 'Group discussions', 'Speech practice'],
  },
  {
    kv: 'Ages 14+',
    title: 'Advanced communication',
    chips: ['Advanced presentations', 'Impromptu speaking', 'Group discussions', 'Speech structure'],
  },
];

const TOPIC_PICKS = [
  {
    key: 'animal',
    label: '🐶 My favourite animal',
    rule: 'Give your child a minute to think, then let them talk.',
    steps: [
      'Which animal do you like most, and what does it look like?',
      'Where does it live, and what does it eat?',
      'Would you like one at home? Say why or why not.',
    ],
  },
  {
    key: 'family',
    label: '👪 My family',
    rule: 'Give your child a minute to think, then let them talk.',
    steps: [
      'Who is in your family? Name them one by one.',
      'What do you all do together at the weekend?',
      'Tell us one funny thing that happened at home.',
    ],
  },
  {
    key: 'school',
    label: '🏫 My school',
    rule: 'Give your child a minute to think, then let them talk.',
    steps: [
      'What is the name of your school and which class are you in?',
      'Which subject do you enjoy most, and why?',
      'Describe one thing you like about your classroom.',
    ],
  },
  {
    key: 'food',
    label: '🍽️ My favourite food',
    rule: 'Give your child a minute to think, then let them talk.',
    steps: [
      'What is your favourite food and who makes it?',
      'Describe how it tastes and smells.',
      'When do you usually eat it?',
    ],
  },
  {
    key: 'hobby',
    label: '⚽ My hobby',
    rule: 'Give your child a minute to think, then let them talk.',
    steps: [
      'What do you like doing in your free time?',
      'How did you start, and who taught you?',
      'What would you like to get better at?',
    ],
  },
  {
    key: 'day',
    label: '🌈 My favourite day',
    rule: 'Give your child a minute to think, then let them talk.',
    steps: [
      'Which day do you like best, and why?',
      'What happens on that day that makes it special?',
      'Describe one thing you always do.',
    ],
  },
];

const PROMPT_STEPS = ['Prompt one', 'Prompt two', 'Prompt three'];

const STORY_PARTS = [
  {
    tag: 'Part one',
    title: 'Beginning',
    text: 'Who is in the story, and where are they? Two sentences is plenty. “There was a boy called Arjun. He lived near a big garden.”',
  },
  {
    tag: 'Part two',
    title: 'Middle',
    text: 'Something happens, and it should be a problem. Stories without a problem stop being stories. “One day, he lost his ball in the garden.”',
  },
  {
    tag: 'Part three',
    title: 'Ending',
    text: 'How does it get sorted out? “A dog found the ball and brought it back. They became friends.”',
  },
];

const PRESENTATION_STEPS = [
  { title: 'Greeting', text: '“Good morning, everyone.” It buys a moment to settle and start steadily.' },
  { title: 'Topic introduction', text: '“Today I will talk about…” so the listener knows what is coming.' },
  { title: 'Main ideas', text: 'Two or three points, no more. A child who plans five will forget four.' },
  { title: 'Example', text: 'One real example makes the whole talk concrete and easier to remember.' },
  { title: 'Conclusion', text: '“So that is why I like…” — a single sentence that signals the end.' },
  { title: 'Thank you', text: 'A clear finish, so a child never trails off wondering whether they are done.' },
];

const BODY_LANGUAGE = [
  { title: 'Standing posture', text: 'Feet still, weight even, shoulders relaxed. Children often rock or sway, and simply noticing it is usually enough to stop.' },
  { title: 'Eye contact', text: 'Looking up at the group rather than the floor. Starting with one friendly face makes it much easier.' },
  { title: 'Facial expression', text: 'Letting your face match what you are saying. A smile at the start settles both speaker and listener.' },
  { title: 'Hand gestures', text: 'Hands calm and visible, used to show something now and then. Not fidgeting, and not stuck rigidly at the sides.' },
  { title: 'Speaking position', text: 'Facing the group and standing where everyone can see you — obvious to an adult, not to a child.' },
  { title: 'Listening posture', text: 'How to sit while someone else speaks. Being a good audience is part of the class, and children take turns at both.' },
];

const VOICE = [
  'Speaking slowly — nerves speed everyone up, so slow is the default to aim for',
  'Clear pronunciation — finishing the ends of words rather than swallowing them',
  'Voice volume — loud enough for the back of the room, no louder',
  'Pausing — a short pause instead of “umm”, which is the single most useful habit',
  'Sentence practice — saying a full sentence rather than trailing off',
  'Reading aloud — the easiest way to practise all of the above at once',
];

const SESSION_FLOW = [
  { title: 'Warm-up', text: 'A quick, easy speaking game so everyone has said something in the first two minutes.' },
  { title: 'Speaking activity', text: 'A short task in pairs, which is far less exposing than speaking to the whole group.' },
  { title: 'Vocabulary practice', text: 'A handful of words children will need for the day’s topic.' },
  { title: 'Story or topic talk', text: 'Each child speaks for a short time on a topic or story of their own.' },
  { title: 'Presentation practice', text: 'Using the six-part structure, with prompts available for anyone who needs them.' },
  { title: 'Group discussion', text: 'Taking turns, listening, and building on what someone else has said.' },
  { title: 'Feedback', text: 'One thing that went well and one thing to try next time. Never a list.' },
];

const ACTIVITIES = [
  'Show and tell',
  'Storytelling',
  'Picture description',
  'Role play',
  'Topic talk',
  'Question rounds',
  'Vocabulary games',
  'Group discussion',
  'Mini presentations',
  'Voice practice',
];

const HOME_SUPPORT = [
  { title: 'Let them talk about their day', text: 'The easiest daily practice there is, and it costs nothing.' },
  { title: 'Ask open questions', text: 'Anything that needs more than yes or no. “What was the best part?” beats “Was it good?”' },
  { title: 'Give thinking time', text: 'A few seconds of silence before answering is good practice, not hesitation.' },
  { title: 'Encourage storytelling', text: 'Ask for the story of something that happened, with a beginning, middle and end.' },
  { title: 'Do not correct mid-sentence', text: 'That is what stops children finishing. Wait, then mention one thing afterwards.' },
  { title: 'Let them order for themselves', text: 'At a shop or a restaurant. Real speaking, with a real listener.' },
  { title: 'Read aloud together', text: 'It practises volume, pace and pausing all at once, without feeling like practice.' },
  { title: 'Notice the effort', text: 'Praise the fact that they spoke, not how impressive it sounded.' },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '💬', title: 'Spoken English', text: 'The language itself — words and structures for ordinary conversation.', to: '/programs/spoken-english' },
  { icon: '🤝', title: 'Communication skills', text: 'Listening, explaining and handling a group conversation well.', to: '/programs/communication-skills' },
  { icon: '📖', title: 'English', text: 'Reading, writing, grammar and speaking together.', to: '/programs/english' },
  { icon: '🎭', title: 'Drama', text: 'Performance, character and stage presence.', to: '/programs/drama' },
  { icon: '🧠', title: 'Brain games', text: 'Reasoning, memory and puzzles away from the screen.', to: '/programs/brain-games' },
  { icon: '♟️', title: 'Chess', text: 'Planning, patience and thinking a few moves ahead.', to: '/programs/chess' },
];

const QUICK_ANSWERS = [
  {
    q: 'What is public speaking for children?',
    a: 'Speaking to a group and sharing an idea, story or presentation clearly. For a child it usually starts with something very ordinary — standing up and saying their own name so everyone can hear it.',
  },
  {
    q: 'My child is quiet. Will this help?',
    a: 'Sessions start with speaking to one partner rather than a room, and nobody is put on the spot. What practice reliably gives is experience of having spoken and survived it. It is not a treatment for shyness or anxiety.',
  },
  {
    q: 'What age should children start?',
    a: 'Often from around age five, starting with saying their name and one or two sentences. Activities adapt to the child’s communication level rather than their year group.',
  },
  {
    q: 'Why does a structure help so much?',
    a: 'Because the hardest part of speaking, for a child, is not knowing what comes next. Greeting, topic, ideas, thank you removes that pause — and what is left is practice.',
  },
  {
    q: 'How can parents help at home?',
    a: 'Ask open questions, give thinking time, encourage storytelling, and resist correcting mid-sentence. Short daily conversation helps more than formal practice.',
  },
  {
    q: 'What should I look for in a speaking class?',
    a: 'How much each child actually speaks, and how large the group is. A class where children take turns rarely gives enough practice. Ask what a quiet child does in the first few sessions.',
  },
];

export default function PublicSpeakingPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Public speaking classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children practise speaking clearly, expressing ideas and telling stories. Sessions cover
                presentations, voice and pronunciation, eye contact and body language — and every child
                speaks in every session rather than waiting their turn.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#curriculum" className="btn btn-outline">
                  See the stages
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
                  <span className="tick">★</span> Ages 5 and up
                </li>
              </ul>
            </div>
            <TrickCard
              label="Every talk has the same shape"
              sum="Hello · Topic · Idea · Thanks  ="
              answer="A whole talk"
              steps={TALK_STEPS}
              note="A structure means a child always knows what comes next."
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

      {/* ---------- What is public speaking ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is public speaking, for a child?"
            lead="Speaking to a group and sharing an idea, story or message clearly. It sounds formal, but for a child it usually starts with standing up and saying their own name so everyone can hear it."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>Public speaking for children covers everyday moments like these:</p>
              <ul className="pill-row">
                {EVERYDAY_MOMENTS.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p style={{ marginTop: 24 }}>
                None of these needs a stage or an audience of hundreds. They need a child who knows roughly
                what to say, and has said something similar enough times that it no longer feels strange.
              </p>
              <p>
                School asks children to present, answer aloud and read out work from quite an early age.
                Very few classrooms have time to teach them how.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>What practice can give a child</h2>
                <ul className="pill-row">
                  {PRACTICE_GIVES.map((g) => (
                    <li key={g}>{g}</li>
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

      {/* ---------- Self introduction ---------- */}
      <section className="band-soft" id="introduction">
        <div className="container">
          <SectionHead
            eyebrow="Where everyone starts"
            title="Learning to introduce yourself"
            lead="Almost every speaking task starts here. Four sentences, in the same order every time — this is the exact structure taught in the first sessions."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="panel">
              <h2>The template</h2>
              <p>
                “Hello everyone. My name is <strong>[name]</strong>. I am <strong>[age]</strong> years old.
                I study at <strong>[school]</strong>. I enjoy <strong>[something you like]</strong>. Thank
                you.”
              </p>
              <p className="note-line">
                Read it out loud together twice. The second time, ask your child to look up at you instead
                of at the page — that small change is most of what eye contact practice is.
              </p>
            </div>
            <div className="prose">
              <h2>Why it is the first thing taught</h2>
              <p>
                It is the speaking task a child will meet most often, and the one they can prepare
                completely. A child who has said these four sentences twenty times can say them in a new
                classroom without thinking about it.
              </p>
              <p>
                It also teaches the shape of everything that follows: a greeting, some content, and a clear
                finish. Every talk on this page is that same shape with more in the middle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids learn public speaking?"
            lead="Nine things practice works on, none of which is “being confident”."
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
            A note on expectations: how much a child gains depends on how often they take part and where
            they start. We do not promise confidence, fluency or particular school results — what we commit
            to is regular practice in a small, low-pressure group.
          </p>
        </div>
      </section>

      {/* ---------- What it builds ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What speaking practice builds"
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
            lead="Everything below is practised out loud, in a small group, with the easier things first."
          />
          <div className="skill-tiles">
            {TOPICS_COVERED.map((t) => (
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
            lead="A learning structure rather than an official level system or certification. Ask us for the current programme detail."
          />
          <NumberedRows items={LEVELS} badge="Level" />
        </div>
      </section>

      {/* ---------- Storytelling ---------- */}
      <section id="storytelling">
        <div className="container">
          <SectionHead
            eyebrow="Where speaking starts"
            title="Storytelling for kids"
            lead="Storytelling gives children something to say and a natural order to say it in. That is why so much speaking practice starts here rather than with a formal talk."
          />
          <div className="grid-3">
            {STORY_PARTS.map((s) => (
              <div className="card" key={s.title}>
                <p className="kv">{s.tag}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            A child who knows a story has three parts always knows what comes next, which removes the pause
            where speaking usually breaks down. At home: give a starter, give a minute to think, then let
            them tell it — and do not correct mid-story.
          </p>
        </div>
      </section>

      {/* ---------- Topic picker ---------- */}
      <section className="band-soft" id="pick-topic">
        <div className="container">
          <SectionHead
            eyebrow="Try it together"
            title="Pick a topic and speak"
            lead="Choose a topic and three prompts appear. Give your child a minute to think, then let them talk. This is exactly how topic talk runs in class."
          />
          <PickSteps
            title="Choose a topic"
            intro="Six topics children already know enough about to fill a minute — which is the point. Nobody speaks well on a subject they have nothing to say about."
            options={TOPIC_PICKS}
            stepTitles={PROMPT_STEPS}
            ruleLabel="How to run it"
            note="Three prompts is deliberate: enough to keep going, few enough to remember."
          />
        </div>
      </section>

      {/* ---------- Presentation structure ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The structure"
            title="Presentation skills for kids"
            lead="Six steps that work for any topic, at any age. Once a child has used this three or four times, they stop needing to think about it."
          />
          <div className="steps">
            {PRESENTATION_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Body language ---------- */}
      <section className="band-soft" id="body-language">
        <div className="container">
          <SectionHead
            eyebrow="How you stand"
            title="Body language for young speakers"
            lead="Practical habits, taught the same way as anything else — shown, tried and repeated. They are not a measure of a child’s personality."
          />
          <div className="grid-3">
            {BODY_LANGUAGE.map((b) => (
              <div className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Voice ---------- */}
      <section id="voice">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">How you sound</span>
            <h2>Speaking clearly</h2>
            <p>
              Most speaking problems in children are not about vocabulary. They are about speed and volume
              — talking too fast and too quietly to be followed.
            </p>
            <p>
              Both are fixable with practice, and both improve faster than anything else on this page. A
              child who slows down and speaks up sounds dramatically clearer within a few sessions.
            </p>
            <p>
              Practice can help children become clearer speakers. We would not guarantee fluency — that
              depends on far more than a weekly class.
            </p>
          </div>
          <div className="panel">
            <h2>What children practise</h2>
            <ul>
              {VOICE.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Public speaking by age group"
            lead="Suggested groupings. Activities adapt to the child’s age, communication level and learning needs."
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
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in a public speaking class?"
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
            title="Public speaking activities for kids"
            lead="The activity types used to keep practice varied and enjoyable."
          />
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Beginners ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Starting out</span>
            <h2>If your child is quiet</h2>
            <p>
              If your child is quiet around new people, that is normal and it is what most children are
              like at the start. Nobody is asked to stand up and give a speech on day one.
            </p>
            <p>
              Sessions begin very small. Saying your name. Answering one question. Speaking to one partner
              rather than a room. Only once that feels ordinary does the group get any bigger, and children
              are never put on the spot in front of others.
            </p>
            <p>
              Progress is not a straight line, and a child who spoke happily last week may go quiet this
              week. That is expected, and it is not treated as a problem.
            </p>
          </div>
          <div className="panel">
            <h2>Practical details</h2>
            <ul>
              <li>Classroom sessions at the centre, in small groups</li>
              <li>Weekday after-school and weekend batches — availability shifts as groups fill</li>
              <li>Fees depend on age group and format; nothing is due before the trial</li>
            </ul>
            <div className="btn-row">
              <a href={site.phoneHref} className="btn btn-primary">
                Call {site.phone}
              </a>
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section className="band-soft" id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free public speaking trial</h2>
            <p>
              Let your child try a speaking activity in a small group and see how they take to it. Tell us
              how they usually are around new people, so the activities are pitched at the right level.
            </p>
            <ul className="pill-row">
              <li>Your child tries a real speaking activity</li>
              <li>We see how they are in a small group</li>
              <li>You get a suggested starting point</li>
              <li>Options, timings and fees explained clearly</li>
              <li>No obligation to enrol afterwards</li>
            </ul>
            <p className="note-line">{formattedAddress()}</p>
          </div>
          <div className="trial-panel">
            <h2>Request your free trial</h2>
            <TrialForm program="Public Speaking" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support speaking at home"
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
            <h2>Public speaking classes for kids in Hyderabad</h2>
            <p>
              Schools here ask children to present, answer aloud and read work out from an early age, often
              in classes of forty. A child who is not confident doing that gets very little practice, and
              the gap widens quietly.
            </p>
            <p>
              A small group changes that arithmetic. Speaking three or four times in an hour, every week,
              is what turns speaking from an event into something ordinary.
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
            lead="Public speaking assumes the language is there and works on delivery. If the language itself is the gap, start with spoken English instead."
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
            title="Public speaking for kids: quick answers"
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
