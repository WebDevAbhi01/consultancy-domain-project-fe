import { FAQAccordion } from "@/components/common/FAQAccordion";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import { Testimonial } from "../components/common/Testimonial";
import ServiceShowcase from "@/pages/ServicesShowCard";

export default function HomePage() {
  return (
    <>
      <ServiceShowcase />
      <ImageCarousel />
      <Testimonial />
      <FAQAccordion />
    </>
  );
}
