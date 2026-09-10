import { site, address } from './site.js';

/* Privacy policy and terms, rendered by pages/LegalPage.jsx.
 *
 * Written against what the code actually does, not from a template. Every claim
 * here is traceable:
 *
 *   - the form fields          components/TrialForm.jsx
 *   - where a booking goes     site.formEndpoint -> scripts/google-sheet-endpoint.gs
 *   - the WhatsApp fallback    lib/trialBooking.js
 *   - analytics, and its off   lib/analytics.js (no VITE_GA4_ID, nothing loads)
 *   - the progress store       lib/progress.js, key 'brolly-progress-v1'
 *
 * That matters more here than anywhere else on the site: a privacy policy
 * describing collection the site does not do is worse than no policy at all,
 * and it is the one page a parent reads adversarially. If any of those files
 * change, this copy has to change with them.
 *
 * ⚠️ Reviewed for accuracy, not for legal sufficiency. India's DPDP Act 2023
 * has specific obligations around children's data that a lawyer should confirm
 * before this is relied on — see the note in docs/DEPLOYMENT.md.
 */

/* Both forms of the same date: the one a parent reads, and the one the <time>
   element needs. Kept adjacent so they cannot drift — the failure mode is a
   page that says September while its machine-readable date says January. */
const UPDATED = '10 September 2026';
const UPDATED_ISO = '2026-09-10';

const privacy = {
  path: '/privacy-policy',
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  subtitle:
    'What we collect when you enquire about a class, why we collect it, and what we do not do with it. Written in plain English rather than legalese.',
  updated: UPDATED,
  updatedIso: UPDATED_ISO,
  crumb: 'Privacy Policy',
  sections: [
    {
      heading: 'The short version',
      text: 'We collect a parent\'s name and phone number when you book a free trial class, because we cannot call you back without them. We do not sell that information, we do not share it for advertising, and we do not ask children for personal details anywhere on this site.',
    },
    {
      heading: 'What we collect',
      text: 'There is one form on this site — the free trial booking form. It asks for:',
      bullets: [
        'Your name, so we know who we are speaking to.',
        'A contact number, so we can call or message you to arrange the trial.',
        'An email address — optional, and only used if we cannot reach you by phone.',
        'The course you are enquiring about, so the right educator calls you.',
      ],
    },
    {
      heading: 'What we do not collect',
      text: 'We deliberately do not ask for more than the above.',
      bullets: [
        'We never ask a child for their name, age, school, photograph or contact details on this website.',
        'We do not ask for payment details online. Fees are discussed and paid in person at the centre.',
        'We do not require an account. There is nothing to sign up for and no password to store.',
      ],
    },
    {
      heading: 'Where a booking goes',
      text: 'A submitted form is sent to a private Google Sheet that only Brolly Juniors staff can open. If that connection fails, the site instead opens WhatsApp with the same details written into a message you can read before you send it — nothing is transmitted until you press send in WhatsApp yourself.',
    },
    {
      heading: 'Your child\'s progress stays in your browser',
      text: 'The quiz scores and badges on the My Progress page are stored only in your own browser, under a key named brolly-progress-v1. They are never sent to us and we cannot see them. Clearing your browser data erases them permanently, and we have no copy to restore. This is also why that page is excluded from search engines — there is nothing on it that belongs to anyone but you.',
    },
    {
      heading: 'Analytics',
      text: 'We use Google Analytics to understand which pages parents find useful and how many people tap the WhatsApp or phone button. It records page addresses, approximate location at city level, and device type. It does not record your name, your number, or anything you type into the form.',
    },
    {
      heading: 'Who else sees your information',
      text: 'Three companies process data on our behalf, and no one else:',
      bullets: [
        'Google — hosts the sheet that bookings are written to, and provides the analytics described above.',
        'WhatsApp (Meta) — only if you choose to message us there, in which case their privacy policy applies to the conversation.',
        'Our hosting provider — serves the pages of this website.',
      ],
    },
    {
      heading: 'How long we keep it',
      text: 'Enquiry details are kept while we are in touch with you about a class, and for a reasonable period afterwards in case you return. If you ask us to delete your details, we delete the row — write to us at the address below and we will confirm once it is done.',
    },
    {
      heading: 'Your rights',
      text: 'You can ask us what we hold about you, ask us to correct it, or ask us to delete it. There is no form to fill in for this. Email or call, tell us which, and we will act on it.',
    },
    {
      heading: 'Changes to this policy',
      text: 'If we change what we collect, we change this page and update the date at the top. We do not send notifications about it, so if this matters to you it is worth checking back.',
    },
    {
      heading: 'Contact',
      text: `Questions about anything on this page should go to ${site.email}, or call ${site.phone}. We are at ${address.streetAddress}, ${address.locality} ${address.postalCode}.`,
    },
  ],
};

