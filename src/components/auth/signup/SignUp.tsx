import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react"
import { Input } from "../../ui/input/Input"
import { Link } from "react-router-dom"

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Enter your full name"),
    email: z.string().min(1, "Email is required").email("Enter a valid email address"),
    password: z.string().min(8, "Use at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
    terms: z.boolean().refine((val) => val, "You must accept the terms to continue"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type SignupValues = z.infer<typeof signupSchema>

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { terms: false },
  })

  async function onSubmit(values: SignupValues) {
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.log("Signup:", values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <Input
        label="Full name"
        id="fullName"
        type="text"
        autoComplete="name"
        placeholder="Jordan Hale"
        error={errors.fullName?.message}
        {...register("fullName")}
      />

      <Input
        label="Work email"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Password"
        id="password"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        placeholder="At least 8 characters"
        error={errors.password?.message}
        rightSlot={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:text-[var(--color-accent)]"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Eye className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        }
        {...register("password")}
      />

      <Input
        label="Confirm password"
        id="confirmPassword"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        placeholder="Repeat your password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <div>
        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[var(--color-accent)]"
            {...register("terms")}
          />
          <span>
            I agree to the <a href="/terms" className="underline decoration-[var(--color-accent)] underline-offset-2 hover:text-[var(--color-text-primary)]">Terms of Service</a> and{' '}
            <a href="/privacy" className="underline decoration-[var(--color-accent)] underline-offset-2 hover:text-[var(--color-text-primary)]">Privacy Policy</a>
          </span>
        </label>
        {errors.terms && (
          <p className="mt-1.5 text-xs text-[var(--color-danger)]">{errors.terms.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-ink-900)] py-3.5 text-sm font-medium tracking-tight text-[var(--color-paper)] transition duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
        ) : (
          <>
            Create account
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </>
        )}
      </button>

      <Link
        to="/"
        className="block rounded-2xl border border-[var(--color-ink)] px-5 py-2.5 text-center text-sm font-medium text-[var(--color-ink)] transition duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      >
        Back to home
      </Link>
    </form>
  )
}
