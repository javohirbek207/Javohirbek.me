export type Language = 'uz' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: 'ai' | 'fullstack' | 'analytics' | 'bot';
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isDemoAvailable: boolean;
}
