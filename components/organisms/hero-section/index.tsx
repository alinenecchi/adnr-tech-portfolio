"use client";

import React from "react";
import Link from "next/link";
import { HeroSectionProps } from "./HeroSection.types";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TechBadge } from "@/components/atoms/tech-badge";
import { Button } from "@/components/atoms/button";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export const HeroSection: React.FC<HeroSectionProps> = ({
  className,
  isDarkMode,
}) => {
  const { t, language } = useLanguage();
  const [heroRef, inView] = useIntersectionObserver({ threshold: 0.1 });

  const handleDownloadCV = () => {
    // Mapear idiomas para arquivos de CV
    const cvFiles = {
      pt: "CV- ALINE - 2025.pdf",
      en: "CV- US-2025.pdf",
      es: "CV-ALINE-ES-2025.pdf",
    };

    const fileName = cvFiles[language as keyof typeof cvFiles] || cvFiles["pt"];
    const filePath = `/docs/${fileName}`;

    // Criar link temporário para download
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const mainTechs = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "SASS",
    "GraphQL",
    "PostgreSQL",
    "Auth0",
    "Java",
    "Spring Boot",
    "PHP",
    "WordPress",
    "AWS",
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className={cn(
        "py-20 pt-24 flex items-center",
        className,
        "section-animate",
        inView && "in-view"
      )}
      style={{
        background: isDarkMode
          ? `var(--color-background-primary)`
          : `var(--gradient-primary)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: `var(--color-text-primary)` }}
              >
                {t("hero.greeting")}{" "}
                <span style={{ color: `var(--color-accent-primary)` }}>
                  {t("hero.name")}
                </span>
                <br />
                {t("hero.title")}
              </h1>

              <p
                className="text-lg max-w-2xl"
                style={{ color: `var(--color-text-secondary)` }}
              >
                {t("hero.description")}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p
                className="text-sm font-medium"
                style={{ color: `var(--color-text-secondary)` }}
              >
                {t("skills.tools")}
              </p>
              <div className="flex flex-wrap gap-2">
                {mainTechs.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Link href="#projects" className="flex items-center">
                  {t("hero.viewProjects")}
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                <div className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  {t("data.about.resumeButton")}
                </div>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/personal/profile.png"
                  alt="Aline Dias Necchi Ribeiro"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradiente lateral */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15 pointer-events-none"></div>
                {/* Gradiente vertical sutil */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15 pointer-events-none"></div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl"
                style={{ backgroundColor: `var(--color-accent-primary)` }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl"
                style={{ backgroundColor: `var(--color-accent-secondary)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
