import { EnergyOrb } from "@/components/EnergyOrb";
import { SacredGeometry } from "@/components/SacredGeometry";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient — warm yellow sunlight center */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8F0]/30 via-[#FFF9EE] to-[#FFF7E8]" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#FFEDCA]/80 via-[#FFF3DA]/45 to-transparent" />

      {/* Energy orbs — warm gold center, purple around edges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Center: warm sunlight glow */}
        <EnergyOrb
          color1="rgba(220, 190, 120, 0.8)"
          color2="rgba(200, 170, 90, 0.5)"
          size={600}
          top="40%"
          left="45%"
          duration={25}
          opacity={0.4}
          variant="pulse"
        />
        {/* Purple edges — top-left */}
        <EnergyOrb
          color1="rgba(160, 130, 190, 0.7)"
          color2="rgba(140, 110, 170, 0.4)"
          size={400}
          top="-8%"
          left="-8%"
          duration={28}
          opacity={0.4}
          variant="drift-1"
        />
        {/* Purple edges — top-right */}
        <EnergyOrb
          color1="rgba(170, 140, 200, 0.7)"
          color2="rgba(150, 120, 180, 0.4)"
          size={350}
          top="-5%"
          left="85%"
          duration={26}
          delay={3}
          opacity={0.35}
          variant="drift-2"
        />
        {/* Purple edges — bottom-left */}
        <EnergyOrb
          color1="rgba(150, 120, 180, 0.6)"
          color2="rgba(130, 100, 160, 0.3)"
          size={300}
          top="75%"
          left="-5%"
          duration={24}
          delay={6}
          opacity={0.3}
          variant="drift-3"
        />
        {/* Purple edges — bottom-right */}
        <EnergyOrb
          color1="rgba(160, 130, 190, 0.6)"
          color2="rgba(140, 110, 170, 0.3)"
          size={350}
          top="70%"
          left="88%"
          duration={30}
          delay={4}
          opacity={0.35}
          variant="drift-1"
        />
      </div>

      {/* Sacred geometry — flower of life */}
      <SacredGeometry
        variant="flower-of-life"
        size={700}
        opacity={0.06}
        color="var(--color-gold)"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-gold/15 opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-gold/15 opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-warm-gray mb-6 animate-fade-in-up">
          Begleitung bei spirituellen Krisen
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-warm-dark leading-[1.1] mb-8 animate-fade-in-up-delay">
          Wenn <span className="text-[#B87333]">Unbändiges</span>
          <span className="block">in Dir erwacht.</span>
          <span className="block text-sage mt-2">Helfe ich. Hindurch.</span>
        </h1>

        <p className="text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up-delay-2">
          Einfuhlsame <em className="italic">Begleitung bei Kundalini-Krisen</em> und intensiven Transformationsprozessen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-sage text-white text-sm tracking-wider uppercase rounded-full hover:bg-sage-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Erstgesprach vereinbaren
          </a>
          <a
            href="#kundalini-krise"
            className="inline-flex items-center justify-center px-10 py-4 border border-[#B87333]/30 text-[#B87333] text-sm tracking-wider uppercase rounded-full hover:border-[#B87333] hover:text-[#9A5F2A] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
