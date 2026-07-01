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

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional(),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { status, error } = useAppSelector((state) => state.auth)
  const isSubmitting = status === "loading"

  const redirectTo = (location.state as { from?: string } | null)?.from ?? "/dashboard"

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
      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border-l-2 border-[var(--color-danger)] bg-[var(--color-danger-50)] px-4 py-3"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-danger)]" />
          <p className="text-sm text-[var(--color-danger-700)]">{error}</p>
        </div>
      )}

      <Input
        label="Email"
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
        autoComplete="current-password"
        placeholder="••••••••"
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

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer select-none items-center gap-3 text-sm text-[var(--color-text-secondary)]">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-none accent-[var(--color-accent)]"
            {...register("remember")}
          />
          Keep me signed in
        </label>

        <Link
          to="/forgot-password"
          className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:text-[var(--color-accent)]"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "flex w-full items-center justify-center gap-2.5 rounded-2xl",
          "bg-[var(--color-ink-900)] py-4",
          "text-sm font-medium tracking-wide text-[var(--color-paper-100)]",
          "transition duration-200",
          "hover:bg-[var(--color-accent)] hover:text-white",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
        ) : (
          <>
            Sign in
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </>
        )}
      </button>

      {import.meta.env.DEV && (
        <p className="rounded-2xl border border-dashed border-[var(--color-border-default)] bg-[var(--color-background)] px-3 py-2 text-center text-xs text-[var(--color-text-secondary)]">
          Dev hint — use any email + <strong>password</strong> as password.
          <br />
          Prefix email with "admin" for admin role.
        </p>
      )}

      <Link
        to="/"
        className="block rounded-2xl border border-[var(--color-ink)] px-5 py-2.5 text-center text-sm font-medium text-[var(--color-ink)] transition duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      >
        Back to home
      </Link>
    </form>
  )
}
