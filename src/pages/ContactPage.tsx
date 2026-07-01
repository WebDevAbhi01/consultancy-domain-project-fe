import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfoCard } from "@/components/contact/ContactInfoCard"
import { SectionHeading } from "@/components/common/SectionHeading"
import { MessageSquare, Clock, Shield } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

const TRUST_ITEMS = [
  { icon: MessageSquare, text: "Reply within one business day" },
  { icon: Clock,         text: "Free eligibility assessment with every inquiry" },
  { icon: Shield,        text: "Your project details are strictly confidential" },
]

export function ContactPage() {
  return (
    <div className="bg-[var(--color-background)]">

      {/* ── Hero ── */}
      <section className="bg-[var(--color-forest-900)] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-400)]">
            Contact us
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-medium text-white sm:text-5xl">
            Tell us about your project.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/60">
            We'll come back with an initial read on which schemes you might
            qualify for and what a loan proposal could look like — at no cost.
          </p>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap gap-6">
            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-sm text-white/60">
                <Icon className="size-4 shrink-0 text-[var(--color-teal-400)]" strokeWidth={1.75} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">

          {/* Form */}
          <div>
            <h2 className="mb-8 text-2xl font-medium text-[var(--color-forest-900)]">
              Send a message
            </h2>
            <ContactForm />
          </div>

          {/* Info + map */}
          <div className="flex flex-col gap-6">
            <ContactInfoCard />

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-grey-200)]">
              <iframe
                title="Office location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed`}
                width="100%"
                height="220"
                loading="lazy"
                style={{ border: 0, display: "block" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ teaser ── */}
      <section className="border-t border-[var(--color-grey-200)] bg-white px-6 py-16 text-center lg:px-10">
        <SectionHeading
          eyebrow="Before you reach out"
          title="Common questions"
          subtitle="Browse our frequently asked questions — you might find your answer immediately."
        />
        <a
          href="/insights"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--color-green-500)] px-6 py-3 text-sm font-medium text-[var(--color-green-500)] transition-colors hover:bg-[var(--color-green-500)] hover:text-white"
        >
          Browse insights
        </a>
      </section>

    </div>
  )
}