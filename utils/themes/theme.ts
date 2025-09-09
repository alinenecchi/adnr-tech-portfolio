export type Theme = 'classic-modern' | 'clean-minimal' | 'tech-futuristic' | 'elegant-corporate';

export type Language = 'pt' | 'en' | 'es';

export interface ThemeColors {
  background: {
    primary: string;
    secondary: string;
    tertiary?: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: string;
  shadow: string;
}

export interface ThemeConfig {
  name: string;
  description: string;
  colors: ThemeColors;
  gradients?: {
    primary: string;
    secondary: string;
  };
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: ThemeConfig;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}
