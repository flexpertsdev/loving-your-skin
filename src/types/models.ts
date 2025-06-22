// User Types
export type UserType = 'RETAILER' | 'TEAM_MEMBER' | 'BRAND_REP'
export type TeamRole = 'ADMIN' | 'SALES_REP' | 'SUPPORT'

export interface User {
  id: string
  email: string
  userType: UserType
  languagePreference: string
  createdAt: Date
  updatedAt: Date
}

export interface Retailer {
  id: string
  userId: string
  companyName: string
  vatNumber?: string
  address: Address
  salesRepId: string
}

export interface TeamMember {
  id: string
  userId: string
  role: TeamRole
}

export interface Brand {
  id: string
  name: string
  slug: string
  description: LocalizedContent
  story: LocalizedContent
  logoUrl?: string
  isActive: boolean
}

export interface Product {
  id: string
  brandId: string
  name: LocalizedContent
  description: LocalizedContent
  images: string[]
  pricePerItem: number
  itemsPerCarton: number
  pricePerCarton: number
  minimumOrderQty: number
  sku: string
  isActive: boolean
  categories: string[]
  certifications: Certification[]
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