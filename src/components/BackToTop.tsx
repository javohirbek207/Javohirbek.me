import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Sahifa yuqorisiga qaytish"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-[#121215]/90 border border-white/10 hover:border-accent-neon/50 active:scale-95 text-accent-neon backdrop-blur-md shadow-lg shadow-black/50 flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-neon animate-fadeIn"
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1.5rem + env(safe-area-inset-right, 0px))'
      }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
