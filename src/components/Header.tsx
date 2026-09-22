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
    const update = () => setScrolled(window.scrollY > 18);
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
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 px-4 py-4 transition duration-500 sm:px-6',
        scrolled && 'py-3',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition duration-500',
          scrolled
            ? 'rounded-full border-white/12 bg-ink/72 shadow-2xl backdrop-blur-xl'
            : 'rounded-none border-transparent bg-transparent',
        )}
      >
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              data-cursor="EXPLORE"
              className="text-xs font-medium tracking-[0.24em] text-paper/68 transition hover:text-paper"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="#order" data-cursor="OPEN" className="px-5">
            Order Now
          </ButtonLink>
        </div>
        <button
          className="relative z-[61] grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-paper lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={cn('hamburger-line', open && 'rotate-45 translate-y-[5px]')} />
          <span className={cn('hamburger-line', open && '-rotate-45 -translate-y-[5px]')} />
        </button>
      </div>
      <div className="mx-auto mt-2 h-px max-w-7xl overflow-hidden bg-white/10">
        <span className="block h-full bg-[var(--accent)]" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className={cn('mobile-panel lg:hidden', open && 'is-open')}>
        <div className="mx-4 mt-24 border border-white/12 bg-ink/92 p-6 shadow-2xl backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-paper/45">{restaurantConfig.positioning}</p>
          <div className="mt-8 grid gap-2">
            {links.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold uppercase tracking-[0.08em] text-paper"
              >
                {label}
                <span className="text-sm text-[var(--accent)]">0{index + 1}</span>
              </a>
            ))}
          </div>
          <ButtonLink href="#order" onClick={() => setOpen(false)} className="mt-8 w-full">
            Order Now
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
