"use client";

import React, { useState } from "react";
import { ContactSectionProps } from "./ContactSection.types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/atoms/button";
import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

export const ContactSection: React.FC<ContactSectionProps> = ({
  className,
}) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [contactRef] = useIntersectionObserver({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "alinencchi@gmail.com",
      href: "mailto:alinencchi@gmail.com",
    },
    {
      icon: MessageCircle,
      label: t("data.contact.info.whatsapp"),
      value: "+55 (51) 99340-9405",
      href: "https://wa.me/5551993409405?text=Ol%C3%A1%20vim%20pelo%20seu%20site!",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Porto Alegre, RS",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/alinenecchi",
      icon: Github,
      color: "hover:text-gray-600",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aline-necchi/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
  ];

  const cardShadow =
    theme === "clean-minimal"
      ? `0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)`
      : "";

  return (
    <div ref={contactRef} className={cn("fade-in", className)}>
      <div className="text-center mb-16">
        <p
          className="text-lg max-w-3xl mx-auto"
          style={{ color: `var(--color-text-secondary)` }}
        >
          {t("contact.description")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: `var(--color-background-secondary)`,
              boxShadow: cardShadow,
            }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("contact.contactInfo")}
            </h3>
            <p
              className="mb-6"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("contact.contactDescription")}
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                    style={{
                      backgroundColor: `var(--color-background-tertiary)`,
                    }}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: `var(--color-accent-primary)` }}
                    />
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: `var(--color-text-primary)` }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: `var(--color-text-secondary)` }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {/* Social Links */}
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: `var(--color-background-secondary)`,
              boxShadow: cardShadow,
            }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: `var(--color-text-primary)` }}
            >
              {t("contact.socialMedia")}
            </h3>
            <p
              className="mb-6"
              style={{ color: `var(--color-text-secondary)` }}
            >
              {t("contact.socialDescription")}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200 hover:scale-105 ${link.color}`}
                    style={{
                      backgroundColor: `var(--color-background-tertiary)`,
                      color: `var(--color-text-secondary)`,
                    }}
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="p-6 rounded-lg"
            style={{
              background: `var(--gradient-secondary)`,
            }}
          >
            <h3
              className="font-semibold mb-2"
              style={{
                color: `var(--color-text-primary)`,
              }}
            >
              {t("contact.ctaTitle")}
            </h3>
            <p
              className="text-sm mb-4"
              style={{
                color: `var(--color-text-primary)`,
              }}
            >
              {t("contact.ctaDescription")}
            </p>
            <Button
              asChild
              variant="outline"
              style={{
                backgroundColor: `var(--color-background-secondary)`,
                borderColor: `var(--color-accent-primary)`,
                color: `var(--color-text-primary)`,
              }}
            >
              <a
                href="https://wa.me/5551993409405?text=Ol%C3%A1%20vim%20pelo%20seu%20site!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("data.contact.whatsappAction")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
