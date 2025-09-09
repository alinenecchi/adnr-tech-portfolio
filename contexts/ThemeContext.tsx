"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Theme, ThemeContextType } from "@/utils/themes/theme";
import { getThemeConfig, getThemeCSSVariables } from "@/utils/themes/themes";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("classic-modern");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (
      savedTheme &&
      [
        "classic-modern",
        "clean-minimal",
        "tech-futuristic",
        "elegant-corporate",
      ].includes(savedTheme)
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and apply CSS variables
    localStorage.setItem("portfolio-theme", theme);

    const cssVariables = getThemeCSSVariables(theme);
    const root = document.documentElement;
    const body = document.body;

    // Apply CSS variables to root
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Remove all theme classes from body
    body.classList.remove(
      "theme-classic-modern",
      "theme-clean-minimal",
      "theme-tech-futuristic",
      "theme-elegant-corporate"
    );

    // Add current theme class to body
    body.classList.add(`theme-${theme}`);
  }, [theme]);

  const themeConfig = getThemeConfig(theme);

  const value: ThemeContextType = {
    theme,
    setTheme,
    themeConfig,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
