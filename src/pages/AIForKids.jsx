import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site, address, formattedAddress, aiProgramFaqs } from '../data/site.js';
import {
  PageHero,
  QuickAnswer,
  Pillars,
  FaqList,
  QuickAnswers,
  CtaBand,
  MediaSplit,
  SectionHead,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';

/* The AI programme hub.
 *
 * Merged with the standalone ai-classes-for-kids-in-hyderabad build. That file
 * brought the explanatory material this page was missing — what AI actually is,
 * why it is worth a child's time, the projects, the parent's buying guide — plus
 * two interactive pieces worth keeping: the everyday-example walkthrough and the
 * topic tabs. Its own header, footer and Poppins-only type scale did not come
 * across; everything here inherits the site type roles from global.css.
 *
 * Where the two disagreed, this page keeps what the site already knows. The
 * source was written to be safe about a programme it could not see, so it says
 * "ask before enrolment" about the duration, the class format, the tools and
 * the age range — all of which are published facts here: 36 weeks, 72 sessions,
 * nine modules and a capstone, taught in person, Classes 6 to 10. Restating
 * those as open questions would have made the page vaguer than the one it
 * replaced. Its generic Beginner/Intermediate/Advanced ladder is left out for
 * the same reason: the real structure is five separate annual curricula, which
 * the class cards below link to.
 */

const classCards = [6, 7, 8, 9, 10].map((n) => ({
  n,
  blurb:
    n === 6
      ? 'Begins with safe exploration and study support.'
      : n <= 8
        ? 'Develops prompting, research and multimodal creation.'
        : 'Designs applied workflows and builds portfolio capstones.',
}));

/* ---------------------------------------------------------------------------
 * "What is AI?" — the same three steps, told through three things a child has
 * already used this week. Making the reader pick one is the point: the steps
 * are abstract until they are attached to something familiar.
 * ------------------------------------------------------------------------- */

const EVERYDAY_EXAMPLES = [
  {
    key: 'voice',
    label: 'Voice assistant',
    steps: [
      'It takes in the spoken question.',
      'It compares the question with examples it has already learned from.',
      'It answers the question.',
    ],
  },
  {
    key: 'video',
    label: 'Video app',
    steps: [
      'It takes in what you have watched and finished before.',
      'It looks for patterns across millions of other viewers.',
      'It suggests the next video to play.',
    ],
  },
  {
    key: 'maps',
    label: 'Maps',
    steps: [
      'It takes in where you are and where you want to go.',
      'It compares today’s traffic with the patterns it has seen on this road.',
      'It picks the route it expects to be fastest.',
    ],
  },
];

const STEP_TITLES = [
  'AI takes in information',
  'AI finds patterns',
  'AI gives a result',
];

function EverydayAiExplainer() {
  const [active, setActive] = useState(EVERYDAY_EXAMPLES[0].key);
  const example = EVERYDAY_EXAMPLES.find((e) => e.key === active);

  return (
    <div className="ai-explain">
      <div className="prose">
        <h3>What is Artificial Intelligence?</h3>
        <p>
          A phone can understand a spoken question. A video app can suggest what to watch next. A map
          can find a faster route. These are everyday examples of technology using AI to make sense of
          information and give back something useful.
        </p>
        <p>Tap an everyday example to see the same three steps at work.</p>
        <ul className="ai-pickbar" role="group" aria-label="Choose an everyday example">
          {EVERYDAY_EXAMPLES.map((e) => (
            <li key={e.key}>
              <button
                type="button"
                className="ai-pick"
                aria-pressed={active === e.key}
                onClick={() => setActive(e.key)}
              >
                {e.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="ai-stepstack" aria-live="polite">
        {example.steps.map((text, i) => (
          <div key={STEP_TITLES[i]}>
            <div className="ai-steprow">
              <span className="ai-stepnum" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <b>{STEP_TITLES[i]}</b>
                <p>{text}</p>
              </div>
            </div>
            {i < example.steps.length - 1 && (
              <p className="ai-arrow" aria-hidden="true">
                ↓
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Topics, as tabs. Seven short answers a parent skims rather than reads, so
 * they are stacked behind a tab strip instead of laid out as seven cards.
 * ------------------------------------------------------------------------- */

const TOPICS = [
  {
    key: 'basics',
    label: 'AI basics',
    title: 'AI basics',
    body: [
      'Children learn that AI uses information to find patterns and produce a result — and that it does not think or feel the way a person does. That distinction does more work than it sounds like it should: most of the confusion about AI, in children and adults, starts with treating it as a mind rather than a machine that predicts.',
    ],
  },
  {
    key: 'genai',
    label: 'Generative AI',
    title: 'Generative AI concepts',
    body: [
      'Generative AI creates text, images and other content from an instruction. Children learn how that differs from looking something up, and why generated content still has to be checked before it is used or handed in.',
    ],
  },
  {
    key: 'prompting',
    label: 'Prompting',
    title: 'Prompting',
    body: [
      'A prompt is the instruction given to an AI tool, and precision in it is a writing skill more than a technical one.',
    ],
    example:
      '“Write a short story” is broad. “Write a five-line story about a kind robot that helps a lost puppy” gives the tool something to work with — and the difference in the result is obvious to a ten-year-old.',
  },
  {
    key: 'tools',
    label: 'AI tools',
    title: 'AI tools',
    body: [
      'Students work with age-appropriate tools such as ChatGPT, Claude, image generators, ElevenLabs and HeyGen. What is taught is the workflow rather than the product, so the skill survives a tool being replaced — and specific tools do change as safer or more suitable options appear.',
    ],
  },
  {
    key: 'ml',
    label: 'Machine learning',
    title: 'Machine learning basics',
    body: [
      'Machine learning is a computer finding patterns from examples. Children meet the idea through activities they can do with their hands first — grouping pictures by colour or shape — before it is given a name.',
    ],
  },
  {
    key: 'responsible',
    label: 'Responsible AI',
    title: 'Responsible AI',
    body: [
      'Protecting personal information, checking answers, respecting other people’s work, and knowing when to ask an adult. These are practised under supervision throughout the year rather than covered once in a lesson on safety.',
    ],
  },
  {
    key: 'projects',
    label: 'Projects',
    title: 'Practical projects',
    body: [
      'Every module ends with something built. The child presents it aloud and explains what they did, what worked, and what they would change — which is where you find out whether they understood it or copied it.',
    ],
  },
];

function TopicTabs() {
  const [active, setActive] = useState(TOPICS[0].key);
  const topic = TOPICS.find((t) => t.key === active);

  /* Arrow keys move between tabs, which is what a screen reader user expects
     from a tablist and what the browser will not do on its own. */
  function onKeyDown(e) {
    const i = TOPICS.findIndex((t) => t.key === active);
    if (e.key === 'ArrowRight') setActive(TOPICS[(i + 1) % TOPICS.length].key);
    if (e.key === 'ArrowLeft') setActive(TOPICS[(i - 1 + TOPICS.length) % TOPICS.length].key);
  }

  return (
    <>
      <div className="ai-tabs" role="tablist" aria-label="AI topics for children" onKeyDown={onKeyDown}>
        {TOPICS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-controls={`panel-${t.key}`}
            aria-selected={active === t.key}
            tabIndex={active === t.key ? 0 : -1}
            className="ai-tab"
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        className="ai-tabpanel"
        role="tabpanel"
        id={`panel-${topic.key}`}
        aria-labelledby={`tab-${topic.key}`}
        tabIndex={0}
      >
        <h3>{topic.title}</h3>
        {topic.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {topic.example && (
          <p className="ai-eg">
            <b>Example:</b> {topic.example}
          </p>
        )}
      </div>
    </>
  );
}

/* ------------------------------- content ---------------------------------- */

const HIGHLIGHTS = [
  {
    icon: '☂️',
    title: 'Taught in person',
    text: 'At the centre near Nizampet X Roads, with the same educator every week.',
  },
  {
    icon: '📘',
    title: 'A curriculum per class',
    text: 'Five separate annual programmes, Classes 6 to 10 — not one course with the hard parts removed.',
  },
  {
    icon: '👥',
    title: 'Eight to a batch',
    text: 'Small enough that a child who has stopped following is visible the same session.',
  },
  {
    icon: '🧩',
    title: 'Something built each module',
    text: 'Nine modules, each ending in a project the child presents and can explain.',
  },
  {
    icon: '💬',
    title: 'You hear what happened',
    text: 'Topics covered, what your child understood, and where more practice would help.',
  },
];

const WHY_LEARN = [
  {
    icon: '🚀',
    title: 'Build future-ready skills',
    text: 'Tools keep changing. A child who knows how to ask questions and work something out can meet the next tool without being taught it.',
    eg: 'A child meets a new AI app. Instead of just using it, they ask what it does, what information it wants, and whether it is safe.',
  },
  {
    icon: '🪜',
    title: 'Practise problem-solving',
    text: 'AI work breaks a large task into smaller ordered steps, which is a habit that transfers well beyond the subject.',
    eg: 'To build a story, first the character, then the place, then the problem, then the ending.',
  },
  {
    icon: '✨',
    title: 'Grow creativity',
    text: 'A tool can offer options, but the child still chooses. Comparing ideas, improving them and adding their own is the part that stays theirs.',
    eg: 'A tool suggests three story titles. The child picks one, sharpens it, or writes a better one.',
  },
  {
    icon: '🔎',
    title: 'Improve critical thinking',
    text: 'AI is confidently wrong often enough that checking has to become reflex rather than an instruction.',
    eg: 'A surprising fact comes back. The child checks it against a book, a teacher or a source they trust.',
  },
  {
    icon: '💻',
    title: 'Understand digital tools',
    text: 'Knowing what a tool can do, what it cannot, and what should never be typed into it. That is the difference between using technology and being used by it.',
  },
  {
    icon: '🛡️',
    title: 'Use AI responsibly',
    text: 'Being honest, safe and fair with it: not sharing private information, not handing in work they do not understand, not using it to mislead someone.',
  },
];

const BENEFITS = [
  {
    icon: '🔗',
    title: 'Logical thinking',
    text: 'Putting ideas in order, and seeing how changing one instruction changes the result.',
    eg: 'The child alters a prompt and compares the two answers side by side.',
  },
  {
    icon: '🎨',
    title: 'Creativity',
    text: 'Exploring stories, images, questions and ideas — while learning that the final choice is still theirs to make.',
  },
  {
    icon: '💬',
    title: 'Communication',
    text: 'AI tools reward a clear instruction, so children get repeated practice at saying exactly what they mean.',
  },
  {
    icon: '🎯',
    title: 'Problem-solving',
    text: 'A project gives a goal. They try, see what needs to change, and improve it — which is the whole skill.',
  },
  {
    icon: '🧰',
    title: 'Confidence with technology',
    text: 'A tool you understand is less intimidating than one you do not. Children learn to explore carefully rather than click blindly.',
  },
  {
    icon: '🏗️',
    title: 'Project-based learning',
    text: 'Ideas turn into something that can be shown and talked about: a story plan, a chatbot design, an image activity, a solution to an ordinary problem.',
  },
];

const PROJECTS = [
  {
    icon: '📖',
    title: 'Create a better story prompt',
    does: 'Writes a prompt for a short story, reads what comes back, and rewrites the instruction to fix what was wrong.',
    learns: 'Clear communication, creativity, and the habit of checking generated content.',
  },
  {
    icon: '🤖',
    title: 'Plan a simple help bot',
    does: 'Picks a purpose — answering questions about a school club, say — and maps the questions it would need to handle.',
    learns: 'Logical thinking, conversation flow, problem-solving.',
  },
  {
    icon: '🖼️',
    title: 'Explore AI image ideas',
    does: 'Describes a safe picture idea with an approved tool and compares how different descriptions change the result.',
    learns: 'Descriptive writing, visual thinking, responsible content creation.',
  },
  {
    icon: '🔍',
    title: 'Check an AI answer',
    does: 'Asks a question, reads the answer, then verifies it against a source worth trusting.',
    learns: 'Fact-checking, digital awareness, critical thinking.',
  },
  {
    icon: '🗓️',
    title: 'Solve a daily-life problem',
    does: 'Takes something small and real — planning a study timetable — and tests different instructions against it.',
    learns: 'Breaking a problem into steps, comparing options, improving a result.',
  },
  {
    icon: '🗂️',
    title: 'Sort and find patterns',
    does: 'Groups objects or pictures by shape, size or colour, by hand, before the words are introduced.',
    learns: 'The ideas underneath data, examples and pattern recognition.',
  },
];

const HOW_IT_WORKS = [
  { title: 'Learn', text: 'One idea, in plain words, with an example the child already recognises.' },
  { title: 'Practise', text: 'A small guided activity, so the lesson becomes something they have done rather than heard.' },
  { title: 'Build', text: 'The idea gets used in a task or project at the right level for the class.' },
  { title: 'Present', text: 'The child explains what they made. This is where understanding and copying separate.' },
  { title: 'Improve', text: 'Feedback, a look at what could be better, and another attempt.' },
];

const TOOL_QUESTIONS = [
  { icon: '🎯', title: 'What the tool does', text: 'You should be able to understand what it is for and how it helps your child learn.' },
  { icon: '👥', title: 'Age suitability', text: 'A tool earns its place in a session only when it fits the class and the level.' },
  { icon: '🔒', title: 'Privacy', text: 'You should know what personal information must never be typed into it.' },
  { icon: '🔑', title: 'Accounts', text: 'Whether an activity needs an account, and whose it is.' },
  { icon: '🧑‍🏫', title: 'Guidance', text: 'How the activity is supervised while it is happening.' },
  { icon: '✅', title: 'Review', text: 'How your child’s work gets looked at and responded to.' },
];

const METHOD = [
  { title: 'Simple explanations', text: 'Ideas put in words a child of that age actually uses.' },
  { title: 'Hands-on activities', text: 'They try it rather than watch it being tried.' },
  { title: 'Age-suitable projects', text: 'Project work matched to the class, not to the marketing.' },
  { title: 'Guided learning', text: 'Support arrives during the activity, not after it has gone wrong.' },
  { title: 'Questions and discussion', text: 'Talking an idea through is how it gets understood.' },
  { title: 'Clear learning goals', text: 'You can tell what your child is learning and why.' },
];

const WHY_US = [
  { icon: '❤️', title: 'Kids-focused learning', text: 'AI explained in small steps, in words and examples children can hold on to.' },
  { icon: '🧱', title: 'Practical activities', text: 'Children use what they learn in the same session they learn it.' },
  { icon: '🚀', title: 'Future-ready skills', text: 'Problem-solving, creativity, communication, verification, and adapting to new tools.' },
  { icon: '👁️', title: 'Parent visibility', text: 'You are told what was covered and where your child needs work — not sent a certificate.' },
  { icon: '🛡️', title: 'Safe and responsible use', text: 'Privacy and fact-checking are practised habits, not a slide at the end of term.' },
  { icon: '💡', title: 'No jargon for its own sake', text: 'Difficult words are earned. A child who can only repeat “neural network” has not learned anything.' },
];

const MENTOR_LOOK_FOR = [
  'Simple explanations',
  'Patience with beginners',
  'Encouragement to ask questions',
  'Guidance during activities and projects',
  'Support with mistakes and improvements',
  'Attention to safe and responsible AI use',
];

const CLASS_FORMAT = [
  { icon: '🏫', title: 'In person', text: 'At the centre near Nizampet X Roads. This is deliberate — technique and disengagement are both visible in a room.' },
  { icon: '👥', title: 'Batch size', text: 'Eight children, so every child gets looked at in every session.' },
  { icon: '⏱️', title: 'Session length', text: 'Two one-hour sessions each week.' },
  { icon: '📆', title: 'Programme duration', text: '36 instructional weeks — 72 sessions across the academic year.' },
  { icon: '🧩', title: 'Structure', text: 'Nine modules of eight sessions, each ending in a project, plus a capstone.' },
  { icon: '💻', title: 'Devices', text: 'Provided at the centre. Nothing to buy before you start.' },
  { icon: '🕒', title: 'Batch timings', text: 'These change through the year as groups fill, so we confirm what is currently open when you enquire.' },
  { icon: '👨‍👩‍👧', title: 'Parent participation', text: 'Not required in sessions. You get a note on what was covered instead.' },
];

const FEE_CONFIRM = [
  'Total programme fee',
  'Payment options',
  'Programme duration',
  'Number of sessions',
  'What is included in the fee',
  'Any additional resource costs',
];

const DEMO_ASK_ABOUT = [
  'Which class your child would join',
  'The curriculum for that class',
  'The AI tools used, and how',
  'Batch timings currently open',
  'Fees for that programme',
  'Safety and privacy practices',
];

const PARENT_SUPPORT = [
  { icon: '📘', title: 'Topics covered', text: 'What was actually taught in the session.' },
  { icon: '🧱', title: 'Activities and projects', text: 'What your child completed.' },
  { icon: '✅', title: 'Understanding', text: 'What they took to easily.' },
  { icon: '🎯', title: 'Areas to improve', text: 'Where more practice would help.' },
  { icon: '🏠', title: 'Home learning', text: 'Simple ways to keep it going between sessions.' },
];

const OUTCOMES = [
  { title: 'Explain AI in simple words', text: 'Describe what it is without hiding behind technical language.' },
  { title: 'Identify common uses of AI', text: 'Recognise it in the things they already use every day.' },
  { title: 'Write clearer prompts', text: 'Give an instruction precise enough to get what they meant.' },
  { title: 'Check AI answers', text: 'Verify a result instead of trusting it on sight.' },
  { title: 'Protect personal information', text: 'Know what never goes into a tool.' },
  { title: 'Use AI tools responsibly', text: 'Honestly, safely, and without passing off work they do not understand.' },
  { title: 'Complete an AI project', text: 'Finish something and explain how they got there.' },
  { title: 'Solve problems step by step', text: 'Break a task down instead of stalling at the size of it.' },
  { title: 'Build technology confidence', text: 'Meet an unfamiliar tool without needing to be walked through it.' },
];

const CHOOSING_GUIDE = [
  { icon: '👥', title: 'Check age and learning suitability', text: 'Ask how lessons differ between school levels. A Class 6 child and a Class 10 child should not be in the same syllabus with the hard parts removed.' },
  { icon: '📘', title: 'Review the curriculum', text: 'Look for a path. Children should understand the basic ideas before being handed advanced tools.' },
  { icon: '🪜', title: 'Understand the teaching method', text: 'Ask how much of a session is explanation and how much is the child doing something. Watching is not learning.' },
  { icon: '🧩', title: 'Look at the projects', text: 'Ask what your child will build and which skill each project develops. Vague answers here usually mean vague projects.' },
  { icon: '💬', title: 'Ask about mentor quality', text: 'Knowing the subject and being able to explain it to a ten-year-old are different abilities. Ask how mentors handle questions and mistakes.' },
  { icon: '🔒', title: 'Check safety and privacy', text: 'Which tools, whether accounts are needed, and what happens to personal information.' },
  { icon: '👁️', title: 'Confirm parent communication', text: 'How you will hear about topics, projects, feedback and progress — and how often.' },
  { icon: '🔢', title: 'Ask about class size', text: 'It decides whether your child can ask a question. Confirm the number rather than assuming it.' },
  { icon: '🎯', title: 'Focus on real outcomes', text: 'Understanding AI, checking information, solving problems, finishing a project. Be wary of anyone promising careers, placements or app-building nine-year-olds.' },
  { icon: '✨', title: 'Attend a trial', text: 'The fastest way to find out whether the teacher, the language and the level suit your child.' },
];

const QUICK_ANSWERS = [
  {
    q: 'What are AI classes for kids in Hyderabad?',
    a: 'Classes that teach children what AI is, where it is used, and how to work with it through activities and projects — including privacy, fact-checking and responsible use.',
  },
  {
    q: 'What age can kids start learning AI?',
    a: 'The Brolly Juniors programme runs Classes 6 to 10. Reading level, computer comfort and interest matter more than age alone.',
  },
  {
    q: 'Is coding required to learn AI?',
    a: 'No. Children start with everyday examples, prompting and research. Coding is a separate programme and not a prerequisite.',
  },
  {
    q: 'What do kids learn in AI classes?',
    a: 'AI basics, generative AI, prompting, machine learning fundamentals, research and verification, ethics, and a capstone project.',
  },
  {
    q: 'Is AI safe for children?',
    a: 'It is safer with age-appropriate tools, adult supervision, and the habits taught explicitly: protect information, check results, ask when unsure.',
  },
  {
    q: 'What projects can kids build?',
    a: 'Story prompts, a help-bot plan, image idea activities, fact-checking tasks, pattern activities, and everyday problem-solving projects.',
  },
  {
    q: 'Online or in person?',
    a: 'In person, at the centre at Nizampet X Roads. With eight children in a room, disengagement shows up the same session.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, one per new family. Your child sits in a real session before you decide anything.',
  },
];

const NEAR_ME = [
  { icon: '📍', title: 'Tell us your locality', text: 'Say which part of Hyderabad you are in and we will tell you honestly whether the travel is workable.' },
  { icon: '🕒', title: 'Ask about timings', text: 'Batches change through the year. We will tell you which are currently open for your child’s class.' },
  { icon: '✨', title: 'Start with a trial', text: 'The simplest way to check whether the class suits your child before committing.' },
];

const RELATED = [
  { icon: '🐍', title: 'Python & coding', text: 'Step-by-step instructions to a computer — the natural companion to AI.', to: '/python-for-kids' },
  { icon: '🤖', title: 'Robotics', text: 'Hands-on building and problem-solving through guided activities.', to: '/programs/robotics' },
  { icon: '♟️', title: 'Chess', text: 'Planning, patience and thinking a few steps ahead.', to: '/programs/chess' },
  { icon: '➗', title: 'Vedic maths', text: 'Faster mental calculation through pattern-based techniques.', to: '/junior-skills/vedic-maths' },
  { icon: '🧮', title: 'Abacus', text: 'Focus, working memory and number confidence on the bead frame.', to: '/junior-skills/abacus' },
  { icon: '📚', title: 'School tuitions', text: 'Academic support alongside the skill programmes.', to: '/tuitions' },
];

export default function AIForKids() {
  return (
    <>
      <PageHero
        eyebrow="AI for Kids · Classes 6–10"
        title="AI classes for kids in Hyderabad that grow with your child."
        subtitle="Children learn how smart technology actually works: what to ask it, how to check what comes back, and how to build something with it. Five separate annual curricula, taught in person, with safety built into the year rather than bolted on."
        image="/images/ai.svg"
        imageAlt="A friendly AI robot beside a chat window and an idea spark"
        chips={[
          { strong: '36 weeks', span: 'Duration' },
          { strong: '72 sessions', span: 'Per class' },
          { strong: 'No coding', span: 'Needed to begin' },
          { strong: 'Responsible AI', span: 'Focus throughout' },
        ]}
      >
        <div className="btn-row">
          <Link to="/book-free-demo" className="btn btn-primary">
            Book a free trial
          </Link>
          <a href="#what-is-ai" className="btn btn-outline">
            Explore the programme
          </a>
        </div>
        <ul className="tick-row">
          <li>
            <span className="tick">★</span> Beginner friendly
          </li>
          <li>
            <span className="tick">★</span> Practical projects
          </li>
          <li>
            <span className="tick">★</span> Safe, guided AI use
          </li>
          <li>
            <span className="tick">★</span> Progress updates for parents
          </li>
        </ul>
      </PageHero>

      {/* ---------- What parents should know first ---------- */}
      <section className="stats-band section-tight">
        <div className="container">
          <div className="center" style={{ marginBottom: 28 }}>
            <h2 className="section-title">What parents should know first</h2>
            <p className="section-lead">
              How AI learning is set up here, and what that means for your child.
            </p>
          </div>
          <div className="ab-statbar">
            {HIGHLIGHTS.map((h) => (
              <div className="stat" key={h.title}>
                <b>
                  <span aria-hidden="true">{h.icon}</span> {h.title}
                </b>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors runs AI classes for kids in Hyderabad from Class 6 to Class 10, teaching artificial intelligence as practical literacy rather than a collection of shortcuts. Each class receives its own 36-week, 72-session curriculum with nine modules and a capstone project. No programming is required to begin." />
        </div>
      </section>

      {/* ---------- What are AI classes? ---------- */}
      <section id="what-is-ai">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What are AI classes for kids?"
            lead="Artificial intelligence is technology that learns from information and uses it to do something useful. That is the whole idea — everything else is detail."
          />
          <EverydayAiExplainer />

          <div className="split" style={{ marginTop: 48 }}>
            <div className="prose">
              <p>
                AI classes explain those ideas in a way a child can act on. They sort pictures, compare
                two answers to the same question, give a tool a clear instruction, and argue about
                whether what came back is actually right. The ideas stay attached to something they
                can see and try.
              </p>
              <p>
                None of it needs technical knowledge to begin. Children first learn what AI is, where
                it shows up, and how to use it safely — coding and deeper concepts arrive later, when
                they are useful rather than impressive.
              </p>
              <ul className="flow-strip">
                <li>
                  <span>Learn what AI does</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Try it</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Ask questions</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Create something</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Use it responsibly</span>
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>Age-appropriate matters more than fast</h2>
              <p>
                A Class 6 child and a Class 10 child can both learn AI, but they need different
                examples, different session lengths and different amounts of guided repetition. That
                is why there are five curricula here rather than one — and why children are placed by
                what they can already do, not only by how old they are.
              </p>
              <ul className="pill-row">
                <li>Curiosity</li>
                <li>Creativity</li>
                <li>Communication</li>
                <li>Problem-solving</li>
                <li>Responsible technology use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why should kids learn AI ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="The reason it matters"
            title="Why should kids learn AI?"
            lead="The goal is not to make every child an AI expert. It is to help them think clearly, create responsibly, solve problems and make better choices in a world where this technology is already in their hands."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                {c.eg && (
                  <p className="ai-eg">
                    <b>Easy example:</b> {c.eg}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="What it builds"
            title="Benefits of AI classes for kids"
            lead="The skills a child keeps after the tools have changed."
          />
          <div className="grid-3">
            {BENEFITS.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                {c.eg && (
                  <p className="ai-eg">
                    <b>Easy example:</b> {c.eg}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What will kids learn (tabs) ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Topics covered"
            title="What will kids learn?"
            lead="Seven strands, taught at the depth the class is ready for. Pick one to see what it means in practice."
          />
          <TopicTabs />
        </div>
      </section>

      {/* ---------- The real curriculum ---------- */}
      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/methodology.svg"
            imageAlt="A four-step learning cycle: explain, practise, create, reflect"
            caption="9 modules × 8 sessions"
            reverse
          >
            <h2>What the curriculum covers</h2>
            <p>
              Every module runs the same cycle—explain, practise, create, reflect—so students always
              finish with something they built and can talk about.
            </p>
            <ul>
              <li>Prompting and communication</li>
              <li>Research and verification</li>
              <li>Images, audio and video</li>
              <li>Privacy, bias and ethics</li>
            </ul>
            <p>
              Students work with ChatGPT, Claude, image generation tools, ElevenLabs, HeyGen and other
              age-appropriate platforms. Specific tools may change as safer or more suitable options
              become available.
            </p>
          </MediaSplit>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <SectionHead
            eyebrow="Class-wise pathways"
            title="A distinct annual curriculum for every class"
            lead="Not one course delivered five times. Each year has its own nine modules, its own projects and its own capstone."
          />
          <div className="grid-3">
            {classCards.map((c) => (
              <Link to={`/ai-for-kids/class-${c.n}`} className="card" key={c.n}>
                <span className="icon">🤖</span>
                <h3>AI Course · Class {c.n}</h3>
                <p>{c.blurb}</p>
                <div className="card-meta">
                  <span className="tag">36 weeks</span>
                  <span className="tag">72 sessions</span>
                  <span className="tag teal">9 modules + capstone</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Starting point"
            title="Age groups and learning levels"
            lead="No prior coding is needed to start. What decides the right starting point is not the birthday — it is what the child can already do."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Younger students begin with stories, images, sorting activities and simple questions.
                Students ready for more move sooner into structured projects and the introductory
                technical concepts.
              </p>
              <p>
                There is no single starting age that is right for every child. Worth weighing:
                interest, reading level, comfort with a computer, and whether they can follow a
                multi-step instruction without losing the thread.
              </p>
              <p>
                The free trial class is where this gets settled. Your child sits in a real session and
                we tell you which class curriculum fits — including if the answer is &ldquo;not
                yet&rdquo;.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Find the right starting point
                </Link>
              </div>
            </div>
            <div className="grid-2">
              <div className="card">
                <span className="icon">🎓</span>
                <h3>Age and school level</h3>
                <p>Lessons should match the class your child is actually in.</p>
              </div>
              <div className="card">
                <span className="icon">📖</span>
                <h3>Reading level</h3>
                <p>Comfort with reading shapes how prompting and research get taught.</p>
              </div>
              <div className="card">
                <span className="icon">❤️</span>
                <h3>Interest</h3>
                <p>Curiosity about technology is what keeps a child in the activity.</p>
              </div>
              <div className="card">
                <span className="icon">🖥️</span>
                <h3>Computer comfort</h3>
                <p>Basic familiarity makes the guided practice go faster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Learning by doing"
            title="AI projects for kids"
            lead="Children learn this by building with it. Try an idea, look at the result, ask why, make it better."
          />
          <div className="grid-3">
            {PROJECTS.map((p) => (
              <div className="card" key={p.title}>
                <span className="icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>
                  <span className="kv">What the child does</span>
                  {p.does}
                </p>
                <p>
                  <span className="kv">What the child learns</span>
                  {p.learns}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How classes work ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The learning flow"
            title="How Brolly Juniors AI classes work"
            lead="Learn → Practise → Build → Present → Improve. Every module, all year."
          />
          <div className="steps">
            {HOW_IT_WORKS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Tools ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Safety first"
            title="Tools and technologies"
            lead="Tools are chosen for the class, the learning goal and the safety question — not to be able to list as many as possible. Here is what you are entitled to ask about any of them."
          />
          <div className="grid-3">
            {TOOL_QUESTIONS.map((t) => (
              <div className="card" key={t.title}>
                <span className="icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="quick-answer" style={{ marginTop: 36 }}>
            <h2>Technology supports the learning</h2>
            <p>
              A session is not better for having used four tools instead of one. Which tools your
              child will use is confirmed with you before enrolment, and changes are told to you
              rather than discovered.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Learning method ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            title="Learning method"
            lead="A short explanation, an activity, a small project, and clear feedback. Children understand this subject by taking part in it."
          />
          <ul className="flow-strip" style={{ justifyContent: 'center', marginBottom: 36 }}>
            <li>
              <span>Explain</span> <b aria-hidden="true">→</b>
            </li>
            <li>
              <span>Try</span> <b aria-hidden="true">→</b>
            </li>
            <li>
              <span>Create</span> <b aria-hidden="true">→</b>
            </li>
            <li>
              <span>Ask</span> <b aria-hidden="true">→</b>
            </li>
            <li>
              <span>Improve</span>
            </li>
          </ul>
          <div className="grid-3">
            {METHOD.map((m) => (
              <div className="card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section>
        <div className="container">
          <SectionHead
            title="Why choose Brolly Juniors?"
            lead="An AI class should help a child understand, practise and use technology responsibly. Everything below follows from that."
          />
          <div className="grid-3">
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

      {/* The trust argument, stated rather than implied. The national names in
          this category damaged parents' confidence badly enough that "calm
          competence" is now a differentiator — see BRAND_BRIEF.md. Parents
          searching this term are sceptical, and pretending otherwise reads as
          more of the same. */}
      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>Why parents are wary — and fairly so</h2>
            <p>
              Children&apos;s technology education in India spent several years being sold with
              celebrity advertising, scripted teachers and promises about app-building nine-year-olds.
              A lot of families paid for that and got very little.
            </p>
            <p>
              We will not claim your child will build a startup. What a year here produces is a child
              who can prompt precisely, check whether an answer is actually true, and explain what they
              made and why. Those are the parts that keep working when the tools change.
            </p>
          </div>
          <div className="prose">
            <h2>What in-person actually changes</h2>
            <ul>
              <li>Eight children in a room — disengagement shows up the same session, not in month four</li>
              <li>The same educator every week, who knows your child</li>
              <li>Safety habits practised under supervision rather than described in a video</li>
              <li>A project presented aloud at the end of every module</li>
            </ul>
            <p>
              Read our guide on{' '}
              <Link to="/resources/teach-kids-to-use-chatgpt-safely">
                teaching children to use AI tools safely
              </Link>{' '}
              — it is the same material we cover in class, free and without an email wall.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Mentors ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Mentors"
            title="Trainers and mentors"
            lead="A good mentor makes a hard idea easy. For children that means listening, explaining with familiar examples, welcoming questions, and treating a mistake as the useful part of the session."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                For AI specifically, a mentor also has to guide children on online safety, privacy,
                fact-checking and responsible use — because those come up in the middle of an
                activity, not on a scheduled day.
              </p>
              <p>
                Ask us how sessions are guided, how a child gets help when they are stuck, and how
                project feedback is given. The aim is a room where children can ask, try and improve
                without worrying about getting it wrong.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Meet your child&rsquo;s mentor
                </Link>
              </div>
            </div>
            <div className="panel">
              <h2>What parents can look for</h2>
              <ul className="pill-row">
                {MENTOR_LOOK_FOR.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="note-line">
                You meet the educator who would actually teach your child at the trial class — not a
                counsellor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Class format ---------- */}
      <section>
        <div className="container">
          <SectionHead
            title="Class format"
            lead="What the year looks like in practice."
          />
          <div className="grid-4">
            {CLASS_FORMAT.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Fees ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Fees"
            title="AI classes fees"
            lead="The fee depends on the class, the duration enrolled for and what is included, so a single number would be misleading. Tell us your child’s class and we will send the current fee for exactly that."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Nothing is payable before the free trial. You see the session, meet the educator and
                get the class placement first, then decide.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Enquire about fees
                </Link>
                <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </div>
            </div>
            <div className="panel">
              <h2>What to confirm before you pay</h2>
              <ul className="pill-row">
                {FEE_CONFIRM.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section id="demo">
        <div className="container split">
          <div className="prose">
            <h2>Book a free trial class</h2>
            <p>
              A trial is how a parent and a child both find out whether this fits. Your child sees how
              one AI idea gets explained and tries a small activity. You watch whether the explanation
              lands, whether your child is comfortable, and how questions get handled.
            </p>
            <h3>Worth asking while you are there</h3>
            <ul className="pill-row">
              {DEMO_ASK_ABOUT.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Talk to a learning advisor
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
          </div>
          <div className="trial-panel">
            <h2>Request your free trial</h2>
            <TrialForm program="Artificial Intelligence" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Parent support and progress"
            lead="You should be able to tell what your child is learning, what they are building, and where they need more practice — without having to ask."
          />
          <div className="ab-statbar">
            {PARENT_SUPPORT.map((p) => (
              <div className="stat" key={p.title}>
                <b>
                  <span aria-hidden="true">{p.icon}</span> {p.title}
                </b>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            The goal is not only to teach a child AI. It is for you to be able to see the learning
            happening.
          </p>
        </div>
      </section>

      {/* ---------- Outcomes ---------- */}
      <section>
        <div className="container">
          <SectionHead
            title="Student outcomes"
            lead="After a year of the programme, a child should be able to do these things — and show you."
          />
          <div className="grid-3">
            {OUTCOMES.map((o) => (
              <div className="card" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
          <div className="quick-answer" style={{ marginTop: 36 }}>
            <h2>Outcomes vary, and we will not pretend otherwise</h2>
            <p>
              Every child learns at a different pace, and results depend on age, interest, level,
              practice and participation. These are learning goals, not promises about marks, jobs,
              placements or future careers. What we are aiming at is a child who understands AI
              clearly enough to keep learning about it without us.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Choosing guide ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Parent guide"
            title="How to choose the right AI class for your child"
            lead="Useful whether or not you choose us. Ten questions worth asking any provider before you pay."
          />
          <div className="grid-3">
            {CHOOSING_GUIDE.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList
        items={aiProgramFaqs}
        title="Frequently asked questions about AI classes for kids in Hyderabad"
      />

      {/* ---------- Quick answers ---------- */}
      <QuickAnswers
        items={QUICK_ANSWERS}
        faqs={aiProgramFaqs}
        title="AI classes for kids — quick answers"
        lead="Short, direct answers to what parents ask most often."
      />

      {/* ---------- Hyderabad ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Hyderabad, Telangana"
            title="AI learning for families in Hyderabad"
            lead="Children across Hyderabad already use this technology every day — search suggestions, voice assistants, video recommendations, creative tools. These classes give those everyday experiences an explanation."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                The Brolly Juniors centre is at Nizampet X Roads. Families across the north-west of
                the city travel in; if that is difficult from where you are, tell us and we will say
                honestly whether it is workable rather than sell you a commute.
              </p>
              <div className="btn-row">
                <a href={site.phoneHref} className="btn btn-primary">
                  Call {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="btn btn-outline">
                  Email us
                </a>
              </div>
            </div>
            <div className="panel">
              <h2>Visit us</h2>
              <p>{formattedAddress()}</p>
              <p>{address.landmarks}.</p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn-outline">
                  Directions &amp; contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Near me ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            title="Looking for AI classes for kids near me?"
            lead="Parents searching nearby want to know two things: whether it is close enough to attend, and whether it suits their child."
          />
          <div className="grid-3">
            {NEAR_ME.map((n) => (
              <div className="card" key={n.title}>
                <span className="icon">{n.icon}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="What comes next"
            title="Explore more kids learning programs"
            lead="Children who take to AI often enjoy these too."
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

      <CtaBand variant="family" />
    </>
  );
}
