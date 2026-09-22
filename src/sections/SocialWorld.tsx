import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { socialCards } from '../data/socialData';

export function SocialWorld() {
  return (
    <section className="section bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[var(--accent)]">Social Integration</p>
              <h2 className="section-title mt-3 text-paper">
                YOUR SOCIAL<br />WORLD. ONE PLACE.
              </h2>
            </div>
            <ButtonLink href="#footer" variant="secondary" className="md:self-end">
              Follow The Experience
            </ButtonLink>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialCards.map((card, i) => (
            <Reveal key={card.id} delay={`${i * 70}ms`}>
              <article className="group overflow-hidden rounded-xl border border-white/8 bg-[#1a1410] transition-all duration-300 hover:-translate-y-1 hover:border-white/16">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  {/* Instagram-style overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Text content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {card.handle}
                    </span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-paper/40">
                      {card.label}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-paper/65">{card.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
