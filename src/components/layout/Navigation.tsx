import { NavLink, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils/utils"

export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Services",     href: "/services"     },
  { label: "About",        href: "/about"        },
  { label: "Insights",     href: "/insights"     },
  { label: "Contact",      href: "/contact"      },
  { label: "Team",         href: "/team"         },
  { label: "Achievements", href: "/achievements" },
  { label: "Plans", href: "/plans" },
  { label: "Values", href: "/Values" },


]

interface NavigationProps {
  orientation?: "horizontal" | "vertical"
  onLinkClick?: () => void
  className?: string
}

export function Navigation({
  orientation = "horizontal",
  onLinkClick,
  className,
}: NavigationProps) {
  const location = useLocation()

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        orientation === "horizontal"
          ? "flex items-center gap-0"
          : "flex flex-col gap-1",
        className
      )}
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.href)

        return (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onLinkClick}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group relative font-medium transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-500)]",
              orientation === "horizontal"
                ? [
                    "px-4 py-2 text-sm tracking-tight",
                    isActive
                      ? "text-[var(--color-forest-900)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-forest-900)]",
                  ].join(" ")
                : [
                    // Vertical (mobile drawer — dark bg)
                    "flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base",
                    isActive
                      ? "bg-[var(--color-forest-700)] text-[var(--color-teal-400)]"
                      : "text-[var(--color-text-on-dark-dim)] hover:bg-[var(--color-forest-700)] hover:text-[var(--color-text-on-dark)]",
                  ].join(" ")
            )}
          >
            <span className="relative z-10">{item.label}</span>

            {/* ── Horizontal: sliding green underline (matches screenshot) ── */}
            {orientation === "horizontal" && (
              <span
                aria-hidden
                className={cn(
                  "absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full",
                  "bg-[var(--color-green-500)]",
                  "origin-left transition-transform duration-300 ease-out",
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            )}

            {/* ── Horizontal: subtle green bg wash on hover ── */}
            {orientation === "horizontal" && (
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-1 inset-y-1 rounded-md",
                  "transition-colors duration-200",
                  "bg-transparent group-hover:bg-[var(--color-green-500)]/6",
                  isActive && "bg-[var(--color-green-500)]/8"
                )}
              />
            )}
          </NavLink>
        )
      })}
    </nav>
  )
}