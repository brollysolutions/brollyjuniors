/* Google Analytics 4, plus the conversion tracking that makes it worth having.
 *
 * SEO_STRATEGY.md §9 makes the point that only one row of the measurement table
 * pays salaries: free trial bookings from organic search. Every other metric is
 * a proxy. So this file does two things.
 *
 * 1. Loads GA4 and reports a page_view on every client-side route change.
 *    React Router changes the URL without a document load, so without this GA4
 *    would record one page view per session and attribute every enquiry to the
 *    landing page.
 *
 * 2. Tracks the actual conversions. There is no booking form on this site —
 *    families book by tapping WhatsApp or the phone number — so the conversion
 *    is an outbound click, and nothing measures it unless it is measured here.
 *    One delegated listener on the document catches all of them, so no
 *    component needs an onClick and none can be forgotten later.
 *
 * Configuration: set VITE_GA4_ID in a .env file at the project root (see
 * .env.example and docs/ANALYTICS_SETUP.md). With no id set, nothing loads and
 * no requests are made — which is what you want in development.
 */

const GA4_ID = import.meta.env?.VITE_GA4_ID || '';

let loaded = false;
let lastPath = null;

function gtag(...args) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function isAnalyticsEnabled() {
  return Boolean(GA4_ID) && typeof window !== 'undefined';
}

function loadGa4() {
  if (loaded || !isAnalyticsEnabled()) return;
  loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  /* Page views are sent manually on route change instead, otherwise the
     first view would be counted twice. */
  gtag('config', GA4_ID, { send_page_view: false });
}

export function trackPageView(path, title) {
  if (!isAnalyticsEnabled()) return;
  if (path === lastPath) return;
  lastPath = path;
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title || document.title,
  });
}

/**
 * Report a conversion. `method` is how the family made contact, which is the
 * dimension worth splitting by — WhatsApp and phone convert very differently.
 */
export function trackLead(method, detail = {}) {
  if (!isAnalyticsEnabled()) return;
  gtag('event', 'generate_lead', {
    method,
    page_path: window.location.pathname,
    ...detail,
  });
}

export function trackEvent(name, params = {}) {
  if (!isAnalyticsEnabled()) return;
  gtag('event', name, { page_path: window.location.pathname, ...params });
}

/* Which kind of contact a clicked link represents, or null if it is not one. */
function leadMethod(anchor) {
  const href = anchor.getAttribute('href') || '';
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) return 'whatsapp';
  return null;
}

function onDocumentClick(event) {
  const anchor = event.target.closest?.('a');
  if (!anchor) return;

  const method = leadMethod(anchor);
  if (method) {
    trackLead(method, { link_text: (anchor.textContent || '').trim().slice(0, 80) });
    return;
  }

  /* Intent, not a conversion — but it is the step before one, and the drop-off
     between this and a WhatsApp tap is the most useful number on the site. */
  const href = anchor.getAttribute('href') || '';
  if (href === '/book-free-demo' || href.endsWith('/book-free-demo')) {
    trackEvent('book_trial_click', { source_path: window.location.pathname });
  }
}

export function initAnalytics() {
  if (!isAnalyticsEnabled()) return;
  loadGa4();
  document.addEventListener('click', onDocumentClick, { capture: true });
}
