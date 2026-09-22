const cards = [
  ['DINE', 'Turn your restaurant into a destination before guests even arrive.'],
  ['ORDER', 'Make discovering and ordering your menu effortless.'],
  ['RESERVE', 'Give guests a premium way to plan their visit.'],
  ['DISCOVER', 'Let your story, food and atmosphere speak for themselves.'],
];

export function RestaurantExperience() {
  return (
    <section className="section bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow text-[var(--accent)]">What It Can Do</p>
        <h2 className="section-title mt-4 max-w-4xl">A DIGITAL FRONT DOOR FOR MODERN HOSPITALITY.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, text], index) => (
            <article key={title} className="experience-card group min-h-72 border border-white/12 bg-white/[0.045] p-6">
              <span className="text-sm text-paper/42">0{index + 1}</span>
              <h3 className="mt-12 text-4xl font-semibold">{title}</h3>
              <p className="mt-5 leading-7 text-paper/62">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
