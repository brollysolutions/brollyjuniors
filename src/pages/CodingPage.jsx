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
import { PickSteps, TopicTabs } from '../components/ProgramBits.jsx';

/* The coding programme page.
 *
 * Ported from the standalone coding-classes-for-kids-in-hyderabad build. The
 * route, the SEO record, the four-stage curriculum and the FAQ set stay in
 * data/catalog/programmes.js; this component supplies the body.
 *
 * What is handled rather than transcribed:
 *
 *   - The source's four "learning levels" duplicate the four stages already
 *     published in the catalogue, so the stage track renders those and the
 *     source's five curriculum blocks follow as the syllabus behind them.
 *   - Its list of tools stays deliberately generic — block-based, text-based,
 *     web basics, game platforms. Naming a product on a page a parent reads
 *     six months later is how a page starts lying quietly, and the source made
 *     the same choice.
 *   - Contact details come from data/site.js, and the placeholder demo form is
 *     replaced by the real booking form.
 *
 * The "give the robot instructions" block is the source's own sequencing demo.
 * Its five-by-five grid does not survive the move to this design system, so it
 * is rebuilt as the same idea in the shared PickSteps component: pick an
 * instruction order, see what the computer does with it.
 */

const TRUST = [
  {
    title: 'Beginner-friendly',
    text: 'Children start from the first idea — what an instruction is — not from a screen full of code.',
  },
  {
    title: 'Interactive learning',
    text: 'Children try things, get them wrong, and try again with guidance rather than watching a lecture.',
  },
  {
    title: 'Project-based',
    text: 'Each set of concepts ends with something the child has built and can show you.',
  },
  {
    title: 'Problem-solving practice',
    text: 'Every activity is a small problem to break down, test and improve.',
  },
];

const HERO_TAGS = [
  'Beginner-friendly',
  'Age-appropriate coding',
  'Project-based activities',
  'Blocks to typed code',
  'Small batches',
];

/* The source's sequencing demo. Three orders of the same four instructions,
   because the point being made is that order changes everything. */
const PROGRAM_RUNS = [
  {
    key: 'right',
    label: 'Up, Up, Right, Right',
    rule: 'The instructions run top to bottom, one at a time.',
    steps: [
      'The robot moves up two squares, to the middle of the grid.',
      'It then moves right two squares, arriving under the star.',
      'It stops one square short. The program was right in order but too short.',
    ],
  },
  {
    key: 'wrong',
    label: 'Right, Up, Right, Up',
    rule: 'Same four instructions, different order.',
    steps: [
      'The robot moves right, then up, then right, then up.',
      'It ends in the same square as the first program — this time the order did not matter.',
      'Children test both and find out for themselves which changes the result and which does not.',
    ],
  },
  {
    key: 'loop',
    label: 'Repeat (Up, Right) × 3',
    rule: 'repeat 3 times: up, right',
    steps: [
      'One instruction now stands for six.',
      'The robot climbs diagonally, three steps up and three across.',
      'This is the moment a child meets a loop: the same result, written once.',
    ],
  },
];

const RUN_STEPS = ['The program runs', 'What the robot does', 'What the child learns'];

const WHY_LEARN = [
  {
    icon: '🪜',
    title: 'Logical thinking',
    text: 'Children learn to arrange instructions in the right order. Coding shows them immediately when the order is wrong, because the program does something unexpected.',
    eg: 'A child moves one instruction above another and watches the character take a completely different path.',
  },
  {
    icon: '🎯',
    title: 'Problem solving',
    text: 'Coding pushes children to break a problem into smaller steps. Instead of “make a game”, the child works on moving a character, then adding a score, then adding an ending.',
    eg: 'A big project is split into three or four small tasks the child can finish one at a time.',
  },
  {
    icon: '✨',
    title: 'Creativity',
    text: 'Children use code to create games, stories and animations of their own. The code is the tool; the idea belongs to the child.',
    eg: 'Two children learn the same loop and use it for completely different projects.',
  },
  {
    icon: '🔁',
    title: 'Computational thinking',
    text: 'Children learn to approach a problem in a structured way: look at what is being asked, spot the repeating parts, plan the steps, then build.',
    eg: 'A child notices four almost identical steps and replaces them with one loop.',
  },
  {
    icon: '🔎',
    title: 'Attention to detail',
    text: 'Small mistakes teach the importance of accuracy. A missing bracket or a wrong number changes the whole result, and the child has to find it.',
    eg: 'A program stops working; the child checks it line by line until the mistake shows up.',
  },
  {
    icon: '💪',
    title: 'Confidence',
    text: 'Finishing projects helps children get comfortable creating with technology instead of only consuming it.',
    eg: 'A child explains their finished project to the group and answers questions about how it works.',
  },
];

