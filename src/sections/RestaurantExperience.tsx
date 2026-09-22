import { Reveal } from '../components/Reveal';

const cards = [
  {
    number: '01',
    title: 'DINE',
    text: 'Turn your restaurant into a destination before guests even arrive. First impressions start online.',
    accent: true,
  },
  {
    number: '02',
    title: 'ORDER',
    text: 'Make discovering and ordering your menu effortless. Every dish, beautifully presented.',
    accent: false,
  },
  {
    number: '03',
    title: 'RESERVE',
    text: 'Give guests a premium way to plan their visit. A booking flow that feels like the restaurant.',
    accent: false,
  },
  {
    number: '04',
    title: 'DISCOVER',
    text: 'Let your story, food and atmosphere speak for themselves — in every scroll, on every screen.',
    accent: false,
  },
];

export function RestaurantExperience() {
  return (
    <section className="section bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-[var(--accent)]">What It Can Do</p>
              <h2 className="section-title mt-3 max-w-lg text-paper">
                A DIGITAL FRONT<br />DOOR FOR MODERN<br />HOSPITALITY.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-paper/45 lg:text-right">
              Every card below represents a capability that a real restaurant website delivers for its guests.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={`${i * 60}ms`}>
              <article
                className={`experience-card group flex min-h-64 flex-col p-6 ${card.accent
                    ? 'border-[var(--accent)]/30 bg-[var(--accent)]/[0.08]'
                    : ''
                  }`}
              >
                <span className="text-xs font-semibold tabular-nums text-paper/30">
                  {card.number}
                </span>
                <h3 className="mt-auto text-3xl font-bold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-paper/55">{card.text}</p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
