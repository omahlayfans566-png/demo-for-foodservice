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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-ink/50">Ordering Preview</p>
          <h2 className="section-title mt-4">YOUR TABLE STARTS HERE.</h2>
          <p className="mt-6 max-w-xl text-xl leading-8 text-ink/68">
            A frontend-only ordering flow that shows how guests can browse, build a cart, and continue toward checkout.
          </p>
          <p className="mt-5 rounded-full border border-ink/12 px-4 py-3 text-sm text-ink/58">
            Demo checkout - payment integration would be connected for the restaurant.
          </p>
        </div>
        <div className="border border-ink/12 bg-ink p-4 text-paper shadow-2xl sm:p-6">
          <div className="flex items-center justify-between border-b border-white/12 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">Cart Drawer</p>
              <h3 className="mt-2 text-2xl font-semibold">Selected dishes</h3>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-2 text-sm">{cart.length} items</span>
          </div>
          <div className="min-h-56 py-4">
            {cart.length === 0 ? (
              <div className="grid min-h-52 place-items-center border border-dashed border-white/16 text-center text-paper/56">
                Add items from the menu to preview the ordering experience.
              </div>
            ) : (
              <div className="grid gap-3">
                {cart.map((item) => (
                  <div key={item.id} className="grid grid-cols-[64px_1fr] gap-4 border border-white/10 bg-white/[0.04] p-3">
                    <img src={item.image} alt="" className="h-16 w-16 object-cover" loading="lazy" />
                    <div>
                      <div className="flex justify-between gap-3">
                        <h4 className="font-semibold">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-xs uppercase tracking-[0.15em] text-paper/45 hover:text-paper">
                          Remove
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-paper/55">{formatPrice(item.price)}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-white/14">
                          <button className="h-9 w-9" onClick={() => onDecrease(item.id)} aria-label={`Decrease ${item.name}`}>
                            -
                          </button>
                          <span className="grid h-9 w-10 place-items-center border-x border-white/14">{item.quantity}</span>
                          <button className="h-9 w-9" onClick={() => onAdd(item)} aria-label={`Increase ${item.name}`}>
                            +
                          </button>
                        </div>
                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-3 border-t border-white/12 pt-5 text-sm">
            <div className="flex justify-between text-paper/62"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between text-paper/62"><span>Demo service</span><span>{formatPrice(service)}</span></div>
            <div className="flex justify-between text-xl font-semibold"><span>Total</span><span>{formatPrice(total)}</span></div>
            <Button className="w-full" disabled={!cart.length}>
              Continue Ordering
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
