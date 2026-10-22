import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/portfolioData';
import { Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            {t.projects.tag}
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-950 tracking-tight mb-2">
            {t.projects.title}
          </h2>
          <p className="text-zinc-500 text-sm">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Concise Projects List */}
        <div className="divide-y divide-zinc-200">
          {projectsData.map((project, index) => (
            <article 
              key={project.id}
              className="py-8 sm:py-10 first:pt-0 last:pb-0 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400">0{index + 1} /</span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-zinc-950 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2">
                  {project.isDemoAvailable && project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark text-xs font-medium px-4 py-2 inline-flex items-center gap-1.5 shadow-2xs active:scale-95"
                    >
                      <span>{t.projects.viewDemo}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs font-medium px-3.5 py-2 inline-flex items-center gap-1.5 active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-zinc-700">
                {project.tagline}
              </p>

              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
