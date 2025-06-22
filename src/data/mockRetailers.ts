import type { Retailer, TeamMember } from '@/types';

export const mockRetailers: Retailer[] = [
  {
    id: 'retailer-001',
    companyName: 'Beauty Boutique London',
    contactPerson: 'Sarah Chen',
    email: 'sarah@beautyboutiquelondon.com',
    phoneNumber: '+44 20 7123 4567',
    website: 'https://beautyboutiquelondon.com',
    addresses: [
      {
        id: 'addr-001',
        type: 'shipping',
        isDefault: true,
        addressLine1: '123 Kensington High Street',
        addressLine2: 'Suite 5A',
        city: 'London',
        state: '',
        postalCode: 'W8 5SA',
        country: 'United Kingdom',
        contactName: 'Sarah Chen',
        contactPhone: '+44 20 7123 4567'
      },
      {
        id: 'addr-002',
        type: 'billing',
        isDefault: true,
        addressLine1: '456 Oxford Street',
        addressLine2: '',
        city: 'London',
        state: '',
        postalCode: 'W1D 1BS',
        country: 'United Kingdom',
        contactName: 'Accounts Department',
        contactPhone: '+44 20 7123 4568'
      }
    ],
    businessType: 'Beauty Retailer',
    yearEstablished: 2015,
    taxId: 'GB123456789',
    status: 'active',
    verificationDate: '2024-01-15',
    preferredLanguage: 'en',
    preferredCurrency: 'GBP',
    paymentTerms: 'NET30',
    creditLimit: 10000,
    tags: ['premium', 'multi-store', 'online'],
    notes: 'One of our first UK partners. Excellent payment history.',
    metadata: {
      monthlyOrderVolume: '£5000-10000',
      preferredBrands: ['LALUCELL', 'WISMIN'],
      storeLocations: 3
    }
  },
  {
    id: 'retailer-002',
    companyName: 'Belle Cosmétiques',
    contactPerson: 'Marie Dubois',
    email: 'marie@bellecosmetiques.fr',
    phoneNumber: '+33 1 42 86 82 00',
    website: 'https://bellecosmetiques.fr',
    addresses: [
      {
        id: 'addr-003',
        type: 'shipping',
        isDefault: true,
        addressLine1: '78 Avenue des Champs-Élysées',
        addressLine2: '',
        city: 'Paris',
        state: '',
        postalCode: '75008',
        country: 'France',
        contactName: 'Marie Dubois',
        contactPhone: '+33 1 42 86 82 00'
      }
    ],
    businessType: 'Luxury Beauty Chain',
    yearEstablished: 2012,
    taxId: 'FR12345678901',
    status: 'active',
    verificationDate: '2024-02-01',
    preferredLanguage: 'fr',
    preferredCurrency: 'EUR',
    paymentTerms: 'NET45',
    creditLimit: 15000,
    tags: ['luxury', 'chain', 'established'],
    notes: 'High-volume buyer, prefers exclusive products',
    metadata: {
      monthlyOrderVolume: '€8000-15000',
      preferredBrands: ['WISMIN', 'SUNNICORN'],
      storeLocations: 5
    }
  },
  {
    id: 'retailer-003',
    companyName: 'Bellezza Italiana',
    contactPerson: 'Giulia Romano',
    email: 'giulia@bellezzaitaliana.it',
    phoneNumber: '+39 02 8905 2300',
    website: 'https://bellezzaitaliana.it',
    addresses: [
      {
        id: 'addr-004',
        type: 'shipping',
        isDefault: true,
        addressLine1: 'Via Monte Napoleone 15',
        addressLine2: '',
        city: 'Milano',
        state: 'MI',
        postalCode: '20121',
        country: 'Italy',
        contactName: 'Giulia Romano',
        contactPhone: '+39 02 8905 2300'
      }
    ],
    businessType: 'Boutique Beauty Store',
    yearEstablished: 2018,
    taxId: 'IT12345678901',
    status: 'active',
    verificationDate: '2024-03-10',
    preferredLanguage: 'it',
    preferredCurrency: 'EUR',
    paymentTerms: 'NET30',
    creditLimit: 8000,
    tags: ['boutique', 'eco-conscious', 'trendsetter'],
    notes: 'Focuses on sustainable and innovative brands',
    metadata: {
      monthlyOrderVolume: '€3000-8000',
      preferredBrands: ['SUNNICORN', 'LALUCELL'],
      storeLocations: 2
    }
  },
  {
    id: 'retailer-004',
    companyName: 'Skin Paradise',
    contactPerson: 'Elena Müller',
    email: 'elena@skinparadise.ch',
    phoneNumber: '+41 44 123 45 67',
    website: 'https://skinparadise.ch',
    addresses: [
      {
        id: 'addr-005',
        type: 'shipping',
        isDefault: true,
        addressLine1: 'Bahnhofstrasse 25',
        addressLine2: '',
        city: 'Zürich',
        state: '',
        postalCode: '8001',
        country: 'Switzerland',
        contactName: 'Elena Müller',
        contactPhone: '+41 44 123 45 67'
      }
    ],
    businessType: 'Premium Beauty E-commerce',
    yearEstablished: 2020,
    taxId: 'CHE-123.456.789',
    status: 'active',
    verificationDate: '2024-01-20',
    preferredLanguage: 'en',
    preferredCurrency: 'CHF',
    paymentTerms: 'PREPAID',
    creditLimit: 5000,
    tags: ['online-only', 'premium', 'fast-growing'],
    notes: 'Online-only retailer with strong social media presence',
    metadata: {
      monthlyOrderVolume: 'CHF 5000-10000',
      preferredBrands: ['LALUCELL', 'WISMIN', 'SUNNICORN'],
      storeLocations: 0
    }
  }
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: 'team-001',
    retailerId: 'retailer-001',
    name: 'Emma Thompson',
    email: 'admin@lys.com',
    role: 'Purchasing Manager',
    permissions: ['view_products', 'manage_cart', 'view_orders'],
    status: 'active',
    invitedBy: 'Sarah Chen',
    invitedDate: '2024-02-01',
    lastLogin: '2024-06-20'
  },
  {
    id: 'team-002',
    retailerId: 'retailer-001',
    name: 'James Wilson',
    email: 'james@beautyboutiquelondon.com',
    role: 'Store Manager',
    permissions: ['view_products', 'view_orders'],
    status: 'active',
    invitedBy: 'Sarah Chen',
    invitedDate: '2024-03-15',
    lastLogin: '2024-06-18'
  },
  {
    id: 'team-003',
    retailerId: 'retailer-002',
    name: 'Sophie Martin',
    email: 'sophie@bellecosmetiques.fr',
    role: 'Buyer',
    permissions: ['view_products', 'manage_cart', 'view_orders', 'manage_orders'],
    status: 'active',
    invitedBy: 'Marie Dubois',
    invitedDate: '2024-02-20',
    lastLogin: '2024-06-21'
  }
];

// Helper functions
export const getRetailerById = (id: string): Retailer | undefined => {
  return mockRetailers.find(retailer => retailer.id === id);
};

export const getTeamMembersByRetailer = (retailerId: string): TeamMember[] => {
  return mockTeamMembers.filter(member => member.retailerId === retailerId);
};

export const getActiveRetailers = (): Retailer[] => {
  return mockRetailers.filter(retailer => retailer.status === 'active');
};

export const getRetailersByCountry = (country: string): Retailer[] => {
  return mockRetailers.filter(retailer => 
    retailer.addresses.some(addr => addr.country === country)
  );
};

export const getRetailersByTag = (tag: string): Retailer[] => {
  return mockRetailers.filter(retailer => retailer.tags.includes(tag));
};