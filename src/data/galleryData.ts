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
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=82',
  },
  {
    id: 'grill-station',
    title: 'Live fire grill station',
    type: 'Dining',
    layout: 'tall',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=82',
  },
  {
    id: 'zobo-drinks',
    title: 'House zobo cocktails',
    type: 'Drink',
    layout: 'square',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=900&q=82',
  },
  {
    id: 'dining-room',
    title: 'Premium dining atmosphere',
    type: 'Interior',
    layout: 'wide',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=82',
  },
  {
    id: 'small-chops',
    title: 'Small chops service',
    type: 'Food',
    layout: 'square',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82',
  },
  {
    id: 'suya-closeup',
    title: 'Suya — charcoal finished',
    type: 'Food',
    layout: 'tall',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=82',
  },
];
