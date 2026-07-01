import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { Achievement, Award, CaseStudy } from "@/types/achivement"
import { Building2, Trophy } from "lucide-react"

/* ── StatCard ──────────────────────────────────────────────── */
export function StatCard({ stat }: { stat: Achievement }) {
  const Icon = (Icons[stat.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Star

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-[var(--color-grey-200)] bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
      <span className="flex size-12 items-center justify-center rounded-xl bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
        <Icon className="size-6" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono-tabular text-4xl font-semibold text-[var(--color-forest-900)]">
          {stat.value}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--color-green-500)]">{stat.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {stat.description}
        </p>
      </div>
    </div>
  )
}

/* ── CaseStudyCard ─────────────────────────────────────────── */
export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[var(--color-grey-200)] bg-white p-8">
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-forest-900)]/8 text-[var(--color-forest-900)]">
          <Building2 className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="font-semibold text-[var(--color-forest-900)]">{cs.client}</p>
          <p className="text-sm text-[var(--color-text-muted)]">{cs.industry}</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3">
        <Detail label="Challenge" value={cs.challenge} />
        <Detail label="Result" value={cs.result} />
      </div>

      {/* Metrics row */}
      <div className="flex items-center gap-4 border-t border-[var(--color-grey-100)] pt-4">
        <Metric label="Subsidy secured" value={cs.subsidy} />
        <div className="h-8 w-px bg-[var(--color-grey-200)]" />
        <Metric label="Case duration" value={cs.duration} />
      </div>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{value}</p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{label}</p>
      <p className="mt-0.5 font-mono-tabular text-lg font-semibold text-[var(--color-green-500)]">{value}</p>
    </div>
  )
}

/* ── AwardCard ─────────────────────────────────────────────── */
export function AwardCard({ award }: { award: Award }) {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-[var(--color-grey-200)] bg-white p-6 transition-all duration-200 hover:border-[var(--color-green-500)]/40 hover:shadow-[var(--shadow-card)]">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
        <Trophy className="size-5" strokeWidth={1.75} />
      </span>
      <div>
        <span className="font-mono-tabular text-xs font-semibold text-[var(--color-text-muted)]">
          {award.year}
        </span>
        <h3 className="mt-0.5 font-semibold text-[var(--color-forest-900)]">{award.title}</h3>
        <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">{award.body}</p>
      </div>
    </div>
  )
}