import fs from "fs";
import fetch from "node-fetch";

const locales = ["da", "en", "fr", "de"];
const apiKey = process.env.LOCALISE_API_KEY;

if (!apiKey) {
  console.error("LOCALISE_API_KEY not set");
  process.exit(1);
}

for (const locale of locales) {
  const url = `https://localise.biz/api/export/locale/${locale}.json?format=i18next`;
  const outDir = `./public/locales/${locale}`;
  const outFile = `${outDir}/translation.json`;

  fs.mkdirSync(outDir, { recursive: true });

  const authHeader = "Basic " + Buffer.from(`${apiKey}:`).toString("base64");

  fetch(url, { headers: { Authorization: authHeader } })
    .then(res => {
      if (!res.ok) throw new Error(`Failed ${res.status}`);
      return res.json();
    })
    .then(data => {
      fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
      console.log(`Updated locale: ${locale}`);
    })
    .catch(err => {
      console.error(`Failed locale ${locale}:`, err.message);
    });
}
