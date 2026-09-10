import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
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
import { NumberedRows, PickSteps } from '../components/ProgramBits.jsx';

/* The communication skills programme page.
 *
 * Ported from the standalone communication-skills-classes-for-kids-in-hyderabad
 * build. The route, the SEO record, the four-module curriculum and the FAQ set
 * stay in data/catalog/programmes.js; this component supplies the body.
 *
 * The source's clearest idea, and the one this page is built around: good
 * communication is speaking plus listening, and listening is the half almost
 * every class in this category leaves out. The most common problem in children
 * is not shyness — it is answering a question that was not asked, because they
 * heard the first three words and filled in the rest.
 *
 * Four programmes here answer searches a parent cannot tell apart, so the page
 * opens by saying which is which and linking to the other three.
 */

const TRUST = [
  { title: 'Two-way practice', text: 'Listening and responding, not speaking into the air.' },
  { title: 'Conversation', text: 'Keeping an exchange going past the first answer.' },
  { title: 'Idea expression', text: 'A thought, a sentence, and a reason attached to it.' },
  { title: 'Group work', text: 'Taking a turn, and making room for someone quieter.' },
  { title: 'Body language', text: 'What posture and tone say before the words do.' },
];

const WHICH_CLASS = [
  {
    title: 'Communication skills',
    kv: 'This page — two-way',
    text: 'Listening, responding, taking turns, asking back. For a child who talks plenty but does not answer the actual question, or who goes quiet in a group.',
    to: null,
  },
  {
    title: 'Spoken English',
    kv: 'The language itself',
    text: 'For a child who understands English but does not speak it much. Everyday vocabulary and conversation.',
    to: '/programs/spoken-english',
  },
  {
    title: 'Public speaking',
    kv: 'One to many',
    text: 'Presenting to an audience — structure, delivery, eye contact. For a child who talks freely but freezes in front of the class.',
    to: '/junior-skills/public-speaking',
  },
  {
    title: 'English classes',
    kv: 'The school subject',
    text: 'Reading, writing, spelling, grammar and comprehension. For a child who struggles with written work.',
    to: '/programs/english',
  },
];

const SEVEN_THINGS = [
  'Share their thoughts',
  'Listen to others',
  'Ask questions',
  'Answer clearly',
  'Talk about ideas',
  'Take part in conversations',
  'Understand simple social situations',
];

const GOOD_LOOKS_LIKE = [
  'The child answers the question that was asked',
  'They give a reason, not just a statement',
  'They wait for the other person to finish',
  'They ask something back',
];

const WILL_NOT_CLAIM = [
  'That these classes guarantee confidence or communication improvement',
  'That a quiet child will become an outgoing one',
  'That they treat anxiety, shyness, speech difficulties or any developmental condition — that is a conversation for a professional, not a learning centre',
  'That progress is fast or follows a fixed timeline',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Communication skills are what a child uses to share what they think and understand what someone else means. Speaking is the half everyone notices; listening is the half that decides whether the conversation works.',
  },
  {
    tag: 'Easy example',
    text: '“I like drawing because I enjoy making pictures.” That is an idea expressed clearly — what they like, and why. Most children stop after the first part, and adding the second is one of the earliest things practised here.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Every module ends in a task the child can only complete if the skill is real — teaching a peer something new, running a group to a deadline, or reaching agreement in a structured disagreement. You cannot fake having listened.',
  },
];

const LISTENING_STEPS = [
  { title: 'Look at the speaker', text: 'Not staring — just facing them, so they know you are there.' },
  { title: 'Listen carefully', text: 'To the whole sentence, not just the first few words.' },
  { title: 'Wait for your turn', text: 'Let the other person finish before you begin. Most children need practice at this.' },
  { title: 'Understand the question', text: 'Work out what was actually asked, which is often not what you assumed.' },
  { title: 'Give a suitable answer', text: 'Reply to that question, not to a similar one you had prepared.' },
  { title: 'Ask when unclear', text: '“Sorry, could you say that again?” is a good answer, not a failure.' },
];

const LISTENING_PRACTICE = [
  'Listening games where the instruction changes halfway through',
  'Describe-and-guess, which fails if the listener is not paying attention',
  'Story questions asked afterwards, not announced in advance',
  'Group rules where each child must refer to what the last one said',
];

