import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  Mail, 
  BarChart3, 
  Code2, 
  Bot, 
  MapPin, 
  CheckCircle2, 
  Send
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const stack = [
    'Python',
    'SQL',
    'Excel',
    'Pandas',
    'JavaScript',
    'React',
    'Node.js',
    'PostgreSQL'
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-neon/[0.04] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-accent-emerald/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md self-start">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-neon"></span>
              </span>
              <span className="text-xs font-medium text-white/90">
                {t.hero.status}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                {t.hero.headline}
              </h1>

              <div className="text-lg sm:text-xl font-medium text-accent-neon font-mono">
                &gt; {t.hero.subheadline}
              </div>
            </div>

            {/* Natural, genuine description */}
            <p className="text-content-muted text-base sm:text-lg max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => scrollTo('projects')}
                className="min-h-[48px] px-6 rounded-xl bg-accent-neon hover:bg-[#4dff96] text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all duration-200 group focus:outline-none"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="min-h-[48px] px-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none"
              >
                <Mail className="w-4 h-4 text-accent-neon" />
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Practical Tech Stack Pills */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-medium text-content-subtle block mb-3">
                {t.hero.skillsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-[#111114] border border-white/[0.08] text-xs font-mono text-content-main hover:border-accent-neon/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Genuine, clean developer profile card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0c0c0f] border border-white/[0.1] shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#16161a] border border-white/10 flex items-center justify-center font-mono font-bold text-accent-neon text-lg">
                    JM
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Javohirbek Maxmutov
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-content-subtle mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-emerald" />
                      <span>{t.hero.card.subtitle}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-accent-neon border border-white/10 transition-colors"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

              {/* Core focus items */}
              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-[#141418] text-accent-neon shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.hero.card.focuses[0].title}
                    </h4>
                    <p className="text-xs text-content-muted mt-0.5 leading-relaxed">
                      {t.hero.card.focuses[0].desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-[#141418] text-accent-emerald shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.hero.card.focuses[1].title}
                    </h4>
                    <p className="text-xs text-content-muted mt-0.5 leading-relaxed">
                      {t.hero.card.focuses[1].desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-[#141418] text-[#10B981] shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.hero.card.focuses[2].title}
                    </h4>
                    <p className="text-xs text-content-muted mt-0.5 leading-relaxed">
                      {t.hero.card.focuses[2].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom direct Telegram bar */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="text-content-subtle font-mono">
                  {contactInfo.telegramUsername}
                </span>
                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-neon hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Telegram</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
