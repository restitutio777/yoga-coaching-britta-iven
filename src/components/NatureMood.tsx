import Image from "next/image";

export function NatureMood() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg shadow-warm-dark/5 ring-1 ring-gold/10">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=70"
            alt="Sanfte Berglandschaft im Morgennebel"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover [filter:saturate(0.85)_brightness(1.03)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
