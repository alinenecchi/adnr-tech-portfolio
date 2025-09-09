"use client";

import React from "react";
import { SkillCardProps } from "./SkillCard.types";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const levelColors = {
  Iniciante: "bg-yellow-100 text-yellow-800",
  Intermediário: "bg-blue-100 text-blue-800",
  Avançado: "bg-green-100 text-green-800",
};

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon: Icon,
  level,
  tools,
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const cardShadow =
    theme === "clean-minimal"
      ? `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`
      : "";

  return (
    <div
      className="transition-shadow duration-300 rounded-lg p-6 hover:shadow-lg"
      style={{
        backgroundColor: `var(--color-background-secondary)`,
        boxShadow: cardShadow,
      }}
    >
      <div className="text-center pb-4">
        <div
          className="mx-auto mb-4 p-3 rounded-full w-fit"
          style={{ backgroundColor: `var(--color-background-tertiary)` }}
        >
          <Icon
            className="h-8 w-8"
            style={{ color: `var(--color-accent-primary)` }}
          />
        </div>
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: `var(--color-text-primary)` }}
        >
          {title}
        </h3>
        <span
          className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
            levelColors[level]
          )}
        >
          {level}
        </span>
      </div>

      <div className="space-y-2">
        <p
          className="text-sm mb-3"
          style={{ color: `var(--color-text-secondary)` }}
        >
          {t("skills.tools")}
        </p>
        <div className="flex flex-wrap gap-1">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center px-2 py-1 rounded text-xs border"
              style={{
                backgroundColor: `var(--color-background-tertiary)`,
                color: `var(--color-text-secondary)`,
                borderColor: `var(--color-border)`,
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
