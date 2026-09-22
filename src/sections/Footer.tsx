import { restaurantConfig } from '../config/restaurantConfig';
import { Logo } from '../components/Logo';

export function Footer() {
  return (
    <footer id="footer" className="bg-ink px-4 pb-10 text-paper sm:px-6">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-paper/56">{restaurantConfig.disclosure}</p>
          </div>
          <nav className="grid gap-3 text-sm uppercase tracking-[0.18em] text-paper/60" aria-label="Footer navigation">
            {restaurantConfig.links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-paper">
                {link}
              </a>
            ))}
          </nav>
          <div className="text-sm text-paper/60">
            <p className="uppercase tracking-[0.18em] text-paper">DEMO EXPERIENCE</p>
            <p className="mt-4">Instagram {restaurantConfig.contact.instagram}</p>
            <p>TikTok {restaurantConfig.contact.tiktok}</p>
            <p className="mt-4">Independent showcase concept by {restaurantConfig.creator}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
