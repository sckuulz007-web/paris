import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { ProductVariant, PRODUCT_PRICE, CHECKOUT_URL } from '../data/productData';

interface FloatingMobileBarProps {
  selectedVariant: ProductVariant;
  onGoToOffer: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  selectedVariant,
  onGoToOffer
}) => {
  return (
    <aside aria-label="Ações rápidas de compra" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#171717]/95 backdrop-blur-md border-t border-[#2e2e2e] p-3 px-4 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between gap-3">
        {/* Thumbnail & price */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-[#252525] p-1 shrink-0 border border-[#383838]">
            <img
              src={selectedVariant.image}
              alt={selectedVariant.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] text-[#A0A0A0] block truncate">
              {selectedVariant.shortName} • Paris Laurent
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-extrabold text-[#F7F7F5] font-['Montserrat']">
                R$ {PRODUCT_PRICE.promotionalPrice.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-[10px] text-[#C68A45] font-semibold">
                (Pix R$ {PRODUCT_PRICE.pixPrice.toFixed(2).replace('.', ',')})
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href={CHECKOUT_URL}
          className="shrink-0 py-2.5 px-4 rounded-lg bg-[#C68A45] hover:bg-[#b27937] text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#C68A45]/30 cursor-pointer"
        >
          <span>Comprar</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
