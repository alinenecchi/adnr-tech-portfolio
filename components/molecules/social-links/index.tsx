import React from "react";
import Link from "next/link";
import { SocialLinksProps } from "./SocialLinks.types";
import { getSocialLinksStyles } from "./SocialLinks.styles";
import { cn } from "@/lib/utils";

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className,
}) => {
  const styles = getSocialLinksStyles();

  return (
    <div className={cn(styles.container, className)}>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={link.name}
          >
            <IconComponent className={styles.icon} />
          </Link>
        );
      })}
    </div>
  );
};

