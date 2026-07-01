import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { contactFormSchema, type ContactFormValues } from "@/lib/validators"
import { wait } from "@/lib/helpers"
import { cn } from "@/lib/utils"

const services = [
  "Government subsidy consulting",
  "Bank loan assistance",
  "Compliance & document management",
  "Eligibility assessment only",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (_values: ContactFormValues) => {
    await wait(900)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-[var(--color-green-500)]/30 bg-[var(--color-green-500)]/5 px-8 py-16 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
          <CheckCircle2 className="size-8" strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="text-xl font-medium text-[var(--color-forest-900)]">
            Message received
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            We'll review your project details and get back to you within one business day.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-[var(--color-green-500)] underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Rajesh Kumar"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Company name" error={errors.companyName?.message}>
          <input
            {...register("companyName")}
            placeholder="Kumar Plastics Pvt Ltd"
            className={inputClass(!!errors.companyName)}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@company.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      {/* Service interest */}
      <Field label="What can we help with?">
        <select
          className={cn(inputClass(false), "cursor-pointer")}
          defaultValue=""
        >
          <option value="" disabled>Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Industry, project size, current situation, what you need help with…"
          className={cn(inputClass(!!errors.message), "resize-none")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "flex items-center justify-center gap-2.5 rounded-xl py-4",
          "bg-[var(--color-green-500)] text-sm font-medium text-white",
          "transition-colors duration-200 hover:bg-[var(--color-green-400)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-500)]",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>Send message <ArrowRight className="size-4" /></>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-[var(--color-danger-500)]">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border px-4 py-3 text-sm text-[var(--color-forest-900)]",
    "placeholder:text-[var(--color-text-muted)] bg-white",
    "outline-none transition-colors duration-200",
    hasError
      ? "border-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]"
      : "border-[var(--color-grey-200)] focus:border-[var(--color-green-500)]"
  )
}