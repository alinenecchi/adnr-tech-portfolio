"use client";

import React from "react";
import { TechBadgeProps } from "./TechBadge.types";
import { cn } from "@/lib/utils";

const techColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  "Next.js": "bg-gray-100 text-gray-800 hover:bg-gray-200",
  TypeScript: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  JavaScript: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  "Node.js": "bg-green-100 text-green-800 hover:bg-green-200",
  SASS: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  "Styled Components": "bg-purple-100 text-purple-800 hover:bg-purple-200",
  REST: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  "REST API": "bg-orange-100 text-orange-800 hover:bg-orange-200",
  MJML: "bg-red-100 text-red-800 hover:bg-red-200",
  HTML: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  CSS: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  "React Native": "bg-blue-100 text-blue-800 hover:bg-blue-200",
  Expo: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  AWS: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  PostgreSQL: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  MongoDB: "bg-green-100 text-green-800 hover:bg-green-200",
  Docker: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  Git: "bg-red-100 text-red-800 hover:bg-red-200",
  // Novas tecnologias dos projetos Toyota
  GraphQL: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  Auth0: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  Figma: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  Jira: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  GitHub: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  "Git Actions": "bg-green-100 text-green-800 hover:bg-green-200",
  // Tecnologias do projeto Cruz Vermelha
  PHP: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
  WordPress: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  Plugins: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  // Tecnologias do projeto Descarte Certo
  Java: "bg-red-100 text-red-800 hover:bg-red-200",
  "Spring Boot": "bg-green-100 text-green-800 hover:bg-green-200",
  // Tecnologias adicionais
  "Form Validation": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  "API Integration": "bg-teal-100 text-teal-800 hover:bg-teal-200",
  "Maps API": "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
  "Tailwind CSS": "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
};

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const customColor = techColors[tech];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
        customColor ? `${customColor} border-0` : "border border-border",
        !customColor && "text-foreground"
      )}
      style={
        !customColor
          ? {
              backgroundColor: `var(--color-background-tertiary)`,
              color: `var(--color-text-secondary)`,
              borderColor: `var(--color-border)`,
            }
          : undefined
      }
    >
      {tech}
    </span>
  );
};
