import React, { useState, useEffect } from 'react';
import { ShoppingBag, ShieldCheck, Ruler, HelpCircle, Menu, X } from 'lucide-react';
import { CHECKOUT_URL } from '../data/productData';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
  onSelectSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartCount, onSelectSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* SEÇÃO 1 — BARRA SUPERIOR */}
      <div className="bg-[#111111] border-b border-[#292929] text-xs font-medium text-[#D8C7AE] py-2 px-4 text-center tracking-wider uppercase transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C68A45] animate-pulse"></span>
          <span>Estilo e conforto para acompanhar sua rotina.</span>
          <span className="hidden sm:inline-block text-[#777]">•</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[#F7F7F5]/80 normal-case">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C68A45]" />
            Garantia incondicional de 7 dias
          </span>
        </div>
      </div>

      {/* Main Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-lg border-b border-[#292929]'
            : 'bg-[#171717] border-b border-[#232323]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <div
            onClick={() => scrollTo('hero')}
            className="cursor-pointer flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-sm bg-[#292929] border border-[#C68A45]/40 flex items-center justify-center font-black text-xs tracking-wider text-[#F7F7F5] group-hover:border-[#C68A45] transition-colors">
              PL
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest text-base uppercase text-[#F7F7F5] font-['Montserrat']">
                PARIS <span className="text-[#C68A45]">LAURENT</span>
              </span>
              <span className="text-[10px] tracking-wider text-[#D8C7AE]/90 uppercase font-medium -mt-1">
                Luxo europeu e sofisticação
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#D8C7AE]/90">
            <button
              onClick={() => scrollTo('galeria')}
              className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
            >
              Galeria de Cores
            </button>
            <button
              onClick={() => scrollTo('beneficios')}
              className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollTo('detalhes')}
              className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
            >
              Ficha Técnica
            </button>
            <button
              onClick={() => scrollTo('depoimentos')}
              className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollTo('medidas')}
              className="hover:text-[#F7F7F5] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-[#C68A45]" />
              Guia de Tamanhos
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="hover:text-[#F7F7F5] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              Dúvidas
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={CHECKOUT_URL}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#C68A45] hover:bg-[#b27937] text-white rounded transition-all shadow-sm cursor-pointer"
            >
              Comprar Agora
            </a>

            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-md bg-[#292929] hover:bg-[#333333] border border-[#3a3a3a] text-[#F7F7F5] transition-colors cursor-pointer"
              aria-label="Ver sacola de compras"
            >
              <ShoppingBag className="w-5 h-5 text-[#D8C7AE]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C68A45] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#D8C7AE] hover:text-[#F7F7F5] cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1f1f1f] border-b border-[#2e2e2e] px-4 pt-3 pb-5 space-y-3">
            <button
              onClick={() => scrollTo('galeria')}
              className="block w-full text-left py-2 text-sm text-[#D8C7AE] hover:text-white"
            >
              Galeria de Cores (8 opções)
            </button>
            <button
              onClick={() => scrollTo('beneficios')}
              className="block w-full text-left py-2 text-sm text-[#D8C7AE] hover:text-white"
            >
              Benefícios do Moletom Flanelado
            </button>
            <button
              onClick={() => scrollTo('detalhes')}
              className="block w-full text-left py-2 text-sm text-[#D8C7AE] hover:text-white"
            >
              Detalhes & Ficha Técnica
            </button>
            <button
              onClick={() => scrollTo('depoimentos')}
              className="block w-full text-left py-2 text-sm text-[#D8C7AE] hover:text-white"
            >
              Depoimentos de Clientes (4.9 ★)
            </button>
            <button
              onClick={() => scrollTo('medidas')}
              className="block w-full text-left py-2 text-sm text-[#D8C7AE] hover:text-white flex items-center gap-2"
            >
              <Ruler className="w-4 h-4 text-[#C68A45]" />
              Guia de Tamanhos
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="block w-full text-left py-2 text-sm text-[#D8C7AE] hover:text-white"
            >
              Perguntas Frequentes
            </button>
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-[#C68A45] hover:bg-[#b27937] text-white rounded text-center block cursor-pointer"
              >
                Comprar Agora (Ir para o Checkout)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
