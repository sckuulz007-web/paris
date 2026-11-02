export interface ProductVariant {
  id: string;
  name: string;
  shortName: string;
  hoodieColor: string;
  pantColor: string;
  hex: string;
  badge?: string;
  image: string;
  tag: string;
  description: string;
}

export interface SizeMeasurement {
  size: string;
  indicativeSize: string;
  chest: string;
  hoodieLength: string;
  waist: string;
  hip: string;
  pantLength: string;
  recommendedWeight: string;
  recommendedHeight: string;
}

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'black-black',
    name: 'Preto Total (All Black)',
    shortName: 'Preto Carbono',
    hoodieColor: 'Preto Intenso',
    pantColor: 'Preto',
    hex: '#171717',
    badge: 'Mais Escolhido',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__2__cdb904cb.jpeg',
    tag: 'Clássico Urbano',
    description: 'Composição monocromática minimalista. Blusa preta e calça preta com detalhe PARIS em vermelho e branco.'
  },
  {
    id: 'beige-black',
    name: 'Bege Areia & Calça Preta',
    shortName: 'Bege / Preto',
    hoodieColor: 'Bege Areia Quente',
    pantColor: 'Preto',
    hex: '#C8A780',
    badge: 'Tendência 2026',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03__3__25484c0d.jpeg',
    tag: 'Contraste Sofisticado',
    description: 'Tonalidade terracota suave com calça preta contrastante. Equilíbrio perfeito entre elegância casual e conforto.'
  },
  {
    id: 'grey-black',
    name: 'Cinza Mescla & Calça Preta',
    shortName: 'Cinza / Preto',
    hoodieColor: 'Cinza Mescla',
    pantColor: 'Preto',
    hex: '#9A9DA2',
    badge: 'Versátil',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__1__fb92d36a.jpeg',
    tag: 'Dia a Dia',
    description: 'Cinza mescla texturizado com caimento impecável e calça preta slim jogger.'
  },
  {
    id: 'navy-black',
    name: 'Azul Marinho & Calça Preta',
    shortName: 'Marinho / Preto',
    hoodieColor: 'Azul Marinho Escuro',
    pantColor: 'Preto',
    hex: '#1B2C44',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03_ea4225b1.jpeg',
    tag: 'Estilo Noturno',
    description: 'Azul marinho sóbrio e imponente. Ideal para passeios noturnos e encontros casuais.'
  },
  {
    id: 'beige-beige',
    name: 'Bege Areia Monocromático',
    shortName: 'Bege Total',
    hoodieColor: 'Bege Areia',
    pantColor: 'Bege Areia',
    hex: '#D7BA97',
    badge: 'Exclusivo',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.03__1__f1a106c4.jpeg',
    tag: 'Total Look',
    description: 'Conjunto completo em bege areia (blusa e calça coordenadas na mesma cor) para um visual clean de alto padrão.'
  },
  {
    id: 'royal-black',
    name: 'Azul Royal & Calça Preta',
    shortName: 'Azul Royal',
    hoodieColor: 'Azul Royal Intenso',
    pantColor: 'Preto',
    hex: '#1854B7',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__3__ba98abbc.jpeg',
    tag: 'Destaque Urbano',
    description: 'Cor vibrante com identidade esportiva elegante e acabamento interno flanelado macio.'
  },
  {
    id: 'red-black',
    name: 'Vermelho Rubro & Calça Preta',
    shortName: 'Vermelho / Preto',
    hoodieColor: 'Vermelho Rubro',
    pantColor: 'Preto',
    hex: '#BC1E2E',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04__4__5e29d26c.jpeg',
    tag: 'Personalidade Forte',
    description: 'Vermelho encorpado que valoriza o contraste da estampa frontal e dos detalhes da calça jogger.'
  },
  {
    id: 'rose-black',
    name: 'Rosa Pastel & Calça Preta',
    shortName: 'Rosa Pastel',
    hoodieColor: 'Rosa Pastel Claro',
    pantColor: 'Preto',
    hex: '#EDA6B5',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_16.10.04_20ef4af0.jpeg',
    tag: 'Streetwear Moderno',
    description: 'Tom pastel contemporâneo inspirado nas tendências globais de moda masculina de rua.'
  }
];

