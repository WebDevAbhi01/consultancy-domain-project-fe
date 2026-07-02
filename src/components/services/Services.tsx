import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Briefcase, Banknote, FileCheck2 } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { SectionHeading } from "@/components/common/SectionHeading";
import { dummyServices } from "@/data/dummyServices";
import type { Service } from "@/types/service.types";

function ServiceCard({ service }: { service: Service }) {
  const Icon =
    (Icons[service.icon as keyof typeof Icons] as LucideIcon) ??
    Icons.Briefcase;

  return (
    <article className="group flex flex-col gap-6 rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
        <Icon className="size-6" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[var(--color-forest-900)]">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
          {service.shortDescription}
        </p>
      </div>
      <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-green-500)]/10 text-[var(--color-green-500)] text-[10px]">
              ✓
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  return (
    <div className="bg-[var(--color-background)]">
      <PageBanner
        eyebrow="Services"
        title="Advisory services for growth, compliance, and funding."
        description="From government subsidy strategy to bank loan support and compliance management, we help manufacturers move from planning to approval faster."
        ctaLabel="Book a consultation"
        ctaTo="/contact"
      >
        <div className="inline-flex items-center gap-2 text-sm text-white/70">
          <Briefcase className="size-4" />
          <span>Advisory for manufacturing, loans, and compliance.</span>
        </div>
      </PageBanner>

      <section className="section-heading mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title="Services designed around real manufacturing needs"
          subtitle="Every package is backed by government filings, bank-ready documentation, and on-ground follow-through."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-3">
          <div className="rounded-[28px] bg-[var(--color-forest-900)] px-8 py-10 text-white shadow-[0_20px_70px_rgba(20,45,38,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-400)]">
              Why choose us?
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Closer to your business, not just your paperwork.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              We combine technical subsidy knowledge with practical financing
              and compliance support, so your case stays moving and your team
              stays focused.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
                <Banknote className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--color-forest-900)]">
                Bank loan readiness
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                We prepare bank-grade project reports, structure term sheets,
                and coordinate directly with lenders.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-forest-900)]/10 text-[var(--color-forest-900)]">
                <FileCheck2 className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--color-forest-900)]">
                Compliance support
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                We keep subsidy and loan documents organised, audit-ready, and
                filed on time across every phase.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--color-grey-200)] bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-teal-400)]/10 text-[var(--color-teal-400)]">
              <ArrowRight className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[var(--color-forest-900)]">
              One partner, one process
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              We stay involved beyond the application — from first eligibility
              checks to final fund release.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
