import type { Service} from "../types/service.types"

export const dummyServices: Service[] = [
  {
    id: "svc-1",
    slug: "subsidy-consulting",
    title: "Government subsidy consulting",
    shortDescription:
      "We identify the schemes you qualify for and handle the entire paperwork, from filing to fund release.",
    description:
      "Manufacturing units, MSMEs, and large projects are often eligible for state and central subsidies tied to employment, capital investment, or export targets. We manage scheme identification, document preparation, submission, and follow-up across every disbursement phase — so the money reaches you without you having to chase a single office.",
    icon: "Landmark",
    highlights: [
      "Scheme eligibility assessment",
      "End-to-end documentation",
      "Phase-wise disbursement tracking",
      "Direct liaison with government offices",
    ],
    category: "subsidy",
  },
  {
    id: "svc-2",
    slug: "loan-assistance",
    title: "Bank loan assistance",
    shortDescription:
      "From project reports to bank meetings, we put together a loan proposal that gets approved faster.",
    description:
      "Whether it is working capital, machinery finance, or project funding, we prepare bank-ready proposals, arrange meetings with relationship managers, and stay involved until disbursement. We work with public and private sector banks and NBFCs.",
    icon: "Banknote",
    highlights: [
      "Project report preparation",
      "Bank proposal structuring",
      "Negotiation support",
      "Multi-bank comparison",
    ],
    category: "loan",
  },
  {
    id: "svc-3",
    slug: "compliance-filing",
    title: "Compliance & document management",
    shortDescription:
      "We keep your subsidy and loan paperwork organised and audit-ready for the life of the case.",
    description:
      "Subsidy disbursements can run over many years, in multiple phases. We maintain a single, organised record of every document, sanction letter, and disbursement so you are always audit-ready and never lose track of pending funds.",
    icon: "FileCheck2",
    highlights: [
      "Centralised document vault",
      "Phase-wise status updates",
      "Annual compliance reminders",
      "Audit trail on every record",
    ],
    category: "subsidy",
  },
]