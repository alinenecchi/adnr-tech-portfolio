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
  onClose,
  onOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const styles = getThemeSelectorStyles();

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
          if (isMobile) {
            onOpen?.(); // Set active selector to theme
          }
          setIsOpen(!isOpen);
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

      {/* Desktop Dropdown - Standard behavior */}
      {isOpen && !isMobile && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <h3 className={styles.dropdownTitle}>{t("themes.chooseTheme")}</h3>
          </div>
          <div className={styles.dropdownContent}>
            {Object.entries(themes).map(([themeKey, themeConfig]) => (
              <div
                key={themeKey}
                onClick={() => {
                  setTheme(themeKey as Theme);
                  setIsOpen(false);
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
                  <div className={styles.themeName}>{t(themeConfig.name)}</div>
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
                {t("themes.chooseTheme")}
              </h3>
            </div>
            <div className="flex-1 p-4 w-full">
              <div className="space-y-3">
                {Object.entries(themes).map(([themeKey, themeConfig]) => (
                  <div
                    key={themeKey}
                    onClick={() => {
                      setTheme(themeKey as Theme);
                      setIsOpen(false);
                      onClose?.();
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors"
                    style={{
                      backgroundColor:
                        theme === themeKey
                          ? `var(--color-accent-primary)`
                          : `var(--color-background-secondary)`,
                      border:
                        theme === themeKey
                          ? `1px solid var(--color-accent-primary)`
                          : `1px solid var(--color-border)`,
                      color:
                        theme === themeKey
                          ? `var(--color-text-primary)`
                          : `var(--color-text-primary)`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg border flex-shrink-0"
                      style={{
                        ...getThemePreviewStyle(themeKey as Theme),
                        borderColor: `var(--color-border)`,
                      }}
                    />
                    <div className="flex-1">
                      <div
                        className="text-base font-medium"
                        style={{ color: `var(--color-text-primary)` }}
                      >
                        {t(themeConfig.name)}
                      </div>
                    </div>
                    {theme === themeKey && (
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