const SKILLS = [
  'Logical thinking',
  'Problem solving',
  'Creativity',
  'Computational thinking',
  'Debugging',
  'Pattern recognition',
  'Attention to detail',
  'Digital skills',
  'Project building',
  'Confidence',
  'Planning',
  'Persistence',
];

const AGE_BANDS = [
  {
    kv: 'Ages 6–8',
    title: 'Coding foundations',
    text: 'The focus is the idea of an instruction and the idea of order, using visual blocks rather than typing.',
    chips: ['Sequencing', 'Instructions', 'Patterns', 'Logic games', 'Block-based coding'],
  },
  {
    kv: 'Ages 8–10',
    title: 'Creative coding',
    text: 'Children start making things happen — a character that reacts, a scene that repeats, a small game with rules.',
    chips: ['Visual programming', 'Loops', 'Conditions', 'Animations', 'Simple games'],
  },
  {
    kv: 'Ages 10–13',
    title: 'Programming skills',
    text: 'Ideas become more general. Children learn to store information, reuse code and structure a project.',
    chips: ['Variables', 'Conditions', 'Loops', 'Functions', 'Project development'],
  },
  {
    kv: 'Ages 13–14',
    title: 'Typed code & projects',
    text: 'Typed code, longer projects and a more independent way of working through a problem.',
    chips: ['Text-based programming', 'Structured problem solving', 'Larger projects'],
  },
];

/* The source's five curriculum blocks. The stage track above carries the four
   published stages; these are the topics inside them. */
const BLOCKS = [
  {
    key: 'fundamentals',
    label: 'Coding fundamentals',
    title: 'Coding fundamentals',
    intro: 'The starting block. Children learn what coding actually is before they write any of it.',
    bullets: [
      { term: 'What is coding?', text: 'the idea that a computer follows instructions and does not guess.' },
      { term: 'Algorithms', text: 'a plan written as steps, like a recipe or directions to school.' },
      { term: 'Instructions', text: 'making each step clear enough that it cannot be misread.' },
      { term: 'Sequencing', text: 'why the order of steps changes the result.' },
      { term: 'Logic', text: 'working out what will happen before running the program.' },
    ],
    outcome: 'read a short program and say what it will do.',
  },
  {
    key: 'creative',
    label: 'Creative coding',
    title: 'Creative coding',
    intro:
      'Programs start responding to the user, and children start making things they want to show people.',
    bullets: [
      { term: 'Events', text: 'making something happen when a key is pressed or an object is clicked.' },
      { term: 'Conditions', text: '“if this happens, do that” rules.' },
      { term: 'Loops', text: 'repeating steps without writing them out again and again.' },
      { term: 'Animations', text: 'movement, timing and simple visual effects.' },
      { term: 'Interactive activities', text: 'small builds the child controls.' },
    ],
    outcome: 'build something that reacts to what the user does.',
  },
  {
    key: 'programming',
    label: 'Programming basics',
    title: 'Programming basics',
    intro:
      'Ideas become general instead of tied to one project. This is the bridge towards typed programming.',
    bullets: [
      { term: 'Variables', text: 'storing something that changes, like a score or a name.' },
      { term: 'Data', text: 'numbers, text and lists, and why the difference matters.' },
      { term: 'Functions', text: 'naming a group of steps so it can be reused.' },
      { term: 'Operators', text: 'comparing and calculating.' },
      { term: 'Input and output', text: 'asking the user something and showing a result.' },
    ],
    outcome: 'write a program that remembers information and reacts to it.',
  },
  {
    key: 'problem-solving',
    label: 'Problem solving',
    title: 'Problem solving',
    intro:
      'This block runs alongside the others rather than after them. It is the part most parents notice at home.',
    bullets: [
      { term: 'Breaking problems into steps', text: 'making a big task small enough to start.' },
      { term: 'Finding solutions', text: 'trying an approach and comparing it with another.' },
      { term: 'Testing', text: 'checking a program with different inputs, not just the easy one.' },
      { term: 'Debugging', text: 'locating the mistake instead of rewriting everything.' },
    ],
    outcome: 'stay calm when a program breaks and work through it methodically.',
  },
  {
    key: 'projects',
    label: 'Projects',
    title: 'Projects',
    intro: 'Everything learned so far gets combined into something the child owns and can demonstrate.',
    bullets: [
      { term: 'Games', text: 'rules, scoring and winning conditions.' },
      { term: 'Quizzes', text: 'questions, answers and keeping track of results.' },
      { term: 'Animations', text: 'movement, sequence and timing.' },
      { term: 'Interactive stories', text: 'choices that change what happens next.' },
      { term: 'Simple applications', text: 'a small tool that does one useful thing.' },
    ],
    outcome: 'plan, build, test and explain a complete project.',
  },
];

