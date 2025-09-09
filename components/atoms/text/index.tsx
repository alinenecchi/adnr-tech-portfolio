import React from "react";
import { TextProps } from "./Text.types";
import { getTextStyles } from "./Text.styles";
import { cn } from "@/lib/utils";

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  className,
}) => {
  const textStyles = getTextStyles(variant);

  return <p className={cn(textStyles, className)}>{children}</p>;
};

