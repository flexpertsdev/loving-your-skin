import { User, Retailer, TeamMember, Brand, Product, Order, Message } from '@/types'

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'retailer@example.com',
    userType: 'RETAILER',
    languagePreference: 'en',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'user-2',
    email: 'admin@lys.com',
    userType: 'TEAM_MEMBER',
    languagePreference: 'en',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'user-3',
    email: 'brand@example.com',
    userType: 'BRAND_REP',
    languagePreference: 'ko',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
]

// Mock Retailers
export const mockRetailers: Retailer[] = [
  {
    id: 'retailer-1',
    userId: 'user-1',
    companyName: 'Beauty Store London',
    vatNumber: 'GB123456789',
    address: {
      street: '123 High Street',
      city: 'London',
      postalCode: 'SW1A 1AA',
      country: 'UK',
    },
    salesRepId: 'user-2',
  },
]

// Mock Team Members
export const mockTeamMembers: TeamMember[] = [
  {
    id: 'team-1',
    userId: 'user-2',
    role: 'ADMIN',
  },
]

// Mock Brands
export const mockBrands: Brand[] = [
  {
    id: 'brand-1',
    name: 'COSRX',
    slug: 'cosrx',
    description: {
      en: 'Expecting Tomorrow from Your Skin',
      ko: '당신의 피부에서 내일을 기대하다',
    },
    story: {
      en: 'COSRX is a Korean skincare brand that has gained international recognition for its effective, minimalist formulations.',
      ko: 'COSRX는 효과적이고 미니멀한 포뮬레이션으로 국제적인 인정을 받은 한국 스킨케어 브랜드입니다.',
    },
    logoUrl: 'https://via.placeholder.com/200x100',
    isActive: true,
  },
  {
    id: 'brand-2',
    name: 'Beauty of Joseon',
    slug: 'beauty-of-joseon',
    description: {
      en: 'Timeless Beauty Secrets',
      ko: '시대를 초월한 아름다움의 비밀',
    },
    story: {
      en: 'Beauty of Joseon creates products using traditional Korean hanbang ingredients combined with modern skincare technology.',
      ko: 'Beauty of Joseon은 전통 한방 성분과 현대 스킨케어 기술을 결합하여 제품을 만듭니다.',
    },
    logoUrl: 'https://via.placeholder.com/200x100',
    isActive: true,
  },
  {
    id: 'brand-3',
    name: 'PURITO',
    slug: 'purito',
    description: {
      en: 'Safe and Worry-free Skincare',
      ko: '안전하고 걱정 없는 스킨케어',
    },
    story: {
      en: 'PURITO focuses on creating safe, cruelty-free products with carefully selected ingredients.',
      ko: 'PURITO는 신중하게 선택된 성분으로 안전하고 동물실험을 하지 않는 제품을 만드는 데 중점을 둡니다.',
    },
    logoUrl: 'https://via.placeholder.com/200x100',
    isActive: true,
  },
]

