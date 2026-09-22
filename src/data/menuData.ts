export type MenuCategory =
  | 'ALL'
  | 'STARTERS'
  | 'MAINS'
  | 'GRILLS'
  | 'RICE'
  | 'PASTA'
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
  'RICE',
  'PASTA',
  'DRINKS',
  'DESSERTS',
];

export const menuItems: MenuItem[] = [
  // ── RICE ──────────────────────────────────────────────────────────────────
  {
    id: 'party-jollof',
    name: 'Party Jollof',
    description: 'Smoky fire-side jollof rice, slow-cooked in a rich tomato-pepper base with bay leaf and thyme. The real deal.',
    price: 7500,
    category: 'RICE',
    badge: 'Chef Pick',
    // Actual Nigerian party jollof rice in a pot — red-orange tomato base, recognisable
    image: 'https://images.unsplash.com/photo-1665672271822-a3ab5a86f8e0?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    description: 'Fragrant long-grain rice cooked in coconut milk with fresh shrimp, bell peppers and seasoning.',
    price: 7200,
    category: 'RICE',
    // Coconut rice — white pearlescent with shrimp
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'fried-rice',
    name: 'Nigerian Fried Rice',
    description: 'Classic Lagos-style fried rice with mixed vegetables, carrots, green peas and liver. Rich, colourful, satisfying.',
    price: 7000,
    category: 'RICE',
    badge: 'Fan Fav',
    // Nigerian / Asian-style fried rice — colourful with veg
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'asun-rice',
    name: 'Asun Rice',
    description: 'Smoky peppered goat meat served over jollof rice. A Lagos party classic elevated for a premium table.',
    price: 9800,
    category: 'RICE',
    badge: 'Signature',
    // Rice with dark, sticky peppered meat on top
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'pepper-rice',
    name: 'Pepper Rice',
    description: 'Spiced ofada-style rice with a bold ayamase green pepper stew, assorted proteins and palm oil.',
    price: 8500,
    category: 'RICE',
    // Spiced rice with pepper sauce — warm tones
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=85',
  },

  // ── GRILLS ──────────────────────────────────────────────────────────────
  {
    id: 'suya-skewers',
    name: 'Suya Skewers',
    description: 'Thin-cut beef marinated in house yaji spice, char-grilled on open fire. Served with sliced onions and tomatoes.',
    price: 8800,
    category: 'GRILLS',
    badge: 'Spicy',
    // Beef skewers on grill — charred, smoky close-up
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'asun',
    name: 'Peppered Asun',
    description: 'Bite-sized smoked goat meat tossed in a fiery scotch bonnet and green pepper sauce. Crispy, smoky, punchy.',
    price: 10500,
    category: 'GRILLS',
    badge: 'Hot',
    // Charred peppered meat chunks — dark, crispy, glistening
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Peppered Chicken',
    description: 'Half-bird marinated in suya spice, grilled whole. Finished with a pepper-onion sauce and herb oil drizzle.',
    price: 12500,
    category: 'GRILLS',
    // Golden-brown whole grilled chicken on grill
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'peppered-meat',
    name: 'Peppered Meat',
    description: 'Assorted slow-cooked offal and beef in a thick scotch bonnet sauce. A bold Lagos classic done with precision.',
    price: 9200,
    category: 'GRILLS',
    badge: 'Popular',
    // Dark thick pepper stew with chunks of meat
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=85',
  },

  // ── STARTERS ──────────────────────────────────────────────────────────
  {
    id: 'small-chops',
    name: 'Small Chops Platter',
    description: 'Crispy puff-puff, spring rolls, samosas and peppered turkey skewers. The party must start somewhere.',
    price: 6800,
    category: 'STARTERS',
    badge: 'Party Plate',
    // Assorted fried snacks / party bites platter
    image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'moi-moi',
    name: 'Premium Moi Moi',
    description: 'Steamed black-eyed pea pudding packed with boiled egg, crayfish, and minced fish. Rich and deeply satisfying.',
    price: 4800,
    category: 'STARTERS',
    // Warm steamed pudding / bean cake in leaf — close-up
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'fried-plantain',
    name: 'Crispy Plantain',
    description: 'Sweet ripe plantain, sliced thick and fried golden. Served with a house pepper dipping sauce.',
    price: 3800,
    category: 'STARTERS',
    // Golden fried plantain slices — recognisable
    image: 'https://images.unsplash.com/photo-1609167867399-0e70beb91a01?auto=format&fit=crop&w=900&q=85',
  },

  // ── PASTA ──────────────────────────────────────────────────────────────
  {
    id: 'prawn-linguine',
    name: 'Tiger Prawn Linguine',
    description: 'Jumbo tiger prawns, nduja butter, charred lemon, parsley breadcrumbs. Italian technique, Lagos heat.',
    price: 15800,
    category: 'PASTA',
    // Prawn pasta with herbs — premium plating
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'truffle-pasta',
    name: 'Truffle Cream Pasta',
    description: 'Silk tagliatelle, parmesan cloud, black truffle shavings, charred mushrooms. Pure indulgence.',
    price: 13500,
    category: 'PASTA',
    badge: 'Vegetarian',
    // Creamy pasta with mushrooms — restaurant quality
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85',
  },

  // ── MAINS ──────────────────────────────────────────────────────────────
  {
    id: 'ribeye-steak',
    name: 'Pepper Steak',
    description: '250g aged ribeye, Nigerian pepper sauce, bone-marrow butter, crispy shallots, and herbed jollof risotto.',
    price: 28000,
    category: 'MAINS',
    badge: 'Premium',
    // Seared ribeye steak with sauce — rich plating
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85',
  },

  // ── DRINKS ──────────────────────────────────────────────────────────────
  {
    id: 'zobo-sunrise',
    name: 'Zobo Sunrise',
    description: 'House hibiscus zobo, fresh ginger, orange blossom, served over crushed ice with a spiced rim.',
    price: 3800,
    category: 'DRINKS',
    badge: 'House Special',
    // Deep red hibiscus drink / red cocktail in glass
    image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'cold-brew',
    name: 'Lagos Cold Brew',
    description: 'Single-origin Nigerian Plateau coffee, 24-hour cold brew, poured over coconut milk foam.',
    price: 4500,
    category: 'DRINKS',
    // Cold brew coffee in glass with foam
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85',
  },

  // ── DESSERTS ──────────────────────────────────────────────────────────
  {
    id: 'chin-chin-cheesecake',
    name: 'Chin Chin Cheesecake',
    description: 'Creamy vanilla cheesecake on a chin-chin crumble crust, hibiscus gel, toasted coconut flakes.',
    price: 7200,
    category: 'DESSERTS',
    badge: 'House Made',
    // Elegant plated cheesecake slice with garnish
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'puff-puff-sundae',
    name: 'Puff Puff Sundae',
    description: 'Warm sugared puff puff bites, vanilla bean ice cream, salted caramel, crushed kuli kuli.',
    price: 6500,
    category: 'DESSERTS',
    // Donut-style fried bites / ice cream dessert
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=85',
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);
