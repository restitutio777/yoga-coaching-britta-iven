interface WaveDividerProps {
  /** Color of the wave fill — should match the section BELOW */
  fillColor?: string;
  /** Color of the section ABOVE (for gradient blend) */
  fromColor?: string;
  /** Flip vertically (place at top of section instead of bottom) */
  flip?: boolean;
  /** Wave shape variant */
  variant?: "gentle" | "flowing" | "breath";
}

export function WaveDivider({
  fillColor = "var(--color-cream)",
  fromColor,
  flip = false,
  variant = "gentle",
}: WaveDividerProps) {
  const paths: Record<string, string> = {
    gentle:
      "M0,80 C360,55 720,105 1080,65 C1260,50 1440,80 1440,80 L1440,150 L0,150 Z",
    flowing:
      "M0,75 C480,95 960,55 1440,75 L1440,150 L0,150 Z",
    breath:
      "M0,85 C240,65 720,100 1200,55 C1360,70 1440,85 1440,85 L1440,150 L0,150 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      }`}
      style={{ marginBottom: flip ? 0 : -1, marginTop: flip ? -1 : 0 }}
      aria-hidden="true"
    >
      {/* Gradient blend above the wave for smooth transition */}
      {fromColor && (
        <div
          className="absolute top-0 left-0 right-0 h-full"
          style={{
            background: `linear-gradient(to bottom, ${fromColor}, transparent 60%)`,
          }}
        />
      )}
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="relative w-full h-[80px] md:h-[120px] block"
      >
        <path d={paths[variant]} fill={fillColor} fillOpacity="1" />
      </svg>
    </div>
  );
}
