import { Link } from 'react-router-dom';
import { programs, familyFaqs } from '../data/site.js';
import {
  PageHero,
  ProgramCards,
  QuickAnswer,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
  SectionHead,
  StageTrack,
} from '../components/Shared.jsx';

const juniorPrograms = programs.filter((p) => p.to.startsWith('/junior-skills'));

const foundationTrack = [
  {
    tag: 'Ages 4–9',
    icon: '🔤',
    title: 'Phonics & early reading',
    text: 'Sounds, blending, spelling and finally reading a whole story aloud.',
    bullets: ['44 English sounds', 'Blending and segmenting', 'Tricky words on sight', 'Fluency and expression'],
    outcome: 'Reads a levelled book aloud and retells it.',
  },
  {
    tag: 'Ages 5–11',
    icon: '🧮',
    title: 'Abacus mastery',
    text: 'Ten Soroban levels that move calculation from the fingers into the head.',
    bullets: ['Bead technique', 'Complement rules', 'Mental visualisation', 'Speed with accuracy'],
    outcome: 'Calculates multi-digit sums mentally.',
  },
  {
    tag: 'Ages 7–13',
    icon: '➗',
    title: 'Vedic maths',
    text: 'Twelve weeks of mental calculation patterns, taught with the reasoning behind them.',
    bullets: ['Complements', 'Fast multiplication', 'Squares and checks', 'Pattern recognition'],
    outcome: 'Chooses and explains the right shortcut.',
  },
  {
    tag: 'Classes 1–5',
    icon: '🎤',
    title: 'Public speaking',
    text: 'A five-stage ladder from show-and-tell to a prepared presentation with questions.',
    bullets: ['Voice and posture', 'Storytelling', 'Listening and replying', 'Impromptu speaking'],
    outcome: 'Presents to an audience and takes questions.',
  },
  {
    tag: 'Classes 1–5',
    icon: '🎨',
    title: 'Creative & digital skills',
    text: 'Six modules pairing what a child can now do with when to stop and ask an adult.',
    bullets: ['Devices and typing', 'Files and organisation', 'Searching and checking', 'Online safety'],
    outcome: 'Builds and presents a digital project.',
  },
];

export default function JuniorSkills() {
  return (
    <>
      <PageHero
        eyebrow="Junior skills · Ages 4+ · Classes 1–5"
        title="Classes for kids in Hyderabad: strong minds, clear voices, curious learners."
        subtitle="Joyful foundation programs that strengthen reading, number sense, communication, creativity, concentration and responsible digital confidence."
        image="/images/junior-skills.svg"
        imageAlt="Young learners with letter tiles, numbers, a microphone and art"
        chips={[
          { strong: 'Phonics', span: 'From age 4' },
          { strong: 'Abacus', span: 'From age 5' },
          { strong: 'Max 8', span: 'Children per batch' },
          { strong: 'Free trial', span: 'Before you decide' },
        ]}
      >
        <div className="btn-row">
          <Link to="/junior-skills/phonics" className="btn btn-primary">
            Explore Phonics
          </Link>
          <Link to="/book-free-demo" className="btn btn-ghost">
            Book a free trial
          </Link>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors foundation programs help children from age four develop reading, focus, mental calculation, vocabulary, speaking confidence, creative thinking and safe digital habits—through Phonics, Abacus, Vedic Maths, Public Speaking and Digital Literacy." />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/phonics.svg"
            imageAlt="Phonics letter blocks, blending arrows and sound bubbles"
            caption="Sound it out!"
            reverse
          >
            <span className="eyebrow">Where most families start</span>
            <h2>Learning that children want to return to</h2>
            <p>
              Activities are brief, visible and participatory. Students practise incrementally, receive
              targeted feedback and demonstrate knowledge through games, presentations and demonstrations.
            </p>
            <p>
              Programs combine reading, number skills, communication and creativity based on a child&apos;s
              age, interests and availability—so a family can pick one skill or build a balanced pathway.
            </p>
            <ul>
              <li>Batches capped at eight children</li>
              <li>Every child speaks or reads aloud in every session</li>
              <li>Progress shared with parents, not just marks</li>
            </ul>
          </MediaSplit>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="The foundation pathway"
            title="Five skills, each with its own level-wise curriculum"
            lead="Choose one, or combine two on different days of the week. Every program has a defined starting point and a visible finishing outcome."
          />
          <StageTrack stages={foundationTrack} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Pick a program"
            title="Open a curriculum in detail"
          />
          <ProgramCards items={juniorPrograms} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={familyFaqs} />
      <CtaBand variant="family" />
    </>
  );
}
