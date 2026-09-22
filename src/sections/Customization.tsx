import { Reveal } from '../components/Reveal';
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">

          {/* Left: copy + theme picker */}
          <Reveal>
            <p className="eyebrow text-[var(--accent)]">Brand System</p>
            <h2 className="section-title mt-3 text-paper">
              BUILT AROUND<br />YOUR BRAND.
            </h2>
            <p className="mt-6 section-lead max-w-md text-paper/55">
              Every restaurant gets its own identity — colours, logo, menu,
              photography, typography, and ordering flow, all in one configurable
              digital experience.
            </p>

            {/* Theme selector */}
            <div className="mt-10">
              <p className="eyebrow text-paper/35">Brand Colour</p>
              <div
                className="mt-4 flex flex-wrap gap-3"
                role="radiogroup"
                aria-label="Brand colour theme"
              >
                {options.map(([key, theme]) => (
                  <button
                    key={key}
                    role="radio"
                    aria-checked={activeTheme === key}
                    onClick={() => onThemeChange(key)}
                    className={cn(
                      'flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200',
                      activeTheme === key
                        ? 'border-white bg-white text-ink shadow-glow'
                        : 'border-white/12 bg-white/[0.04] text-paper/65 hover:border-white/24 hover:text-paper',
                    )}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20"
                      style={{ background: theme.accent }}
                    />
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: live theme preview card */}
          <Reveal delay="80ms">
            <div
              className="overflow-hidden rounded-xl border shadow-2xl transition-all duration-500"
              style={{
                background: current.surface,
                color: current.text,
                borderColor: `${current.accent}28`,
              }}
            >
              {/* Preview header */}
              <div
                className="flex items-center justify-between border-b px-6 py-5"
                style={{ borderColor: `${current.text}14` }}
              >
                <span className="text-xl font-bold tracking-[0.3em]">NOVA</span>
                <span
                  className="rounded-full px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em]"
                  style={{ background: current.accent, color: current.surface }}
                >
                  Live Theme
                </span>
              </div>

              {/* Preview grid */}
              <div className="grid grid-cols-2 gap-3 p-5">
                {['Logo', 'Menu', 'Photography', 'Reservations'].map((item) => (
                  <div
                    key={item}
                    className="flex flex-col gap-2 rounded-lg border p-4"
                    style={{ borderColor: `${current.text}12` }}
                  >
                    <span
                      className="text-[0.6rem] uppercase tracking-[0.2em]"
                      style={{ color: `${current.text}55` }}
                    >
                      Configurable
                    </span>
                    <span className="mt-4 text-xl font-bold">{item}</span>
                  </div>
                ))}
              </div>

              {/* Accent gradient strip */}
              <div
                className="h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${current.accent}, ${current.accentSoft})`,
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
