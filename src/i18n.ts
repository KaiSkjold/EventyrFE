import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
   .init({
    // When the browser or system reports a regional code like 'da-DK',
    // use language-only ('da') so we request the translation file that
    // exists at `/locales/da/translation.json` instead of `/locales/da-DK/...`.
    // This avoids missing-file errors when the app sees region codes.
    load: 'languageOnly',
    // Leave `lng` unset so i18n uses its default language detection.
    fallbackLng: {
      'da-dyslexic': ['da-dyslexic', 'da'],
      'da-interm': ['da-interm', 'da'],
      'da-advanced': ['da-advanced', 'da'],
      'default': ['da']
    },
    supportedLngs: ["da", "da-dyslexic", "da-interm", "da-advanced", "en", "fr", "de"],
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
