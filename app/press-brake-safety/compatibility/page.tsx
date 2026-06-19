import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { getAllMakes, getMakesWithCounts, getMakeHeroPhoto } from "lib/brake-installs";

export const metadata = {
  title: "Press Brake Compatibility — Lazer Safe Installs",
  description:
    "Lazer Safe retrofits we've completed on a wide range of press brake makes and models — Accurpress, Amada, Cincinnati, Trumpf, Bystronic, and more. Find yours.",
};

export default function CompatibilityPage() {
  const allMakes = getAllMakes();
  const makesWithPhotos = getMakesWithCounts();

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link> · Compatibility
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
            Almost every press brake brand on the market.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
            140+ retrofits a year across the established names (Accurpress, Amada, Trumpf) and the newer entrants (Yawei, Hurco, Adira, Coast One &mdash; all recent). The list below is every brand we&rsquo;ve worked on. Pick yours and we&rsquo;ll show you the installs we&rsquo;ve got photographed.
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

      {/* ALL MAKES OVERVIEW (chip row — pictured + not pictured) */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Every brand we&rsquo;ve worked on
              </p>
              <h2 className="text-balance text-2xl font-bold text-brand-charcoal lg:text-3xl">
                {allMakes.length} brands &mdash; and counting. Click any with a dot for installed photos.
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {allMakes.map((m) =>
              m.pictured ? (
                <Link
                  key={m.slug}
                  href={`/press-brake-safety/compatibility/${m.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-brand-grey/30 bg-white px-4 py-1.5 text-sm font-semibold text-brand-charcoal transition-all hover:border-brand-red hover:bg-brand-red/5 hover:text-brand-red"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden />
                  {m.make}
                </Link>
              ) : (
                <span
                  key={m.slug}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-grey/30 bg-brand-cream px-4 py-1.5 text-sm font-medium text-brand-charcoal/70"
                  title="We've installed Lazer Safe on this brand — photos coming soon."
                >
                  {m.make}
                </span>
              ),
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/5 px-4 py-1.5 text-sm font-semibold text-brand-red">
              + many more
            </span>
          </div>
          <p className="mt-5 text-sm text-brand-charcoal/60">
            More install photos coming soon. Don&rsquo;t see your brand? We&rsquo;ve probably done it &mdash;{" "}
            <Link href="/contact?topic=press-brake-retrofit" className="font-semibold text-brand-red hover:underline">
              send us your make and model
            </Link>{" "}
            or call <a href="tel:+12812652832" className="font-semibold text-brand-red hover:underline">(281) 265-2832</a>.
          </p>
        </div>
      </section>

      {/* BRAND GRID — one card per make, photo + count, click to drill in */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              Browse by brand
            </p>
            <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
              See installs from your brake&rsquo;s family.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {makesWithPhotos.map((m) => {
              const hero = getMakeHeroPhoto(m.make);
              if (!hero) return null;
              return (
                <Link
                  key={m.slug}
                  href={`/press-brake-safety/compatibility/${m.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-brand-grey/30 bg-brand-charcoal-dark transition-all hover:border-brand-red hover:shadow-lg"
                >
                  <Image
                    src={hero}
                    alt={`${m.make} press brake retrofitted by Guardomation`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                    <h3 className="text-lg font-bold text-white lg:text-2xl">{m.make}</h3>
                    <p className="mt-0.5 text-xs font-semibold text-brand-amber lg:text-sm">
                      {m.count} pictured &middot; view installs <span aria-hidden>→</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
