import React, { useState } from 'react';
import { Check, ShieldCheck, Truck, RefreshCw, Flame, ArrowRight, Eye } from 'lucide-react';
import { ProductVariant, PRODUCT_VARIANTS, PRODUCT_PRICE, CHECKOUT_URL } from '../data/productData';

interface HeroProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onCtaClick: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedVariant,
  onSelectVariant,
  onCtaClick,
  onOpenLightbox
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#171717] pt-8 pb-16 md:pt-12 md:pb-24 border-b border-[#292929]">
      {/* Subtle ambient luxury backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C68A45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#292929]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Copy, Benefits & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#292929] border border-[#3d3d3d] text-xs font-semibold text-[#D8C7AE] mb-5 tracking-wide uppercase">
              <Flame className="w-3.5 h-3.5 text-[#C68A45]" />
              Paris Laurent • Luxo Europeu e Sofisticação
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#F7F7F5] leading-[1.12] tracking-tight uppercase font-['Montserrat']">
              Seu estilo. <br />
              Seu conforto. <br />
              <span className="text-[#C68A45]">Seu novo conjunto favorito.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-[#D8C7AE]/90 leading-relaxed max-w-2xl font-light">
              Conheça o conjunto masculino Paris Laurent: blusa e calça em um corte exclusivo com a essência do luxo europeu e sofisticação, com interior flanelado para adicionar conforto à sua rotina nos dias mais frios.
            </p>

            {/* Highlighted Benefits Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#222222] border border-[#2e2e2e]">
                <div className="w-5 h-5 rounded-full bg-[#C68A45]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C68A45]" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#F7F7F5] block font-semibold">Conjunto completo:</strong>
                  <span className="text-[#A5A5A5]">Blusa com capuz + calça jogger coordenadas</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#222222] border border-[#2e2e2e]">
                <div className="w-5 h-5 rounded-full bg-[#C68A45]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C68A45]" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#F7F7F5] block font-semibold">Estilo casual e urbano:</strong>
                  <span className="text-[#A5A5A5]">Design minimalista com estampa Paris</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#222222] border border-[#2e2e2e]">
                <div className="w-5 h-5 rounded-full bg-[#C68A45]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C68A45]" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#F7F7F5] block font-semibold">Interior flanelado/peluciado:</strong>
                  <span className="text-[#A5A5A5]">Sensação aveludada e aconchego térmico</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#222222] border border-[#2e2e2e]">
                <div className="w-5 h-5 rounded-full bg-[#C68A45]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C68A45]" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#F7F7F5] block font-semibold">Combinação prática:</strong>
                  <span className="text-[#A5A5A5]">Visual pronto sem perder tempo combinando</span>
                </div>
              </div>
            </div>

            {/* Price Preview & Action */}
            <div className="mt-8 p-5 rounded-xl bg-[#202020] border border-[#333333] shadow-inner">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs text-[#8c8c8c] line-through block">
                    De R$ {PRODUCT_PRICE.regularPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#F7F7F5] font-['Montserrat']">
                      R$ {PRODUCT_PRICE.promotionalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#C68A45]/20 text-[#D8C7AE] border border-[#C68A45]/30">
                      R$ {PRODUCT_PRICE.pixPrice.toFixed(2).replace('.', ',')} no Pix (5% OFF)
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#B8B8B8] font-medium self-end">
                  ou {PRODUCT_PRICE.installments}
                </span>
              </div>

              {/* Color swatches preview */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[#D8C7AE] font-medium">
                    Cor selecionada: <strong className="text-white">{selectedVariant.name}</strong>
                  </span>
                  <span className="text-[#888] text-[11px]">8 combinações</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_VARIANTS.map((variant) => {
                    const isSelected = variant.id === selectedVariant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => onSelectVariant(variant)}
                        title={variant.name}
                        className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 cursor-pointer ${
                          isSelected
                            ? 'border-[#C68A45] scale-110 shadow-[0_0_10px_rgba(198,138,69,0.5)]'
                            : 'border-[#444] hover:border-[#888]'
                        }`}
                      >
                        <span
                          className="block w-full h-full rounded-full"
                          style={{ backgroundColor: variant.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main CTA Button */}
              <a
                href={CHECKOUT_URL}
                className="w-full py-4 px-6 rounded-lg bg-[#C68A45] hover:bg-[#b27937] active:bg-[#9e6b2f] text-white font-extrabold text-base uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#C68A45]/25 flex items-center justify-center gap-3 cursor-pointer group text-center"
              >
                <span>QUERO MEU CONJUNTO</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Verified Trust Badges */}
            <div className="mt-5 grid grid-cols-3 gap-2 text-center pt-2 border-t border-[#252525]">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A5A5A5]">
                <ShieldCheck className="w-4 h-4 text-[#C68A45] shrink-0" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A5A5A5]">
                <Truck className="w-4 h-4 text-[#C68A45] shrink-0" />
                <span>Envio com Rastreio</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A5A5A5]">
                <RefreshCw className="w-4 h-4 text-[#C68A45] shrink-0" />
                <span>Troca Fácil em 7 Dias</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Real Product Photography & Interactive Showcase */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-[#252525] to-[#1c1c1c] border border-[#333333] shadow-2xl p-4 sm:p-6 group">
              
              {/* Product Badge */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-1.5">
                <span className="px-3 py-1 rounded bg-[#171717]/90 backdrop-blur-sm border border-[#C68A45]/40 text-[#D8C7AE] text-xs font-bold tracking-wider uppercase">
                  {selectedVariant.tag}
                </span>
                {selectedVariant.badge && (
                  <span className="px-2.5 py-0.5 rounded bg-[#C68A45] text-white text-[11px] font-bold tracking-wide uppercase self-start">
                    {selectedVariant.badge}
                  </span>
                )}
              </div>

              {/* Zoom Trigger */}
              <button
                onClick={() => onOpenLightbox(selectedVariant.image, selectedVariant.name)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-[#171717]/80 hover:bg-[#171717] text-[#F7F7F5] border border-[#3a3a3a] transition-all hover:scale-105 cursor-pointer"
                title="Ampliar fotografia"
                aria-label="Ampliar imagem do produto"
              >
                <Eye className="w-4 h-4 text-[#D8C7AE]" />
              </button>

              {/* Main Image with smooth transition */}
              <div className="relative w-full aspect-[4/5] flex items-center justify-center overflow-hidden rounded-xl bg-[#111111]/60">
                <img
                  key={selectedVariant.id}
                  src={selectedVariant.image}
                  alt={`Conjunto Moletom Paris Flanelado - ${selectedVariant.name}`}
                  className={`w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 ease-out group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Floating pill: Spec confirmation */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-[#171717]/90 backdrop-blur-md border border-[#333333] rounded-lg text-center">
                  <p className="text-xs text-[#D8C7AE] font-medium flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C68A45]"></span>
                    Blusa e Calça inclusas • Forro interno flanelado
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#8c8c8c] px-1">
                <span>Fotografia real do produto</span>
                <span className="text-[#D8C7AE] font-medium">{selectedVariant.shortName}</span>
              </div>
            </div>

            {/* Quick mini-strip under hero image for mobile convenience */}
            <div className="mt-3 flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
              <span className="text-[11px] text-[#888] shrink-0 font-medium">Toque para ver:</span>
              {PRODUCT_VARIANTS.slice(0, 5).map((v) => (
                <button
                  key={v.id}
                  onClick={() => onSelectVariant(v)}
                  className={`px-2 py-0.5 text-[11px] rounded transition-colors shrink-0 ${
                    v.id === selectedVariant.id
                      ? 'bg-[#C68A45] text-white font-bold'
                      : 'bg-[#252525] text-[#bbb] hover:text-white'
                  }`}
                >
                  {v.shortName}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
