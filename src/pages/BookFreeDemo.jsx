import { Link } from 'react-router-dom';
import { site, familyFaqs } from '../data/site.js';
import { PageHero, QuickAnswer, FaqList, CtaBand } from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';

export default function BookFreeDemo() {
  return (
    <>
      <PageHero
        eyebrow="Free trial · No pressure · No upfront payment"
        title="Book your child's free trial class in Hyderabad."
        subtitle="Tell us your child's class and interests. We will recommend a suitable program and available trial."
        image="/images/free-trial.svg"
        imageAlt="A free trial class ticket with a happy child and a calendar"
        chips={[
          { strong: 'One free trial', span: 'Per new family' },
          { strong: 'Meet the educator', span: 'In person' },
          { strong: 'Experience the format', span: 'A real class' },
          { strong: 'Choose confidently', span: 'Then decide' },
        ]}
      >
        <div className="btn-row">
          <a href={site.whatsappHref} className="btn btn-primary" target="_blank" rel="noreferrer">
            Message us on WhatsApp
          </a>
          <a href={site.phoneHref} className="btn btn-outline">
            Call {site.phone}
          </a>
          <Link to="/programs" className="btn btn-ghost">
            View all programs
          </Link>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Every new family can attend one free Brolly Juniors trial class. Message the team with the child's name, class, age, area and program interest to check suitable batches." />
        </div>
      </section>

      {/* The same form the modal shows. Every CTA on the site opens that modal
          instead of navigating here, so this copy is what a parent reaches by
          typing the URL, following a search result, or arriving with
          JavaScript unavailable — and it has to work on its own. */}
      <section className="section-tight" id="trial-form">
        <div className="container">
          <div className="trial-panel">
            <div className="trial-modal-head">
              <span className="eyebrow">One form, one reply</span>
              <h2>Book your child&rsquo;s free trial class</h2>
              <p>
                Three details, nothing more. We will call you to confirm a suitable batch and timing.
              </p>
            </div>
            <TrialForm />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container split">
          <div className="panel">
            <h2>📝 What we will ask on the call</h2>
            <p>
              Your child&apos;s class and age, program interest, previous experience if any, preferred weekday
              or weekend timing, and your Hyderabad area. The form itself only needs your name, number and
              email.
            </p>
          </div>
          <div className="panel">
            <h2>🎟️ What happens in the trial</h2>
            <p>
              Your child experiences the learning format and the educator observes readiness and fit. You can
              then ask questions before deciding.
            </p>
          </div>
        </div>
      </section>

      <FaqList items={familyFaqs} />
      <CtaBand variant="family" />
    </>
  );
}
