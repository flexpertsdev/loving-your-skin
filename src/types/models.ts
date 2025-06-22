// User Types
export type UserType = 'RETAILER' | 'TEAM_MEMBER' | 'BRAND_REP'
export type TeamRole = 'ADMIN' | 'SALES_REP' | 'SUPPORT'

export interface User {
  id: string
  email: string
  name?: string
  companyName?: string
  userType: UserType
  languagePreference: string
  createdAt: Date
  updatedAt: Date
}

export interface Retailer {
  id: string
  companyName: string
  contactPerson: string
  email: string
  phoneNumber: string
  website?: string
  addresses: RetailerAddress[]
  businessType: string
  yearEstablished: number
  taxId: string
  status: 'active' | 'inactive' | 'pending'
  verificationDate: string
  preferredLanguage: string
  preferredCurrency: string
  paymentTerms: string
  creditLimit: number
  tags: string[]
  notes?: string
  metadata?: Record<string, any>
}

export interface RetailerAddress {
  id: string
  type: 'shipping' | 'billing'
  isDefault: boolean
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode: string
  country: string
  contactName: string
  contactPhone: string
}

export interface TeamMember {
  id: string
  retailerId: string
  name: string
  email: string
  role: string
  permissions: string[]
  status: 'active' | 'inactive' | 'pending'
  invitedBy: string
  invitedDate: string
  lastLogin?: string
}

export interface Brand {
  id: string
  slug: string
  name: string
  tagline: string
  description: LocalizedContent
  story: LocalizedContent
  values: string[]
  certifications: string[]
  logoUrl: string
  heroImageUrl: string
  brandColorPrimary: string
  brandColorSecondary: string
  featured: boolean
  launchDate: string
  countryOfOrigin: string
  categories: string[]
  socialMedia?: {
    instagram?: string
    youtube?: string
    website?: string
  }
  founderStory?: LocalizedContent
  ingredients?: {
    featured: string[]
    philosophy: LocalizedContent
  }
  technologies?: {
    name: string
    description: string
    patent?: string
  }[]
}

export interface Product {
  id: string
  brandId: string
  sku: string
  name: LocalizedContent
  description: LocalizedContent
  shortDescription: LocalizedContent
  category: string
  subcategory: string
  images: {
    primary: string
    gallery: string[]
    lifestyle?: string[]
  }
  moq: number
  priceTiers: PriceTier[]
  stockStatus: 'in_stock' | 'limited' | 'out_of_stock' | 'pre_order'
  leadTime: string
  expiryDate?: string
  ingredients: {
    key: string[]
    full: string
  }
  usage: LocalizedContent
  benefits: string[]
  certifications: string[]
  awards?: string[]
  packagingInfo: {
    unitsPerCarton: number
    cartonDimensions: string
    cartonWeight: string
    productDimensions: string
    productWeight: string
  }
  retailPrice?: {
    amount: number
    currency: string
  }
  tags: string[]
  featured: boolean
  new: boolean
  bestseller: boolean
  limitedEdition: boolean
  exclusiveToRegions?: string[]
}

export interface PriceTier {
  minQty: number
  maxQty?: number
  pricePerUnit: number
  currency: string
}

export interface Order {
  id: string
  orderNumber: string
  retailerId: string
  brandId: string
  status: OrderStatus
  totalAmount: number
  shippingAddress: Address
  notes?: string
  items: OrderItem[]
  createdAt: Date
  confirmedAt?: Date
  invoicedAt?: Date
  paidAt?: Date
  shippedAt?: Date
  deliveredAt?: Date
}

export interface CartItem {
  id: string
  productId: string
  quantity: number // in cartons
  product?: Product
}

export interface Message {
  id: string
  orderId: string
  senderId: string
  senderName: string
  content: string
  attachments: string[]
  isSystemMessage: boolean
  createdAt: Date
  readBy: string[]
}

// Supporting Types
export interface Address {
  street: string
  city: string
  state?: string
  postalCode: string
  country: string
}

export interface LocalizedContent {
  en: string
  ko?: string
  zh?: string
}

export interface Certification {
  type: 'CPNP_UK' | 'CPNP_EU' | 'CPNP_CH'
  region: string
}

export interface OrderItem {
  productId: string
  quantity: number
  pricePerItem: number
  totalPrice: number
}

export type OrderStatus = 
  | 'PENDING_CONFIRMATION'
  | 'PROCESSING'
  | 'INVOICE_GENERATED'
  | 'PAYMENT_PENDING'
  | 'PAYMENT_RECEIVED'
  | 'PREPARING_SHIPMENT'
  | 'SHIPPED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'CANCELLED'