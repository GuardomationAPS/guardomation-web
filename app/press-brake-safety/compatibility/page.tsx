import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Press Brake Compatibility — Lazer Safe Installs",
  description:
    "Lazer Safe retrofits we've completed on a wide range of press brake makes and models — Accurpress, Cincinnati, Diamond, Guifil, and more. Find yours.",
};

type Install = {
  make: string;
  model?: string;
  photo: string;
  caption?: string;
  tonnage?: string;
  notes?: string;
};

const INSTALLS: Install[] = [
  {
    make: "Accurpress",
    model: "72501 (Advantage)",
    photo: "/photos/press-brake-rear-guarding.jpg",
    tonnage: "250 ton",
    caption: "Advantage panels with Sentinel Plus + integrated rear scissor gate guarding",
  },
  {
    make: "Accurpress",
    model: "713010",
    photo: "/photos/press-brake-accurpress.jpg",
    tonnage: "130 ton",
    caption: "Sentinel system mounted on a 10-ft Accurpress 713010",
  },
  {
    make: "Diamond",
    model: "DA8525",
    photo: "/photos/press-brake-diamond.jpg",
    tonnage: "85 ton · 8 ft",
    caption: "Diamond DA8525 Sentinel retrofit — clean install on a modern hydraulic brake",
  },
  {
    make: "Cincinnati",
    photo: "/photos/press-brake-cincinnati.jpg",
    caption: "Older Cincinnati hydraulic press brake — Sentinel installed alongside existing controls",
    notes: "Cincinnati brakes (including Iris / Iris Plus) — established retrofit candidate",
  },
  {
    make: "Guifil",
    photo: "/photos/press-brake-guifil.jpg",
    caption: "Guifil press brake with Sentinel retrofit",
  },
];

// Brake brands we've worked with but don't have install photos for yet
const BRAKES_WITHOUT_PHOTOS = [
  "Amada",
  "Allied",
  "Bystronic",
  "Cincinnati Incorporated",
  "Dener",
  "Durma",
  "HACO",
  "JMT",
  "LVD",
  "Niagara",
  "Pacific",
  "Piranha",
  "Promecam",
  "Standard Industrial",
  "Trumpf",
  "US Industrial Machinery",
  "Verson",
  "Wysong",
];

export default function CompatibilityPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link> · Compatibility
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
            Press brakes we&rsquo;ve retrofitted.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
            A growing gallery of Lazer Safe Sentinel and Sentinel Plus installs across U.S. shop floors. If you don&rsquo;t see your brake here, it doesn&rsquo;t mean we can&rsquo;t do it — send us your make, model, and tonnage and we&rsquo;ll come back with a quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?topic=press-brake-retrofit"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Ask about your brake
              <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+12812652832"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              (281) 265-2832
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                {INSTALLS.length} verified installs · gallery is growing
              </p>
              <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
                Find your brake.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INSTALLS.map((install, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-xl border border-brand-grey/30 bg-white transition-all hover:border-brand-red hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal-dark">
                  <Image
                    src={install.photo}
                    alt={`${install.make}${install.model ? ` ${install.model}` : ""} press brake with Lazer Safe Sentinel installed`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                    Lazer Safe Installed
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">{install.make}</p>
                  <h3 className="mt-1 text-xl font-bold text-brand-charcoal">{install.model || "Hydraulic press brake"}</h3>
                  {install.tonnage && (
                    <p className="mt-1 text-sm font-semibold text-brand-charcoal/60">{install.tonnage}</p>
                  )}
                  {install.caption && (
                    <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{install.caption}</p>
                  )}
                  {install.notes && (
                    <p className="mt-3 rounded-md bg-brand-cream p-2 text-xs italic text-brand-charcoal/70">{install.notes}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brakes-we-know-but-don't-have-photos */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            We&rsquo;ve also worked on
          </p>
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Other brake brands in the field.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70">
            Photos coming as we add them. Don&rsquo;t see yours? Send us the make, model, and tonnage — we&rsquo;ve installed Lazer Safe on a much wider range than what&rsquo;s pictured.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {BRAKES_WITHOUT_PHOTOS.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-brand-grey/30 bg-brand-cream px-4 py-1.5 text-sm font-medium text-brand-charcoal/70"
              >
                {brand}
              </span>
            ))}
            <span className="rounded-full border border-brand-red/30 bg-brand-red/5 px-4 py-1.5 text-sm font-semibold text-brand-red">
              + many more
            </span>
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-white lg:text-4xl">
            Don&rsquo;t see your brake? We&rsquo;ve probably done it.
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Send us your make, model, tonnage, and a few photos. We&rsquo;ll come back with a straight answer on whether it&rsquo;s a candidate and what a retrofit would look like.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?topic=press-brake-retrofit"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Request a quote
              <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+12812652832"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              (281) 265-2832
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
