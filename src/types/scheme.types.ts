export type SchemeStatus = "open" | "closing-soon" | "closed";

export interface Scheme {
  id: string;
  name: string;
  authority: string;
  maxSubsidyPercent: number;
  applicableIndustry: string;
  status: SchemeStatus;
}
