export interface PriceTier {
  minQuantity: number;
  price: number;
}

export interface Product {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  subcategory: string;
  images: string[];
  ingredients: string[];
  size: string;
  sku: string;
  moq: number; // Minimum Order Quantity
  priceTiers: PriceTier[];
  inStock: boolean;
  stockLevel?: number;
  featured: boolean;
  new: boolean;
  benefits: string[];
  usage: string;
  certifications: string[];
  shelfLife: string;
  madeIn: string;
}

export const mockProducts: Product[] = [
  // WISMIN Products
  {
    id: 'wismin-001',
    brandId: 'wismin',
    brandName: 'WISMIN',
    name: 'Bakuchiol Rejuvenating Serum',
    shortDescription: 'Natural retinol alternative with 2% bakuchiol',
    description: 'A revolutionary anti-aging serum featuring our patented Bakuchiol Plus™ technology. This gentle yet powerful formula delivers retinol-like benefits without irritation, making it perfect for all skin types including sensitive skin.',
    category: 'Skincare',
    subcategory: 'Serums',
    images: ['/images/products/wismin-bakuchiol-serum.jpg'],
    ingredients: ['Bakuchiol (2%)', 'Niacinamide', 'Hyaluronic Acid', 'Centella Asiatica', 'Green Tea Extract'],
    size: '30ml',
    sku: 'WIS-SER-001',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 28 },
      { minQuantity: 24, price: 25 },
      { minQuantity: 48, price: 22 },
      { minQuantity: 96, price: 20 }
    ],
    inStock: true,
    stockLevel: 500,
    featured: true,
    new: false,
    benefits: ['Reduces fine lines', 'Improves skin texture', 'Brightens complexion', 'No irritation'],
    usage: 'Apply 2-3 drops to clean face morning and evening. Follow with moisturizer.',
    certifications: ['CPNP', 'Vegan', 'EWG Verified'],
    shelfLife: '24 months',
    madeIn: 'South Korea'
  },
  {
    id: 'wismin-002',
    brandId: 'wismin',
    brandName: 'WISMIN',
    name: 'Vitamin C Brightening Mask',
    shortDescription: 'K-Ferment Complex with stabilized Vitamin C',
    description: 'Luxurious sheet mask infused with our K-Ferment Complex and 15% stabilized Vitamin C. Brightens dull skin and reduces dark spots in just 20 minutes.',
    category: 'Skincare',
    subcategory: 'Masks',
    images: ['/images/products/wismin-vitamin-c-mask.jpg'],
    ingredients: ['Vitamin C (15%)', 'Fermented Rice Water', 'Arbutin', 'Licorice Root', 'Kojic Acid'],
    size: '25ml x 5 sheets',
    sku: 'WIS-MSK-002',
    moq: 20,
    priceTiers: [
      { minQuantity: 20, price: 4.5 },
      { minQuantity: 50, price: 4 },
      { minQuantity: 100, price: 3.5 },
      { minQuantity: 200, price: 3 }
    ],
    inStock: true,
    stockLevel: 1000,
    featured: true,
    new: true,
    benefits: ['Instant brightening', 'Reduces hyperpigmentation', 'Evens skin tone', 'Hydrates deeply'],
    usage: 'Apply mask to clean face. Leave for 20 minutes. Pat remaining essence into skin.',
    certifications: ['CPNP', 'Vegan'],
    shelfLife: '36 months',
    madeIn: 'South Korea'
  },
  {
    id: 'wismin-003',
    brandId: 'wismin',
    brandName: 'WISMIN',
    name: 'Plant Collagen Day Cream',
    shortDescription: 'Vegan collagen alternative with SPF 30',
    description: 'Lightweight day cream featuring plant-derived collagen boosters and mineral SPF 30. Provides all-day hydration while protecting from UV damage.',
    category: 'Skincare',
    subcategory: 'Moisturizers',
    images: ['/images/products/wismin-day-cream.jpg'],
    ingredients: ['Plant Collagen Complex', 'Zinc Oxide', 'Squalane', 'Peptides', 'Vitamin E'],
    size: '50ml',
    sku: 'WIS-CRM-003',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 32 },
      { minQuantity: 24, price: 29 },
      { minQuantity: 48, price: 26 },
      { minQuantity: 96, price: 24 }
    ],
    inStock: true,
    stockLevel: 300,
    featured: false,
    new: false,
    benefits: ['SPF 30 protection', 'Anti-aging', 'Deep hydration', 'Non-greasy finish'],
    usage: 'Apply liberally to face and neck every morning. Reapply if exposed to sun.',
    certifications: ['CPNP', 'Vegan', 'Reef-Safe'],
    shelfLife: '24 months',
    madeIn: 'South Korea'
  },

  // LALUCELL Products
  {
    id: 'lalucell-001',
    brandId: 'lalucell',
    brandName: 'LALUCELL',
    name: 'Cotton Gentle Daily Cleanser',
    shortDescription: 'Ultra-mild cleanser safe for pregnancy',
    description: 'pH-balanced gentle cleanser that removes impurities without stripping natural oils. Formulated without any ingredients prohibited during pregnancy, with our Cotton Like Derma technology.',
    category: 'Skincare',
    subcategory: 'Cleansers',
    images: ['/images/products/lalucell-cleanser.jpg'],
    ingredients: ['Cotton Extract', 'Coconut-derived Surfactants', 'Panthenol', 'Allantoin', 'Chamomile'],
    size: '150ml',
    sku: 'LAL-CLN-001',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 24 },
      { minQuantity: 24, price: 22 },
      { minQuantity: 48, price: 20 },
      { minQuantity: 96, price: 18 }
    ],
    inStock: true,
    stockLevel: 600,
    featured: true,
    new: false,
    benefits: ['Pregnancy-safe', 'Non-irritating', 'Maintains skin barrier', 'Removes makeup gently'],
    usage: 'Massage onto damp face, rinse with lukewarm water. Use morning and evening.',
    certifications: ['CPNP', 'Dermatologist Tested', '0.00 Irritation'],
    shelfLife: '24 months',
    madeIn: 'South Korea'
  },
  {
    id: 'lalucell-002',
    brandId: 'lalucell',
    brandName: 'LALUCELL',
    name: 'Cotton Barrier Repair Serum',
    shortDescription: 'ELASOME® enhanced hydration serum',
    description: 'Advanced barrier repair serum utilizing our patented ELASOME® liposome technology for 4x better absorption. Strengthens skin barrier and provides deep hydration for sensitive skin.',
    category: 'Skincare',
    subcategory: 'Serums',
    images: ['/images/products/lalucell-barrier-serum.jpg'],
    ingredients: ['ELASOME® Complex', 'Ceramides', 'Cholesterol', 'Fatty Acids', 'Centella Asiatica'],
    size: '30ml',
    sku: 'LAL-SER-002',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 32 },
      { minQuantity: 24, price: 30 },
      { minQuantity: 48, price: 27 },
      { minQuantity: 96, price: 25 }
    ],
    inStock: true,
    stockLevel: 400,
    featured: true,
    new: false,
    benefits: ['4x absorption', 'Barrier repair', 'Deep hydration', 'Reduces sensitivity'],
    usage: 'Apply 2-3 pumps to clean face. Gently pat for absorption.',
    certifications: ['CPNP', 'Pregnancy Safe', 'Dermatologist Tested'],
    shelfLife: '24 months',
    madeIn: 'South Korea'
  },
  {
    id: 'lalucell-003',
    brandId: 'lalucell',
    brandName: 'LALUCELL',
    name: 'Belly Care Nourishing Oil',
    shortDescription: 'Stretch mark prevention for pregnancy',
    description: 'Specially formulated body oil for expecting mothers. Rich in natural oils and vitamin E to maintain skin elasticity and prevent stretch marks.',
    category: 'Body Care',
    subcategory: 'Body Oils',
    images: ['/images/products/lalucell-belly-oil.jpg'],
    ingredients: ['Sweet Almond Oil', 'Jojoba Oil', 'Vitamin E', 'Rosehip Oil', 'Argan Oil'],
    size: '100ml',
    sku: 'LAL-BOD-003',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 35 },
      { minQuantity: 24, price: 32 },
      { minQuantity: 48, price: 29 },
      { minQuantity: 96, price: 27 }
    ],
    inStock: true,
    stockLevel: 350,
    featured: false,
    new: true,
    benefits: ['Prevents stretch marks', 'Improves elasticity', 'Deep nourishment', 'Fast absorption'],
    usage: 'Massage gently onto belly, hips, and breasts twice daily from second trimester.',
    certifications: ['CPNP', 'Pregnancy Safe', 'Organic Ingredients'],
    shelfLife: '18 months',
    madeIn: 'South Korea'
  },
  {
    id: 'lalucell-004',
    brandId: 'lalucell',
    brandName: 'LALUCELL',
    name: 'E-Beam Hydrogel Mask',
    shortDescription: 'Sterilized hydrogel mask with Mesh Pocket®',
    description: 'Revolutionary hydrogel mask manufactured with E-Beam technology for complete sterility. Features our Mesh Pocket® structure for enhanced ingredient delivery.',
    category: 'Skincare',
    subcategory: 'Masks',
    images: ['/images/products/lalucell-hydrogel-mask.jpg'],
    ingredients: ['Hydrogel Base', 'TARAX III® Complex', 'Hyaluronic Acid', 'Peptides', 'Niacinamide'],
    size: '30g x 5 masks',
    sku: 'LAL-MSK-004',
    moq: 24,
    priceTiers: [
      { minQuantity: 24, price: 6 },
      { minQuantity: 48, price: 5.5 },
      { minQuantity: 96, price: 5 },
      { minQuantity: 192, price: 4.5 }
    ],
    inStock: true,
    stockLevel: 800,
    featured: false,
    new: false,
    benefits: ['100% sterile', 'Cooling effect', 'Intense hydration', 'Calms irritation'],
    usage: 'Apply to clean face for 20-30 minutes. No rinse needed.',
    certifications: ['CPNP', 'Medical-grade Sterility'],
    shelfLife: '36 months',
    madeIn: 'South Korea'
  },

  // SUNNICORN Products
  {
    id: 'sunnicorn-001',
    brandId: 'sunnicorn',
    brandName: 'SUNNICORN',
    name: 'Ugly Tomato Vitamin Mask',
    shortDescription: 'Upcycled tomato extract brightening mask',
    description: 'Sheet mask made from rescued "ugly" tomatoes that are too imperfect for retail. These tomatoes contain 30% more lycopene, delivering superior antioxidant benefits.',
    category: 'Skincare',
    subcategory: 'Masks',
    images: ['/images/products/sunnicorn-tomato-mask.jpg'],
    ingredients: ['Upcycled Tomato Extract', 'Lycopene', 'Vitamin C', 'Niacinamide', 'Hyaluronic Acid'],
    size: '25ml x 5 sheets',
    sku: 'SUN-MSK-001',
    moq: 20,
    priceTiers: [
      { minQuantity: 20, price: 3.5 },
      { minQuantity: 50, price: 3.2 },
      { minQuantity: 100, price: 2.8 },
      { minQuantity: 200, price: 2.5 }
    ],
    inStock: true,
    stockLevel: 1200,
    featured: true,
    new: true,
    benefits: ['Brightening', 'Anti-oxidant rich', 'Reduces redness', 'Sustainable beauty'],
    usage: 'Apply to clean face for 15-20 minutes. Pat remaining essence.',
    certifications: ['CPNP', 'Zero Waste', 'Upcycled Certified'],
    shelfLife: '24 months',
    madeIn: 'South Korea'
  },
  {
    id: 'sunnicorn-002',
    brandId: 'sunnicorn',
    brandName: 'SUNNICORN',
    name: 'Wonky Carrot Repair Serum',
    shortDescription: 'Beta-carotene rich repair serum',
    description: 'Potent repair serum made from wonky carrots rejected by supermarkets. These carrots have concentrated nutrients, providing exceptional skin repair and protection.',
    category: 'Skincare',
    subcategory: 'Serums',
    images: ['/images/products/sunnicorn-carrot-serum.jpg'],
    ingredients: ['Wonky Carrot Extract', 'Beta-Carotene', 'Vitamin A', 'Rosehip Oil', 'Squalane'],
    size: '30ml',
    sku: 'SUN-SER-002',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 25 },
      { minQuantity: 24, price: 23 },
      { minQuantity: 48, price: 21 },
      { minQuantity: 96, price: 19 }
    ],
    inStock: true,
    stockLevel: 450,
    featured: true,
    new: false,
    benefits: ['Skin repair', 'Anti-aging', 'Improves elasticity', 'Environmental protection'],
    usage: 'Apply 2-3 drops morning and evening after cleansing.',
    certifications: ['CPNP', 'Organic', 'Carbon Neutral'],
    shelfLife: '18 months',
    madeIn: 'South Korea'
  },
  {
    id: 'sunnicorn-003',
    brandId: 'sunnicorn',
    brandName: 'SUNNICORN',
    name: 'Misfit Apple Enzyme Peel',
    shortDescription: 'Gentle AHA peel from discarded apples',
    description: 'Gentle enzymatic peel created from apples with cosmetic imperfections. Natural fruit acids provide effective exfoliation without harsh chemicals.',
    category: 'Skincare',
    subcategory: 'Treatments',
    images: ['/images/products/sunnicorn-apple-peel.jpg'],
    ingredients: ['Misfit Apple Extract', 'Natural AHAs', 'Papaya Enzyme', 'Willow Bark', 'Aloe Vera'],
    size: '50ml',
    sku: 'SUN-TRT-003',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 28 },
      { minQuantity: 24, price: 26 },
      { minQuantity: 48, price: 24 },
      { minQuantity: 96, price: 22 }
    ],
    inStock: true,
    stockLevel: 300,
    featured: false,
    new: false,
    benefits: ['Gentle exfoliation', 'Brightens skin', 'Minimizes pores', 'Zero waste'],
    usage: 'Apply thin layer to clean skin. Leave 10 minutes. Rinse. Use 2x weekly.',
    certifications: ['CPNP', 'Upcycled', 'Biodegradable Formula'],
    shelfLife: '18 months',
    madeIn: 'South Korea'
  },
  {
    id: 'sunnicorn-004',
    brandId: 'sunnicorn',
    brandName: 'SUNNICORN',
    name: 'Odd Cucumber Cooling Gel',
    shortDescription: 'Soothing gel from curved cucumbers',
    description: 'Refreshing gel made from cucumbers too curved for retail standards. These "odd" cucumbers have the same cooling and soothing properties, perfect for sensitive skin.',
    category: 'Skincare',
    subcategory: 'Moisturizers',
    images: ['/images/products/sunnicorn-cucumber-gel.jpg'],
    ingredients: ['Odd Cucumber Extract', 'Aloe Vera', 'Green Tea', 'Centella Asiatica', 'Bamboo Water'],
    size: '100ml',
    sku: 'SUN-GEL-004',
    moq: 12,
    priceTiers: [
      { minQuantity: 12, price: 22 },
      { minQuantity: 24, price: 20 },
      { minQuantity: 48, price: 18 },
      { minQuantity: 96, price: 16 }
    ],
    inStock: true,
    stockLevel: 500,
    featured: false,
    new: true,
    benefits: ['Instant cooling', 'Reduces inflammation', 'Lightweight hydration', 'Eco-friendly'],
    usage: 'Apply generously to face and body. Can be refrigerated for extra cooling.',
    certifications: ['CPNP', 'Zero Waste', 'Vegan'],
    shelfLife: '24 months',
    madeIn: 'South Korea'
  }
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByBrand = (brandId: string): Product[] => {
  return mockProducts.filter(product => product.brandId === brandId);
};

export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return mockProducts.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category);
};

export const calculatePrice = (product: Product, quantity: number): number => {
  const applicableTier = product.priceTiers
    .filter(tier => quantity >= tier.minQuantity)
    .sort((a, b) => b.minQuantity - a.minQuantity)[0];
  
  return applicableTier ? applicableTier.price : product.priceTiers[0].price;
};

export const calculateTotalPrice = (product: Product, quantity: number): number => {
  return calculatePrice(product, quantity) * quantity;
};