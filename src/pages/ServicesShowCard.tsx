import HeroServiceCard from "@/components/hero-home/HeroServicecard";
import { services } from "@/data/dummyShowCaseServices";
import { Link } from "react-router-dom";

export default function ServiceShowcase() {
  return (
    <section className="w-full bg-[var(--color-forest-900)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-400)]">
            Our Expertise
          </p>

          <h2 className="mt-4 text-5xl font-medium text-white">
            Solutions That Drive Manufacturing Growth
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            We provide end-to-end advisory services covering subsidies,
            financing, compliance, and strategic business expansion.
          </p>
        </div>

        {/* Service List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <HeroServiceCard  key={service.title}
              {...service}
              reverse={index % 2 !== 0}/>
          ))}
        </div>

        {/* Button */}
        <div className="mt-24 flex justify-center">
          <Link
            to="/services"
            className="rounded-xl bg-[var(--color-green-500)] px-8 py-4 text-white transition hover:bg-[var(--color-green-400)]"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </section>
  );
}