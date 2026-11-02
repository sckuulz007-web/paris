import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GallerySection } from './components/GallerySection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProductInUse } from './components/ProductInUse';
import { DetailsSection } from './components/DetailsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { SizeGuideSection } from './components/SizeGuideSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { CheckoutModal, CheckoutItem } from './components/CheckoutModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { PRODUCT_VARIANTS, ProductVariant } from './data/productData';

export default function App() {
  // Flagship default variant: Black-Black (or Camel-Black)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_VARIANTS[0]);

  // Lightbox Modal state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: ''
  });

  // Checkout Modal state
  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenCheckout = (item: CheckoutItem) => {
    setCheckoutItem(item);
    setIsCheckoutOpen(true);
  };

  const handleOpenCartDirectly = () => {
    if (!checkoutItem) {
      setCheckoutItem({
        variant: selectedVariant,
        size: 'M',
        quantity: 1,
        shipping: null
      });
    }
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#171717] text-[#F7F7F5] flex flex-col font-sans selection:bg-[#C68A45] selection:text-white">
      {/* SEÇÃO 1: Top Bar & Navigation */}
      <Navbar
        onOpenCart={handleOpenCartDirectly}
        cartCount={checkoutItem ? checkoutItem.quantity : 0}
        onSelectSection={scrollTo}
      />

      <main className="flex-1">
        {/* SEÇÃO 2: Hero Principal */}
        <Hero
          selectedVariant={selectedVariant}
          onSelectVariant={setSelectedVariant}
          onCtaClick={() => scrollTo('oferta')}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* SEÇÃO 3: Galeria Visual do Produto (All 8 real images) */}
        <GallerySection
          onSelectVariant={setSelectedVariant}
          onOpenLightbox={handleOpenLightbox}
          onGoToOffer={() => scrollTo('oferta')}
        />

        {/* SEÇÃO 4: Apresentação dos Benefícios */}
        <BenefitsSection />

        {/* SEÇÃO 5: O Produto em Uso ("Um conjunto. Diferentes momentos.") */}
        <ProductInUse
          onSelectVariant={setSelectedVariant}
          onOpenLightbox={handleOpenLightbox}
          onGoToOffer={() => scrollTo('oferta')}
        />

        {/* SEÇÃO 6: Detalhes que Fazem a Diferença & Ficha Técnica */}
        <DetailsSection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Depoimentos de Clientes & Prova Social */}
        <TestimonialsSection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* SEÇÃO 7: Oferta Principal (Card de Compra, CEP, Cores, Tamanhos) */}
        <OfferSection
          selectedVariant={selectedVariant}
          onSelectVariant={setSelectedVariant}
          onOpenSizeGuide={() => scrollTo('medidas')}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* SEÇÃO 8: Guia de Tamanhos com Medidas Reais e Calculadora */}
        <SizeGuideSection
          onGoToOffer={() => scrollTo('oferta')}
        />

        {/* SEÇÃO 9: Perguntas Frequentes (FAQ Acordeão com 9 itens) */}
        <FaqSection />

        {/* SEÇÃO 10: Bloco Final de Conversão */}
        <FinalCtaSection
          selectedVariant={selectedVariant}
          onGoToOffer={() => scrollTo('oferta')}
        />
      </main>

      {/* Footer com informações institucionais e garantia */}
      <Footer onScrollTo={scrollTo} />

      {/* Floating Mobile Purchase Bar */}
      <FloatingMobileBar
        selectedVariant={selectedVariant}
        onGoToOffer={() => scrollTo('oferta')}
      />

      {/* Lightbox Modal for HD Inspection */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        onClose={handleCloseLightbox}
      />

      {/* Checkout Drawer / Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        item={checkoutItem}
        onClose={() => setIsCheckoutOpen(false)}
        onClearItem={() => setCheckoutItem(null)}
      />
    </div>
  );
}
