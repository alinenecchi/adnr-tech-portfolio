import React from "react";
import { TitleProps } from "./Title.types";
import { getTitleStyles } from "./Title.styles";
import { cn } from "@/lib/utils";

export const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  variant,
  className,
}) => {
  const Component = variant
    ? variant
    : (`h${level}` as keyof React.JSX.IntrinsicElements);
  const titleStyles = getTitleStyles(level);

  return (
    <Component className={cn(titleStyles, className)}>{children}</Component>
  );
};

