import { EnergyField } from "@/components/EnergyOrb";

export function CrisisSection() {
  const symptoms = [
    {
      title: "Korperliche Symptome",
      description:
        "Intensive Hitze, Kribbeln, Vibrationen, spontane Bewegungen, Druck im Kopf oder entlang der Wirbelsaule, Schlaflosigkeit.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      ),
    },
    {
      title: "Emotionale Turbulenzen",
      description:
        "Plotzliche Angst, tiefe Traurigkeit, unerklarliche Euphorie, Gefuhl der Entfremdung, emotionale Uberflutung ohne erkennbaren Grund.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
    },
    {
      title: "Veranderte Wahrnehmung",
      description:
        "Ungewohnliche Sinneserfahrungen, verandertes Zeitempfinden, intensive innere Bilder, Gefuhl der Unrealitat oder Desorientierung.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      title: "Existenzielle Fragen",
      description:
        "Tiefe Sinnkrise, Infragestellen der eigenen Identitat, Gefuhl des Kontrollverlustes, Angst vor dem Verstand zu verlieren.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="kundalini-krise" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Energy field — solar plexus (gold) for power/transformation */}
      <EnergyField theme="solar" intensity={0.9} />

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
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-sage/20 p-8 md:p-10 mb-16">
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
              className="bg-white/80 backdrop-blur-sm p-8 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-sage/8 flex items-center justify-center text-sage mb-5">
                {symptom.icon}
              </div>
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
