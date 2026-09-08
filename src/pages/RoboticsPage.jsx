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

/* The robotics programme page.
 *
 * Ported from the standalone robotics-classes-for-kids-in-hyderabad build. The
 * route, the SEO record, the four-stage curriculum and the FAQ set stay in
 * data/catalog/programmes.js, so this component supplies the body only.
 *
 * What is handled rather than transcribed:
 *
 *   - The source carried its own four "learning levels" alongside its six
 *     curriculum blocks. The levels say the same thing as the four stages
 *     already published in the catalogue, so the stage track renders those and
 *     the six blocks follow as the syllabus behind them. One structure, stated
 *     once.
 *   - Contact details come from data/site.js rather than being hardcoded, and
 *     its placeholder demo form is replaced by the real booking form.
 *   - Its notes on kits, timings, modes and fees stay as written. Robotics has
 *     one variable most programmes do not — whether components are provided,
 *     shared or bought — and that is the single most common reason two quotes
 *     look different, so the page keeps saying it.
 *
 * The sense → decide → act demonstration is the source's own interactive
 * block, rebuilt on the shared PickSteps component.
 */

const TRUST = [
  {
    title: 'Beginner-friendly',
    text: 'Children start with what a robot is and how one part moves another — not with a circuit diagram.',
  },
  {
    title: 'Hands-on learning',
    text: 'Children handle the parts themselves. A robotics class where the child only watches is not a robotics class.',
  },
  {
    title: 'Build and code',
    text: 'Building and programming are taught together, so children see instructions turn into physical movement.',
  },
  {
    title: 'Project-based',
    text: 'Every set of concepts ends with a working project the child can demonstrate and explain.',
  },
];

const HERO_TAGS = [
  'Beginner-friendly',
  'Hands-on projects',
  'Age-appropriate builds',
  'STEM-based learning',
  'Kits provided in class',
];

/* The three sensor readings from the source's interactive block. Each one runs
   the same three steps, which is the entire point being made. */
const SENSOR_CASES = [
  {
    key: 'clear',
    label: 'Path is clear',
    rule: 'if distance > 15 then drive forward',
    steps: [
      'Nothing within range in front.',
      'The distance is greater than the limit, so the rule says keep going.',
      'Both wheels turn forward at the same speed.',
    ],
  },
  {
    key: 'wall',
    label: 'Wall ahead',
    rule: 'if distance < 15 then stop and turn right',
    steps: [
      'Something is 8 cm away, closer than the 15 cm limit.',
      'The distance is below the limit, so the rule says stop and turn.',
      'One wheel stops while the other keeps turning, so the robot turns away.',
    ],
  },
  {
    key: 'line',
    label: 'Dark line below',
    rule: 'if floor is dark then follow the line',
    steps: [
      'The floor sensor is reading dark instead of light.',
      'Dark means the robot is on the line, so the rule says stay on it.',
      'The robot keeps following the line and corrects when it drifts.',
    ],
  },
];

const SENSOR_STEPS = ['Sensor reads', 'Program decides', 'Motors act'];

const WHY_LEARN = [
  {
    icon: '🎯',
    title: 'Problem solving',
    text: 'Children learn to understand a problem and find a practical solution. The robot gives an honest answer — it either does the job or it does not.',
    eg: 'A robot keeps turning too early. The child has to work out whether it is the sensor, the rule or the wheels.',
  },
  {
    icon: '✨',
    title: 'Creativity',
    text: 'Children design and build their own robot projects. Two children given the same parts rarely produce the same machine.',
    eg: 'An open build brief where the child decides what their robot should do.',
  },
  {
    icon: '🪜',
    title: 'Logical thinking',
    text: 'Robotics pushes children to think step by step. Parts go together in an order, and instructions run in an order.',
    eg: 'A child predicts what the robot will do before pressing start, then checks whether they were right.',
  },
  {
    icon: '💻',
    title: 'Coding skills',
    text: 'Children connect programming concepts with physical actions. A loop stops being an abstract idea when it makes a wheel keep turning.',
    eg: 'The same condition is changed twice, and the robot behaves differently each time.',
  },
  {
    icon: '⚙️',
    title: 'STEM learning',
    text: 'Balance, distance, speed and angles turn up inside a build rather than in a textbook.',
    eg: 'A top-heavy robot tips over, and the child learns about weight distribution by fixing it.',
  },
  {
    icon: '💪',
    title: 'Hands-on confidence',
    text: 'Building and testing gives children room to learn by experiment, and to get comfortable with things not working the first time.',
    eg: 'A child rebuilds the same section three times and finishes it themselves.',
  },
];

