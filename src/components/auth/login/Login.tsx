import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Eye, EyeOff, ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { loginUser, clearAuthError } from "@/store/slices/authSlice"
import { Input } from "../../ui/input/Input"
import { cn } from "../../../lib/utils/utils"

/* ── Schema ─────────────────────────────────────────────────────────────── */

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional(),
})

type LoginValues = z.infer<typeof loginSchema>

/* ── Component ───────────────────────────────────────────────────────────── */

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { status, error } = useAppSelector((state) => state.auth)
  const isSubmitting = status === "loading"

  // Redirect to the page the user tried to access before being sent to login,
  // or fall back to the dashboard root.
  const redirectTo =
    (location.state as { from?: string } | null)?.from ?? "/dashboard"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: false },
  })

  async function onSubmit(values: LoginValues) {
    dispatch(clearAuthError())
    const result = await dispatch(loginUser(values))
    if (loginUser.fulfilled.match(result)) {
      navigate(redirectTo, { replace: true })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">

      {/* ── Server error banner ── */}
      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-none border-l-2 border-[var(--color-danger)] bg-[var(--color-danger-50)] px-4 py-3"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-[var(--color-danger)]" />
          <p className="text-sm text-[var(--color-danger-700)]">{error}</p>
        </div>
      )}

      {/* ── Email ── */}
      <Input
        label="Email"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        error={errors.email?.message}
        {...register("email")}
      />

      {/* ── Password ── */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-secondary)]"
          >
            Password
          </label>
          <Link
            to="/forgot-password"
            tabIndex={0}
            className="text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:text-[var(--color-accent)]"
          >
            Forgot password?
          </Link>
        </div>

        <div
          className={cn(
            "flex items-center border-b pb-2 transition-colors",
            errors.password
              ? "border-[var(--color-danger)]"
              : "border-[var(--color-border-default)] focus-within:border-[var(--color-accent)]"
          )}
        >
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={cn(
              "w-full bg-transparent text-base text-[var(--color-text-primary)]",
              "placeholder:text-[var(--color-text-secondary)]/60",
              "focus:outline-none"
            )}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="shrink-0 pb-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:text-[var(--color-accent)]"
          >
            {showPassword ? (
              <EyeOff className="size-4" strokeWidth={1.75} />
            ) : (
              <Eye className="size-4" strokeWidth={1.75} />
            )}
          </button>
        </div>

        {errors.password && (
          <p id="password-error" role="alert" className="text-xs text-[var(--color-danger)]">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* ── Remember me ── */}
      <label className="flex cursor-pointer select-none items-center gap-3 text-sm text-[var(--color-text-secondary)]">
        <input
          type="checkbox"
          className="size-4 rounded-none accent-[var(--color-accent)]"
          {...register("remember")}
        />
        Keep me signed in
      </label>
      

      {/* ── Submit ── */}
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
          <Loader2 className="size-4 animate-spin" strokeWidth={2} />
        ) : (
          <>
            Sign in
            <ArrowRight className="size-4" strokeWidth={2} />
          </>
        )}
      </button>

      

      {/* ── Dev hint (remove in production) ── */}
      {import.meta.env.DEV && (
        <p className="border border-dashed border-[var(--color-border-default)] px-3 py-2 text-center text-xs text-[var(--color-text-secondary)]">
          Dev hint — use any email + <strong>password</strong> as password.
          <br />
          Prefix email with "admin" for admin role.
        </p>
      )}
      <Link
        to="/"
        className="mt-8 border border-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-brass)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      >
        Back to home
      </Link> ₹
    </form>
    
  )
}