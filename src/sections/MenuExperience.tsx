import { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { categories, formatPrice, menuItems, type MenuCategory, type MenuItem } from '../data/menuData';
import { cn } from '../lib/cn';

type MenuExperienceProps = {
  onAdd: (item: MenuItem) => void;
};

export function MenuExperience({ onAdd }: MenuExperienceProps) {
  const [category, setCategory] = useState<MenuCategory>('ALL');
  const items = useMemo(
    () => (category === 'ALL' ? menuItems : menuItems.filter((item) => item.category === category)),
    [category],
  );

  return (
    <section id="menu" className="section bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[var(--accent)]">Interactive Menu</p>
              <h2 className="section-title mt-3 text-paper">
                TASTE THE<br />DIFFERENCE.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-paper/50 md:text-right">
              Nigerian food first. A curated mix of local classics and
              international plates — all configurable for any restaurant.
            </p>
          </div>
        </Reveal>

        {/* Category filter tabs */}
        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'shrink-0 rounded-full border px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] transition-all duration-200',
                category === cat
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-ink'
                  : 'border-white/10 bg-white/[0.04] text-paper/50 hover:border-white/20 hover:text-paper',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Food card grid ──
            Pinterest reference inspiration: tall cards, image fills top ~60%,
            product info anchored at bottom, price prominent next to name.      */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={`${Math.min(index, 7) * 45}ms`}>
              <article
                className="food-card group flex h-full flex-col"
                data-cursor="EXPLORE"
              >
                {/* Image — tall, fills card top */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} — NOVA restaurant`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                  />
                  {/* Bottom gradient so name stays readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/95 via-[#1a1410]/20 to-transparent" />

                  {/* Badge top-left */}
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ink">
                      {item.badge}
                    </span>
                  )}

                  {/* Category tag top-right */}
                  <span className="absolute right-3 top-3 rounded-full border border-white/14 bg-ink/50 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-paper/70 backdrop-blur-sm">
                    {item.category}
                  </span>

                  {/* Name + price overlaid on image bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="text-lg font-bold leading-tight text-paper">
                        {item.name}
                      </h3>
                      <p className="shrink-0 rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-bold text-ink">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description + CTA below image */}
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <p className="flex-1 text-sm leading-6 text-paper/55">
                    {item.description}
                  </p>
                  <Button
                    onClick={() => onAdd(item)}
                    className="w-full"
                    data-cursor="OPEN"
                  >
                    Add To Cart
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
