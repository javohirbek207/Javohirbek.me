import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { HeroPortrait } from './HeroPortrait';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({
      x: normX * 18,
      y: normY * 10,
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 sm:pt-28 pb-10 sm:pb-12 bg-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center items-center text-center relative z-10">

        {/* ── Bazil.fr-inspired Interactive Hero Stage ── */}
        <div
          className="w-full flex flex-col items-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMouseOffset({ x: 0, y: 0 });
          }}
          onMouseMove={handleMouseMove}
        >

          {/* Top Greeting Line */}
          <p className="relative z-30 text-sm sm:text-base md:text-xl font-medium text-zinc-700 tracking-tight mb-3 sm:mb-5">
            {t.hero.intro}
          </p>

          {/* Main Stage: Top-anchored 2-line Typography + Interactive Cutout Portrait */}
          <div className="relative w-full md:min-h-[360px] lg:min-h-[410px] flex flex-col items-center select-none">

            {/* Back Typography Layer (z-10, always clearly visible) */}
            <div className="relative z-10 flex flex-col items-center pointer-events-none w-full">
              <h1 className="font-sans font-black tracking-tighter leading-[0.88] text-zinc-950 text-[clamp(3.2rem,11.5vw,8.4rem)] uppercase text-center w-full">
                Creator
              </h1>
              <h2 className="font-sans font-extrabold tracking-tighter leading-[0.90] text-[clamp(2.2rem,8.2vw,6.2rem)] text-stroke-title uppercase text-center w-full mt-1 sm:mt-2">
                {t.hero.headlineLine2}
              </h2>
            </div>

            {/* Front Outline Overlay (z-30, shines over the portrait hair/head/shoulders like Bazil.fr) */}
            <div
              aria-hidden="true"
              className={`absolute top-0 inset-x-0 z-30 flex flex-col items-center pointer-events-none select-none transition-opacity duration-300 ${
                isHovered ? 'md:opacity-100' : 'md:opacity-0'
              } opacity-100`}
            >
              <span className="font-sans font-black tracking-tighter leading-[0.88] text-stroke-white text-[clamp(3.2rem,11.5vw,8.4rem)] uppercase text-center w-full">
                Creator
              </span>
              <span className="font-sans font-extrabold tracking-tighter leading-[0.90] text-[clamp(2.2rem,8.2vw,6.2rem)] text-stroke-white uppercase text-center w-full mt-1 sm:mt-2 opacity-75">
                {t.hero.headlineLine2}
              </span>
            </div>

            {/* Center Cutout Portrait:
                - Mobile (< md): Always visible in full clarity
                - Laptop/Desktop (md+): Appears smoothly when hovering the mouse over the stage */}
            <div
              className={`relative md:absolute md:top-2 lg:top-3 z-20 w-full flex justify-center -mt-20 sm:-mt-28 md:mt-0 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 transition-all duration-500 ease-out ${
                isHovered
                  ? 'md:opacity-100 md:scale-100 md:translate-y-0'
                  : 'md:opacity-0 md:scale-95 md:translate-y-3 md:pointer-events-none'
              } opacity-100 scale-100`}
              style={{
                transform: isHovered
                  ? `translate3d(calc(-1.25rem + ${mouseOffset.x}px), ${mouseOffset.y}px, 0)`
                  : undefined,
              }}
            >
              <HeroPortrait
                src="/hero-portrait.png?v=18"
                alt="Javohirbek Maxmutov"
              />
            </div>

          </div>

          {/* Rich Editorial Description in Refined Typography */}
          <div className="relative z-30 max-w-2xl mx-auto px-2 sm:px-4 mt-2 sm:mt-4 md:mt-3">
            <p className="font-sans text-base sm:text-lg md:text-[19px] text-zinc-700 font-normal leading-[1.7] tracking-normal text-center">
              {t.hero.description}
            </p>
          </div>

          {/* Action Buttons (Bazil.fr style) */}
          <div className="relative z-30 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 rounded-lg px-7 sm:px-8 py-3.5 text-sm font-medium tracking-tight shadow-sm transition-all active:scale-95 group"
            >
              <span>{t.hero.btnPrimary}</span>
              <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center justify-center gap-2 border border-zinc-900 bg-white/80 backdrop-blur-[2px] hover:bg-zinc-950 hover:text-white text-zinc-900 rounded-lg px-7 sm:px-8 py-3.5 text-sm font-medium tracking-tight transition-all active:scale-95"
            >
              <span>{t.hero.btnSecondary}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
