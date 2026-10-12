import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/portfolioData';
import { Github, Send, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] text-content-muted py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#121215] border border-white/10 flex items-center justify-center font-mono font-bold text-accent-neon text-xs">
              JM
            </div>
            <div>
              <span className="text-sm font-semibold text-white block">
                Javohirbek Maxmutov
              </span>
              <span className="text-[11px] text-content-subtle">
                Data Analyst & Web Developer
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Yuqoriga qaytish"
            className="flex items-center gap-2 text-xs font-mono text-content-muted hover:text-accent-neon transition-colors"
          >
            <span>{language === 'uz' ? 'Yuqoriga' : 'Back to top'}</span>
            <div className="w-6 h-6 rounded-md bg-[#121215] border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-content-subtle font-mono text-center sm:text-left">
          <div>
            &copy; {currentYear} Javohirbek Maxmutov. {t.footer.rights}
          </div>

          <div className="flex items-center gap-2 text-accent-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
            <span>{t.footer.status}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
