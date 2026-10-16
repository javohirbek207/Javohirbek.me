import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/portfolioData';
import { Github, Send, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] text-content-muted py-8 sm:py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 border-b border-white/[0.06]">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#121215] border border-white/10 flex items-center justify-center font-mono font-bold text-accent-neon text-xs">
              JM
            </div>
            <div>
              <span className="text-sm font-semibold text-white block">
                Javohirbek Maxmutov
              </span>
              <span className="text-[11px] text-content-subtle font-mono">
                Developer & Aspiring Data Analyst
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="py-1 px-1 text-content-muted hover:text-white active:text-accent-neon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 active:bg-white/10 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 active:bg-white/10 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 hover:border-accent-neon/40 active:bg-white/10 text-content-main hover:text-accent-neon flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 h-10 flex items-center gap-1.5 px-3 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-content-muted hover:text-accent-neon active:scale-95 transition-all"
            >
              <span>{language === 'uz' ? 'Yuqoriga' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
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

          <div>
            <a href="https://javohirbek.me" className="hover:text-accent-neon transition-colors">
              javohirbek.me
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
