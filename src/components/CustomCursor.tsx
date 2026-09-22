import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [state, setState] = useState({ x: -80, y: -80, label: '', active: false });

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    const move = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const label = target?.closest<HTMLElement>('[data-cursor]')?.dataset.cursor ?? '';
      setState({ x: event.clientX, y: event.clientY, label, active: Boolean(label) });
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-paper mix-blend-screen backdrop-blur md:grid"
      style={{
        transform: `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.active ? 1.45 : 0.72})`,
        opacity: state.x < 0 ? 0 : 1,
      }}
      aria-hidden="true"
    >
      {state.label}
    </div>
  );
}
