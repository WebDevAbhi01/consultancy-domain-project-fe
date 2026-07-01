import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start px-6 py-32 lg:px-10">
      <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-brass)]">
        404
      </span>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
        Page not found
      </h1>
      <p className="mt-4 text-[var(--color-slate)]">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 border border-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-brass)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
      >
        Back to home
      </Link>
    </div>
  );
}