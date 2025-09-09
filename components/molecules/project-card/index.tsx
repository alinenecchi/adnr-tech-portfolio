"use client";

import React from "react";
import { ProjectCardProps } from "./ProjectCard.types";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/atoms/button";
import { TechBadge } from "@/components/atoms/tech-badge";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  featured = false,
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const cardShadow =
    theme === "clean-minimal"
      ? `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`
      : "";

  return (
    <div
      className={cn(
        "group transition-all duration-300 rounded-lg overflow-hidden h-full flex flex-col",
        featured ? "md:col-span-2 lg:col-span-2" : ""
      )}
      style={{
        backgroundColor: `var(--color-background-secondary)`,
        boxShadow: cardShadow,
      }}
    >
      <div
        className={cn(
          "overflow-hidden",
          title.includes("Descarte Certo") ? "aspect-[4/3]" : "aspect-video"
        )}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div
        className={cn(
          "flex-1 flex flex-col",
          title.includes("Descarte Certo") ? "p-6 space-y-3" : "p-6 space-y-4"
        )}
      >
        <div>
          <h3
            className={cn("font-bold mb-2", featured ? "text-2xl" : "text-xl")}
            style={{ color: `var(--color-text-primary)` }}
          >
            {title}
          </h3>
          <p
            className={cn(
              "leading-relaxed",
              featured
                ? "text-base"
                : title.includes("Descarte Certo")
                ? "text-sm"
                : "text-sm"
            )}
            style={{ color: `var(--color-text-secondary)` }}
          >
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Spacer para empurrar ações para baixo */}
        <div className="flex-1"></div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          {demoUrl && (
            <Button asChild className="flex-1">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                {t("projectCard.viewDemo")}
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" asChild className="flex-1">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                {t("projectCard.viewCode")}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
