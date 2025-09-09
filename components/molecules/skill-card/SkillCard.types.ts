import { LucideIcon } from "lucide-react";

export interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  level: "Iniciante" | "Intermediário" | "Avançado";
  tools: string[];
}
