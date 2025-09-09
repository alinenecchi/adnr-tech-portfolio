import React from "react";
import { ButtonProps } from "./Button.types";
import { getButtonStyles } from "./Button.styles";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  asChild = false,
  className,
  ...props
}) => {
  const { theme } = useTheme();
  const buttonStyles = getButtonStyles({
    variant,
    size,
    disabled: props.disabled,
  });

  // Get theme-specific styles
  const getThemeStyles = () => {
    const baseStyles = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: "inherit",
    };

    switch (variant) {
      case "primary":
        return {
          backgroundColor: `var(--color-accent-primary)`,
          borderColor: `var(--color-accent-primary)`,
          color:
            theme === "classic-modern" || theme === "tech-futuristic"
              ? "var(--color-background-primary)" // Dark text for light accent colors
              : theme === "elegant-corporate"
              ? "#FFFFFF" // White text for blue background
              : theme === "clean-minimal"
              ? "#FFFFFF" // White text for dark background in clean minimal
              : "var(--color-text-primary)", // Default text color
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderColor: `var(--color-accent-primary)`,
          color:
            theme === "elegant-corporate"
              ? "var(--color-text-primary)" // Light text for better contrast
              : `var(--color-accent-primary)`, // Same color as border for consistency
        };
      case "secondary":
        return {
          backgroundColor: `var(--color-background-secondary)`,
          borderColor: `var(--color-border)`,
          color: `var(--color-text-primary)`,
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: `var(--color-text-primary)`,
        };
      default:
        return baseStyles;
    }
  };

  const themeStyles = getThemeStyles();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<Record<string, unknown>>,
      {
        className: cn(
          buttonStyles,
          className,
          (children as React.ReactElement<{ className?: string }>).props
            ?.className
        ),
        style: { ...themeStyles, ...props.style },
        ...props,
      }
    );
  }

  return (
    <button
      className={cn(buttonStyles, className)}
      style={{ ...themeStyles, ...props.style }}
      {...props}
    >
      {children}
    </button>
  );
};
