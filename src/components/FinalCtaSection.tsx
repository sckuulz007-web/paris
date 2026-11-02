import React from 'react';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Flame } from 'lucide-react';
import { ProductVariant, PRODUCT_PRICE, CHECKOUT_URL } from '../data/productData';

interface FinalCtaSectionProps {
  selectedVariant: ProductVariant;
  onGoToOffer: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ selectedVariant, onGoToOffer }) => {
  return (
    <section className="py-20 bg-[#171717] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C68A45]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#232323] via-[#1d1d1d] to-[#171717] border border-[#353535] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#292929] border border-[#3d3d3d] text-xs font-semibold text-[#D8C7AE] mb-4">
                <Flame className="w-3.5 h-3.5 text-[#C68A45]" />
                Paris Laurent • Luxo Europeu e Sofisticação
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat'] leading-[1.15]">
                Renove seu visual com conforto e personalidade.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#D8C7AE]/90 font-light leading-relaxed max-w-xl">
                Conheça o conjunto Paris Laurent e escolha o tamanho ideal para você nos dias mais frios. Blusa de moletom com capuz e bolso canguru, acompanhada de calça jogger com forro flanelado peluciado.
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F7F7F5] font-['Montserrat']">
                  R$ {PRODUCT_PRICE.promotionalPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-xs text-[#D8C7AE] font-semibold px-2.5 py-1 rounded bg-[#C68A45]/20 border border-[#C68A45]/30">
                  R$ {PRODUCT_PRICE.pixPrice.toFixed(2).replace('.', ',')} à vista no Pix
                </span>
                <span className="text-xs text-[#8c8c8c]">
                  ou até 12x
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={CHECKOUT_URL}
                  className="px-8 py-4 rounded-xl bg-[#C68A45] hover:bg-[#b27937] active:bg-[#9e6b2f] text-white font-extrabold text-base uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl shadow-[#C68A45]/25 flex items-center justify-center gap-3 cursor-pointer text-center"
                >
                  <span>GARANTIR MEU CONJUNTO AGORA</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Badges */}
              <div className="mt-8 pt-6 border-t border-[#2d2d2d] grid grid-cols-3 gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2 text-xs text-[#999]">
                  <ShieldCheck className="w-4 h-4 text-[#C68A45] shrink-0" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#999]">
                  <Truck className="w-4 h-4 text-[#C68A45] shrink-0" />
                  <span>Envio com Rastreio</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#999]">
                  <RefreshCw className="w-4 h-4 text-[#C68A45] shrink-0" />
                  <span>Troca sem complicação</span>
                </div>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-b from-[#282828] to-[#141414] rounded-2xl border border-[#383838] p-4 flex items-center justify-center overflow-hidden shadow-2xl group">
                <img
                  src={selectedVariant.image}
                  alt="Conjunto Paris Flanelado"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-lg bg-[#111111]/90 backdrop-blur-md border border-[#333] text-center text-xs text-[#D8C7AE] font-medium">
                  {selectedVariant.name}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
