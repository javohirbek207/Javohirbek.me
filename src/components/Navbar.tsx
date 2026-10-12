import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
      const navOffset = 80;
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
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#121214] border border-white/10 group-hover:border-accent-neon/50 transition-colors">
              <span className="font-mono font-bold text-accent-neon text-sm">JM</span>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-neon animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-accent-neon transition-colors">
                Javohirbek Maxmutov
              </span>
              <span className="text-[11px] text-content-subtle">
                Data Analyst & Web Developer
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
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
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

          {/* Right Action: Language Switcher & Quick Contact */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              aria-label="Tilni o'zgartirish"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-content-main hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-accent-neon" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-4 py-1.5 rounded-lg bg-accent-neon text-black font-semibold text-xs hover:bg-[#4dff96] transition-all shadow-glow-sm"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Menu Button & Lang */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-white"
            >
              <Globe className="w-3 h-3 text-accent-neon" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyu"
              className="w-9 h-9 rounded-xl bg-[#121214] border border-white/10 flex items-center justify-center text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/10 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block w-full py-2.5 text-center rounded-xl bg-accent-neon text-black font-semibold text-sm"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
