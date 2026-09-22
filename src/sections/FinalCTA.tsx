import { useState } from 'react';
import { Button } from '../components/Button';

export function FinalCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 text-paper sm:px-6 sm:py-28">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[var(--accent-soft)] opacity-[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          {/* Headline */}
          <div>
            <p className="eyebrow text-[var(--accent)] mb-5">Ready to build?</p>
            <h2 className="section-title max-w-xl text-paper">
              YOUR RESTAURANT.<br />YOUR STORY.<br />YOUR DIGITAL<br />EXPERIENCE.
            </h2>
          </div>

          {/* Right: description + CTA */}
          <div className="lg:pb-1">
            <p className="section-lead max-w-sm text-paper/55">
              One website can turn a customer's first click into their first
              visit — and their first visit into a loyal regular.
            </p>

            <Button
              onClick={() => setOpen((v) => !v)}
              className="mt-8"
              data-cursor="OPEN"
            >
              Build Your Experience
            </Button>

            {open && (
              <div className="mt-5 max-w-sm overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                <p className="text-sm font-bold text-paper">Demo inquiry interface</p>
                <p className="mt-2 text-sm text-paper/55">
                  This CTA can connect to WhatsApp, email, a CRM form, booking
                  tools, or a full sales inquiry workflow — per restaurant.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom brand strip */}
        <div className="mt-16 flex items-center gap-6 border-t border-white/8 pt-8">
          <span className="text-2xl font-bold tracking-[0.3em] text-paper/80">NOVA</span>
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-[0.62rem] uppercase tracking-[0.24em] text-paper/30">
            Restaurant Digital Experience
          </span>
        </div>
      </div>
    </section>
  );
}
