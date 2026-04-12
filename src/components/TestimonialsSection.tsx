import { EnergyField } from "@/components/EnergyOrb";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Als meine Kundalini-Erfahrungen begannen, dachte ich, ich wurde verrucht. Britta war die erste Person, die mir erklaren konnte, was mit mir geschieht. Allein das Wissen, dass ich nicht allein bin, hat mir unendlich geholfen.",
      author: "M. K.",
      context: "Nach intensiver Meditationspraxis",
    },
    {
      text: "Die Arbeit mit Britta hat mir geholfen, mich wieder sicher in meinem Korper zu fuhlen. Ihre ruhige, verstandnisvolle Art und ihre Erdungstechniken haben mir durch die schwierigste Zeit meines Lebens geholfen.",
      author: "S. L.",
      context: "Spontanes Kundalini-Erwachen",
    },
    {
      text: "Nach einem Retreat hatte ich wochenlang Symptome, die kein Arzt einordnen konnte. Britta hat mir gezeigt, dass es einen Weg durch diese Erfahrung gibt &ndash; und dass sie ein Geschenk sein kann.",
      author: "T. W.",
      context: "Nach einem Yoga-Retreat",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Energy field — heart chakra (green) for healing/love */}
      <EnergyField theme="heart" intensity={1.3} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="ornament-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-6">
            Stimmen
          </h2>
          <p className="text-warm-gray">
            Was Menschen sagen, die diesen Weg gegangen sind.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream/80 backdrop-blur-sm p-8 md:p-10 relative"
            >
              {/* Quote mark */}
              <div className="font-serif text-6xl text-gold/20 leading-none mb-4">
                &ldquo;
              </div>

              <p
                className="text-warm-gray text-sm leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />

              <div className="pt-6 border-t border-border">
                <p className="font-medium text-warm-dark text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-warm-light mt-1">
                  {testimonial.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
