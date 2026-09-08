import { Link } from 'react-router-dom';
import {
  site,
  address,
  areasServed,
  openingHours,
  formattedAddress,
  programs,
  testimonials,
  ladder,
} from '../data/site.js';
import { programmes } from '../data/catalog/programmes.js';
import { topicHref } from '../data/catalog/shape.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { articles, articlePath } from '../data/articles.js';
import { homeFaqs } from '../lib/faqs.js';
import {
  ProgramCards,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
  ImageBand,
  SectionHead,
} from '../components/Shared.jsx';

/* The home page.
 *
 * Long by design. This is the page that has to answer every question a parent
 * types before they are willing to call — what is offered, for what age, in
 * what format, at what sort of price, in which part of Hyderabad — and it is
 * the page every other route links back to. Splitting that across six thin
 * pages is how a small local site ends up ranking for none of it.
 *
 * Two rules were applied while bringing the content brief across:
 *
 *   1. Nothing invented. Where the brief carried a placeholder — trainer
 *      names, review quotes, batch timings, "[STAT]" counters, a fee table —
 *      the section is either built from data the site already holds
 *      (data/site.js, data/catalog/, data/articles.js) or left out entirely.
 *      An unverifiable claim on a page aimed at parents costs more than the
 *      section is worth.
 *   2. Nothing duplicated. The programme categories are rendered from
 *      data/catalog/programmes.js and the area links from
 *      data/locations.js, so this page cannot advertise a class or a
 *      neighbourhood that has no page behind it.
 */

/* The H1, and the search this page is trying to win — the two have to stay
   the same sentence, so it lives in one named constant. */
const HEADLINE = 'Kids activities in Hyderabad that make learning fun';

/* The reference numbers, all of which are checkable against the site itself. */
const trustStats = [
  { num: '8', label: 'Maximum children in regular centre batches' },
  { num: '200+', label: 'Hyderabad families who have chosen Brolly Juniors' },
  { num: '72', label: 'Sessions in each annual AI or Python pathway' },
  { num: '1–10', label: 'Class-wise learning pathways across the website' },
];

const whyCards = [
  {
    icon: '🧒',
    title: 'Age-appropriate learning',
    text: 'Content, pace and activities are matched to what a child of that age can actually enjoy and absorb.',
  },
  {
    icon: '✨',
    title: 'Fun, interactive classes',
    text: 'Children learn by doing — games, challenges and hands-on tasks instead of long lectures.',
  },
  {
    icon: '📘',
    title: 'Skill-based curriculum',
    text: 'Every program works towards a defined skill, so progress is visible rather than vague.',
  },
  {
    icon: '🎓',
    title: 'Experienced educators',
    text: 'Sessions are led by teachers who work with children every week and know how to keep them engaged.',
  },
  {
    icon: '🧩',
    title: 'Practical learning activities',
    text: 'Projects, puzzles and challenges give children something to build, solve or perform.',
  },
  {
    icon: '👥',
    title: 'Small-batch attention',
    text: 'Regular centre batches are capped at eight children, so every learner is seen, heard and corrected.',
  },
  {
    icon: '🕒',
    title: 'Flexible learning options',
    text: 'Weekday, weekend, classroom and online formats that fit around school and family routines.',
  },
  {
    icon: '📞',
    title: 'Parent-friendly communication',
    text: 'You hear how your child is doing, what improved and what to practise next.',
  },
  {
    icon: '⭐',
    title: 'Confidence and creativity',
    text: 'Children present, perform and share their work, which makes speaking up feel ordinary.',
  },
  {
    icon: '🤖',
    title: 'Future-ready skills',
    text: 'Coding, robotics and AI awareness introduced in a way that suits a child’s level.',
  },
  {
    icon: '📈',
    title: 'Regular progress guidance',
    text: 'Educators share observations and next steps, so practice at home stays useful.',
  },
  {
    icon: '🛡️',
    title: 'Safe, positive environment',
    text: 'Classes are structured, supervised and encouraging — mistakes are part of learning.',
  },
];

/* The four age bands the site actually publishes pages for, described in the
   language of the content brief. Five bands were proposed; four exist. */
