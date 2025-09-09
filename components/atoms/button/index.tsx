import React from "react";
import { ButtonProps } from "./Button.types";
import { getButtonStyles } from "./Button.styles";
import { cn } from "@/lib/utils";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  asChild = false,
  className,
  ...props
}) => {
  const buttonStyles = getButtonStyles({
    variant,
    size,
    disabled: props.disabled,
  });

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      className: cn(buttonStyles, className, (children as React.ReactElement<{className?: string}>).props?.className),
      ...props,
    });
  }

  return (
    <button className={cn(buttonStyles, className)} {...props}>
      {children}
    </button>
  );
};
