import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=70",
    alt: "Goldenes Gras im weichen Abendlicht",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=70",
    alt: "Sanfte Berglandschaft im Morgennebel",
  },
];

export function NatureMood() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg shadow-warm-dark/5 ring-1 ring-gold/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover [filter:saturate(0.85)_brightness(1.03)]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
