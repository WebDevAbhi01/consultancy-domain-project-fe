import { dummyTeam, dummyCompanyValues } from "@/data/dummyTeam"
import { TeamMemberCard } from "../components/team/TeamMemberCard"
import { PageBanner } from "@/components/common/PageBanner"
import { SectionHeading } from "../components/common/SectionHeading"
import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Users } from "lucide-react"
import { Link } from "react-router-dom"

export function TeamPage() {
  return (
    <div className="bg-[var(--color-background)]">

      <PageBanner
        eyebrow="Our team"
        title="People who file, not just advise."
        description="Every case at Sanction & Co. is handled by a specialist who has worked through the same process dozens of times — not handed to a junior after the first meeting."
      >
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[var(--color-teal-400)]">
            <Users className="size-5" strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-lg font-semibold text-white">12+ years</p>
            <p className="text-sm text-white/50">of combined consultancy experience</p>
          </div>
        </div>
      </PageBanner>

      {/* ── Team grid ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Meet the team"
          title="The specialists behind every case"
          subtitle="Small team, deep expertise. Each person owns their work from intake to final disbursement."
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dummyTeam.map((member, idx) => (
            <TeamMemberCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="How we work"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {dummyCompanyValues.map((val) => {
              const Icon = (Icons[val.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Star
              return (
                <div
                  key={val.id}
                  className="flex flex-col gap-4 rounded-2xl border border-[var(--color-grey-200)] bg-[var(--color-grey-100)] p-8"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--color-forest-900)]">{val.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{val.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Hiring CTA ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-[var(--color-forest-900)] px-8 py-16 text-center sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-400)]">
            Join the team
          </p>
          <h2 className="max-w-xl text-3xl font-medium text-white">
            We're looking for people who enjoy untangling bureaucracy.
          </h2>
          <p className="max-w-lg text-[var(--color-text-on-dark-dim)]">
            If you have experience with government schemes, bank credit, or
            document management — and you care about getting it right — we'd
            like to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-green-500)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-green-400)]"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}