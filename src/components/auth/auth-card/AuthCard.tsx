import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Logo } from "@/components/common/Logo"
import { Separator } from "@/components/ui/seperator"

interface AuthCardProps {
  /** Form title */
  title: string
  /** Subtitle or context line beneath the title */
  subtitle: string
  /** The form content */
  children: ReactNode
  /** Footer nudge text, e.g. "Don't have an account?" */
  footerText: string
  /** Label for the footer link */
  footerLinkLabel: string
  /** Href for the footer link */
  footerLinkHref: string
}

export function AuthCard({
  title,
  subtitle,
  children,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen w-full">
      {/* ── Left brand panel ── */}
      <BrandPanel />

      {/* ── Right form panel ── */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
        {/* Mobile-only logo */}
        <div className="mb-10 lg:hidden">
          <Logo />
        </div>

        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {subtitle}
            </p>
            <h1 className="text-3xl font-medium text-[var(--color-text-primary)] sm:text-4xl">
              {title}
            </h1>
          </div>

          {/* Form slot */}
          {children}

          {/* Footer link */}
          <Separator className="my-8" />
          <p className="text-center text-sm text-[var(--color-text-secondary)]">
            {footerText}{" "}
            <Link
              to={footerLinkHref}
              className="font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)] hover:underline underline-offset-4"
            >
              {footerLinkLabel}
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

/* ── Brand panel ───────────────────────────────────────────────────────────── */

const TRUST_SIGNALS = [
  { value: "₹500cr+", label: "subsidies secured" },
  { value: "240+", label: "clients served" },
  { value: "12+", label: "years in operation" },
]

function BrandPanel() {
  return (
    <div
      aria-hidden="true"
      className="hidden flex-col justify-between bg-[var(--color-ink-900)] px-14 py-16 lg:flex lg:w-[480px] xl:w-[520px]"
    >
      {/* Logo */}
      <div className="[&_span:last-child]:text-[var(--color-paper-100)]">
        <Logo />
      </div>

      {/* Center copy */}
      <div className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-seal-300)]">
          Sanction &amp; Co.
        </p>
        <h2 className="text-4xl font-medium leading-[1.15] text-[var(--color-paper-100)] xl:text-5xl">
          We handle the paperwork.
          <br />
          <span className="text-[var(--color-seal-300)]">You get the sanction.</span>
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--color-ink-400)]">
          Government subsidy consulting and bank loan facilitation — from
          eligibility to final disbursement.
        </p>
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-3 gap-6 border-t border-[var(--color-ink-700)] pt-8">
        {TRUST_SIGNALS.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono-tabular text-2xl font-medium text-[var(--color-paper-100)]">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-[var(--color-ink-400)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}