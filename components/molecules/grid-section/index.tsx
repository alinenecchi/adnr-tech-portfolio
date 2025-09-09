"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface GridSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const GridSection: React.FC<GridSectionProps> = ({
  title,
  id,
  children,
  className = "",
}) => {
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.1 });
  const sectionClasses = inView ? "in-view" : "";

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 md:py-28 section-animate ${sectionClasses} ${className}`}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: `var(--color-text-primary)` }}
        >
          {title}{" "}
          <span
            className="text-current"
            style={{ color: `var(--color-accent-primary)` }}
          >
            .
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};
