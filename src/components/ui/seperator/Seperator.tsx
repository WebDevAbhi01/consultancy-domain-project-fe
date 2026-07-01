import { cn } from "../../../lib/utils/utils"

interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  label?: string
  className?: string
}

export function Separator({ orientation = "horizontal", label, className }: SeparatorProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span className="h-px flex-1 bg-[var(--color-border-default)]" />
        <span className="text-xs text-[var(--color-text-secondary)]">{label}</span>
        <span className="h-px flex-1 bg-[var(--color-border-default)]" />
      </div>
    )
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "bg-[var(--color-border-default)] shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
    />
  )
}