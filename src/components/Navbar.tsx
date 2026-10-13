import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
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
      const navOffset = 76;
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
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#121214] border border-white/10 group-hover:border-accent-neon/50 transition-colors">
              <span className="font-mono font-bold text-accent-neon text-xs tracking-tight">JM</span>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-neon animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-accent-neon transition-colors">
                Javohirbek Maxmudov
              </span>
              <span className="text-[11px] text-content-subtle font-mono">
                Developer & Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121214]/70 border border-white/[0.08] backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'bg-accent-neon text-black font-semibold shadow-glow-sm'
                      : 'text-content-muted hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Quick CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-content-main hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-accent-neon" />
              <span className={language === 'uz' ? 'text-accent-neon font-bold' : 'text-content-muted'}>UZ</span>
              <span className="text-white/20">/</span>
              <span className={language === 'en' ? 'text-accent-neon font-bold' : 'text-content-muted'}>EN</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-accent-neon hover:text-black text-white border border-white/15 hover:border-accent-neon text-xs font-semibold transition-all duration-200 group shadow-sm"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-neon"
            >
              <Globe className="w-3 h-3 text-accent-neon" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyu"
              className="w-10 h-10 rounded-xl bg-[#121214] border border-white/10 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-accent-neon"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/10 px-5 pt-4 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-accent-neon/10 text-accent-neon border border-accent-neon/30 font-semibold'
                    : 'text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 rounded-xl bg-accent-neon text-black font-semibold text-sm shadow-glow-sm"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
