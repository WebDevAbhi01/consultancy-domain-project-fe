import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(values: NewsletterValues) {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    console.log(values);

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-md"
    >
      <div
        className="
        overflow-hidden
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-sm
        transition-all
        duration-300
        focus-within:border-[var(--color-green-400)]
        focus-within:bg-white/10
      "
      >
        <div className="flex h-14">
          <input
            type="email"
            placeholder="you@company.com"
            className="
              flex-1
              bg-transparent
              px-6
              text-sm
              text-[var(--color-text-on-dark)]
              placeholder:text-white/40
              outline-none
            "
            {...register("email")}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              flex
              min-w-[110px]
              items-center
              justify-center
              gap-2
              bg-[var(--color-green-400)]
              px-6
              font-medium
              text-[var(--color-forest-900)]
              transition-all
              duration-300
              hover:bg-[var(--color-teal-300)]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isSubmitSuccessful ? (
              <>
                <Check size={18} />
                Joined
              </>
            ) : (
              <>
                Join
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-3 min-h-[20px]">
        {errors.email && (
          <p className="text-sm text-red-400">
            {errors.email.message}
          </p>
        )}

        {!errors.email && !isSubmitSuccessful && (
          <p className="text-sm text-[var(--color-text-on-dark-dim)]">
            One thoughtful note each month. No spam.
          </p>
        )}

        {isSubmitSuccessful && (
          <p className="text-sm text-[var(--color-green-400)]">
            You're on the list.
          </p>
        )}
      </div>
    </form>
  );
}