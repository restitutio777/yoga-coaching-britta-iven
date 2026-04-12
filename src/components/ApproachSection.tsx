import { EnergyField } from "@/components/EnergyOrb";
import { SacredGeometry } from "@/components/SacredGeometry";

export function ApproachSection() {
  const steps = [
    {
      step: "Ankommen",
      description:
        "In einem sicheren, vertrauensvollen Raum darfst du erst einmal ankommen. Ich hore dir zu, ohne zu bewerten. Deine Erfahrungen werden gesehen und ernst genommen.",
    },
    {
      step: "Verstehen",
      description:
        "Gemeinsam ordnen wir ein, was du erlebst. Du bekommst Erklarungen, die dir helfen zu verstehen, was in deinem Korper und Energiesystem geschieht &ndash; und warum.",
    },
    {
      step: "Stabilisieren",
      description:
        "Mit sanften Erdungstechniken, Atemarbeit und korperorientierten Ubungen lernst du, dein Nervensystem zu beruhigen und dich wieder sicher in deinem Korper zu fuhlen.",
    },
    {
      step: "Integrieren",
      description:
        "Schritt fur Schritt lernst du, die Kundalini-Energie in deinen Alltag zu integrieren. So wird die Krise zur Quelle tiefer personlicher Transformation und Wachstum.",
    },
  ];

  return (
    <section id="mein-ansatz" className="relative py-24 md:py-32 bg-sage/5 overflow-hidden">
      {/* Energy field — third-eye chakra (indigo) for insight/intuition */}
      <EnergyField theme="third-eye" intensity={1.3} />

      {/* Flower of life behind the steps */}
      <SacredGeometry
        variant="flower-of-life"
        size={500}
        opacity={0.12}
        color="var(--color-sage-dark)"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="ornament-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-8">
            Mein Ansatz
          </h2>
          <p className="text-lg text-warm-gray leading-relaxed">
            Mein Ansatz verbindet traumasensible Begleitung mit tiefem Verstandnis
            fur spirituelle Prozesse. Ich arbeite ganzheitlich &ndash; mit Korper,
            Geist und Seele.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Circle with subtle glow */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-sage/10 blur-lg scale-150" />
                  <div className="relative w-16 h-16 rounded-full border-2 border-sage/30 flex items-center justify-center bg-white">
                    <span className="font-serif text-xl text-sage">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-warm-dark mb-4">
                  {item.step}
                </h3>
                <p
                  className="text-sm text-warm-gray leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sicherheit",
              text: "Du bestimmst das Tempo. Nichts geschieht, wozu du nicht bereit bist.",
            },
            {
              title: "Verstandnis",
              text: "Deine Erfahrungen sind real und gultig. Hier wirst du nicht pathologisiert.",
            },
            {
              title: "Ganzheitlichkeit",
              text: "Korper, Geist und Seele werden als Einheit betrachtet und begleitet.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="text-center p-8 bg-white/70 backdrop-blur-sm"
            >
              <h4 className="font-serif text-xl text-warm-dark mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-warm-gray leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
