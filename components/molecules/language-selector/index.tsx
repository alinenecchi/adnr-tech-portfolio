"use client";

import React, { useState, useRef, useEffect } from "react";
import { LanguageSelectorProps } from "./LanguageSelector.types";
import { getLanguageSelectorStyles } from "./LanguageSelector.styles";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/utils/themes/theme";
import { cn } from "@/lib/utils";

const languages = [
  { code: "pt" as Language, name: "Português", flag: "🇧🇷" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "es" as Language, name: "Español", flag: "🇦🇷" },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className,
  onClose,
  onOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const styles = getLanguageSelectorStyles();

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only handle click outside on desktop (lg and up)
      if (window.innerWidth >= 1024) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className={cn(styles.container, className)} ref={dropdownRef}>
      <button
        onClick={() => {
          if (isMobile) {
            onOpen?.(); // Set active selector to language
          }
          setIsOpen(!isOpen);
        }}
        className={styles.button}
        aria-label="Selecionar idioma"
      >
        <span className={styles.flag}>{currentLanguage?.flag}</span>
        <span className={styles.language}>{currentLanguage?.name}</span>
        <svg
          className={cn(styles.icon, isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Desktop Dropdown - Standard behavior */}
      {isOpen && !isMobile && (
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
                  <svg
                    className={styles.selectedIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Dropdown - Full screen with options only */}
      {isOpen && isMobile && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
          />
          <div
            className="fixed inset-0 z-[9999] flex flex-col w-full"
            style={{ backgroundColor: `var(--color-background-primary)` }}
          >
            <div
              className="p-4 border-b w-full"
              style={{ borderColor: `var(--color-border)` }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: `var(--color-text-primary)` }}
              >
                Escolher Idioma
              </h3>
            </div>
            <div className="flex-1 p-4 w-full">
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                      onClose?.();
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors"
                    style={{
                      backgroundColor:
                        language === lang.code
                          ? `var(--color-accent-primary)`
                          : `var(--color-background-secondary)`,
                      border:
                        language === lang.code
                          ? `1px solid var(--color-accent-primary)`
                          : `1px solid var(--color-border)`,
                      color:
                        language === lang.code
                          ? `var(--color-text-primary)`
                          : `var(--color-text-primary)`,
                    }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span
                      className="text-base font-medium flex-1"
                      style={{ color: `var(--color-text-primary)` }}
                    >
                      {lang.name}
                    </span>
                    {language === lang.code && (
                      <svg
                        className="w-5 h-5"
                        style={{ color: `var(--color-text-primary)` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
