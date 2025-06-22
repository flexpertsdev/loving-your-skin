export interface OrderItem {
  productId: string;
  productName: string;
  brandId: string;
  brandName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  sku: string;
}

export interface OrderShipping {
  method: string;
  carrier: string;
  trackingNumber?: string;
  estimatedDelivery: string;
  cost: number;
  address: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state?: string;
    postalCode: string;
    country: string;
    contactName: string;
    contactPhone: string;
  };
}

export interface Order {
  id: string;
  orderNumber: string;
  retailerId: string;
  retailerName: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  shipping: OrderShipping;
  tax: number;
  total: number;
  currency: string;
  paymentTerms: string;
  paymentStatus: 'pending' | 'paid' | 'partial' | 'overdue';
  notes?: string;
  timeline: {
    date: string;
    status: string;
    description: string;
  }[];
}

export const mockOrders: Order[] = [
  {
    id: 'order-001',
    orderNumber: 'LYS-2024-001',
    retailerId: 'retailer-001',
    retailerName: 'Beauty Boutique London',
    status: 'delivered',
    orderDate: '2024-06-01',
    items: [
      {
        productId: 'wismin-001',
        productName: 'Bakuchiol Rejuvenating Serum',
        brandId: 'wismin',
        brandName: 'WISMIN',
        quantity: 24,
        unitPrice: 25,
        totalPrice: 600,
        sku: 'WIS-SER-001'
      },
      {
        productId: 'wismin-002',
        productName: 'Vitamin C Brightening Mask',
        brandId: 'wismin',
        brandName: 'WISMIN',
        quantity: 50,
        unitPrice: 4,
        totalPrice: 200,
        sku: 'WIS-MSK-002'
      }
    ],
    subtotal: 800,
    shipping: {
      method: 'Express',
      carrier: 'DHL',
      trackingNumber: 'DHL123456789',
      estimatedDelivery: '2024-06-05',
      cost: 45,
      address: {
        addressLine1: '123 Kensington High Street',
        addressLine2: 'Suite 5A',
        city: 'London',
        postalCode: 'W8 5SA',
        country: 'United Kingdom',
        contactName: 'Sarah Chen',
        contactPhone: '+44 20 7123 4567'
      }
    },
    tax: 160,
    total: 1005,
    currency: 'GBP',
    paymentTerms: 'NET30',
    paymentStatus: 'paid',
    timeline: [
      { date: '2024-06-01', status: 'Order Placed', description: 'Order received and confirmed' },
      { date: '2024-06-02', status: 'Processing', description: 'Order being prepared for shipment' },
      { date: '2024-06-03', status: 'Shipped', description: 'Package handed to DHL' },
      { date: '2024-06-05', status: 'Delivered', description: 'Package delivered and signed for' }
    ]
  },
  {
    id: 'order-002',
    orderNumber: 'LYS-2024-002',
    retailerId: 'retailer-002',
    retailerName: 'Belle Cosmétiques',
    status: 'shipped',
    orderDate: '2024-06-15',
    items: [
      {
        productId: 'lalucell-001',
        productName: 'Cotton Gentle Daily Cleanser',
        brandId: 'lalucell',
        brandName: 'LALUCELL',
        quantity: 48,
        unitPrice: 20,
        totalPrice: 960,
        sku: 'LAL-CLN-001'
      },
      {
        productId: 'lalucell-002',
        productName: 'Cotton Barrier Repair Serum',
        brandId: 'lalucell',
        brandName: 'LALUCELL',
        quantity: 24,
        unitPrice: 30,
        totalPrice: 720,
        sku: 'LAL-SER-002'
      },
      {
        productId: 'sunnicorn-001',
        productName: 'Ugly Tomato Vitamin Mask',
        brandId: 'sunnicorn',
        brandName: 'SUNNICORN',
        quantity: 100,
        unitPrice: 2.8,
        totalPrice: 280,
        sku: 'SUN-MSK-001'
      }
    ],
    subtotal: 1960,
    shipping: {
      method: 'Standard',
      carrier: 'FedEx',
      trackingNumber: 'FDX987654321',
      estimatedDelivery: '2024-06-22',
      cost: 65,
      address: {
        addressLine1: '78 Avenue des Champs-Élysées',
        city: 'Paris',
        postalCode: '75008',
        country: 'France',
        contactName: 'Marie Dubois',
        contactPhone: '+33 1 42 86 82 00'
      }
    },
    tax: 392,
    total: 2417,
    currency: 'EUR',
    paymentTerms: 'NET45',
    paymentStatus: 'pending',
    timeline: [
      { date: '2024-06-15', status: 'Order Placed', description: 'Order received and confirmed' },
      { date: '2024-06-16', status: 'Processing', description: 'Order being prepared for shipment' },
      { date: '2024-06-18', status: 'Shipped', description: 'Package handed to FedEx' }
    ]
  },
  {
    id: 'order-003',
    orderNumber: 'LYS-2024-003',
    retailerId: 'retailer-003',
    retailerName: 'Bellezza Italiana',
    status: 'processing',
    orderDate: '2024-06-20',
    items: [
      {
        productId: 'sunnicorn-002',
        productName: 'Wonky Carrot Repair Serum',
        brandId: 'sunnicorn',
        brandName: 'SUNNICORN',
        quantity: 24,
        unitPrice: 23,
        totalPrice: 552,
        sku: 'SUN-SER-002'
      },
      {
        productId: 'sunnicorn-003',
        productName: 'Misfit Apple Enzyme Peel',
        brandId: 'sunnicorn',
        brandName: 'SUNNICORN',
        quantity: 12,
        unitPrice: 28,
        totalPrice: 336,
        sku: 'SUN-TRT-003'
      },
      {
        productId: 'sunnicorn-004',
        productName: 'Odd Cucumber Cooling Gel',
        brandId: 'sunnicorn',
        brandName: 'SUNNICORN',
        quantity: 24,
        unitPrice: 20,
        totalPrice: 480,
        sku: 'SUN-GEL-004'
      }
    ],
    subtotal: 1368,
    shipping: {
      method: 'Express',
      carrier: 'UPS',
      estimatedDelivery: '2024-06-25',
      cost: 55,
      address: {
        addressLine1: 'Via Monte Napoleone 15',
        city: 'Milano',
        state: 'MI',
        postalCode: '20121',
        country: 'Italy',
        contactName: 'Giulia Romano',
        contactPhone: '+39 02 8905 2300'
      }
    },
    tax: 273.6,
    total: 1696.6,
    currency: 'EUR',
    paymentTerms: 'NET30',
    paymentStatus: 'pending',
    notes: 'Customer requested eco-friendly packaging',
    timeline: [
      { date: '2024-06-20', status: 'Order Placed', description: 'Order received and confirmed' },
      { date: '2024-06-21', status: 'Processing', description: 'Order being prepared with eco-packaging' }
    ]
  },
  {
    id: 'order-004',
    orderNumber: 'LYS-2024-004',
    retailerId: 'retailer-004',
    retailerName: 'Skin Paradise',
    status: 'pending',
    orderDate: '2024-06-21',
    items: [
      {
        productId: 'lalucell-003',
        productName: 'Belly Care Nourishing Oil',
        brandId: 'lalucell',
        brandName: 'LALUCELL',
        quantity: 12,
        unitPrice: 35,
        totalPrice: 420,
        sku: 'LAL-BOD-003'
      },
      {
        productId: 'lalucell-004',
        productName: 'E-Beam Hydrogel Mask',
        brandId: 'lalucell',
        brandName: 'LALUCELL',
        quantity: 24,
        unitPrice: 6,
        totalPrice: 144,
        sku: 'LAL-MSK-004'
      }
    ],
    subtotal: 564,
    shipping: {
      method: 'Standard',
      carrier: 'Swiss Post',
      estimatedDelivery: '2024-06-28',
      cost: 35,
      address: {
        addressLine1: 'Bahnhofstrasse 25',
        city: 'Zürich',
        postalCode: '8001',
        country: 'Switzerland',
        contactName: 'Elena Müller',
        contactPhone: '+41 44 123 45 67'
      }
    },
    tax: 56.4,
    total: 655.4,
    currency: 'CHF',
    paymentTerms: 'PREPAID',
    paymentStatus: 'paid',
    timeline: [
      { date: '2024-06-21', status: 'Order Placed', description: 'Order received, awaiting confirmation' }
    ]
  }
];

// Helper functions
export const getOrderById = (id: string): Order | undefined => {
  return mockOrders.find(order => order.id === id);
};

export const getOrdersByRetailer = (retailerId: string): Order[] => {
  return mockOrders.filter(order => order.retailerId === retailerId);
};

export const getOrdersByStatus = (status: Order['status']): Order[] => {
  return mockOrders.filter(order => order.status === status);
};

export const getOrdersByBrand = (brandId: string): Order[] => {
  return mockOrders.filter(order => 
    order.items.some(item => item.brandId === brandId)
  );
};

export const getRecentOrders = (limit: number = 5): Order[] => {
  return [...mockOrders]
    .sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
    .slice(0, limit);
};

export const calculateOrderMetrics = () => {
  const totalOrders = mockOrders.length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue = totalRevenue / totalOrders;
  const pendingOrders = mockOrders.filter(order => order.status === 'pending').length;
  
  return {
    totalOrders,
    totalRevenue,
    averageOrderValue,
    pendingOrders
  };
};