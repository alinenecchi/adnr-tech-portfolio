"use client";

import React, { useState, useEffect } from "react";
import {
  PersonalProjectsSectionProps,
  PersonalProject,
} from "./PersonalProjectsSection.types";
import { getPersonalProjectsStyles } from "./PersonalProjectsSection.styles";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export const PersonalProjectsSection: React.FC<
  PersonalProjectsSectionProps
> = ({ className }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [personalProjectsRef] = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const styles = getPersonalProjectsStyles();

  const personalProjects: PersonalProject[] = [
    {
      id: "ai-interview-assistant",
      title: "AI Interview Assistant",
      description: t("personalProjects.aiInterview.description"),
      longDescription: t("personalProjects.aiInterview.longDescription"),
      image: "/images/personal-projects/interview.png",
      technologies: [
        "React",
        "TypeScript",
        "Google Gemini AI",
        "Web Speech API",
        "TailwindCSS",
      ],
      liveUrl: "https://ai-interview-assistant-rosy.vercel.app/",
      githubUrl: "https://github.com/alinenecchi/ai-interview-assistant",
      category: "personal",
      featured: true,
      year: "2024",
    },
    {
      id: "schools-calendar",
      title: "Schools Calendar",
      description: t("personalProjects.schoolsCalendar.description"),
      longDescription: t("personalProjects.schoolsCalendar.longDescription"),
      image: "/images/personal-projects/calendar.png",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Local Storage",
        "Responsive Design",
      ],
      liveUrl: "https://schools-calendar.vercel.app/",
      githubUrl: "https://github.com/alinenecchi/schoolsCalendar",
      category: "college",
      featured: true,
      year: "2023",
    },
  ];

  const maxIndex = Math.max(0, personalProjects.length - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div ref={personalProjectsRef} className={cn(styles.container, className)}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h2
            className={styles.title}
            style={{ color: `var(--color-text-primary)` }}
          >
            {t("personalProjects.title")}{" "}
            <span
              className="text-current"
              style={{ color: `var(--color-accent-primary)` }}
            >
              .
            </span>
          </h2>
          <p
            className={styles.subtitle}
            style={{ color: `var(--color-text-secondary)` }}
          >
            {t("personalProjects.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div
          className={styles.carousel}
          style={{ backgroundColor: `var(--color-background-secondary)` }}
        >
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {personalProjects.map((project) => {
              return (
                <div key={project.id} className={styles.carouselItem}>
                  <div
                    className={styles.projectCard}
                    style={{
                      backgroundColor: `var(--color-background-primary)`,
                    }}
                  >
                    {/* Project Image */}
                    <div className={styles.projectImage}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className={styles.projectImageOverlay} />
                      <div className={styles.projectImageContent}>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-xs opacity-90">{project.year}</p>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={styles.projectContent}>
                      <h3
                        className={cn(styles.projectTitle, "text-center")}
                        style={{ color: `var(--color-text-primary)` }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={cn(styles.projectDescription, "text-center")}
                        style={{ color: `var(--color-text-secondary)` }}
                      >
                        {project.description}
                      </p>

                      {/* Actions */}
                      <div
                        className={cn(styles.projectActions, "justify-center")}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            styles.actionButton,
                            styles.primaryButton
                          )}
                          style={{
                            backgroundColor: `var(--color-accent-primary)`,
                            borderColor: `var(--color-accent-primary)`,
                            color:
                              theme !== "elegant-corporate"
                                ? "var(--color-text-on-primary)"
                                : "var(--color-text-primary)", // Dark text for light accent colors
                            // White text for dark accent colors
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("personalProjects.actions.viewLive")}
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              styles.actionButton,
                              styles.secondaryButton
                            )}
                            style={{
                              backgroundColor: "transparent",
                              borderColor: `var(--color-accent-primary)`,
                            }}
                          >
                            <Github className="w-4 h-4" />
                            {t("personalProjects.actions.viewCode")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          {personalProjects.length > 1 && (
            <div className={styles.navigation}>
              <button
                onClick={prevSlide}
                className={styles.navButton}
                disabled={currentIndex === 0}
                style={{
                  backgroundColor: `var(--color-background-primary)`,
                  color: `var(--color-accent-primary)`,
                  borderColor: `var(--color-accent-primary)`,
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className={styles.navDots}>
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      styles.dot,
                      currentIndex === index && styles.activeDot
                    )}
                    style={{
                      backgroundColor:
                        currentIndex === index
                          ? `var(--color-accent-primary)`
                          : `var(--color-border)`,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className={styles.navButton}
                disabled={currentIndex === maxIndex}
                style={{
                  backgroundColor: `var(--color-background-primary)`,
                  color: `var(--color-accent-primary)`,
                  borderColor: `var(--color-accent-primary)`,
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
