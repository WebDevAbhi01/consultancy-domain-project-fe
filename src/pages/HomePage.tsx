import { FAQAccordion } from "@/components/common/FAQAccordion";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import { TestimonialsSection } from "@/components/common/Testimonial";

export default function HomePage() {

  return (
    <>
      <ImageCarousel />
      <TestimonialsSection />
      <div className="mt-24 w-full">
        <FAQAccordion />
      </div>
    </>
  );
}