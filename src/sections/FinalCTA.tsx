import { useState } from 'react';
import { Button } from '../components/Button';

export function FinalCTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-24 text-paper sm:px-6 sm:py-32">
      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_50%_10%,rgba(214,95,47,0.26),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="max-w-6xl text-[clamp(3rem,9vw,8.5rem)] font-semibold uppercase leading-[0.9]">
          YOUR RESTAURANT.<br />YOUR STORY.<br />YOUR DIGITAL EXPERIENCE.
        </h2>
        <p className="mt-8 max-w-2xl text-xl leading-8 text-paper/68">
          One website can turn a customer's first click into their first visit.
        </p>
        <Button onClick={() => setOpen(true)} className="mt-8" data-cursor="OPEN">
          Build Your Experience
        </Button>
        {open && (
          <div className="mt-6 max-w-xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur">
            <strong>Demo inquiry interface</strong>
            <p className="mt-2 text-paper/64">
              This CTA can connect to WhatsApp, email, CRM forms, booking tools, or a full sales inquiry workflow.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
