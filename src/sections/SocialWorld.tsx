import { ButtonLink } from '../components/Button';
import { socialCards } from '../data/socialData';

export function SocialWorld() {
  return (
    <section className="section bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow text-[var(--accent)]">Social Integration Concept</p>
        <h2 className="section-title mt-4">YOUR SOCIAL WORLD. ONE PLACE.</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {socialCards.map((card) => (
            <article key={card.id} className="overflow-hidden border border-white/12 bg-white/[0.045]">
              <img src={card.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-paper/48">
                  <span>{card.handle}</span>
                  <span>{card.label}</span>
                </div>
                <p className="mt-5 text-lg leading-7 text-paper/74">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
        <ButtonLink href="#footer" variant="secondary" className="mt-8">
          Follow The Experience
        </ButtonLink>
      </div>
    </section>
  );
}
