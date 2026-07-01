import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, CalendarCheck, LogIn, UserPlus } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { closeMobileNav } from "@/store/slices/uiSlice"
import { NAV_ITEMS } from "./Navigation"
import { Logo } from "@/components/common/Logo"
import { cn } from "../../lib/utils/utils"

export function NavDrawer() {
  const dispatch = useAppDispatch()
  const isOpen   = useAppSelector((s) => s.ui.isMobileNavOpen)
  const location = useLocation()
  const close    = () => dispatch(closeMobileNav())

  // Close on route change
  useEffect(() => { close() }, [location.pathname])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            style={{ zIndex: 49 }}
          />

          {/* Panel — dark forest (brand panel) on mobile */}
          <motion.div
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-[var(--color-forest-900)] lg:hidden"
            style={{ zIndex: 50 }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Logo variant="light" />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg",
                  "text-white/60 transition-colors duration-200",
                  "hover:bg-white/10 hover:text-white"
                )}
              >
                <X className="size-5" strokeWidth={1.75} />
              </button>
            </div>

            {/* Nav links */}
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-3 py-5 flex-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.href)

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.045 + 0.08 }}
                  >
                    <Link
                      to={item.href}
                      onClick={close}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-4 py-3.5",
                        "text-base font-medium transition-all duration-200",
                        isActive
                          ? "bg-[var(--color-green-500)]/20 text-[var(--color-teal-400)]"
                          : "text-white/70 hover:bg-white/8 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={cn(
                          "size-4 transition-all duration-200",
                          isActive
                            ? "opacity-100 text-[var(--color-teal-400)]"
                            : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                        )}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col gap-2.5 px-5 pb-6 pt-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <Link
                to="/contact"
                onClick={close}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl py-3.5",
                  "bg-[var(--color-green-500)] text-sm font-medium text-white",
                  "transition-colors duration-200 hover:bg-[var(--color-green-400)]"
                )}
              >
                <CalendarCheck className="size-4" />
                Book Consultation
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={close}
                  className={cn(
                    "flex items-center justify-center gap-1.5 rounded-xl py-3",
                    "border border-white/20 text-sm font-medium text-white/80",
                    "transition-all duration-200 hover:border-white/40 hover:text-white"
                  )}
                >
                  <LogIn className="size-4" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={close}
                  className={cn(
                    "flex items-center justify-center gap-1.5 rounded-xl py-3",
                    "border border-[var(--color-teal-400)] text-sm font-medium text-[var(--color-teal-400)]",
                    "transition-all duration-200 hover:bg-[var(--color-teal-400)]/10"
                  )}
                >
                  <UserPlus className="size-4" />
                  Sign Up
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}