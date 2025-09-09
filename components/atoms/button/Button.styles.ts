import { ButtonProps } from "./Button.types";

export const getButtonStyles = (props: Pick<ButtonProps, 'variant' | 'size'> & { disabled?: boolean }) => {
  const { variant = "primary", size = "md" } = props;

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-button-primary text-text-primary hover:bg-button-primary-hover focus:ring-accent-primary border border-button-primary",
    secondary:
      "bg-button-secondary text-text-primary hover:bg-button-secondary-hover focus:ring-accent-primary border border-border",
    outline:
      "border border-border bg-transparent text-text-primary hover:bg-bg-secondary focus:ring-accent-primary",
    ghost:
      "bg-transparent text-text-primary hover:bg-bg-secondary focus:ring-accent-primary",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]}`;
};
