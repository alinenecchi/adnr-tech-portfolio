"use client";

import React from "react";
import { LabelProps } from "./Label.types";
import { cn } from "@/lib/utils";

export const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      style={{ color: `var(--color-text-primary)` }}
      {...props}
    />
  );
};
