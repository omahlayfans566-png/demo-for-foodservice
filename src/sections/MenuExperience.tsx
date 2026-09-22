import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import {
  categories,
  formatPrice,
  menuItems,
  type MenuCategory,
  type MenuItem,
} from '../data/menuData';
import { cn } from '../lib/cn';

type MenuExperienceProps = {
  onAdd: (item: MenuItem) => void;
};

// How many pixels to scroll when an arrow is clicked
const ARROW_SCROLL_PX = 300;

export function MenuExperience({ onAdd }: MenuExperienceProps) {
  const [category, setCategory] = useState<MenuCategory>('ALL');
  const trackRef = useRef<HTMLDivElement>(null);

  // Arrow enabled state
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Filtered items
  const items = useMemo(
    () =>
      category === 'ALL'
        ? menuItems
        : menuItems.filter((item) => item.category === category),
    [category],
  );

  // Recalculate arrow states whenever items change or on scroll
  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  // Reset scroll position when category changes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // instant jump — no animation so it doesn't feel laggy on filter change
    el.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
    // recheck after paint
    requestAnimationFrame(syncArrows);
  }, [items, syncArrows]);

  // Attach scroll listener
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncArrows, { passive: true });
    syncArrows();
    return () => el.removeEventListener('scroll', syncArrows);
  }, [syncArrows]);

  // Recheck on window resize
  useEffect(() => {
    window.addEventListener('resize', syncArrows, { passive: true });
    return () => window.removeEventListener('resize', syncArrows);
  }, [syncArrows]);

  // Arrow click
  const scrollBy = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? ARROW_SCROLL_PX : -ARROW_SCROLL_PX, behavior: 'smooth' });
  };

  // ── Mouse drag-to-scroll ─────────────────────────────────────────────────
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    // Only left button or touch
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragState.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.classList.add('is-dragging');
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    el.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    dragState.current.active = false;
    el.classList.remove('is-dragging');
    el.releasePointerCapture(e.pointerId);
  };
  // ────────────────────────────────────────────────────────────────────────

  return (
    <section id="menu" className="section bg-charcoal text-paper">
      {/* Constrain the header content, let carousel bleed slightly */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ── Section header ── */}
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[var(--accent)]">Interactive Menu</p>
              <h2 className="section-title mt-3 text-paper">
                TASTE THE<br className="sm:hidden" /> DIFFERENCE.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-paper/45 md:text-right">
              Nigerian food first. Swipe to explore local classics and
              international plates.
            </p>
          </div>
        </Reveal>

        {/* ── Category filter tabs ── */}
        <div
          className="mt-7 flex gap-2 overflow-x-auto pb-2 scrollbar-none"
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
                'shrink-0 rounded-full border px-4 py-2 text-[0.63rem] font-bold uppercase tracking-[0.18em] transition-all duration-200',
                category === cat
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-ink'
                  : 'border-white/10 bg-white/[0.04] text-paper/50 hover:border-white/20 hover:text-paper',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Carousel wrapper ──
          Sits inside a px-4/px-6 padded container on the left,
          but intentionally overflows the right edge to show a card peek.
          The .menu-carousel-outer clips the track and adds the right fade.   */}
      <div className="relative mt-6 pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {/* Prev arrow — desktop only */}
        <button
          className={cn('carousel-arrow carousel-arrow-prev hidden lg:grid', !canPrev && 'opacity-0 pointer-events-none')}
          onClick={() => scrollBy('prev')}
          aria-label="Scroll left"
          disabled={!canPrev}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow — desktop only */}
        <button
          className={cn('carousel-arrow carousel-arrow-next hidden lg:grid', !canNext && 'opacity-0 pointer-events-none')}
          onClick={() => scrollBy('next')}
          aria-label="Scroll right"
          disabled={!canNext}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Outer clip + right fade */}
        <div className="menu-carousel-outer">
          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="menu-carousel-track"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            aria-label="Food items carousel — swipe or drag to browse"
          >
            {items.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={onAdd} />
            ))}

            {/* Spacer so last card doesn't sit under the fade  */}
            <div className="w-4 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Mobile swipe hint — fades after first interaction */}
        <SwipeHint trackRef={trackRef} />
      </div>

      {/* Item count line */}
      <div className="mx-auto mt-5 max-w-7xl px-4 sm:px-6">
        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-paper/28">
          {items.length} item{items.length !== 1 ? 's' : ''} · swipe or drag to browse
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   MENU CARD — compact, image-dominant, fixed width per breakpoint
   Width classes use Tailwind arbitrary values:
     mobile:  w-[72vw]  ≈ 1.3 cards visible + peek
     sm:      w-[46vw]  ≈ 2 cards + peek
     md:      w-[36vw]  ≈ 2.5 cards + peek
     lg:      w-72      = 288px → ~3.2 fit at 1280px + peek
────────────────────────────────────────────────────────────────────────────── */
function MenuCard({ item, onAdd }: { item: MenuItem; onAdd: (item: MenuItem) => void }) {
  return (
    <article
      className="food-card group flex w-[72vw] flex-col sm:w-[46vw] md:w-[36vw] lg:w-72"
      data-cursor="EXPLORE"
    >
      {/* ── Image block ── */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={`${item.name} — NOVA restaurant`}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />

        {/* Gradient for text overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/15 to-transparent" />

        {/* Chef badge */}
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-ink">
            {item.badge}
          </span>
        )}

        {/* Category chip */}
        <span className="absolute right-3 top-3 rounded-full border border-white/14 bg-ink/55 px-2.5 py-1 text-[0.56rem] uppercase tracking-[0.14em] text-paper/65 backdrop-blur-sm">
          {item.category}
        </span>

        {/* Name + price pinned to image bottom */}
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="flex items-end justify-between gap-2">
            <h3 className="text-base font-bold leading-snug text-paper drop-shadow">
              {item.name}
            </h3>
            <span className="shrink-0 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[0.7rem] font-extrabold text-ink">
              {formatPrice(item.price)}
            </span>
          </div>
        </div>
      </div>

      {/* ── Info + CTA ── */}
      <div className="flex flex-1 flex-col gap-3 p-3">
        <p className="line-clamp-2 flex-1 text-xs leading-5 text-paper/50">
          {item.description}
        </p>
        <Button
          onClick={() => onAdd(item)}
          className="w-full py-2 text-[0.62rem]"
          data-cursor="OPEN"
        >
          + Add To Cart
        </Button>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   SWIPE HINT — tiny animated label on mobile, disappears after first scroll
────────────────────────────────────────────────────────────────────────────── */
function SwipeHint({ trackRef }: { trackRef: React.RefObject<HTMLDivElement | null> }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const hide = () => setVisible(false);
    el.addEventListener('scroll', hide, { once: true, passive: true });
    el.addEventListener('pointerdown', hide, { once: true, passive: true });
    return () => {
      el.removeEventListener('scroll', hide);
      el.removeEventListener('pointerdown', hide);
    };
  }, [trackRef]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute -bottom-6 right-6 flex items-center gap-1.5 lg:hidden"
      aria-hidden="true"
    >
      <span className="text-[0.58rem] uppercase tracking-[0.22em] text-paper/30">Swipe</span>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="text-paper/30">
        <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
