import Link from "next/link";

const letters = [
  { char: "l", color: "#4285F4" },
  { char: "o", color: "#EA4335" },
  { char: "o", color: "#FBBC05" },
  { char: "g", color: "#4285F4" },
  { char: "l", color: "#34A853" },
  { char: "e", color: "#EA4335" },
] as const;

type LoogleLogoProps = {
  size?: "hero" | "header";
  href?: string | null;
};

export function LoogleLogo({ size = "hero", href = "/" }: LoogleLogoProps) {
  const className =
    size === "hero"
      ? "text-[64px] leading-none tracking-tight select-none sm:text-[90px]"
      : "text-[22px] leading-none tracking-tight select-none sm:text-[28px]";

  const content = (
    <span className={className} aria-label="loogle">
      {letters.map((letter, i) => (
        <span key={`${letter.char}-${i}`} style={{ color: letter.color }}>
          {letter.char}
        </span>
      ))}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
