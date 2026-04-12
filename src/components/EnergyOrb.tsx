"use client";

interface EnergyOrbProps {
  /** CSS color string for the orb glow */
  color1: string;
  color2: string;
  /** Size in px */
  size?: number;
  /** Position from top as % */
  top?: string;
  /** Position from left as % */
  left?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Animation delay in seconds */
  delay?: number;
  /** Opacity 0-1 */
  opacity?: number;
  /** Which drift animation variant */
  variant?: "drift-1" | "drift-2" | "drift-3" | "pulse";
}

export function EnergyOrb({
  color1,
  color2,
  size = 400,
  top = "50%",
  left = "50%",
  duration = 20,
  delay = 0,
  opacity = 0.15,
  variant = "drift-1",
}: EnergyOrbProps) {
  return (
    <div
      className={`energy-orb energy-orb--${variant}`}
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 40% 40%, ${color1}, ${color2}, transparent 70%)`,
        opacity,
        filter: `blur(${size * 0.1}px)`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}

/**
 * A group of orbs with a specific chakra-inspired color theme.
 * Place this inside a section with `position: relative; overflow: hidden;`
 */
interface EnergyFieldProps {
  /** Chakra color theme: root(red), sacral(orange), solar(gold), heart(green), throat(blue), third-eye(indigo), crown(violet) */
  theme:
    | "root"
    | "sacral"
    | "solar"
    | "heart"
    | "throat"
    | "third-eye"
    | "crown";
  /** Overall intensity / opacity multiplier */
  intensity?: number;
}

const themeColors: Record<
  EnergyFieldProps["theme"],
  { c1: string; c2: string; c3: string; c4: string }
> = {
  root: {
    c1: "rgba(180, 100, 80, 0.8)",
    c2: "rgba(160, 80, 60, 0.6)",
    c3: "rgba(200, 120, 90, 0.5)",
    c4: "rgba(140, 70, 50, 0.4)",
  },
  sacral: {
    c1: "rgba(210, 140, 70, 0.8)",
    c2: "rgba(200, 120, 60, 0.6)",
    c3: "rgba(220, 160, 90, 0.5)",
    c4: "rgba(190, 130, 60, 0.4)",
  },
  solar: {
    c1: "rgba(196, 162, 101, 0.8)",
    c2: "rgba(212, 184, 122, 0.6)",
    c3: "rgba(180, 150, 80, 0.5)",
    c4: "rgba(160, 140, 90, 0.4)",
  },
  heart: {
    c1: "rgba(124, 144, 112, 0.8)",
    c2: "rgba(154, 175, 143, 0.6)",
    c3: "rgba(100, 130, 90, 0.5)",
    c4: "rgba(140, 170, 120, 0.4)",
  },
  throat: {
    c1: "rgba(100, 140, 180, 0.8)",
    c2: "rgba(120, 160, 190, 0.6)",
    c3: "rgba(90, 130, 170, 0.5)",
    c4: "rgba(130, 170, 200, 0.4)",
  },
  "third-eye": {
    c1: "rgba(120, 100, 160, 0.8)",
    c2: "rgba(140, 120, 180, 0.6)",
    c3: "rgba(110, 90, 150, 0.5)",
    c4: "rgba(150, 130, 190, 0.4)",
  },
  crown: {
    c1: "rgba(170, 140, 190, 0.8)",
    c2: "rgba(190, 160, 210, 0.6)",
    c3: "rgba(160, 130, 180, 0.5)",
    c4: "rgba(200, 170, 220, 0.4)",
  },
};

export function EnergyField({ theme, intensity = 1 }: EnergyFieldProps) {
  const colors = themeColors[theme];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <EnergyOrb
        color1={colors.c1}
        color2={colors.c2}
        size={500}
        top="-10%"
        left="-5%"
        duration={25}
        delay={0}
        opacity={0.45 * intensity}
        variant="drift-1"
      />
      <EnergyOrb
        color1={colors.c3}
        color2={colors.c4}
        size={350}
        top="60%"
        left="75%"
        duration={30}
        delay={5}
        opacity={0.35 * intensity}
        variant="drift-2"
      />
      <EnergyOrb
        color1={colors.c2}
        color2={colors.c3}
        size={280}
        top="30%"
        left="50%"
        duration={22}
        delay={8}
        opacity={0.3 * intensity}
        variant="drift-3"
      />
    </div>
  );
}
