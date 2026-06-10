// Full list from scrape of guardomation.com /line-cards/
const PARTNERS = [
  "Lazer Safe",
  "Banner Engineering",
  "OMRON / STI",
  "IDEM Safety",
  "Pinnacle Systems",
  "Triad",
  "Pressroom Electronics",
  "Ferndale",
  "HERION",
  "EUCHNER",
  "Nolatron",
  "Toledo",
  "GEMCO",
  "KAMCO",
  "ROSS",
  "REES",
  "Saf-T-Block",
  "FLEXBAR",
  "DANRAY",
  "WIRECRAFTERS",
  "Metal Form",
  "NASP",
  "ATS",
  "MAKESAFE",
  "SICK",
  "Pilz",
  "Schmersal",
  "Allen-Bradley",
];

export default function BrandBar() {
  return (
    <section className="relative overflow-hidden border-y border-brand-grey/20 bg-white py-14">
      {/* Yellow accent lines top + bottom — laser motif */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-3 w-1 bg-brand-red" aria-hidden />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/70">
            Authorized distributor for {PARTNERS.length} industry-leading brands
          </p>
          <span className="h-3 w-1 bg-brand-red" aria-hidden />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:gap-x-12">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold text-brand-charcoal/40 transition-colors hover:text-brand-red lg:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
