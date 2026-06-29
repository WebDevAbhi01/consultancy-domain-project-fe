import type { TeamMember, Milestone, CompanyValue } from "../types/team.types"

export const dummyTeam: TeamMember[] = [
  {
    id: "team-1",
    name: "Vikram Shah",
    role: "Founder & Principal Consultant",
    photoUrl: "https://i.pravatar.cc/200?img=8",
    bio: "15+ years navigating state and central subsidy schemes for manufacturing clients.",
  },
  {
    id: "team-2",
    name: "Priya Nair",
    role: "Head of Banking Relations",
    photoUrl: "https://i.pravatar.cc/200?img=45",
    bio: "Former bank relationship manager; structures loan proposals that move fast through credit committees.",
  },
  {
    id: "team-3",
    name: "Arjun Mehta",
    role: "Lead Documentation Specialist",
    photoUrl: "https://i.pravatar.cc/200?img=51",
    bio: "Owns the paperwork from intake to sanction across every active case.",
  },
  {
    id: "team-4",
    name: "Sneha Reddy",
    role: "Client Relations Manager",
    photoUrl: "https://i.pravatar.cc/200?img=24",
    bio: "Keeps every client updated at every phase, for the life of the case.",
  },
]

export const dummyMilestones: Milestone[] = [
  {
    id: "m-1",
    year: "2014",
    title: "Founded in Bengaluru",
    description: "Started as a two-person consultancy helping local MSMEs file subsidy claims.",
  },
  {
    id: "m-2",
    year: "2017",
    title: "Crossed 100 clients",
    description: "Expanded into bank loan facilitation alongside subsidy consulting.",
  },
  {
    id: "m-3",
    year: "2021",
    title: "₹250 crore in subsidies secured",
    description: "Cumulative subsidy disbursements secured for clients crossed ₹250 crore.",
  },
  {
    id: "m-4",
    year: "2026",
    title: "Digital case tracking launched",
    description: "Every client case now tracked phase-by-phase on a dedicated platform.",
  },
]

export const dummyCompanyValues: CompanyValue[] = [
  {
    id: "val-1",
    title: "Transparency",
    description: "Every client sees exactly where their case stands, at every phase.",
    icon: "Eye",
  },
  {
    id: "val-2",
    title: "Persistence",
    description: "We follow files for years, not just until the first cheque clears.",
    icon: "Flag",
  },
  {
    id: "val-3",
    title: "Precision",
    description: "Paperwork errors cause the delays we exist to prevent — so we double-check everything.",
    icon: "Target",
  },
]