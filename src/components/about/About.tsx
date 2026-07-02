import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react"
import { PageBanner } from "@/components/common/PageBanner"
import { SectionHeading } from "@/components/common/SectionHeading"

export function About() {
  return (
    <div className="bg-[var(--color-background)]">
      <PageBanner
        eyebrow="About us"
        title="Practical advisory for manufacturing, finance, and long-term compliance."
        description="We help Indian manufacturers access subsidy funds, secure bank credit, and stay audit-ready across every stage of project execution."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-green-500)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--color-green-400)]"
          >
            Contact our team
          </Link>
          <div className="inline-flex items-center gap-2 text-sm text-white/70">
            <Users className="size-4" />
            Experienced consultants with domain knowledge and delivery focus.
          </div>
        </div>
      </PageBanner>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Our approach"
          title="We combine strategy, execution, and compliance into one advisory partnership"
          subtitle="From eligibility checks to final disbursement, our service is designed to remove the uncertainty from government funding and finance approvals."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
              <ShieldCheck className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-forest-900)]">Trusted process</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Every engagement follows a structured, compliant workflow, so approvals happen with higher confidence and fewer surprises.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-teal-400)]/10 text-[var(--color-teal-400)]">
              <Sparkles className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-forest-900)]">Hands-on delivery</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              We do more than advise — we lodge forms, handle approvals, and keep your project moving through every phase.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-forest-900)]/10 text-[var(--color-forest-900)]">
              <ArrowRight className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-forest-900)]">Client-first support</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              We keep you informed with clear timelines, status updates, and direct handoffs to the teams who execute your case.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest-900)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[var(--color-forest-900)]/90 px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(20,45,38,0.2)] sm:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-400)]">
            Our promise
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            We make every application clearer, faster, and better managed.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
            If you want a partner who understands government funding, bank approval, and manufacturing timelines, we are the team that keeps the process moving.
          </p>
        </div>
      </section>
    </div>
  )
}
