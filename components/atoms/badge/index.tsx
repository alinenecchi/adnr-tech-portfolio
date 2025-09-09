"use client";

import React from "react";
import { BadgeProps } from "./Badge.types";
import { cn } from "@/lib/utils";

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantClasses = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground border border-border",
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={
        variant === "outline"
          ? {
              backgroundColor: `var(--color-background-tertiary)`,
              color: `var(--color-text-secondary)`,
              borderColor: `var(--color-border)`,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
};
