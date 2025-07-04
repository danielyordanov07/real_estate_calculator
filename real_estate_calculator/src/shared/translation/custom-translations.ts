export type LanguageCode = 'en' | 'bg';

export const translations: Record<LanguageCode, object> = {
  en: {
  },
  bg: {
  }
};

const lang: LanguageCode = 'en';
const data = translations[lang];