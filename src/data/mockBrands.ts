export interface Brand {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  founded: number;
  country: string;
  certifications: string[];
  specialties: string[];
  productCount: number;
  minOrderValue: number;
  currency: string;
  heroImage: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  technologies?: {
    name: string;
    description: string;
    patent?: string;
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  new: boolean;
}

export const mockBrands: Brand[] = [
  {
    id: 'wismin',
    slug: 'wismin',
    name: 'WISMIN',
    tagline: 'Plant-Powered Revolution in K-Beauty',
    description: 'Pioneering the use of bakuchiol as a natural retinol alternative, WISMIN combines cutting-edge biotechnology with traditional Korean skincare wisdom.',
    story: 'Founded by a team of dermatologists and biochemists, WISMIN emerged from years of research into plant-based alternatives to harsh chemical ingredients. Our breakthrough came with the stabilization of bakuchiol, delivering retinol-like benefits without irritation.',
    founded: 2018,
    country: 'South Korea',
    certifications: ['CPNP Certified', 'Vegan', 'Cruelty-Free', 'EWG Verified'],
    specialties: ['Anti-aging', 'Brightening', 'Natural Actives'],
    productCount: 24,
    minOrderValue: 500,
    currency: 'EUR',
    heroImage: '/images/brands/wismin-hero.jpg',
    logo: '/images/brands/wismin-logo.png',
    colors: {
      primary: '#F4E4C1',
      secondary: '#E8F0E3'
    },
    technologies: [
      {
        name: 'Bakuchiol Plus™',
        description: 'Patented stabilization technology that enhances bakuchiol bioavailability by 3x',
        patent: 'KR Patent #10-2019-0123456'
      },
      {
        name: 'K-Ferment Complex',
        description: 'Traditional Korean fermentation process that breaks down actives for better absorption'
      }
    ],
    stats: [
      { label: 'Clinical Studies', value: '12+' },
      { label: 'Awards Won', value: '8' },
      { label: 'Countries Sold', value: '15' }
    ],
    featured: true,
    new: false
  },
  {
    id: 'lalucell',
    slug: 'lalucell',
    name: 'LALUCELL',
    tagline: 'Cotton Like Derma - Unceasing Beauty for All Women',
    description: 'The trusted choice of Korean mothers, LALUCELL provides safe, natural skincare with scientific innovation. Strictly excluding ingredients prohibited for pregnant women.',
    story: 'LALUCELL was born from a mother\'s concern for safe skincare during pregnancy. Our founder, a pharmaceutical researcher, couldn\'t find products she trusted during her pregnancy, leading to the creation of our pregnancy-safe formulations.',
    founded: 2016,
    country: 'South Korea',
    certifications: ['CPNP Certified', 'Dermatologist Tested', '0.00 Irritation Score', 'Pregnancy Safe'],
    specialties: ['Pregnancy-Safe', 'Sensitive Skin', 'Barrier Repair'],
    productCount: 18,
    minOrderValue: 600,
    currency: 'EUR',
    heroImage: '/images/brands/lalucell-hero.jpg',
    logo: '/images/brands/lalucell-logo.png',
    colors: {
      primary: '#E8E3F5',
      secondary: '#E3F2ED'
    },
    technologies: [
      {
        name: 'ELASOME®',
        description: 'Liposome technology that increases skin absorption by at least 4 times',
        patent: 'Patent #10-1796822'
      },
      {
        name: 'TARAX III®',
        description: 'Pharmaceutical composition combining dandelion and barley extracts',
        patent: 'Patent #10-1376202'
      },
      {
        name: 'E-Beam Hydrogel',
        description: 'Revolutionary manufacturing using E-beam to sterilize and form Mesh Pocket® structures',
        patent: 'Patent #10-2466953'
      }
    ],
    stats: [
      { label: 'Pregnancy Safe', value: '100%' },
      { label: 'Irritation Score', value: '0.00' },
      { label: 'Mom-Approved', value: '50K+' }
    ],
    featured: true,
    new: false
  },
  {
    id: 'sunnicorn',
    slug: 'sunnicorn',
    name: 'SUNNICORN',
    tagline: 'Beauty from "Ugly" Food - Sustainable K-Beauty Revolution',
    description: 'Transforming rescued produce into powerful skincare. SUNNICORN upcycles "ugly" fruits and vegetables that would otherwise go to waste, extracting their potent nutrients for your skin.',
    story: 'SUNNICORN started in a Seoul farmers market, where our founder witnessed tons of perfectly nutritious produce being discarded for cosmetic imperfections. We partnered with local farms to rescue these ingredients, discovering they often contain higher concentrations of antioxidants.',
    founded: 2020,
    country: 'South Korea',
    certifications: ['CPNP Certified', 'Zero Waste Certified', 'Carbon Neutral', 'Organic'],
    specialties: ['Sustainable Beauty', 'Food-Grade Ingredients', 'Eco-Packaging'],
    productCount: 15,
    minOrderValue: 400,
    currency: 'EUR',
    heroImage: '/images/brands/sunnicorn-hero.jpg',
    logo: '/images/brands/sunnicorn-logo.png',
    colors: {
      primary: '#E3F0F8',
      secondary: '#E8F0E3'
    },
    technologies: [
      {
        name: 'Ugly Beauty Tech™',
        description: 'Cold-press extraction that preserves nutrients from imperfect produce'
      },
      {
        name: 'Zero-Waste Processing',
        description: 'Every part of the ingredient is used - peels for exfoliants, seeds for oils'
      }
    ],
    stats: [
      { label: 'Produce Rescued', value: '10 Tons' },
      { label: 'Carbon Saved', value: '50%' },
      { label: 'Farmers Supported', value: '25+' }
    ],
    featured: true,
    new: true
  }
];

export const getBrandById = (id: string): Brand | undefined => {
  return mockBrands.find(brand => brand.id === id);
};

export const getBrandBySlug = (slug: string): Brand | undefined => {
  return mockBrands.find(brand => brand.slug === slug);
};

export const getFeaturedBrands = (): Brand[] => {
  return mockBrands.filter(brand => brand.featured);
};

export const getNewBrands = (): Brand[] => {
  return mockBrands.filter(brand => brand.new);
};