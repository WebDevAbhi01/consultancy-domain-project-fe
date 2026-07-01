import { AuthCard } from "@/components/auth/auth-card/AuthCard";
import { ForgotPasswordForm } from "@/components/auth/forgot-password/ForgotPasswordForm";


export function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset your password"
      subtitle="Account recovery"
      footerText="Remembered it?"
      footerLinkLabel="Back to sign in"
      footerLinkHref="/login"
    >
      <ForgotPasswordForm/>
    </AuthCard>
  )
}