const SKILLS = [
  'Problem solving',
  'Logical thinking',
  'Creativity',
  'Coding',
  'Engineering thinking',
  'Computational thinking',
  'Design thinking',
  'Teamwork',
  'Debugging',
  'Planning',
  'Experimentation',
  'Project building',
];

const AGE_BANDS = [
  {
    kv: 'Ages 6–8',
    title: 'Robotics foundations',
    text: 'Mostly building and movement. The aim is for the child to see cause and effect in something they made with their hands.',
    chips: ['Simple machines', 'Basic building', 'Movement', 'Simple instructions'],
  },
  {
    kv: 'Ages 8–10',
    title: 'Robotics skill building',
    text: 'The robot starts responding to its surroundings, and the first real programming appears.',
    chips: ['Robot construction', 'Basic programming', 'Sensors', 'Simple challenges'],
  },
  {
    kv: 'Ages 10–13',
    title: 'Robotics & coding projects',
    text: 'Programming logic carries more weight, and projects run across several sessions.',
    chips: ['Sensors', 'Motors', 'Programming logic', 'Automation', 'Project development'],
  },
  {
    kv: 'Ages 13–15',
    title: 'Advanced robotics projects',
    text: 'More complete systems, more independence, and design decisions made by the child rather than the educator.',
    chips: ['Complex systems', 'Programming', 'Automation', 'Project design', 'Problem solving'],
  },
];

/* The source's six curriculum blocks. The stage track above carries the four
   published stages; these are the topics inside them. */
const BLOCKS = [
  {
    key: 'fundamentals',
    label: 'Robotics fundamentals',
    title: 'Robotics fundamentals',
    intro: 'The starting block. Children learn what a robot is before building one.',
    bullets: [
      { term: 'Introduction to robots', text: 'what makes a machine a robot, and where robots already exist around us.' },
      { term: 'Robot components', text: 'the body, the motors, the sensors, the controller and what each contributes.' },
      { term: 'Movement', text: 'how turning a motor becomes a robot going forward, backward or turning.' },
      { term: 'Simple mechanisms', text: 'gears, levers and wheels, and how one part makes another move.' },
    ],
    outcome: 'point at a part of a robot and say what it is for.',
  },
  {
    key: 'building',
    label: 'Building & design',
    title: 'Building & design',
    intro: 'The physical craft. This is the block where a child learns why their robot fell apart.',
    bullets: [
      { term: 'Assembling parts', text: 'following a build accurately and checking as they go.' },
      { term: 'Structure', text: 'making a build stable enough to survive being driven around.' },
      { term: 'Movement systems', text: 'putting motors and wheels together so the robot goes where it should.' },
      { term: 'Design thinking', text: 'starting from what the robot needs to do, then deciding how to build it.' },
    ],
    outcome: 'build a robot that stays together and moves reliably.',
  },
  {
    key: 'sensors',
    label: 'Sensors',
    title: 'Sensors',
    intro: 'Where the robot stops being a remote-control toy and starts responding on its own.',
    bullets: [
      { term: 'Understanding sensors', text: 'what a sensor measures and what it cannot know.' },
      { term: 'Sensor inputs', text: 'reading a value and understanding what the number means.' },
      { term: 'Responding to surroundings', text: 'connecting a reading to a decision the robot makes.' },
    ],
    outcome: 'explain why the robot stopped, using the sensor reading.',
  },
  {
    key: 'programming',
    label: 'Programming',
    title: 'Programming',
    intro:
      'The instructions that turn parts into behaviour. Block-based for younger children, typed for older ones.',
    bullets: [
      { term: 'Instructions', text: 'telling the robot to do one specific thing.' },
      { term: 'Sequences', text: 'putting instructions in an order that produces the behaviour wanted.' },
      { term: 'Conditions', text: '“if the sensor reads this, then do that” rules.' },
      { term: 'Loops', text: 'repeating a check or an action without writing it out many times.' },
      { term: 'Basic automation', text: 'a robot that completes a task without being steered.' },
    ],
    outcome: 'write a program that makes the robot decide for itself.',
  },
  {
    key: 'testing',
    label: 'Testing & debugging',
    title: 'Testing & debugging',
    intro: 'Most of robotics is this block. It is also the part parents notice at home.',
    bullets: [
      { term: 'Testing behaviour', text: 'running it more than once and in more than one situation.' },
      { term: 'Identifying problems', text: 'deciding whether the fault is in the build, the sensor or the code.' },
      { term: 'Changing code', text: 'adjusting one thing at a time so the effect is clear.' },
      { term: 'Improving designs', text: 'rebuilding a part because testing showed it was the weak point.' },
    ],
    outcome: 'stay calm when the robot fails and work through it methodically.',
  },
  {
    key: 'projects',
    label: 'Robotics projects',
    title: 'Robotics projects',
    intro: 'Everything learned so far combined into something the child owns and can demonstrate.',
    bullets: [
      { term: 'Obstacle challenges', text: 'navigating a course without hitting anything.' },
      { term: 'Moving robots', text: 'control, speed and accuracy.' },
      { term: 'Sensor-based projects', text: 'behaviour driven entirely by what the robot detects.' },
      { term: 'Automation projects', text: 'a robot that repeats a useful task on its own.' },
    ],
    outcome: 'plan, build, program, test and explain a complete robot.',
  },
];

