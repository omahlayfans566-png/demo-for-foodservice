import { cloneElement, FormEvent, ReactElement, InputHTMLAttributes, useState } from 'react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';

const initial = { name: '', phone: '', date: '', time: '', guests: '2', request: '' };

export function Reservation() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((c) => ({ ...c, [field]: value }));
    setErrors((c) => ({ ...c, [field]: '' }));
    setSuccess(false);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = 'Enter a name for the reservation request.';
    if (form.phone.trim().length < 7) next.phone = 'Enter a reachable phone number.';
    if (!form.date) next.date = 'Choose a preferred date.';
    if (!form.time) next.time = 'Choose a preferred time.';
    if (Number(form.guests) < 1) next.guests = 'Guests must be at least 1.';
    setErrors(next);
    if (!Object.keys(next).length) setSuccess(true);
  };

  return (
    <section id="reserve" className="section bg-charcoal text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* Left: info */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-[var(--accent)]">Reservation Flow</p>
              <h2 className="section-title mt-3 text-paper">
                PLAN THE VISIT<br />BEAUTIFULLY.
              </h2>
              <p className="mt-6 section-lead max-w-sm text-paper/55">
                A polished request form with validation, friendly feedback,
                and clear demo transparency — ready to connect to any booking
                backend.
              </p>

              {/* Contact details */}
              <div className="mt-8 grid gap-4 border-t border-white/8 pt-8">
                {[
                  ['Phone', '+234 000 000 0000'],
                  ['WhatsApp', '+234 000 000 0000'],
                  ['Location', 'Victoria Island, Lagos'],
                  ['Hours', 'Mon–Sun 11:00–00:00'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="w-24 shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-paper/35">
                      {label}
                    </span>
                    <span className="text-sm text-paper/65">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay="80ms">
            <form
              onSubmit={submit}
              noValidate
              className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1410]"
            >
              {/* Form header */}
              <div className="border-b border-white/8 px-6 py-5">
                <h3 className="text-lg font-bold">Book Your Table</h3>
                <p className="mt-1 text-xs text-paper/40">
                  Demo form — no actual booking is made.
                </p>
              </div>

              {/* Fields */}
              <div className="grid gap-5 p-6 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+234 000 000 0000"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Date" error={errors.date}>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                  />
                </Field>
                <Field label="Time" error={errors.time}>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                  />
                </Field>
                <Field label="Guests" error={errors.guests}>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                  />
                </Field>
                <Field label="Special Request">
                  <input
                    value={form.request}
                    onChange={(e) => update('request', e.target.value)}
                    placeholder="Optional"
                  />
                </Field>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full">
                    Check Availability
                  </Button>

                  {success && (
                    <div
                      className="mt-4 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] p-4"
                      role="status"
                    >
                      <p className="text-sm font-bold text-paper">
                        ✓ Reservation request received.
                      </p>
                      <p className="mt-1 text-xs text-paper/55">
                        Restaurant confirmation would be connected here in a live deployment.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactElement<InputHTMLAttributes<HTMLInputElement>>;
}) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <label
      className="grid gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-paper/40"
      htmlFor={id}
    >
      {label}
      {cloneElement(children, {
        id,
        'aria-invalid': Boolean(error),
        className:
          'mt-0.5 min-h-11 w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 text-sm text-paper placeholder-paper/25 outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.08]',
      })}
      {error && (
        <span className="text-[0.7rem] normal-case tracking-normal text-red-400">
          {error}
        </span>
      )}
    </label>
  );
}
