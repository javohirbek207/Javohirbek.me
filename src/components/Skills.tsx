import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsCategories } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  BarChart3, 
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    programming: Terminal,
    frontend: Layout,
    backend: Server,
    database: Database,
    analytics: BarChart3
  };

  const filteredCategories = skillsCategories.filter((cat) => {
    if (activeCategory === 'all') return true;
    return cat.id === activeCategory;
  });

  return (
    <section id="skills" className="py-12 sm:py-20 relative bg-[#050505] border-t border-white/[0.06]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent-neon/[0.025] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-accent-neon mb-2.5 sm:mb-3">
              <span>{t.skills.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              {t.skills.title}
            </h2>
            <p className="text-content-muted text-xs sm:text-sm md:text-base mt-2 max-w-xl leading-relaxed">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none self-start md:self-end w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all active:scale-95 shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-accent-neon text-black font-semibold shadow-glow-sm'
                  : 'bg-[#111114] text-content-muted hover:text-white border border-white/10 active:bg-white/10'
              }`}
            >
              {language === 'uz' ? 'Barchasi' : 'All'}
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all active:scale-95 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-accent-neon text-black font-semibold shadow-glow-sm'
                    : 'bg-[#111114] text-content-muted hover:text-white border border-white/10 active:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code;
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-[#0c0c0f] border border-white/[0.08] hover:border-accent-neon/30 active:border-accent-neon/30 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 sm:pb-4 sm:mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#141418] border border-white/10 group-hover:border-accent-neon/40 flex items-center justify-center text-accent-neon transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-accent-neon transition-colors">
                          {category.name}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] text-content-subtle font-mono">
                          {category.description}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 sm:space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-white font-mono">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-neon/60" />
                        </div>
                        <p className="text-[11px] text-content-muted leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Count */}
                <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-content-subtle">
                  <span>{category.skills.length} {language === 'uz' ? 'ta texnologiya' : 'technologies'}</span>
                  <span className="text-accent-neon/80 font-mono">verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-8 sm:mt-10 p-3.5 rounded-xl bg-[#09090b] border border-white/[0.06] flex items-center justify-between flex-wrap gap-2 text-xs text-content-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-neon shrink-0" />
            <span className="text-xs">{t.skills.note}</span>
          </div>
          <span className="font-mono text-accent-neon/80 text-[11px]">
            #GenuineSkills
          </span>
        </div>

      </div>
    </section>
  );
};
