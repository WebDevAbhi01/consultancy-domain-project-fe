import { AuthLayout } from "../layouts/AuthLayout"
import { AppLayout } from "../layouts/AppLayout"
import PublicLayout from "../layouts/PublicLayout"
import { ForgotPasswordPage } from "@/pages/ForgetPasswordPage"
import HomePage from "@/pages/HomePage"
import { LoginPage } from "@/pages/LoginPage"
import PageNotFound from "@/pages/PageNotFound"
import { SignupPage } from "@/pages/SignUpPage"
import { Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { DashboardPlaceholder } from "@/pages/DashboardPlaceholder"

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* ── Public marketing site ── */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} /> */}
          {/* <Route path="services" element={<ServicesPage/>} /> */}
          {/* <Route path="services/:slug" element={<ServiceDetailPage />} /> */}
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Route>

        {/* ── Auth pages (no public nav, redirect to dashboard if already logged in) ── */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* ── Protected dashboard ── */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard/*" element={<DashboardPlaceholder />} />
        </Route>

        {/* ── 404 ── */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}