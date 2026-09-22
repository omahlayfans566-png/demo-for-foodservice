import type { ThemeKey } from '../config/restaurantConfig';
import { themes } from '../config/restaurantConfig';
import { cn } from '../lib/cn';

type CustomizationProps = {
  activeTheme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
};

export function Customization({ activeTheme, onThemeChange }: CustomizationProps) {
  const current = themes[activeTheme];
  const options = Object.entries(themes) as Array<[ThemeKey, (typeof themes)[ThemeKey]]>;

  return (
    <section className="section bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-[var(--accent)]">Brand System</p>
          <h2 className="section-title mt-4">BUILT AROUND YOUR BRAND.</h2>
          <p className="mt-6 text-xl leading-8 text-paper/66">
            Every restaurant gets its own identity: colors, logo, menu, photography, typography, contact information,
            location, opening hours, ordering, and reservations.
          </p>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.22em] text-paper/44">Brand Color</p>
            <div className="mt-4 flex flex-wrap gap-3" role="radiogroup" aria-label="Brand color">
              {options.map(([key, theme]) => (
                <button
                  key={key}
                  role="radio"
                  aria-checked={activeTheme === key}
                  onClick={() => onThemeChange(key)}
                  className={cn(
                    'flex items-center gap-3 rounded-full border px-4 py-3 text-sm transition',
                    activeTheme === key ? 'border-white bg-white text-ink' : 'border-white/14 bg-white/[0.04] text-paper',
                  )}
                >
                  <span className="h-4 w-4 rounded-full" style={{ background: theme.accent }} />
                  {theme.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-white/12 p-4" style={{ background: current.surface, color: current.text }}>
          <div className="flex items-center justify-between border-b border-current/15 pb-5">
            <strong className="text-2xl tracking-[0.24em]">NOVA</strong>
            <span className="rounded-full px-3 py-2 text-xs uppercase tracking-[0.16em]" style={{ background: current.accent, color: current.surface }}>
              Live Theme
            </span>
          </div>
          <div className="grid gap-4 py-6 sm:grid-cols-2">
            {['Logo', 'Menu', 'Photography', 'Reservations'].map((item) => (
              <div key={item} className="border border-current/15 p-4">
                <span className="text-xs uppercase tracking-[0.18em] opacity-55">Configurable</span>
                <h3 className="mt-8 text-2xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <div className="h-2" style={{ background: `linear-gradient(90deg, ${current.accent}, ${current.accentSoft})` }} />
        </div>
      </div>
    </section>
  );
}
