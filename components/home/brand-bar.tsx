const PARTNERS = [
  "LazerSafe",
  "Banner Engineering",
  "IDEM Safety",
  "Omron / STI",
  "Pinnacle Systems",
  "Nolatron",
  "Saf-T-Block",
  "Wire Crafters",
  "FAZTEK",
  "ATS Safety",
];

export default function BrandBar() {
  return (
    <section className="border-y border-brand-grey/20 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
          Authorized distributor for the industry&rsquo;s leading safety brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-16">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-display text-base font-semibold text-brand-charcoal/40 transition-colors hover:text-brand-charcoal lg:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
