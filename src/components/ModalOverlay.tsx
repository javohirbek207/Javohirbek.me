import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

export type ModalType = 'about' | 'skills' | 'projects' | 'contact' | null;

interface ModalOverlayProps {
  type: ModalType;
  onClose: () => void;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-10 my-auto border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="sticky top-0 float-right z-30 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Content */}
        <div className="clear-both pt-2">
          {type === 'about' && <About />}
          {type === 'skills' && <Skills />}
          {type === 'projects' && <Projects />}
          {type === 'contact' && <Contact />}
        </div>
      </div>
    </div>
  );
};
