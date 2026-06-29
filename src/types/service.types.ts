export type ServiceCategory = "subsidy" | "loan";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  highlights: string[];
  category: ServiceCategory;
}
