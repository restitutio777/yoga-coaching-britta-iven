export function Footer() {
  return (
    <footer className="bg-warm-dark text-cream-dark/70 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-cream mb-4">Britta Iven</h3>
            <p className="text-sm leading-relaxed">
              Einfuhlsame Begleitung bei Kundalini-Krisen und spirituellen
              Transformationsprozessen. Du bist nicht allein auf deinem Weg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
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

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:britta@brittaiven.de"
                  className="hover:text-gold transition-colors"
                >
                  britta@brittaiven.de
                </a>
              </li>
              <li>Termine nach Vereinbarung</li>
              <li>Online & vor Ort moglich</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-dark/50">
          <p>&copy; {new Date().getFullYear()} Britta Iven. Alle Rechte vorbehalten.</p>
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
