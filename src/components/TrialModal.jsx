import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TrialForm from './TrialForm.jsx';
import { courseForPath } from '../lib/course.js';
import { trackEvent } from '../lib/analytics.js';

/* The trial booking modal, and the one place that decides when it opens.
 *
 * Every "Book a free trial" call to action on the site is a <Link> to
 * /book-free-demo — there are around twenty-five of them, across pages and
 * across data files. Rather than convert each one into a button (and have the
 * next one somebody adds quietly go back to navigating), a single delegated
 * click handler here catches any click on a link to that path and opens the
 * form over the page the parent is already reading.
 *
 * The links stay real links, which matters more than it looks:
 *   - middle-click, ctrl-click and "open in new tab" still work, because the
 *     handler ignores modified clicks;
 *   - with JavaScript unavailable, or before hydration, the click navigates to
 *     /book-free-demo, which renders the same form on a real page;
 *   - the page keeps its place in the sitemap and its own SEO entry.
 */

const TrialBookingContext = createContext(null);

export function useTrialBooking() {
  const ctx = useContext(TrialBookingContext);
  if (!ctx) throw new Error('useTrialBooking must be used inside TrialBookingProvider');
  return ctx;
}

const TRIAL_PATH = '/book-free-demo';

function isPlainLeftClick(e) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

export function TrialBookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [program, setProgram] = useState(null);
  const dialogRef = useRef(null);
  const restoreFocusTo = useRef(null);

  /* Which course the form should say it is booking.
   *
   * In order: what the caller asked for, then a data-program attribute on the
   * button that was pressed (or anything wrapping it — a course card can mark
   * itself once and every CTA inside it inherits the answer), then the page
   * itself. Nothing else: an unknown page leaves the course blank rather than
   * guessing, and the form simply does not mention one. */
  const courseFor = useCallback((opts = {}, anchor = null) => {
    if (opts.program) return opts.program;
    const marked = anchor?.closest?.('[data-program]');
    const declared = marked?.getAttribute('data-program');
    if (declared) return declared;
    return courseForPath(window.location.pathname);
  }, []);

  const openModal = useCallback(
    (opts = {}, anchor = null) => {
      restoreFocusTo.current = document.activeElement;
      const course = courseFor(opts, anchor);
      setProgram(course);
      setOpen(true);
      trackEvent('trial_form_open', {
        source_path: window.location.pathname,
        program: course || 'unknown',
      });
    },
    [courseFor]
  );

  const closeModal = useCallback(() => {
    setOpen(false);
    /* Send focus back where it came from, or a keyboard user is dropped at the
       top of the document with no idea what just happened. */
    restoreFocusTo.current?.focus?.();
  }, []);

  /* Delegated: catches every existing CTA without touching its call site. */
  useEffect(() => {
    function onClick(e) {
      if (!isPlainLeftClick(e)) return;
      const anchor = e.target.closest?.('a');
      if (!anchor || anchor.target === '_blank') return;

      const href = anchor.getAttribute('href') || '';
      if (href !== TRIAL_PATH && !href.endsWith(TRIAL_PATH)) return;

      /* On the booking page the form is already on screen, so opening it in a
         modal on top of itself would be absurd — and letting the link navigate
         to the page you are already on does nothing visible at all. Scroll to
         it instead. */
      if (window.location.pathname === TRIAL_PATH) {
        const form = document.getElementById('trial-form');
        if (!form) return;
        e.preventDefault();
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        form.querySelector('input, select, textarea')?.focus({ preventScroll: true });
        return;
      }

      e.preventDefault();
      openModal({}, anchor);
    }

    /* Capture phase, and it has to be.
     *
     * React attaches its own listeners to the root container, so a bubble-phase
     * listener on the document runs *after* the <Link> has already pushed the
     * new URL — at which point preventDefault is too late to stop the
     * navigation, and window.location.pathname already reads
     * /book-free-demo. Capturing puts this ahead of React, where cancelling the
     * event still means something: react-router skips navigating when the
     * event is already defaultPrevented. */
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [openModal]);

  /* While the modal is up: escape closes it, the page behind does not scroll,
     and tab stays inside the dialog. */
  useEffect(() => {
    if (!open) return undefined;

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    /* Focus the first field, not the close button — the parent came here to
       type, and this is the difference between a form and an obstacle. */
    dialogRef.current?.querySelector('input, select, textarea')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, closeModal]);

  return (
    <TrialBookingContext.Provider value={{ open: openModal, close: closeModal, isOpen: open }}>
      {children}
      {open && (
        <div className="trial-overlay" onMouseDown={(e) => e.target === e.currentTarget && closeModal()}>
          <div
            className="trial-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-modal-title"
            ref={dialogRef}
          >
            <button className="trial-close" type="button" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <div className="trial-modal-head">
              <span className="eyebrow">Free trial · No upfront payment</span>
              <h2 id="trial-modal-title">Book your child&rsquo;s free trial class</h2>
              <p>
                Leave your name, number and email — we will call you to confirm a suitable batch and
                timing. One free trial per new family.
              </p>
            </div>
            <TrialForm program={program} compact />
            <p className="trial-modal-foot">
              Would rather read first?{' '}
              <Link to={TRIAL_PATH} onClick={closeModal} className="txtlink">
                See what happens in a trial class
              </Link>
            </p>
          </div>
        </div>
      )}
    </TrialBookingContext.Provider>
  );
}
