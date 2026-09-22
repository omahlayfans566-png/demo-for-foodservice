import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

type Shared = {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
};

const styles = {
  primary:
    'border-transparent bg-[var(--accent)] text-ink shadow-glow hover:-translate-y-0.5 hover:bg-[var(--accent-soft)]',
  secondary:
    'border-white/18 bg-white/[0.07] text-paper backdrop-blur hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12]',
  ghost: 'border-transparent bg-transparent text-paper/80 hover:text-paper',
};

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: Shared & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  ...props
}: Shared & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
