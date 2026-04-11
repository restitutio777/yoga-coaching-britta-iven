export function AboutSection() {
  return (
    <section id="ueber-mich" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-cream-dark rounded-sm overflow-hidden">
              {/* Placeholder with initials */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/20 to-gold/10">
                <span className="font-serif text-6xl text-sage/30">BI</span>
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-sm -z-10" />
          </div>

          {/* Text content */}
          <div>
            <div className="ornament-line mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-8">
              Uber mich
            </h2>

            <div className="space-y-5 text-warm-gray leading-relaxed">
              <p>
                Ich bin <strong className="text-warm-dark font-medium">Britta Iven</strong> &ndash;
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
