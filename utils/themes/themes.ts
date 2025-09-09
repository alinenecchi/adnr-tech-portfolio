import { Theme, ThemeConfig } from "./theme";

export const themes: Record<Theme, ThemeConfig> = {
  "classic-modern": {
    name: "themes.classicModern.name",
    description: "themes.classicModern.description",
    colors: {
      background: {
        primary: "#0B0D17",
        secondary: "#1A1C2B",
        tertiary: "#232634",
      },
      text: {
        primary: "#E6EDF3",
        secondary: "#A8BFC9",
        accent: "#00FFF0",
      },
      accent: {
        primary: "#00FFF0",
        secondary: "#A855F7",
        tertiary: "#14F9A1",
      },
      border: "#2A2F3E",
      shadow: "rgba(0, 255, 240, 0.15)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #0B0D17 0%, #1A1C2B 100%)",
      secondary: "linear-gradient(135deg, #00FFF0 0%, #A855F7 100%)",
    },
  },
  "clean-minimal": {
    name: "themes.cleanMinimal.name",
    description: "themes.cleanMinimal.description",
    colors: {
      background: {
        primary: "#FFFFFF",
        secondary: "#F9FAFB",
        tertiary: "#F3F4F6",
      },
      text: {
        primary: "#111827",
        secondary: "#4B5563",
        accent: "#1D4ED8",
      },
      accent: {
        primary: "#2563EB",
        secondary: "#10B981",
        tertiary: "#F59E0B",
      },
      border: "#E5E7EB",
      shadow: "rgba(37, 99, 235, 0.08)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
      secondary: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
    },
  },
  "tech-futuristic": {
    name: "themes.techFuturistic.name",
    description: "themes.techFuturistic.description",
    colors: {
      background: {
        primary: "#0E1A2B",
        secondary: "#1E2B44",
        tertiary: "#2E3B5A",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#CBD5E1",
        accent: "#00E0FF",
      },
      accent: {
        primary: "#00E0FF",
        secondary: "#FF3CA6",
        tertiary: "#7C3AED",
      },
      border: "#475569",
      shadow: "rgba(0, 224, 255, 0.2)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #0E1A2B 0%, #5B3CE0 100%)",
      secondary: "linear-gradient(135deg, #00E0FF 0%, #FF3CA6 100%)",
    },
  },
  "elegant-corporate": {
    name: "themes.elegantCorporate.name",
    description: "themes.elegantCorporate.description",
    colors: {
      background: {
        primary: "#111827",
        secondary: "#1E293B",
        tertiary: "#374151",
      },
      text: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        accent: "#1D4ED8",
      },
      accent: {
        primary: "#1D4ED8",
        secondary: "#FBBF24",
        tertiary: "#6B7280",
      },
      border: "#4B5563",
      shadow: "rgba(29, 78, 216, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #111827 0%, #1E293B 100%)",
      secondary: "linear-gradient(135deg, #1D4ED8 0%, #FBBF24 100%)",
    },
  },
};

export const getThemeConfig = (theme: Theme): ThemeConfig => {
  return themes[theme];
};

export const getThemeCSSVariables = (theme: Theme): Record<string, string> => {
  const config = getThemeConfig(theme);
  return {
    "--color-background-primary": config.colors.background.primary,
    "--color-background-secondary": config.colors.background.secondary,
    "--color-background-tertiary":
      config.colors.background.tertiary || config.colors.background.secondary,
    "--color-text-primary": config.colors.text.primary,
    "--color-text-secondary": config.colors.text.secondary,
    "--color-text-accent": config.colors.text.accent,
    "--color-accent-primary": config.colors.accent.primary,
    "--color-accent-secondary": config.colors.accent.secondary,
    "--color-accent-tertiary": config.colors.accent.tertiary,
    "--color-border": config.colors.border,
    "--color-shadow": config.colors.shadow,
    "--gradient-primary": config.gradients?.primary || "none",
    "--gradient-secondary": config.gradients?.secondary || "none",
    "--background": config.colors.background.primary,
    "--foreground": config.colors.text.primary,
    "--primary": config.colors.accent.primary,
    "--primary-foreground": config.colors.text.primary,
    "--secondary": config.colors.background.secondary,
    "--secondary-foreground": config.colors.text.primary,
    "--muted":
      config.colors.background.tertiary || config.colors.background.secondary,
    "--muted-foreground": config.colors.text.secondary,
    "--accent": config.colors.accent.secondary,
    "--accent-foreground": config.colors.text.primary,
    "--destructive": "#ef4444",
    "--destructive-foreground": "#ffffff",
    "--border": config.colors.border,
    "--input": config.colors.border,
    "--ring": config.colors.accent.primary,
    "--radius": "0.5rem",
    "--color-button-primary": config.colors.accent.primary,
    "--color-button-primary-hover": config.colors.accent.secondary,
    "--color-button-secondary": config.colors.background.secondary,
    "--color-button-secondary-hover":
      config.colors.background.tertiary || config.colors.background.secondary,
    "--color-link": config.colors.accent.primary,
    "--color-link-hover": config.colors.accent.secondary,
    "--color-card-background": config.colors.background.secondary,
    "--color-card-border": config.colors.border,
    "--color-input-background": config.colors.background.primary,
    "--color-input-border": config.colors.border,
    "--color-input-focus": config.colors.accent.primary,
    "--color-nav-background": config.colors.background.primary,
    "--color-nav-border": config.colors.border,
    "--color-footer-background":
      config.colors.background.tertiary || config.colors.background.secondary,
    "--color-footer-text": config.colors.text.secondary,
    "--color-text-on-primary":
      theme === "clean-minimal" ? "#FFFFFF" : config.colors.background.primary,
  };
};
