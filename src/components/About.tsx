import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code2, BarChart3, Database, Target, Compass, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const cardIcons = [Code2, BarChart3, Database];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-[#070709] border-t border-white/[0.06]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent-neon/[0.025] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-accent-neon mb-3">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.about.title}
          </h2>
          <p className="text-content-muted text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-12">
          
          {/* Main Story */}
          <div className="lg:col-span-8 p-5 sm:p-7 rounded-2xl bg-[#0c0c0f] border border-white/[0.08] relative overflow-hidden space-y-3.5 sm:space-y-4 text-content-main leading-relaxed">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-neon" />
            <p className="text-sm sm:text-base md:text-lg font-medium text-white leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-content-muted leading-relaxed">
              {t.about.paragraph2}
            </p>
            <p className="text-xs sm:text-sm font-mono text-accent-neon/90 pt-1">
              {t.about.paragraph3}
            </p>
          </div>

          {/* Core Principles */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d0d10] border border-white/[0.07] flex items-start gap-3">
              <Target className="w-5 h-5 text-accent-neon shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  {language === 'uz' ? 'Amaliy Yondashuv' : 'Practical Focus'}
                </h4>
                <p className="text-xs text-content-muted mt-1 leading-relaxed">
                  {language === 'uz' 
                    ? "Nazariy bilimlarni real kod va ma’lumotlar bilan mustahkamlash."
                    : "Validating ideas through actual code and working datasets."}
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d0d10] border border-white/[0.07] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  {language === 'uz' ? 'Toza Arxitektura' : 'Clean Craftsmanship'}
                </h4>
                <p className="text-xs text-content-muted mt-1 leading-relaxed">
                  {language === 'uz' 
                    ? "Tushunarli, o‘qilishi oson kod va mantiqiy tuzilmalar yaratish."
                    : "Prioritizing readable code, maintainability, and clear logic."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {t.about.cards.map((card, idx) => {
            const Icon = cardIcons[idx] || Code2;
            return (
              <div
                key={card.title}
                className="p-5 sm:p-6 rounded-2xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 active:border-accent-neon/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#141418] border border-white/10 group-hover:border-accent-neon/40 flex items-center justify-center text-accent-neon mb-3 sm:mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-accent-neon transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 mt-3.5 sm:mt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-content-subtle">
                  <span>0{idx + 1}</span>
                  <span className="text-accent-neon/80 group-hover:text-accent-neon">
                    {language === 'uz' ? 'Yo‘nalish' : 'Domain'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
