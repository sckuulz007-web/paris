import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_LIST } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#141414] border-b border-[#292929]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292929] text-[#C68A45] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#383838]">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/80 font-light">
            Respostas diretas sobre composição, tamanho, envio e cuidados com seu Conjunto Paris Laurent.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#222222] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#F7F7F5] font-['Montserrat']">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#292929] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#C68A45] text-white' : 'text-[#888]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#D8C7AE]/90 leading-relaxed font-light border-t border-[#262626]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1f1f1f] border border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C68A45]/20 text-[#C68A45] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F7F7F5]">Ainda tem alguma pergunta sobre o produto?</h4>
              <p className="text-xs text-[#8c8c8c] mt-0.5">Nosso atendimento oficial está disponível para esclarecer suas medidas antes do envio.</p>
            </div>
          </div>
          <a
            href="#oferta"
            className="px-4 py-2.5 rounded-lg bg-[#292929] hover:bg-[#383838] text-xs font-semibold text-[#D8C7AE] border border-[#3e3e3e] transition-colors shrink-0"
          >
            Ir para a Compra
          </a>
        </div>

      </div>
    </section>
  );
};
