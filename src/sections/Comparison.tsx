const rows = ['Discoverability', 'Menu', 'Bookings', 'Ordering', 'Brand Identity', 'Customer Information', 'Google Search', 'Direct Contact'];

export function Comparison() {
  return (
    <section className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow text-ink/50">Why A Website Matters</p>
        <h2 className="section-title mt-4">SOCIAL IS A CHANNEL. YOUR WEBSITE IS HOME.</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <ComparePanel title="Social Media" muted items={rows.slice(0, 5)} />
          <div className="grid place-items-center text-2xl font-semibold uppercase tracking-[0.18em] text-ink/34">vs.</div>
          <ComparePanel title="Your Digital Home" items={rows} />
        </div>
      </div>
    </section>
  );
}

function ComparePanel({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <article className={muted ? 'border border-ink/10 bg-white/42 p-5' : 'border border-ink bg-ink p-5 text-paper'}>
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="mt-6 grid gap-2">
        {items.map((item) => (
          <div key={item} className={muted ? 'flex justify-between border-b border-ink/10 py-3 text-ink/55' : 'flex justify-between border-b border-white/12 py-3 text-paper/78'}>
            <span>{item}</span>
            <span>{muted ? 'Partial' : 'Owned'}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
