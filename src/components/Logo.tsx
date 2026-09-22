export function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="NOVA home">
      <span className="grid h-10 w-10 place-items-center border border-white/20 bg-white/[0.06] text-sm font-semibold tracking-[0.22em] text-paper shadow-glow backdrop-blur">
        N
      </span>
      <span className="leading-none">
        <span className="block text-lg font-semibold tracking-[0.38em] text-paper">NOVA</span>
        <span className="block pt-1 text-[0.58rem] uppercase tracking-[0.28em] text-paper/50">
          Digital Dining
        </span>
      </span>
    </a>
  );
}
