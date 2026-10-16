import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  Mail, 
  Code2, 
  LineChart, 
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [pulseMetric, setPulseMetric] = useState(1840);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseMetric(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 68;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const corePills = [
    'Python', 'JavaScript', 'TypeScript', 'React',
    'Node.js', 'PostgreSQL', 'SQL', 'pandas'
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle ambient lighting — smaller on mobile */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[350px] bg-accent-neon/[0.035] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
            
            {/* Name Badge & Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-neon/10 border border-accent-neon/30 text-accent-neon text-xs font-mono font-semibold tracking-wider uppercase">
                <span>{t.hero.badge}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-neon"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-medium text-white/90">
                  {t.hero.status}
                </span>
              </div>
            </div>

            {/* Main Headline — responsive sizing */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-[1.7rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {t.hero.headline.split('&')[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-[#66ffaa] to-accent-emerald">
                  & {(t.hero.headline.split('&')[1] || '').trim()}
                </span>
              </h1>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-lg font-mono text-accent-neon font-medium">
                <span className="text-content-subtle">&gt;</span>
                <h2>{t.hero.subheadline}</h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-content-muted text-[15px] sm:text-lg max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Action Buttons — full width on mobile */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="min-h-[50px] sm:min-h-[48px] px-6 rounded-2xl sm:rounded-xl bg-accent-neon hover:bg-[#4dff96] text-black font-bold sm:font-semibold text-[15px] sm:text-base flex items-center justify-center gap-2.5 shadow-glow-sm hover:shadow-glow-md transition-all duration-200 group focus:outline-none active:scale-[0.97]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="min-h-[50px] sm:min-h-[48px] px-6 rounded-2xl sm:rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-[15px] sm:text-base flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none active:scale-[0.97]"
              >
                <Mail className="w-4 h-4 text-accent-neon" />
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-[11px] sm:text-xs font-mono text-content-subtle block mb-2.5">
                {t.hero.skillsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {corePills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2 sm:px-2.5 py-1 rounded-lg bg-[#111114] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-content-main"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Visual — compact on mobile */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Outer glow — subtle on mobile */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-neon/15 to-accent-emerald/15 rounded-2xl blur-md sm:blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

              {/* Terminal Box */}
              <div className="relative rounded-2xl bg-[#0c0c0f] border border-white/[0.1] shadow-2xl p-4 sm:p-6 backdrop-blur-xl space-y-3 sm:space-y-4">
                
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] sm:text-[11px] font-mono text-content-subtle ml-1.5 sm:ml-2 truncate">
                      {t.hero.visual.terminalTitle}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-accent-neon flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse" />
                    {language === 'uz' ? 'Jonli' : 'Live'}
                  </span>
                </div>

                {/* Code Block — smaller text on mobile */}
                <div className="font-mono text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 py-0.5 text-content-main overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-3 sm:pl-4 text-content-muted">
                    name: <span className="text-accent-neon">&quot;Javohirbek Maxmutov&quot;</span>,
                  </div>
                  <div className="pl-3 sm:pl-4 text-content-muted">
                    role: <span className="text-white">&quot;Developer & Analyst&quot;</span>,
                  </div>
                  <div className="pl-3 sm:pl-4 text-content-muted">
                    focus: <span className="text-accent-neon">&quot;Web & Data&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Data Stream */}
                <div className="pt-2.5 sm:pt-3 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                    <span className="text-content-subtle">
                      {language === 'uz' ? 'Yozuvlar:' : 'Rows:'}
                    </span>
                    <span className="text-accent-neon font-bold">
                      {pulseMetric.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-emerald to-accent-neon w-[84%] animate-pulse" />
                  </div>
                </div>

                {/* Micro Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1 sm:pt-2">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-1.5 sm:gap-2">
                    <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-neon shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-white font-medium block truncate">Full-Stack</span>
                      <span className="text-[9px] sm:text-[10px] text-content-subtle block truncate">React • Node</span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-1.5 sm:gap-2">
                    <LineChart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-emerald shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-white font-medium block truncate">Analytics</span>
                      <span className="text-[9px] sm:text-[10px] text-content-subtle block truncate">Python • SQL</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-1.5 sm:pt-2 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-content-subtle">
                  <span>status: 200 OK</span>
                  <span className="text-accent-neon">javohirbek.me</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
