import { useEffect, useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { cn } from '../lib/cn';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((value) => (value === null ? 0 : (value + 1) % galleryItems.length));
      if (event.key === 'ArrowLeft') setActive((value) => (value === null ? 0 : (value - 1 + galleryItems.length) % galleryItems.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const item = active === null ? null : galleryItems[active];

  return (
    <section id="gallery" className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-ink/50">Editorial Gallery</p>
            <h2 className="section-title mt-4">ATMOSPHERE YOU CAN FEEL.</h2>
          </div>
          <p className="max-w-lg text-ink/64">Asymmetric image storytelling for food, drinks, interiors, and the moments around the table.</p>
        </div>
        <div className="gallery-grid mt-10">
          {galleryItems.map((galleryItem, index) => (
            <button
              key={galleryItem.id}
              onClick={() => setActive(index)}
              className={cn('gallery-item group', galleryItem.layout)}
              data-cursor="VIEW"
            >
              <img src={galleryItem.image} alt={galleryItem.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/84 to-transparent p-4 text-left text-paper">
                <span className="block text-xs uppercase tracking-[0.2em] text-paper/60">{galleryItem.type}</span>
                <span className="mt-1 block text-lg font-semibold">{galleryItem.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {item && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/86 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <button className="absolute right-4 top-4 rounded-full border border-white/16 px-4 py-3 text-xs uppercase tracking-[0.2em] text-paper" onClick={() => setActive(null)}>
            Close
          </button>
          <figure className="max-h-[86svh] max-w-5xl">
            <img src={item.image} alt={item.title} className="max-h-[76svh] w-full object-contain" />
            <figcaption className="mt-4 text-paper">{item.title} - demonstration content</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
