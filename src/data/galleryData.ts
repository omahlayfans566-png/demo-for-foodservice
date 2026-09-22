export type GalleryItem = {
  id: string;
  title: string;
  type: 'Food' | 'Drink' | 'Interior' | 'Dining';
  image: string;
  layout: 'wide' | 'tall' | 'square';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'plated-fire',
    title: 'Cinematic plated service',
    type: 'Food',
    layout: 'wide',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'chef-finish',
    title: 'Chef finishing a dish',
    type: 'Dining',
    layout: 'tall',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bar-glass',
    title: 'Signature drinks counter',
    type: 'Drink',
    layout: 'square',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'room',
    title: 'Premium dining atmosphere',
    type: 'Interior',
    layout: 'wide',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'table',
    title: 'Table story detail',
    type: 'Dining',
    layout: 'square',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dessert',
    title: 'Dessert texture study',
    type: 'Food',
    layout: 'tall',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
];
