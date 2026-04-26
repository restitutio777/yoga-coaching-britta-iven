import { EnergyField } from "@/components/EnergyOrb";
import { SacredGeometry } from "@/components/SacredGeometry";

export function CrisisSection() {
  const symptoms = [
    {
      title: "Korperliche Symptome",
      description:
        "Intensive Hitze, Kribbeln, Vibrationen, spontane Bewegungen, Druck im Kopf oder entlang der Wirbelsaule, Schlaflosigkeit.",
    },
    {
      title: "Emotionale Turbulenzen",
      description:
        "Plotzliche Angst, tiefe Traurigkeit, unerklarliche Euphorie, Gefuhl der Entfremdung, emotionale Uberflutung ohne erkennbaren Grund.",
    },
    {
      title: "Veranderte Wahrnehmung",
      description:
        "Ungewohnliche Sinneserfahrungen, verandertes Zeitempfinden, intensive innere Bilder, Gefuhl der Unrealitat oder Desorientierung.",
    },
    {
      title: "Existenzielle Fragen",
      description:
        "Tiefe Sinnkrise, Infragestellen der eigenen Identitat, Gefuhl des Kontrollverlustes, Angst vor dem Verstand zu verlieren.",
    },
  ];

  return (
    <section id="kundalini-krise" className="relative py-24 md:py-32 bg-gradient-to-b from-cream via-[#FFF8EE] to-cream overflow-hidden">
      {/* Energy field — solar plexus (gold) for power/transformation */}
      <EnergyField theme="solar" intensity={1.4} />

      {/* Sacred geometry — seed of life, offset right */}
      <SacredGeometry
        variant="seed-of-life"
        size={500}
        opacity={0.04}
        color="var(--color-gold)"
        className="absolute top-20 -right-20"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="ornament-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-8">
            Was ist eine Kundalini-Krise?
          </h2>
          <p className="text-lg text-warm-gray leading-relaxed">
            Kundalini ist eine kraftvolle Lebensenergie, die in jedem Menschen ruht.
            Wenn sie zu schnell oder unerwartet erwacht &ndash; oft durch intensive
            Meditation, Yoga-Praxis oder andere spirituelle Ubungen &ndash; kann dies
            zu einer tiefen Krise fuhren, die als <em>Kundalini-Syndrom</em> oder{" "}
            <em>spirituelle Notlage</em> bekannt ist.
          </p>
        </div>

        {/* Important message box */}
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-sage/20 rounded-2xl p-8 md:p-10 mb-16">
          <div className="flex gap-4">
            <div className="shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-warm-dark mb-3">
                Das Wichtigste zuerst
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Auch wenn die Symptome beunruhigend sein konnen &ndash;{" "}
                <strong className="text-warm-dark">du bist nicht verrucht geworden</strong>.
                Eine Kundalini-Krise ist ein naturlicher, wenn auch intensiver
                Transformationsprozess. Mit der richtigen Begleitung kannst du lernen,
                diese Erfahrung zu integrieren und als Quelle tiefer personlicher
                Entwicklung zu nutzen.
              </p>
            </div>
          </div>
        </div>

        {/* Symptoms grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {symptoms.map((symptom) => (
            <div
              key={symptom.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover-lift"
            >
              <h3 className="font-serif text-xl text-warm-dark mb-3">
                {symptom.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {symptom.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-warm-gray italic leading-relaxed">
            &bdquo;Spirituelle Krisen sind keine Krankheit, sondern ein Zeichen
            tiefer Transformation. Der Schlussel liegt darin, sich erden zu lernen
            und die Erfahrung sicher zu integrieren.&ldquo;
          </p>
        </div>
      </div>
    </section>
  );
}
