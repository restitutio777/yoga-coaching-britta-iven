"use client";

import { useState } from "react";
import { EnergyField } from "@/components/EnergyOrb";
import { SacredGeometry } from "@/components/SacredGeometry";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    situation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Vielen Dank fur deine Nachricht. Ich melde mich so schnell wie moglich bei dir."
    );
  };

  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Energy field — sacral chakra (warm orange) for connection/creativity */}
      <EnergyField theme="sacral" intensity={0.7} />

      {/* Sacred geometry */}
      <SacredGeometry
        variant="seed-of-life"
        size={400}
        opacity={0.025}
        color="var(--color-gold)"
        className="absolute -right-32 -bottom-32"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="ornament-line mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-dark mb-8">
              Lass uns sprechen
            </h2>

            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p>
                Der erste Schritt ist oft der schwerste. Wenn du dich in einer
                Kundalini-Krise befindest oder unsicher bist, ob das, was du
                erlebst, damit zusammenhangt &ndash; melde dich einfach.
              </p>

              <p>
                In einem kostenlosen Erstgesprach (ca. 20 Min.) konnen wir gemeinsam
                herausfinden, wie ich dich am besten unterstutzen kann.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-warm-dark">E-Mail</p>
                  <a href="mailto:britta@brittaiven.de" className="text-sm text-sage hover:text-sage-dark transition-colors">
                    britta@brittaiven.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-warm-dark">Sitzungen</p>
                  <p className="text-sm text-warm-gray">Online (Zoom) & vor Ort nach Vereinbarung</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-warm-dark">Reaktionszeit</p>
                  <p className="text-sm text-warm-gray">Ich antworte in der Regel innerhalb von 24 Stunden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10">
            <h3 className="font-serif text-2xl text-warm-dark mb-6">
              Schreib mir
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-warm-gray mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-cream border border-border text-warm-dark text-sm focus:outline-none focus:border-sage transition-colors"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-warm-gray mb-2">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-cream border border-border text-warm-dark text-sm focus:outline-none focus:border-sage transition-colors"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label htmlFor="situation" className="block text-sm text-warm-gray mb-2">Deine Situation (optional)</label>
                <select
                  id="situation"
                  value={formState.situation}
                  onChange={(e) => setFormState({ ...formState, situation: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-border text-warm-dark text-sm focus:outline-none focus:border-sage transition-colors"
                >
                  <option value="">Bitte wahlen...</option>
                  <option value="akut">Akute Kundalini-Krise</option>
                  <option value="symptome">Unklare Symptome nach spiritueller Praxis</option>
                  <option value="integration">Begleitung zur Integration</option>
                  <option value="information">Allgemeine Information</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-warm-gray mb-2">Deine Nachricht</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-cream border border-border text-warm-dark text-sm focus:outline-none focus:border-sage transition-colors resize-none"
                  placeholder="Erzahl mir, wie ich dir helfen kann. Du musst nicht alles erklaren &ndash; schreib einfach, was sich richtig anfuhlt."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-sage text-white text-sm tracking-wider uppercase hover:bg-sage-dark transition-colors duration-300"
              >
                Nachricht senden
              </button>

              <p className="text-xs text-warm-light text-center">
                Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
