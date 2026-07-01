import { cn } from "../../lib/utils/utils";

interface SectionHeadingProps {
  /** Small allcaps label above the title */
  eyebrow?: string;
  /** Main heading — rendered as h2 by default */
  title: string;
  /** Optional supporting sentence below the title */
  subtitle?: string;
  variant?: "light" | "dark";
  /** Alignment: left (default) or center */
  align?: "left" | "center";
  /** Extra classes forwarded to the wrapper div (e.g. "mb-14") */
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  variant = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const isDark = variant === "dark";
  const isCentered = align === "center";

  return (
    <div className={cn(isCentered && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            isDark
              ? "text-[var(--color-teal-400,var(--color-brass))]"
              : "text-[var(--color-teal-400,var(--color-brass))]"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "mt-3 text-3xl font-medium leading-tight sm:text-4xl",
          eyebrow && "mt-4",
          isDark
            ? "text-white"
            : "text-[var(--color-forest-900,var(--color-ink))]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed",
            isCentered && "mx-auto",
            isDark
              ? "text-white/60"
              : "text-[var(--color-text-secondary,var(--color-slate))]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}