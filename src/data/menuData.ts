export type MenuCategory =
  | 'ALL'
  | 'STARTERS'
  | 'MAINS'
  | 'GRILLS'
  | 'PASTA'
  | 'RICE'
  | 'DRINKS'
  | 'DESSERTS';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<MenuCategory, 'ALL'>;
  badge?: string;
  image: string;
};

export const categories: MenuCategory[] = [
  'ALL',
  'STARTERS',
  'MAINS',
  'GRILLS',
  'PASTA',
  'RICE',
  'DRINKS',
  'DESSERTS',
];

export const menuItems: MenuItem[] = [
  {
    id: 'ember-jollof',
    name: 'Ember Jollof',
    description: 'Smoked party rice, fire-roasted pepper oil, herbed plantain crisp.',
    price: 7200,
    category: 'RICE',
    badge: 'Chef pick',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'truffle-cream-pasta',
    name: 'Truffle Cream Pasta',
    description: 'Silk tagliatelle, parmesan cloud, black truffle, charred mushrooms.',
    price: 11800,
    category: 'PASTA',
    badge: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'charred-suya-skewers',
    name: 'Charred Suya Skewers',
    description: 'Spice-dusted beef skewers, peanut ash, cucumber ribbons, lime.',
    price: 9600,
    category: 'GRILLS',
    badge: 'Spicy',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coconut-prawn-bowl',
    name: 'Coconut Prawn Bowl',
    description: 'Tiger prawns, coconut curry glaze, basil oil, jasmine rice.',
    price: 13200,
    category: 'MAINS',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'smoked-chicken',
    name: 'Smoked Chicken',
    description: 'Slow smoked chicken, pepper glaze, fermented honey, garden greens.',
    price: 10500,
    category: 'GRILLS',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'velvet-cheesecake',
    name: 'Velvet Cheesecake',
    description: 'Vanilla bean cheesecake, hibiscus gel, toasted crumble.',
    price: 6200,
    category: 'DESSERTS',
    badge: 'Sweet',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'midnight-espresso',
    name: 'Midnight Espresso',
    description: 'Double espresso, cold cream veil, caramel smoke, dark cocoa.',
    price: 4200,
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'golden-small-chops',
    name: 'Golden Small Chops',
    description: 'Crisp pastry bites, pepper relish, whipped garlic aioli.',
    price: 5400,
    category: 'STARTERS',
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=80',
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);
