import { Button } from '../components/Button';
import { formatPrice, type MenuItem } from '../data/menuData';

export type CartItem = MenuItem & { quantity: number };

type OrderExperienceProps = {
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
};

export function OrderExperience({ cart, onAdd, onDecrease, onRemove }: OrderExperienceProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const service = cart.length ? 1200 : 0;
  const total = subtotal + service;

  return (
    <section id="order" className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* Left: description */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-ink/45">Ordering Preview</p>
            <h2 className="section-title mt-3">
              YOUR TABLE<br />STARTS HERE.
            </h2>
            <p className="mt-6 section-lead max-w-md text-ink/60">
              A frontend-only ordering flow that shows how guests browse,
              build a cart, and continue toward checkout — no backend required
              for the demo.
            </p>

            {/* Info pill */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-ink/10 bg-ink/[0.04] px-4 py-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
              <p className="text-sm text-ink/55">
                Demo checkout — payment integration connected per restaurant.
              </p>
            </div>

            {/* Feature list */}
            <ul className="mt-8 grid gap-3">
              {[
                'Live cart with quantity controls',
                'Item removal and totals',
                'Service charge preview',
                'Persistent across menu browsing',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-ink/65">
                  <span className="h-px w-5 shrink-0 bg-[var(--accent)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: cart drawer */}
          <div className="rounded-xl border border-ink/12 bg-charcoal text-paper shadow-card-hover">
            {/* Cart header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
                  Cart Drawer
                </p>
                <h3 className="mt-1.5 text-2xl font-bold">Selected dishes</h3>
              </div>
              <span className="rounded-full bg-white/[0.08] px-3 py-1.5 text-sm text-paper/70">
                {cart.length} item{cart.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Cart items */}
            <div className="min-h-52 p-4">
              {cart.length === 0 ? (
                <div className="grid min-h-48 place-items-center rounded-lg border border-dashed border-white/12 p-6 text-center text-paper/40">
                  <div>
                    <p className="text-4xl">🍽</p>
                    <p className="mt-3 text-sm">Add items from the menu above to preview ordering.</p>
                  </div>
                </div>
              ) : (
                <div className="grid gap-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[60px_1fr] gap-3 rounded-lg border border-white/8 bg-white/[0.04] p-3"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.image}
                        alt=""
                        className="h-[60px] w-[60px] rounded-md object-cover"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="truncate text-sm font-semibold">{item.name}</h4>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="shrink-0 text-[0.6rem] uppercase tracking-[0.15em] text-paper/35 transition hover:text-paper/80"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs text-[var(--accent-soft)]">
                          {formatPrice(item.price)}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between">
                          {/* Quantity stepper */}
                          <div className="flex items-center overflow-hidden rounded-lg border border-white/12">
                            <button
                              className="grid h-8 w-8 place-items-center text-paper/70 transition hover:bg-white/[0.08] hover:text-paper"
                              onClick={() => onDecrease(item.id)}
                              aria-label={`Decrease ${item.name}`}
                            >
                              −
                            </button>
                            <span className="grid h-8 w-9 place-items-center border-x border-white/12 text-sm">
                              {item.quantity}
                            </span>
                            <button
                              className="grid h-8 w-8 place-items-center text-paper/70 transition hover:bg-white/[0.08] hover:text-paper"
                              onClick={() => onAdd(item)}
                              aria-label={`Increase ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                          <strong className="text-sm font-bold">
                            {formatPrice(item.price * item.quantity)}
                          </strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Totals + checkout */}
            <div className="border-t border-white/10 px-5 py-5">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-paper/55">
                  <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-paper/55">
                  <span>Demo service</span><span>{formatPrice(service)}</span>
                </div>
              </div>
              <div className="my-4 h-px bg-white/10" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span><span>{formatPrice(total)}</span>
              </div>
              <Button className="mt-5 w-full" disabled={!cart.length}>
                Continue Ordering
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
