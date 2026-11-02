import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, Shirt, Check, Info } from 'lucide-react';
import { TECH_SPECS, PRODUCT_VARIANTS, ProductVariant } from '../data/productData';

interface DetailsSectionProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'specs'>('visual');

  const detailFeatures = [
    {
      title: 'Estampa e Acabamento Visual',
      description: 'Tipografia minimalista "PARIS" gravada no tórax com elegante bloco degradê vermelho. O mesmo elemento visual é reproduzido com harmonia na coxa esquerda da calça.',
      badge: 'Visual Exclusivo',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__2__cdb904cb.jpeg'
    },
    {
      title: 'Interior Flanelado / Peluciado',
      description: 'Revestimento interno com toque flanelado de alto conforto. Cria uma barreira térmica suave que preserva o calor natural do corpo sem causar sensação abafada.',
      badge: 'Sensação Aveludada',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03__3__25484c0d.jpeg'
    },
    {
      title: 'Blusa Moletom com Capuz & Canguru',
      description: 'Capuz duplo com cordão de ajuste anatômico e bolso canguru frontal amplo e ergonômico, ideal para apoiar as mãos ou carregar itens essenciais no cotidiano.',
      badge: 'Praticidade Diária',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__1__fb92d36a.jpeg'
    },
    {
      title: 'Calça Jogger com Cós Ajustável',
      description: 'Cós com elástico encorpado reforçado por cordão de amarrar na cintura. Punhos canelados nos tornozelos garantem caimento perfeito sobre qualquer tênis.',
      badge: 'Ajuste Impecável',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03__1__f1a106c4.jpeg'
    }
  ];

  return (
    <section id="detalhes" className="py-20 bg-[#171717] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#C68A45] uppercase tracking-widest block mb-2">
            Luxo Europeu e Sofisticação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Conheça cada detalhe do conjunto Paris Laurent.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/80 font-light">
            Transparência e fidelidade total às peças que você vai receber na sua casa.
          </p>

          {/* Toggle Tab */}
          <div className="mt-8 inline-flex p-1 rounded-lg bg-[#222] border border-[#333] text-xs font-medium">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-5 py-2.5 rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'visual'
                  ? 'bg-[#C68A45] text-white shadow font-semibold'
                  : 'text-[#D8C7AE] hover:text-white'
              }`}
            >
              <Shirt className="w-4 h-4" />
              <span>Destaques da Construção</span>
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-2.5 rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'specs'
                  ? 'bg-[#C68A45] text-white shadow font-semibold'
                  : 'text-[#D8C7AE] hover:text-white'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>Ficha Técnica Completa</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Visual Composition */}
        {activeTab === 'visual' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailFeatures.map((detail, index) => (
              <div
                key={detail.title}
                className="rounded-2xl bg-[#1f1f1f] border border-[#2e2e2e] overflow-hidden hover:border-[#C68A45]/40 transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Photo */}
                <div
                  onClick={() => onOpenLightbox(detail.image, detail.title)}
                  className="sm:w-1/2 relative bg-gradient-to-b from-[#282828] to-[#1a1a1a] p-4 flex items-center justify-center cursor-zoom-in overflow-hidden"
                >
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-48 sm:h-full object-contain transition-transform duration-500 group-hover:scale-108"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#111]/85 text-[10px] font-bold text-[#D8C7AE] uppercase tracking-wide border border-[#333]">
                    {detail.badge}
                  </span>
                </div>

                {/* Text Content */}
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#C68A45] font-bold block mb-1">
                      PARTE 0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#F7F7F5] uppercase mb-2 font-['Montserrat']">
                      {detail.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light">
                      {detail.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#2d2d2d] flex items-center gap-1.5 text-xs text-[#D8C7AE]">
                    <Check className="w-3.5 h-3.5 text-[#C68A45]" />
                    <span>Conforme especificação real</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Technical Specifications Table */}
        {activeTab === 'specs' && (
          <div className="max-w-4xl mx-auto bg-[#1f1f1f] border border-[#333] rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 bg-[#262626] border-b border-[#353535] flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F7F7F5] uppercase font-['Montserrat']">
                  Ficha Técnica do Produto
                </h3>
                <p className="text-xs text-[#D8C7AE]/80 mt-0.5">
                  Informações confirmadas sobre confecção, materiais e especificações oficiais.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#171717] text-xs font-semibold text-[#C68A45] border border-[#3d3d3d]">
                100% Verificado
              </span>
            </div>

            <div className="divide-y divide-[#2a2a2a]">
              {TECH_SPECS.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-4 text-xs sm:text-sm ${
                    i % 2 === 0 ? 'bg-[#1e1e1e]' : 'bg-[#1b1b1b]'
                  }`}
                >
                  <div className="font-semibold text-[#D8C7AE] sm:col-span-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68A45]" />
                    {spec.label}
                  </div>
                  <div className="text-[#F7F7F5]/90 sm:col-span-2 mt-1 sm:mt-0 font-light">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="p-4 bg-[#171717] border-t border-[#2e2e2e] text-center text-xs text-[#8c8c8c]">
              Nota: Todas as fotos apresentadas são reais do produto e refletem as 8 opções de cor comercializadas.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
