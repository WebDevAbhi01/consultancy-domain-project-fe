import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { ImageCarousel } from "@/components/common/ImageCarousel";

export default function HomePage() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      <ImageCarousel />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {isAuthenticated && user ? (
          <>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
            Welcome back, {user.name.split(" ")[0]}
          </h1>
          <p className="mt-4 max-w-xl font-[family-name:var(--font-body)] text-[var(--color-slate)]">
            You're signed in as {user.email}. This is where engagement
            summaries and deliverables would live for a logged-in client.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
            Northbridge Advisory
          </h1>
          <p className="mt-4 max-w-xl font-[family-name:var(--font-body)] text-[var(--color-slate)]">
            Independent advisory for founders and finance leaders. Sign in to
            view your engagement notes, or create an account to get started.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/login"
              className="border border-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-brass)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="border border-[var(--color-brass)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-brass)]"
            >
              Sign up
            </Link>
          </div>
        </>
      )}
      </div>

      <div className="mt-24 w-full">
        <FAQAccordion />
      </div>
    </>
  );
}