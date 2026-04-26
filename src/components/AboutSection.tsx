import Image from "next/image";
import { EnergyField } from "@/components/EnergyOrb";

export function AboutSection() {
  return (
    <section id="ueber-mich" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Energy field — heart chakra (green) for compassion */}
      <EnergyField theme="heart" intensity={1.3} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative max-w-sm mx-auto md:mx-0">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl shadow-warm-dark/15 ring-1 ring-gold/30">
              <Image
                src="/portrait.jpg"
                alt="Portrait von Saraswati"
                width={640}
                height={427}
                priority
                className="w-full h-full object-cover object-center [filter:sepia(0.35)_contrast(1.05)_brightness(1.03)_saturate(1.1)]"
              />
            </div>
            {/* Decorative outer ring */}
            <div className="absolute inset-0 rounded-full border border-gold/40 scale-[1.04] pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-gold/20 scale-[1.09] pointer-events-none" />
          </div>

          {/* Text content */}
          <div>
            <div className="ornament-line mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-8">
              Uber mich
            </h2>

            <div className="space-y-5 text-warm-gray leading-relaxed">
              <p>
                Ich bin <strong className="text-warm-dark font-medium">Saraswati</strong> &ndash;
                Begleiterin fur Menschen, die sich in einer Kundalini-Krise oder
                spirituellen Notlage befinden.
              </p>

              <p>
                Mein eigener Weg durch intensive spirituelle Erfahrungen hat mir
                gezeigt, wie wichtig es ist, in solchen Momenten nicht allein zu sein.
                Die Kraft einer Kundalini-Erweckung kann uberweltigend sein &ndash;
                besonders wenn sie unerwartet oder zu schnell geschieht.
              </p>

              <p>
                Aus meiner personlichen Erfahrung und meinen Ausbildungen in
                traumasensibler Begleitung, Yoga und ganzheitlicher Arbeit habe ich
                einen Ansatz entwickelt, der <em>Sicherheit, Verstandnis und sanfte
                Integration</em> in den Mittelpunkt stellt.
              </p>

              <p>
                Mein Herzensanliegen ist es, Raume zu schaffen, in denen du dich
                gesehen und gehalten fuhlst &ndash; ohne Bewertung, mit tiefem
                Verstandnis fur das, was du durchlebst.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-serif text-xl text-warm-dark mb-4">
                Meine Qualifikationen
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-warm-gray">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Traumasensible Begleitung
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Kundalini Yoga Lehrerin
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Spirituelle Krisenbegleitung
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Neurosystemische Integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Ayurveda Coaching
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Ganzheitliche Gesundheit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
