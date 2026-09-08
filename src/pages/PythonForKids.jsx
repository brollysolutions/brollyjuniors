import { Link } from 'react-router-dom';
import {
  pythonFaqs,
  site,
  address,
  areasServed,
  openingHours,
  formattedAddress,
} from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import {
  PageHero,
  QuickAnswer,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
  SectionHead,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';

/* The Python programme page.
 *
 * The page that was here covered the class-wise pathways and the two things
 * that separate this from what else ranks for the search. The body of the
 * standalone python-classes-for-kids-in-hyderabad build has since been folded
 * in: what Python is, why it suits beginners, the learning levels, the
 * curriculum blocks, the session shape, the projects, the parent guide and the
 * local detail.
 *
 * Two things are handled rather than transcribed. The source's phone number
 * and address were written into the markup; they come from data/site.js here.
 * And its placeholder demo form is replaced by components/TrialForm.jsx, which
 * actually reaches the sheet.
 *
 * The FAQ list stays on pythonFaqs(6) from data/site.js. That is what
 * lib/faqs.js emits as this route's FAQPage schema, and a visible list that
 * did not match it would be markup Google discards.
 */

const classCards = [6, 7, 8, 9, 10].map((n) => ({
  n,
  blurb:
    n === 6
      ? 'A first Python program, loops, functions and a young coder capstone.'
      : n === 10
        ? 'Web, data and AI-enabled projects with a deployed capstone.'
        : 'Stronger logic, data structures, games and real applications.',
}));

const TRUST = [
  {
    title: 'Beginner-friendly',
    text: 'No prior coding experience needed. The first module builds the foundation from scratch.',
  },
  {
    title: 'Interactive coding',
    text: 'Live coding first, then guided practice on the child’s own keyboard.',
  },
  {
    title: 'Project-based',
    text: 'Every one of the nine modules ends in a small working program.',
  },
  {
    title: 'Problem-solving practice',
    text: 'Children learn to read error messages and debug their own code.',
  },
];

const WHY_LEARN = [
  {
    icon: '🧠',
    title: 'Logical thinking',
    text: 'A program only works if the steps are in the right order. Children learn to break a task into smaller steps and sequence them deliberately.',
  },
  {
    icon: '🧩',
    title: 'Problem solving',
    text: 'There is rarely one correct program. Children try an approach, see where it falls short and reach for another.',
  },
  {
    icon: '🎨',
    title: 'Creativity',
    text: 'Code is a making material. Children use it to build small games, quizzes and programs that are theirs.',
  },
  {
    icon: '⚙️',
    title: 'Computational thinking',
    text: 'Giving precise instructions to something that follows them literally is a genuinely different way of thinking — and a teachable one.',
  },
  {
    icon: '💪',
    title: 'Confidence',
    text: 'Finishing something that runs, and being able to explain how it works, changes how a child sees technology: as something they shape, not just consume.',
  },
  {
    icon: '🚀',
    title: 'Future digital skills',
    text: 'Python is widely used across software, data work, automation and AI. Learning it early gives children a familiar starting point later.',
  },
];

const SKILLS = [
  'Logical thinking',
  'Problem solving',
  'Coding basics',
  'Computational thinking',
  'Creativity',
  'Debugging',
  'Pattern recognition',
  'Attention to detail',
  'Project building',
  'Digital confidence',
];

const LEVELS = [
  {
    title: 'Python basics',
    goal: 'Get code running and get a result on screen.',
    concepts: 'What coding is, the Python editor, print(), comments, simple instructions.',
    activity: 'A program that introduces the child by name and does a little arithmetic.',
  },
  {
    title: 'Programming fundamentals',
    goal: 'Store information and make the program respond to it.',
    concepts: 'Variables, numbers and strings, basic data types, operators, if and else.',
    activity: 'A program that reacts differently depending on what is typed in.',
  },
  {
    title: 'Coding skills',
    goal: 'Stop repeating yourself and start structuring code.',
    concepts: 'for and while loops, functions and parameters, lists and collections.',
    activity: 'A number-guessing game that keeps asking until the answer is right.',
  },
  {
    title: 'Project building',
    goal: 'Combine everything into something that works end to end.',
    concepts: 'Planning a program, combining concepts, testing, debugging.',
    activity: 'A quiz game or small tool built across more than one session.',
  },
  {
    title: 'Annual capstone',
    goal: 'Finish something worth showing, and be able to explain it.',
    concepts: 'Every year ends with a class-appropriate capstone the student demonstrates and talks through.',
    activity: 'In Class 10 that capstone is deployed.',
  },
];

const CURRICULUM_BLOCKS = [
  {
    icon: '🐍',
    title: 'Python basics',
    items: ['Introduction to Python', 'Syntax and indentation', 'print() and output', 'Comments', 'Running a first program'],
  },
  {
    icon: '📦',
    title: 'Variables & data',
    items: ['Variables and naming', 'Numbers and strings', 'Basic data types', 'Input from the user', 'Operators and arithmetic'],
  },
  {
    icon: '🔀',
    title: 'Conditions',
    items: ['if, else, elif', 'Comparisons', 'Simple decision-making', 'Combining conditions'],
  },
  {
    icon: '🔁',
    title: 'Loops',
    items: ['Repeating instructions', 'for loops and range()', 'while loops', 'Stopping a loop safely'],
  },
  {
    icon: '🧱',
    title: 'Functions',
    items: ['Reusable blocks of code', 'Parameters and arguments', 'Returning a value', 'Why functions keep code tidy'],
  },
  {
    icon: '📋',
    title: 'Lists & collections',
    items: ['Making a list', 'Accessing and changing items', 'Looping through a list', 'Basic list operations'],
  },
  {
    icon: '🧠',
    title: 'Problem solving',
    items: ['Breaking a problem into steps', 'Writing a solution', 'Testing what you wrote', 'Reading error messages', 'Fixing errors independently'],
  },
  {
    icon: '🎮',
    title: 'Python projects',
    items: ['Mini games', 'Calculators', 'Quiz programs', 'Number games', 'Small creative programs'],
  },
  {
    icon: '📈',
    title: 'Beyond the basics',
    items: ['Data work in later classes', 'Larger applications', 'Web and AI-enabled projects in Class 10', 'A deployed capstone'],
  },
];

const METHOD_STEPS = [
  {
    title: 'Understand',
    text: 'The educator explains the idea plainly, with an example on screen, before anyone types.',
  },
  {
    title: 'Write code',
    text: 'The child types it themselves. Real Python, on a real keyboard — not drag-and-drop blocks.',
  },
  { title: 'Run it', text: 'The program runs immediately. The result, or the error, appears within seconds.' },
  {
    title: 'Find errors',
    text: 'Reading the error message is taught as a skill. Children learn what Python is telling them.',
  },
  { title: 'Improve', text: 'Fix it, run it again, make it better. This loop repeats many times in a session.' },
  {
    title: 'Build projects',
    text: 'Every module ends in a working artefact. The year ends in a capstone the child explains.',
  },
];

const SESSION_FLOW = [
  {
    title: 'Warm-up',
    text: 'A short recap or a quick logic puzzle to get thinking started before the laptops open.',
  },
  {
    title: 'Concept introduction',
    text: 'One new idea, explained simply — what it does, and why anyone would want it.',
  },
  { title: 'Live coding', text: 'The educator writes the code on screen, thinking out loud, mistakes included.' },
  {
    title: 'Guided practice',
    text: 'Children type their own version. With eight to a batch, the educator can reach every child.',
  },
  { title: 'Mini challenge', text: 'A small twist on the idea, solved without step-by-step instructions.' },
  {
    title: 'Project activity',
    text: 'Work continues on the module’s project, so the pieces add up to something.',
  },
  { title: 'Recap', text: 'What was learned, what to practise, what comes next.' },
];

const PROJECTS = [
  {
    icon: '🧮',
    title: 'Simple calculator',
    text: 'Takes two numbers and an operation, returns an answer. Practises input, variables and arithmetic.',
  },
  {
    icon: '❓',
    title: 'Quiz game',
    text: 'Asks questions, checks answers, keeps score. Practises conditions, lists and counters.',
  },
  {
    icon: '🎯',
    title: 'Number guessing game',
    text: 'The computer picks a number and gives hints. Practises loops, conditions and randomness.',
  },
  {
    icon: '✊',
    title: 'Rock paper scissors',
    text: 'Play against the computer. Practises user input, comparisons and repeated rounds.',
  },
  {
    icon: '📝',
    title: 'To-do list',
    text: 'Add, view and remove items. Practises lists and structuring a program with functions.',
  },
  {
    icon: '📖',
    title: 'Simple text game',
    text: 'A choose-your-path story. Combines almost everything learned so far into one program.',
  },
];

const ACTIVITIES = [
  'Coding challenges',
  'Debugging games',
  'Logic puzzles',
  'Mini coding quizzes',
  'Pattern challenges',
  'Programming games',
  'Build-and-test',
  'Project challenges',
];

const DIFFERENCE = [
  {
    icon: '👥',
    title: 'Batches capped at eight',
    text: 'Small enough that nobody quietly falls behind while the confident ones race ahead. It is the single biggest factor in whether a beginner keeps going.',
  },
  {
    icon: '⌨️',
    title: 'Typed code, not blocks',
    text: 'Children write real Python from the first session. Block-based tools have their place earlier on, but they do not build the typing, syntax and debugging habits actual programming needs.',
  },
  {
    icon: '📚',
    title: 'A curriculum that continues',
    text: 'Classes 6 to 10 each have a distinct annual plan. A child who stays does not sit through the same year again — they move forward.',
  },
  {
    icon: '🏗️',
    title: 'Every module ships something',
    text: 'Nine modules, nine working artefacts, then a capstone. Progress is visible to you because there is something to look at.',
  },
];

const PROGRESS = [
  {
    title: 'Topics covered',
    text: 'Ask which module they are in and what it is about. There are nine across the year, so it gives you a clear sense of pace.',
  },
  {
    title: 'Activities completed',
    text: 'Ask what they typed today and whether it worked first time. The answer is usually a story.',
  },
  {
    title: 'Projects created',
    text: 'Each module ends in a working program. Ask to be shown it running — that is the real progress report.',
  },
  {
    title: 'Areas needing practice',
    text: 'If the same kind of error keeps coming up, that is worth mentioning to the educator.',
  },
  {
    title: 'Learning milestones',
    text: 'First working loop, first function, first finished project, then the annual capstone.',
  },
  {
    title: 'Just ask us',
    text: 'With eight children to a batch, the educator genuinely knows how your child is doing.',
  },
];

const PARENT_DO = [
  'Ask them to explain their code. “What does this line do?” is a genuinely powerful question.',
  'Let them make mistakes. Errors are the curriculum, not an interruption to it.',
  'Encourage short, regular practice. Twenty minutes a few times a week beats a three-hour weekend session.',
  'Celebrate the effort, not just the working program. Debugging for forty minutes is the skill.',
  'Give them a quiet spot and a real keyboard.',
  'Encourage small projects of their own. A silly game they invented will teach more than a perfect exercise.',
];

const PARENT_AVOID = [
  'Fixing every error for them. Even if you can see it. Especially if you can see it.',
  'Comparing them to another child. Beginners progress at wildly different rates and it evens out.',
  'Treating a bug as failure. Professional programmers spend much of their day on exactly this.',
  'Expecting a visible result every single week. Some modules are foundations.',
  'Turning practice into a punishment. The fastest way to end a child’s interest in coding.',
];

const RELATED = [
  {
    icon: '💻',
    title: 'Coding for kids',
    text: 'Blocks to typed code, for children who are not ready to start with Python.',
    to: '/programs/coding',
  },
  {
    icon: '🤖',
    title: 'AI for kids',
    text: 'AI literacy for Classes 6–10, with class-wise annual curricula.',
    to: '/ai-for-kids',
  },
  {
    icon: '🦾',
    title: 'Robotics',
    text: 'Building and programming things that move.',
    to: '/programs/robotics',
  },
  {
    icon: '🖥️',
    title: 'Digital literacy',
    text: 'Files, typing, searching and staying safe online — the groundwork Python sits on.',
    to: '/junior-skills/digital-literacy',
  },
  {
    icon: '🧠',
    title: 'Brain games',
    text: 'Reasoning and memory work away from the screen.',
    to: '/programs/brain-games',
  },
  {
    icon: '♟️',
    title: 'Chess',
    text: 'Planning, patience and thinking a few moves ahead.',
    to: '/programs/chess',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'Where can my child learn Python in Hyderabad?',
    a: 'Brolly Juniors runs in-person Python classes for Classes 6 to 10 at Nizampet X Roads, Hyderabad, in batches of eight.',
  },
  {
    q: 'What is the best age to learn Python?',
    a: 'Python starts at Class 6 here. Younger children begin with coding and digital-skills foundations instead.',
  },
  {
    q: 'Is Python easy for kids?',
    a: 'Python is one of the friendliest first languages because it reads close to plain English and produces a visible result quickly.',
  },
  {
    q: 'Does my child need coding experience to learn Python?',
    a: 'No. The first module builds the foundation from scratch, and practice is adjusted to what the child already knows.',
  },
  {
    q: 'Does my child need a laptop?',
    a: 'Regular access to a laptop or desktop is recommended for practice at home. Schools can also run the programme through a computer lab.',
  },
  {
    q: 'What can kids build with Python?',
    a: 'Calculators, quiz games, number games, to-do lists and text adventures early on — larger applications and deployed projects later.',
  },
];

export default function PythonForKids() {
  return (
    <>
      <PageHero
        eyebrow="Python for Kids · Classes 6–10"
        title="Coding classes for kids in Hyderabad — real Python, one confident step at a time."
        subtitle="Five progressive annual coding curricula—from a first Python program in Class 6 to web, data and AI-enabled projects in Class 10. Taught in person, in batches of eight."
        image="/images/python.svg"
        imageAlt="A code editor window with a friendly python snake"
        chips={[
          { strong: '36 weeks', span: 'Duration' },
          { strong: '72 sessions', span: 'Per class' },
          { strong: 'Project-based', span: 'Learning style' },
          { strong: 'Class-wise', span: 'Progression' },
        ]}
      />

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
          <QuickAnswer text="Brolly Juniors runs coding classes for kids in Hyderabad from Class 6 to Class 10. Each class has its own 72-session plan spanning nine modules plus a capstone project. Topics include logic, algorithms, Python syntax, games, data work and testing—taught through explanation, guided coding, debugging and projects, in batches capped at eight children." />
        </div>
      </section>

      {/* ---------- What Python is ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="Start here"
            title="What are Python classes for kids?"
            lead="Python is a programming language — a way of writing instructions that a computer follows. Python classes teach children to write those instructions themselves, starting from a single line and building up to small working programs."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h2>Why Python suits beginners</h2>
              <p>
                Python reads a lot like plain English. To show a message on screen a child writes{' '}
                <code>print(&quot;Hello&quot;)</code> — and that is genuinely all it takes. There is no
                complicated setup to memorise before the first result appears, which matters enormously
                when a ten-year-old is deciding whether coding is for them.
              </p>
              <p>
                Because the language stays out of the way, children spend their attention on the
                interesting part: working out what the computer should do, and in what order.
              </p>
              <h2>How a child actually learns it</h2>
              <p>
                Learning to code is a loop, not a lecture. Children move through it many times in a single
                session, and the code will not always work the first time. That is the point — finding out
                why it did not work is where most of the thinking happens.
              </p>
              <ul className="flow-strip">
                <li>
                  <span>Idea</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Write code</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Run it</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>See the result</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Improve it</span>
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>The shape of the year</h2>
              <ul>
                <li>
                  <strong>Simple instructions first.</strong> Printing messages, storing values, doing
                  arithmetic. Small wins, quickly.
                </li>
                <li>
                  <strong>Then decisions and repetition.</strong> Conditions and loops let a program
                  behave differently depending on what happens.
                </li>
                <li>
                  <strong>Then whole programs.</strong> Functions, lists and structure let a child build a
                  quiz, a game or a small tool.
                </li>
              </ul>
              <p className="note-line">
                Nine modules across 36 weeks, then a capstone the child demonstrates and explains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why learn Python ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="The case for coding"
            title="Why should kids learn Python?"
            lead="Not because every child will become a software engineer. Because the habits coding builds — breaking a problem down, testing an idea, fixing what is broken — are useful whatever they go on to do."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            An honest note: these are the kinds of benefits that come from sustained, guided practice —
            not guaranteed outcomes. We do not promise marks, careers or salaries, and you should be wary
            of any children’s programme that does.
          </p>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="What gets practised"
            title="Skills children develop through Python"
            lead="Each of these is worked on directly in class rather than left to chance."
          />
          <div className="skill-tiles">
            {SKILLS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/projects.svg"
            imageAlt="A rocket, data chart and prototype cards from student projects"
            caption="Every module ships something"
            reverse
          >
            <h2>Typed code, not drag-and-drop blocks</h2>
            <p>
              Students write real Python from the first session. Each of the nine modules ends in a
              working artefact—a quiz, a game, a data tool, an application—and the year finishes with a
              capstone the student demonstrates and explains.
            </p>
            <ul>
              <li>Live coding, then guided practice</li>
              <li>Reading error messages and debugging</li>
              <li>Mini-project at the end of every module</li>
              <li>Annual capstone with documentation</li>
            </ul>
          </MediaSplit>
        </div>
      </section>

      <section style={{ paddingTop: 24 }} id="curriculum">
        <div className="container">
          <SectionHead
            eyebrow="Class-wise pathways"
            title="A distinct annual curriculum for every class"
            lead="Python is organised by school class rather than by age, because that is how children’s reading, maths and school workload actually line up."
          />
          <div className="grid-3">
            {classCards.map((c) => (
              <Link to={`/python-for-kids/class-${c.n}`} className="card" key={c.n}>
                <span className="icon">🐍</span>
                <h3>Python Course · Class {c.n}</h3>
                <p>{c.blurb}</p>
                <div className="card-meta">
                  <span className="tag">36 weeks</span>
                  <span className="tag">72 sessions</span>
                  <span className="tag teal">9 modules + capstone</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Younger than Class 6? The Python programme starts there. Younger children are better served by{' '}
            <Link to="/programs/coding">coding for kids</Link> and{' '}
            <Link to="/junior-skills/digital-literacy">digital literacy</Link>, which build the
            groundwork Python later sits on. And a Class 8 child with no coding background does not have
            to start in the Class 6 plan — the first module establishes the foundation, and the trial
            class is where that judgement gets made.
          </p>
        </div>
      </section>

      {/* ---------- Levels ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="The roadmap"
            title="Python learning levels for kids"
            lead="Within a year, the nine modules move through four broad stages before the capstone. The pace and the projects differ by class; the shape of the journey does not."
          />
          <ol className="rhythm">
            {LEVELS.map((l) => (
              <li key={l.title}>
                <h3>{l.title}</h3>
                <p>
                  <strong>Goal:</strong> {l.goal}
                </p>
                <p>
                  <strong>Concepts:</strong> {l.concepts}
                </p>
                <p>
                  <strong>Typical activity:</strong> {l.activity}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Curriculum blocks ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="What gets covered"
            title="Python course curriculum for kids"
            lead="The blocks below describe the ground a Python course for children covers. Depth, pace and project choice differ by class, so read this as a map of the territory rather than a session-by-session syllabus."
          />
          <div className="grid-3">
            {CURRICULUM_BLOCKS.map((b) => (
              <div className="card" key={b.title}>
                <span className="icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <ul>
                  {b.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            The exact curriculum varies by class, level and the child’s starting point. There is a
            distinct annual plan for each of Classes 6 to 10 — ask us for the plan for your child’s year.
          </p>
        </div>
      </section>

      {/* ---------- How learning works ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The method"
            title="How kids learn Python at Brolly Juniors"
            lead="Children learn to code by coding. Watching someone else type is not the same thing, so sessions are built around the child’s own hands on the keyboard."
          />
          <div className="steps">
            {METHOD_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
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
            title="What happens in a Python class?"
            lead="Sessions run for one hour, twice a week. Here is the shape a typical one takes, so you know what your child is actually doing with that hour."
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

      {/* ---------- Projects ---------- */}
      <section className="band-soft" id="projects">
        <div className="container">
          <SectionHead
            eyebrow="Things they make"
            title="Python projects kids can build"
            lead="These are the kinds of programs that come out of the early and middle modules. They are small on purpose — small enough to finish, and finishing matters."
          />
          <div className="grid-3">
            {PROJECTS.map((p) => (
              <div className="card" key={p.title}>
                <span className="icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Later years go further. Class 10 works on web, data and AI-enabled projects with a deployed
            capstone. We will not tell you a Class 6 child will build advanced AI applications, because
            they will not — and a page that promises it is not being straight with you.
          </p>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Keeping it enjoyable"
            title="Fun Python activities for kids"
            lead="Practice does not have to look like homework. These activities are woven through the modules."
          />
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Two things this section is doing, both deliberate.
          One: "coding classes in Hyderabad" is a genuinely ambiguous search —
          most of the local results are medical billing institutes — so the
          page says plainly which one this is. That helps a parent and it helps
          Google classify the page.
          Two: the national aggregators that hold the organic slots for this
          keyword have no room in this city. Local depth is the one thing they
          cannot copy, so it is stated rather than implied. */}
      <section className="section-tight band-soft">
        <div className="container split">
          <div className="prose">
            <h2>Coding for children, not medical coding</h2>
            <p>
              Worth saying plainly, because searching for coding classes in Hyderabad returns a
              great many medical billing and coding institutes: this is computer programming for
              school-age children. Python, typed by the child, on a real keyboard.
            </p>
            <p>
              Nothing here is for adults changing careers, and nothing here is healthcare
              administration. If you are looking for medical coding certification, this is not it —
              and we would rather you found that out in ten seconds than after a phone call.
            </p>
          </div>
          <div className="prose">
            <h2>A room in Hyderabad, not a template page</h2>
            <p>
              Several of the largest names ranking for this search are national platforms with a
              page for every city and a presence in none of them. There is no address on those
              pages, no local teacher, and no photograph of a room your child could actually sit in.
            </p>
            <ul>
              <li>In-person classes, eight children to a batch</li>
              <li>The same educator each week, who knows your child&apos;s name</li>
              <li>Batch times built around Hyderabad school and traffic patterns</li>
              <li>A curriculum that continues next year rather than resetting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- The difference ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The difference"
            title="Why parents choose Brolly Juniors for Python"
            lead="Four things that decide whether a beginner is still coding six months later."
          />
          <div className="grid-4">
            {DIFFERENCE.map((d) => (
              <div className="card" key={d.title}>
                <span className="icon">{d.icon}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning modes, timings and fees"
            lead="The programme is built around an in-person room, and runs as two one-hour sessions a week across 36 instructional weeks."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning modes</h3>
              <p className="kv">In person, or in your school</p>
              <ul>
                <li>Classes at Nizampet X Roads, batches capped at eight</li>
                <li>The same educator every week</li>
                <li>
                  Schools can run the same 72-session plan through their own lab —{' '}
                  <Link to="/schools/python-curriculum">see the school curriculum</Link>
                </li>
              </ul>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <div className="plan">
              <h3>Class timings</h3>
              <p className="kv">
                {openingHours[0].days}, {openingHours[0].time}
              </p>
              <ul>
                <li>Two one-hour sessions a week</li>
                <li>Weekday after-school and weekend batches</li>
                <li>Slots change through the year, so we confirm what is open</li>
              </ul>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
            <div className="plan">
              <h3>Python fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on your child’s class and annual plan</li>
                <li>Where they start, if they have coded before</li>
                <li>Send us the class and we will send the current figure</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Asking about online classes? Online delivery is not something we advertise, because the
            programme is built around an in-person room. If online is your only workable option, tell us
            and we will say honestly whether we can serve you well.
          </p>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Try before you decide</span>
            <h2>Let your child experience a Python class</h2>
            <p>
              Not sure if Python is right for your child? Start with a trial session and understand the
              teaching approach before enrolling. Tell us your child’s class and what they enjoy, and we
              will suggest the closest programme fit — no pressure, and no upfront payment.
            </p>
            <ul className="pill-row">
              <li>Your child sits in a real session, at a real keyboard</li>
              <li>We see where they are starting from</li>
              <li>You see how the educator teaches</li>
              <li>We recommend the class plan and batch that fits</li>
              <li>You decide afterwards, not before</li>
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
            <TrialForm program={'Python & Coding'} compact />
          </div>
        </div>
      </section>

      {/* ---------- Progress ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Following along"
            title="Supporting your child’s Python progress"
            lead="Coding progress is easy to see if you know where to look, because every module produces something that runs. You do not need to understand Python yourself to follow it."
          />
          <div className="grid-3">
            {PROGRESS.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Parent guide ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="How parents can help kids learn Python"
            lead="You do not need to know how to code. The most useful things you can do are all things a non-programmer can do well."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="panel">
              <h2>Do this</h2>
              <ul>
                {PARENT_DO.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <h2>Try to avoid this</h2>
              <ul>
                {PARENT_AVOID.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            More reading: <Link to="/resources">the parent guides in Resources</Link> cover when to move
            from Scratch to Python, project ideas by class, and whether to start with AI or coding.
          </p>
        </div>
      </section>

      {/* ---------- Hyderabad ---------- */}
      <section className="band-soft">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">In Hyderabad</span>
            <h2>Python classes for kids in Hyderabad</h2>
            <p>
              Parents looking for Python classes for kids in Hyderabad can choose a programme by their
              child’s class, coding experience, learning goals and preferred batch. The centre is at
              Nizampet X Roads, and families travel to it from across the north-west and west of the
              city.
            </p>
            <p>
              Batch times are set with school hours and Hyderabad traffic in mind. There is one centre,
              not a branch in each neighbourhood.
            </p>
            <h3>Areas we serve</h3>
            <ul className="area-links">
              {areasServed.map((name) => {
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
            <h2>Where we are</h2>
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
            eyebrow="More at Brolly Juniors"
            title="Explore more kids learning programs"
            lead="Children often pair Python with one programme that works a different kind of thinking."
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

      <FaqList items={pythonFaqs(6)} />

      {/* ---------- Quick answers ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Quick answers"
            title="Python for kids: quick answers"
            lead="Short, direct answers to the questions parents ask most."
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

      <CtaBand variant="family" />
    </>
  );
}
