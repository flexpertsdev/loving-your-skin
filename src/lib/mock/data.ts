import type { Order, Message } from '@/types'
import { mockBrands } from '@/data/mockBrands'
import { mockProducts } from '@/data/mockProducts'

// Re-export from other mock files
export { mockBrands, mockProducts }

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'order-1',
    orderNumber: 'LYS-2024-001',
    retailerId: 'retailer-1',
    brandId: 'wismin',
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
        productId: 'wismin-luminous-barrier-cream',
        quantity: 2, // cartons
        pricePerItem: 15.50,
        totalPrice: 372.00,
      },
      {
        productId: 'wismin-glacier-water-serum',
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