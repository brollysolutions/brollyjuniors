import { useParams, Navigate } from 'react-router-dom';
import { pythonCurriculum } from '../data/pythonCurriculum.js';
import { pythonFaqs } from '../data/site.js';
import {
  PageHero,
  QuickAnswer,
  ModuleGrid,
  ClassProgressBar,
  OutcomeAssessment,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';

export default function PythonClassPage() {
  const { classSlug } = useParams();
  const klass = Number((classSlug || '').replace('class-', ''));
  const data = pythonCurriculum[klass];

  if (!data) return <Navigate to="/python-for-kids" replace />;

  return (
    <>
      <PageHero
        eyebrow={`Python for Kids · Class ${klass}`}
        title={`Python Course for Class ${klass} Students`}
        subtitle={`A project-based 36-week, 72-session Python programming curriculum for Class ${klass} students, progressing from clear coding foundations to a working year-end application.`}
        image="/images/python.svg"
        imageAlt="A code editor window with a friendly python snake"
        chips={[
          { strong: '36 weeks', span: 'Duration' },
          { strong: '2 / week', span: 'Sessions weekly' },
          { strong: '72 hours', span: 'Total learning' },
          { strong: data.level, span: 'Level' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer
            text={`The Class ${klass} Python program provides two one-hour coding sessions per week for 36 instructional weeks. Every module combines concepts, guided practice, debugging and a project, so learners develop working Python skills rather than merely replicating code.`}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Complete annual curriculum</span>
            <h2 className="section-title">9 modules × 8 sessions = 72 guided sessions</h2>
            <p className="section-lead">
              Select any module to read the full explanation—the big idea, the concepts unpacked, the
              session-by-session plan and the project students build.
            </p>
          </div>
          <ClassProgressBar subject="python" klass={klass} total={data.modules.length} />
          <ModuleGrid modules={data.modules} subject="python" klass={klass} />
        </div>
      </section>

      <OutcomeAssessment />
      <FaqList items={pythonFaqs(klass)} />
      <CtaBand variant="family" />
    </>
  );
}
