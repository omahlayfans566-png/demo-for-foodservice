import { Reveal } from '../components/Reveal';

const rows = [
  'Discoverability',
  'Full Menu Display',
  'Table Bookings',
  'Online Ordering',
  'Brand Identity',
  'Customer Data',
  'Google Search',
  'Direct Contact',
];

export function Comparison() {
  return (
    <section className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow text-ink/40">Why A Website Matters</p>
          <h2 className="section-title mt-3 max-w-2xl">
            SOCIAL IS A CHANNEL.<br />YOUR WEBSITE IS HOME.
          </h2>
        </Reveal>

        <Reveal delay="80ms">
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_56px_1fr] lg:items-stretch">

            {/* Social Media panel */}
            <ComparePanel
              title="Social Media"
              subtitle="Rented attention"
              items={rows.slice(0, 5)}
              muted
            />

            {/* VS divider */}
            <div className="hidden lg:grid place-items-center">
              <span className="text-base font-bold uppercase tracking-[0.2em] text-ink/25">vs</span>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <span className="rounded-full border border-ink/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/35">
                vs
              </span>
            </div>

            {/* Your Website panel */}
            <ComparePanel
              title="Your Digital Home"
              subtitle="Owned real estate"
              items={rows}
              muted={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ComparePanel({
  title,
  subtitle,
  items,
  muted,
}: {
  title: string;
  subtitle: string;
  items: string[];
  muted: boolean;
}) {
  return (
    <article
      className={`overflow-hidden rounded-xl border p-6 ${muted
          ? 'border-ink/10 bg-white/50'
          : 'border-ink bg-ink text-paper'
        }`}
    >
      {/* Panel header */}
      <div className="mb-6 border-b pb-5" style={{ borderColor: muted ? 'rgba(14,11,8,0.10)' : 'rgba(255,255,255,0.10)' }}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className={`mt-1 text-xs uppercase tracking-[0.2em] ${muted ? 'text-ink/38' : 'text-paper/38'}`}>
          {subtitle}
        </p>
      </div>

      {/* Rows */}
      <div className="grid gap-0">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-center justify-between border-b py-3 text-sm ${muted
                ? 'border-ink/8 text-ink/50'
                : 'border-white/10 text-paper/70'
              }`}
          >
            <span>{item}</span>
            <span
              className={`rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] ${muted
                  ? 'bg-ink/6 text-ink/40'
                  : 'bg-[var(--accent)] text-ink'
                }`}
            >
              {muted ? 'Partial' : 'Owned'}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