const TOOLS = [
  {
    icon: '🧱',
    kv: 'Usually first',
    title: 'Block-based visual coding',
    text: 'Instructions are coloured blocks the child drags and snaps together. Nothing can be misspelled, so the child concentrates entirely on the logic.',
    eg: 'Best for younger children and complete beginners of any age.',
  },
  {
    icon: '⌨️',
    kv: 'Usually next',
    title: 'Text-based programming',
    text: 'The child types the instructions instead of dragging them. The ideas are the same — sequence, loops, conditions — but written out.',
    eg: 'Best for children who read and type comfortably and have finished the basics.',
  },
  {
    icon: '🌐',
    kv: 'Often alongside',
    title: 'Web page basics',
    text: 'Structuring and styling a page. Children see the result instantly, which makes it a friendly introduction to typed code.',
    eg: 'Best for children who enjoy visual, design-led work.',
  },
  {
    icon: '🎮',
    kv: 'Project stage',
    title: 'Game and project platforms',
    text: 'Environments built for children to make games and animations, where the code drives characters, scores and rules.',
    eg: 'Best for children who need a goal to stay motivated.',
  },
  {
    icon: '🐞',
    kv: 'Throughout',
    title: 'Practice and puzzle tools',
    text: 'Short logic and debugging challenges used between bigger builds to keep concepts fresh.',
    eg: 'Best for reinforcing a concept without starting a whole new project.',
  },
  {
    icon: '❓',
    kv: 'Ask us',
    title: 'Which one for your child?',
    text: 'The right starting tool depends on age, reading level and whether the child has coded before.',
    eg: 'Ask during the free trial which tools the current batch uses.',
  },
];

const METHOD_STEPS = [
  {
    title: 'Understand',
    text: 'One idea, explained in plain words with an example from outside the computer first.',
  },
  {
    title: 'Try',
    text: 'The child attempts a small guided version straight away, while the explanation is fresh.',
  },
  {
    title: 'Code',
    text: 'The child writes or builds the instructions themselves rather than copying from the board.',
  },
  { title: 'Test', text: 'The program is run. The child compares what happened with what they expected.' },
  {
    title: 'Fix',
    text: 'Where the two differ, the child looks for the reason. Mistakes are treated as the lesson, not the failure.',
  },
  { title: 'Build', text: 'The concept goes into a project, so the child sees why it was worth learning.' },
];

const SESSION_FLOW = [
  {
    title: 'Warm-up',
    text: 'A quick puzzle or logic question to get the child thinking in steps — ordering instructions, spotting the odd one out, predicting a pattern.',
  },
  {
    title: 'Concept',
    text: 'One new idea, explained with a real-life comparison before any code appears.',
  },
  {
    title: 'Live demonstration',
    text: 'The educator builds a small example, deliberately including a mistake and fixing it so children see that debugging is normal.',
  },
  {
    title: 'Guided coding',
    text: 'Children build their own version with the educator available. This is where questions get asked and misunderstandings get caught early.',
  },
  {
    title: 'Challenge',
    text: 'A twist on the same concept with no step-by-step help — change the rule, add a second character, make it repeat.',
  },
  {
    title: 'Project activity',
    text: 'The new concept is added to the child’s ongoing project so it connects to something they care about finishing.',
  },
  {
    title: 'Recap',
    text: 'The child says what they learned and what they got stuck on. Explaining it out loud is one of the fastest ways to find out whether it was understood.',
  },
];

