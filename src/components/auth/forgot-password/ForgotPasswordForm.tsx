import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Loader2, MailCheck } from "lucide-react"
import { z } from "zod"
import { Input } from "../../ui/input/Input"
import { wait } from "../../../lib/helpers/helpers"
import { cn } from ".././../../lib/utils/utils"

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
})

type Values = z.infer<typeof schema>

export function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_values: Values) => {
    await wait(900)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-sage-50)]">
          <MailCheck className="size-6 text-[var(--color-sage-500)]" strokeWidth={1.75} />
        </div>
        <div>
          <p className="text-base font-medium text-[var(--color-text-primary)]">
            Check your inbox
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            We've sent a reset link to{" "}
            <span className="font-medium text-[var(--color-text-primary)]">
              {getValues("email")}
            </span>
            . It expires in 30 minutes.
          </p>
        </div>
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft className="size-3.5" />
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        Enter your account email and we'll send you a secure link to reset your password.
      </p>

      <Input
        label="Email"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "flex w-full items-center justify-center gap-2.5",
          "bg-[var(--color-ink-900)] py-4",
          "text-sm font-medium tracking-wide text-[var(--color-paper-100)]",
          "transition-colors duration-200",
          "hover:bg-[var(--color-accent)] hover:text-white",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            Send reset link
            <ArrowRight className="size-4" strokeWidth={2} />
          </>
        )}
      </button>

      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft className="size-3.5" />
          Back to sign in
        </Link>
      </div>
    </form>
  )
}