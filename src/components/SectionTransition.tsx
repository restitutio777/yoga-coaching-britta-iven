import { SectionOrnament } from "@/components/SectionOrnament";

type Props = {
  /** Section color above */
  from: string;
  /** Section color below */
  to: string;
  /** Show the seed-of-life ornament centered in the transition */
  withOrnament?: boolean;
  /** Transition height */
  height?: "sm" | "md" | "lg";
};

const heights = {
  sm: "h-16 md:h-20",
  md: "h-24 md:h-32",
  lg: "h-32 md:h-40",
};

export function SectionTransition({
  from,
  to,
  withOrnament = false,
  height = "md",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full ${heights[height]}`}
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      {withOrnament && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SectionOrnament align="center" />
        </div>
      )}
    </div>
  );
}
