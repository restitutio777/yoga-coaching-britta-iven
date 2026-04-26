import { SectionOrnament } from "@/components/SectionOrnament";

export function Footer() {
  return (
    <footer className="relative bg-warm-dark text-cream-dark/70 overflow-hidden">
      {/* Soft golden glow at top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-10">
        {/* Closing blessing */}
        <div className="text-center mb-16">
          <SectionOrnament align="center" className="mb-8 [&_span]:bg-gold/40" />
          <p className="font-serif italic text-cream/90 text-xl md:text-2xl leading-relaxed max-w-xl mx-auto">
            Du bist nicht allein.<br />
            <span className="text-gold/80">Dein Weg ist heilig.</span>
          </p>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-gold/60">
            Namasté
          </p>
        </div>

        {/* Brand + columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-3xl text-cream mb-3">Saraswati</h3>
            <p className="text-sm leading-relaxed text-cream-dark/60">
              Einfuhlsame Begleitung bei Kundalini-Krisen und spirituellen
              Transformationsprozessen.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base text-gold/80 mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#ueber-mich" className="hover:text-gold transition-colors">
                  Uber mich
                </a>
              </li>
              <li>
                <a href="#kundalini-krise" className="hover:text-gold transition-colors">
                  Kundalini-Krise
                </a>
              </li>
              <li>
                <a href="#angebot" className="hover:text-gold transition-colors">
                  Angebot
                </a>
              </li>
              <li>
                <a href="#mein-ansatz" className="hover:text-gold transition-colors">
                  Mein Ansatz
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-gold transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-gold/80 mb-4 tracking-wide">
              Kontakt
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:kontakt@saraswati.de"
                  className="hover:text-gold transition-colors"
                >
                  kontakt@saraswati.de
                </a>
              </li>
              <li className="text-cream-dark/60">Termine nach Vereinbarung</li>
              <li className="text-cream-dark/60">Online &amp; vor Ort moglich</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/[0.08] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-dark/40">
          <p>&copy; {new Date().getFullYear()} Saraswati &middot; Mit Liebe gestaltet</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
