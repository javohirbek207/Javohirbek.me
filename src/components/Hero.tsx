import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  Mail, 
  Terminal, 
  Code2, 
  Database, 
  LineChart, 
  Cpu, 
  CheckCircle2,
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
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const corePills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'SQL',
    'Excel & pandas'
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-neon/[0.035] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-16 right-10 w-[300px] h-[300px] bg-accent-emerald/[0.025] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md self-start">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-neon"></span>
              </span>
              <span className="text-xs font-mono font-medium text-white/90">
                {t.hero.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                {t.hero.headline.split('&')[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-[#66ffaa] to-accent-emerald">
                  & {t.hero.headline.split('&')[1] || ''}
                </span>
              </h1>

              <div className="inline-flex items-center gap-2 text-base sm:text-lg font-mono text-accent-neon font-medium">
                <span className="text-content-subtle">&gt;</span>
                <h2>{t.hero.subheadline}</h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-content-muted text-base sm:text-lg max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => scrollTo('projects')}
                className="min-h-[48px] px-6 rounded-xl bg-accent-neon hover:bg-[#4dff96] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-accent-neon"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="min-h-[48px] px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <Mail className="w-4 h-4 text-accent-neon" />
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Practical Tech Stack List */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-content-subtle block mb-2.5">
                {t.hero.skillsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {corePills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-1 rounded-lg bg-[#111114] border border-white/[0.08] text-xs font-mono text-content-main hover:border-accent-neon/30 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Subtle Animated Visual Element (Apple Dark Aesthetic) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Outer soft glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-neon/20 to-accent-emerald/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />

              {/* Terminal / Tech Visual Box */}
              <div className="relative rounded-2xl bg-[#0c0c0f] border border-white/[0.1] shadow-2xl p-5 sm:p-6 backdrop-blur-xl space-y-4">
                
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-content-subtle ml-2">
                      {t.hero.visual.terminalTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-accent-neon flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse" />
                    {language === 'uz' ? 'Jonli' : 'Live'}
                  </span>
                </div>

                {/* Code / Developer State Simulation */}
                <div className="font-mono text-xs space-y-2 py-1 text-content-main">
                  <div>
                    <span className="text-purple-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4 text-content-muted">
                    name: <span className="text-accent-neon">&quot;Javohirbek Maxmudov&quot;</span>,
                  </div>
                  <div className="pl-4 text-content-muted">
                    role: <span className="text-white">&quot;Developer & Data Analyst&quot;</span>,
                  </div>
                  <div className="pl-4 text-content-muted">
                    location: <span className="text-white">&quot;Tashkent, UZ&quot;</span>,
                  </div>
                  <div className="pl-4 text-content-muted">
                    focus: <span className="text-accent-neon">&quot;Web Apps & Analytics&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Interactive Data Stream / Pipeline Mini Visual */}
                <div className="pt-3 border-t border-white/[0.06] space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-content-subtle">
                      {language === 'uz' ? 'Qayta ishlangan yozuvlar:' : 'Data Rows Streamed:'}
                    </span>
                    <span className="text-accent-neon font-bold">
                      {pulseMetric.toLocaleString()} rows
                    </span>
                  </div>

                  {/* Progress / Pulse line */}
                  <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-emerald to-accent-neon w-[84%] animate-pulse" />
                  </div>
                </div>

                {/* Micro Capabilities Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-accent-neon shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] text-white font-medium block truncate">Full-Stack</span>
                      <span className="text-[10px] text-content-subtle block truncate">React • Node.js</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                    <LineChart className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] text-white font-medium block truncate">Analytics</span>
                      <span className="text-[10px] text-content-subtle block truncate">Python • SQL</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer status */}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-content-subtle">
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
