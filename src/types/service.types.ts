export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string // lucide-react icon name
  highlights: string[]
  category: "subsidy" | "loan"
}

export interface Scheme {
  id: string
  name: string
  authority: string
  maxSubsidyPercent: number
  applicableIndustry: string
  status: "open" | "closing-soon" | "closed"
}