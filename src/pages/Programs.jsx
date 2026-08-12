import { programs, familyFaqs } from '../data/site.js';
import {
  PageHero,
  ProgramCards,
  QuickAnswer,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
} from '../components/Shared.jsx';

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="All programs"
        title="Learning programs for kids in Hyderabad, for every kind of learner."
        subtitle="Choose an annual AI or Python pathway for Classes 6–10, or confidence-building foundation programs for younger learners."
        image="/images/programs.svg"
        imageAlt="A learning path connecting phonics, abacus, vedic maths, Python and AI"
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors offers annual AI and Python programs for Classes 6–10, plus Abacus, Vedic Maths, Public Speaking, Digital Literacy and creative skill programs for younger children." />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/junior-skills.svg"
            imageAlt="Young learners with letter tiles, numbers and a microphone"
            caption="One roof, seven skills"
          >
            <h2>Two tracks, one learning home</h2>
            <p>
              AI and Python are taught as separate, progressive academic-year programs with an
              age-appropriate curriculum for each class—72 sessions per pathway and a year-end showcase.
            </p>
            <p>
              Younger learners build reading, focus, number sense, communication and safe digital
              confidence through Phonics, Abacus, Vedic Maths, Public Speaking and Digital Literacy.
            </p>
            <ul>
              <li>Ages 4–9 · Phonics and early reading</li>
              <li>Ages 5–13 · Abacus and Vedic Maths</li>
              <li>Classes 1–5 · Speaking, creativity and digital skills</li>
              <li>Classes 6–10 · Annual AI and Python pathways</li>
            </ul>
          </MediaSplit>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <ProgramCards items={programs} />
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