const STARTERS = [
  { phrase: 'I think…', eg: '“I think we should play outside, because it is not raining now.”' },
  { phrase: 'I like…', eg: '“I like drawing, because I enjoy making pictures.”' },
  { phrase: 'I feel…', eg: '“I feel tired today, because I slept late last night.”' },
  { phrase: 'My idea is…', eg: '“My idea is that we take turns, so everyone gets a chance.”' },
  { phrase: 'I agree because…', eg: '“I agree because that way nobody has to wait too long.”' },
  { phrase: 'I do not agree because…', eg: '“I do not agree because we tried that last time and it did not work.”' },
];

const SITUATIONS = [
  {
    key: 'intro',
    label: '👋 Introduce yourself',
    rule: 'Now ask your partner the same question, and listen to their whole answer before you say anything.',
    steps: [
      'What is your name and how old are you?',
      'Where do you study, and which class are you in?',
      'Tell us one thing you enjoy doing.',
    ],
  },
  {
    key: 'hobby',
    label: '🎨 Talk about your hobby',
    rule: 'Ask your partner what their hobby is — then ask one more question about their answer.',
    steps: ['What is your hobby?', 'Why do you like it?', 'When do you do it?'],
  },
  {
    key: 'animal',
    label: '🐶 Describe your favourite animal',
    rule: 'Listen to your partner’s animal, then tell them one way it is different from yours.',
    steps: [
      'Which animal do you like most, and what does it look like?',
      'Where does it live and what does it eat?',
      'Why is it your favourite?',
    ],
  },
  {
    key: 'school',
    label: '🏫 Talk about your school',
    rule: 'Ask your partner about their favourite subject, and say whether you agree with their reason.',
    steps: [
      'What is your school called and which class are you in?',
      'Which subject do you enjoy most, and why?',
      'Describe one thing you like about your classroom.',
    ],
  },
  {
    key: 'story',
    label: '📖 Tell a short story',
    rule: 'Your partner must now ask you two questions about your story. Answer both.',
    steps: [
      'Who is in your story and where are they?',
      'What problem happens in the middle?',
      'How does it end?',
    ],
  },
  {
    key: 'game',
    label: '⚽ Talk about your favourite game',
    rule: 'Listen to your partner explain their game, then repeat the rules back to check you understood.',
    steps: [
      'Which game do you like playing most?',
      'Who do you usually play it with?',
      'Explain the rules so someone new could join in.',
    ],
  },
];

const PROMPT_STEPS = ['Prompt one', 'Prompt two', 'Prompt three'];

const WHY_LEARN = [
  { title: 'Clear speaking', text: 'Saying an idea so the listener follows it the first time, without needing it repeated.' },
  { title: 'Listening', text: 'Taking in what someone said well enough to reply to it properly.' },
  { title: 'Idea expression', text: 'Getting from a thought to a sentence, with a reason attached.' },
  { title: 'Conversation', text: 'Keeping an exchange going instead of stopping after one answer.' },
  { title: 'Question answering', text: 'Answering what was asked, including questions a child did not expect.' },
  { title: 'Group participation', text: 'Taking a turn in a discussion, and making room for someone quieter.' },
  { title: 'Body language', text: 'What posture, tone and expression say before the words arrive.' },
  { title: 'Disagreeing well', text: 'Holding a position calmly, and disagreeing with the idea rather than the person.' },
];

const TOPICS = [
  'Self introduction',
  'Conversation',
  'Listening',
  'Speaking',
  'Vocabulary',
  'Question answering',
  'Storytelling',
  'Picture description',
  'Role play',
  'Presentation skills',
  'Body language',
  'Eye contact',
  'Idea sharing',
  'Group discussion',
];

