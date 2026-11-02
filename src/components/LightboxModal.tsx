import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Check } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-3 rounded-full bg-[#242424] text-[#F7F7F5] hover:bg-[#333] transition-colors border border-[#3e3e3e] z-10 cursor-pointer"
        aria-label="Fechar ampliação"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        {/* Header */}
        <div className="w-full text-center mb-3">
          <span className="text-xs text-[#C68A45] font-semibold uppercase tracking-wider block">
            Fotografia Oficial em Alta Resolução
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#F7F7F5] font-['Montserrat']">
            {title}
          </h4>
        </div>

        {/* Image wrapper */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 rounded-2xl bg-[#191919] border border-[#333]">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[70vh] max-w-full object-contain select-none"
          />
        </div>

        {/* Footer note */}
        <div className="mt-3 flex items-center gap-2 text-xs text-[#A0A0A0]">
          <Check className="w-4 h-4 text-[#C68A45]" />
          <span>Peças reais incluídas: Blusa com Capuz & Bolso Canguru + Calça Jogger com Punho e Cordão</span>
        </div>
      </div>
    </div>
  );
};
