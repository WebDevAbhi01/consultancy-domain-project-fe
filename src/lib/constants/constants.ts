import type { NavLinks, SocialLink, FooterLink } from "../../types/common.types"

export const SITE_NAME = "Sanction & Co."
export const SITE_TAGLINE = "Government subsidy and loan consultancy"

export const NAV_LINKS: NavLinks[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const CONTACT_INFO = {
  phone: "+91 80 4567 8900",
  email: "hello@sanctionandco.in",
  address: "4th Floor, Brigade Towers, MG Road, Bengaluru, KA 560001",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.6!3d12.97",
} as const

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
]

export const FOOTER_LINK_GROUPS: FooterLink[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Subsidy consulting", href: "/services/subsidy-consulting" },
      { label: "Loan assistance", href: "/services/loan-assistance" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Log in", href: "/login" },
      { label: "Sign up", href: "/signup" },
    ],
  },
]

/** Centralised z-index scale so layered UI (drawer, modal, toast) never collides. */
export const Z_INDEX = {
  header: 30,
  drawer: 50,
  modalOverlay: 60,
  modal: 61,
  toast: 70,
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const