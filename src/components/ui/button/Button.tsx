import { forwardRef, type ElementType } from "react"
import { Loader2 } from "lucide-react"
import { cn } from "../../../lib/utils/utils"
import type { ButtonProps, ButtonVariant, ButtonSize } from "./Button.types"

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-accent)] text-white shadow-sm",
    "hover:bg-[var(--color-accent-hover)]",
    "active:scale-[0.98]",
  ].join(" "),

  secondary: [
    "bg-[var(--color-ink-800)] text-white shadow-sm",
    "hover:bg-[var(--color-ink-700)]",
    "active:scale-[0.98]",
  ].join(" "),

  outline: [
    "border border-[var(--color-border-default)] bg-transparent text-[var(--color-text-primary)]",
    "hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    "active:scale-[0.98]",
  ].join(" "),

  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "hover:bg-[var(--color-paper-200)] hover:text-[var(--color-accent)]",
    "active:scale-[0.98]",
  ].join(" "),

  link: [
    "bg-transparent text-[var(--color-accent)] underline-offset-4 p-0 h-auto min-h-0",
    "hover:underline",
  ].join(" "),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2",
  icon: "size-10 p-0",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      as: Component = "button" as ElementType,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading
    const Tag = Component as ElementType

    return (
      <Tag
        ref={ref}
        disabled={Tag === "button" ? isDisabled : undefined}
        aria-disabled={Tag !== "button" && isDisabled ? true : undefined}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg",
          "transition-all duration-150 cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...rest}
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Tag>
    )
  }
)
Button.displayName = "Button"