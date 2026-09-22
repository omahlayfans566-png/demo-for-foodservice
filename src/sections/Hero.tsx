import { restaurantConfig } from '../config/restaurantConfig';
import { ButtonLink } from '../components/Button';

// Featured dish thumbnails shown in the hero
const featuredDishes = [
  {
    label: 'Party Jollof',
    tag: 'Chef Pick',
    // Nigerian party jollof — rich red rice in serving pan
    image: 'https://images.unsplash.com/photo-1665672271822-a3ab5a86f8e0?auto=format&fit=crop&w=300&q=80',
  },
  {
    label: 'Suya Skewers',
    tag: 'Spicy',
    // Beef suya skewers charred on grill
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=300&q=80',
  },
  {
    label: 'Peppered Asun',
    tag: 'Hot',
    // Dark crispy peppered meat
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80',
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-section relative min-h-[100svh] overflow-hidden bg-ink"
    >
      {/* ────────────────────────────────────────────────────────
          BACKGROUND — rich cinematic food image, right-dominant
      ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1800&q=88"
          alt="Premium Nigerian food spread — grilled meats, jollof rice, peppered chicken"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Deep left vignette — text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 via-[36%] to-ink/20" />
        {/* Bottom lift */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        {/* Top darkening for nav readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
      </div>

      {/* Mobile: stronger overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/98 via-ink/60 to-ink/30 lg:hidden" />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to right, black 30%, transparent 80%)',
        }}
      />

      {/* ────────────────────────────────────────────────────────
          CONTENT
      ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:pb-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

          {/* ── Left: brand + copy ── */}
          <div className="max-w-lg">

            {/* Location badge */}
            <div
              className="reveal-up mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-ink/40 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-paper/75">
                Victoria Island · Lagos
              </span>
            </div>

            {/* Brand name — compact, bold */}
            <h1
              className="reveal-up font-display text-paper"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
                lineHeight: 0.88,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                animationDelay: '60ms',
              }}
            >
              {restaurantConfig.brandName}
            </h1>

            {/* Accent underline */}
            <div
              className="reveal-up mt-3 h-[3px] w-14 rounded-full bg-[var(--accent)]"
              style={{ animationDelay: '90ms' }}
            />

            {/* Tagline — tight, readable */}
            <p
              className="reveal-up mt-4 font-display font-semibold uppercase tracking-wide text-sand/85"
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.5rem)',
                lineHeight: 1.2,
                animationDelay: '120ms',
              }}
            >
              {restaurantConfig.tagline}
            </p>

            {/* Description — short */}
            <p
              className="reveal-up mt-4 max-w-xs text-sm leading-6 text-paper/55"
              style={{ animationDelay: '160ms' }}
            >
              From smoky suya to party jollof — a premium dining experience rooted in Nigerian flavour.
            </p>

            {/* CTAs */}
            <div
              className="reveal-up mt-7 flex flex-wrap gap-3"
              style={{ animationDelay: '200ms' }}
            >
              <ButtonLink href="#menu" data-cursor="OPEN">
                Explore The Menu
              </ButtonLink>
              <ButtonLink href="#reserve" variant="secondary" data-cursor="EXPLORE">
                Reserve A Table
              </ButtonLink>
            </div>

            {/* Stat strip */}
            <div
              className="reveal-up mt-10 grid grid-cols-3 gap-5 border-t border-white/10 pt-6"
              style={{ animationDelay: '240ms' }}
            >
              {[
                ['20+', 'Menu Items'],
                ['Live', 'Ordering'],
                ['Open', 'Reservations'],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-lg font-extrabold tracking-tight text-paper">{val}</p>
                  <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.22em] text-paper/40">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: featured dish cards — desktop only ── */}
          <div
            className="reveal-up hidden flex-col gap-3 lg:flex"
            style={{ animationDelay: '280ms' }}
          >
            <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.28em] text-paper/35">
              Featured Tonight
            </p>
            {featuredDishes.map((dish) => (
              <a
                key={dish.label}
                href="#menu"
                className="group flex w-52 items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-ink/50 p-2 backdrop-blur-md transition-all duration-300 hover:border-[var(--accent)]/50 hover:bg-ink/70"
              >
                {/* Dish thumbnail */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={dish.image}
                    alt={dish.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="eager"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-paper">{dish.label}</p>
                  <span className="mt-0.5 inline-block rounded-full bg-[var(--accent)]/20 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                    {dish.tag}
                  </span>
                </div>
                <span className="ml-auto shrink-0 text-paper/25 transition group-hover:text-[var(--accent)] group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 right-6 z-10 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[0.55rem] uppercase tracking-[0.3em] text-paper/30 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-paper/25 to-transparent" />
      </div>
    </section>
  );
}
