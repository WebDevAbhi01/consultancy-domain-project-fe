import { AuthCard } from "@/components/auth/auth-card/AuthCard";
import { LoginForm } from "@/components/auth/login/Login";


export function LoginPage() {
  return (
    <AuthCard
      title="Sign in to your account"
      subtitle="Welcome back"
      footerText="Don't have an account?"
      footerLinkLabel="Create one free"
      footerLinkHref="/signup"
    >
      <LoginForm/>
    </AuthCard>
  )
}