const LEVELS = [
  {
    title: 'Listening & responding',
    text: 'The half most classes skip. Children learn to summarise what was said before replying, and to ask when something is unclear.',
    example: 'Restating a partner’s point accurately before giving your own.',
    skill: 'Listening in order to reply, not to take a turn.',
  },
  {
    title: 'Explaining clearly',
    text: 'Taking something you know and getting it into someone else’s head, in order and without jargon.',
    example: 'Teaching a peer a rule or a game they did not know.',
    skill: 'Structuring an explanation and checking it landed.',
  },
  {
    title: 'Working in a group',
    text: 'Roles, turn-taking and getting a shared task finished when opinions differ.',
    example: 'Completing a group task with one shared output and a deadline.',
    skill: 'Contributing without dominating.',
  },
  {
    title: 'Body language & disagreement',
    text: 'What posture and tone say before the words do, and how to hold a position calmly.',
    example: 'A structured disagreement, held to a resolution.',
    skill: 'Disagreeing with the idea, not the person.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 4–7',
    title: 'First conversations',
    chips: ['Greetings', 'Simple questions', 'Listening games', 'Show and tell'],
  },
  {
    kv: 'Ages 8–10',
    title: 'Ideas & reasons',
    chips: ['Idea starters', 'Giving reasons', 'Storytelling', 'Role play', 'Turn-taking'],
  },
  {
    kv: 'Ages 11–13',
    title: 'Group discussion',
    chips: ['Group work', 'Explaining', 'Question rounds', 'Body language'],
  },
  {
    kv: 'Ages 14+',
    title: 'Discussion & disagreement',
    chips: ['Structured discussion', 'Disagreeing calmly', 'Presenting an idea', 'Summarising'],
  },
];

const SESSION_FLOW = [
  { title: 'Warm-up', text: 'A quick round where everyone says something, so nobody sits silent at the start.' },
  { title: 'Listening game', text: 'A game that only works if children listen to the whole instruction.' },
  { title: 'Pair conversation', text: 'Both sides of an exchange, taken in turn, with a listening task attached.' },
  { title: 'Idea sharing', text: 'Using a starter phrase and adding a reason with “because”.' },
  { title: 'Group task', text: 'A shared task with roles, which only finishes if the group communicates.' },
  { title: 'Short presenting', text: 'One idea presented to the group, then two questions taken.' },
  { title: 'Feedback', text: 'One strength and one next step, given to each child rather than to the room.' },
];

const ACTIVITIES = [
  'Role play',
  'Listening games',
  'Conversation games',
  'Show and tell',
  'Describe and guess',
  'Group tasks',
  'Storytelling',
  'Question rounds',
  'Picture description',
  'Turn-taking games',
];

const BODY_LANGUAGE = [
  { title: 'Eye contact', text: 'Looking at the person you are speaking to, and at whoever is speaking to you.' },
  { title: 'Facial expression', text: 'Letting your face match what you are saying, which is most of how tone reads.' },
  { title: 'Posture', text: 'Facing the person rather than turning away, which changes how an answer is received.' },
  { title: 'Hand gestures', text: 'Calm and visible, used to show something now and then rather than constantly.' },
  { title: 'Listening posture', text: 'How to sit while someone else speaks. Being a good audience is half the class.' },
  { title: 'Personal space', text: 'How close is comfortable — which differs between families and cultures, and is discussed rather than ruled.' },
];

const HOME_SUPPORT = [
  { title: 'Talk every day', text: 'Ten minutes of real conversation does more than any worksheet.' },
  { title: 'Ask open questions', text: 'Anything that cannot be answered with yes or no.' },
  { title: 'Listen without interrupting', text: 'Letting a child finish their sentence is the single most useful thing a parent can do.' },
  { title: 'Ask for the reason', text: '“Why?” after any opinion. That one word teaches more than a lesson on argument.' },
  { title: 'Let them explain something', text: 'A game, a rule, how something works. Explaining is where understanding shows.' },
  { title: 'Model disagreeing calmly', text: 'Children copy how disagreements sound at home more than anything said in class.' },
  { title: 'Give them a turn in adult talk', text: 'Ordering, asking a shopkeeper, answering a relative — small real conversations.' },
  { title: 'Do not answer for them', text: 'The pause before a child answers is where the skill is built.' },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '💬', title: 'Spoken English', text: 'The language itself — words and structures for ordinary conversation.', to: '/programs/spoken-english' },
  { icon: '🎤', title: 'Public speaking', text: 'Presenting to a group: structure, delivery and eye contact.', to: '/junior-skills/public-speaking' },
  { icon: '📖', title: 'English', text: 'Reading, writing, grammar and comprehension — the school subject.', to: '/programs/english' },
  { icon: '🎭', title: 'Drama', text: 'Performance, character and stage presence.', to: '/programs/drama' },
  { icon: '🤔', title: 'Problem solving', text: 'Reasoning and puzzles, often in pairs.', to: '/programs/problem-solving' },
  { icon: '🌟', title: 'Confidence building', text: 'Working on how a child handles new situations.', to: '/programs/confidence-building' },
];

