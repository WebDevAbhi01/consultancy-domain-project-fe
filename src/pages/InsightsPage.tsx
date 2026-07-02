import { useState } from "react"
import { dummyInsights } from "@/data/dummyInsights"
import { InsightCard } from "@/components/insights/InsightCard"
import { InsightFilter } from "@/components/insights/InsightFilter"
import { PageBanner } from "@/components/common/PageBanner"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Search } from "lucide-react"

const ALL_CATEGORIES = [...new Set(dummyInsights.map((i) => i.category))]

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = dummyInsights.filter((insight) => {
    const matchesCategory =
      activeCategory === "All" || insight.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const [featured, ...rest] = filtered

  return (
    <div className="bg-[var(--color-background)]">
      <PageBanner
        eyebrow="Insights"
        title="Practical guidance for manufacturers navigating subsidies and loans."
      >
        <div className="relative mt-10 w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            placeholder="Search articles…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 transition-all focus:bg-white/15 focus:ring-[var(--color-teal-400)]"
          />
        </div>
      </PageBanner>

      {/* ── Filter + Articles ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10">

        {/* Filter */}
        <InsightFilter
          categories={ALL_CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-[var(--color-forest-900)]">
              No articles found
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Try a different search term or category.
            </p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery("") }}
              className="mt-4 text-sm font-medium text-[var(--color-green-500)] underline-offset-4 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-8">
            {/* Featured article — full-width */}
            {featured && (
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Latest
                </p>
                <InsightCard insight={featured} featured />
              </div>
            )}

            {/* Rest — 3-column grid */}
            {rest.length > 0 && (
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  More articles
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((insight) => (
                    <InsightCard key={insight.id} insight={insight} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-[var(--color-forest-900)] px-6 py-16 text-center lg:px-10">
        <SectionHeading
          eyebrow="Stay informed"
          title="Get new articles in your inbox"
          subtitle="Scheme deadlines, policy changes, and practical guides — monthly, no noise."
          className="[&_h2]:text-white [&_span]:text-[var(--color-teal-400)]"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="you@company.com"
            className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-[var(--color-teal-400)]"
          />
          <button
            type="submit"
            className="rounded-xl bg-[var(--color-green-500)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-green-400)]"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
}