const PROJECTS = [
  {
    icon: '📖',
    title: 'Interactive story',
    build: 'Characters that speak, move and respond, with the reader making choices that change the story.',
    practises: 'Sequencing and events.',
  },
  {
    icon: '🎮',
    title: 'Simple game',
    build: 'A character the player controls, with obstacles, rules and a way to win or lose.',
    practises: 'Conditions and game logic.',
  },
  {
    icon: '✅',
    title: 'Quiz game',
    build: 'A set of questions, answer checking and a score that updates as the player answers.',
    practises: 'Questions, answers, comparison and logic.',
  },
  {
    icon: '✨',
    title: 'Animation',
    build: 'A scene where objects move, change and react on a timeline the child controls.',
    practises: 'Movement, timing and loops.',
  },
  {
    icon: '🧮',
    title: 'Calculator',
    build: 'A small tool that takes numbers from the user, works something out and shows the answer.',
    practises: 'Variables, operators, input and output.',
  },
  {
    icon: '🎯',
    title: 'Mini problem-solving project',
    build: 'A small program that solves a problem the child chose themselves.',
    practises: 'Combining several concepts and planning independently.',
  },
];

const ACTIVITIES = [
  'Coding challenges',
  'Logic games',
  'Debugging challenges',
  'Programming puzzles',
  'Game-building activities',
  'Creative coding',
  'Algorithm challenges',
  'Project challenges',
];

const WHY_US = [
  {
    icon: '❤️',
    title: 'Child-friendly teaching',
    text: 'Coding is explained in a way children understand — everyday comparisons first, technical vocabulary once the idea has landed.',
  },
  {
    icon: '🪜',
    title: 'Structured learning',
    text: 'Children progress from simple concepts towards more advanced skills in a defined order, so nothing is introduced before the idea it depends on.',
  },
  {
    icon: '⌨️',
    title: 'Hands-on coding',
    text: 'Children write, test and improve code themselves. Watching a demonstration is the start of a lesson, not the whole of it.',
  },
  {
    icon: '🧩',
    title: 'Project-based learning',
    text: 'Projects connect concepts with outcomes, so a child can point at something and say what they made and how it works.',
  },
  {
    icon: '🐞',
    title: 'Problem-solving focus',
    text: 'Children think through a coding challenge before being given the answer. The struggle is where the learning happens.',
  },
  {
    icon: '💬',
    title: 'Parent communication',
    text: 'Parents can ask what their child is working on, what they have understood and where they need practice.',
  },
];

const MENTOR_FOCUS = [
  'Concept clarity — the child can explain the idea back, not just repeat the steps.',
  'Coding practice — the child’s hands stay on the keyboard for most of the session.',
  'Problem solving — a guiding question instead of supplying the answer.',
  'Creativity — children take a project in their own direction.',
  'Project building — helping a child finish what they started.',
  'Confidence — a broken program treated as ordinary rather than a failure.',
];

const MENTOR_QUESTIONS = [
  'How do you explain a concept to a child who does not get it the first time?',
  'How much of the session does my child spend actually coding?',
  'What happens when a child’s program does not work?',
  'How will I know what my child is working on?',
];

const DEMO_WATCH = [
  'Whether your child is coding or only watching',
  'How the educator responds when your child gets stuck',
  'Whether the vocabulary matches your child’s level',
  'Whether your child can explain afterwards what they did',
];

const HOME_SUPPORT = [
  {
    title: 'Encourage regular practice',
    text: 'Fifteen minutes twice a week beats two hours once a month.',
  },
  {
    title: 'Let children experiment',
    text: 'Changing a number to see what happens is real learning, not time-wasting.',
  },
  {
    title: 'Allow mistakes',
    text: 'A program that breaks is the normal state of coding, not a sign the child is struggling.',
  },
  {
    title: 'Ask them to explain their code',
    text: 'If they can explain it, they understood it. If they cannot, you have found the gap.',
  },
  {
    title: 'Do not fix every mistake',
    text: 'Ask “what did you expect it to do?” instead of pointing at the wrong line. Finding the bug is the skill worth building.',
  },
  {
    title: 'Celebrate effort',
    text: 'Praise the fact that they kept going after it broke, not just the finished screen.',
  },
];

