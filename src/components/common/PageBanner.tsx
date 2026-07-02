import { Link } from "react-router-dom"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils/utils"

interface PageBannerProps {
  eyebrow?: string
  title: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
  children?: ReactNode
  className?: string
  align?: "center" | "left"
}

export function PageBanner({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo,
  children,
  className,
  align = "center",
}: PageBannerProps) {
  const isCenter = align === "center"

  return (
    <section className={cn("bg-[var(--color-forest-900)] px-6 py-20 lg:px-10 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl">
        <div className={cn(isCenter ? "text-center" : "lg:text-left")}> 
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-400)]">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 mx-auto max-w-3xl text-4xl font-medium text-white sm:text-5xl">
            {title}
          </h1>

          {description && (
            <p className={cn(
              "mt-6 mx-auto max-w-2xl text-lg text-white/70",
              !isCenter && "lg:ml-0"
            )}>
              {description}
            </p>
          )}

          {ctaLabel && ctaTo && (
            <div className={cn("mt-10", isCenter ? "flex justify-center" : "flex justify-start")}>
              <Link
                to={ctaTo}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-green-500)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--color-green-400)]"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>

        {children ? (
          <div className={cn("mt-10", isCenter ? "flex justify-center" : "flex justify-start")}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
