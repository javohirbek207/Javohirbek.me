import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { portfolioContent } from '../data/portfolioData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof portfolioContent['uz'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('jm_portfolio_lang');
      if (saved === 'uz' || saved === 'en') {
        return saved;
      }
    }
    return 'en'; // Match default <html lang="en"> metadata for SEO & crawlers
  });

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('jm_portfolio_lang', language);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'uz' ? 'en' : 'uz'));
  };

  const t = portfolioContent[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
