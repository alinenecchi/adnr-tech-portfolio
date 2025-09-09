"use client";

import React, { useState, useRef, useEffect } from "react";
import { ThemeSelectorProps } from "./ThemeSelector.types";
import { getThemeSelectorStyles } from "./ThemeSelector.styles";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Theme } from "@/utils/themes/theme";
import { themes } from "@/utils/themes/themes";
import { cn } from "@/lib/utils";

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  className,
  onOpen,
  onClose,
  isActive = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const styles = getThemeSelectorStyles();

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

  // Sync isOpen with isActive for mobile
  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isActive]);

  const currentTheme = themes[theme];

  const getThemePreviewStyle = (themeKey: Theme) => {
    const themeConfig = themes[themeKey];
    return {
      background: `linear-gradient(135deg, ${themeConfig.colors.background.primary} 0%, ${themeConfig.colors.background.secondary} 100%)`,
      borderColor: themeConfig.colors.accent.primary,
    };
  };

  return (
    <div className={cn(styles.container, className)} ref={dropdownRef}>
      <button
        onClick={() => {
          if (!isActive) {
            onOpen?.();
          }
        }}
        className={styles.button}
        aria-label="Selecionar tema"
      >
        <div
          className={styles.themePreview}
          style={getThemePreviewStyle(theme)}
        />
        <span className="text-sm font-medium">{t(currentTheme.name)}</span>
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

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[99] lg:hidden"
            onClick={() => {
              setIsOpen(false);
              onClose?.();
            }}
          />

          {/* Desktop Dropdown */}
          <div className={cn(styles.dropdown, "hidden lg:block")}>
            <div className={styles.dropdownHeader}>
              <h3 className={styles.dropdownTitle}>
                {t("themes.chooseTheme")}
              </h3>
            </div>
            <div className={styles.dropdownContent}>
              {Object.entries(themes).map(([themeKey, themeConfig]) => (
                <div
                  key={themeKey}
                  onClick={() => {
                    setTheme(themeKey as Theme);
                    setIsOpen(false);
                    onClose?.();
                  }}
                  className={cn(
                    styles.themeOption,
                    theme === themeKey && styles.selected
                  )}
                >
                  <div
                    className={styles.themePreview}
                    style={getThemePreviewStyle(themeKey as Theme)}
                  />
                  <div className={styles.themeInfo}>
                    <div className={styles.themeName}>
                      {t(themeConfig.name)}
                    </div>
                    <div className={styles.themeDescription}>
                      {t(themeConfig.description)}
                    </div>
                  </div>
                  {theme === themeKey && (
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

          {/* Mobile Dropdown */}
          <div
            className={cn(
              styles.mobileDropdown,
              isOpen && styles.mobileDropdownOpen
            )}
            style={{ display: isOpen ? "block" : "none" }}
          >
            <div className={styles.dropdownHeader}>
              <h3 className={styles.dropdownTitle}>
                {t("themes.chooseTheme")}
              </h3>
            </div>
            <div className={styles.mobileDropdownContent}>
              {Object.entries(themes).map(([themeKey, themeConfig]) => (
                <div
                  key={themeKey}
                  onClick={() => {
                    setTheme(themeKey as Theme);
                    setIsOpen(false);
                    onClose?.();
                  }}
                  className={cn(
                    styles.themeOption,
                    theme === themeKey && styles.selected
                  )}
                >
                  <div
                    className={styles.themePreview}
                    style={getThemePreviewStyle(themeKey as Theme)}
                  />
                  <div className={styles.themeInfo}>
                    <div className={styles.themeName}>
                      {t(themeConfig.name)}
                    </div>
                    <div className={styles.themeDescription}>
                      {t(themeConfig.description)}
                    </div>
                  </div>
                  {theme === themeKey && (
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
        </>
      )}
    </div>
  );
};