const TOOLS = [
  {
    icon: '🧰',
    title: 'Robotics kits',
    text: 'The set of parts a child builds from — structural pieces, connectors, wheels and the controller they plug into.',
    eg: 'Ask us which kit the batch uses, whether it is provided in class, and whether anything is bought separately.',
  },
  {
    icon: '📡',
    title: 'Sensors',
    text: 'Components that measure something about the surroundings — distance, light, colour, touch or sound — and hand that reading to the program.',
    eg: 'Sensors are what let a robot act without a person steering it.',
  },
  {
    icon: '⚙️',
    title: 'Motors',
    text: 'The parts that create movement. Children learn how motor speed, direction and gearing change what the robot does.',
    eg: 'Most early robot problems turn out to be motor or wheel problems.',
  },
  {
    icon: '🔌',
    title: 'Controllers',
    text: 'The small board that runs the child’s program, passes instructions to the motors and reads the sensors.',
    eg: 'This is where building and coding meet.',
  },
  {
    icon: '💻',
    title: 'Programming environments',
    text: 'Where the child writes instructions — block-based drag-and-drop for younger children, moving to typed code as reading and typing improve.',
    eg: 'Ask which environment matches your child’s age and level.',
  },
  {
    icon: '❓',
    title: 'Which ones for your child?',
    text: 'The right combination depends on age, previous experience and the projects in the current programme.',
    eg: 'Ask during the free trial, including whether kit costs are separate from the fee.',
  },
];

const METHOD_STEPS = [
  {
    title: 'Imagine',
    text: 'The child decides what the robot should do before touching a single part. A goal first, parts second.',
  },
  { title: 'Design', text: 'A quick plan or sketch — which parts, roughly what shape, where the sensor goes.' },
  { title: 'Build', text: 'The child assembles it themselves. Educators guide; they do not build it for the child.' },
  { title: 'Code', text: 'Instructions are written and loaded, connecting the program to the physical machine.' },
  { title: 'Test', text: 'The robot runs. The child compares what happened with what they expected.' },
  {
    title: 'Improve',
    text: 'Something is changed — a rule, a wheel, a sensor position — and it runs again.',
  },
];

