import { Outlet, Navigate } from "react-router-dom"
import { useAppSelector } from "@/store/hooks"

export function AuthLayout() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,148,94,0.16),_transparent_24%),linear-gradient(180deg,_#f6fbf7_0%,_#ffffff_100%)]">
      <Outlet />
    </div>
  )
}