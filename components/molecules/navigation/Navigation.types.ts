export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