const ageBands = [
  {
    title: 'Ages 3–5',
    kv: 'Foundation & curiosity',
    text: 'Play-led sessions that build listening, motor skills, curiosity and comfort in a group.',
    to: '/age-groups/ages-3-5',
  },
  {
    title: 'Ages 6–8',
    kv: 'Exploration & skill building',
    text: 'Children try several activities and start practising one or two of them consistently.',
    to: '/age-groups/ages-6-8',
  },
  {
    title: 'Ages 9–12',
    kv: 'Confidence & problem solving',
    text: 'Longer challenges, small projects, presenting work and more independent thinking.',
    to: '/age-groups/ages-9-12',
  },
  {
    title: 'Ages 13–16',
    kv: 'Future skills & awareness',
    text: 'Coding, AI literacy, public speaking and the skills that carry into higher classes.',
    to: '/age-groups/ages-13-16',
  },
];

const skills = [
  'Creativity',
  'Communication',
  'Confidence',
  'Concentration',
  'Problem solving',
  'Critical thinking',
  'Memory',
  'Leadership',
  'Teamwork',
  'Digital skills',
  'Logical thinking',
  'Decision making',
];

const joinSteps = [
  {
    title: 'Choose a program',
    text: 'Tell us your child’s age and interests, or browse the programs and shortlist one or two.',
  },
  {
    title: 'Book a free trial',
    text: 'Pick a convenient slot. The trial is a real class, not a sales call.',
  },
  {
    title: 'Meet the educator',
    text: 'Your child tries an activity and you get an honest view of fit and starting level.',
  },
  {
    title: 'Start learning',
    text: 'Confirm a batch, a mode and a schedule, and begin regular classes.',
  },
];

const learningModes = [
  {
    icon: '🏫',
    title: 'Classroom classes',
    text: 'In-person sessions at the Nizampet centre, with materials, peers and hands-on activities.',
  },
  {
    icon: '🌐',
    title: 'Online classes',
    text: 'Live sessions from home, useful when travel time across Hyderabad is the real constraint.',
  },
  {
    icon: '🗓️',
    title: 'Weekend batches',
    text: 'Saturday slots designed around school schedules and weekday homework.',
  },
  {
    icon: '⏰',
    title: 'Weekday batches',
    text: 'After-school timings for regular weekly practice through the term.',
  },
  {
    icon: '🎒',
    title: 'School programs',
    text: 'Activity and skill modules delivered on school premises as periods, clubs or workshops.',
  },
  {
    icon: '🏘️',
    title: 'Community programs',
    text: 'Weekend and holiday sessions run inside apartments and residential societies.',
  },
];

const activityWay = [
  'Learning through activities and challenges',
  'Practical exercises in every session',
  'Interactive, discussion-led sessions',
  'Grouping by age and current level',
  'A defined skill as the goal of each program',
  'Confidence built through presenting and performing',
  'Continuous practice with take-home tasks',
  'Regular communication with parents',
];

const memorisationWay = [
  'Heavy reliance on repetition and recall',
  'Limited interaction during the session',
  'One pace and one approach for the whole group',
  'Fewer opportunities to apply what was taught',
];

const classRhythm = [
  { title: 'Welcome', text: 'Settling in, a quick check-in and a recap of the last session.' },
  { title: 'Warm-up activity', text: 'A short game or puzzle to get children thinking and talking.' },
  { title: 'Concept introduction', text: 'The new idea, technique or move for the day, explained simply.' },
  { title: 'Hands-on practice', text: 'Children try it themselves while the educator moves around the room.' },
  { title: 'Challenge or game', text: 'The concept applied under a bit of friendly pressure.' },
  { title: 'Feedback', text: 'What went well and what to work on, said in a way children can act on.' },
  { title: 'Take-home activity', text: 'A short practice task, so the skill does not wait a week to be used.' },
];

