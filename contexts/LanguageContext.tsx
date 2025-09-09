"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageContextType } from '@/utils/themes/theme';
import { getTranslation, defaultLanguage, SupportedLanguage } from '@/utils/i18n';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (key: string, params?: Record<string, any>): string => {
    // Map our language codes to the i18n language codes
    const languageMap: Record<Language, SupportedLanguage> = {
      'pt': 'pt-BR',
      'en': 'en-US',
      'es': 'es-AR'
    };
    
    const i18nLanguage = languageMap[language] || defaultLanguage;
    return getTranslation(i18nLanguage as SupportedLanguage, key, params);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

