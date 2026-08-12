import { familyFaqs } from '../data/site.js';
import {
  PageHero,
  QuickAnswer,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
} from '../components/Shared.jsx';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Why we built Brolly Juniors, a learning centre in Hyderabad."
        subtitle="One trusted learning home for the modern skills children need—and the confidence to keep learning as the world changes."
        image="/images/about.svg"
        imageAlt="A teacher and a small group of children in a warm classroom"
        chips={[
          { strong: 'Hyderabad', span: 'Home city' },
          { strong: '200+ families', span: 'Community' },
          { strong: 'Seven', span: 'Skill areas' },
          { strong: 'Joyful', span: 'Learning approach' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors was established in Hyderabad to bring number skills, communication, creativity, coding and AI education under one roof—with small class sizes, age-appropriate curriculum progression and tangible student achievements." />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/methodology.svg"
            imageAlt="A four-step learning cycle: explain, practise, create, reflect"
            caption="Explain · Practise · Create · Reflect"
            reverse
          >
            <h2>Where curiosity finds shelter</h2>
            <p>
              Our approach balances preparation for future demands without pressuring families—a supportive
              environment for skill-building with individualised attention.
            </p>
            <h2 style={{ marginTop: 28 }}>Learning how to keep learning</h2>
            <p>
              The core mission extends beyond immediate skills to foster questioning, experimentation, clear
              communication and confidence in learning novel concepts.
            </p>
            <ul>
              <li>Batches capped at eight children</li>
              <li>Reading, numbers, speaking, coding and AI under one roof</li>
              <li>Class-wise progression instead of repeated basics</li>
            </ul>
          </MediaSplit>
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
