import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, CalendarCheck, LogIn, UserPlus } from "lucide-react"
import { Logo } from "@/components/common/Logo"
import { Navigation } from "./Navigation"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { openMobileNav } from "@/store/slices/uiSlice"
import { cn } from "../../lib/utils/utils"
import { NavDrawer } from "./NavDrawer"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const dispatch     = useAppDispatch()
  const isDrawerOpen = useAppSelector((s) => s.ui.isMobileNavOpen)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 w-full z-40 transition-all duration-300",
          // White background — matches screenshot
          "bg-white",
          isScrolled
            ? "border-b border-[var(--color-grey-200)] shadow-[0_2px_16px_rgba(24,38,40,0.08)]"
            : "border-b border-[var(--color-grey-200)]"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[var(--container-page)] items-center justify-between px-6 lg:px-10">

          {/* ── LEFT: Logo ── */}
          <div className="flex-shrink-0">
            <Logo variant="dark" />
          </div>

          {/* ── CENTRE: Navigation ── */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <Navigation orientation="horizontal" />
          </div>

          {/* ── RIGHT: Three action buttons ── */}
          <div className="hidden items-center gap-2 lg:flex flex-shrink-0">
            <HeaderButton to="/contact" variant="outline" icon={<CalendarCheck className="size-4" />}>
              Book Consultation
            </HeaderButton>
            <HeaderButton to="/login" variant="ghost" icon={<LogIn className="size-4" />}>
              Login
            </HeaderButton>
            <HeaderButton to="/signup" variant="filled" icon={<UserPlus className="size-4" />}>
              Sign Up
            </HeaderButton>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
            onClick={() => dispatch(openMobileNav())}
            className={cn(
              "flex size-10 items-center justify-center rounded-lg lg:hidden",
              "text-[var(--color-forest-900)] transition-colors duration-200",
              "hover:bg-[var(--color-grey-100)]",
              "focus-visible:outline-2 focus-visible:outline-[var(--color-green-500)]"
            )}
          >
            <Menu className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </header>
      <NavDrawer/>

    </>
  )
}

type HeaderButtonVariant = "outline" | "ghost" | "filled"

interface HeaderButtonProps {
  to: string
  variant: HeaderButtonVariant
  icon?: React.ReactNode
  children: React.ReactNode
}

function HeaderButton({ to, variant, icon, children }: HeaderButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        // Base
        "group inline-flex items-center gap-2 rounded-lg px-4 py-2",
        "text-sm font-medium transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-500)]",

        // Variant styles
        variant === "outline" && [
          "border border-[var(--color-green-500)] text-[var(--color-green-500)]",
          "hover:bg-[var(--color-green-500)] hover:text-white",
        ],
        variant === "ghost" && [
          "border border-[var(--color-grey-200)] text-[var(--color-text-secondary)]",
          "hover:border-[var(--color-grey-300)] hover:text-[var(--color-forest-900)] hover:bg-[var(--color-grey-100)]",
        ],
        variant === "filled" && [
          "bg-[var(--color-green-500)] text-white border border-[var(--color-green-500)]",
          "hover:bg-[var(--color-green-600)] hover:border-[var(--color-green-600)]",
        ]
      )}
    >
      {icon && (
        <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </Link>
  )
}