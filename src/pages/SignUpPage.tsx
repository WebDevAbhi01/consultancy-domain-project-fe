import { AuthCard } from "@/components/auth/auth-card/AuthCard";
import { SignupForm } from "@/components/auth/signup/SignUp";


export function SignupPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Get started"
      footerText="Already have an account?"
      footerLinkLabel="Sign in"
      footerLinkHref="/login"
    >
      <SignupForm />
    </AuthCard>
  )
}