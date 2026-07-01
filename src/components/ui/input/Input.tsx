import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "../../../lib/utils/utils"
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  /** Icon rendered on the left inside the input */
  leftIcon?: ReactNode
  /** Icon/button rendered on the right inside the input */
  rightSlot?: ReactNode
  /** Full-width by default */
  wrapperClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightSlot,
      className,
      wrapperClassName,
      id,
      ...rest
    },
    ref
  ) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined)

    return (
      <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-secondary)]"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex items-center gap-2 border-b pb-2 transition-colors",
            error
              ? "border-[var(--color-danger)]"
              : "border-[var(--color-border-default)] focus-within:border-[var(--color-accent)]"
          )}
        >
          {leftIcon && (
            <span className="shrink-0 text-[var(--color-text-secondary)]">{leftIcon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full bg-transparent text-base text-[var(--color-text-primary)]",
              "placeholder:text-[var(--color-text-secondary)]/60",
              "focus:outline-none",
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...rest}
          />
          {rightSlot && (
            <span className="shrink-0 text-[var(--color-text-secondary)]">{rightSlot}</span>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} role="alert" className="text-xs text-[var(--color-danger)]">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-[var(--color-text-secondary)]">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"