const terms = {
  path: '/terms',
  eyebrow: 'Legal',
  title: 'Terms of Use',
  subtitle:
    'The terms you agree to by using this website, and how enrolment, fees and class scheduling actually work at the centre.',
  updated: UPDATED,
  updatedIso: UPDATED_ISO,
  crumb: 'Terms of Use',
  sections: [
    {
      heading: 'About these terms',
      text: `This website is operated by ${site.name}, a children's learning centre in ${address.neighbourhood}, ${address.locality}. By browsing the site or submitting the trial booking form you accept the terms set out below. If you do not accept them, please do not use the site.`,
    },
    {
      heading: 'What this website is',
      text: 'This site describes the programmes we teach and lets you request a free trial class. It is an information and enquiry service. Nothing on it constitutes an offer, a reservation of a seat, or a contract of enrolment.',
    },
    {
      heading: 'Booking a trial class',
      text: 'Submitting the form is a request, not a confirmed booking.',
      bullets: [
        'We will contact you to agree a date and time. Until we do, no class is reserved.',
        'The trial class is free and carries no obligation to enrol.',
        'Seats in a batch are limited and are allocated in the order enrolments are completed.',
        'We may decline or reschedule a trial where a batch is full or an educator is unavailable.',
      ],
    },
    {
      heading: 'Enrolment, fees and schedules',
      text: 'Everything about enrolment is agreed in person at the centre, not through this website.',
      bullets: [
        'Fees, batch timings and course duration are confirmed at the time of enrolment and are not published here.',
        'Fees quoted at enrolment apply to the term you enrol for. We may revise fees for later terms.',
        'Refund and withdrawal terms are set out in the enrolment form you sign at the centre; those terms govern, not this page.',
        'We may change the timetable, merge batches, or substitute an educator where necessary to run the class.',
      ],
    },
    {
      heading: 'Curriculum and outcomes',
      text: 'The module outlines, session counts and level descriptions on this site describe the curriculum as we currently teach it. We update them as the curriculum develops. Learning outcomes describe what the programme is designed to build, and every child progresses differently — they are not a guarantee of any particular result, score or admission.',
    },
    {
      heading: 'The worksheet generator and apps',
      text: 'The abacus worksheet generator and the practice apps on this site are provided free for personal and classroom use. You may print and use the worksheets they produce. You may not resell them or present them as your own material. They are offered as-is, without warranty.',
    },
    {
      heading: 'Acceptable use',
      text: 'You agree not to:',
      bullets: [
        'Copy, republish or resell the curriculum content, page copy or illustrations on this site.',
        'Use automated tools to scrape the site at a rate that affects its availability.',
        'Attempt to gain access to any part of the site or its systems that is not publicly available.',
        'Submit false details, or another person\'s details, through the enquiry form.',
      ],
    },
    {
      heading: 'Our content',
      text: `The curriculum, written content, illustrations and the ${site.name} name and umbrella mark belong to us. Quoting a short passage with a link back is welcome. Reproducing a page, a module outline or the curriculum structure is not.`,
    },
    {
      heading: 'Links to other sites',
      text: 'Where we link out — to Google Maps, to WhatsApp, or to a source cited in a guide — we do not control what those sites do and are not responsible for their content or their handling of your data.',
    },
    {
      heading: 'Availability and accuracy',
      text: 'We keep this site accurate and available, but we do not promise it will be uninterrupted or error-free. Where a page contradicts what is agreed in writing at the centre, the document signed at the centre is the one that counts.',
    },
    {
      heading: 'Governing law',
      text: `These terms are governed by the laws of India, and the courts at ${address.locality}, ${address.region} have exclusive jurisdiction over any dispute arising from them.`,
    },
    {
      heading: 'Contact',
      text: `Questions about these terms should go to ${site.email}, or call ${site.phone}.`,
    },
  ],
};

export const legalPages = [privacy, terms];

export const legalPagePaths = legalPages.map((p) => p.path);
