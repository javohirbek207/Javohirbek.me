import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModalOverlay, ModalType } from './components/ModalOverlay';

function PortfolioApp() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="h-screen w-full bg-white text-zinc-900 selection:bg-black selection:text-white antialiased relative overflow-hidden">
      {/* Navigation */}
      <Navbar onOpenModal={(section) => setActiveModal(section as ModalType)} />

      {/* Main Full-Screen Hero Dashboard (Pure Bazil.fr style: Only the Creator photo & dashboard) */}
      <main className="h-full w-full">
        <Hero onOpenModal={(section) => setActiveModal(section as ModalType)} />
      </main>

      {/* Elegant Editorial Modal for Projects, About, Skills, Contact */}
      <ModalOverlay
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
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
