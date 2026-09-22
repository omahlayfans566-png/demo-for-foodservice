import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { galleryItems } from '../data/galleryData';
import { cn } from '../lib/cn';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight')
        setActive((v) => (v === null ? 0 : (v + 1) % galleryItems.length));
      if (e.key === 'ArrowLeft')
        setActive((v) => (v === null ? 0 : (v - 1 + galleryItems.length) % galleryItems.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const item = active === null ? null : galleryItems[active];

  return (
    <section id="gallery" className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-ink/45">Editorial Gallery</p>
              <h2 className="section-title mt-3">
                ATMOSPHERE<br />YOU CAN FEEL.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-ink/55 md:text-right">
              Food, drinks, interiors, and the moments around the table — all
              configurable with real restaurant photography.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric gallery grid */}
        <div className="gallery-grid mt-10">
          {galleryItems.map((gi, index) => (
            <button
              key={gi.id}
              onClick={() => setActive(index)}
              className={cn('gallery-item', gi.layout)}
              data-cursor="VIEW"
              aria-label={`View ${gi.title}`}
            >
              <img
                src={gi.image}
                alt={gi.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-left text-paper opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="block text-[0.6rem] uppercase tracking-[0.22em] text-paper/55">
                  {gi.type}
                </span>
                <span className="mt-1 block text-base font-semibold">{gi.title}</span>
              </span>

              {/* Always-visible bottom strip for accessibility */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 text-left text-paper">
                <span className="block text-[0.58rem] uppercase tracking-[0.18em] text-paper/50">
                  {gi.type}
                </span>
                <span className="mt-0.5 block text-sm font-semibold">{gi.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {item && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${item.title}`}
          onClick={() => setActive(null)}
        >
          {/* Close button */}
          <button
            className="absolute right-5 top-5 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-paper backdrop-blur transition hover:bg-white/[0.12]"
            onClick={() => setActive(null)}
          >
            Close ✕
          </button>

          {/* Prev / Next */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-white/[0.06] px-3 py-4 text-paper backdrop-blur transition hover:bg-white/[0.12]"
            onClick={(e) => { e.stopPropagation(); setActive((v) => v === null ? 0 : (v - 1 + galleryItems.length) % galleryItems.length); }}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-white/[0.06] px-3 py-4 text-paper backdrop-blur transition hover:bg-white/[0.12]"
            onClick={(e) => { e.stopPropagation(); setActive((v) => v === null ? 0 : (v + 1) % galleryItems.length); }}
            aria-label="Next image"
          >
            →
          </button>

          <figure
            className="max-h-[88svh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[76svh] w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-paper/70">
              <span className="text-[0.62rem] uppercase tracking-[0.22em] text-paper/40">
                {item.type} ·{' '}
              </span>
              {item.title}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
