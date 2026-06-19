import Link from "next/link";

export function BackButton({
  href = "/",
  label = "Home",
  variant = "dark",
}: {
  href?: string;
  label?: string;
  variant?: "dark" | "light";
}) {
  const colorClass =
    variant === "dark"
      ? "text-white/70 hover:text-white"
      : "text-brand-charcoal/70 hover:text-brand-red";
  return (
    <div className="border-b border-white/10 bg-brand-charcoal-dark/40">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
        <Link
          href={href}
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${colorClass}`}
        >
          <span aria-hidden>←</span>
          <span>Back to {label}</span>
        </Link>
      </div>
    </div>
  );
}
