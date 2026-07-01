import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import type { Insight } from "../../types/insight.types"
import { cn } from "../../lib/utils/utils"

interface InsightCardProps {
  insight: Insight
  featured?: boolean
}

export function InsightCard({ insight, featured = false }: InsightCardProps) {
  return (
    <Link
      to={`/insights/${insight.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-white",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
        featured && "md:flex-row"
      )}
    >
      {/* Cover */}
      <div className={cn(
        "flex items-end p-6",
        insight.coverColor,
        featured ? "md:w-2/5 md:min-h-[280px]" : "h-44"
      )}>
        <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {insight.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <Clock className="size-3.5" />
          <span>{insight.readTime}</span>
          <span>·</span>
          <span>{insight.date}</span>
        </div>

        <h3 className={cn(
          "font-medium leading-snug text-[var(--color-forest-900)]",
          "transition-colors duration-200 group-hover:text-[var(--color-green-500)]",
          featured ? "text-xl sm:text-2xl" : "text-base"
        )}>
          {insight.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {insight.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-[var(--color-grey-100)] pt-4">
          <span className="text-xs font-medium text-[var(--color-text-secondary)]">
            {insight.author}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-green-500)] transition-all duration-200 group-hover:gap-2">
            Read <ArrowRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}