import { useState } from 'react';
import { restaurantConfig } from '../config/restaurantConfig';
import { Button } from '../components/Button';

export function SignatureDish() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-ink text-paper">
      <img src={restaurantConfig.signatureImage} alt="Signature demonstration dish" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-82" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-ink/15" />
      <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="eyebrow text-[var(--accent)]">Signature Dish</p>
        <h2 className="mt-5 max-w-3xl text-[clamp(3rem,9vw,8rem)] font-semibold uppercase leading-[0.88]">
          MADE TO BE REMEMBERED.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-paper/72">
          <span className="pill">Signature</span>
          <span className="pill">Chef's Pick</span>
          <span className="pill">NOVA Series</span>
        </div>
        <Button onClick={() => setOpen(true)} className="mt-8 w-fit" data-cursor="VIEW">
          View Dish Detail
        </Button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/78 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-labelledby="signature-title">
          <div className="max-w-3xl border border-white/14 bg-[#120d0a] p-5 shadow-2xl sm:p-8">
            <button className="float-right text-sm uppercase tracking-[0.2em] text-paper/60 hover:text-paper" onClick={() => setOpen(false)}>
              Close
            </button>
            <p className="eyebrow text-[var(--accent)]">Demo detail panel</p>
            <h3 id="signature-title" className="mt-4 text-4xl font-semibold">Ember Jollof Signature Plate</h3>
            <p className="mt-5 text-lg leading-8 text-paper/68">
              This detail experience can become a chef story, wine pairing, allergen view, add-on selector, or direct
              order moment for the restaurant's most important dishes.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
