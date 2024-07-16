import i18n from "i18next";
import Turkish from './tr.json';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'tr',
    resources: {
        tr: Turkish,
    },
    react: {
        useSuspense: false
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n;