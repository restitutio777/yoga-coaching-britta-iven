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
      "M0,90 C360,70 720,110 1080,80 C1260,65 1440,90 1440,90 L1440,150 L0,150 Z",
    flowing:
      "M0,85 C480,100 960,70 1440,85 L1440,150 L0,150 Z",
    breath:
      "M0,95 C240,80 720,105 1200,75 C1360,85 1440,95 1440,95 L1440,150 L0,150 Z",
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
