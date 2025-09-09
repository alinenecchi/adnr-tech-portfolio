"use client";

import React, { useState, useEffect } from "react";
import { PersonalProjectsSectionProps, PersonalProject } from "./PersonalProjectsSection.types";
import { getPersonalProjectsStyles } from "./PersonalProjectsSection.styles";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExternalLink, Github, Calendar, Code, BookOpen, Heart } from "lucide-react";

export const PersonalProjectsSection: React.FC<PersonalProjectsSectionProps> = ({
  className,
}) => {
  const { t } = useLanguage();
  const [personalProjectsRef] = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'study' | 'college' | 'personal'>('all');
  const styles = getPersonalProjectsStyles();

  const personalProjects: PersonalProject[] = [
    {
      id: "ai-interview-assistant",
      title: "AI Interview Assistant",
      description: t("personalProjects.aiInterview.description"),
      longDescription: t("personalProjects.aiInterview.longDescription"),
      image: "/images/projets/ai-interview-assistant.png",
      technologies: ["React", "TypeScript", "Google Gemini AI", "Web Speech API", "TailwindCSS"],
      liveUrl: "https://ai-interview-assistant-rosy.vercel.app/",
      githubUrl: "https://github.com/alinenecchi/ai-interview-assistant",
      category: "personal",
      featured: true,
      year: "2024"
    },
    {
      id: "schools-calendar",
      title: "Schools Calendar",
      description: t("personalProjects.schoolsCalendar.description"),
      longDescription: t("personalProjects.schoolsCalendar.longDescription"),
      image: "/images/projets/schools-calendar.png",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
      liveUrl: "https://schools-calendar.vercel.app/",
      category: "college",
      featured: true,
      year: "2023"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? personalProjects 
    : personalProjects.filter(project => project.category === activeFilter);

  const projectsPerView = 3;
  const maxIndex = Math.max(0, filteredProjects.length - projectsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'study': return BookOpen;
      case 'college': return Code;
      case 'personal': return Heart;
      default: return Calendar;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'study': return t("personalProjects.categories.study");
      case 'college': return t("personalProjects.categories.college");
      case 'personal': return t("personalProjects.categories.personal");
      default: return category;
    }
  };

  return (
    <div ref={personalProjectsRef} className={cn(styles.container, className)}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("personalProjects.title")}
          </h2>
          <p className={styles.subtitle}>
            {t("personalProjects.subtitle")}
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          <button
            onClick={() => setActiveFilter('all')}
            className={cn(styles.filterButton, activeFilter === 'all' && styles.activeFilter)}
          >
            {t("personalProjects.filters.all")}
          </button>
          <button
            onClick={() => setActiveFilter('personal')}
            className={cn(styles.filterButton, activeFilter === 'personal' && styles.activeFilter)}
          >
            {t("personalProjects.filters.personal")}
          </button>
          <button
            onClick={() => setActiveFilter('college')}
            className={cn(styles.filterButton, activeFilter === 'college' && styles.activeFilter)}
          >
            {t("personalProjects.filters.college")}
          </button>
          <button
            onClick={() => setActiveFilter('study')}
            className={cn(styles.filterButton, activeFilter === 'study' && styles.activeFilter)}
          >
            {t("personalProjects.filters.study")}
          </button>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}
          >
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div key={project.id} className={styles.carouselItem}>
                  <div className={styles.projectCard}>
                    {/* Project Image */}
                    <div className={styles.projectImage}>
                      <div className={styles.projectImageOverlay} />
                      <div className={styles.projectImageContent}>
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon className="w-4 h-4" />
                          <span className="text-xs font-medium">
                            {getCategoryLabel(project.category)}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-xs opacity-90">{project.year}</p>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>
                        {project.title}
                      </h3>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className={styles.projectTechnologies}>
                        {project.technologies.map((tech) => (
                          <span key={tech} className={styles.technologyTag}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className={styles.projectActions}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(styles.actionButton, styles.primaryButton)}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("personalProjects.actions.viewLive")}
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(styles.actionButton, styles.secondaryButton)}
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
          {filteredProjects.length > projectsPerView && (
            <div className={styles.navigation}>
              <button
                onClick={prevSlide}
                className={styles.navButton}
                disabled={currentIndex === 0}
              >
                ←
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
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className={styles.navButton}
                disabled={currentIndex === maxIndex}
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{personalProjects.length}</div>
            <div className={styles.statLabel}>{t("personalProjects.stats.totalProjects")}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              {personalProjects.filter(p => p.category === 'personal').length}
            </div>
            <div className={styles.statLabel}>{t("personalProjects.stats.personalProjects")}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              {personalProjects.filter(p => p.category === 'college').length}
            </div>
            <div className={styles.statLabel}>{t("personalProjects.stats.collegeProjects")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
