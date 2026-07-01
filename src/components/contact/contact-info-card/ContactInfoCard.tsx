import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

const items = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    sub: "Mon – Sat, 9 AM – 6 PM IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    sub: "Reply within one business day",
  },
  {
    icon: MapPin,
    label: "Office",
    value: CONTACT_INFO.address,
    href: undefined,
    sub: "Visits by appointment only",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat, 9:00 AM – 6:00 PM",
    href: undefined,
    sub: "Closed on public holidays",
  },
]

export function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[var(--color-grey-200)] bg-white p-8">
      <h2 className="text-xl font-medium text-[var(--color-forest-900)]">
        Get in touch
      </h2>
      <div className="flex flex-col divide-y divide-[var(--color-grey-100)]">
        {items.map(({ icon: Icon, label, value, href, sub }) => (
          <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-green-500)]/10 text-[var(--color-green-500)]">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-0.5 text-sm font-medium text-[var(--color-forest-900)] transition-colors hover:text-[var(--color-green-500)]"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-0.5 text-sm font-medium text-[var(--color-forest-900)]">{value}</p>
              )}
              <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}