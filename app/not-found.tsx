import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home", desc: "Start over from the top" },
  {
    href: "/press-brake-safety",
    label: "Press brake safety",
    desc: "Lazer Safe retrofits & compatibility",
  },
  { href: "/machine-guarding", label: "Machine guarding", desc: "Guards, light curtains, fencing" },
  { href: "/search", label: "Shop", desc: "Browse all products" },
];

export default function NotFound() {
  return (
    <>
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Error 404
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold text-brand-charcoal lg:text-6xl">
            We couldn&rsquo;t find that page.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-charcoal/70 lg:text-lg">
            The link may be out of date or the page may have moved. Here&rsquo;s where
            most people are headed &mdash; or reach us directly and we&rsquo;ll point you
            the right way.
          </p>

          <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-lg border border-brand-grey/30 bg-white p-5 transition-all hover:border-brand-red hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-display text-base font-semibold text-brand-charcoal">
                    {l.label}
                  </h2>
                  <span className="text-brand-charcoal/40 group-hover:text-brand-red" aria-hidden>
                    →
                  </span>
                </div>
                <p className="mt-1 text-sm text-brand-charcoal/60">{l.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-charcoal/70">
            <span>Need a hand?</span>
            <a href="tel:+12812652832" className="font-semibold text-brand-red hover:underline">
              (281) 265-2832
            </a>
            <a
              href="mailto:info@guardomation.com"
              className="font-semibold text-brand-red hover:underline"
            >
              info@guardomation.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