const SESSION_FLOW = [
  {
    title: 'Warm-up',
    text: 'A short STEM puzzle — which gear turns faster, what happens if this wheel spins backwards.',
  },
  {
    title: 'Concept',
    text: 'One new idea, explained with a real-world comparison first. Only one per session, so nothing gets crowded out.',
  },
  {
    title: 'Demonstration',
    text: 'The educator shows the concept working on a real robot, including what it looks like when it goes wrong.',
  },
  {
    title: 'Build activity',
    text: 'Children assemble their own version. This is the longest stage and the one that decides whether the session worked.',
  },
  { title: 'Coding', text: 'The child writes the instructions that make their build behave the way it should.' },
  {
    title: 'Testing',
    text: 'It runs. Something usually does not work, and the child traces it back to the build, the sensor or the code.',
  },
  {
    title: 'Challenge',
    text: 'A twist on the same concept with no step-by-step help — change the rule, add an obstacle, make it faster.',
  },
  {
    title: 'Recap',
    text: 'The child explains what their robot does and what they got stuck on. Saying it aloud is the fastest way to check understanding.',
  },
];

const PROJECTS = [
  {
    icon: '📡',
    title: 'Obstacle-avoiding robot',
    build: 'A robot that detects something in front of it and changes direction before hitting it.',
    practises: 'Sensors and movement.',
  },
  {
    icon: '➰',
    title: 'Line-following robot',
    build: 'A robot that stays on a marked path by continuously checking what is underneath it.',
    practises: 'Sensor-based movement and continuous decisions.',
  },
  {
    icon: '🚦',
    title: 'Smart traffic light',
    build: 'A working signal that changes on a timed sequence, and can react to input.',
    practises: 'Simple automation, sequences and timing.',
  },
  {
    icon: '🚗',
    title: 'Moving robot',
    build: 'The first working robot — forward, backward, turning, stopping, under the child’s control.',
    practises: 'Motors, control and accuracy.',
  },
  {
    icon: '🦾',
    title: 'Robotic arm',
    build: 'A jointed arm that lifts or moves an object from one place to another.',
    practises: 'Movement, mechanisms and precision.',
  },
  {
    icon: '🤖',
    title: 'Automated project',
    build: 'A project of the child’s own choosing that combines sensors, programming and physical parts.',
    practises: 'Combining concepts and planning independently.',
  },
];

const ACTIVITIES = [
  'Build challenges',
  'Robot races',
  'Sensor challenges',
  'Obstacle challenges',
  'Coding challenges',
  'Design challenges',
  'Robot debugging',
  'STEM puzzles',
  'Team challenges',
];

const WHY_US = [
  {
    icon: '❤️',
    title: 'Child-friendly teaching',
    text: 'Robotics concepts are explained in a way children understand — everyday comparisons first, technical vocabulary once the idea has landed.',
  },
  {
    icon: '🔧',
    title: 'Hands-on learning',
    text: 'Children learn by building, testing and experimenting. The educator’s job is to guide the build, not to complete it while the child watches.',
  },
  {
    icon: '🪜',
    title: 'Structured progression',
    text: 'Children move from basic concepts towards complex projects in a defined order, so nothing is introduced before the idea it depends on.',
  },
  {
    icon: '🧩',
    title: 'Project-based learning',
    text: 'Concepts connect to practical builds, so a child can point at something and explain what it does and why.',
  },
  {
    icon: '💻',
    title: 'Coding and robotics together',
    text: 'Children see how code controls a physical system, which makes programming far less abstract than it is on a screen alone.',
  },
  {
    icon: '🐞',
    title: 'Problem-solving focus',
    text: 'When a robot does not behave as expected, children find the reason themselves. That moment is the lesson, not an interruption to it.',
  },
];

const MENTOR_FOCUS = [
  'Concept clarity — the child can explain the idea back, not just repeat the build steps.',
  'Hands-on building — the parts stay in the child’s hands for most of the session.',
  'Coding practice — every instruction connects to something the child can watch happen.',
  'Problem solving — a guiding question instead of taking the robot away and fixing it.',
  'Creativity — children take a build in their own direction where the brief allows.',
  'Project development — helping a child finish what they started rather than abandoning it half-built.',
];

