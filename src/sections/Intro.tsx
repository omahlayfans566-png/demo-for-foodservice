import { Reveal } from '../components/Reveal';

export function Intro() {
  const steps = ['DISCOVER', 'EXPLORE', 'ORDER', 'RESERVE'];
  return (
    <section id="experience" className="section bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ink/54">Experience Strategy</p>
            <h2 className="section-title mt-4">MORE THAN A MENU.</h2>
          </Reveal>
          <Reveal delay="100ms">
            <p className="max-w-2xl text-2xl leading-snug text-ink/72 sm:text-3xl">
              Your restaurant already creates an experience in the real world. Your website should do the same.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step} delay={`${index * 70}ms`}>
              <div className="group border-y border-ink/14 py-7 transition hover:border-ink/50">
                <span className="text-sm text-ink/42">0{index + 1}</span>
                <h3 className="mt-4 text-[clamp(1.7rem,4vw,3.8rem)] font-semibold leading-none tracking-normal">
                  {step}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
