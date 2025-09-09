"use client";

import React from "react";
import { SkillsSectionProps } from "./SkillsSection.types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SkillCard } from "@/components/molecules/skill-card";
import {
  Code,
  Server,
  Cloud,
  Database,
  Smartphone,
  Palette,
} from "lucide-react";

export const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  const { t } = useLanguage();
  const [skillsRef] = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      title: t("skills.categories.frontend"),
      icon: Code,
      level: "advanced" as const,
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "SASS",
        "Styled Components",
      ],
    },
    {
      title: t("skills.categories.backend"),
      icon: Server,
      level: "intermediate" as const,
      tools: ["Node.js", "Express", "REST APIs", "GraphQL", "Python"],
    },
    {
      title: t("skills.categories.cloud"),
      icon: Cloud,
      level: "intermediate" as const,
      tools: ["AWS", "Docker", "CI/CD", "Vercel", "Netlify"],
    },
    {
      title: t("skills.categories.database"),
      icon: Database,
      level: "intermediate" as const,
      tools: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    },
    {
      title: t("skills.categories.mobile"),
      icon: Smartphone,
      level: "intermediate" as const,
      tools: ["React Native", "Expo", "Mobile UI/UX", "Native APIs"],
    },
    {
      title: t("skills.categories.design"),
      icon: Palette,
      level: "intermediate" as const,
      tools: ["Figma", "Adobe XD", "Design Systems", "Acessibilidade"],
    },
  ];

  return (
    <div ref={skillsRef} className={cn("fade-in", className)}>
      <div className="text-center mb-16">
        <p
          className="text-lg max-w-3xl mx-auto"
          style={{ color: `var(--color-text-secondary)` }}
        >
          {t("skills.description")}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            level={skill.level}
            tools={skill.tools}
          />
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 text-center">
        <h3
          className="text-xl font-semibold mb-8"
          style={{ color: `var(--color-text-primary)` }}
        >
          {t("skills.additionalSkills")}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <h4
              className="font-medium"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("skills.methodologies")}
            </h4>
            <p
              className="text-sm"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("skills.methodologiesText")}
            </p>
          </div>

          <div className="space-y-2">
            <h4
              className="font-medium"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("skills.versioning")}
            </h4>
            <p
              className="text-sm"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("skills.versioningText")}
            </p>
          </div>

          <div className="space-y-2">
            <h4
              className="font-medium"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("skills.softSkills")}
            </h4>
            <p
              className="text-sm"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("skills.softSkillsText")}
            </p>
          </div>

          <div className="space-y-2">
            <h4
              className="font-medium"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("skills.languages")}
            </h4>
            <p
              className="text-sm"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("skills.languagesText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