const projectExamples = [
  { title: 'Build a simple robot', kv: 'Robotics · older learners', skill: 'Problem solving', text: 'Children assemble, test and fix a working model.' },
  { title: 'Create a coding game', kv: 'Coding · beginner onwards', skill: 'Logic', text: 'A playable game built from scratch, then shared with the group.' },
  { title: 'Solve a chess challenge', kv: 'Chess · all levels', skill: 'Planning', text: 'Timed puzzles that reward thinking one move further ahead.' },
  { title: 'Abacus mental maths challenge', kv: 'Abacus · level based', skill: 'Concentration', text: 'Calculating without writing anything down.' },
  { title: 'Storytelling performance', kv: 'Communication · younger learners', skill: 'Expression', text: 'Telling a story with voice, pace and gesture.' },
  { title: 'Public speaking challenge', kv: 'Public speaking · all levels', skill: 'Confidence', text: 'A short prepared talk in front of the batch.' },
  { title: 'Drawing project', kv: 'Art · all levels', skill: 'Observation', text: 'A finished piece children take home and can explain.' },
  { title: 'Logic puzzle challenge', kv: 'Brain games · all levels', skill: 'Reasoning', text: 'Puzzles that build patience with hard problems.' },
  { title: 'Python mini-project', kv: 'Python · Classes 6–10', skill: 'Structure', text: 'A small working program the student demonstrates and explains.' },
  { title: 'AI research task', kv: 'AI · Classes 6–10', skill: 'Verification', text: 'Using an AI tool, then checking every claim it made.' },
  { title: 'Phonics reading aloud', kv: 'Phonics · ages 4–9', skill: 'Blending', text: 'A levelled book read aloud, then retold in the child’s own words.' },
  { title: 'Team-based learning activity', kv: 'All programs · mixed ages', skill: 'Teamwork', text: 'Children split the roles and present as a group.' },
];

const reportingCards = [
  { icon: '📊', title: 'What improved', text: 'Specific gains, not general praise.' },
  { icon: '🗓️', title: 'Attendance', text: 'Sessions attended and what each one covered.' },
  { icon: '💬', title: 'Educator notes', text: 'Observations from the classroom floor.' },
  { icon: '🎯', title: 'What is next', text: 'The next level, skill or practice focus.' },
];

const parentBenefits = [
  { title: 'Builds confidence', text: 'Small wins in a low-pressure setting make children more willing to try things at school too.' },
  { title: 'Encourages creativity', text: 'Open-ended tasks let children make choices instead of following one correct path.' },
  { title: 'Improves concentration', text: 'Activities like abacus, chess and cube work train sustained attention.' },
  { title: 'Develops communication', text: 'Presenting, explaining and performing make speaking up feel normal.' },
  { title: 'Supports problem solving', text: 'Children learn to break a problem down rather than freeze in front of it.' },
  { title: 'Encourages healthy hobbies', text: 'A structured interest is a useful alternative to unstructured screen time.' },
  { title: 'Builds teamwork', text: 'Group challenges teach sharing credit, dividing work and listening.' },
  { title: 'Introduces technology responsibly', text: 'Coding and AI turn children from consumers into makers.' },
  { title: 'Creates after-school structure', text: 'A predictable weekly routine helps working parents plan the week.' },
];

const schoolCards = [
  { title: 'On-campus delivery', text: 'Educators and materials come to you; scheduling fits your timetable.' },
  { title: 'Grade-wise modules', text: 'Content mapped to age bands rather than one generic session.' },
  { title: 'Workshops & events', text: 'One-day workshops, competitions and activity days.' },
  { title: 'Reporting for schools', text: 'Participation and skill observations shared with coordinators.' },
];

const communityCards = [
  { icon: '🏢', title: 'Apartment communities', text: 'Weekend batches run inside your gated community’s activity space.' },
  { icon: '🌟', title: 'Residential societies', text: 'Multi-activity programs for a mixed age group of resident children.' },
  { icon: '🎪', title: 'Corporate family events', text: 'Kids activity zones and workshops for employee family days.' },
  { icon: '☀️', title: 'Holiday camps', text: 'Short summer and vacation camps mixing skills with play.' },
];

const planOptions = [
  {
    title: 'Monthly program',
    kv: 'Rolling month to month',
    items: ['Regular weekly classes', 'Learning materials as applicable', 'Educator feedback', 'Free trial before you start'],
    cta: { label: 'Get fee details', to: '/book-free-demo' },
  },
  {
    title: 'Term program',
    kv: 'Fixed multi-month term',
    items: ['Structured level progression', 'Practice tasks between classes', 'Progress updates through the term', 'Free trial before you start'],
    cta: { label: 'Get fee details', to: '/book-free-demo' },
  },
  {
    title: 'Weekend program',
    kv: 'Saturday batches',
    items: ['Built around school schedules', 'Single or multi-activity options', 'Classroom or online', 'Free trial before you start'],
    cta: { label: 'Get fee details', to: '/book-free-demo' },
  },
  {
    title: 'Workshop',
    kv: 'Short format',
    items: ['One-day or short-series sessions', 'Holiday and summer camps', 'School and community formats', 'Group rates on request'],
    cta: { label: 'Enquire about workshops', to: '/workshops' },
  },
];

