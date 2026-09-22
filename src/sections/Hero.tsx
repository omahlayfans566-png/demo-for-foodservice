import { restaurantConfig } from '../config/restaurantConfig';
import { ButtonLink } from '../components/Button';

export function Hero() {
  return (
    <section
      id="top"
      className="hero-section relative min-h-[100svh] overflow-hidden bg-ink"
    >
      {/* ── Food image — right side dominant, full bleed ── */}
      <div className="absolute inset-0 lg:left-[38%]">
        <img
          src={restaurantConfig.heroImage}
          alt="Nigerian party jollof rice with peppered proteins — NOVA signature presentation"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Right-to-left fade so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10 lg:via-ink/60 lg:to-transparent" />
      </div>

      {/* Mobile overlay for full bleed */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/20 lg:hidden" />

      {/* Subtle grid noise */}
      <div className="noise" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-12 pt-28 sm:px-6 lg:justify-end lg:pb-16">

        {/* Left-side text block */}
        <div className="max-w-xl lg:max-w-lg">
          {/* Location badge */}
          <div className="reveal-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-paper/70">
              Victoria Island · Lagos
            </span>
          </div>

          {/* Brand name */}
          <h1
            className="reveal-up hero-brand text-paper"
            style={{ animationDelay: '60ms' }}
          >
            {restaurantConfig.brandName}
          </h1>

          {/* Tagline */}
          <p
            className="reveal-up hero-tagline mt-3 text-sand/80"
            style={{ animationDelay: '120ms' }}
          >
            {restaurantConfig.tagline}
          </p>

          {/* Short description */}
          <p
            className="reveal-up mt-5 max-w-sm text-base leading-7 text-paper/60"
            style={{ animationDelay: '180ms' }}
          >
            From smoky suya to party jollof — an immersive dining experience built for restaurants that want to be remembered.
          </p>

          {/* CTAs */}
          <div
            className="reveal-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <ButtonLink href="#menu" data-cursor="OPEN">
              Explore The Menu
            </ButtonLink>
            <ButtonLink href="#reserve" variant="secondary" data-cursor="EXPLORE">
              Reserve A Table
            </ButtonLink>
          </div>
        </div>

        {/* ── Bottom stat strip ── */}
        <div
          className="reveal-up mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 lg:max-w-lg"
          style={{ animationDelay: '300ms' }}
        >
          {[
            ['40+', 'Menu Items'],
            ['Live', 'Ordering'],
            ['Open', 'Reservations'],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-xl font-bold tracking-tight text-paper">{val}</p>
              <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.22em] text-paper/45">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 right-6 z-10 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[0.58rem] uppercase tracking-[0.28em] text-paper/35 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-paper/30 to-transparent" />
      </div>
    </section>
  );
}