export const SIZE_TABLE: SizeMeasurement[] = [
  {
    size: 'P',
    indicativeSize: '36 a 38',
    chest: '104 cm',
    hoodieLength: '68 cm',
    waist: '74 - 84 cm',
    hip: '100 cm',
    pantLength: '100 cm',
    recommendedWeight: '55 - 68 kg',
    recommendedHeight: '1,60 - 1,72 m'
  },
  {
    size: 'M',
    indicativeSize: '40 a 42',
    chest: '110 cm',
    hoodieLength: '70 cm',
    waist: '80 - 88 cm',
    hip: '106 cm',
    pantLength: '102 cm',
    recommendedWeight: '69 - 78 kg',
    recommendedHeight: '1,70 - 1,78 m'
  },
  {
    size: 'G',
    indicativeSize: '44',
    chest: '116 cm',
    hoodieLength: '72 cm',
    waist: '84 - 94 cm',
    hip: '112 cm',
    pantLength: '104 cm',
    recommendedWeight: '79 - 88 kg',
    recommendedHeight: '1,75 - 1,84 m'
  },
  {
    size: 'GG',
    indicativeSize: '46 a 48',
    chest: '122 cm',
    hoodieLength: '74 cm',
    waist: '88 - 100 cm',
    hip: '118 cm',
    pantLength: '106 cm',
    recommendedWeight: '89 - 98 kg',
    recommendedHeight: '1,78 - 1,90 m'
  },
  {
    size: 'XG',
    indicativeSize: '50 a 52',
    chest: '128 cm',
    hoodieLength: '76 cm',
    waist: '94 - 106 cm',
    hip: '124 cm',
    pantLength: '108 cm',
    recommendedWeight: '99 - 112 kg',
    recommendedHeight: '1,80 - 1,96 m'
  }
];

export const TECH_SPECS = [
  { label: 'Peças incluídas', value: '2 peças (1 Blusa Moletom com Capuz + 1 Calça Jogger)' },
  { label: 'Acabamento Interno', value: 'Interior flanelado (peluciado térmico macio)' },
  { label: 'Composição têxtil', value: 'Algodão & Poliéster encorpado (não encolhe, toque suave)' },
  { label: 'Modelagem', value: 'Conforto urbano regular com caimento jogger ajustado nos punhos' },
  { label: 'Detalhes da Blusa', value: 'Capuz duplo com ilhós e cordão ajustável + bolso canguru frontal' },
  { label: 'Detalhes da Calça', value: 'Cós elástico com cordão de regulagem, bolsos laterais e punhos canelados' },
  { label: 'Estampa', value: 'Inscrição PARIS minimalista com faixa de transição degradê' },
  { label: 'Cuidados de lavagem', value: 'Lavagem suave, do avesso; não usar alvejante com cloro; secagem à sombra' }
];

