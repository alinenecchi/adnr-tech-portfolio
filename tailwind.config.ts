import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors for compatibility
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        // New theme-specific colors
        "bg-primary": "var(--color-background-primary)",
        "bg-secondary": "var(--color-background-secondary)",
        "bg-tertiary": "var(--color-background-tertiary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-accent": "var(--color-text-accent)",
        "accent-primary": "var(--color-accent-primary)",
        "accent-secondary": "var(--color-accent-secondary)",
        "accent-tertiary": "var(--color-accent-tertiary)",
        "button-primary": "var(--color-button-primary)",
        "button-primary-hover": "var(--color-button-primary-hover)",
        "button-secondary": "var(--color-button-secondary)",
        "button-secondary-hover": "var(--color-button-secondary-hover)",
        link: "var(--color-link)",
        "link-hover": "var(--color-link-hover)",
        "card-bg": "var(--color-card-background)",
        "card-border": "var(--color-card-border)",
        "input-bg": "var(--color-input-background)",
        "input-border": "var(--color-input-border)",
        "input-focus": "var(--color-input-focus)",
        "nav-bg": "var(--color-nav-background)",
        "nav-border": "var(--color-nav-border)",
        "footer-bg": "var(--color-footer-background)",
        "footer-text": "var(--color-footer-text)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
