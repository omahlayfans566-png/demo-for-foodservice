export type GalleryItem = {
  id: string;
  title: string;
  type: 'Food' | 'Drink' | 'Interior' | 'Dining';
  image: string;
  layout: 'wide' | 'tall' | 'square';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'jollof-hero',
    title: 'Party jollof, served hot',
    type: 'Food',
    layout: 'wide',
    // Nigerian party jollof rice — red-orange, recognisable
    image: 'https://images.unsplash.com/photo-1665672271822-a3ab5a86f8e0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'peppered-meat',
    title: 'Peppered asun — charcoal finished',
    type: 'Food',
    layout: 'tall',
    // Dark, crispy charred meat close-up
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'zobo-drinks',
    title: 'House zobo cocktails',
    type: 'Drink',
    layout: 'square',
    // Deep red drink in glass — hibiscus / zobo look
    image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'dining-room',
    title: 'Premium dining atmosphere',
    type: 'Interior',
    layout: 'wide',
    // Warm lit restaurant interior
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'suya-grill',
    title: 'Suya — live grill station',
    type: 'Food',
    layout: 'square',
    // Beef skewers on fire grill
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'grilled-chicken',
    title: 'Peppered grilled chicken',
    type: 'Dining',
    layout: 'tall',
    // Golden grilled chicken close-up
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85',
  },
];
