import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-white border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            {t.skills.tag}
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-950 tracking-tight mb-2">
            {t.skills.title}
          </h2>
          <p className="text-zinc-500 text-sm">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Restrained & Organized Editorial Skills Matrix */}
        <div className="divide-y divide-zinc-200">
          {skillsCategories.map((category) => (
            <div 
              key={category.id}
              className="py-8 sm:py-10 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start"
            >
              {/* Category Name */}
              <div className="sm:col-span-4">
                <h3 className="font-sans font-bold text-base sm:text-lg text-zinc-950 tracking-tight">
                  {category.name}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="sm:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-zinc-950 tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
