import { Link } from "react-router-dom"
import { Landmark } from "lucide-react"
import { cn } from "../../../lib/utils/utils"
import { SITE_NAME } from "@/lib/constants/constants"

interface LogoProps {
  className?: string
  /** Show icon mark only — useful in collapsed sidebars or favicon contexts */
  iconOnly?: boolean
  /** Controls the link destination */
  href?: string
}

export function Logo({ className, iconOnly = false, href = "/" }: LogoProps) {
  return (
    <Link
      to={href}
      aria-label={`${SITE_NAME} — go to homepage`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
        className
      )}
    >
      {/* Icon mark */}
      <span
        aria-hidden
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg",
          "bg-[var(--color-ink-800)] text-[var(--color-seal-300)]",
          "transition-colors group-hover:bg-[var(--color-ink-700)]",
          "size-9"
        )}
      >
        <Landmark className="size-[18px]" strokeWidth={1.75} />
      </span>

      {/* Wordmark */}
      {!iconOnly && (
        <span
          className={cn(
            "font-[var(--font-display)] text-[1.05rem] font-medium tracking-tight",
            "text-[var(--color-ink-900)] dark:text-[var(--color-paper-100)]",
            "leading-none"
          )}
        >
          {SITE_NAME}
        </span>
      )}
    </Link>
  )
}