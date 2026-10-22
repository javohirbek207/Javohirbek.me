import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
          {t.about.tag}
        </span>

        {/* Title */}
        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-950 tracking-tight mb-6">
          {t.about.title}
        </h2>

        {/* Concise Description */}
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal mb-10">
          {t.about.description}
        </p>

        {/* Essential Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-200/80">
          {t.about.details.map((item) => (
            <div key={item.label} className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-300 transition-colors">
              <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-zinc-950 block">
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
