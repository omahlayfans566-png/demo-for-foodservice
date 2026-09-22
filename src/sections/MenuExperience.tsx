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
    <section id="menu" className="section bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[var(--accent)]">Interactive Menu</p>
              <h2 className="section-title mt-4">DESIGNED TO BE ORDERED.</h2>
            </div>
            <p className="max-w-lg text-paper/62">
              Fictional menu data demonstrates how categories, pricing, imagery, dietary tags, and ordering can be
              configured for any restaurant.
            </p>
          </div>
        </Reveal>
        <div className="mt-9 flex gap-2 overflow-x-auto pb-3 scrollbar-none" role="tablist" aria-label="Menu categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition',
                category === cat
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-ink'
                  : 'border-white/12 bg-white/[0.04] text-paper/64 hover:text-paper',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={`${index * 55}ms`}>
              <article className="food-card group h-full overflow-hidden border border-white/12 bg-white/[0.045]" data-cursor="EXPLORE">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={item.image} alt={`${item.name} demonstration dish`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-92" />
                  {item.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-paper backdrop-blur">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 text-xs uppercase tracking-[0.18em] text-paper/70">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="shrink-0 text-sm font-semibold text-[var(--accent)]">{formatPrice(item.price)}</p>
                  </div>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-paper/62">{item.description}</p>
                  <Button onClick={() => onAdd(item)} className="mt-5 w-full" data-cursor="OPEN">
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
