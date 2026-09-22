import { restaurantConfig } from '../config/restaurantConfig';
import { ButtonLink } from '../components/Button';

export function Hero() {
  return (
    <section id="top" className="hero-section relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={restaurantConfig.heroImage}
        alt="Cinematic demonstration food plating for a premium restaurant website"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(214,95,47,0.28),transparent_28%),linear-gradient(90deg,rgba(8,7,6,0.96),rgba(8,7,6,0.58)_48%,rgba(8,7,6,0.86))]" />
      <div className="noise" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-32 sm:px-6 lg:pb-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
              {restaurantConfig.positioning}
            </p>
            <h1 className="reveal-up mt-4 max-w-5xl text-[clamp(4.8rem,16vw,14rem)] font-semibold uppercase leading-[0.78] tracking-normal text-paper">
              {restaurantConfig.brandName}
            </h1>
            <p className="reveal-up mt-5 max-w-4xl text-[clamp(2.05rem,6vw,6.6rem)] font-semibold uppercase leading-[0.9] text-paper">
              {restaurantConfig.tagline}
            </p>
          </div>
          <div className="reveal-up max-w-xl lg:justify-self-end">
            <p className="text-lg leading-8 text-paper/76 sm:text-xl">
              An immersive digital experience built for restaurants that want to be remembered.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#experience" data-cursor="OPEN">
                Explore The Experience
              </ButtonLink>
              <ButtonLink href="#menu" variant="secondary" data-cursor="EXPLORE">
                See The Menu
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-3 border-t border-white/12 pt-6 text-xs uppercase tracking-[0.22em] text-paper/52 sm:grid-cols-3">
          <span>Menu discovery</span>
          <span>Ordering preview</span>
          <span>Reservations concept</span>
        </div>
      </div>
    </section>
  );
}
