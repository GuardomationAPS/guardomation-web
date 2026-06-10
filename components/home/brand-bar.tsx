// Rolling marquee of authorized brand partners.
// Source list pulled from guardomation.com /line-cards/ scrape.

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
  "Odiz Safety",
  "Cascade Coil",
];

export default function BrandBar() {
  // Duplicate so the marquee seamlessly loops
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden border-y border-brand-grey/20 bg-white py-12">
      {/* Yellow accent lines top + bottom — laser motif */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent" aria-hidden />

      <div className="mx-auto mb-8 max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-3 w-1 bg-brand-red" aria-hidden />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/70">
            Authorized distributor for {PARTNERS.length}+ established safety brands
          </p>
          <span className="h-3 w-1 bg-brand-red" aria-hidden />
        </div>
      </div>

      {/* Marquee — fade edges for polish */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-x-12 lg:gap-x-16">
          {items.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="font-display whitespace-nowrap text-base font-semibold text-brand-charcoal/50 transition-colors hover:text-brand-red lg:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
