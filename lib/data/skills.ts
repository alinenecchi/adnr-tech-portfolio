import { Skill } from "@/types/data";

export const skills: Skill[] = [
  // Frontend
  {
    id: "1",
    name: "React",
    category: "frontend",
    level: "expert",
    icon: "react",
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    level: "advanced",
    icon: "nextjs",
  },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    level: "advanced",
    icon: "typescript",
  },
  {
    id: "4",
    name: "JavaScript",
    category: "frontend",
    level: "expert",
    icon: "javascript",
  },
  {
    id: "5",
    name: "HTML5",
    category: "frontend",
    level: "expert",
    icon: "html5",
  },
  {
    id: "6",
    name: "CSS3",
    category: "frontend",
    level: "expert",
    icon: "css3",
  },
  {
    id: "7",
    name: "Tailwind CSS",
    category: "frontend",
    level: "advanced",
    icon: "tailwind",
  },
  {
    id: "8",
    name: "Styled Components",
    category: "frontend",
    level: "intermediate",
    icon: "styled-components",
  },
  {
    id: "9",
    name: "React Native",
    category: "frontend",
    level: "intermediate",
    icon: "react-native",
  },
  {
    id: "10",
    name: "Vue.js",
    category: "frontend",
    level: "intermediate",
    icon: "vue",
  },

  // Backend
  {
    id: "11",
    name: "Node.js",
    category: "backend",
    level: "advanced",
    icon: "nodejs",
  },
  {
    id: "12",
    name: "Express.js",
    category: "backend",
    level: "advanced",
    icon: "express",
  },
  {
    id: "13",
    name: "Python",
    category: "backend",
    level: "intermediate",
    icon: "python",
  },
  {
    id: "14",
    name: "Django",
    category: "backend",
    level: "intermediate",
    icon: "django",
  },
  {
    id: "15",
    name: "FastAPI",
    category: "backend",
    level: "intermediate",
    icon: "fastapi",
  },

  // Database
  {
    id: "16",
    name: "PostgreSQL",
    category: "database",
    level: "advanced",
    icon: "postgresql",
  },
  {
    id: "17",
    name: "MongoDB",
    category: "database",
    level: "intermediate",
    icon: "mongodb",
  },
  {
    id: "18",
    name: "Redis",
    category: "database",
    level: "intermediate",
    icon: "redis",
  },
  {
    id: "19",
    name: "MySQL",
    category: "database",
    level: "intermediate",
    icon: "mysql",
  },

  // Tools
  {
    id: "20",
    name: "Git",
    category: "tools",
    level: "advanced",
    icon: "git",
  },
  {
    id: "21",
    name: "Docker",
    category: "tools",
    level: "intermediate",
    icon: "docker",
  },
  {
    id: "22",
    name: "AWS",
    category: "tools",
    level: "intermediate",
    icon: "aws",
  },
  {
    id: "23",
    name: "Vercel",
    category: "tools",
    level: "advanced",
    icon: "vercel",
  },
  {
    id: "24",
    name: "Figma",
    category: "tools",
    level: "intermediate",
    icon: "figma",
  },
  {
    id: "25",
    name: "VS Code",
    category: "tools",
    level: "expert",
    icon: "vscode",
  },
];

export const frontendSkills = skills.filter(
  (skill) => skill.category === "frontend"
);
export const backendSkills = skills.filter(
  (skill) => skill.category === "backend"
);
export const databaseSkills = skills.filter(
  (skill) => skill.category === "database"
);
export const toolSkills = skills.filter((skill) => skill.category === "tools");

export const skillCategories = [
  { name: "Frontend", skills: frontendSkills },
  { name: "Backend", skills: backendSkills },
  { name: "Database", skills: databaseSkills },
  { name: "Tools", skills: toolSkills },
];

