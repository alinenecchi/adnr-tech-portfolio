export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
