import type { Achievement, Award, CaseStudy } from "@/types/achivement"


export const dummyAchievements: Achievement[] = [
  { id: "ach-1", value: "₹500cr+", label: "Subsidies Secured",   description: "Total government subsidy disbursements facilitated for clients since 2014.",     icon: "IndianRupee"  },
  { id: "ach-2", value: "240+",    label: "Clients Served",      description: "Manufacturing units, MSMEs, and large projects across 11 states.",                icon: "Users"        },
  { id: "ach-3", value: "35+",     label: "Schemes Navigated",   description: "State and central government schemes successfully applied across industries.",     icon: "FileCheck2"   },
  { id: "ach-4", value: "98%",     label: "Sanction Rate",       description: "Of all complete files submitted, 98% received a sanction letter.",                icon: "BadgeCheck"   },
  { id: "ach-5", value: "12+",     label: "Years Operating",     description: "Founded in 2014, continuously expanding scope and client base.",                  icon: "Calendar"     },
  { id: "ach-6", value: "11",      label: "States Covered",      description: "Active cases across Karnataka, Maharashtra, Gujarat, Tamil Nadu, and 7 others.", icon: "MapPin"       },
]

export const dummyCaseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    client:    "Kumar Plastics Pvt Ltd",
    industry:  "Plastics Manufacturing",
    challenge: "20 crore greenfield unit eligible for state capital subsidy but owner had no prior experience navigating government schemes.",
    result:    "Full 30% capital subsidy sanctioned within 5 months. All 4 disbursement phases tracked and received over 3 years.",
    subsidy:   "₹6 crore",
    duration:  "3 years",
  },
  {
    id: "cs-2",
    client:    "Farooq Textiles",
    industry:  "Textiles",
    challenge: "Existing unit needed Technology Upgradation Fund support for loom modernisation but prior consultant had filed incorrectly.",
    result:    "Refiled with corrected documentation. 35% TUF subsidy approved. Machinery loan of ₹3 crore arranged with Punjab National Bank.",
    subsidy:   "₹2.1 crore",
    duration:  "18 months",
  },
  {
    id: "cs-3",
    client:    "Desai Precision Components",
    industry:  "Auto Components",
    challenge: "Rapid expansion required ₹8 crore term loan. Previous bank proposal rejected twice due to weak project report.",
    result:    "Rebuilt project report from scratch. Loan approved at HDFC Bank in first submission. MSME subsidy on capital investment filed simultaneously.",
    subsidy:   "₹1.4 crore",
    duration:  "4 months",
  },
]

export const dummyAwards: Award[] = [
  { id: "aw-1", title: "Best MSME Advisory Firm — South India",  body: "Federation of Indian Micro & Small Industries",    year: "2025" },
  { id: "aw-2", title: "Excellence in Financial Consulting",      body: "Karnataka Chamber of Commerce & Industry",         year: "2023" },
  { id: "aw-3", title: "Top 50 SME Consultants — India",         body: "SME Business Excellence Forum",                    year: "2022" },
  { id: "aw-4", title: "Emerging Advisory Firm of the Year",     body: "Confederation of Indian Industry — Karnataka",     year: "2019" },
]