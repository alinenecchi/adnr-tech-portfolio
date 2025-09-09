"use client";

import React from "react";
import { AboutSectionProps } from "./AboutSection.types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Badge } from "@/components/atoms/badge";
import {
  Calendar,
  MapPin,
  Users,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const { t } = useLanguage();
  const [aboutRef] = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      period: "2023 - Atual",
      company: t("data.about.experience.companies.on2dex01"),
      role: t("data.about.experience.positions.frontendDev"),
      description: t("data.about.experience.descriptions.on2dex01"),
    },
    {
      period: "2022 - 2023",
      company: t("data.about.experience.companies.leef"),
      role: t("data.about.experience.positions.fullstack"),
      description: t("data.about.experience.descriptions.leef"),
    },
    {
      period: "2021 - 2022",
      company: t("data.about.experience.companies.aceleradora"),
      role: t("data.about.experience.positions.junior"),
      description: t("data.about.experience.descriptions.aceleradora"),
    },
    {
      period: "2020 - 2021",
      company: t("data.about.experience.companies.freelancer"),
      role: t("data.about.experience.positions.web"),
      description: t("data.about.experience.descriptions.freelancerTemplates"),
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t("data.about.values.innovation.title"),
      description: t("data.about.values.innovation.description"),
    },
    {
      icon: Users,
      title: t("data.about.values.collaboration.title"),
      description: t("data.about.values.collaboration.description"),
    },
    {
      icon: Target,
      title: t("data.about.values.quality.title"),
      description: t("data.about.values.quality.description"),
    },
    {
      icon: Heart,
      title: t("data.about.values.passion.title"),
      description: t("data.about.values.passion.description"),
    },
  ];

  return (
    <div ref={aboutRef} className={cn("fade-in", className)}>
      <div className="text-center mb-16">
        <p
          className="text-lg max-w-3xl mx-auto"
          style={{ color: `var(--color-text-secondary)` }}
        >
          {t("about.description")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
        {/* Profile & Bio */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/personal/profile.png"
                alt={t("hero.name")}
                className="w-full h-full object-cover object-top"
              />
              {/* Gradiente nas laterais */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
              {/* Gradiente sutil no topo e bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none"></div>
            </div>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3
              className="text-2xl font-semibold"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("hero.name")}
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div
                className="flex items-center gap-1"
                style={{ color: `var(--color-text-secondary)` }}
              >
                <MapPin className="h-4 w-4" />
                {t("data.contact.info.locationValue")}
              </div>
              <div
                className="flex items-center gap-1"
                style={{ color: `var(--color-text-secondary)` }}
              >
                <Calendar className="h-4 w-4" />
                {t("data.about.marketSince")}
              </div>
            </div>

            <p
              className="leading-relaxed"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("data.about.bio")}
            </p>

            <p
              className="leading-relaxed"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("data.about.journeyText")}
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3
            className="text-xl font-semibold mb-6"
            style={{ color: `var(--color-text-primary)` }}
          >
            {t("data.about.experience.title")}
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6"
                style={{ borderLeft: `2px solid var(--color-accent-primary)` }}
              >
                <div
                  className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                  style={{ backgroundColor: `var(--color-accent-primary)` }}
                ></div>

                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{
                      borderColor: `var(--color-border)`,
                      color: `var(--color-text-secondary)`,
                    }}
                  >
                    {exp.period}
                  </Badge>

                  <h4
                    className="font-semibold"
                    style={{ color: `var(--color-text-primary)` }}
                  >
                    {exp.role} • {exp.company}
                  </h4>

                  <p
                    className="text-sm"
                    style={{ color: `var(--color-text-secondary)` }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="space-y-8">
        <h3
          className="text-2xl font-semibold text-center"
          style={{ color: `var(--color-text-primary)` }}
        >
          {t("data.about.values.title")}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div
                  className="mx-auto w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `var(--color-background-tertiary)`,
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: `var(--color-accent-primary)` }}
                  />
                </div>
                <h4
                  className="font-semibold"
                  style={{ color: `var(--color-text-primary)` }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: `var(--color-text-secondary)` }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
