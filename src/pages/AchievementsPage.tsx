import {
  dummyAchievements,
  dummyCaseStudies,
  dummyAwards,
} from "@/data/dummyAchievements"
import {
  StatCard,
  CaseStudyCard,
  AwardCard,
} from "@/components/achievements/AwardCard"
import { PageBanner } from "@/components/common/PageBanner"
import { SectionHeading } from "@/components/common/SectionHeading"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function AchievementsPage() {
  return (
    <div className="bg-[var(--color-background)]">
      <PageBanner
        eyebrow="Track record"
        title="Results we've delivered for Indian manufacturers."
        description="Numbers built case by case, file by file — across 12 years, 11 states, and every major manufacturing segment."
      />

      {/* ── Stats grid ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="By the numbers"
          title="What we've accomplished"
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyAchievements.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      {/* ── Case studies ── */}
      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Case studies"
            title="Real engagements, real outcomes"
            subtitle="Names shared with client permission. Project values and timelines are accurate."
            align="left"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {dummyCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Recognition"
          title="Industry awards"
          align="left"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {dummyAwards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--color-forest-900)] px-6 py-16 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-400)]">
          Work with us
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-medium text-white">
          Ready to add your case to this list?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--color-text-on-dark-dim)]">
          Tell us about your project. We'll tell you what's possible.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-green-500)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-green-400)]"
        >
          Get a free assessment <ArrowRight className="size-4" />
        </Link>
      </section>

    </div>
  )
}