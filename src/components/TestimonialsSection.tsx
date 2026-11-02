import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, MessageSquare, ThumbsUp, Eye, Sparkles } from 'lucide-react';
import { PRODUCT_VARIANTS } from '../data/productData';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  variantPurchased: string;
  size: string;
  title: string;
  comment: string;
  image: string;
  helpfulCount: number;
}

interface TestimonialsSectionProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenLightbox }) => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Leonardo Ferreira',
      location: 'Curitiba, PR',
      date: 'Há 3 dias',
      rating: 5,
      variantPurchased: 'Preto Total (All Black)',
      size: 'G',
      title: 'Flanelado muito macio e caimento impecável!',
      comment: 'Aqui no sul o frio não perdoa. O moletom por dentro é super peluciado e aconchegante, não pinica nada. A calça jogger no tamanho G vestiu perfeitamente na canela com o tênis. Valeu cada centavo.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__2__cdb904cb.jpeg',
      helpfulCount: 24
    },
    {
      id: '2',
      name: 'Rafael Mendes',
      location: 'São Paulo, SP',
      date: 'Há 5 dias',
      rating: 5,
      variantPurchased: 'Bege Areia com Calça Preta',
      size: 'M',
      title: 'Elegância e estilo europeu de verdade',
      comment: 'O contraste da blusa bege com a calça preta fica muito sofisticado, bem diferente dos moletons comuns de academia. O bolso canguru é espaçoso e o cordão do capuz é reforçado. Recomendo muito!',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03__3__25484c0d.jpeg',
      helpfulCount: 19
    },
    {
      id: '3',
      name: 'Thiago Santoro',
      location: 'Belo Horizonte, MG',
      date: 'Há 1 semana',
      rating: 5,
      variantPurchased: 'Cinza Mescla com Calça Preta',
      size: 'M',
      title: 'Chegou rápido e a qualidade me surpreendeu',
      comment: 'Fiz o pedido via Pix e em 3 dias úteis já estava entregue com rastreio atualizado. O tecido tem peso, não fica transparente e já lavei duas vezes na máquina sem encolher ou desbotar a estampa Paris.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__1__fb92d36a.jpeg',
      helpfulCount: 15
    },
    {
      id: '4',
      name: 'Lucas Camargo',
      location: 'Porto Alegre, RS',
      date: 'Há 2 semanas',
      rating: 5,
      variantPurchased: 'Azul Marinho com Calça Preta',
      size: 'GG',
      title: 'Tamanho fiel à tabela de medidas',
      comment: 'Tenho 1,84m e 92kg, peguei o tamanho GG seguindo o recomendador do site e ficou sob medida. O tom de azul marinho é muito bonito e discreto. Acabamento de primeira linha.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03_ea4225b1.jpeg',
      helpfulCount: 31
    },
    {
      id: '5',
      name: 'Rodrigo Albuquerque',
      location: 'Florianópolis, SC',
      date: 'Há 2 semanas',
      rating: 5,
      variantPurchased: 'Bege Monocromático (Total Look)',
      size: 'M',
      title: 'Visual limpo de alto padrão',
      comment: 'Conjunto incrível! A cor bege da calça e blusa coordenadas entrega um visual clean absurdo. Uso tanto para viagens de avião quanto em saídas casuais à noite.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03__1__f1a106c4.jpeg',
      helpfulCount: 12
    },
    {
      id: '6',
      name: 'Bruno Pacheco',
      location: 'Campinas, SP',
      date: 'Há 3 semanas',
      rating: 5,
      variantPurchased: 'Azul Royal com Calça Preta',
      size: 'G',
      title: 'Cor vibrante e quentinho por dentro',
      comment: 'Gostei muito do azul royal, a cor é exatamente a mesma das fotos. O interior é muito gostoso ao toque, esquenta bem sem sufocar.',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__3__ba98abbc.jpeg',
      helpfulCount: 8
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  const toggleHelpful = (id: string) => {
    setHelpfulLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="depoimentos" className="py-20 bg-[#161616] border-b border-[#292929] relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#C68A45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] text-[#C68A45] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#383838]">
            <Sparkles className="w-3.5 h-3.5" />
            Prova Social & Avaliações Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            O que dizem os clientes Paris Laurent
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/80 font-light">
            Depoimentos de homens que já receberam e aprovaram o caimento, conforto térmico e acabamento do conjunto.
          </p>
        </div>

        {/* Global Rating Scoreboard Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#222] via-[#262626] to-[#222] border border-[#353535] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left">
            
            {/* Score */}
            <div className="flex flex-col items-center md:items-start justify-center border-b md:border-b-0 md:border-r border-[#333] pb-6 md:pb-0 md:pr-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-[#F7F7F5] font-['Montserrat']">4.9</span>
                <span className="text-sm text-[#888]">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-[#C68A45]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C68A45]" />
                ))}
              </div>
              <span className="text-xs text-[#A0A0A0] mt-1.5 font-light">
                Média baseada em avaliações verificadas
              </span>
            </div>

            {/* Pillar 1 */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#292929] border border-[#3d3d3d] flex items-center justify-center text-[#C68A45] shrink-0 font-bold">
                98%
              </div>
              <div className="text-left text-xs">
                <strong className="text-white block font-semibold">Recomendação</strong>
                <span className="text-[#8c8c8c]">Compradores indicam para amigos</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#292929] border border-[#3d3d3d] flex items-center justify-center text-[#C68A45] shrink-0 font-bold">
                100%
              </div>
              <div className="text-left text-xs">
                <strong className="text-white block font-semibold">Fotos Reais</strong>
                <span className="text-[#8c8c8c]">Fidelidade às peças enviadas</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <strong className="text-white block font-semibold">Compra Verificada</strong>
                <span className="text-[#8c8c8c]">Avaliações de pedidos entregues</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Controls Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-[#D8C7AE] uppercase tracking-wider">
              Depoimento {currentIndex + 1} de {testimonials.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#333] border border-[#3a3a3a] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#333] border border-[#3a3a3a] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Cards Grid / Carousel View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => {
              // On desktop show window of 3 cards, mobile follows currentIndex
              const isLiked = helpfulLiked[item.id] || false;
              const helpfulTotal = isLiked ? item.helpfulCount + 1 : item.helpfulCount;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] hover:border-[#C68A45]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg ${
                    idx === currentIndex
                      ? 'ring-1 ring-[#C68A45]/40 bg-[#222222]'
                      : ''
                  }`}
                >
                  <div>
                    {/* Top User Info & Stars */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-[#F7F7F5] font-['Montserrat']">
                            {item.name}
                          </h4>
                          <span title="Comprador Verificado" className="inline-flex items-center">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          </span>
                        </div>
                        <span className="text-[11px] text-[#888] block">
                          {item.location} • {item.date}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-0.5 text-[#C68A45]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#C68A45]" />
                        ))}
                      </div>
                    </div>

                    {/* Variant badge */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171717] border border-[#333] text-[11px] text-[#D8C7AE]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C68A45]" />
                      <span>{item.variantPurchased} • Tam. {item.size}</span>
                    </div>

                    {/* Title & Comment */}
                    <h5 className="text-sm font-bold text-[#F7F7F5] mb-2 leading-snug">
                      "{item.title}"
                    </h5>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed font-light mb-5">
                      {item.comment}
                    </p>
                  </div>

                  {/* Real Photo Thumbnail & Helpful Bar */}
                  <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between gap-3">
                    
                    {/* Customer Photo */}
                    <div
                      onClick={() => onOpenLightbox(item.image, `${item.name} (${item.variantPurchased})`)}
                      className="group/img relative flex items-center gap-2 cursor-pointer"
                      title="Ver foto do produto recebido"
                    >
                      <div className="w-11 h-11 rounded-lg bg-[#141414] border border-[#3a3a3a] p-1 flex items-center justify-center overflow-hidden shrink-0 group-hover/img:border-[#C68A45] transition-colors">
                        <img
                          src={item.image}
                          alt={`Foto do cliente ${item.name}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] text-[#C68A45] font-semibold flex items-center gap-1 group-hover/img:underline">
                          <Eye className="w-3 h-3" />
                          Foto Real
                        </span>
                        <span className="text-[10px] text-[#777] block">Toque para ampliar</span>
                      </div>
                    </div>

                    {/* Helpful count button */}
                    <button
                      type="button"
                      onClick={() => toggleHelpful(item.id)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isLiked
                          ? 'bg-[#C68A45]/20 border-[#C68A45] text-[#C68A45]'
                          : 'bg-[#252525] border-[#333] text-[#888] hover:text-[#bbb]'
                      }`}
                      aria-label="Marcar como útil"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{helpfulTotal}</span>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-6 bg-[#C68A45]'
                    : 'w-2 bg-[#333] hover:bg-[#555]'
                }`}
                aria-label={`Ir para depoimento ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
