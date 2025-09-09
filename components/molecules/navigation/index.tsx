"use client";

import React from "react";
import Link from "next/link";
import { NavigationProps } from "./Navigation.types";
import { getNavigationStyles } from "./Navigation.styles";
import { cn } from "@/lib/utils";

export const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const styles = getNavigationStyles();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Se for um link interno (começa com #), fazer rolagem suave
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <nav className={cn(styles.container, className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            styles.item,
            item.active && styles.activeItem,
            "nav-link"
          )}
          onClick={(e) => handleSmoothScroll(e, item.href)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
