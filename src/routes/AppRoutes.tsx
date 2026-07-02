import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { AppLayout } from "../layouts/AppLayout";
import PublicLayout from "../layouts/PublicLayout";
import { ForgotPasswordPage } from "@/pages/ForgetPasswordPage";
import HomePage from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import PageNotFound from "@/pages/PageNotFound";
import { SignupPage } from "@/pages/SignUpPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { DashboardPlaceholder } from "@/pages/DashboardPlaceholder";
import { TeamPage } from "../../src/pages/TeamPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { AchievementsPage } from "@/pages/AchievementsPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* ── Public marketing site ── */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
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
  );
}