const MENTOR_QUESTIONS = [
  'How many children share one kit?',
  'How much of the session does my child spend building rather than watching?',
  'What happens when a child’s robot does not work?',
  'Does my child finish and keep a project, or is the build dismantled each week?',
  'How will I know what my child is working on?',
];

const DEMO_WATCH = [
  'Whether your child is building or only watching',
  'How many children are sharing one kit',
  'How the educator responds when a robot fails',
  'Whether your child can explain afterwards what they made',
];

const HOME_SUPPORT = [
  {
    title: 'Encourage curiosity',
    text: 'Point out the robots and automatic systems already around you — lifts, automatic doors, washing machines.',
  },
  {
    title: 'Ask how their robot works',
    text: 'Not whether it worked. How. The explanation is where the understanding shows.',
  },
  {
    title: 'Let them experiment',
    text: 'Taking an old toy apart teaches more than most worksheets.',
  },
  {
    title: 'Allow mistakes',
    text: 'A robot that failed in class is a normal week, not a bad one.',
  },
  {
    title: 'Celebrate effort',
    text: 'Notice the rebuild they did three times, not only the finished machine.',
  },
  {
    title: 'Avoid comparisons',
    text: 'Children build at very different speeds, and comparing them usually slows the slower one further.',
  },
];

const NEAR_ME = [
  {
    icon: '📍',
    title: 'Tell us your locality',
    text: 'Share which part of Hyderabad you are in and we can tell you whether attending at Nizampet X Roads is practical for your family.',
  },
  {
    icon: '🧰',
    title: 'Ask about learning mode',
    text: 'Classroom sessions run at the centre with kits provided. Ask whether an online batch is available and how materials are handled.',
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
    icon: '💻',
    title: 'Coding for kids',
    text: 'The logic behind robotics, learned on screen — sequencing, loops, conditions and debugging.',
    to: '/programs/coding',
  },
  {
    icon: '🐍',
    title: 'Python for kids',
    text: 'Typed programming for children who have outgrown block-based coding.',
    to: '/python-for-kids',
  },
  {
    icon: '🤖',
    title: 'AI for kids',
    text: 'How smart technology works, and how to use it safely and responsibly.',
    to: '/ai-for-kids',
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
    q: 'What is the best age to start robotics?',
    a: 'Children can start once they can handle small parts safely and follow a build step by step. Younger children begin with building and movement; sensors and programming come later. Readiness matters more than a specific age.',
  },
  {
    q: 'Is robotics easy for kids?',
    a: 'The first stages are — putting parts together and watching something move is very achievable. It gets harder gradually as sensors and programming logic are added, which is why children are placed by level.',
  },
  {
    q: 'Does my child need coding experience to learn robotics?',
    a: 'No. Children can start with building alone. Programming is introduced when the robot needs instructions, usually with drag-and-drop blocks before any typing.',
  },
  {
    q: 'What can kids build in robotics?',
    a: 'A moving robot, an obstacle-avoiding robot, a line-following robot, a smart traffic light, a robotic arm and simple automation projects — matched to the child’s level.',
  },
  {
    q: 'Which robotics kit is best for kids?',
    a: 'The right kit depends on the child’s age and level rather than on brand. Tools vary with the project, so ask which kit the current batch uses.',
  },
  {
    q: 'Are robotics classes available near me?',
    a: 'Classes run from the centre at Nizampet X Roads, Hyderabad. Share your locality and preferred mode and we will tell you what is currently available.',
  },
];

