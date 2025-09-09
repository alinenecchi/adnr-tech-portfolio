export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

