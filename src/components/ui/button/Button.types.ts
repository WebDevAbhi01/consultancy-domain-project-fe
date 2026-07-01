import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react"

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link"
export type ButtonSize = "sm" | "md" | "lg" | "icon"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children?: ReactNode
  as?: ElementType
}