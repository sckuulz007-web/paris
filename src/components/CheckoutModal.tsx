import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, QrCode, CreditCard, Copy, Check, ArrowRight } from 'lucide-react';
import { ProductVariant, PRODUCT_PRICE, CHECKOUT_URL } from '../data/productData';

export interface CheckoutItem {
  variant: ProductVariant;
  size: string;
  quantity: number;
  shipping: { zip: string; days: string; price: number } | null;
}

interface CheckoutModalProps {
  isOpen: boolean;
  item: CheckoutItem | null;
  onClose: () => void;
  onClearItem: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  item,
  onClose,
  onClearItem
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [copiedPix, setCopiedPix] = useState(false);

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !item) return null;

  const totalCard = PRODUCT_PRICE.promotionalPrice * item.quantity;
  const totalPix = PRODUCT_PRICE.pixPrice * item.quantity;
  const currentTotal = paymentMethod === 'pix' ? totalPix : totalCard;

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136paris-moletom-checkout-oficial520400005303986540' + totalPix.toFixed(2) + '5802BR5925PARIS MODA MASCULINA LTDA6009SAO PAULO62070503***6304');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Redirect directly to the Shopify checkout URL
    window.location.href = CHECKOUT_URL;
  };

  const handleCloseAndReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1b1b1b] border border-[#353535] rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#242424] border-b border-[#333333] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#C68A45]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F7F7F5] font-['Montserrat'] uppercase">
              {step === 'form' ? 'Finalizar Pedido • Ambiente Seguro' : 'Pedido Confirmado com Sucesso!'}
            </h3>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="p-2 rounded-full hover:bg-[#333] text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            
            {/* Selected Item Summary */}
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#2d2d2d] flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-[#222] p-2 flex items-center justify-center shrink-0 border border-[#333]">
                <img
                  src={item.variant.image}
                  alt={item.variant.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold text-[#C68A45] uppercase tracking-wider block">
                  Paris Laurent • Luxo Europeu e Sofisticação
                </span>
                <h4 className="text-sm font-bold text-[#F7F7F5] truncate">
                  {item.variant.name}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#8c8c8c] mt-1">
                  <span>Tamanho: <strong className="text-white">{item.size}</strong></span>
                  <span>•</span>
                  <span>Qtd: <strong className="text-white">{item.quantity}</strong></span>
                  <span>•</span>
                  <span>{item.shipping ? item.shipping.days : 'Envio padrão'}</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-sm sm:text-base font-extrabold text-[#F7F7F5] font-['Montserrat']">
                  R$ {currentTotal.toFixed(2).replace('.', ',')}
                </div>
                {paymentMethod === 'pix' && (
                  <span className="text-[10px] text-emerald-400 font-bold block">
                    (5% OFF aplicado)
                  </span>
                )}
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold text-[#D8C7AE] uppercase tracking-wider">
                Dados de Envio e Contato
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#A0A0A0] block mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#141414] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5] focus:outline-none focus:border-[#C68A45]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A0A0A0] block mb-1">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#141414] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5] focus:outline-none focus:border-[#C68A45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#A0A0A0] block mb-1">E-mail para rastreamento *</label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-[#141414] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5] focus:outline-none focus:border-[#C68A45]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A0A0A0] block mb-1">Endereço com Número e Bairro *</label>
                  <input
                    type="text"
                    required
                    placeholder="Rua, Número, Apto, Bairro, Cidade/UF"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full bg-[#141414] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5] focus:outline-none focus:border-[#C68A45]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-[#D8C7AE] uppercase tracking-wider">
                Forma de Pagamento
              </h5>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'pix'
                      ? 'bg-[#292929] border-[#C68A45] text-white shadow-md'
                      : 'bg-[#181818] border-[#303030] text-[#A0A0A0]'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-[#C68A45]" />
                  <div className="text-left">
                    <span className="text-xs font-bold block">Pix (Aprovação Imediata)</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">5% de desconto exclusivo</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#292929] border-[#C68A45] text-white shadow-md'
                      : 'bg-[#181818] border-[#303030] text-[#A0A0A0]'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#C68A45]" />
                  <div className="text-left">
                    <span className="text-xs font-bold block">Cartão de Crédito</span>
                    <span className="text-[10px] text-[#888]">Em até 12x (3x sem juros)</span>
                  </div>
                </button>
              </div>

              {/* Method Detail */}
              {paymentMethod === 'pix' ? (
                <div className="p-4 rounded-xl bg-[#141414] border border-[#2e2e2e] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A0A0A0]">Valor com 5% de desconto:</span>
                    <strong className="text-base text-white font-['Montserrat']">
                      R$ {totalPix.toFixed(2).replace('.', ',')}
                    </strong>
                  </div>
                  <div className="p-3 bg-[#1e1e1e] rounded-lg border border-[#333] flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#8c8c8c] truncate">
                      00020126580014br.gov.bcb.pix0136paris-moletom...
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="shrink-0 px-3 py-1.5 rounded bg-[#C68A45] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar Pix'}</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-[#777]">
                    A confirmação do Pix é processada em segundos e seu pedido entra imediatamente na fila de separação.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#141414] border border-[#2e2e2e] space-y-3 text-xs">
                  <div>
                    <label className="text-[11px] text-[#A0A0A0] block mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• ••••"
                      maxLength={19}
                      className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-[#A0A0A0] block mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#A0A0A0] block mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg px-3 py-2 text-xs text-[#F7F7F5]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                onClick={() => setIsSubmitting(true)}
                className="w-full py-4 rounded-xl bg-[#C68A45] hover:bg-[#b27937] text-white font-extrabold text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#C68A45]/30 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Lock className="w-5 h-5" />
                <span>Confirmar Pedido • R$ {currentTotal.toFixed(2).replace('.', ',')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#777]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dados protegidos com criptografia SSL 256 bits</span>
              </div>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#C68A45] uppercase tracking-wider block mb-1">
                Sucesso! Pedido #PARIS-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h4 className="text-2xl font-black text-[#F7F7F5] font-['Montserrat'] uppercase">
                Obrigado, {customerName || 'Cliente'}!
              </h4>
              <p className="text-sm text-[#D8C7AE]/90 mt-2 font-light max-w-md mx-auto">
                Seu pedido do <strong>Conjunto Paris Laurent Flanelado ({item.variant.name} - Tam. {item.size})</strong> foi registrado com sucesso.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141414] border border-[#2d2d2d] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between text-[#8c8c8c]">
                <span>Status:</span>
                <span className="text-emerald-400 font-semibold">Em separação para envio</span>
              </div>
              <div className="flex justify-between text-[#8c8c8c]">
                <span>Prazo estimado:</span>
                <span className="text-white font-medium">{item.shipping ? item.shipping.days : '3 a 6 dias úteis'}</span>
              </div>
              <div className="flex justify-between text-[#8c8c8c]">
                <span>Atualizações de rastreio:</span>
                <span className="text-white font-medium">{customerEmail || 'Enviado por e-mail/WhatsApp'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CHECKOUT_URL}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#C68A45] hover:bg-[#b27937] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Acessar Checkout Oficial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={handleCloseAndReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#292929] hover:bg-[#353535] text-[#F7F7F5] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Voltar à Loja
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
