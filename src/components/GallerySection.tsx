import React, { useState } from 'react';
import { Eye, CheckCircle2, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { ProductVariant, PRODUCT_VARIANTS, CHECKOUT_URL } from '../data/productData';

interface GallerySectionProps {
  onSelectVariant: (variant: ProductVariant) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
  onGoToOffer: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectVariant,
  onOpenLightbox,
  onGoToOffer
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'neutral' | 'vibrant'>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredVariants = PRODUCT_VARIANTS.filter((variant) => {
    if (activeFilter === 'neutral') {
      return ['black-black', 'grey-black', 'beige-black', 'beige-beige', 'navy-black'].includes(variant.id);
    }
    if (activeFilter === 'vibrant') {
      return ['royal-black', 'red-black', 'rose-black'].includes(variant.id);
    }
    return true;
  });

  const handleChoose = (variant: ProductVariant) => {
    onSelectVariant(variant);
    onGoToOffer();
  };

  return (
    <section id="galeria" className="py-20 bg-[#141414] border-b border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292929] text-[#C68A45] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#383838]">
            <Layers className="w-3.5 h-3.5" />
            Galeria Oficial • 8 Combinações Reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Escolha a sua cor favorita
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/80 font-light">
            Fotografias reais das 8 variantes do conjunto Paris Laurent. Blusa de moletom com capuz e bolso canguru acompanhada de calça jogger com cós e barra ajustados.
          </p>

          {/* Filter tabs */}
          <div className="mt-8 inline-flex p-1 rounded-lg bg-[#202020] border border-[#2f2f2f] text-xs font-medium">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C68A45] text-white shadow font-semibold'
                  : 'text-[#D8C7AE] hover:text-white'
              }`}
            >
              Todas as 8 Opções
            </button>
            <button
              onClick={() => setActiveFilter('neutral')}
              className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                activeFilter === 'neutral'
                  ? 'bg-[#C68A45] text-white shadow font-semibold'
                  : 'text-[#D8C7AE] hover:text-white'
              }`}
            >
              Neutros & Clássicos (5)
            </button>
            <button
              onClick={() => setActiveFilter('vibrant')}
              className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                activeFilter === 'vibrant'
                  ? 'bg-[#C68A45] text-white shadow font-semibold'
                  : 'text-[#D8C7AE] hover:text-white'
              }`}
            >
              Tons Vivos & Streetwear (3)
            </button>
          </div>
        </div>

        {/* 8 Product Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVariants.map((variant) => (
            <div
              key={variant.id}
              onMouseEnter={() => setHoveredId(variant.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] hover:border-[#C68A45]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                <span className="px-2.5 py-0.5 rounded bg-[#111111]/90 backdrop-blur-sm text-[11px] font-semibold text-[#D8C7AE] border border-[#333]">
                  {variant.tag}
                </span>
                {variant.badge && (
                  <span className="px-2 py-0.5 rounded bg-[#C68A45] text-[10px] font-bold text-white uppercase tracking-wider">
                    {variant.badge}
                  </span>
                )}
              </div>

              {/* Zoom Button */}
              <button
                onClick={() => onOpenLightbox(variant.image, variant.name)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#111111]/80 hover:bg-[#111] text-[#F7F7F5] border border-[#333] transition-transform hover:scale-110 cursor-pointer"
                title="Ampliar imagem"
                aria-label={`Ampliar imagem do conjunto ${variant.name}`}
              >
                <Eye className="w-3.5 h-3.5 text-[#D8C7AE]" />
              </button>

              {/* Image Container */}
              <div
                onClick={() => onOpenLightbox(variant.image, variant.name)}
                className="relative w-full aspect-square bg-gradient-to-b from-[#262626] to-[#1a1a1a] p-4 flex items-center justify-center cursor-zoom-in overflow-hidden"
              >
                <img
                  src={variant.image}
                  alt={`Conjunto Moletom Paris Flanelado ${variant.name}`}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Micro hover hint */}
                <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#111]/85 backdrop-blur-sm py-1 rounded text-[10px] text-[#D8C7AE]">
                  Clique para ampliar em alta resolução
                </div>
              </div>

              {/* Info & Card Actions */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-[#1f1f1f]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: variant.hex }}
                    />
                    <h3 className="text-sm font-bold text-[#F7F7F5] truncate">
                      {variant.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A0A0A0] line-clamp-2 leading-relaxed">
                    {variant.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2d2d2d] flex items-center justify-between gap-2">
                  <div className="text-[11px] text-[#888]">
                    Blusa + Calça
                  </div>
                  <a
                    href={CHECKOUT_URL}
                    onClick={() => onSelectVariant(variant)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#292929] hover:bg-[#C68A45] text-xs font-semibold text-[#F7F7F5] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Comprar</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Confirmed Real Product Details Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#202020] via-[#242424] to-[#202020] border border-[#333333]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C68A45] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#F7F7F5] uppercase tracking-wide">
                  Estampa Paris com Degradê
                </h4>
                <p className="text-xs text-[#9c9c9c] mt-1">
                  Inscrição frontal no peito e detalhe vertical correspondente na lateral da calça.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C68A45] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#F7F7F5] uppercase tracking-wide">
                  Capuz Duplo & Bolso Canguru
                </h4>
                <p className="text-xs text-[#9c9c9c] mt-1">
                  Capuz anatômico com cordão de ajuste e bolso frontal amplo para aquecer as mãos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C68A45] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#F7F7F5] uppercase tracking-wide">
                  Interior Flanelado Macio
                </h4>
                <p className="text-xs text-[#9c9c9c] mt-1">
                  Revestimento interno flanelado de toque aveludado para conforto e retenção térmica.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C68A45] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#F7F7F5] uppercase tracking-wide">
                  Calça Jogger com Cordão
                </h4>
                <p className="text-xs text-[#9c9c9c] mt-1">
                  Cintura elástica ajustável e punhos canelados no tornozelo com caimento moderno.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
