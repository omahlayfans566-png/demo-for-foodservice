export type ThemeKey = 'ember' | 'midnight' | 'ivory' | 'citrus';

export const restaurantConfig = {
  brandName: 'NOVA',
  tagline: 'THE FUTURE OF DINING ONLINE.',
  positioning: 'Restaurant Digital Experience',
  creator: 'Afolayan Precious',
  disclosure:
    'Independent showcase concept - created to demonstrate a premium digital experience for restaurants.',
  shortDisclosure: 'Demo experience. All content is fictional and configurable.',
  contact: {
    phone: '+234 000 000 0000',
    whatsapp: '+234 000 000 0000',
    email: 'hello@example.com',
    address: 'Configurable location for your restaurant',
    instagram: '@novarestaurant',
    tiktok: '@novarestaurant',
  },
  hours: ['Mon-Thu 10:00-22:00', 'Fri-Sun 10:00-00:00'],
  links: ['Experience', 'Menu', 'Gallery', 'Reserve', 'Order'],
  heroImage:
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=82',
  signatureImage:
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1800&q=82',
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
    accent: '#d65f2f',
    accentSoft: '#f0a56a',
    surface: '#100907',
    text: '#f7efe4',
  },
  midnight: {
    label: 'Midnight',
    accent: '#6ec6c8',
    accentSoft: '#9bd7cf',
    surface: '#070b12',
    text: '#edf7f6',
  },
  ivory: {
    label: 'Ivory',
    accent: '#c59d52',
    accentSoft: '#ead2a0',
    surface: '#f2eadc',
    text: '#17120d',
  },
  citrus: {
    label: 'Citrus',
    accent: '#b4d330',
    accentSoft: '#e0ed8a',
    surface: '#0b1008',
    text: '#f4f7e7',
  },
};
