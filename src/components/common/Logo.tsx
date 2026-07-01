import { Link } from "react-router-dom"
import { cn } from "../../lib/utils/utils"

interface LogoProps {
  className?: string
  /** "dark" = on light header bg  |  "light" = on dark footer/drawer bg */
  variant?: "dark" | "light"
  href?: string
}

export function Logo({ className, variant = "dark", href = "/" }: LogoProps) {
  const isDark = variant === "dark"

  return (
    <Link
      to={href}
      aria-label="Sanction & Co. — go to homepage"
      className={cn(
        "group inline-flex items-center gap-3 rounded-md",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-500)]",
        className
      )}
    >
      {/* Diamond icon — matches screenshot */}
      <span
        aria-hidden
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center",
          "transition-transform duration-300 group-hover:scale-105"
        )}
      >
        {/* Outer diamond border */}
        <span className={cn(
          "absolute inset-0 rotate-45 rounded-sm border-2",
          isDark ? "border-[var(--color-green-500)]" : "border-[var(--color-teal-400)]"
        )} />
        {/* Inner diamond fill */}
        <span className={cn(
          "relative size-4 rotate-45 rounded-[2px]",
          isDark ? "bg-[var(--color-green-500)]" : "bg-[var(--color-teal-400)]",
          "transition-colors duration-200",
          isDark
            ? "group-hover:bg-[var(--color-green-400)]"
            : "group-hover:bg-[var(--color-teal-300)]"
        )} />
      </span>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={cn(
          "text-lg font-semibold tracking-tight",
          isDark ? "text-[var(--color-forest-900)]" : "text-[var(--color-grey-100)]",
          "transition-colors duration-200",
          isDark
            ? "group-hover:text-[var(--color-green-500)]"
            : "group-hover:text-[var(--color-teal-400)]"
        )}>
          Sanction & Co.
        </span>
        <span className={cn(
          "text-[0.6rem] font-medium tracking-[0.22em] uppercase mt-0.5",
          isDark ? "text-[var(--color-green-500)]" : "text-[var(--color-teal-400)]"
        )}>
          Advisory
        </span>
      </div>
    </Link>
  )
}