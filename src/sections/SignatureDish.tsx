import { useState } from 'react';
import { restaurantConfig } from '../config/restaurantConfig';
import { Button } from '../components/Button';

export function SignatureDish() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Full-bleed food image */}
      <img
        src={restaurantConfig.signatureImage}
        alt="NOVA signature grilled plate — the chef's definitive creation"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />

      {/* Directional overlay: dark left for text, open right for image */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[76svh] max-w-7xl items-center px-4 py-20 sm:px-6">
        <div className="max-w-lg">
          <p className="eyebrow text-[var(--accent)]">Signature Dish</p>

          {/* Decorative accent line */}
          <div className="my-5 h-px w-16 bg-[var(--accent)]" />

          <h2 className="section-title text-paper">
            MADE TO BE<br />REMEMBERED.
          </h2>

          <p className="mt-6 text-base leading-7 text-paper/65">
            The centrepiece of the NOVA experience. Slow-smoked peppered protein,
            party jollof, crispy plantain, and a finishing sauce that holds
            every element together. This is what people come back for.
          </p>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-2">
            {['Signature', "Chef's Pick", 'NOVA Series', 'Spiced'].map((tag) => (
              <span key={tag} className="pill text-paper/80">{tag}</span>
            ))}
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="mt-8 w-fit"
            data-cursor="VIEW"
          >
            View Dish Detail
          </Button>
        </div>
      </div>

      {/* ── Detail modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/85 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signature-title"
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/12 bg-[#1a1410] shadow-2xl">
            {/* Modal image strip */}
            <div className="relative h-52 overflow-hidden sm:h-64">
              <img
                src={restaurantConfig.signatureImage}
                alt="NOVA signature dish detail"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
            </div>

            {/* Modal content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-[var(--accent)]">Demo detail panel</p>
                  <h3 id="signature-title" className="mt-3 text-3xl font-bold">
                    Ember Jollof Signature Plate
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-full border border-white/14 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-paper/60 transition hover:text-paper"
                >
                  Close
                </button>
              </div>
              <p className="mt-5 text-base leading-7 text-paper/65">
                This detail experience can become a chef story, wine pairing, allergen
                view, add-on selector, or a direct order moment for the restaurant's
                most important dish.
              </p>

              {/* Detail tags */}
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
                {[
                  ['Course', 'Signature'],
                  ['Spice', '🌶 Medium-Hot'],
                  ['Protein', 'Peppered Beef'],
                  ['Price', '₦18,500'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[0.62rem] uppercase tracking-[0.2em] text-paper/38">{k}</p>
                    <p className="mt-1 text-sm font-semibold text-paper/90">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
