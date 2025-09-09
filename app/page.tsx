"use client";

import React from "react";
import {
  Header,
  HeroSection,
  AboutSection,
  ProjectsSection,
  PersonalProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/components";
import { GridSection } from "@/components/molecules/grid-section";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDarkMode = [
    "classic-modern",
    "tech-futuristic",
    "elegant-corporate",
  ].includes(theme);

  return (
    <div
      className="font-sans antialiased scroll-smooth transition-colors duration-300 min-h-screen"
      style={{
        backgroundColor: `var(--color-background-primary)`,
        color: `var(--color-text-primary)`,
      }}
    >
      <Header />
      <main>
        <section id="home">
          <HeroSection isDarkMode={isDarkMode} />
        </section>
        <GridSection title={t("pages.home.aboutTitle")} id="about">
          <AboutSection />
        </GridSection>
        <GridSection title={t("pages.home.skillsTitle")} id="skills">
          <SkillsSection />
        </GridSection>
        <GridSection title={t("pages.home.projectsTitle")} id="projects">
          <ProjectsSection />
        </GridSection>
        <PersonalProjectsSection />
        <GridSection title={t("pages.home.contactTitle")} id="contact">
          <ContactSection />
        </GridSection>
      </main>
      <Footer />
    </div>
  );
}
