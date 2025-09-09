"use client";

import React from "react";
import { ProjectsSectionProps } from "./ProjectsSection.types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectCard } from "@/components/molecules/project-card";
import { projects, getTranslatedProject } from "@/lib/data/projects";

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  className,
}) => {
  const { t } = useLanguage();
  const [projectsRef] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={projectsRef} className={cn("fade-in", className)}>
      <div className="text-center mb-16">
        <p
          className="text-lg max-w-3xl mx-auto"
          style={{ color: `var(--color-text-secondary)` }}
        >
          {t("projects.description")}
        </p>
      </div>

      {/* Grid layout customizado */}
      <div className="space-y-8">
        {/* Primeira linha: Toyota (grande) + Descarte Certo (médio com altura total) */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Toyota Brasil - Card grande (2 colunas) */}
          <div className="md:col-span-2">
            {(() => {
              const translatedProject = getTranslatedProject(projects[0], t);
              return (
                <ProjectCard
                  title={translatedProject.title}
                  description={translatedProject.description}
                  image={translatedProject.image}
                  technologies={translatedProject.technologies}
                  demoUrl={translatedProject.liveUrl}
                  featured={true}
                />
              );
            })()}
          </div>

          {/* Descarte Certo - Card médio ocupando altura total */}
          <div className="md:col-span-1 flex">
            <div className="flex-1">
              <ProjectCard
              title={
                getTranslatedProject(projects.find((p) => p.id === "8") || projects[7], t).title
              }
              description={
                getTranslatedProject(projects.find((p) => p.id === "8") || projects[7], t).description
              }
                image={
                  projects.find((p) => p.id === "8")?.image ||
                  "https://images.unsplash.com/photo-1645520718652-9342896b0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHJlY3ljbGluZyUyMGFwcHxlbnwxfHx8fDE3NTczNjYxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                }
                technologies={
                  projects.find((p) => p.id === "8")?.technologies || [
                    "React",
                    "Node.js",
                  ]
                }
                githubUrl={projects.find((p) => p.id === "8")?.githubUrl}
                featured={false}
              />
            </div>
          </div>
        </div>

        {/* Segunda linha: Demais projetos em cards pequenos (sem GitHub) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1, 7).map((project) => {
            const translatedProject = getTranslatedProject(project, t);
            return (
              <ProjectCard
                key={project.id}
                title={translatedProject.title}
                description={translatedProject.description}
                image={translatedProject.image}
                technologies={translatedProject.technologies}
                demoUrl={translatedProject.liveUrl}
                featured={false}
              />
            );
          })}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="mb-4" style={{ color: `var(--color-text-secondary)` }}>
          {t("projects.moreProjects")}
        </p>
        <a
          href="https://github.com/alinenecchi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center transition-colors"
          style={{ color: `var(--color-accent-primary)` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {t("projects.visitGitHub")} →
        </a>
      </div>
    </div>
  );
};