const NEAR_ME = [
  {
    icon: '📍',
    title: 'Tell us your locality',
    text: 'Share which part of Hyderabad you are in and we can tell you whether the centre or an online batch works better for your family.',
  },
  {
    icon: '💻',
    title: 'Pick a learning mode',
    text: 'Classroom sessions run at Nizampet X Roads. Ask which modes are currently open.',
  },
  {
    icon: '🕒',
    title: 'Check availability',
    text: 'Batch timings shift as groups fill. A quick call or WhatsApp message gets you the current position.',
  },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  {
    icon: '🐍',
    title: 'Python for kids',
    text: 'The usual next step after block-based coding, once a child types comfortably.',
    to: '/python-for-kids',
  },
  {
    icon: '🤖',
    title: 'AI for kids',
    text: 'How smart technology works, and how to use it safely and responsibly.',
    to: '/ai-for-kids',
  },
  {
    icon: '🦾',
    title: 'Robotics',
    text: 'Coding applied to something physical the child can pick up and watch move.',
    to: '/programs/robotics',
  },
  {
    icon: '🖥️',
    title: 'Digital literacy',
    text: 'Using a computer purposefully — files, typing, searching and staying safe online.',
    to: '/junior-skills/digital-literacy',
  },
  {
    icon: '♟️',
    title: 'Chess',
    text: 'Planning several moves ahead and thinking about consequences before acting.',
    to: '/programs/chess',
  },
  {
    icon: '🧠',
    title: 'Brain games',
    text: 'Reasoning, memory and puzzles away from the screen.',
    to: '/programs/brain-games',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'What is the best age to start coding?',
    a: 'Children can start once they can follow simple instructions and stay with a short activity. Younger children begin with block-based coding; older children move to typed programming. Readiness matters more than a specific age.',
  },
  {
    q: 'Is coding easy for kids?',
    a: 'The first ideas are easy — putting instructions in order is something most children already understand. It gets harder gradually, which is why the level is matched to the child rather than to their year in school.',
  },
  {
    q: 'Does my child need previous coding experience?',
    a: 'No. Complete beginners can join. The starting level is decided from the child’s age, reading comfort and any previous exposure.',
  },
  {
    q: 'Which coding language is best for kids?',
    a: 'Most children start with block-based visual coding because it removes typing and spelling errors, then move to a text-based language once they read and type comfortably.',
  },
  {
    q: 'What can kids build with coding?',
    a: 'Interactive stories, simple games, quiz games, animations, a basic calculator and small problem-solving projects — matched to the child’s level rather than handed out uniformly.',
  },
  {
    q: 'Is this the same as medical coding?',
    a: 'No. Searching for coding classes in Hyderabad returns a great many medical billing and coding institutes. This is computer programming, for school-age children.',
  },
];

