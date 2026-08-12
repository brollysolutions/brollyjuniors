import { Link } from 'react-router-dom';
import { pythonFaqs } from '../data/site.js';
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
      ? 'A first Python program, loops, functions and a young coder capstone.'
      : n === 10
        ? 'Web, data and AI-enabled projects with a deployed capstone.'
        : 'Stronger logic, data structures, games and real applications.',
}));

export default function PythonForKids() {
  return (
    <>
      <PageHero
        eyebrow="Python for Kids · Classes 6–10"
        title="Coding classes for kids in Hyderabad — real Python, one confident step at a time."
        subtitle="Five progressive annual coding curricula—from a first Python program in Class 6 to web, data and AI-enabled projects in Class 10. Taught in person, in batches of eight."
        image="/images/python.svg"
        imageAlt="A code editor window with a friendly python snake"
        chips={[
          { strong: '36 weeks', span: 'Duration' },
          { strong: '72 sessions', span: 'Per class' },
          { strong: 'Project-based', span: 'Learning style' },
          { strong: 'Class-wise', span: 'Progression' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors runs coding classes for kids in Hyderabad from Class 6 to Class 10. Each class has its own 72-session plan spanning nine modules plus a capstone project. Topics include logic, algorithms, Python syntax, games, data work and testing—taught through explanation, guided coding, debugging and projects, in batches capped at eight children." />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit
            image="/images/projects.svg"
            imageAlt="A rocket, data chart and prototype cards from student projects"
            caption="Every module ships something"
            reverse
          >
            <h2>Typed code, not drag-and-drop blocks</h2>
            <p>
              Students write real Python from the first session. Each of the nine modules ends in a
              working artefact—a quiz, a game, a data tool, an application—and the year finishes with a
              capstone the student demonstrates and explains.
            </p>
            <ul>
              <li>Live coding, then guided practice</li>
              <li>Reading error messages and debugging</li>
              <li>Mini-project at the end of every module</li>
              <li>Annual capstone with documentation</li>
            </ul>
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
              <Link to={`/python-for-kids/class-${c.n}`} className="card" key={c.n}>
                <span className="icon">🐍</span>
                <h3>Python Course · Class {c.n}</h3>
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

      {/* Two things this section is doing, both deliberate.
          One: "coding classes in Hyderabad" is a genuinely ambiguous search —
          most of the local results are medical billing institutes — so the
          page says plainly which one this is. That helps a parent and it helps
          Google classify the page.
          Two: the national aggregators that hold the organic slots for this
          keyword have no room in this city. Local depth is the one thing they
          cannot copy, so it is stated rather than implied. */}
      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>Coding for children, not medical coding</h2>
            <p>
              Worth saying plainly, because searching for coding classes in Hyderabad returns a
              great many medical billing and coding institutes: this is computer programming for
              school-age children. Python, typed by the child, on a real keyboard.
            </p>
            <p>
              Nothing here is for adults changing careers, and nothing here is healthcare
              administration. If you are looking for medical coding certification, this is not it —
              and we would rather you found that out in ten seconds than after a phone call.
            </p>
          </div>
          <div className="prose">
            <h2>A room in Hyderabad, not a template page</h2>
            <p>
              Several of the largest names ranking for this search are national platforms with a
              page for every city and a presence in none of them. There is no address on those
              pages, no local teacher, and no photograph of a room your child could actually sit in.
            </p>
            <ul>
              <li>In-person classes, eight children to a batch</li>
              <li>The same educator each week, who knows your child&apos;s name</li>
              <li>Batch times built around Hyderabad school and traffic patterns</li>
              <li>A curriculum that continues next year rather than resetting</li>
            </ul>
            <p>
              <Link to="/contact">See the areas we serve</Link> for travel notes and batch timings
              by neighbourhood.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={pythonFaqs(6)} />
      <CtaBand variant="family" />
    </>
  );
}
