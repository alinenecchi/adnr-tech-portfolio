"use client";

import React, { useState, useRef, useEffect } from 'react';
import { LanguageSelectorProps } from './LanguageSelector.types';
import { getLanguageSelectorStyles } from './LanguageSelector.styles';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/utils/themes/theme';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇦🇷' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const styles = getLanguageSelectorStyles();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className={cn(styles.container, className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
        aria-label="Selecionar idioma"
      >
        <span className={styles.flag}>{currentLanguage?.flag}</span>
        <span className={styles.language}>{currentLanguage?.name}</span>
        <svg
          className={cn(styles.icon, isOpen && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <h3 className={styles.dropdownTitle}>Escolher Idioma</h3>
          </div>
          <div className={styles.dropdownContent}>
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  styles.languageOption,
                  language === lang.code && styles.selected
                )}
              >
                <span className={styles.flag}>{lang.flag}</span>
                <span className={styles.language}>{lang.name}</span>
                {language === lang.code && (
                  <svg className={styles.selectedIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

