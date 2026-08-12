import { Link } from 'react-router-dom';
import { programs, testimonials, ladder } from '../data/site.js';
import {
  ProgramCards,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
  ImageBand,
  SectionHead,
} from '../components/Shared.jsx';

const homeFaqs = [
  {
    q: 'What ages and classes are Brolly Juniors programs for?',
    a: 'Programs serve children from age 5 through Class 10. Abacus begins from age 5, foundation skills focus mainly on Classes 1–5, and annual AI and Python pathways are designed separately for Classes 6–10.',
  },
  {
    q: 'Are AI and Python taught as one combined course?',
    a: 'No. AI and Python are separate annual pathways. Each includes 72 one-hour sessions across 36 instructional weeks, and each class has its own curriculum.',
  },
  {
    q: 'Do you partner with schools?',
    a: 'Yes. Schools can discuss annual curricula, AI and coding clubs, innovation labs, workshops and teacher training.',
  },
  {
    q: 'How large are centre batches?',
    a: 'Regular Brolly Juniors centre batches are capped at eight children so instructors can provide meaningful attention and feedback.',
  },
  {
    q: 'Can my child attend a free trial?',
    a: 'Yes. Every new family can book one free trial class before deciding whether to enrol.',
  },
];

const whyStats = [
  { num: '8', label: 'Maximum children in regular centre batches' },
  { num: '200+', label: 'Hyderabad families who have chosen Brolly Juniors' },
  { num: '72', label: 'Sessions in each annual AI or Python pathway' },
  { num: '1–10', label: 'Class-wise learning pathways across the website' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Hyderabad · Classes 1–10 · Ages 4+</span>
            {/* The H1 is the single most heavily weighted element on the page,
                and the home page previously led with the tagline alone — which
                told Google nothing about what this business is or where. The
                brand line is kept; the qualifier in front of it is what makes
                the page eligible for "kids classes in Hyderabad" at all.
                Reverting is a one-line change if the tagline must stand alone. */}
            <h1>
              Kids classes in Hyderabad, where curiosity finds{' '}
              <span className="highlight">shelter.</span>
            </h1>
            <p>
              Hyderabad&apos;s joyful learning home where children build future-ready skills—from Abacus and
              Vedic Maths to AI tools, Python, communication and creativity—all under one trusted roof.
            </p>
            <div className="btn-row">
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial class
              </Link>
              <Link to="/programs" className="btn btn-outline">
                Explore programs
              </Link>
            </div>
            <div className="hero-badge">⭐ Trusted by 200+ Hyderabad families</div>
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

      <section>
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Core programs</span>
            <h2 className="section-title">Future-ready skills, all under one roof</h2>
            <p className="section-lead">
              Choose an annual AI or Python pathway for Classes 6–10, or confidence-building foundation
              programs for younger learners.
            </p>
          </div>
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

      <section className="stats-band section-tight">
        <div className="container">
          <div className="center" style={{ marginBottom: 28 }}>
            <h2 className="section-title">Built for attention, confidence and real progress.</h2>
            <p className="section-lead">
              Children learn best when they feel known, safe to make mistakes and proud of what they can
              create.
            </p>
          </div>
          <div className="grid-4">
            {whyStats.map((s) => (
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
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Technology ladder</span>
            <h2 className="section-title">Each class moves forward—not back to lesson one.</h2>
            <p className="section-lead">
              AI and Python are separate programs, with a distinct annual curriculum for every class from 6
              to 10.
            </p>
          </div>
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
          <div className="center" style={{ marginBottom: 32 }}>
            <span className="eyebrow">How we teach</span>
            <h2 className="section-title">Understand. Practise. Create.</h2>
          </div>
          <Pillars />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Parent voices</span>
            <h2 className="section-title">What families say</h2>
          </div>
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

      <FaqList items={homeFaqs} title="Questions parents and schools ask us" />
      <CtaBand variant="family" />
    </>
  );
}
