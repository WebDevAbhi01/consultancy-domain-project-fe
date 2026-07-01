export interface SelectOption {
  label: string;
  value: string;
}

export type AsyncStatus =
  | "idle"
  | "loading"
  | "error"
  | "success";

export interface NavLinks {
  label: string;
  href: string;
}

export interface FooterLink {
  title: string;
  links: NavLinks[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}