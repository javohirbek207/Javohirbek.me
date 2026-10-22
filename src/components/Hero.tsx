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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 bg-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-between items-center text-center relative z-10">

        {/* ── Hero cluster ── */}
        <div className="flex-1 flex flex-col justify-center items-center w-full">

          {/* Greeting */}
          <p className="text-xs sm:text-sm font-medium text-zinc-500 tracking-tight mb-2 sm:mb-3">
            {t.hero.intro}
          </p>

          {/* Typography + Portrait stack */}
          <div className="relative w-full flex flex-col items-center select-none">

            {/* CREATOR — solid */}
            <h1 className="font-sans font-black tracking-tighter leading-[0.90] text-zinc-950 text-[clamp(2.8rem,9vw,7rem)] uppercase text-center w-full relative z-10">
              Creator
            </h1>

            {/* & DATA ANALYST — outline */}
            <h2 className="font-sans font-extrabold tracking-tighter leading-[0.90] text-[clamp(2.1rem,7vw,5.5rem)] text-stroke-title uppercase text-center w-full -mt-1 sm:-mt-2 relative z-10">
              {t.hero.headlineLine2}
            </h2>

            {/* Portrait — pulled up to overlap text, shifted left */}
            <div className="relative -mt-14 sm:-mt-20 md:-mt-28 lg:-mt-32 w-full flex justify-center z-20 -translate-x-6 sm:-translate-x-10 md:-translate-x-14 lg:-translate-x-16">
              <HeroPortrait
                src="/hero-portrait.png?v=13"
                alt="Javohirbek Maxmutov"
              />
            </div>
          </div>

          {/* Description */}
          <p className="max-w-lg mx-auto px-4 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed text-center mt-2 sm:mt-4 mb-6 sm:mb-7">
            {t.hero.description}
          </p>

          {/* CTA */}
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-700 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight shadow-md hover:shadow-xl active:scale-95 transition-all group"
          >
            <span>{t.hero.btnPrimary}</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* ── Bottom status row ── */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 pt-5 sm:pt-6 mt-4 text-xs font-mono text-zinc-500 border-t border-zinc-100">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-zinc-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="tracking-tight">{t.hero.location}</span>
            </div>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{t.footer.status}</span>
            </div>
          </div>
          <div className="text-zinc-600 font-medium text-center sm:text-right break-words max-w-full">
            {t.hero.techSummary}
          </div>
        </div>

      </div>
    </section>
  );
};
