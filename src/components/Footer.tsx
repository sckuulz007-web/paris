import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Mail, Phone, Lock } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-[#111111] border-t border-[#222222] text-[#8c8c8c] text-xs pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded bg-[#222] border border-[#C68A45]/40 flex items-center justify-center font-black text-xs tracking-wider text-white">
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
            <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
              Luxo europeu e sofisticação em moda masculina contemporânea, com foco em conforto, caimento impecável e elegância para os dias frios.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#A0A0A0]">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ambiente de Navegação Seguro SSL</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D8C7AE]">
              Navegação Rápida
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('galeria')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Galeria de Cores (8 opções)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('beneficios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Benefícios do Tecido Flanelado
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('detalhes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ficha Técnica do Moletom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('depoimentos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Depoimentos de Clientes (4.9 ★)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('medidas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Guia de Medidas & Tamanhos
                </button>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D8C7AE]">
              Garantias e Políticas
            </h5>
            <ul className="space-y-2 text-xs text-[#A0A0A0]">
              <li className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#C68A45]" />
                <span>7 dias de garantia para troca ou devolução</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#C68A45]" />
                <span>Envio rastreado de ponta a ponta</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C68A45]" />
                <span>Pagamento processado com segurança</span>
              </li>
            </ul>
          </div>

          {/* Contact / Service */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D8C7AE]">
              Atendimento Oficial
            </h5>
            <div className="space-y-2 text-xs text-[#A0A0A0]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C68A45]" />
                <span>contato@parislaurent.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C68A45]" />
                <span>Segunda a Sexta, das 09h às 18h</span>
              </div>
              <p className="text-[11px] text-[#666] pt-1">
                Suporte dedicado para tirar dúvidas sobre caimento antes ou depois do pedido.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666]">
          <p>© {new Date().getFullYear()} Paris Laurent. Todos os direitos reservados. Conjunto de Moletom Masculino Paris Laurent Flanelado.</p>
          <div className="flex items-center gap-4">
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Política de Privacidade</span>
            <span>•</span>
            <span>Trocas e Devoluções</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
