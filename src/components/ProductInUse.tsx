import React, { useState } from 'react';
import { Compass, Coffee, Plane, CloudSnow, ArrowRight, Eye } from 'lucide-react';
import { ProductVariant, PRODUCT_VARIANTS, CHECKOUT_URL } from '../data/productData';

interface ProductInUseProps {
  onSelectVariant: (variant: ProductVariant) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
  onGoToOffer: () => void;
}

export const ProductInUse: React.FC<ProductInUseProps> = ({
  onSelectVariant,
  onOpenLightbox,
  onGoToOffer
}) => {
  const [activeMoment, setActiveMoment] = useState<number>(0);

  const moments = [
    {
      title: 'Passeio casual',
      icon: Compass,
      variantId: 'beige-black',
      tag: 'Tardes de Outono e Café',
      description: 'Perfeito para saídas com amigos, finais de semana na cidade e eventos descontraídos. O contraste entre o bege e a calça preta confere sofisticação despretensiosa.',
      highlight: 'Caimento jogger alinhado ao tênis casual'
    },
    {
      title: 'Dia de descanso',
      icon: Coffee,
      variantId: 'grey-black',
      tag: 'Conforto Máximo em Casa',
      description: 'Ideal para momentos de pausa e relaxamento sem perder o estilo. O tecido interno flanelado mantém o corpo aquecido com suavidade incomparável.',
      highlight: 'Toque aveludado que não pinica'
    },
    {
      title: 'Viagem & Aeroporto',
      icon: Plane,
      variantId: 'navy-black',
      tag: 'Comodidade em Deslocamentos',
      description: 'A praticidade de um conjunto completo para encarar horas de voo, estrada ou trens. O bolso canguru permite guardar fones e celular com facilidade.',
      highlight: 'Mobilidade sem amassar fácil'
    },
    {
      title: 'Rotina urbana em clima frio',
      icon: CloudSnow,
      variantId: 'black-black',
      tag: 'Proteção nos Dias Baixos',
      description: 'Encare o vento e a queda de temperatura matinal ou noturna com o capuz anatômico duplo e a proteção térmica da flanela interna.',
      highlight: 'Capuz com cordão de ajuste anatômico'
    }
  ];

  const currentMoment = moments[activeMoment];
  const currentVariant = PRODUCT_VARIANTS.find(v => v.id === currentMoment.variantId) || PRODUCT_VARIANTS[0];

  return (
    <section className="py-20 bg-[#141414] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#C68A45] uppercase tracking-widest block mb-2">
            Paris Laurent • Luxo Europeu e Sofisticação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Um conjunto. Diferentes momentos.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/80 font-light">
            Desenvolvido para acompanhar o homem contemporâneo em qualquer ocasião do cotidiano nos dias frios.
          </p>
        </div>

        {/* Tab selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {moments.map((m, idx) => {
            const Icon = m.icon;
            const isActive = activeMoment === idx;
            return (
              <button
                key={m.title}
                onClick={() => setActiveMoment(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col gap-2 ${
                  isActive
                    ? 'bg-[#252525] border-[#C68A45] shadow-lg shadow-[#C68A45]/10'
                    : 'bg-[#1c1c1c] border-[#2c2c2c] hover:border-[#444] text-[#888]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#C68A45]' : 'text-[#777]'}`} />
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#C68A45]' : 'text-[#555]'}`}>
                    0{idx + 1}
                  </span>
                </div>
                <span className={`text-sm font-bold uppercase tracking-wide ${isActive ? 'text-[#F7F7F5]' : 'text-[#bbb]'}`}>
                  {m.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase of Selected Moment */}
        <div className="bg-[#1c1c1c] rounded-2xl border border-[#2f2f2f] overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Moment Description */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#292929] border border-[#3d3d3d] text-xs font-semibold text-[#D8C7AE]">
                <currentMoment.icon className="w-3.5 h-3.5 text-[#C68A45]" />
                {currentMoment.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F7F5] font-['Montserrat'] uppercase">
                {currentMoment.title}
              </h3>

              <p className="text-sm sm:text-base text-[#D8C7AE]/90 leading-relaxed font-light">
                {currentMoment.description}
              </p>

              {/* Highlight feature */}
              <div className="p-4 rounded-xl bg-[#242424] border border-[#353535] flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C68A45] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#F7F7F5]">
                  Destaque no caimento: <strong className="text-[#D8C7AE]">{currentMoment.highlight}</strong>
                </span>
              </div>

              {/* CTA for this variant */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={CHECKOUT_URL}
                  onClick={() => onSelectVariant(currentVariant)}
                  className="px-6 py-3 rounded-lg bg-[#C68A45] hover:bg-[#b27937] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md text-center"
                >
                  <span>Garantir {currentVariant.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenLightbox(currentVariant.image, currentVariant.name)}
                  className="px-4 py-3 rounded-lg bg-[#292929] hover:bg-[#333] text-[#F7F7F5] text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#C68A45]" />
                  <span>Ver Foto Ampliada</span>
                </button>
              </div>
            </div>

            {/* Right: Real Photograph Display */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-[#252525] to-[#161616] rounded-xl border border-[#383838] p-4 sm:p-6 flex items-center justify-center overflow-hidden group shadow-xl">
                <img
                  src={currentVariant.image}
                  alt={`Conjunto Paris em uso: ${currentMoment.title}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#111111]/80 backdrop-blur-sm text-[11px] text-[#D8C7AE] border border-[#333]">
                  Fotografia Real • {currentVariant.shortName}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