// Mock Products
export const mockProducts: Product[] = [
  // COSRX Products
  {
    id: 'product-1',
    brandId: 'brand-1',
    name: {
      en: 'Advanced Snail 96 Mucin Power Essence',
      ko: '어드밴스드 스네일 96 뮤신 파워 에센스',
    },
    description: {
      en: 'Formulated with 96% Snail Secretion Filtrate, this essence protects the skin from moisture loss while keeping the skin texture smooth.',
      ko: '96% 달팽이 점액 여과물로 제조된 이 에센스는 피부 결을 부드럽게 유지하면서 수분 손실로부터 피부를 보호합니다.',
    },
    images: ['https://via.placeholder.com/400x400'],
    pricePerItem: 15.50,
    itemsPerCarton: 24,
    pricePerCarton: 372.00,
    minimumOrderQty: 2, // cartons
    sku: 'COSRX-SNAIL-96',
    isActive: true,
    categories: ['essence', 'moisturizing'],
    certifications: [
      { type: 'CPNP_UK', region: 'UK' },
      { type: 'CPNP_EU', region: 'EU' },
    ],
  },
  {
    id: 'product-2',
    brandId: 'brand-1',
    name: {
      en: 'Low pH Good Morning Gel Cleanser',
      ko: '로우 pH 굿모닝 젤 클렌저',
    },
    description: {
      en: 'A gentle gel cleanser with a low pH that effectively removes impurities without stripping the skin.',
      ko: '피부를 건조하게 하지 않으면서 불순물을 효과적으로 제거하는 저자극 pH 젤 클렌저입니다.',
    },
    images: ['https://via.placeholder.com/400x400'],
    pricePerItem: 8.00,
    itemsPerCarton: 36,
    pricePerCarton: 288.00,
    minimumOrderQty: 3,
    sku: 'COSRX-CLEANSER-PH',
    isActive: true,
    categories: ['cleanser'],
    certifications: [
      { type: 'CPNP_UK', region: 'UK' },
      { type: 'CPNP_EU', region: 'EU' },
    ],
  },

  // Beauty of Joseon Products
  {
    id: 'product-3',
    brandId: 'brand-2',
    name: {
      en: 'Glow Deep Serum',
      ko: '글로우 딥 세럼',
    },
    description: {
      en: 'Rice bran and Arbutin serum that helps to improve skin tone and texture.',
      ko: '피부 톤과 질감 개선에 도움을 주는 쌀겨와 알부틴 세럼입니다.',
    },
    images: ['https://via.placeholder.com/400x400'],
    pricePerItem: 12.00,
    itemsPerCarton: 30,
    pricePerCarton: 360.00,
    minimumOrderQty: 2,
    sku: 'BOJ-GLOW-SERUM',
    isActive: true,
    categories: ['serum', 'brightening'],
    certifications: [
      { type: 'CPNP_UK', region: 'UK' },
      { type: 'CPNP_EU', region: 'EU' },
    ],
  },
  {
    id: 'product-4',
    brandId: 'brand-2',
    name: {
      en: 'Relief Sun',
      ko: '릴리프 선',
    },
    description: {
      en: 'Rice extract and probiotics sunscreen that provides comfortable daily sun protection.',
      ko: '편안한 일상 자외선 차단을 제공하는 쌀 추출물과 프로바이오틱스 선크림입니다.',
    },
    images: ['https://via.placeholder.com/400x400'],
    pricePerItem: 10.00,
    itemsPerCarton: 40,
    pricePerCarton: 400.00,
    minimumOrderQty: 2,
    sku: 'BOJ-SUNSCREEN',
    isActive: true,
    categories: ['sunscreen'],
    certifications: [
      { type: 'CPNP_UK', region: 'UK' },
      { type: 'CPNP_EU', region: 'EU' },
      { type: 'CPNP_CH', region: 'CH' },
    ],
  },

  // PURITO Products
  {
    id: 'product-5',
    brandId: 'brand-3',
    name: {
      en: 'Centella Unscented Serum',
      ko: '센텔라 무향 세럼',
    },
    description: {
      en: 'A lightweight, unscented serum with Centella Asiatica extract for sensitive skin.',
      ko: '민감한 피부를 위한 센텔라 아시아티카 추출물이 함유된 가벼운 무향 세럼입니다.',
    },
    images: ['https://via.placeholder.com/400x400'],
    pricePerItem: 11.00,
    itemsPerCarton: 32,
    pricePerCarton: 352.00,
    minimumOrderQty: 3,
    sku: 'PURITO-CENTELLA',
    isActive: true,
    categories: ['serum', 'sensitive'],
    certifications: [
      { type: 'CPNP_UK', region: 'UK' },
      { type: 'CPNP_EU', region: 'EU' },
    ],
  },
]

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'order-1',
    orderNumber: 'LYS-2024-001',
    retailerId: 'retailer-1',
    brandId: 'brand-1',
    status: 'PROCESSING',
    totalAmount: 660.00,
    shippingAddress: {
      street: '123 High Street',
      city: 'London',
      postalCode: 'SW1A 1AA',
      country: 'UK',
    },
    items: [
      {
        productId: 'product-1',
        quantity: 2, // cartons
        pricePerItem: 15.50,
        totalPrice: 372.00,
      },
      {
        productId: 'product-2',
        quantity: 1,
        pricePerItem: 8.00,
        totalPrice: 288.00,
      },
    ],
    createdAt: new Date('2024-06-15'),
    confirmedAt: new Date('2024-06-15'),
  },
]

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    orderId: 'order-1',
    senderId: 'system',
    senderName: 'System',
    content: 'Order has been confirmed and sent to the manufacturer.',
    attachments: [],
    isSystemMessage: true,
    createdAt: new Date('2024-06-15T10:00:00'),
    readBy: ['user-1'],
  },
  {
    id: 'msg-2',
    orderId: 'order-1',
    senderId: 'user-2',
    senderName: 'LYS Support',
    content: 'Your order has been received and is being processed. Expected shipping date is June 20th.',
    attachments: [],
    isSystemMessage: false,
    createdAt: new Date('2024-06-15T14:00:00'),
    readBy: ['user-1', 'user-2'],
  },
]