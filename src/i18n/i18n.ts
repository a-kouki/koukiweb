import enTranslation from '../locales/en.json'
import ptTranslation from '../locales/pt.json'
import esTraslatioon from '../locales/es.json'
import jpTraslatioon from '../locales/jp.json'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const saveLng = 
  typeof window !== "undefined" ? localStorage.getItem("lng") : null;

  i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation:enTranslation
      },
      pt: {
        translation:ptTranslation
      },
      es:{
        translation: esTraslatioon
      },
      jp:{
        translation: jpTraslatioon
      }
    },
    lng: saveLng || "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