export default function RoboticsPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Robotics classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children build, wire and program working robots through age-appropriate projects. Your
                child puts the parts together, writes the instructions that control them, watches what
                happens, and changes what did not work. No previous robotics or electronics experience is
                needed to start.
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
                  <span className="tick">★</span> Kits provided in class
                </li>
                <li>
                  <span className="tick">★</span> Build, code, test, improve
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>What robotics here looks like</h2>
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

      {/* ---------- What is robotics ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What are robotics classes for kids?"
            lead="A robot is a machine that can sense something, decide what to do about it, and then act. Robotics is building that machine and writing the instructions that tell it how to behave. Classes teach both halves together."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h2>How robots use sensors and instructions</h2>
              <p>
                Every robot follows the same loop. A sensor reads something about the world — how far
                away a wall is, how dark the floor is, whether something moved. The program compares that
                reading against a rule. The motors then act on the decision.
              </p>
              <p>
                Children find this easier to grasp than adults expect, because they already do it
                themselves. You see the kerb, you decide to stop, you stop. The robot’s version is just
                written down.
              </p>
              <h2>Why hands-on learning works here</h2>
              <p>
                Robotics gives a child something physical to be wrong about. A program on a screen either
                works or it does not; a robot drives into a wall in front of everyone. That feedback is
                immediate and impossible to ignore, which is what makes children willing to go back and
                change something.
              </p>
              <p>
                Building also involves the hands, patience and spatial thinking, which is why some
                children who find screen-only subjects tiring take to robotics quickly.
              </p>
              <ul className="flow-strip">
                <li>
                  <span>Imagine</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Build</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Code</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Test</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Improve</span>
                </li>
              </ul>
            </div>

            <div className="prose">
              <h2>Why the robot is allowed to fail</h2>
              <p>
                A robot that works first time teaches very little. Sessions build in a fault — a reversed
                motor, a sensor reading in the wrong units — and the child diagnoses it. Educators are
                told not to fix it for them, which is slower in the session and considerably faster over
                a term.
              </p>
              <h2>Hardware that is meant to be taken apart</h2>
              <p>
                Children work with reusable kits — motors, controllers, distance and line sensors — that
                are rebuilt every term. Nothing is glued and nothing is precious, so a child is free to
                dismantle a working robot to find out why it works.
              </p>
              <ul className="pill-row">
                <li>Kits provided; nothing to buy before the first class</li>
                <li>Two children per kit at most, so both do the building</li>
                <li>Low-voltage components only, checked before every session</li>
              </ul>
            </div>
          </div>

          {/* The demonstration sits full width rather than in a column: it is a
              two-column explainer of its own, and squeezing it beside the prose
              would leave both halves too narrow to read. */}
          <div style={{ marginTop: 48 }}>
            <PickSteps
              title="Try it: what does the robot sense?"
              intro="Pick what the sensor sees. Watch the robot read it, decide and act — the same three steps every robot follows."
              options={SENSOR_CASES}
              stepTitles={SENSOR_STEPS}
              note="This is the sense → decide → act loop, the first idea children meet in a robotics class."
            />
          </div>

          <div className="quick-answer" style={{ marginTop: 48 }}>
            <h2>The idea the whole subject rests on</h2>
            <p>
              A robot is not clever. It follows a rule a child wrote. Understanding that is what turns
              robotics from a toy into a subject.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Why it matters"
            title="Why should kids learn robotics?"
            lead="Most children who take robotics will not become engineers, and that is fine. What robotics gives them is repeated practice at a specific loop: have an idea, build it, watch it fail, work out why, fix it."
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
            These are the skills robotics practice tends to develop over time. How much any one child
            develops them depends on age, interest and how regularly they attend — there are no
            guaranteed outcomes here, and any programme promising engineering careers or competition wins
            is worth questioning.
          </p>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Skills"
            title="Skills children develop through robotics"
            lead="Twelve practical skills robotics tends to build."
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
            title="Robotics for different age groups"
            lead="Robotics is taught very differently at six and at fourteen. These bands show how the focus shifts; they are indicative rather than fixed batches."
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
            Age is only a starting point. A ten-year-old who has never built anything and a ten-year-old
            who has coded before belong in different places, which is one of the clearest things a trial
            session settles.
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
            lead="Six blocks, worked through in order. How far a child goes depends on their age, starting level and pace."
          />
          <TopicTabs items={BLOCKS} label="Robotics curriculum blocks" />
          <p className="note-line">
            This outline describes how children’s robotics is structured. Ask us to confirm the exact
            syllabus, module order and materials for the batch your child would join.
          </p>
        </div>
      </section>

      {/* ---------- Tools ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Kits and tools"
            title="What robotics tools will my child use?"
            lead="Tools vary with the child’s age, level and project. Rather than list brands that may not apply to your child’s batch, here is what each type of component actually does."
          />
          <div className="grid-3">
            {TOOLS.map((t) => (
              <div className="card" key={t.title}>
                <span className="icon">{t.icon}</span>
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
            title="How kids learn robotics at Brolly Juniors"
            lead="Imagine → Design → Build → Code → Test → Improve. The same six steps repeat for every new concept, which is what makes the learning stick."
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
            Children spend most of the session with parts in their hands. A child who has only watched a
            robot being built has not learned robotics.
          </p>
        </div>
      </section>

      {/* ---------- Sample class ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in a robotics class?"
            lead="Eight stages, in the same order every time."
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
            title="Robotics projects kids can build"
            lead="Projects are how a concept turns into a skill. Each one practises specific ideas, and each is matched to the child’s level rather than handed out uniformly."
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
            Which projects a particular child builds depends on their level and the kit in use. A
            beginner will not start with the robotic arm, and a child at project level will not stop at a
            moving robot.
          </p>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Between builds"
            title="Fun robotics activities"
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
            title="Why parents choose Brolly Juniors for robotics"
            lead="What separates one robotics class from another is rarely the kit on the table. It is how much the child touches it, how the concept is explained, and what happens when the robot does not work."
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
              Knowing robotics and knowing how to keep eight children building at once are different
              skills. The second one is what matters in a children’s robotics class.
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
            <h2>Questions worth asking any robotics class</h2>
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
            lead="Robotics needs physical parts, which makes the classroom session its natural home and makes the online question worth asking directly."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning modes</h3>
              <p className="kv">Classroom first</p>
              <ul>
                <li>Hands-on building with the kit in front of the child</li>
                <li>Guidance at the moment something goes wrong</li>
                <li>Ask whether an online batch is running, and how parts reach your child</li>
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
                <li>Weekend batches, which suit builds needing unbroken time</li>
                <li>Availability shifts as groups fill</li>
              </ul>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
            <div className="plan">
              <h3>Robotics fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on level, batch and duration</li>
                <li>Ask whether kits are included or charged separately</li>
                <li>Free trial before you decide anything</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Robotics has one extra variable most subjects do not: the kit. Whether components are
            provided in class, shared between children, or bought by the family changes the total
            noticeably — and it is the single most common reason two robotics quotes look different.
          </p>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Let your child try a robotics class</h2>
            <p>
              A trial answers what a website cannot. Does your child reach for the parts, or wait to be
              told? Do they stay with it when the robot does not move? Is the level right, too easy, or
              too hard?
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
            <TrialForm program="Robotics" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Between classes"
            title="Supporting robotics learning at home"
            lead="Robotics has an awkward gap: the kit usually stays at the centre. That does not mean learning stops between sessions — it means the useful things you can do at home are about thinking rather than building."
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
            You do not need to understand electronics to help your child with robotics. Most of what helps
            is about how you respond, not what you know.
          </p>
        </div>
      </section>

      {/* ---------- Hyderabad ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad, Telangana</span>
            <h2>Robotics classes for kids in Hyderabad</h2>
            <p>
              Parents in Hyderabad usually arrive here for one of two reasons. Either the child already
              takes things apart and wants to build something that moves, or the parent wants a STEM
              activity that is not another screen. Robotics answers both, because the screen is a means to
              a physical result rather than the result itself.
            </p>
            <p>
              The question that follows is always the same: what level should my child start at? That is
              answered by the child, not by their age alone — which is why a trial session tells you more
              than any brochure, and why the fee depends on the programme a child is actually placed in.
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
              Please call or message before visiting, so we can keep an educator free to walk you through
              the programme and show you the kit.
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
            title="Robotics classes near me in Hyderabad"
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
            lead="Children often pair one build-and-code programme with one that works a different kind of thinking."
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
            title="Robotics for kids: quick answers"
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
