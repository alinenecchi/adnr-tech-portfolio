export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  category: 'study' | 'college' | 'personal';
  featured: boolean;
  year: string;
}

export interface PersonalProjectsSectionProps {
  className?: string;
}
