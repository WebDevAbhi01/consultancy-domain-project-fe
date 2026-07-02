import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { dummyTestimonials } from "../../data/dummyTestimonials"
import type { Testimonial } from "../../types/testimonial.types"

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] p-12 shadow-[0_24px_80px_rgba(24,38,40,0.10)] sm:p-14">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.clientName}
          className="h-24 w-24 rounded-full border border-[var(--color-border)] object-cover"
        />
        <div>
          <p className="text-2xl font-semibold text-[var(--color-ink)]">
            {testimonial.clientName}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {testimonial.role}, {testimonial.companyName}
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2 text-[var(--color-brass)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={index < testimonial.rating ? "h-5 w-5" : "h-5 w-5 opacity-40"}
          />
        ))}
      </div>

      <p className="min-h-[240px] text-lg leading-8 text-[var(--color-text-secondary)]">
        “{testimonial.quote}”
      </p>
    </div>
  )
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % dummyTestimonials.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [])

  const activeTestimonial = dummyTestimonials[activeIndex]

  return (
    <section className="w-full bg-gradient-to-br from-[#eef8f3] via-[#f8fcfa] to-[#e6f7ef] py-24">
      <div className="mx-auto w-full max-w-[1550px] px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-green-400)]">
            Client success
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-forest-900)] sm:text-5xl">
            Trusted advisory that keeps clients moving forward.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] lg:text-lg">
            Real testimonials from finance leaders who rely on quick approvals, clear progress updates, and steady operational support.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (index - 1 + dummyTestimonials.length) % dummyTestimonials.length)}
            aria-label="Previous testimonial"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (index + 1) % dummyTestimonials.length)}
            aria-label="Next testimonial"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mt-12">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(16,92,72,0.08),transparent_45%)]" />
          <div className="relative mx-auto">
            <TestimonialCard testimonial={activeTestimonial} />
          </div>
        </div>
      </div>
    </section>
  )
}
