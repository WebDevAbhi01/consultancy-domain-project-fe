import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MessageCircle, X } from "lucide-react"

const STORAGE_KEY = "sticky-chat-hidden"

export function StickyChatButton() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    setIsCollapsed(saved === "true")
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(isCollapsed))
  }, [isCollapsed])

  if (isCollapsed) {
    return (
      <button
        type="button"
        onClick={() => setIsCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-green-500)] text-white shadow-[0_20px_60px_rgba(16,120,87,0.18)] transition duration-200 hover:bg-[var(--color-green-400)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green-500)] sm:bottom-6 sm:right-6"
        aria-label="Show chat support"
      >
        <MessageCircle className="size-5" strokeWidth={1.75} />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-[var(--color-green-500)] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(16,120,87,0.18)] transition duration-200 sm:bottom-6 sm:right-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2"
        aria-label="Go to home page"
      >
        <MessageCircle className="size-5" strokeWidth={1.75} />
        Chat support
      </Link>
      <button
        type="button"
        onClick={() => setIsCollapsed(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-white)]"
        aria-label="Hide chat support"
      >
        <X className="size-4" strokeWidth={1.75} />
      </button>
    </div>
  )
}
