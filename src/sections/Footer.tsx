import { restaurantConfig } from '../config/restaurantConfig';
import { Logo } from '../components/Logo';

export function Footer() {
  const navLinks = [
    ['Experience', '#experience'],
    ['Menu', '#menu'],
    ['Gallery', '#gallery'],
    ['Reserve', '#reserve'],
    ['Order', '#order'],
  ];

  return (
    <footer id="footer" className="bg-ink px-4 pb-10 pt-0 text-paper sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Main footer grid */}
        <div className="grid gap-10 border-t border-white/8 pt-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-6 text-paper/45">
              {restaurantConfig.disclosure}
            </p>
            {/* Social handles */}
            <div className="mt-6 flex gap-4">
              {[
                ['IG', restaurantConfig.contact.instagram],
                ['TT', restaurantConfig.contact.tiktok],
              ].map(([platform, handle]) => (
                <span
                  key={platform}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-paper/45"
                >
                  {platform} {handle}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="grid content-start gap-2.5"
            aria-label="Footer navigation"
          >
            <p className="eyebrow mb-2 text-paper/30">Navigation</p>
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-paper/50 transition-colors hover:text-paper"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="grid content-start gap-2.5">
            <p className="eyebrow mb-2 text-paper/30">Contact</p>
            {[
              restaurantConfig.contact.address,
              restaurantConfig.contact.phone,
              restaurantConfig.contact.email,
              restaurantConfig.hours[0],
              restaurantConfig.hours[1],
            ].map((line) => (
              <p key={line} className="text-sm text-paper/50">{line}</p>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/28">
            © {new Date().getFullYear()} NOVA Restaurant Digital Experience
          </p>
          <p className="text-xs text-paper/28">
            Independent showcase concept by {restaurantConfig.creator}
          </p>
        </div>
      </div>
    </footer>
  );
}
