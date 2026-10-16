import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  BrainCircuit, 
  HeartPulse, 
  Bot, 
  FolderGit2,
  Sparkles
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'ai', label: 'AI' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'bot', label: 'Telegram' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.categoryKey === selectedFilter;
  });

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'ai': return <BrainCircuit className="w-4 h-4 text-accent-neon" />;
      case 'fullstack': return <HeartPulse className="w-4 h-4 text-accent-neon" />;
      case 'bot': return <Bot className="w-4 h-4 text-accent-neon" />;
      default: return <FolderGit2 className="w-4 h-4 text-accent-neon" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative bg-[#070709] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-accent-neon/[0.025] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-accent-neon mb-2.5 sm:mb-3">
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.projects.title}
            </h2>
            <p className="text-content-muted text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none self-start md:self-end w-full md:w-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSelectedFilter(opt.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all active:scale-95 shrink-0 ${
                  selectedFilter === opt.key
                    ? 'bg-accent-neon text-black font-semibold shadow-glow-sm'
                    : 'bg-[#121214] text-content-muted hover:text-white border border-white/10 active:bg-white/10'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.categoryKey)}
                    <span className="text-xs font-mono text-accent-emerald font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-content-subtle">
                    Verified
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-accent-neon transition-colors mb-1.5 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-accent-neon/90 mb-2.5 sm:mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-content-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 sm:pt-4 pb-4 sm:pb-5 border-t border-white/[0.06]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-content-main"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors min-h-[40px]"
                    >
                      <Github className="w-3.5 h-3.5 text-accent-neon" />
                      <span>{t.projects.viewGithub}</span>
                    </a>
                  )}

                  {project.isDemoAvailable && project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3.5 rounded-xl bg-accent-neon hover:bg-[#4dff96] active:scale-[0.98] text-black text-xs font-semibold flex items-center justify-center gap-1.5 transition-all min-h-[40px]"
                    >
                      <span>{t.projects.viewDemo}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="py-2 px-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-content-subtle text-center min-h-[40px] flex items-center justify-center">
                      {t.projects.demoUnavailable}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
