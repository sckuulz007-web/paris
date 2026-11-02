import React, { useState } from 'react';
import { Ruler, Sparkles, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { SIZE_TABLE, SizeMeasurement, CHECKOUT_URL } from '../data/productData';

interface SizeGuideSectionProps {
  onSelectSize?: (size: string) => void;
  onGoToOffer?: () => void;
}

export const SizeGuideSection: React.FC<SizeGuideSectionProps> = ({ onSelectSize, onGoToOffer }) => {
  const [userWeight, setUserWeight] = useState<string>('75');
  const [userHeight, setUserHeight] = useState<string>('175');
  const [recommendedSize, setRecommendedSize] = useState<string>('M');

  // Simple, realistic recommendation algorithm based on height and weight
  const calculateSize = (wStr: string, hStr: string) => {
    const w = parseFloat(wStr) || 75;
    const h = parseFloat(hStr) || 175;

    let size = 'M';
    if (w < 68 && h < 173) size = 'P';
    else if (w <= 78 && h <= 180) size = 'M';
    else if (w <= 88 && h <= 185) size = 'G';
    else if (w <= 98 && h <= 192) size = 'GG';
    else size = 'XG';

    setRecommendedSize(size);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserWeight(val);
    calculateSize(val, userHeight);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserHeight(val);
    calculateSize(userWeight, val);
  };

  return (
    <section id="medidas" className="py-20 bg-[#171717] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292929] text-[#C68A45] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#383838]">
            <Ruler className="w-3.5 h-3.5" />
            Tabela de Medidas Exatas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Encontre o tamanho ideal para você.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/80 font-light">
            Confira a tabela com as medidas em centímetros da blusa e da calça para garantir o caimento perfeito no seu corpo.
          </p>
        </div>

        {/* Interactive Size Calculator Bar */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#222222] via-[#282828] to-[#222222] border border-[#383838]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C68A45] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Recomendador Rápido de Tamanho</span>
              </div>
              <h3 className="text-xl font-bold text-[#F7F7F5] font-['Montserrat']">
                Qual é a sua altura e peso?
              </h3>
              <p className="text-xs text-[#A0A0A0] mt-1 font-light">
                Ajuste os valores abaixo para receber a nossa indicação de tamanho com caimento confortável.
              </p>
            </div>

            {/* Inputs */}
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="flex-1 sm:flex-initial">
                <label className="text-[11px] font-semibold text-[#D8C7AE] uppercase block mb-1">
                  Peso ({userWeight} kg)
                </label>
                <input
                  type="range"
                  min="50"
                  max="120"
                  value={userWeight}
                  onChange={handleWeightChange}
                  className="w-36 sm:w-44 accent-[#C68A45] cursor-pointer"
                />
              </div>

              <div className="flex-1 sm:flex-initial">
                <label className="text-[11px] font-semibold text-[#D8C7AE] uppercase block mb-1">
                  Altura ({userHeight} cm)
                </label>
                <input
                  type="range"
                  min="155"
                  max="205"
                  value={userHeight}
                  onChange={handleHeightChange}
                  className="w-36 sm:w-44 accent-[#C68A45] cursor-pointer"
                />
              </div>

              <div className="p-3 px-5 rounded-xl bg-[#171717] border border-[#C68A45]/40 text-center shrink-0">
                <span className="text-[10px] text-[#A0A0A0] uppercase block">Tamanho sugerido</span>
                <span className="text-2xl font-black text-[#C68A45] font-['Montserrat']">
                  {recommendedSize}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Measurement Table */}
        <div className="bg-[#1f1f1f] rounded-2xl border border-[#2e2e2e] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#292929] text-[11px] sm:text-xs font-bold text-[#D8C7AE] uppercase tracking-wider border-b border-[#3a3a3a]">
                  <th className="p-4 sm:p-5">Tamanho</th>
                  <th className="p-4 sm:p-5">Equivalência</th>
                  <th className="p-4 sm:p-5">Tórax / Peito</th>
                  <th className="p-4 sm:p-5">Comp. Blusa</th>
                  <th className="p-4 sm:p-5">Cintura</th>
                  <th className="p-4 sm:p-5">Quadril</th>
                  <th className="p-4 sm:p-5">Comp. Calça</th>
                  <th className="p-4 sm:p-5">Peso Sugerido</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a] text-xs sm:text-sm">
                {SIZE_TABLE.map((row) => {
                  const isHighlighted = row.size === recommendedSize;
                  return (
                    <tr
                      key={row.size}
                      className={`transition-colors ${
                        isHighlighted
                          ? 'bg-[#C68A45]/15 text-[#F7F7F5] font-medium'
                          : 'hover:bg-[#252525] text-[#D8C7AE]/90 font-light'
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-bold font-['Montserrat'] flex items-center gap-2">
                        <span className={`w-7 h-7 rounded flex items-center justify-center font-black ${
                          isHighlighted ? 'bg-[#C68A45] text-white' : 'bg-[#292929] text-[#F7F7F5]'
                        }`}>
                          {row.size}
                        </span>
                        {isHighlighted && (
                          <span className="text-[10px] uppercase font-bold text-[#C68A45] hidden sm:inline">
                            Sugerido
                          </span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 font-medium">{row.indicativeSize}</td>
                      <td className="p-4 sm:p-5">{row.chest}</td>
                      <td className="p-4 sm:p-5">{row.hoodieLength}</td>
                      <td className="p-4 sm:p-5">{row.waist}</td>
                      <td className="p-4 sm:p-5">{row.hip}</td>
                      <td className="p-4 sm:p-5">{row.pantLength}</td>
                      <td className="p-4 sm:p-5 text-[#888]">{row.recommendedWeight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Sizing Tips */}
          <div className="p-5 sm:p-6 bg-[#1a1a1a] border-t border-[#2d2d2d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-[#C68A45] shrink-0 mt-0.5" />
              <div className="text-xs text-[#A0A0A0] leading-relaxed">
                <strong className="text-[#F7F7F5] block mb-0.5">Como medir suas peças:</strong>
                Recomendamos estender uma blusa e uma calça confortáveis sobre uma superfície plana e comparar as medidas em centímetros com a tabela acima. Se gostar de um caimento mais solto (estilo oversized), sugerimos escolher um tamanho acima.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {onGoToOffer && (
                <button
                  onClick={onGoToOffer}
                  className="px-4 py-2 rounded-lg bg-[#292929] hover:bg-[#353535] text-[#D8C7AE] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#3e3e3e]"
                >
                  Personalizar na Oferta
                </button>
              )}
              <a
                href={CHECKOUT_URL}
                className="px-4 py-2 rounded-lg bg-[#C68A45] hover:bg-[#b27937] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-md shadow-[#C68A45]/20"
              >
                <span>Comprar Tam. {recommendedSize}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
