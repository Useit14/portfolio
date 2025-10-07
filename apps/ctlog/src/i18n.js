// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/public/locales/{{lng}}/translation.json", // Путь к файлам переводов
    },
    fallbackLng: "en", // Язык по умолчанию
    detection: {
      order: ["localStorage", "navigator"], // Порядок определения языка
      lookupLocalStorage: "i18nextLng",
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
