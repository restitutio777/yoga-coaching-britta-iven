export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Akuthilfe bei Kundalini-Krisen",
      description:
        "Sofortige, einfuhlsame Unterstutzung wenn du dich in einer akuten spirituellen Krise befindest. Erdungstechniken, Stabilisierung und das Gefuhl, endlich verstanden zu werden.",
      features: [
        "Schnelle Erstberatung",
        "Erdungs- und Stabilisierungstechniken",
        "Verstandnis und Validierung",
      ],
    },
    {
      number: "02",
      title: "Integrative Begleitung",
      description:
        "Langfristige Begleitung zur Integration deiner spirituellen Erfahrungen. Gemeinsam entwickeln wir Strategien, um die Kundalini-Energie sicher zu kanalisieren und in deinen Alltag zu integrieren.",
      features: [
        "Regelmasige 1:1 Sitzungen",
        "Individuelle Ubungspraxis",
        "Alltagsintegration",
      ],
    },
    {
      number: "03",
      title: "Traumasensible Korperarbeit",
      description:
        "Sanfte, korperorientierte Arbeit die dir hilft, dich wieder sicher in deinem Korper zu fuhlen. Besonders hilfreich bei Dissoziation, Ubererregung und dem Gefuhl, neben dir zu stehen.",
      features: [
        "Somatische Stabilisierung",
        "Atemarbeit und Regulation",
        "Nervensystem-Beruhigung",
      ],
    },
  ];

  return (
    <section id="angebot" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="ornament-line mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-6">
            Mein Angebot
          </h2>
          <p className="text-lg text-warm-gray leading-relaxed">
            Jeder Mensch und jede Krise ist einzigartig. Mein Angebot passt sich
            deinen individuellen Bedurfnissen an &ndash; ob du akute Hilfe brauchst
            oder langfristige Begleitung suchst.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border border-border hover:border-sage/30 p-8 md:p-12 transition-all duration-500"
            >
              <div className="grid md:grid-cols-12 gap-8">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-serif text-5xl text-gold/40 group-hover:text-gold transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-warm-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="md:col-span-4 flex flex-col justify-center">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-warm-gray"
                      >
                        <svg
                          className="w-4 h-4 text-sage shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-warm-gray mb-6">
            Unsicher, welches Angebot zu dir passt?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors font-medium"
          >
            Lass uns in einem kostenlosen Erstgesprach herausfinden
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
