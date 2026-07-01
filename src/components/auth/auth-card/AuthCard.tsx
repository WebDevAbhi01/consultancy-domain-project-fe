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
    <div className="min-h-screen w-full bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid min-h-screen w-full gap-8 overflow-hidden rounded-[44px] bg-white shadow-[0_40px_120px_rgba(24,38,40,0.12)] lg:grid-cols-[1fr_1fr]">
        <aside className="hidden h-screen flex-col justify-between bg-[var(--color-forest-900)] px-12 py-14 text-[var(--color-paper-100)] lg:flex">
          <div className="space-y-8">
            <Logo variant="light" />
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-green-400)]">
                Trusted advisory
              </p>
              <h2 className="text-4xl font-semibold leading-tight xl:text-5xl">
                Clarity, confidence, and growth for finance leaders.
              </h2>
              <p className="max-w-xs text-sm leading-7 text-[rgba(242,242,242,0.78)]">
                Strategic advisory for founders, executive teams, and finance leaders who want better outcomes without extra complexity.
              </p>
            </div>

            <div className="grid gap-6 border-t border-[rgba(255,255,255,0.08)] pt-8 text-sm">
              <div>
                <p className="text-2xl font-semibold text-[var(--color-paper-100)]">₹500cr+</p>
                <p className="mt-1 uppercase tracking-[0.28em] text-[rgba(242,242,242,0.72)]">subsidies secured</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--color-paper-100)]">240+</p>
                <p className="mt-1 uppercase tracking-[0.28em] text-[rgba(242,242,242,0.72)]">clients served</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--color-paper-100)]">12+</p>
                <p className="mt-1 uppercase tracking-[0.28em] text-[rgba(242,242,242,0.72)]">years in operation</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12">
          <div className="w-full max-w-[720px]">
            <div className="mb-8 text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-green-500)]">
                {subtitle}
              </p>
              <h1 className="mt-4 text-3xl font-semibold text-[var(--color-forest-900)] sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
                Secure access to your advisory workspace, progress tracking, and client updates.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm sm:p-8">
              {children}
            </div>

            <Separator className="my-8" />
            <p className="text-center text-sm text-[var(--color-text-secondary)] lg:text-left">
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
    </div>
  )
}
