import { Link } from 'react-router-dom';
import {
  PageHero,
  QuickAnswer,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
  SectionHead,
} from '../components/Shared.jsx';

const formats = [
  {
    icon: '📅',
    title: 'Annual academic program',
    text: '72 sessions across 36 instructional weeks, planned with the school calendar.',
    to: '/schools/annual-academic-program',
  },
  {
    icon: '🚀',
    title: 'AI and coding clubs',
    text: 'Project-led, after-school exploration with showcases and teamwork.',
    to: '/schools/ai-and-coding-clubs',
  },
  {
    icon: '🧪',
    title: 'Innovation lab',
    text: 'A structured space for student experimentation, prototyping and demos.',
    to: '/schools/school-partnership-program',
  },
  {
    icon: '👩‍🏫',
    title: 'Teacher training',
    text: 'Practical AI enablement for planning, assessment design and classroom policy.',
    to: '/schools/teacher-training',
  },
];

const schoolFaqs = [
  {
    q: 'Can the timetable be planned around our school calendar?',
    a: 'Yes. The annual pathway contains 72 sessions, and delivery dates are mapped with the school around holidays, examinations and events.',
  },
  {
    q: 'Can schools begin with a pilot?',
    a: 'Yes. A school can start with a workshop, sample class or selected cohort before discussing a broader annual implementation.',
  },
  {
    q: 'Are AI and Python separate programs?',
    a: 'Yes. Each has its own class-wise curriculum. Schools may choose one pathway or plan both based on timetable and infrastructure.',
  },
];

export default function Schools() {
  return (
    <>
      <PageHero
        eyebrow="For schools"
        title="An AI and coding curriculum partner for Hyderabad schools."
        subtitle="Bring structured AI, Python and skill-development programs to students through an academic-year model designed around your timetable."
        image="/images/schools.svg"
        imageAlt="A school building with a calendar and graduation cap"
        chips={[
          { strong: 'Curriculum', span: 'Integration' },
          { strong: 'Trainers', span: 'Provided' },
          { strong: 'Projects', span: 'Every module' },
          { strong: 'Reporting', span: 'Progress visibility' },
        ]}
      >
        <div className="btn-row">
          <Link to="/schools/request-proposal" className="btn btn-primary">
            Discuss a school partnership
          </Link>
          <Link to="/programs" className="btn btn-ghost">
            View all programs
          </Link>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors partners with schools to deliver class-wise AI and Python curricula, clubs, workshops, teacher enablement and foundation-skills programs. Annual technology pathways provide 72 sessions across 36 instructional weeks and can be planned with the school's academic calendar." />
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Partnership formats"
            title="Choose the format that fits your school"
          />
          <div className="grid-4">
            {formats.map((f) => (
              <Link to={f.to} className="card" key={f.title}>
                <span className="icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/teacher-training.svg"
            imageAlt="A teacher presenting at a board with AI planning tools"
            caption="Trainers, not just material"
            reverse
          >
            <h2>Visible learning, not passive exposure</h2>
            <p>
              Every pathway includes guided practice, projects, reflection, assessment checkpoints and a
              final showcase suitable for the student&apos;s class level.
            </p>
            <ul>
              <li>72 mapped sessions per class, per pathway</li>
              <li>A student artefact at the end of every module</li>
              <li>Mid-term progress reporting to the school</li>
              <li>Optional teacher enablement alongside student classes</li>
            </ul>
          </MediaSplit>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={schoolFaqs} />
      <CtaBand variant="school" />
    </>
  );
}
