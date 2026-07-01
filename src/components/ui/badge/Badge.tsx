import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "success" | "warning" | "danger" | "outline"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--color-seal-100)] text-[var(--color-seal-700)]",
  success: "bg-[var(--color-sage-50)] text-[var(--color-sage-700)]",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-[var(--color-danger-50)] text-[var(--color-danger-700)]",
  outline:
    "border border-[var(--color-border-default)] text-[var(--color-text-secondary)] bg-transparent",
}

export function Badge({ variant = "default", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        variantStyles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}