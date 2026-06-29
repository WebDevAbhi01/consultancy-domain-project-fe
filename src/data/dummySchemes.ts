import type { Scheme } from "../types/scheme.types"

export const dummySchemes: Scheme[] = [
  {
    id: "sch-1",
    name: "State Industrial Investment Promotion Scheme",
    authority: "Dept. of Industries",
    maxSubsidyPercent: 30,
    applicableIndustry: "Manufacturing",
    status: "open",
  },
  {
    id: "sch-2",
    name: "Employment Generation Subsidy",
    authority: "Ministry of MSME",
    maxSubsidyPercent: 25,
    applicableIndustry: "MSME, Manufacturing",
    status: "open",
  },
  {
    id: "sch-3",
    name: "Capital Investment Incentive",
    authority: "State Finance Dept.",
    maxSubsidyPercent: 20,
    applicableIndustry: "Electronics, Plastics",
    status: "closing-soon",
  },
  {
    id: "sch-4",
    name: "Export Promotion Capital Goods Support",
    authority: "Ministry of Commerce",
    maxSubsidyPercent: 15,
    applicableIndustry: "Export-oriented units",
    status: "open",
  },
  {
    id: "sch-5",
    name: "Technology Upgradation Fund",
    authority: "Ministry of Textiles",
    maxSubsidyPercent: 35,
    applicableIndustry: "Textiles",
    status: "closed",
  },
]