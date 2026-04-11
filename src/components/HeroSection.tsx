export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage/8 via-cream to-cream" />

      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sage/10 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/10 opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Small ornament */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gold/60" />
          </div>
        </div>

        <p className="text-sm tracking-[0.3em] uppercase text-warm-gray mb-6 animate-fade-in-up">
          Begleitung bei spirituellen Krisen
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-warm-dark leading-[1.1] mb-8 animate-fade-in-up-delay">
          Du bist nicht allein
          <span className="block text-sage mt-2">auf diesem Weg</span>
        </h1>

        <p className="text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up-delay-2">
          Einfuhlsame Begleitung bei Kundalini-Krisen, spirituellen Notlagen
          und intensiven Transformationsprozessen.
          <br className="hidden md:block" />
          Ein sicherer Raum fur das, was du gerade durchlebst.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-sage text-white text-sm tracking-wider uppercase rounded-none hover:bg-sage-dark transition-colors duration-300"
          >
            Erstgesprach vereinbaren
          </a>
          <a
            href="#kundalini-krise"
            className="inline-flex items-center justify-center px-8 py-4 border border-warm-dark/20 text-warm-dark text-sm tracking-wider uppercase rounded-none hover:border-sage hover:text-sage transition-colors duration-300"
          >
            Mehr erfahren
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-light">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-warm-light/40" />
      </div>
    </section>
  );
}
