"use client";

import React from "react";
import {
  CardProps,
  CardContentProps,
  CardDescriptionProps,
  CardHeaderProps,
  CardTitleProps,
} from "./Card.types";
import { cn } from "@/lib/utils";

export const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    style={{
      backgroundColor: `var(--color-background-secondary)`,
      borderColor: `var(--color-border)`,
      color: `var(--color-text-primary)`,
    }}
    {...props}
  />
);

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  ...props
}) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    style={{ color: `var(--color-text-primary)` }}
    {...props}
  />
);

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  ...props
}) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    style={{ color: `var(--color-text-secondary)` }}
    {...props}
  />
);

export const CardContent: React.FC<CardContentProps> = ({
  className,
  ...props
}) => <div className={cn("p-6 pt-0", className)} {...props} />;
