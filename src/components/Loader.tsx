import { restaurantConfig } from '../config/restaurantConfig';

export function Loader() {
  return (
    <div className="loader fixed inset-0 z-[100] grid place-items-center bg-ink text-paper">
      <div className="text-center">
        <div className="flex gap-3 text-4xl font-semibold tracking-[0.45em] sm:text-6xl">
          {restaurantConfig.brandName.split('').map((letter, index) => (
            <span key={letter} style={{ animationDelay: `${index * 90}ms` }}>
              {letter}
            </span>
          ))}
        </div>
        <p className="mt-5 text-[0.62rem] uppercase tracking-[0.36em] text-paper/45">
          {restaurantConfig.positioning}
        </p>
      </div>
    </div>
  );
}
