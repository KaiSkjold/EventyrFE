// scripts/update-translations.js
// Fetch translation JSON files from Localise.biz and save them under `public/locales/<locale>/translation.json`.
// Requires the LOCALISE_API_KEY environment variable to be set with a valid API key.

import fs from "fs";
import fetch from "node-fetch";

// Locales the project supports and for which we'll pull translations.
// Added Danish variants for reading levels so each can have its own translation file.
// Some Localise locale slugs differ from our internal language codes (e.g. Localise uses
// 'da-DK' while the app uses 'da'). Use `localeMap` to map internal codes to Localise slugs.
const locales = ["da", "da-dyslexic", "da-interm", "da-advanced", "en", "fr", "de"];

// Map internal locale -> Localise slug when they differ.
const localeMap = {
  'da': 'da-DK'
};

// The Localise API key must be provided via an environment variable.
// The script exits early with code 1 if it's not set.
const apiKey = process.env.LOCALISE_API_KEY;

if (!apiKey) {
  // This is a fatal configuration error: alert and abort so CI or the caller knows it failed.
  console.error("LOCALISE_API_KEY not set");
  process.exit(1);
}

// For each locale, fetch the exported JSON and write it to the public folder.
for (const locale of locales) {
  // Determine the slug to request from Localise, falling back to the internal code.
  const slug = localeMap[locale] || locale;

  // Export endpoint for Localise.biz in the i18next JSON format.
  const url = `https://localise.biz/api/export/locale/${slug}.json?format=i18next`;

  // Destination directory and file for the downloaded translations. We always write
  // to the internal folder name (e.g. write Localise 'da-DK' into './public/locales/da').
  const outDir = `./public/locales/${locale}`;
  const outFile = `${outDir}/translation.json`;

  // Ensure the directory exists. mkdirSync with { recursive: true } is safe to call even if the dir already exists.
  fs.mkdirSync(outDir, { recursive: true });

  // Construct an HTTP Basic Authorization header. Localise expects the API key as the username and an empty password.
  // The format is `Basic base64(<username>:<password>)`. We put a trailing ':' to represent the empty password.
  const authHeader = "Basic " + Buffer.from(`${apiKey}:`).toString("base64");

  // Fetch the resource. This is non-blocking and will run concurrently for each locale.
  // We check `res.ok` and call res.json() to parse the body as JSON.
  fetch(url, { headers: { Authorization: authHeader } })
    .then(async (res) => {
      if (!res.ok) {
        // Include response body to make 4xx/5xx diagnostics actionable.
        const body = await res.text();
        throw new Error(`Failed ${res.status} for slug=${slug}: ${body}`);
      }
      return res.json();
    })
    .then(data => {
      // Write a human-readable JSON file with 2-space indentation so it's easy to review in source control.
      fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
      console.log(`Updated locale: ${locale} (fetched slug=${slug})`);
    })
    .catch(err => {
      // Catch and report errors for particular locale without aborting other downloads.
      console.error(`Failed locale ${locale}:`, err.message);
    });
}
