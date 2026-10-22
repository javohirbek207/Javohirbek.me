import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3.5'
          : 'bg-white/85 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Full Name Text Logo "Javohirbek Maxmutov." */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="group flex items-center gap-1 focus:outline-none select-none"
            aria-label="Javohirbek Maxmutov Homepage"
          >
            <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-zinc-950 transition-opacity group-hover:opacity-80">
              Javohirbek Maxmutov<span className="text-zinc-400 group-hover:text-zinc-950 transition-colors">.</span>
            </span>
          </a>

          {/* Right: Clean minimal navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`nav-link-underline text-[13px] font-medium tracking-tight transition-colors py-1 ${
                      isActive
                        ? 'text-zinc-950 active'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 pl-2 border-l border-zinc-200">
              {/* Quiet language toggle */}
              <button
                onClick={toggleLanguage}
                aria-label="Switch language"
                className="text-[11px] font-mono tracking-wider px-2 py-1 text-zinc-500 hover:text-zinc-950 transition-colors"
                title="Toggle Language (UZ / EN)"
              >
                <span className={language === 'uz' ? 'font-bold text-zinc-950' : 'text-zinc-400'}>UZ</span>
                <span className="text-zinc-300 mx-1">/</span>
                <span className={language === 'en' ? 'font-bold text-zinc-950' : 'text-zinc-400'}>EN</span>
              </button>

              {/* Small, dark contact button labelled "Let's talk" */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn-dark text-xs sm:text-[13px] font-medium tracking-tight px-4 sm:px-5 py-2 inline-flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <span>{t.nav.talkBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Mobile Right: Menu button & Language */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="text-[11px] font-mono px-2 py-1 rounded-full border border-zinc-200 text-zinc-700 active:bg-zinc-100"
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 focus:outline-none active:bg-zinc-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-zinc-200/80 px-6 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-zinc-100">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn-dark w-full min-h-[44px] flex items-center justify-center gap-2 text-sm font-medium shadow-sm active:scale-[0.98]"
            >
              <span>{t.nav.talkBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
