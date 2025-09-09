import ptBR from "./languages/pt-BR.json";
import enUS from "./languages/en-US.json";
import esAR from "./languages/es-AR.json";

export type SupportedLanguage = "pt-BR" | "en-US" | "es-AR";

export const defaultLanguage: SupportedLanguage = "pt-BR";

const translations = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-AR": esAR,
};

export const getTranslation = (
  language: SupportedLanguage,
  key: string,
  params?: Record<string, any>
): string => {
  const translation = translations[language] || translations[defaultLanguage];

  // Navigate through nested keys (e.g., "navigation.home")
  const keys = key.split(".");
  let value: any = translation;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // Fallback to default language if key not found
      value = translations[defaultLanguage];
      for (const fallbackKey of keys) {
        if (value && typeof value === "object" && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key if not found anywhere
        }
      }
      break;
    }
  }

  if (typeof value !== "string") {
    return key;
  }

  // Replace parameters if provided
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey] || match;
    });
  }

  return value;
};
