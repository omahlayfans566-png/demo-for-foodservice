import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: string;
};

export function Reveal({ children, className, delay = '0ms', ...props }: RevealProps) {
  return (
    <div className={cn('reveal-up', className)} style={{ animationDelay: delay }} {...props}>
      {children}
    </div>
  );
}
