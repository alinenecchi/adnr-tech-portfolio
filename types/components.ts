export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "caption" | "small" | "lead";
  className?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  className?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}


export interface HeaderProps {
  className?: string;
}

export interface HeroSectionProps {
  className?: string;
}

export interface AboutSectionProps {
  className?: string;
}

export interface ProjectsSectionProps {
  className?: string;
}

export interface SkillsSectionProps {
  className?: string;
}

export interface ContactSectionProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

