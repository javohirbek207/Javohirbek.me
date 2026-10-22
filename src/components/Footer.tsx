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
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'analytics', label: language === 'uz' ? 'Tahlil' : 'Analytics' },
    { id: 'contact', label: t.nav.contact },
  ];

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
    <footer className="bg-white border-t border-zinc-200/80 text-zinc-600 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-1.5">
            <span className="font-sans font-bold text-xl tracking-tight text-zinc-950">
              Javohirbek<span className="text-zinc-400">.</span>
            </span>
            <span className="text-zinc-300 mx-1.5">•</span>
            <span className="text-xs text-zinc-500 font-mono">
              Developer & Data Analyst
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-zinc-500 hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-950 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-950 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-950 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 h-9 px-3.5 rounded-full border border-zinc-200 hover:border-zinc-950 text-xs font-mono text-zinc-700 hover:text-zinc-950 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{language === 'uz' ? 'Yuqoriga' : 'Top'}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono text-center sm:text-left">
          <div>
            &copy; {currentYear} Javohirbek Maxmutov. {t.footer.rights}
          </div>

          <div className="flex items-center gap-1.5 text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{t.footer.status}</span>
          </div>

          <div>
            <a href="https://javohirbek.me" className="hover:text-zinc-950 transition-colors">
              javohirbek.me
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
