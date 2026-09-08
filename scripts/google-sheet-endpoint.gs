/**
 * Brolly Juniors — trial booking endpoint.
 *
 * This file is NOT part of the site build. It is Google Apps Script, and it
 * runs inside a Google Sheet. It is kept in the repo so the code that receives
 * every enquiry is version-controlled next to the form that sends it, rather
 * than living only inside one person's Google account.
 *
 * Setup is in docs/GOOGLE_SHEET_FORM.md. The short version:
 *
 *   1. Open the Google Sheet that should collect the bookings.
 *   2. Extensions → Apps Script. Delete the sample, paste this file, Save.
 *   3. Deploy → New deployment → type "Web app".
 *        Execute as:        Me
 *        Who has access:    Anyone
 *   4. Copy the /exec URL it gives you into `formEndpoint` in src/data/site.js.
 *
 * "Who has access: Anyone" is what lets a parent's browser post to it without
 * a Google login. It does not expose the sheet — this script only ever appends,
 * and never reads a row back out.
 */

/* The sheet tab the rows are written to. Created on the first submission if it
   does not exist yet, so there is nothing to set up by hand. */
var SHEET_NAME = 'Trial bookings';

/* The columns, in order. The header row is written once, from this list, so
   adding a field here is the only change needed on the sheet side — the header
   and the row can never drift apart. The keys match the form field names in
   src/components/TrialForm.jsx. */
var COLUMNS = [
  { key: 'submitted_at', label: 'Submitted at' },
  { key: 'parent_name', label: 'Parent name' },
  { key: 'phone', label: 'Phone' },
  { key: 'email', label: 'Email' },
  { key: 'child_name', label: "Child's name" },
  { key: 'child_age', label: "Child's age" },
  { key: 'child_class', label: 'Class' },
  { key: 'program', label: 'Program' },
  { key: 'mode', label: 'Preferred mode' },
  { key: 'batch', label: 'Preferred batch' },
  { key: 'area', label: 'Area' },
  { key: 'message', label: 'Notes' },
  { key: 'source_path', label: 'Page' },
];

function doPost(e) {
  try {
    var data = readPayload(e);

    /* Honeypot. The form renders a field no human can see; anything that fills
       it in is a bot, and is dropped with a normal-looking success so the bot
       does not learn to try again differently. */
    if (data.company) return ok({ skipped: true });

    if (!data.parent_name || !data.phone) {
      return fail('parent_name and phone are required');
    }

    appendRow(data);
    return ok({ stored: true });
  } catch (err) {
    return fail(String(err));
  }
}

/* A GET returns a health check rather than an error page, so the deployment can
   be confirmed by opening the /exec URL in a browser after setup. */
function doGet() {
  return ok({ ok: true, endpoint: 'brolly-juniors trial bookings' });
}

/* The form posts application/x-www-form-urlencoded, because that is a "simple"
   request and so never triggers a CORS preflight — Apps Script cannot answer a
   preflight OPTIONS. JSON is accepted too, for anything posting server-side. */
function readPayload(e) {
  if (e && e.parameter && e.parameter.parent_name) return e.parameter;
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (err) {
      /* Not JSON — fall through to whatever the form parameters gave us. */
    }
  }
  return (e && e.parameter) || {};
}

function appendRow(data) {
  /* A lock, because two parents submitting in the same second would otherwise
     both read the same last row and one booking would overwrite the other. */
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = getSheet();
    var row = COLUMNS.map(function (col) {
      if (col.key === 'submitted_at') {
        return Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
      }
      /* Leading apostrophe on the phone number, or Sheets reads "+91 70360
         44555" as a formula-ish value and mangles it. */
      if (col.key === 'phone' && data.phone) return "'" + String(data.phone);
      return data[col.key] || '';
    });
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    var header = COLUMNS.map(function (col) {
      return col.label;
    });
    sheet.appendRow(header);
    sheet.getRange(1, 1, 1, header.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function ok(payload) {
  return json(Object.assign({ result: 'success' }, payload || {}));
}

function fail(message) {
  return json({ result: 'error', message: message });
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
