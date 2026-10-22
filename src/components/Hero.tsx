import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { HeroPortrait } from './HeroPortrait';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-between items-center text-center relative z-10">
        
        {/* Central Dashboard Cluster */}
        <div className="flex-1 flex flex-col justify-center items-center w-full my-auto">
          
          {/* Top Greeting Line with Full Name (Goal 2 & 5) */}
          <p className="text-xs sm:text-sm font-medium text-zinc-600 tracking-tight mb-2 sm:mb-3">
            {t.hero.intro}
          </p>

          {/* Oversized Two-Line Typography (Goal 4) */}
          <div className="relative w-full flex flex-col items-center select-none">
            {/* Line 1: Solid Black Typography */}
            <h1 className="font-sans font-black tracking-tightest leading-[0.92] text-zinc-950 text-[clamp(2.75rem,8.5vw,6.5rem)] uppercase text-center w-full z-10">
              Creator
            </h1>

            {/* Line 2: Hollow Outlined Stroke Typography */}
            <h2 className="font-sans font-extrabold tracking-tightest leading-[0.92] text-[clamp(2.25rem,7vw,5.5rem)] text-stroke-title uppercase text-center w-full -mt-1 sm:-mt-2 z-10">
              {t.hero.headlineLine2}
            </h2>

            {/* Centered Integrated Cutout Portrait (Goal 3) */}
            <div className="relative -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 xl:-mt-48 w-full flex justify-center z-20">
              <HeroPortrait
                src="/hero-portrait.png?v=10"
                alt="Javohirbek Maxmutov"
              />
            </div>
          </div>

          {/* Supporting Informative Description (Goal 5 & 7) */}
          <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-600 font-normal leading-relaxed text-center mt-3 sm:mt-5 mb-6 sm:mb-8">
            {t.hero.description}
          </p>

          {/* Two Primary Action Buttons with Clear Visual Hierarchy (Goal 6) */}
          <div className="relative z-30 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="bg-zinc-950 text-white hover:bg-zinc-800 rounded-full px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-tight shadow-md hover:shadow-lg active:scale-95 transition-all inline-flex items-center gap-2 group"
            >
              <span>{t.hero.btnPrimary}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-50 text-zinc-900 rounded-full px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-medium tracking-tight active:scale-95 transition-all inline-flex items-center gap-2 group"
            >
              <span>{t.hero.btnSecondary}</span>
            </a>
          </div>

        </div>

        {/* Supporting Bottom Row */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 sm:pt-8 text-xs font-mono text-zinc-500 border-t border-zinc-100">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-zinc-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span className="tracking-tight">{t.hero.location}</span>
            </div>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.footer.status}</span>
            </div>
          </div>

          <div className="tracking-wider text-zinc-700 font-medium">
            {t.hero.techSummary}
          </div>
        </div>

      </div>
    </section>
  );
};
