import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { dummyFaqs } from "../../data/dummyFaqs";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(
    dummyFaqs[0]?.id ?? null
  );

  return (
    <section
      className="
        w-full
        bg-gradient-to-br
        from-[#eef8f3]
        via-[#f8fcfa]
        to-[#e6f7ef]
        py-12
        lg:py-14
      "
    >
      <div className="mx-auto w-full max-w-[1550px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-green-400)]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl leading-tight text-[var(--color-forest-900)] sm:text-5xl">
            Answers that make advisory feel
            <span className="block text-[var(--color-green-500)]">
              clear, confident, and fast.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] lg:text-lg">
            Explore how we vet subsidy eligibility, manage timelines, and keep
            your project moving with fewer surprises.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4">
          {dummyFaqs.map((faq, index) => {
            const isOpen = faq.id === openId;

            return (
              <button
                key={faq.id}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${faq.id}-panel`}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className={`
                  group
                  w-full
                  overflow-hidden
                  rounded-[28px]
                  border
                  bg-white/90
                  text-left
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${
                    isOpen
                      ? "border-[var(--color-green-400)] shadow-lg"
                      : "border-white/60"
                  }
                `}
              >
                {/* Question */}
                <div className="flex items-center gap-4 p-5 lg:p-7">
                  {/* Desktop Number */}
                  <div
                    className="
                      hidden
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[var(--color-accent-light)]
                      font-bold
                      text-[var(--color-green-500)]
                      md:flex
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Divider */}
                  <div className="hidden h-10 w-px bg-[var(--color-green-400)]/20 md:block" />

                  {/* Title */}
                  <div className="flex-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-green-400)] md:hidden">
                      FAQ {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-xl font-semibold leading-snug text-[var(--color-forest-900)] sm:text-2xl">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle */}
                  <span
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-[var(--color-green-500)] bg-[var(--color-green-500)] text-white"
                          : "border-[var(--color-grey-200)] text-[var(--color-green-500)]"
                      }
                    `}
                  >
                    <FaPlus size={16} />
                  </span>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div
                    id={`${faq.id}-panel`}
                    className="px-5 pb-5 lg:px-7 lg:pb-7"
                  >
                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--color-green-400)]/10
                        bg-[var(--color-accent-light)]
                        p-6
                        text-base
                        leading-8
                        text-[var(--color-text-secondary)]
                        lg:p-7
                      "
                    >
                      {faq.answer}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}