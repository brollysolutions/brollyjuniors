import { site } from '../data/site.js';

/* Sending a trial booking to the Google Sheet.
 *
 * The receiving end is scripts/google-sheet-endpoint.gs, deployed as an Apps
 * Script web app. Two things about that endpoint shape the code here:
 *
 *   1. Apps Script cannot answer a CORS preflight. The body is therefore sent
 *      as application/x-www-form-urlencoded — one of the three content types
 *      the browser treats as a "simple" request and never preflights. Sending
 *      JSON would look tidier and would fail every time.
 *
 *   2. The /exec URL answers with a redirect to googleusercontent.com, which
 *      does send Access-Control-Allow-Origin, so the JSON reply is readable
 *      and a real failure can be told apart from a success.
 */

export function isSheetConfigured() {
  return Boolean(site.formEndpoint);
}

/* A prefilled WhatsApp message carrying the same answers.
 *
 * Used when the sheet is not configured yet, and as the offer after a failed
 * send. A parent who has typed out their child's details should never be told
 * "something went wrong" and left with nowhere to put them. */
export function whatsappFallbackHref(values, fields) {
  const lines = ['Hello Brolly Juniors — I would like to book a free trial class.', ''];
  for (const field of fields) {
    const value = values[field.name];
    if (value) lines.push(`${field.label}: ${value}`);
  }
  return `${site.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export async function submitTrialBooking(values) {
  if (!isSheetConfigured()) {
    throw new Error('NOT_CONFIGURED');
  }

  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) {
    if (value != null) body.append(key, String(value));
  }
  body.append('source_path', typeof window === 'undefined' ? '' : window.location.pathname);

  const response = await fetch(site.formEndpoint, {
    method: 'POST',
    /* Explicit, even though URLSearchParams sets it — the whole no-preflight
       property of this request depends on this one header staying put. */
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body,
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`Sheet responded ${response.status}`);
  }

  /* A deployment set to "Only myself" answers 200 with Google's sign-in page
     rather than the JSON this script returns, which is by far the most common
     way this is misconfigured. Reading the body catches it; a bare status
     check would report a silent success and lose the booking. */
  const text = await response.text();
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error(
      'The endpoint did not return JSON. Check that the Apps Script deployment is set to "Anyone".'
    );
  }
  if (payload.result !== 'success') {
    throw new Error(payload.message || 'The sheet rejected the booking.');
  }
  return payload;
}
