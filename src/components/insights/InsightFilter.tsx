import { cn } from "../../lib/utils/utils"

interface InsightFilterProps {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}

export function InsightFilter({ categories, active, onChange }: InsightFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
            active === cat
              ? "bg-[var(--color-green-500)] text-white shadow-sm"
              : "border border-[var(--color-grey-200)] text-[var(--color-text-secondary)] hover:border-[var(--color-green-500)] hover:text-[var(--color-green-500)]"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}