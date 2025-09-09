import ptBR from './languages/pt-BR.json';
import enUS from './languages/en-US.json';
import esAR from './languages/es-AR.json';

export const languages = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-AR': esAR,
};

export const defaultLanguage = 'pt-BR';

export const supportedLanguages = [
  { code: 'pt-BR', name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
  { code: 'es-AR', name: 'Español (AR)', flag: '🇦🇷' },
];

export const getLanguage = (code) => {
  return languages[code] || languages[defaultLanguage];
};

export const getTranslation = (language, key, params = {}) => {
  const translations = getLanguage(language);
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  if (typeof value === 'string') {
    // Replace parameters in the string
    return value.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match;
    });
  }
  
  return value;
};

