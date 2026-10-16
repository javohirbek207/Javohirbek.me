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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 68;
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
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo — compact on mobile */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none min-h-[44px]"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#121214] border border-white/10 group-hover:border-accent-neon/50 transition-colors shrink-0">
              <span className="font-mono font-bold text-accent-neon text-[11px] sm:text-xs tracking-tight">JM</span>
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-neon animate-pulse" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] sm:text-sm font-semibold tracking-tight text-white group-hover:text-accent-neon transition-colors truncate">
                Javohirbek M.
              </span>
              <span className="text-[10px] sm:text-[11px] text-content-subtle font-mono truncate hidden xs:block">
                Developer & Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121214]/70 border border-white/[0.08] backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
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

          {/* Desktop: Language + CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-content-main hover:text-white transition-colors min-h-[36px]"
            >
              <Globe className="w-3.5 h-3.5 text-accent-neon" />
              <span className={language === 'uz' ? 'text-accent-neon font-bold' : 'text-content-muted'}>UZ</span>
              <span className="text-white/20">/</span>
              <span className={language === 'en' ? 'text-accent-neon font-bold' : 'text-content-muted'}>EN</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-accent-neon hover:text-black text-white border border-white/15 hover:border-accent-neon text-xs font-semibold transition-all duration-200 group shadow-sm min-h-[36px]"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile: Language Toggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-neon min-h-[40px] min-w-[40px] justify-center"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              className="w-10 h-10 rounded-xl bg-[#121214] border border-white/10 flex items-center justify-center text-white focus:outline-none active:bg-white/[0.08] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-[#050505]/98 backdrop-blur-2xl z-40 flex flex-col animate-fadeIn">
          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`flex items-center justify-between min-h-[52px] px-5 rounded-2xl text-base font-medium transition-colors active:scale-[0.98] ${
                    isActive 
                      ? 'bg-accent-neon/10 text-accent-neon border border-accent-neon/30 font-semibold'
                      : 'text-white hover:bg-white/[0.05] active:bg-white/[0.08]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-accent-neon shrink-0" />}
                </a>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-8 pt-3 border-t border-white/[0.08]" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full min-h-[52px] flex items-center justify-center gap-2.5 rounded-2xl bg-accent-neon text-black font-bold text-base shadow-glow-sm active:scale-[0.97] transition-transform"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
