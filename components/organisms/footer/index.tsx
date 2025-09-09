"use client";

import React from "react";
import { FooterProps } from "./Footer.types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { AdnrTechLogo } from "@/components/icons";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/alinenecchi",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aline-necchi/",
      icon: Linkedin,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5551993409405?text=Ol%C3%A1%20vim%20pelo%20seu%20site!",
      icon: MessageCircle,
    },
  ];

  return (
    <footer
      className={cn("border-t", className)}
      style={{
        backgroundColor: `var(--color-background-secondary)`,
        borderColor: `var(--color-border)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <AdnrTechLogo
                width={320}
                height={90}
                variant="default"
                showText={true}
                primaryColor={`var(--color-accent-primary)`}
                textColor={
                  theme === "clean-minimal"
                    ? "#1F2937"
                    : theme === "classic-modern"
                    ? "#E6EDF3"
                    : theme === "tech-futuristic"
                    ? "#FFFFFF"
                    : "#E5E7EB"
                }
                className="flex-shrink-0"
              />
            </div>
            <div
              className="text-sm"
              style={{ color: `var(--color-text-secondary)` }}
            >
              © {new Date().getFullYear()} Aline Dias Necchi Ribeiro.{" "}
              {t("footer.rights")}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: `var(--color-text-secondary)` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = `var(--color-accent-primary)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = `var(--color-text-secondary)`;
                  }}
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
