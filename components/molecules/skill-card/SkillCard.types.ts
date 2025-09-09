import { LucideIcon } from "lucide-react";

export interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  level: "beginner" | "intermediate" | "advanced";
  tools: string[];
}
