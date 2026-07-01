import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

import { Logo } from "../common/Logo";
import { NewsLetterForm } from "./NewsLetterForm";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Strategy & Operations", href: "/services/strategy" },
  { label: "Financial Advisory", href: "/services/financial" },
  { label: "Risk & Compliance", href: "/services/risk" },
  { label: "Growth Planning", href: "/services/growth" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
];

function FooterTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-green-400)]">
      {children}
    </h3>
  );
}

function FooterAccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-b border-white/10 py-4 md:hidden">
      <summary className="flex cursor-pointer items-center justify-between text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-green-400)] list-none">
        <span>{title}</span>
        <span className="transition-transform duration-200 group-open:rotate-45">+</span>
      </summary>
      <div className="mt-4 space-y-4 text-[var(--color-text-on-dark-dim)]">
        {children}
      </div>
    </details>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-footer-bg)] text-[var(--color-text-on-dark)]">
      <div className="mx-auto max-w-[1550px] px-6 py-10 md:px-10 lg:px-16 lg:py-16">
        <div className="md:hidden space-y-4">
          <FooterAccordionSection title="About">
            <p className="text-base leading-7 text-[var(--color-text-on-dark-dim)]">
              Independent advisory for founders and finance leaders who need a second, sharper opinion before the board meeting — not after.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--color-text-on-dark-dim)] transition duration-300 hover:border-[var(--color-green-400)] hover:text-[var(--color-green-400)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </FooterAccordionSection>

          <FooterAccordionSection title="Navigate">
            <ul className="space-y-3 text-lg">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-[var(--color-green-400)]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordionSection>

          <FooterAccordionSection title="Services">
            <ul className="space-y-3 text-lg">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-[var(--color-green-400)]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterAccordionSection>

          <FooterAccordionSection title="Get In Touch">
            <p className="text-lg">hello@northbridge.com</p>
            <p>Bangalore, India</p>
            <p className="max-w-xs leading-7 text-[var(--color-text-on-dark-dim)]">
              Strategic financial guidance for ambitious businesses and leadership teams.
            </p>
          </FooterAccordionSection>
        </div>

        <div className="hidden md:grid gap-10 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />

            <p className="mt-8 max-w-md text-base leading-8 text-[var(--color-text-on-dark-dim)]">
              Independent advisory for founders and finance leaders who need a second, sharper opinion before the board meeting — not after.
            </p>

            <div className="mt-8 flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--color-text-on-dark-dim)] transition duration-300 hover:border-[var(--color-green-400)] hover:text-[var(--color-green-400)]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="mt-12 max-w-md">
              <FooterTitle>Stay Informed</FooterTitle>

              <p className="mt-4 text-sm text-[var(--color-text-on-dark-dim)]">
                One thoughtful note every month. No noise.
              </p>

              <div className="mt-6">
                <NewsLetterForm />
              </div>
            </div>
          </div>

          <div>
            <FooterTitle>Navigate</FooterTitle>

            <ul className="mt-8 space-y-5">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lg text-[var(--color-text-on-dark-dim)] transition-colors hover:text-[var(--color-green-400)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterTitle>Services</FooterTitle>

            <ul className="mt-8 space-y-5">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lg text-[var(--color-text-on-dark-dim)] transition-colors hover:text-[var(--color-green-400)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterTitle>Get In Touch</FooterTitle>

            <div className="mt-8 space-y-5">
              <p className="text-[var(--color-text-on-dark-dim)]">hello@northbridge.com</p>
              <p className="text-[var(--color-text-on-dark-dim)]">Bangalore, India</p>
              <p className="max-w-xs leading-7 text-[var(--color-text-on-dark-dim)]">
                Strategic financial guidance for ambitious businesses and leadership teams.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-border-dark)] pt-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[var(--color-text-on-dark-dim)]">
              © {year} Northbridge Advisory. Est. 2011.
            </p>

            <div className="flex flex-wrap gap-5">
              {LEGAL_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--color-text-on-dark-dim)] transition-colors hover:text-[var(--color-green-400)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
