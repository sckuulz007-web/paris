import React from 'react';
import { Wind, Layers, Sparkles, Shield, ThermometerSnowflake } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-[#171717] border-b border-[#292929] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C68A45] uppercase tracking-widest block mb-2">
            Paris Laurent • Luxo Europeu e Sofisticação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Feito para combinar com a sua rotina.
          </h2>
          <div className="w-16 h-0.5 bg-[#C68A45] mx-auto mt-4" />
        </div>

        {/* 3 Main Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Bloco 1 — Conforto para os dias frios */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#222222] to-[#1a1a1a] border border-[#303030] p-8 flex flex-col justify-between hover:border-[#C68A45]/50 transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#292929] border border-[#3d3d3d] flex items-center justify-center text-[#C68A45] mb-6 group-hover:scale-110 group-hover:bg-[#C68A45] group-hover:text-white transition-all duration-300">
                <ThermometerSnowflake className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#C68A45] block mb-2">
                Bloco 01 • Conforto Térmico
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F7F5] mb-4 font-['Montserrat']">
                Conforto para os dias frios
              </h3>
              
              <p className="text-sm text-[#D8C7AE]/85 leading-relaxed font-light">
                Uma proposta de roupa casual com interior flanelado para proporcionar uma sensação mais aconchegante nos dias de temperatura baixa.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#2d2d2d] flex items-center gap-2 text-xs text-[#8c8c8c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C68A45]"></span>
              <span>Toque peluciado suave em contato com a pele</span>
            </div>
          </div>

          {/* Bloco 2 — Visual completo sem complicação */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#222222] to-[#1a1a1a] border border-[#303030] p-8 flex flex-col justify-between hover:border-[#C68A45]/50 transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#292929] border border-[#3d3d3d] flex items-center justify-center text-[#C68A45] mb-6 group-hover:scale-110 group-hover:bg-[#C68A45] group-hover:text-white transition-all duration-300">
                <Layers className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#C68A45] block mb-2">
                Bloco 02 • Coordenação
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F7F5] mb-4 font-['Montserrat']">
                Visual completo sem complicação
              </h3>
              
              <p className="text-sm text-[#D8C7AE]/85 leading-relaxed font-light">
                Blusa e calça coordenadas para facilitar a composição de um look masculino moderno.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#2d2d2d] flex items-center gap-2 text-xs text-[#8c8c8c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C68A45]"></span>
              <span>Zero esforço para compor seu look diário</span>
            </div>
          </div>

          {/* Bloco 3 — Estilo urbano */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#222222] to-[#1a1a1a] border border-[#303030] p-8 flex flex-col justify-between hover:border-[#C68A45]/50 transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#292929] border border-[#3d3d3d] flex items-center justify-center text-[#C68A45] mb-6 group-hover:scale-110 group-hover:bg-[#C68A45] group-hover:text-white transition-all duration-300">
                <Sparkles className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#C68A45] block mb-2">
                Bloco 03 • Identidade Streetwear
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F7F5] mb-4 font-['Montserrat']">
                Estilo urbano
              </h3>
              
              <p className="text-sm text-[#D8C7AE]/85 leading-relaxed font-light">
                A estampa Paris acrescenta personalidade ao visual e combina com uma proposta casual.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#2d2d2d] flex items-center gap-2 text-xs text-[#8c8c8c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C68A45]"></span>
              <span>Tipografia moderna com faixa degradê marcante</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
