type Props = {
  align?: "left" | "center";
  className?: string;
};

export function SectionOrnament({ align = "left", className = "" }: Props) {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={`flex items-center gap-3 ${justify} ${className}`}>
      <span className="h-px w-12 bg-gold/60" />
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Seed of life — 1 center + 6 surrounding circles */}
        <circle cx="16" cy="16" r="4" />
        <circle cx="16" cy="9.07" r="4" />
        <circle cx="16" cy="22.93" r="4" />
        <circle cx="22" cy="12.54" r="4" />
        <circle cx="22" cy="19.46" r="4" />
        <circle cx="10" cy="12.54" r="4" />
        <circle cx="10" cy="19.46" r="4" />
      </svg>
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}
