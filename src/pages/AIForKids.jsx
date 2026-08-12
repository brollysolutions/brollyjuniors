import { Link } from 'react-router-dom';
import { aiFaqs } from '../data/site.js';
import {
  PageHero,
  QuickAnswer,
  Pillars,
  FaqList,
  CtaBand,
  MediaSplit,
  SectionHead,
} from '../components/Shared.jsx';

const classCards = [6, 7, 8, 9, 10].map((n) => ({
  n,
  blurb:
    n === 6
      ? 'Begins with safe exploration and study support.'
      : n <= 8
        ? 'Develops prompting, research and multimodal creation.'
        : 'Designs applied workflows and builds portfolio capstones.',
}));

export default function AIForKids() {
  return (
    <>
      <PageHero
        eyebrow="AI for Kids · Classes 6–10"
        title="AI classes for kids in Hyderabad that grow with your child."
        subtitle="Five separate annual curricula that help students use modern AI tools for learning, creativity, research and problem-solving—with safety built in, and taught in person."
        image="/images/ai.svg"
        imageAlt="A friendly AI robot beside a chat window and an idea spark"
        chips={[
          { strong: '36 weeks', span: 'Duration' },
          { strong: '72 sessions', span: 'Per class' },
          { strong: 'No coding', span: 'Needed to begin' },
          { strong: 'Responsible AI', span: 'Focus throughout' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors runs AI classes for kids in Hyderabad from Class 6 to Class 10, teaching artificial intelligence as practical literacy rather than a collection of shortcuts. Each class receives its own 36-week, 72-session curriculum with nine modules and a capstone project. No programming is required to begin." />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/methodology.svg"
            imageAlt="A four-step learning cycle: explain, practise, create, reflect"
            caption="9 modules × 8 sessions"
            reverse
          >
            <h2>What the curriculum covers</h2>
            <p>
              Every module runs the same cycle—explain, practise, create, reflect—so students always
              finish with something they built and can talk about.
            </p>
            <ul>
              <li>Prompting and communication</li>
              <li>Research and verification</li>
              <li>Images, audio and video</li>
              <li>Privacy, bias and ethics</li>
            </ul>
            <p>
              Students work with ChatGPT, Claude, image generation tools, ElevenLabs, HeyGen and other
              age-appropriate platforms. Specific tools may change as safer or more suitable options
              become available.
            </p>
          </MediaSplit>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <SectionHead
            eyebrow="Class-wise pathways"
            title="A distinct annual curriculum for every class"
          />
          <div className="grid-3">
            {classCards.map((c) => (
              <Link to={`/ai-for-kids/class-${c.n}`} className="card" key={c.n}>
                <span className="icon">🤖</span>
                <h3>AI Course · Class {c.n}</h3>
                <p>{c.blurb}</p>
                <div className="card-meta">
                  <span className="tag">36 weeks</span>
                  <span className="tag">72 sessions</span>
                  <span className="tag teal">9 modules + capstone</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The trust argument, stated rather than implied. The national names in
          this category damaged parents' confidence badly enough that "calm
          competence" is now a differentiator — see BRAND_BRIEF.md. Parents
          searching this term are sceptical, and pretending otherwise reads as
          more of the same. */}
      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>Why parents are wary — and fairly so</h2>
            <p>
              Children&apos;s technology education in India spent several years being sold with
              celebrity advertising, scripted teachers and promises about app-building nine-year-olds.
              A lot of families paid for that and got very little.
            </p>
            <p>
              We will not claim your child will build a startup. What a year here produces is a child
              who can prompt precisely, check whether an answer is actually true, and explain what they
              made and why. Those are the parts that keep working when the tools change.
            </p>
          </div>
          <div className="prose">
            <h2>What in-person actually changes</h2>
            <ul>
              <li>Eight children in a room — disengagement shows up the same session, not in month four</li>
              <li>The same educator every week, who knows your child</li>
              <li>Safety habits practised under supervision rather than described in a video</li>
              <li>A project presented aloud at the end of every module</li>
            </ul>
            <p>
              Read our guide on{' '}
              <Link to="/resources/teach-kids-to-use-chatgpt-safely">
                teaching children to use AI tools safely
              </Link>{' '}
              — it is the same material we cover in class, free and without an email wall.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={aiFaqs(6)} />
      <CtaBand variant="family" />
    </>
  );
}
