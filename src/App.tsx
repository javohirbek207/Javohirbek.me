import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#39FF88] selection:text-black antialiased relative overflow-x-hidden">
      {/* Subtle ambient light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-b from-[#39FF88]/[0.025] to-transparent pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections: Hero -> About -> Skills -> Projects -> Contact */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}

export default App;
