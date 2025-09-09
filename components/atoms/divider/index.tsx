import React from "react";
import { DividerProps } from "./Divider.types";
import { getDividerStyles } from "./Divider.styles";
import { cn } from "@/lib/utils";

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  className,
}) => {
  const dividerStyles = getDividerStyles(orientation);

  return <div className={cn(dividerStyles, className)} />;
};

