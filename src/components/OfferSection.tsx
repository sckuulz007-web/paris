import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Truck, CreditCard, QrCode, Lock, Ruler, Plus, Minus, AlertCircle, ArrowRight, RefreshCw, CheckCircle2, Flame, Clock, Users, Tag, Sparkles, ShoppingBag } from 'lucide-react';
import { ProductVariant, PRODUCT_VARIANTS, PRODUCT_PRICE, SIZE_TABLE, CHECKOUT_URL, PURCHASE_OPTIONS, PurchaseOption } from '../data/productData';

interface OfferSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onOpenSizeGuide: () => void;
  onOpenCheckout: (item: {
    variant: ProductVariant;
    size: string;
    quantity: number;
    shipping: { zip: string; days: string; price: number } | null;
  }) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onOpenSizeGuide,
  onOpenCheckout
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptionId, setSelectedOptionId] = useState<string>('opt-1');
  const [zipCode, setZipCode] = useState<string>('');
  const [shippingResult, setShippingResult] = useState<{
    calculated: boolean;
    days: string;
    price: number;
    text: string;
  } | null>(null);
  const [isCalculatingZip, setIsCalculatingZip] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const sizes = ['P', 'M', 'G', 'GG', 'XG'];

  // Dynamic stock units based on size
  const stockMap: Record<string, number> = {
    'P': 3,
    'M': 4,
    'G': 2,
    'GG': 5,
    'XG': 3,
  };
  const remainingUnits = stockMap[selectedSize] || 3;

  // Dynamic countdown timer (starts at 14m 38s and ticks every second)
  const [timeLeft, setTimeLeft] = useState<number>(878);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 878));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleZipCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipCode.replace(/\D/g, '');
    if (cleanZip.length < 8) {
      setValidationError('Por favor, informe um CEP válido com 8 dígitos.');
      return;
    }
    setValidationError(null);
    setIsCalculatingZip(true);

    setTimeout(() => {
      setIsCalculatingZip(false);
      // Realistic shipping calculation
      setShippingResult({
        calculated: true,
        days: '3 a 6 dias úteis',
        price: 0, // Free shipping for promo
        text: 'Frete Grátis com rastreamento incluso via Correios / Transportadora'
      });
    }, 400);
  };

  const handleSelectOption = (option: PurchaseOption) => {
    setSelectedOptionId(option.id);
    setQuantity(option.quantity);
    setValidationError(null);
  };

  const handleQuantityChange = (newQty: number) => {
    const safeQty = Math.max(1, newQty);
    setQuantity(safeQty);
    const matched = PURCHASE_OPTIONS.find((o) => o.quantity === safeQty);
    if (matched) {
      setSelectedOptionId(matched.id);
    } else {
      setSelectedOptionId('custom');
    }
  };

  const handleBuy = () => {
    if (!selectedSize) {
      setValidationError('Por favor, selecione um tamanho (P, M, G, GG ou XG) antes de continuar.');
      return;
    }
    setValidationError(null);

    onOpenCheckout({
      variant: selectedVariant,
      size: selectedSize,
      quantity,
      shipping: shippingResult ? {
        zip: zipCode,
        days: shippingResult.days,
        price: shippingResult.price
      } : null
    });
  };

  // Bundle / Kit dynamic pricing calculation
  const activeBundle = PURCHASE_OPTIONS.find((opt) => opt.id === selectedOptionId && opt.quantity === quantity)
    || PURCHASE_OPTIONS.find((opt) => opt.quantity === quantity);

  const currentPrice = activeBundle
    ? activeBundle.price
    : PRODUCT_PRICE.promotionalPrice * quantity;

  const currentPixPrice = activeBundle
    ? activeBundle.pixPrice
    : PRODUCT_PRICE.pixPrice * quantity;

  const currentRegularPrice = activeBundle
    ? activeBundle.originalPrice
    : PRODUCT_PRICE.regularPrice * quantity;

  const currentSavings = activeBundle
    ? activeBundle.savings
    : `Economize R$ ${(currentRegularPrice - currentPrice).toFixed(2).replace('.', ',')}`;

  const currentInstallments = activeBundle
    ? activeBundle.installments
    : `3x de R$ ${(currentPrice / 3).toFixed(2).replace('.', ',')} sem juros`;

  return (
    <section id="oferta" className="py-20 bg-[#242424] border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#C68A45] uppercase tracking-widest block mb-2">
            Luxo Europeu e Sofisticação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F7F7F5] uppercase tracking-tight font-['Montserrat']">
            Leve o conjunto Paris Laurent para o seu guarda-roupa.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D8C7AE]/90 font-light">
            Luxo europeu e sofisticação em uma opção prática para quem procura elegância casual com blusa e calça coordenadas.
          </p>
        </div>

        {/* Purchase Card */}
        <div className="bg-[#1a1a1a] border border-[#383838] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Product Image of the Selected Color */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#222222] to-[#161616] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2e2e2e]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded bg-[#292929] border border-[#3e3e3e] text-xs font-semibold text-[#D8C7AE]">
                    {selectedVariant.tag}
                  </span>
                  <span className="text-xs text-[#8c8c8c]">
                    Foto real da variante
                  </span>
                </div>

                <div className="relative w-full aspect-square flex items-center justify-center p-4 bg-[#141414]/50 rounded-2xl border border-[#262626]">
                  <img
                    key={selectedVariant.id}
                    src={selectedVariant.image}
                    alt={`Conjunto Paris Laurent - ${selectedVariant.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292929] space-y-2 text-xs text-[#A0A0A0]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C68A45] shrink-0" />
                  <span>Inclui 1 Blusa Moletom com Capuz + 1 Calça Jogger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C68A45] shrink-0" />
                  <span>Acabamento interno flanelado de alto conforto</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C68A45] shrink-0" />
                  <span>Disponível para envio com nota e rastreio</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Configuration & Purchase */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              {/* Product Title & Pricing */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#C68A45] uppercase tracking-wider">
                    Paris Laurent
                  </span>
                  <span className="text-[#666]">•</span>
                  <span className="text-xs text-[#D8C7AE] font-medium">
                    Luxo europeu e sofisticação
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F7F7F5] font-['Montserrat'] uppercase">
                  Conjunto de Moletom Masculino Paris Laurent Flanelado
                </h3>
                
                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="text-sm text-[#777] line-through">
                    R$ {currentRegularPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-3xl font-extrabold text-[#F7F7F5] font-['Montserrat']">
                    R$ {currentPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#C68A45]/20 text-[#D8C7AE] border border-[#C68A45]/30">
                    R$ {currentPixPrice.toFixed(2).replace('.', ',')} à vista no Pix (5% OFF)
                  </span>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-950/60 border border-amber-600/40 px-2 py-0.5 rounded">
                    {currentSavings}
                  </span>
                </div>
                <p className="text-xs text-[#8c8c8c] mt-1">
                  Ou parcelado no cartão em {currentInstallments} (ou até 12x)
                </p>
              </div>

              {/* 1. Color Selector */}
              <div>
                <label className="text-xs font-bold text-[#D8C7AE] uppercase tracking-wider block mb-2">
                  1. Selecione a Cor: <span className="text-white normal-case font-semibold">{selectedVariant.name}</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {PRODUCT_VARIANTS.map((v) => {
                    const isSelected = v.id === selectedVariant.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => onSelectVariant(v)}
                        className={`p-2 rounded-xl border transition-all text-center flex flex-col items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#292929] border-[#C68A45] shadow-[0_0_12px_rgba(198,138,69,0.35)]'
                            : 'bg-[#1f1f1f] border-[#303030] hover:border-[#555]'
                        }`}
                        title={v.name}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/30 shrink-0"
                          style={{ backgroundColor: v.hex }}
                        />
                        <span className="text-[10px] text-[#A0A0A0] leading-tight truncate w-full">
                          {v.shortName.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#D8C7AE] uppercase tracking-wider">
                    2. Selecione o Tamanho: <span className="text-white font-semibold">{selectedSize}</span>
                  </label>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-xs text-[#C68A45] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    Tabela de Medidas
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => {
                          setSelectedSize(size);
                          setValidationError(null);
                        }}
                        className={`py-3 rounded-lg border font-bold text-sm tracking-wide transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#C68A45] border-[#C68A45] text-white shadow-md'
                            : 'bg-[#222222] border-[#333333] text-[#D8C7AE] hover:border-[#666]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Opções de Compra • Escolha o Melhor Kit */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#D8C7AE] uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#C68A45]" />
                    <span>3. Opções de Compra • Escolha o Seu Pacote</span>
                  </label>
                  <span className="text-[11px] text-[#C68A45] font-semibold hidden sm:inline">
                    Descontos progressivos até 36% OFF
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PURCHASE_OPTIONS.map((opt) => {
                    const isSelected = (selectedOptionId === opt.id) || (quantity === opt.quantity);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectOption(opt)}
                        className={`relative p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-gradient-to-b from-[#2a221b] to-[#1e1914] border-[#C68A45] shadow-[0_0_16px_rgba(198,138,69,0.25)] ring-1 ring-[#C68A45]'
                            : 'bg-[#1b1b1b] border-[#303030] hover:border-[#4d4d4d]'
                        }`}
                      >
                        {opt.badge && (
                          <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#C68A45] to-[#e8ab66] text-black font-extrabold text-[9px] uppercase tracking-wider shadow">
                            {opt.badge}
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-[#C68A45] bg-[#C68A45]' : 'border-[#555]'
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                            <h4 className="text-xs font-bold text-[#F7F7F5] uppercase tracking-tight">
                              {opt.title}
                            </h4>
                          </div>

                          <p className="text-[10px] text-[#A0A0A0] leading-tight mb-2 pl-6">
                            {opt.subtitle}
                          </p>

                          <div className="pl-6 pt-1 space-y-1">
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-[11px] text-[#777] line-through">
                                R$ {opt.originalPrice.toFixed(2).replace('.', ',')}
                              </span>
                              <span className="text-base font-black text-white font-['Montserrat']">
                                R$ {opt.price.toFixed(2).replace('.', ',')}
                              </span>
                            </div>

                            <div className="text-[11px] text-emerald-400 font-bold">
                              R$ {opt.pixPrice.toFixed(2).replace('.', ',')} no Pix
                            </div>

                            <div className="text-[10px] text-[#8c8c8c]">
                              {opt.installments}
                            </div>

                            <div className="text-[10px] text-[#C68A45] font-semibold">
                              {opt.perUnit} • {opt.savings}
                            </div>
                          </div>
                        </div>

                        {/* Direct Buy Button on Each Purchase Option */}
                        <div className="mt-3 pt-2.5 border-t border-[#2d2d2d]">
                          <a
                            href={CHECKOUT_URL}
                            onClick={(e) => {
                              if (!selectedSize) {
                                e.preventDefault();
                                setValidationError('Por favor, selecione um tamanho (P, M, G, GG ou XG) antes de continuar.');
                              }
                            }}
                            className={`w-full py-2 px-3 rounded-lg text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center ${
                              isSelected
                                ? 'bg-[#C68A45] hover:bg-[#b27937] text-white shadow-md'
                                : 'bg-[#292929] hover:bg-[#333] text-[#D8C7AE] border border-[#3e3e3e]'
                            }`}
                          >
                            <span>Comprar Opção</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Custom Quantity Control & Stock Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#A0A0A0]">Qtd. personalizada:</span>
                    <div className="inline-flex items-center rounded-lg bg-[#222222] border border-[#333333] p-0.5">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="w-7 h-7 rounded bg-[#2a2a2a] text-[#F7F7F5] flex items-center justify-center hover:bg-[#383838] transition-colors cursor-pointer"
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-9 text-center text-xs font-bold text-[#F7F7F5]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="w-7 h-7 rounded bg-[#2a2a2a] text-[#F7F7F5] flex items-center justify-center hover:bg-[#383838] transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-xs flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="text-[#D8C7AE]">
                      Apenas <strong className="text-white font-bold">{remainingUnits} peças</strong> no tamanho {selectedSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Shipping Calculator (Simulador de CEP) */}
              <div className="p-4 rounded-xl bg-[#202020] border border-[#2e2e2e]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D8C7AE] uppercase tracking-wider mb-2">
                  <Truck className="w-4 h-4 text-[#C68A45]" />
                  <span>Calcular Prazo e Frete</span>
                </div>
                <form onSubmit={handleZipCalculate} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={9}
                    placeholder="Digite seu CEP (ex: 01310-100)"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="flex-1 bg-[#171717] border border-[#383838] rounded-lg px-3 py-2 text-xs text-[#F7F7F5] focus:outline-none focus:border-[#C68A45]"
                  />
                  <button
                    type="submit"
                    disabled={isCalculatingZip}
                    className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353535] text-xs font-semibold text-[#D8C7AE] rounded-lg border border-[#3e3e3e] transition-colors cursor-pointer"
                  >
                    {isCalculatingZip ? 'Calculando...' : 'Calcular'}
                  </button>
                </form>

                {shippingResult && (
                  <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700/40 text-xs text-emerald-300 flex items-center justify-between">
                    <span>{shippingResult.text}</span>
                    <span className="font-bold">{shippingResult.days}</span>
                  </div>
                )}
              </div>

              {/* Validation alert */}
              {validationError && (
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-600/50 text-xs text-amber-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Componente de Estoque Limitado & Últimas Unidades com Contador Dinâmico */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2a1714] via-[#231b18] to-[#1c1917] border border-[#C68A45]/45 shadow-lg relative overflow-hidden">
                {/* Glow decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                      </span>
                      <span className="text-xs font-black uppercase tracking-wider text-[#F7F7F5] flex items-center gap-1.5 font-['Montserrat']">
                        <Flame className="w-4 h-4 text-[#C68A45]" />
                        Últimas Unidades do Lote
                      </span>
                    </div>

                    {/* Contador Regressivo Dinâmico */}
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#D8C7AE] bg-[#141414]/90 px-2.5 py-1 rounded-md border border-[#3e3e3e]">
                      <Clock className="w-3.5 h-3.5 text-[#C68A45]" />
                      <span>{formatTimer(timeLeft)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#D8C7AE]">
                    <span>
                      Restam apenas <strong className="text-white font-extrabold text-sm">{remainingUnits} conjuntos</strong> no tamanho <strong className="text-[#C68A45]">{selectedSize}</strong> ({selectedVariant.shortName})
                    </span>
                    <span className="text-[11px] text-[#A0A0A0] flex items-center gap-1 shrink-0">
                      <Users className="w-3 h-3 text-[#C68A45]" />
                      14 pessoas comprando agora
                    </span>
                  </div>

                  {/* Barra de Progresso de Esgotamento */}
                  <div className="space-y-1">
                    <div className="w-full bg-[#141414] rounded-full h-2.5 p-0.5 overflow-hidden border border-[#333]">
                      <div
                        className="bg-gradient-to-r from-[#C68A45] to-red-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(95, Math.max(20, 100 - (remainingUnits * 14)))}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#8c8c8c]">
                      <span>Alta procura na coleção Paris Laurent</span>
                      <span className="text-amber-300 font-semibold">{Math.min(95, Math.max(20, 100 - (remainingUnits * 14)))}% do lote reservado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opções de Compra Imediata por Método de Pagamento */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#D8C7AE] uppercase tracking-wider block">
                  Opções de Compra Direta por Forma de Pagamento:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Opção Pix */}
                  <a
                    href={CHECKOUT_URL}
                    onClick={(e) => {
                      if (!selectedSize) {
                        e.preventDefault();
                        setValidationError('Por favor, selecione um tamanho (P, M, G, GG ou XG) antes de continuar.');
                      }
                    }}
                    className="p-3.5 rounded-xl bg-gradient-to-r from-[#172e21] to-[#122319] hover:from-[#1b3727] hover:to-[#172e21] border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-between gap-2 transition-all shadow-md group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <QrCode className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[11px] font-bold text-white">Comprar no Pix</span>
                        <span className="text-[10px] text-emerald-300 font-normal">5% OFF Imediato</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-black text-white font-['Montserrat']">
                        R$ {currentPixPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-[9px] text-emerald-400 font-semibold uppercase group-hover:translate-x-0.5 inline-block transition-transform">
                        Pagar no Pix &rarr;
                      </span>
                    </div>
                  </a>

                  {/* Opção Cartão */}
                  <a
                    href={CHECKOUT_URL}
                    onClick={(e) => {
                      if (!selectedSize) {
                        e.preventDefault();
                        setValidationError('Por favor, selecione um tamanho (P, M, G, GG ou XG) antes de continuar.');
                      }
                    }}
                    className="p-3.5 rounded-xl bg-gradient-to-r from-[#2a2219] to-[#1e1913] hover:from-[#352a1e] hover:to-[#262018] border border-[#C68A45]/40 text-[#D8C7AE] font-bold text-xs uppercase tracking-wider flex items-center justify-between gap-2 transition-all shadow-md group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#C68A45]/20 border border-[#C68A45]/30 flex items-center justify-center shrink-0">
                        <CreditCard className="w-4 h-4 text-[#C68A45]" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[11px] font-bold text-white">Comprar no Cartão</span>
                        <span className="text-[10px] text-[#A0A0A0] font-normal">Em até 12x</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-black text-white font-['Montserrat']">
                        R$ {currentPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-[9px] text-[#C68A45] font-semibold uppercase group-hover:translate-x-0.5 inline-block transition-transform">
                        Pagar no Cartão &rarr;
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Main Buy CTA */}
              <div>
                <a
                  href={CHECKOUT_URL}
                  onClick={(e) => {
                    if (!selectedSize) {
                      e.preventDefault();
                      setValidationError('Por favor, selecione um tamanho (P, M, G, GG ou XG) antes de continuar.');
                      return;
                    }
                  }}
                  className="w-full py-4 px-8 rounded-xl bg-[#C68A45] hover:bg-[#b27937] active:bg-[#9e6b2f] text-white font-black text-lg uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl shadow-[#C68A45]/30 flex items-center justify-center gap-3 cursor-pointer text-center"
                >
                  <Lock className="w-5 h-5" />
                  <span>COMPRAR MEU CONJUNTO PARIS LAURENT</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  onClick={handleBuy}
                  className="w-full mt-2.5 py-2.5 px-4 rounded-lg bg-[#252525] hover:bg-[#2f2f2f] text-[#D8C7AE] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#383838]"
                >
                  <span>Revisar Dados & Formas de Pagamento</span>
                </button>

                {/* Seção de Selos de Confiança (Garantia, Troca Fácil, Pagamento Seguro) */}
                <div className="mt-6 pt-5 border-t border-[#2d2d2d] space-y-3">
                  <div className="text-[11px] font-bold text-[#D8C7AE] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C68A45]" />
                    <span>Garantias & Compra Protegida</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Selo 1: Garantia */}
                    <div className="p-3 rounded-xl bg-[#202020] border border-[#2e2e2e] hover:border-[#C68A45]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#C68A45]/15 border border-[#C68A45]/30 flex items-center justify-center shrink-0 text-[#C68A45]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#F7F7F5] uppercase tracking-wide">
                          Garantia de 7 Dias
                        </h5>
                        <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-relaxed font-light">
                          Satisfação garantida ou seu dinheiro de volta sem burocracia.
                        </p>
                      </div>
                    </div>

                    {/* Selo 2: Troca Fácil */}
                    <div className="p-3 rounded-xl bg-[#202020] border border-[#2e2e2e] hover:border-[#C68A45]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#C68A45]/15 border border-[#C68A45]/30 flex items-center justify-center shrink-0 text-[#C68A45]">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#F7F7F5] uppercase tracking-wide">
                          Troca Fácil
                        </h5>
                        <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-relaxed font-light">
                          Troca de tamanho ou cor descomplicada e com suporte ágil.
                        </p>
                      </div>
                    </div>

                    {/* Selo 3: Pagamento Seguro */}
                    <div className="p-3 rounded-xl bg-[#202020] border border-[#2e2e2e] hover:border-[#C68A45]/40 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#F7F7F5] uppercase tracking-wide">
                          Pagamento Seguro
                        </h5>
                        <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-relaxed font-light">
                          Criptografia SSL de 256 bits com proteção total aos seus dados.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Micro-banner de Pagamentos & Envio */}
                  <div className="py-2.5 px-3 rounded-lg bg-[#181818] border border-[#272727] flex flex-wrap items-center justify-between gap-2.5 text-xs text-[#8c8c8c]">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#777] uppercase font-semibold tracking-wider">
                        Pagamento:
                      </span>
                      <div className="flex items-center gap-1.5 font-medium text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-[#242424] border border-[#333] flex items-center gap-1 text-white">
                          <QrCode className="w-3 h-3 text-[#C68A45]" /> Pix (5% OFF)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#242424] border border-[#333] flex items-center gap-1 text-white">
                          <CreditCard className="w-3 h-3 text-[#C68A45]" /> Cartão 12x
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-[#242424] border border-[#333] text-[10px] text-[#A0A0A0]">
                          Boleto
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Checkout Oficial Criptografado</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
