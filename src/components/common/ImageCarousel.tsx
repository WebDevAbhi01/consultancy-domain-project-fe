import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carouselData } from "../../data/dummyCarousel";
import { cn } from "../../lib/utils/utils";

export interface CarouselItem {
  id: number | string;
  image: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
}

interface ImageCarouselProps {
  items?: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function ImageCarousel({
  items = carouselData,
  autoPlay = true,
  autoPlayInterval = 7000,
  className,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const pageCount = items.length;

  useEffect(() => {
    if (!autoPlay || pageCount <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pageCount);
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayInterval, pageCount]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  if (pageCount === 0) return null;

  return (
    <section className={cn("relative overflow-hidden bg-[var(--color-accent-light)]", className)}>
      <div className="mx-auto w-full max-w-[1550px] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-green-400)]">
            Featured advisory highlights
          </p>
          <h2 className="mt-4 text-3xl font-[family-name:var(--font-display)] leading-tight text-[var(--color-forest-900)] sm:text-4xl lg:text-5xl">
            A premium carousel for the stories that move your business forward.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
            Slide through our newest advisory themes with bright imagery, sharp outcomes, and a clear next step on every panel.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] bg-[var(--color-surface)] shadow-card">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item) => (
              <article key={item.id} className="min-w-full relative">
                <div className="relative h-[520px] w-full overflow-hidden rounded-[32px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,35,32,0.78)] via-[rgba(19,35,32,0.16)] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                    <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/90 backdrop-blur-sm">
                      {item.badge}
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                      {item.description}
                    </p>
                    <Link
                      to={item.ctaLink}
                      className="mt-6 inline-flex rounded-full bg-[var(--color-green-500)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--color-green-400)]"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-3">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "h-3 w-3 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-[var(--color-green-500)] shadow-[0_0_0_4px_rgba(59,148,94,0.12)]"
                    : "bg-[var(--color-grey-300)] hover:bg-[var(--color-green-400)]"
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {activeIndex + 1} / {pageCount} slides
          </p>
        </div>
      </div>
    </section>
  );
}
