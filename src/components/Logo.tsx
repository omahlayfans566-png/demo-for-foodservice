export function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="NOVA home">
      {/* Icon mark */}
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/16 bg-[var(--accent)] text-xs font-bold tracking-[0.16em] text-ink shadow-glow transition-all duration-200 group-hover:scale-105">
        N
      </span>
      {/* Wordmark */}
      <span className="leading-none">
        <span className="block text-base font-bold tracking-[0.32em] text-paper">NOVA</span>
        <span className="block pt-0.5 text-[0.56rem] uppercase tracking-[0.26em] text-paper/40">
          Lagos · Dining
        </span>
      </span>
    </a>
  );
}
