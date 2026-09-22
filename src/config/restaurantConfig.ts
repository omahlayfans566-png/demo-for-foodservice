export type ThemeKey = 'ember' | 'midnight' | 'ivory' | 'citrus';

export const restaurantConfig = {
  brandName: 'NOVA',
  tagline: 'PREMIUM NIGERIAN DINING.',
  positioning: 'Restaurant Digital Experience',
  creator: 'Afolayan Precious',
  disclosure:
    'Independent showcase concept - created to demonstrate a premium digital experience for restaurants.',
  shortDisclosure: 'Demo experience. All content is fictional and configurable.',
  contact: {
    phone: '+234 000 000 0000',
    whatsapp: '+234 000 000 0000',
    email: 'hello@example.com',
    address: 'Victoria Island, Lagos, Nigeria',
    instagram: '@novarestaurant',
    tiktok: '@novarestaurant',
  },
  hours: ['Mon–Thu 11:00–22:00', 'Fri–Sun 11:00–00:00'],
  links: ['Experience', 'Menu', 'Gallery', 'Reserve', 'Order'],
  // Cinematic African food spread — warm, rich, premium close-up plating
  heroImage:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1800&q=88',
  // Signature grilled peppered chicken plating — hero feature
  signatureImage:
    'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1800&q=88',
};

export const themes: Record<
  ThemeKey,
  {
    label: string;
    accent: string;
    accentSoft: string;
    surface: string;
    text: string;
  }
> = {
  ember: {
    label: 'Ember',
    accent: '#e8622a',
    accentSoft: '#f59460',
    surface: '#0f0a07',
    text: '#f7efe4',
  },
  midnight: {
    label: 'Midnight',
    accent: '#5ec4b0',
    accentSoft: '#93d8ca',
    surface: '#060c10',
    text: '#edf7f6',
  },
  ivory: {
    label: 'Ivory',
    accent: '#c89840',
    accentSoft: '#e8cc88',
    surface: '#f0e8da',
    text: '#16110c',
  },
  citrus: {
    label: 'Citrus',
    accent: '#c8d830',
    accentSoft: '#dfe87a',
    surface: '#090f04',
    text: '#f4f7e8',
  },
};
