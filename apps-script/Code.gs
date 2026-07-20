/**
 * Limitless Abilities 2026 — Forms backend
 * Receives POSTs from the registration form (index.html) and the
 * nomination form (nomination-form.html) and appends each submission
 * as a row in this spreadsheet: "Registration" and "Nominations" tabs.
 *
 * DEPLOY (one time, ~3 minutes):
 * 1. Create a new Google Sheet (this will hold all submissions).
 * 2. Extensions → Apps Script → delete the sample code, paste this file.
 * 3. Deploy → New deployment → type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Authorize when prompted, then copy the Web app URL (ends in /exec).
 * 5. Paste that URL into assets/forms-endpoint.js (FORMS_ENDPOINT).
 * 6. Share the Sheet with the organizers (viewer is enough) — they can
 *    download it as a table via File → Download → Excel/CSV any time.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var p = e.parameter || {};
    var tab = p._form === 'nomination' ? 'Nominations' : 'Registration';
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(tab) || ss.insertSheet(tab);

    var data = {};
    for (var k in p) {
      if (k.charAt(0) !== '_') data[k] = p[k];
    }
    var keys = Object.keys(data);

    var headers;
    if (sh.getLastRow() === 0) {
      headers = ['Timestamp'].concat(keys);
      sh.appendRow(headers);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    } else {
      headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
      var missing = keys.filter(function (k) { return headers.indexOf(k) === -1; });
      if (missing.length) {
        sh.getRange(1, headers.length + 1, 1, missing.length).setValues([missing]);
        headers = headers.concat(missing);
      }
    }

    var row = headers.map(function (h) {
      return h === 'Timestamp' ? new Date() : (data[h] || '');
    });
    sh.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Health check: open the /exec URL in a browser to confirm deployment.
function doGet() {
  return ContentService
    .createTextOutput('Limitless Abilities forms backend is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
