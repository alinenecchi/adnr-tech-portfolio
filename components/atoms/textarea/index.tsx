"use client";

import React from "react";
import { TextareaProps } from "./Textarea.types";
import { cn } from "@/lib/utils";

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        backgroundColor: `var(--color-background-primary)`,
        borderColor: `var(--color-border)`,
        color: `var(--color-text-primary)`,
      }}
      {...props}
    />
  );
};
