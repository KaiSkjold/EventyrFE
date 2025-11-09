import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "da",          // your default language
    supportedLngs: ["da", "en", "fr", "de"], // optional but good practice
    debug: true,                // set false for production
    interpolation: {
      escapeValue: false,       // React already protects from XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
