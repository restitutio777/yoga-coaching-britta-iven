interface WaveDividerProps {
  /** Color of the wave fill — should match the section BELOW */
  fillColor?: string;
  /** Flip vertically (place at top of section instead of bottom) */
  flip?: boolean;
  /** Wave shape variant */
  variant?: "gentle" | "flowing" | "breath";
}

export function WaveDivider({
  fillColor = "var(--color-cream)",
  flip = false,
  variant = "gentle",
}: WaveDividerProps) {
  const paths: Record<string, string> = {
    gentle:
      "M0,64 C320,120 640,20 960,80 C1280,140 1440,60 1440,60 L1440,150 L0,150 Z",
    flowing:
      "M0,80 C180,130 360,30 540,70 C720,110 900,40 1080,80 C1260,120 1440,50 1440,50 L1440,150 L0,150 Z",
    breath:
      "M0,90 C240,40 480,120 720,70 C960,20 1200,100 1440,60 L1440,150 L0,150 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      }`}
      style={{ marginBottom: flip ? 0 : -1, marginTop: flip ? -1 : 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[100px] block"
      >
        <path d={paths[variant]} fill={fillColor} fillOpacity="1" />
      </svg>
    </div>
  );
}
