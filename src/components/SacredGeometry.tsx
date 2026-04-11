/**
 * Subtle sacred geometry SVG patterns for background decoration.
 * Renders at low opacity to suggest spiritual energy without overwhelming.
 */

interface SacredGeometryProps {
  variant: "flower-of-life" | "sri-yantra-rings" | "seed-of-life";
  size?: number;
  opacity?: number;
  className?: string;
  color?: string;
}

export function SacredGeometry({
  variant,
  size = 400,
  opacity = 0.04,
  className = "",
  color = "currentColor",
}: SacredGeometryProps) {
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
      >
        {variant === "flower-of-life" && <FlowerOfLife />}
        {variant === "sri-yantra-rings" && <SriYantraRings />}
        {variant === "seed-of-life" && <SeedOfLife />}
      </svg>
    </div>
  );
}

function FlowerOfLife() {
  const cx = 100;
  const cy = 100;
  const r = 30;
  const circles: Array<{ x: number; y: number }> = [{ x: cx, y: cy }];

  // 6 surrounding circles
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    circles.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }

  // 6 outer circles
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    circles.push({
      x: cx + r * 2 * Math.cos(angle),
      y: cy + r * 2 * Math.sin(angle),
    });
  }

  // 6 more between outers
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i + Math.PI / 6;
    circles.push({
      x: cx + r * Math.sqrt(3) * Math.cos(angle),
      y: cy + r * Math.sqrt(3) * Math.sin(angle),
    });
  }

  return (
    <>
      {/* Outer boundary */}
      <circle cx={cx} cy={cy} r={r * 3} strokeWidth="0.3" />
      {circles.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={r} />
      ))}
    </>
  );
}

function SriYantraRings() {
  const cx = 100;
  const cy = 100;
  return (
    <>
      {[20, 35, 50, 65, 80].map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} />
      ))}
      {/* Radiating lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI / 6) * i;
        return (
          <line
            key={i}
            x1={cx + 20 * Math.cos(angle)}
            y1={cy + 20 * Math.sin(angle)}
            x2={cx + 80 * Math.cos(angle)}
            y2={cy + 80 * Math.sin(angle)}
            strokeWidth="0.3"
          />
        );
      })}
    </>
  );
}

function SeedOfLife() {
  const cx = 100;
  const cy = 100;
  const r = 35;

  return (
    <>
      <circle cx={cx} cy={cy} r={r} />
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI / 3) * i;
        return (
          <circle
            key={i}
            cx={cx + r * Math.cos(angle)}
            cy={cy + r * Math.sin(angle)}
            r={r}
          />
        );
      })}
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r * 2} strokeWidth="0.3" />
    </>
  );
}
