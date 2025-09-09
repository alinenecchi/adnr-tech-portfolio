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
      <div className="container mx-auto px-4 sm:px-6 py-4">
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
              className="flex-shrink-0"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <ThemeSelector />
            <LanguageSelector />
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
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "var(--color-background-secondary)" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#about"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base font-medium"
            style={{ color: `var(--color-text-secondary)` }}
          >
            {t("navigation.about")}
          </Link>
          <Link
            href="#skills"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base font-medium"
            style={{ color: `var(--color-text-secondary)` }}
          >
            {t("navigation.skills")}
          </Link>
          <Link
            href="#projects"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base font-medium"
            style={{ color: `var(--color-text-secondary)` }}
          >
            {t("navigation.projects")}
          </Link>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base font-medium"
            style={{ color: `var(--color-text-secondary)` }}
          >
            {t("navigation.contact")}
          </Link>
          <div className="px-3 py-2 border-t border-border">
            <div className="flex items-center space-x-4">
              <ThemeSelector />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
