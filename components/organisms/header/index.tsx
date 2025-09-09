"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderProps } from "./Header.types";
import { AdnrTechLogo } from "@/components/icons";
import { ThemeSelector, LanguageSelector } from "@/components";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSelector, setActiveSelector] = useState<
    "theme" | "language" | null
  >(null);
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSelector(null); // Reset selector when toggling menu
  };

  const handleSelectorOpen = (selector: "theme" | "language") => {
    setActiveSelector(selector);
  };

  const handleSelectorClose = () => {
    setActiveSelector(null);
  };

  const headerClasses = `sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
    isScrolled ? "shadow-md" : ""
  }`;

  return (
    <header
      id="header"
      className={cn(headerClasses, className)}
      style={{
        backgroundColor: `var(--color-nav-background, var(--color-background-primary))`,
        borderColor: `var(--color-border)`,
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <AdnrTechLogo
              width={280}
              height={80}
              variant="default"
              showText={true}
              primaryColor={`var(--color-accent-primary)`}
              textColor={
                theme === "clean-minimal"
                  ? "#1F2937"
                  : theme === "classic-modern"
                  ? "#E6EDF3"
                  : theme === "tech-futuristic"
                  ? "#FFFFFF"
                  : "#E5E7EB"
              }
              className="flex-shrink-0 sm:w-[320px] sm:h-[90px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="#about"
              className="nav-link text-base xl:text-lg"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("navigation.about")}
            </Link>
            <Link
              href="#skills"
              className="nav-link text-base xl:text-lg"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("navigation.skills")}
            </Link>
            <Link
              href="#projects"
              className="nav-link text-base xl:text-lg"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("navigation.projects")}
            </Link>
            <Link
              href="#contact"
              className="nav-link text-base xl:text-lg"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("navigation.contact")}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <ThemeSelector
              onOpen={() => {}}
              onClose={() => {}}
              isActive={false}
            />
            <LanguageSelector
              onOpen={() => {}}
              onClose={() => {}}
              isActive={false}
            />
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Menu"
              style={{
                color: `var(--color-text-secondary)`,
                backgroundColor: "var(--color-background-secondary)",
              }}
            >
              <div className="space-y-2">
                <span
                  className="block w-8 h-0.5 transition-transform duration-300 ease-in-out"
                  style={{
                    backgroundColor: `var(--color-text-secondary)`,
                    transform: isMobileMenuOpen
                      ? "translateY(10px) rotate(45deg)"
                      : "",
                  }}
                ></span>
                <span
                  className="block w-8 h-0.5 transition-opacity duration-300 ease-in-out"
                  style={{
                    backgroundColor: `var(--color-text-secondary)`,
                    opacity: isMobileMenuOpen ? "0" : "1",
                  }}
                ></span>
                <span
                  className="block w-8 h-0.5 transition-transform duration-300 ease-in-out"
                  style={{
                    backgroundColor: `var(--color-text-secondary)`,
                    transform: isMobileMenuOpen
                      ? "translateY(-10px) rotate(-45deg)"
                      : "",
                  }}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{ backgroundColor: "var(--color-background-secondary)" }}
      >
        <div
          className={`px-2 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-2 sm:space-y-3 ${
            activeSelector ? "pb-12 sm:pb-16" : ""
          }`}
        >
          {/* Navigation Links - Only show when no selector is active */}
          {!activeSelector && (
            <>
              <Link
                href="#about"
                onClick={toggleMenu}
                className="block px-2 sm:px-3 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-bg-tertiary transition-colors"
                style={{ color: `var(--color-text-secondary)` }}
              >
                {t("navigation.about")}
              </Link>
              <Link
                href="#skills"
                onClick={toggleMenu}
                className="block px-2 sm:px-3 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-bg-tertiary transition-colors"
                style={{ color: `var(--color-text-secondary)` }}
              >
                {t("navigation.skills")}
              </Link>
              <Link
                href="#projects"
                onClick={toggleMenu}
                className="block px-2 sm:px-3 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-bg-tertiary transition-colors"
                style={{ color: `var(--color-text-secondary)` }}
              >
                {t("navigation.projects")}
              </Link>
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="block px-2 sm:px-3 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-bg-tertiary transition-colors"
                style={{ color: `var(--color-text-secondary)` }}
              >
                {t("navigation.contact")}
              </Link>
            </>
          )}

          {/* Selectors Section */}
          <div
            className="px-2 sm:px-3 py-3 sm:py-4 border-t"
            style={{ borderColor: `var(--color-border)` }}
          >
            {/* Back button when selector is active */}
            {activeSelector && (
              <button
                onClick={handleSelectorClose}
                className="flex items-center mb-4 text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: `var(--color-text-secondary)` }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {activeSelector === "theme"
                  ? t("themes.chooseTheme")
                  : "Escolher Idioma"}
              </button>
            )}

            <div className="space-y-3 sm:space-y-4">
              {/* Theme Selector - Only show when theme is active or no selector is active */}
              {(activeSelector === "theme" || !activeSelector) && (
                <div className="relative z-50">
                  <ThemeSelector
                    onOpen={() => handleSelectorOpen("theme")}
                    onClose={handleSelectorClose}
                    isActive={activeSelector === "theme"}
                  />
                </div>
              )}

              {/* Language Selector - Only show when language is active or no selector is active */}
              {(activeSelector === "language" || !activeSelector) && (
                <div className="relative z-50">
                  <LanguageSelector
                    onOpen={() => handleSelectorOpen("language")}
                    onClose={handleSelectorClose}
                    isActive={activeSelector === "language"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