export const FAQ_LIST = [
  {
    q: '1. O que vem no conjunto?',
    a: 'O produto é composto pelo conjunto completo de 2 peças: 1 Blusa de Moletom com Capuz regulável e bolso canguru, e 1 Calça de Moletom estilo Jogger com cós elástico, cordão de ajuste e punhos canelados.'
  },
  {
    q: '2. O tecido é flanelado por dentro?',
    a: 'Sim! Tanto a blusa quanto a calça possuem acabamento interno flanelado (peluciado), o que garante retenção agradável da temperatura corporal e sensação aconchegante nos dias frios.'
  },
  {
    q: '3. Quais tamanhos estão disponíveis?',
    a: 'O conjunto está disponível nas numerações P, M, G, GG e XG. A modelagem é pensada para proporcionar conforto sem perder a estrutura urbana.'
  },
  {
    q: '4. Como escolher o tamanho correto?',
    a: 'Consulte nossa tabela detalhada de medidas presente nesta página ou utilize nossa calculadora rápida de tamanho informando sua altura e peso. Se preferir um caimento mais oversized, recomendamos um número acima.'
  },
  {
    q: '5. Quais cores estão disponíveis?',
    a: 'Temos 8 combinações reais do produto: Preto Total, Bege Areia com Calça Preta, Bege Monocromático (calça e blusa bege), Cinza Mescla, Azul Marinho, Azul Royal, Vermelho Rubro e Rosa Pastel.'
  },
  {
    q: '6. Quais são as opções de pagamento?',
    a: 'Disponibilizamos pagamento via Pix (com aprovação imediata e 5% de desconto promocional), Cartão de Crédito em até 12x (sendo até 3x sem juros) e Boleto Bancário.'
  },
  {
    q: '7. Qual é o prazo de entrega?',
    a: 'A postagem do pedido é realizada em até 24 a 48 horas úteis após a confirmação do pagamento. O prazo de entrega varia conforme o CEP informado e pode ser simulado diretamente no carrinho.'
  },
  {
    q: '8. Como funciona a troca ou devolução?',
    a: 'Você tem garantia total de 7 dias após o recebimento para solicitar a troca de tamanho, cor ou a devolução integral do valor pago caso não fique 100% satisfeito, sem burocracia.'
  },
  {
    q: '9. Como devo lavar o conjunto?',
    a: 'Para preservar a textura aveludada do flanelado e a nitidez da estampa Paris, sugerimos lavar a peça virada do avesso em água fria ou ciclo suave. Não utilize água sanitária ou cloro e evite secadora em temperatura extrema.'
  }
];

export const CHECKOUT_URL = 'https://undefined/api/public/shopify?product=3954499196432&store=39544';

export const PRODUCT_PRICE = {
  regularPrice: 249.90,
  promotionalPrice: 189.90,
  pixPrice: 179.90, // 5% extra discount
  installments: '3x de R$ 63,30 sem juros ou até 12x'
};

export interface PurchaseOption {
  id: string;
  quantity: number;
  title: string;
  subtitle: string;
  badge?: string;
  isPopular?: boolean;
  originalPrice: number;
  price: number;
  pixPrice: number;
  discountPercentage: number;
  installments: string;
  perUnit: string;
  savings: string;
  checkoutUrl: string;
}

export const PURCHASE_OPTIONS: PurchaseOption[] = [
  {
    id: 'opt-1',
    quantity: 1,
    title: '1 Conjunto Paris Laurent',
    subtitle: '1 Blusa com Capuz + 1 Calça Jogger Flanelada',
    originalPrice: 249.90,
    price: 189.90,
    pixPrice: 179.90,
    discountPercentage: 24,
    installments: '3x de R$ 63,30 sem juros',
    perUnit: 'R$ 189,90 cada',
    savings: 'Economize R$ 60,00',
    checkoutUrl: CHECKOUT_URL
  },
  {
    id: 'opt-2',
    quantity: 2,
    title: '2 Conjuntos Paris Laurent',
    subtitle: '2 Blusas + 2 Calças • Escolha as cores no pedido',
    badge: 'Mais Vendido',
    isPopular: true,
    originalPrice: 499.80,
    price: 339.90,
    pixPrice: 322.90,
    discountPercentage: 32,
    installments: '3x de R$ 113,30 sem juros',
    perUnit: 'R$ 169,95 cada',
    savings: 'Economize R$ 159,90',
    checkoutUrl: CHECKOUT_URL
  },
  {
    id: 'opt-3',
    quantity: 3,
    title: '3 Conjuntos Paris Laurent',
    subtitle: '3 Blusas + 3 Calças • Coleção completa com frete VIP',
    badge: 'Maior Economia',
    originalPrice: 749.70,
    price: 479.90,
    pixPrice: 455.90,
    discountPercentage: 36,
    installments: '3x de R$ 159,96 sem juros',
    perUnit: 'R$ 159,97 cada',
    savings: 'Economize R$ 269,80',
    checkoutUrl: CHECKOUT_URL
  }
];
