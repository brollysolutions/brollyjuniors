import { useEffect, useState } from 'react';
import { site } from '../data/site.js';
import {
  submitTrialBooking,
  whatsappFallbackHref,
  isSheetConfigured,
} from '../lib/trialBooking.js';
import { trackLead } from '../lib/analytics.js';

/* The trial booking form.
 *
 * One component, used in three places: the modal that any "Book a free trial"
 * button opens, the /book-free-demo page, and each programme page's demo
 * section. The field list lives here rather than in each caller, because the
 * columns in the Google Sheet are generated from the same names — see
 * scripts/google-sheet-endpoint.gs.
 *
 * Three questions, and no more. Every extra field is another reason to close
 * the tab, and none of the rest — age, class, batch, preferred mode — is worth
 * losing an enquiry over when the call that follows will ask them anyway. The
 * course is not asked at all: it comes from the page the parent was reading
 * (see lib/course.js), which is a better answer than one picked out of a
 * dropdown by someone who does not yet know what the courses are called.
 */

export const TRIAL_FIELDS = [
  { name: 'parent_name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'phone', label: 'Contact number', type: 'tel', autoComplete: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  /* Not rendered: filled in from the page, submitted with the rest, and
     included here so it keeps its sheet column and its label in the WhatsApp
     fallback message. */
  { name: 'program', label: 'Course', type: 'hidden' },
];

const NO_COURSE = 'Not sure yet';

function initialValues(program) {
  const values = {};
  for (const field of TRIAL_FIELDS) values[field.name] = '';
  /* A form opened from a programme page already knows which programme the
     parent was reading about. Opened from anywhere else it must not guess:
     naming a course nobody mentioned puts an answer in the parent's mouth, and
     the row that reaches the sheet then says "Artificial Intelligence" about a
     family who never brought it up. */
  values.program = program || NO_COURSE;
  return values;
}

export default function TrialForm({ program, compact = false, onSuccess }) {
  const [values, setValues] = useState(() => initialValues(program));
  const [status, setStatus] = useState('idle'); // idle | sending | done | whatsapp | error
  const [error, setError] = useState('');
  /* The honeypot is kept out of `values` so it never reaches the sheet as a
     real answer, and is only read on submit. */
  const [trap, setTrap] = useState('');

  /* The course travels with the page, not with the form. The modal is opened
     from wherever the parent happens to be, so keep the value in step with the
     prop — otherwise a form opened on the chess page after being closed on the
     abacus page would still be carrying "Abacus Mastery". */
  useEffect(() => {
    setValues((v) => ({ ...v, program: program || NO_COURSE }));
  }, [program]);

  function set(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    /* Until site.formEndpoint is filled in there is no sheet to write to, so
       the same answers go straight to WhatsApp rather than being shown to the
       parent as a failure they can do nothing about. */
    if (!isSheetConfigured()) {
      window.open(whatsappFallbackHref(values, TRIAL_FIELDS), '_blank', 'noopener');
      trackLead('whatsapp', { program: values.program });
      setStatus('whatsapp');
      onSuccess?.();
      return;
    }

    setStatus('sending');
    setError('');
    try {
      await submitTrialBooking({ ...values, company: trap });
      trackLead('form', { program: values.program });
      setStatus('done');
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  }

  if (status === 'done' || status === 'whatsapp') {
    const firstName = values.parent_name.trim().split(' ')[0];
    return (
      <div className="trial-done">
        <span className="trial-done-tick" aria-hidden="true">
          ✓
        </span>
        <h3>{status === 'done' ? 'Booking received' : 'Your details are ready to send'}</h3>
        <p>
          {status === 'done' ? (
            <>
              Thank you{firstName ? `, ${firstName}` : ''}. We have your details and will call{' '}
              {values.phone} to confirm a trial slot. If you would rather not wait, message us directly.
            </>
          ) : (
            <>
              WhatsApp should have opened with your answers filled in — press send there and we will
              confirm a trial slot. If it did not open, call us instead.
            </>
          )}
        </p>
        <div className="btn-row">
          <a
            href={
              status === 'done' ? site.whatsappHref : whatsappFallbackHref(values, TRIAL_FIELDS)
            }
            className="btn btn-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            {status === 'done' ? 'WhatsApp us' : 'Open WhatsApp again'}
          </a>
          <a href={site.phoneHref} className="btn btn-outline">
            Call {site.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={compact ? 'trial-form is-compact' : 'trial-form'} onSubmit={handleSubmit} noValidate={false}>
      {/* What the parent is booking, stated rather than asked. The value is
          the one that will reach the sheet, so if it is wrong here it is
          visibly wrong before the form is sent, not after. */}
      {values.program && values.program !== NO_COURSE && (
        <p className="trial-course">
          <span className="trial-course-label">Course</span>
          <span className="trial-course-name">{values.program}</span>
        </p>
      )}

      <div className="trial-grid">
        {TRIAL_FIELDS.filter((f) => f.type !== 'hidden').map((field) => {
          const id = `trial-${field.name}`;
          /* Name and number sit side by side; the email takes the row under
             them rather than leaving a gap beside itself. */
          const wide = field.name === 'email';
          return (
            <div className={wide ? 'trial-field is-wide' : 'trial-field'} key={field.name}>
              <label htmlFor={id}>
                {field.label}
                {field.required && (
                  <span className="trial-req" aria-hidden="true">
                    {' '}
                    *
                  </span>
                )}
              </label>
              <input
                id={id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
                value={values[field.name]}
                onChange={(e) => set(field.name, e.target.value)}
              />
            </div>
          );
        })}
      </div>

      {/* Bot trap: off-screen and skipped by keyboard and screen readers, so
          only an automated submitter fills it in. The endpoint drops any
          submission that has it set. */}
      <div className="trial-trap" aria-hidden="true">
        <label htmlFor="trial-company">Company</label>
        <input
          id="trial-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
        />
      </div>

      <button className="btn btn-primary trial-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Book my free trial'}
      </button>

      {status === 'error' && (
        <div className="trial-error" role="alert">
          <p>
            <strong>We could not save that just now.</strong> {error}
          </p>
          <p>
            Nothing you typed is lost — send the same details straight to us instead:
          </p>
          <div className="btn-row">
            <a
              href={whatsappFallbackHref(values, TRIAL_FIELDS)}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              Send on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-outline">
              Call {site.phone}
            </a>
          </div>
        </div>
      )}

      <p className="trial-note">
        {isSheetConfigured()
          ? 'We use your number only to arrange the trial class and answer your questions.'
          : 'We use your number only to arrange the trial class and answer your questions. Submitting opens WhatsApp with your answers filled in.'}
      </p>
    </form>
  );
}
