import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import koTranslations from './locales/ko.json';
import frTranslations from './locales/fr.json';
import itTranslations from './locales/it.json';

const resources = {
  en: {
    translation: enTranslations
  },
  ko: {
    translation: koTranslations
  },
  fr: {
    translation: frTranslations
  },
  it: {
    translation: itTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

// Helper to get available languages
export const availableLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' }
];

// Currency mapping by language
export const currencyByLanguage: Record<string, string> = {
  en: 'GBP',
  ko: 'KRW',
  fr: 'EUR',
  it: 'EUR'
};

// Date format by language
export const dateFormatByLanguage: Record<string, string> = {
  en: 'DD/MM/YYYY',
  ko: 'YYYY년 MM월 DD일',
  fr: 'DD/MM/YYYY',
  it: 'DD/MM/YYYY'
};