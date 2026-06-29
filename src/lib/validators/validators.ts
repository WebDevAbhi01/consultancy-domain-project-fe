import { z } from "zod";

export const emailSchema = z.string().email("Enter a valid email address");

export const phoneSchema = z
  .string()
  .min(10, "Enter a valid phone number")
  .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters");

export const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  companyName: z.string().min(2, "Enter your company name"),
  email: emailSchema,
  phone: phoneSchema,
  message: z.string().min(10, "Tell us a little about your project"),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const signupFormSchema = z
  .object({
    fullName: z.string().min(2, "Enter your full name"),
    companyName: z.string().min(2, "Enter your company name"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type SignupFormValues = z.infer<typeof signupFormSchema>;

export const forgotPasswordFormSchema = z.object({
  email: emailSchema,
});
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>;

export const newsletterFormSchema = z.object({
  email: emailSchema,
});
export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
