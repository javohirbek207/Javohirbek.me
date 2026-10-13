export type Language = 'uz' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: 'ai' | 'fullstack' | 'bot';
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isDemoAvailable: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  skills: {
    name: string;
    description: string;
    icon?: string;
  }[];
}