export default function CodingPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Coding classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children learn programming through simple concepts, guided activities and practical
                projects. Your child learns how to put instructions in the right order, spot what went
                wrong, fix it, and build something that actually works — a story, a game, an animation. No
                previous coding experience is needed to start.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#curriculum" className="btn btn-outline">
                  Explore the programme
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Blocks first, typed code next
                </li>
                <li>
                  <span className="tick">★</span> A project every stage
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>How coding is taught here</h2>
              <ul className="pill-row">
                {HERO_TAGS.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
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

      {/* ---------- What is coding ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What are coding classes for kids?"
            lead="Coding means giving a computer a set of instructions. A computer is very fast, but it does not guess — it does exactly what it is told, in exactly the order it is told. Coding classes teach children to write those instructions clearly."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h2>How computers follow instructions</h2>
              <p>
                Think about explaining to someone how to make a jam sandwich. You would say: take two
                slices of bread, open the jar, spread the jam, put the slices together. Miss a step, or put
                the steps in the wrong order, and the sandwich goes wrong. A computer works the same way —
                except it never fills in the missing step for you.
              </p>
              <p>
                That is the whole idea children practise in coding classes. They learn to think in steps,
                put those steps in order, check whether the result is what they expected, and change the
                instructions when it is not.
              </p>
              <h2>Why age-appropriate teaching matters</h2>
              <p>
                A six-year-old and a thirteen-year-old both benefit from coding, but not from the same
                lesson. Younger children learn best when instructions are blocks they can drag and drop,
                and when the result is something they can see move on screen. Older children who read and
                type comfortably can handle typed code, longer projects and more abstract ideas.
              </p>
              <p>
                Teaching a child concepts far above their level usually produces copying, not
                understanding. Matching the level to the child is what keeps coding enjoyable instead of
                frustrating.
              </p>
              <ul className="flow-strip">
                <li>
                  <span>Idea</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Instructions</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Code</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Run</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Improve</span>
                </li>
              </ul>
            </div>

            <div className="prose">
              <h2>Why blocks first, and why not for long</h2>
              <p>
                Blocks remove typing so a seven-year-old can concentrate on the logic. But a child who
                only ever drags blocks believes programming is a puzzle game. We move to typed code as
                soon as the logic is secure, so the transition happens while the ideas are still fresh.
              </p>
              <ul className="pill-row">
                <li>Logic taught before syntax, never instead of it</li>
                <li>The same project rebuilt in text to show they are the same thing</li>
                <li>Typing practice built into sessions, not set as homework</li>
                <li>Python chosen because it is the language they will meet again in school</li>
              </ul>
              <h2>What a session leaves behind</h2>
              <p>
                Ten minutes reviewing last week, thirty minutes building, and the last ten minutes showing
                the batch what broke and how it was fixed. Children explain their own bugs out loud, which
                is the fastest way we know to make debugging feel ordinary rather than shameful.
              </p>
            </div>
          </div>

          {/* Full width rather than in a column: this is a two-column explainer
              of its own, and squeezing it beside the prose would leave both
              halves too narrow to read. */}
          <div style={{ marginTop: 48 }}>
            <PickSteps
              title="Try it: give the robot instructions"
              intro="A robot starts in the bottom-left corner of a grid, with a star in the top-right. Pick a program and see what the robot does with it — in order, exactly as written."
              options={PROGRAM_RUNS}
              stepTitles={RUN_STEPS}
              note="This is sequencing — the first concept children learn in a coding class."
            />
          </div>

          <div className="quick-answer" style={{ marginTop: 48 }}>
            <h2>The idea underneath all of it</h2>
            <p>
              Coding is not about memorising commands. It is about thinking clearly, in order. Once a
              child can do that, the language they use becomes a detail rather than a barrier.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Why it matters"
            title="Why should kids learn coding?"
            lead="Not every child who learns coding will become a programmer, and that is fine. The habits coding builds — ordering steps, testing an idea, finding the mistake — are useful in maths, science, writing and everyday decisions too."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <p className="ai-eg">
                  <b>In class:</b> {c.eg}
                </p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            These are the skills coding practice tends to develop over time. How much a particular child
            develops them depends on age, interest and how regularly they practise — there are no
            guaranteed outcomes here, and any programme that promises them is worth questioning.
          </p>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Skills"
            title="Skills children develop through coding"
            lead="Twelve practical skills coding practice tends to build."
          />
          <div className="skill-tiles">
            {SKILLS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Coding for different age groups"
            lead="Coding is taught differently at different ages. These bands show how the focus usually shifts; they are indicative rather than fixed batches."
          />
          <div className="grid-4">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.kv}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <p>{a.text}</p>
                <ul className="pill-row">
                  {a.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Two children of the same age can sit at different points on this scale. A child who has coded
            before may move ahead quickly; a complete beginner may need longer on the basics. This is one
            of the clearest things a trial session sorts out.
          </p>
        </div>
      </section>

      {/* ---------- Curriculum ---------- */}
      <div id="curriculum">
        <Curriculum curriculum={page.curriculum} />
      </div>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Curriculum"
            title="What each learning block covers"
            lead="Five blocks, worked through in order. How far a child goes depends on their age, starting level and pace."
          />
          <TopicTabs items={BLOCKS} label="Coding curriculum blocks" />
          <p className="note-line">
            This outline describes how coding is structured for children. Ask us to confirm the exact
            syllabus, module order and depth for the batch your child would join.
          </p>
        </div>
      </section>

      {/* ---------- Tools ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Tools"
            title="What coding languages can kids learn?"
            lead="Children move through categories of coding tools rather than one fixed language. Which tools a batch uses depends on the age and level of the children in it."
          />
          <div className="grid-3">
            {TOOLS.map((t) => (
              <div className="card" key={t.title}>
                <span className="icon">{t.icon}</span>
                <p className="kv">{t.kv}</p>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <p className="ai-eg">{t.eg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How learning works ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The learning loop"
            title="How kids learn coding at Brolly Juniors"
            lead="Understand → Try → Code → Test → Fix → Build. The same six steps repeat for every new concept, which is what makes the learning stick."
          />
          <div className="steps">
            {METHOD_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="section-lead center" style={{ marginTop: 32 }}>
            Children spend most of the session with their hands on the work. A child who has only watched
            someone else code has not learned to code.
          </p>
        </div>
      </section>

      {/* ---------- Sample class ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in a coding class?"
            lead="Seven stages, in the same order every time."
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
            eyebrow="Learning by building"
            title="Coding projects kids can build"
            lead="Projects are how a concept turns into a skill. Each one practises specific ideas, and each is matched to the child’s level."
          />
          <div className="grid-3">
            {PROJECTS.map((p) => (
              <div className="card" key={p.title}>
                <span className="icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>
                  <span className="kv">What the child builds</span>
                  {p.build}
                </p>
                <p>
                  <span className="kv">What it practises</span>
                  {p.practises}
                </p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            The projects a particular child builds depend on their level. A beginner will not start with
            the calculator, and a child at project level will not stop at a single animation.
          </p>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Between projects"
            title="Fun coding activities"
            lead="Short activities used between bigger builds, so children practise one idea at a time."
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
            eyebrow="The difference"
            title="Why parents choose Brolly Juniors for coding"
            lead="What separates one coding class from another is not the tool on the screen. It is how the concept is explained, how much the child builds themselves, and what happens when something goes wrong."
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

      {/* ---------- Educators ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Who teaches</span>
            <h2>What our educators focus on</h2>
            <p>
              Knowing how to code and knowing how to teach a nine-year-old to code are two different
              skills. The second one is what matters in a children’s coding class.
            </p>
            <ul className="tick-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              {MENTOR_FOCUS.map((m) => (
                <li key={m}>
                  <span className="tick">✓</span> {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2>Questions worth asking any coding class</h2>
            <ul>
              {MENTOR_QUESTIONS.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className="note-line">
              Ask us who teaches the batch you are considering and we will tell you.
            </p>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning modes, timings and fees"
            lead="We share these directly rather than publishing them here, so what you get is current and specific to your child’s level."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning modes</h3>
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
              <h3>Coding fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on level, batch and duration</li>
                <li>We explain what is included first</li>
                <li>Free trial before you decide anything</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Two children joining the same month can be quoted differently — a beginner starting at the
            first stage and a child joining at project level are not doing the same programme, for the same
            length of time. Ask what sits behind the number as well; that is what makes two quotes
            comparable.
          </p>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Let your child try a coding class</h2>
            <p>
              A trial answers the questions a website cannot. Does your child follow the explanation? Do
              they stay interested for the whole session? Do they ask questions, or go quiet? Is the level
              right, too easy, or too hard?
            </p>
            <h3>What to watch during the trial</h3>
            <ul className="pill-row">
              {DEMO_WATCH.map((d) => (
                <li key={d}>{d}</li>
              ))}
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
            <TrialForm program="Coding" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Between classes"
            title="Supporting coding practice at home"
            lead="What happens between sessions matters as much as the session itself. Coding is a practice skill — a child who touches it once a week forgets more than a child who touches it briefly, more often."
          />
          <div className="grid-3">
            {HOME_SUPPORT.map((h) => (
              <div className="guide-card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            You do not need to know how to code to help your child learn it. Most of what helps is about
            how you respond, not what you know.
          </p>
        </div>
      </section>

      {/* ---------- Hyderabad ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad, Telangana</span>
            <h2>Coding classes for kids in Hyderabad</h2>
            <p>
              Parents in Hyderabad usually start from one of two places. Either the child has shown an
              interest — asking how a game works, wanting to make one — or the parent wants them to build
              the thinking skills early, before school gets heavier. Both are reasonable starting points,
              and both lead to the same first question: what level should my child start at?
            </p>
            <p>
              That question is answered by the child, not by their age alone. It is why a trial session is
              more useful than a brochure, and why the fee depends on the programme a child is actually
              placed in.
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
              Please call or message before visiting, so we can keep an educator free to talk you through
              the programme.
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
      <section className="band-soft">
        <div className="container">
          <SectionHead
            title="Coding classes near me in Hyderabad"
            lead="Start from location, availability and learning mode, and we will tell you what fits."
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
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Check availability
            </Link>
            <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Explore more kids learning programs"
            lead="Children often combine one technical programme with one that works a different kind of thinking."
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
            title="Coding for kids: quick answers"
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

      <CtaBand variant={page.cta} />
    </>
  );
}
