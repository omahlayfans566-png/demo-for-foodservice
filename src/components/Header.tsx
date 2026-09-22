import { useEffect, useState } from 'react';
import { restaurantConfig } from '../config/restaurantConfig';
import { ButtonLink } from './Button';
import { Logo } from './Logo';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { cn } from '../lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const links = [
    ['MENU', '#menu'],
    ['EXPERIENCE', '#experience'],
    ['GALLERY', '#gallery'],
    ['RESERVE', '#reserve'],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      {/* ── Nav bar ── */}
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between px-5 py-3 transition-all duration-500',
          scrolled
            ? 'rounded-xl border border-white/10 bg-ink/80 shadow-2xl backdrop-blur-xl'
            : 'rounded-none border-b border-white/[0.06] bg-transparent',
        )}
      >
        <Logo />

        {/* Desktop nav links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              data-cursor="EXPLORE"
              className="text-[0.68rem] font-semibold tracking-[0.22em] text-paper/55 transition-colors duration-200 hover:text-paper"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="#order"
            data-cursor="OPEN"
            className="px-6 py-2.5 text-[0.65rem]"
          >
            Order Now
          </ButtonLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-[61] grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-paper lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={cn('hamburger-line', open && 'rotate-45 translate-y-[5px]')} />
          <span className={cn('hamburger-line', open && '-rotate-45 -translate-y-[5px]')} />
        </button>
      </div>

      {/* ── Scroll progress bar ── */}
      <div className="mx-auto mt-0 h-[2px] max-w-7xl overflow-hidden bg-transparent">
        <span
          className="block h-full transition-all duration-100"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))',
          }}
        />
      </div>

      {/* ── Mobile panel ── */}
      <div className={cn('mobile-panel lg:hidden', open && 'is-open')}>
        <div className="mx-4 mt-20 overflow-hidden rounded-xl border border-white/10 bg-charcoal/95 shadow-2xl backdrop-blur-2xl">
          {/* Mobile nav header */}
          <div className="border-b border-white/8 px-6 py-4">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-paper/40">
              {restaurantConfig.positioning}
            </p>
          </div>
          {/* Links */}
          <nav className="px-6 py-2">
            {links.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/8 py-5 text-xl font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:text-[var(--accent)]"
              >
                {label}
                <span className="text-xs font-normal tracking-[0.15em] text-[var(--accent)]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
          {/* Mobile CTA */}
          <div className="px-6 pb-6 pt-4">
            <ButtonLink
              href="#order"
              onClick={() => setOpen(false)}
              className="w-full justify-center"
            >
              Order Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
