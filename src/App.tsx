import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AnalyticsShowcase } from './components/AnalyticsShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white antialiased relative overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AnalyticsShowcase />
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
