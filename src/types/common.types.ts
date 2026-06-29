export interface SelectOption {
  label: string;
  value: string;
}

export type AsyncStatus =
  | "idle"
  | "loading"
  | "error"
  | "success";

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}