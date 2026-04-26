import Image from "next/image";
import { EnergyField } from "@/components/EnergyOrb";
import { SectionOrnament } from "@/components/SectionOrnament";

export function AboutSection() {
  return (
    <section id="ueber-mich" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Energy field — heart chakra (green) for compassion */}
      <EnergyField theme="heart" intensity={1.3} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Landscape */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl shadow-warm-dark/15 ring-1 ring-gold/20">
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=70"
                alt="Sanfte Berglandschaft im Morgennebel"
                width={1200}
                height={1200}
                priority
                className="w-full h-full object-cover object-center [filter:saturate(0.9)_brightness(1.03)]"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/40 rounded-2xl -z-10" />
            {/* Subtle gold accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t border-l border-gold/30 rounded-tl-2xl" />
          </div>

          {/* Text content */}
          <div>
            <SectionOrnament className="mb-6" />
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
