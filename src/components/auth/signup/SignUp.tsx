import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "../../../lib/utils/utils";
import { Link } from "react-router-dom";

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
  });

type SignupValues = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { terms: false },
  });

  async function onSubmit(values: SignupValues) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Signup:", values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-slate-dim)]"
        >
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jordan Hale"
          className={cn(
            "mt-2 w-full border-b bg-transparent pb-2 font-[family-name:var(--font-body)] text-base text-[var(--color-ink)] placeholder:text-[var(--color-slate-dim)]/70 focus:outline-none",
            errors.fullName
              ? "border-red-400"
              : "border-[var(--color-line)] focus:border-[var(--color-brass)]"
          )}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-slate-dim)]"
        >
          Work email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className={cn(
            "mt-2 w-full border-b bg-transparent pb-2 font-[family-name:var(--font-body)] text-base text-[var(--color-ink)] placeholder:text-[var(--color-slate-dim)]/70 focus:outline-none",
            errors.email
              ? "border-red-400"
              : "border-[var(--color-line)] focus:border-[var(--color-brass)]"
          )}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-slate-dim)]"
        >
          Password
        </label>
        <div
          className={cn(
            "mt-2 flex items-center border-b",
            errors.password
              ? "border-red-400"
              : "border-[var(--color-line)] focus-within:border-[var(--color-brass)]"
          )}
        >
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="At least 8 characters"
            className="w-full bg-transparent pb-2 font-[family-name:var(--font-body)] text-base text-[var(--color-ink)] placeholder:text-[var(--color-slate-dim)]/70 focus:outline-none"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="pb-2 text-[var(--color-slate-dim)] transition-colors hover:text-[var(--color-ink)]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Eye className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-slate-dim)]"
        >
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Repeat your password"
          className={cn(
            "mt-2 w-full border-b bg-transparent pb-2 font-[family-name:var(--font-body)] text-base text-[var(--color-ink)] placeholder:text-[var(--color-slate-dim)]/70 focus:outline-none",
            errors.confirmPassword
              ? "border-red-400"
              : "border-[var(--color-line)] focus:border-[var(--color-brass)]"
          )}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-2.5 font-[family-name:var(--font-body)] text-sm text-[var(--color-slate)]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-[var(--color-brass)]"
            {...register("terms")}
          />
          <span>
            I agree to the{" "}
            <a href="/terms" className="underline decoration-[var(--color-brass)] underline-offset-2 hover:text-[var(--color-ink)]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline decoration-[var(--color-brass)] underline-offset-2 hover:text-[var(--color-ink)]">
              Privacy Policy
            </a>
          </span>
        </label>
        {errors.terms && (
          <p className="mt-1.5 text-xs text-red-500">{errors.terms.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 bg-[var(--color-ink)] py-3.5 font-[family-name:var(--font-body)] text-sm font-medium tracking-tight text-[var(--color-paper)] transition-colors duration-200 hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)] disabled:opacity-60"
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
        className="mt-8 border border-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-brass)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      >
        Back to home
      </Link>
    </form>
  );
}