const answerBlocks = [
  {
    q: 'What are the best activities for kids in Hyderabad?',
    a: 'The best activity is the one your child will return to each week. The popular categories are coding, robotics and AI for logical thinking, abacus and Vedic Maths for calculation and focus, chess and brain games for strategy, public speaking for confidence, and drawing, dance or music for creativity. Try a free trial in two different categories before committing to a term.',
  },
  {
    q: 'Which kids classes are suitable for beginners?',
    a: 'Most Brolly Juniors programs have a beginner level and assume no prior experience. Coding, chess, abacus, drawing, phonics and public speaking all start from the basics, and children are grouped by age and level rather than placed straight into an ongoing batch. Tell us your child’s age and we will confirm the right starting level.',
  },
  {
    q: 'What age should children start extracurricular activities?',
    a: 'Many children begin structured activities around ages four to six with play-led sessions, then take on skill-based programs such as abacus, phonics or coding as reading and attention span develop. There is no single correct age. What matters more is whether the format suits the child’s current attention span and whether they enjoy going back.',
  },
  {
    q: 'How do I choose a class for my child?',
    a: 'Start with what you want to change — focus, confidence, creativity or screen habits — then shortlist two activities that address it. Check the class format, the batch size and the educator’s experience, attend a free trial, and watch whether your child is engaged rather than merely compliant. Give the chosen class at least one full term before judging results.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Nizampet X Roads · Hyderabad · Ages 4+</span>
            {/* The H1 is the most heavily weighted element on the page, so it
                leads with the search a parent actually types rather than with
                the tagline. Set plainly, in the brand's Fredoka 700 — the same
                face and weight the headline on brollyjuniors.com uses. */}
            <h1>{HEADLINE}</h1>
            <p>
              Brolly Juniors helps children build confidence, creativity, problem-solving and
              future-ready skills through activity-based classes designed around their age and
              interests — from Abacus and Phonics to AI, Python, communication and the arts.
            </p>
            <div className="btn-row">
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
              <Link to="/programs" className="btn btn-outline">
                Explore programs
              </Link>
              <a
                href={site.whatsappHref}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </div>
            <p className="hero-micro">
              Age-appropriate &nbsp;·&nbsp; Expert-led &nbsp;·&nbsp; Fun learning &nbsp;·&nbsp;
              Hyderabad-focused
            </p>
            <ul className="tick-row">
              <li>
                <span className="tick" aria-hidden="true">✓</span> Child-friendly learning
              </li>
              <li>
                <span className="tick" aria-hidden="true">✓</span> Skill-focused programs
              </li>
              <li>
                <span className="tick" aria-hidden="true">✓</span> Flexible batches
              </li>
              <li>
                <span className="tick" aria-hidden="true">✓</span> Free trial available
              </li>
            </ul>
          </div>
          <div className="hero-art">
            <img
              src="/images/hero-learning.svg"
              alt="Children learning together under a big colourful umbrella"
              width="480"
              height="400"
            />
            <span className="floating float-1">
              <span className="emoji">🔤</span> Phonics
            </span>
            <span className="floating float-2">
              <span className="emoji">🧮</span> Abacus
            </span>
            <span className="floating float-3">
              <span className="emoji">🤖</span> AI &amp; Python
            </span>
          </div>
        </div>
      </section>

      {/* Trust bar. Every figure here is checkable against the rest of the
          site, which is why there are four of them and not eight. */}
      <section className="stats-band section-tight">
        <div className="container">
          <div className="grid-4">
            {trustStats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Why parents choose us"
            title="Why choose Brolly Juniors for kids activities in Hyderabad?"
            lead="Parents come to us for one reason: their child should enjoy the class and still walk away with a real skill. Here is how we try to make that happen."
          />
          <div className="grid-3">
            {whyCards.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <Link to="/programs" className="txtlink">
              Find the right program for your child
            </Link>
          </div>
        </div>
      </section>

      {/* Rendered straight from the programme catalogue, so a category cannot
          list a class that has no page behind it. */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="All under one roof"
            title="Kids classes & activities available at Brolly Juniors"
            lead="Six learning areas, one place. Children can start with one program and add another as their interests grow."
          />
          <div className="grid-3">
            {programmes.groups.map((group) => (
              <div className="progcat" key={group.id}>
                <span className="icon" aria-hidden="true">{group.icon}</span>
                <h3>{group.title}</h3>
                {/* Every class in the list is a real link. This is the densest
                    internal-linking block on the site: it puts one click
                    between the home page and all thirty-odd programme pages,
                    which is what stops the deeper ones from being orphaned. */}
                <ul>
                  {group.items.map((topic) => (
                    <li key={topic.name}>
                      <Link to={topicHref(programmes, topic)}>{topic.name}</Link>
                    </li>
                  ))}
                </ul>
                <p className="note-line">{group.blurb}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <Link to="/programs" className="btn btn-primary">
              See every program
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Core programs"
            title="Future-ready skills, all under one roof"
            lead="Choose an annual AI or Python pathway for Classes 6–10, or confidence-building foundation programs for younger learners."
          />
          <ProgramCards items={programs} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/phonics.svg"
            imageAlt="Phonics letter blocks, blending arrows and sound bubbles"
            caption="s · a · t → sat!"
          >
            <span className="eyebrow">New for our youngest learners</span>
            <h2>Reading begins with sounds, not spellings.</h2>
            <p>
              Our six-level Phonics pathway starts at age four with pure letter sounds, moves into
              blending and segmenting, and finishes with children reading a levelled storybook aloud
              and retelling it in their own words.
            </p>
            <ul>
              <li>44 English sounds taught in reading-useful order</li>
              <li>Blending and spelling practised every session</li>
              <li>Batches capped at eight so every child reads aloud</li>
              <li>A short weekly practice note for home</li>
            </ul>
            <div className="btn-row">
              <Link to="/junior-skills/phonics" className="btn btn-primary">
                See the phonics curriculum
              </Link>
            </div>
          </MediaSplit>
        </div>
      </section>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Start where your child is"
            title="Find the right learning program for your child's age"
            lead="These bands are a guide to how learning is grouped. Exact eligibility depends on the individual program — tell us your child's age and we will confirm what they can join."
          />
          <div className="grid-4">
            {ageBands.map((band) => (
              <Link className="age-card" to={band.to} key={band.title}>
                <h3>{band.title}</h3>
                <p className="kv">{band.kv}</p>
                <p>{band.text}</p>
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Find a program for my child
            </Link>
          </div>
        </div>
      </section>

      <section className="navy-band">
        <div className="container split">
          <div>
            <span className="eyebrow">What they walk away with</span>
            <h2 className="section-title">Skills your child can build at Brolly Juniors</h2>
            <p>
              Our programs combine learning and practice, so children develop abilities that support
              school, everyday life and future learning — not just a certificate at the end of a term.
            </p>
            <p>
              Most parents notice the change first in small things: finishing a task without being
              reminded, explaining an idea out loud, or trying again after a mistake.
            </p>
            <div className="btn-row">
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
              <Link to="/programs" className="btn btn-ghost">
                See all programs
              </Link>
            </div>
          </div>
          <div className="skill-tiles">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="How to join a class at Brolly Juniors"
            lead="Four steps from first enquiry to first class."
          />
          <div className="steps">
            {joinSteps.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book your child&apos;s free trial
            </Link>
          </div>
        </div>
      </section>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Formats"
            title="Flexible learning options for busy families"
            lead="Not every mode runs for every program. Ask us which formats are currently available for the program you want."
          />
          <div className="grid-3">
            {learningModes.map((m) => (
              <div className="card" key={m.title}>
                <span className="icon">{m.icon}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="The difference"
            title="What makes an activity class different from a lesson"
            lead="Both have their place. The difference is in how much a child does versus how much a child watches."
          />
          <div className="compare">
            <div className="compare-col is-us">
              <h3>How Brolly Juniors classes run</h3>
              <ul>
                {activityWay.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col is-other">
              <h3>What a memorisation-led format looks like</h3>
              <ul>
                {memorisationWay.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="note-line">
                This describes a teaching style, not any particular institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band-soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Inside a session</span>
            <h2 className="section-title">What a typical class looks like</h2>
            <p className="section-lead" style={{ marginBottom: 28 }}>
              Structure varies by program and age group, but most sessions follow this rhythm.
            </p>
            <ol className="rhythm">
              {classRhythm.map((beat) => (
                <li key={beat.title}>
                  <h3>{beat.title}</h3>
                  <p>{beat.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="panel">
            <h2>Come and see a class</h2>
            <p>
              The quickest way to judge fit is to watch your child in one session. Trial slots are
              free and there is no obligation to enrol.
            </p>
            <div className="btn-row">
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Technology ladder"
            title="Each class moves forward—not back to lesson one."
            lead="AI and Python are separate programs, with a distinct annual curriculum for every class from 6 to 10."
          />
          <div className="ladder">
            {ladder.map((step) => (
              <div className="ladder-step" key={step.title}>
                <span className="step-class">{step.klass}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Learning by doing"
            title="Projects, challenges and activities"
            lead="A sample of the kinds of tasks children take on. Which ones your child does depends on their program and level."
          />
          <div className="grid-4">
            {projectExamples.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p className="kv">{p.kv}</p>
                <p>
                  <strong>{p.skill}.</strong> {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">Parent reporting</span>
            <h2 className="section-title">Stay connected with your child&apos;s learning journey</h2>
            <p className="section-lead">
              You should never have to guess whether classes are working. Educators share what they
              observe, where your child is improving and what would help at home.
            </p>
            <ul className="pill-row">
              <li>Progress updates</li>
              <li>Skill observations</li>
              <li>Attendance</li>
              <li>Activity completion</li>
              <li>Educator feedback</li>
              <li>Improvement areas</li>
              <li>Next-step recommendations</li>
            </ul>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">
                Talk to the team
              </Link>
            </div>
          </div>
          <div className="grid-2">
            {reportingCards.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Inside a Brolly classroom"
            title="Small batches. Real projects. Visible progress."
          />
          <ImageBand
            items={[
              {
                image: '/images/junior-skills.svg',
                alt: 'Young learners with letters, numbers and art',
                caption: 'Junior skills · Classes 1–5',
              },
              {
                image: '/images/projects.svg',
                alt: 'A rocket, data chart and prototype cards',
                caption: 'Student projects every module',
              },
              {
                image: '/images/schools.svg',
                alt: 'A school building with a calendar and graduation cap',
                caption: 'School partnerships across Hyderabad',
              },
            ]}
          />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="How we teach" title="Understand. Practise. Create." />
          <Pillars />
        </div>
      </section>

      <section className="band-soft">
        <div className="container">
          <SectionHead eyebrow="Parent voices" title="What parents say about Brolly Juniors" />
          <div className="grid-3">
            {testimonials.map((t) => (
              <div className="testimonial" key={t.name}>
                <span className="quote-mark">“</span>
                <p>{t.quote}</p>
                <div className="who">
                  {t.name}
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="The case for it"
            title="Why parents choose skill-based activities for their children"
            lead="Extracurricular classes are not only about keeping children busy after school. Done well, they give a child a second place to succeed."
          />
          <div className="grid-3">
            {parentBenefits.map((b) => (
              <div className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-band">
        <div className="container split">
          <div>
            <span className="eyebrow">For schools</span>
            <h2 className="section-title">Skill development programs for schools in Hyderabad</h2>
            <p>
              We work with schools, principals, academic coordinators and activity coordinators to
              run skill modules on campus — as regular periods, clubs, workshops or annual activity
              programs.
            </p>
            <ul className="pill-row">
              <li>AI curriculum</li>
              <li>Python curriculum</li>
              <li>Coding</li>
              <li>Robotics</li>
              <li>Abacus</li>
              <li>Public speaking</li>
              <li>Teacher training</li>
              <li>Workshops</li>
            </ul>
            <div className="btn-row">
              <Link to="/schools/request-proposal" className="btn btn-primary">
                Partner with Brolly Juniors
              </Link>
              <Link to="/schools" className="btn btn-ghost">
                School program details
              </Link>
            </div>
          </div>
          <div className="grid-2">
            {schoolCards.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Bring the class to you"
            title="Kids programs for apartments, societies and workplaces"
            lead="If a group of children in one community wants the same class, we can bring the class to them."
          />
          <div className="grid-4">
            {communityCards.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-primary">
              Request a community program
            </Link>
          </div>
        </div>
      </section>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Fees & formats"
            title="Kids classes fees and program options"
            lead="Fees depend on the program, level, duration and mode you choose. We share exact figures on enquiry, so you get the price for your child's actual plan rather than an average."
          />
          <div className="grid-4">
            {planOptions.map((plan) => (
              <div className="plan" key={plan.title}>
                <h3>{plan.title}</h3>
                <p className="kv">{plan.kv}</p>
                <ul>
                  {plan.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link to={plan.cta.to} className="btn btn-outline">
                  {plan.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area links come from data/locations.js and only the published ones
          appear, because a thin or duplicated neighbourhood page is one of the
          better-documented ways to get a small site demoted. */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Across the city"
            title="Kids activities and classes across Hyderabad"
            lead={`Brolly Juniors is based in ${address.neighbourhood}, ${address.locality}. Classroom sessions run from the centre and online batches are open to families anywhere in the city.`}
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h3>Neighbourhoods with their own page</h3>
              <ul className="area-links">
                {publishedLocations.map((l) => (
                  <li key={l.slug}>
                    <Link to={locationPath(l.slug)}>Kids classes in {l.name}</Link>
                  </li>
                ))}
              </ul>
              <p className="note-line">
                Families also travel in from {areasServed.join(', ')}. Call us and we will tell you
                honestly whether the journey is worth it from where you live.
              </p>
            </div>
            <div className="panel">
              <h2>Brolly Juniors</h2>
              <p>{formattedAddress()}</p>
              <p>{address.landmarks}.</p>
              {openingHours.map((h) => (
                <p key={h.days}>
                  <strong>{h.days}:</strong> {h.time}
                </p>
              ))}
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
        </div>
      </section>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why skill development activities matter for children"
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                School gives children knowledge. Skill-based activities give them practice in using
                it. A child who has spent a term explaining their coding project to a group finds a
                class presentation easier. A child who has learned to lose a chess game and play the
                next one has practised something no worksheet teaches.
              </p>
              <p>
                The useful combination is academic learning plus practical skills plus creativity
                plus communication plus physical activity plus social development. No single class
                covers all six, which is why most families pick one activity for skill and one for
                enjoyment, and rotate as interests change.
              </p>
            </div>
            <div className="prose">
              <p>
                Age matters less than consistency. A child who attends one activity regularly for a
                year usually gains more than a child who samples four for a month each. Our advice
                is simple: pick something your child is willing to return to, keep the sessions
                short enough to stay fun, and give it at least one full term before judging it.
              </p>
              <p>
                If you are unsure where to start, a trial class is the cheapest way to find out — it
                costs nothing and tells you more than any brochure.
              </p>
              <p>
                <Link to="/resources" className="txtlink">
                  Read more parent guides
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Guides"
            title="Helpful resources for parents"
            lead="Short, practical guides on choosing and getting value from children's activities."
          />
          <div className="grid-4">
            {articles.map((a) => (
              <Link className="guide-card" to={articlePath(a.slug)} key={a.slug}>
                <p className="cat">{a.category}</p>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <p className="meta">{a.readingTime} min read</p>
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/resources" className="btn btn-outline">
              Read all parent guides
            </Link>
            <Link
              to="/abacus-worksheet-generator"
              className="btn btn-ghost"
              style={{ marginLeft: 12 }}
            >
              Free abacus worksheets
            </Link>
          </div>
        </div>
      </section>

      {/* Written to be quotable by an answer engine: one direct definition,
          then four questions answered in a single self-contained paragraph
          each. */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="In one paragraph"
            title="What is Brolly Juniors?"
            lead="Brolly Juniors is a children's learning centre in Hyderabad, Telangana, offering activity-based classes and skill development programs for school-age children. Programs cover AI and Python, coding and robotics, Abacus, Vedic Maths and mental maths, chess and brain games, phonics and early reading, public speaking and communication, drawing, dance, music and drama, plus yoga and life skills. Classes run in classroom and online formats, with weekday and weekend batches, and Brolly Juniors also delivers activity programs for schools and residential communities across Hyderabad. A free trial class is available before enrolling."
          />
          <div className="grid-2">
            {answerBlocks.map((b) => (
              <div className="ansblock" key={b.q}>
                <h3>{b.q}</h3>
                <p>{b.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqList items={homeFaqs} title="Parent FAQs" />
      <CtaBand variant="family" />
    </>
  );
}
