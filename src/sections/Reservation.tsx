import { cloneElement, FormEvent, ReactElement, InputHTMLAttributes, useState } from 'react';
import { Button } from '../components/Button';

const initial = { name: '', phone: '', date: '', time: '', guests: '2', request: '' };

export function Reservation() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setSuccess(false);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
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
    <section id="reserve" className="section bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow text-ink/50">Reservation Flow</p>
          <h2 className="section-title mt-4">PLAN THE VISIT BEAUTIFULLY.</h2>
          <p className="mt-6 text-xl leading-8 text-ink/68">
            A polished request form with validation, friendly feedback, and clear demo transparency.
          </p>
        </div>
        <form onSubmit={submit} noValidate className="grid gap-4 border border-ink/12 bg-white/45 p-4 sm:grid-cols-2 sm:p-6">
          <Field label="Name" error={errors.name}>
            <input value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" />
          </Field>
          <Field label="Phone" error={errors.phone}>
            <input value={form.phone} onChange={(e) => update('phone', e.target.value)} autoComplete="tel" />
          </Field>
          <Field label="Date" error={errors.date}>
            <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)} />
          </Field>
          <Field label="Time" error={errors.time}>
            <input type="time" value={form.time} onChange={(e) => update('time', e.target.value)} />
          </Field>
          <Field label="Guests" error={errors.guests}>
            <input type="number" min="1" max="30" value={form.guests} onChange={(e) => update('guests', e.target.value)} />
          </Field>
          <Field label="Special Request">
            <input value={form.request} onChange={(e) => update('request', e.target.value)} placeholder="Optional" />
          </Field>
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full">Check Availability</Button>
            {success && (
              <div className="mt-4 border border-ink/12 bg-ink p-4 text-paper" role="status">
                <strong>Reservation request received.</strong>
                <p className="mt-1 text-sm text-paper/62">Restaurant confirmation would be connected here.</p>
              </div>
            )}
          </div>
        </form>
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
    <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink/62" htmlFor={id}>
      {label}
      {children && (
        <span className="contents">
          {cloneElement(children, {
            id,
            'aria-invalid': Boolean(error),
            className:
              'min-h-12 border border-ink/14 bg-white px-4 text-base text-ink outline-none transition focus:border-ink',
          })}
        </span>
      )}
      {error && <span className="text-xs normal-case tracking-normal text-red-700">{error}</span>}
    </label>
  );
}
