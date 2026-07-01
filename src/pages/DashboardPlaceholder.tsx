import { useNavigate } from "react-router-dom"
import { LogOut, LayoutDashboard } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { logout } from "../store/slices/authSlice"

export function DashboardPlaceholder() {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login", { replace: true })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[var(--color-background)] px-4">
      <div className="flex size-16 items-center justify-center rounded-full bg-[var(--color-ink-800)]">
        <LayoutDashboard className="size-7 text-[var(--color-seal-300)]" />
      </div>

      <div className="text-center">
        <p className="font-mono-tabular text-xs uppercase tracking-widest text-[var(--color-accent)]">
          {user?.role === "admin" ? "Administrator" : "Agent"}
        </p>
        <h1 className="mt-2 text-3xl text-[var(--color-text-primary)]">
          Welcome, {user?.name}
        </h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Dashboard is being built. Login succeeded with role:{" "}
          <strong className="text-[var(--color-text-primary)]">{user?.role}</strong>
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 border border-[var(--color-border-default)] px-5 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        <LogOut className="size-4" />
        Sign out
      </button>
    </div>
  )
}