const QUICK_ANSWERS = [
  {
    q: 'What are communication skills, for a child?',
    a: 'What a child uses to share what they think and understand what someone else means — speaking, listening, asking, answering and taking part in a conversation.',
  },
  {
    q: 'My child talks a lot but does not listen. Is this the right class?',
    a: 'Yes, and it is the most common reason families come. The usual problem is not shyness — it is answering a question that was not asked, because the child heard the first three words and filled in the rest.',
  },
  {
    q: 'How is this different from spoken English?',
    a: 'Spoken English builds the language itself. This works on two-way interaction: listening, responding, asking and taking turns. A child can be fluent in English and still communicate poorly.',
  },
  {
    q: 'Why does “because” matter so much?',
    a: 'A statement is an opinion; a statement with a reason is an argument. Teaching a child to add “because” is one small change that makes everything they say more convincing — and it works in any language.',
  },
  {
    q: 'How is progress assessed?',
    a: 'By task, not by test. You cannot mark listening on paper, so each module ends with something a child can only complete if the skill is real.',
  },
  {
    q: 'What should parents look for in a class like this?',
    a: 'Ask whether listening is actually taught or only speaking — many classes are speaking classes with a different name. Also ask the group size, because two-way practice needs a partner.',
  },
];

export default function CommunicationSkillsPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Communication skills classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children practise speaking, listening, conversation, expressing ideas, storytelling and
                simple presenting. The focus is two-way communication — listening and responding matter as
                much as talking.
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
                  <span className="tick">★</span> Assessed by task, not test
                </li>
                <li>
                  <span className="tick">★</span> Group work every session
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>Good communication = speaking + listening</h2>
              <p>
                These are two separate skills. A child can be strong at one and weak at the other, and most
                are.
              </p>
              <ul>
                <li>
                  <strong>Speaking</strong> — saying what you think, giving a reason, being clear enough to
                  follow.
                </li>
                <li>
                  <strong>Listening</strong> — hearing what was actually asked, waiting for your turn,
                  responding to that rather than to something else.
                </li>
              </ul>
              <p className="note-line">
                A child who only speaks talks past people. A child who only listens never gets heard.
              </p>
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

      {/* ---------- Which class ---------- */}
      <section id="which-class">
        <div className="container">
          <SectionHead
            eyebrow="Choosing"
            title="Which class does your child need?"
            lead="We run four programmes in this area and they are not the same thing. Reading this first will stop your child being put in the wrong one."
          />
          <div className="grid-4">
            {WHICH_CLASS.map((c) => {
              const body = (
                <>
                  <p className="kv">{c.kv}</p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
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
            Not sure? Describe what your child actually does — not what you think they need — and we will
            tell you which one fits.
          </p>
        </div>
      </section>

      {/* ---------- What are communication skills ---------- */}
      <section className="band-soft" id="what-are">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What are communication skills?"
            lead="What a child uses to share what they think and understand what someone else means."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>In practice, communication skills help children do seven things:</p>
              <ul className="pill-row">
                {SEVEN_THINGS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: 24 }}>
                Here is one of them in action. A child says: <strong>“I like drawing because I enjoy
                making pictures.”</strong> That is an idea expressed clearly — what they like, and why.
              </p>
              <p>
                Most children stop after the first part. Adding the second is one of the earliest things
                practised here, and everything else on this page is one of those seven things broken into
                steps a child can practise.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>What good communication looks like</h2>
                <ul className="pill-row">
                  {GOOD_LOOKS_LIKE.map((g) => (
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

      {/* ---------- Active listening ---------- */}
      <section id="listening">
        <div className="container">
          <SectionHead
            eyebrow="The other half"
            title="Learning to listen and respond"
            lead="Active listening means listening in order to reply, rather than waiting for your turn to talk. It is a skill, it can be practised, and it is the part most communication classes leave out."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <ol className="rhythm">
              {LISTENING_STEPS.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div>
              <div className="panel">
                <h2>Why this matters more than it seems</h2>
                <p>
                  The most common communication problem in children is not shyness. It is answering a
                  question that was not asked — because they heard the first three words and filled in the
                  rest.
                </p>
                <p>
                  Adults do it too. The difference is that children can still be taught out of it fairly
                  easily, with practice that makes listening the visible task rather than an afterthought.
                </p>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>How it is practised</h2>
                <ul>
                  {LISTENING_PRACTICE.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <p className="note-line">
                  These are practical habits for a classroom or a conversation. They are not rules about how
                  a child should behave generally, and different families and cultures do this differently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Idea starters ---------- */}
      <section className="band-soft" id="ideas">
        <div className="container">
          <SectionHead
            eyebrow="Starter phrases"
            title="Learning to share an idea"
            lead="Children often have the thought but not the opening. These six phrases give them somewhere to start, and each one leads naturally into a reason."
          />
          <div className="grid-3">
            {STARTERS.map((s) => (
              <div className="card" key={s.phrase}>
                <h3>{s.phrase}</h3>
                <p>{s.eg}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Notice what every example has in common: the word <em>because</em>. A statement is an opinion; a
            statement with a reason is an argument. Teaching children to add “because” is one small change
            that makes everything they say more convincing — and it works in any language.
          </p>
        </div>
      </section>

      {/* ---------- Situations ---------- */}
      <section id="situations">
        <div className="container">
          <SectionHead
            eyebrow="Try it together"
            title="Choose a situation and speak"
            lead="Pick a situation and three prompts appear. Give your child a minute to think, then let them talk — and use the listening turn at the end, because that is the half that gets skipped."
          />
          <PickSteps
            title="Choose a situation"
            intro="Six situations children already know enough about to fill a minute. Each one ends with a listening task, which is what makes it two-way rather than a speech."
            options={SITUATIONS}
            stepTitles={PROMPT_STEPS}
            ruleLabel="Now your turn to listen"
            note="The listening turn is not optional. It is the part being taught."
          />
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids learn communication skills?"
            lead="School, friendships and family life all run on communication, and almost none of it is taught directly anywhere."
          />
          <div className="grid-4">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            How much a child gains depends on how often they take part and where they start. We do not
            promise confidence or particular school results — what we commit to is regular practice in a
            small group, with listening treated as seriously as speaking.
          </p>
        </div>
      </section>

      {/* ---------- Topics ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Topics covered"
            title="What will kids learn?"
            lead="All of it practised in pairs and small groups, with the easier things first."
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
            eyebrow="Module by module"
            title="What a session looks like in each module"
            lead="Each module ends with a task the child can only complete if the skill is real — you cannot fake having listened."
          />
          <NumberedRows items={LEVELS} badge="Module" />
        </div>
      </section>

      {/* ---------- Body language ---------- */}
      <section id="body-language">
        <div className="container">
          <SectionHead
            eyebrow="Before the words"
            title="Body language in conversation"
            lead="Practical habits, taught as habits. Norms differ between families and cultures, so these are discussed rather than ruled."
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

      {/* ---------- Age groups ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Communication skills by age group"
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
            title="What happens in a communication skills class?"
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
            title="Communication activities for kids"
            lead="The activity types used to keep practice varied — and two-way."
          />
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
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
                <li>Small groups, because two-way practice needs a partner</li>
                <li>Mixed-age batches where they help, so roles genuinely rotate</li>
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
            <h2>Book a free communication skills trial</h2>
            <p>
              Let your child take part in a session and see how they are in a small group. Tell us how they
              usually are with people they do not know, so the activities are pitched right.
            </p>
            <ul className="pill-row">
              <li>Your child takes part in a real activity</li>
              <li>We see how they listen as well as how they speak</li>
              <li>You get a suggested starting point</li>
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
            <TrialForm program="Communication" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support communication at home"
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
            <h2>Communication skills classes for kids in Hyderabad</h2>
            <p>
              School here asks children to answer aloud, ask doubts, present ideas and work with
              classmates — and teaches almost none of it directly. In a class of forty there is rarely time
              to notice that a child answered a different question from the one asked.
            </p>
            <p>
              A small group makes that visible, and fixable. Children who are articulate one-to-one but
              disappear in a group, and children who have plenty to say but lose people halfway through,
              both belong here.
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
              Tell us your child’s age and how they usually are in a group, and we will suggest where they
              should start.
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
            lead="Which one fits depends on whether the gap is the language, the delivery, or the two-way part."
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
        title="Communication skills: quick answers"
        lead="Short, direct answers to the questions parents search for most."
      />

      <CtaBand variant={page.cta} />
    </>
  );
}
