import { Reveal } from '../components/Reveal';

const steps = [
  { label: 'DISCOVER', desc: 'Your food, story and atmosphere speak before a guest even arrives.' },
  { label: 'EXPLORE', desc: 'A full menu experience with categories, imagery and pricing.' },
  { label: 'ORDER', desc: 'Guests build a cart and continue toward checkout — frictionlessly.' },
  { label: 'RESERVE', desc: 'A polished table-booking flow that converts intent into a visit.' },
];

export function Intro() {
  return (
    <section id="experience" className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Top: heading + description side by side */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ink/45">Experience Strategy</p>
            <h2 className="section-title mt-3 max-w-sm">
              MORE THAN<br />A MENU.
            </h2>
          </Reveal>
          <Reveal delay="80ms">
            <p className="section-lead max-w-lg text-ink/65">
              Your restaurant already creates an experience in the real world.
              Your website should do the same — for every guest, on every device,
              before they ever walk through your door.
            </p>
          </Reveal>
        </div>

        {/* Steps row */}
        <div className="mt-12 grid gap-px bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={`${i * 60}ms`}>
              <div className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-sand/40">
                <span className="text-xs font-semibold tabular-nums text-ink/35">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{step.desc}</p>
                {/* Accent line on hover */}
                <div className="mt-auto pt-6">
                  <span className="block h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
