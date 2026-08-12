import { useParams, Navigate } from 'react-router-dom';
import { aiCurriculum } from '../data/aiCurriculum.js';
import { aiFaqs } from '../data/site.js';
import {
  PageHero,
  QuickAnswer,
  ModuleGrid,
  ClassProgressBar,
  OutcomeAssessment,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';

export default function AIClassPage() {
  const { classSlug } = useParams();
  const klass = Number((classSlug || '').replace('class-', ''));
  const data = aiCurriculum[klass];

  if (!data) return <Navigate to="/ai-for-kids" replace />;

  return (
    <>
      <PageHero
        eyebrow={`AI for Kids · Class ${klass}`}
        title={`AI Course for Class ${klass} Students`}
        subtitle={`A complete 36-week, 72-session artificial intelligence curriculum for Class ${klass} students—designed around practical tools, creative projects, academic usefulness and responsible AI habits.`}
        image="/images/ai.svg"
        imageAlt="A friendly AI robot beside a chat window and an idea spark"
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
            text={`The Class ${klass} AI program is a one-year learning pathway with two one-hour sessions per week. Students learn to use generative AI for age-appropriate research, study, communication, creativity and problem-solving while practising fact-checking, privacy and responsible use.`}
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
          <ClassProgressBar subject="ai" klass={klass} total={data.modules.length} />
          <ModuleGrid modules={data.modules} subject="ai" klass={klass} />
        </div>
      </section>

      <OutcomeAssessment />
      <FaqList items={aiFaqs(klass)} />
      <CtaBand variant="family" />
    </>
  );
}
