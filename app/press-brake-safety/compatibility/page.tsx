import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { INSTALLS, BRAKES_WITHOUT_PHOTOS, getInstallsByMake, getMakesWithCounts } from "lib/brake-installs";

export const metadata = {
  title: "Press Brake Compatibility — Lazer Safe Installs",
  description:
    "Lazer Safe retrofits we've completed on a wide range of press brake makes and models — Accurpress, Cincinnati, Diamond, Guifil, and more. Find yours.",
};

// (moved to lib/brake-installs.ts)

// Brake brands we've worked with but don't have install photos for yet

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

      {/* Sticky make-jump nav */}
      <nav
        aria-label="Jump to brake make"
        className="sticky top-[57px] z-20 border-b border-brand-grey/20 bg-white/95 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 text-sm">
            <span className="flex-none whitespace-nowrap py-1 pr-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal/50">
              Jump to:
            </span>
            {getMakesWithCounts().map((m) => (
              <a
                key={m.slug}
                href={`#${m.slug}`}
                className="flex-none whitespace-nowrap rounded-full border border-brand-grey/30 bg-brand-cream px-3 py-1 font-medium text-brand-charcoal transition-all hover:border-brand-red hover:text-brand-red"
              >
                {m.make}
                <span className="ml-1.5 text-xs text-brand-charcoal/50">{m.count}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              {INSTALLS.length} press brakes pictured · {INSTALLS.filter((i) => !i.pending).length} brand-confirmed · {getMakesWithCounts().length} makes
            </p>
            <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
              Find your brake.
            </h2>
          </div>

          {/* GROUPED BY MAKE */}
          <div className="space-y-16">
            {getInstallsByMake().map((group) => (
              <div key={group.slug} id={group.slug} className="scroll-mt-32">
                <div className="mb-6 flex items-baseline justify-between border-b border-brand-charcoal/15 pb-3">
                  <h3 className="text-2xl font-bold text-brand-charcoal lg:text-3xl">
                    {group.make}
                  </h3>
                  <span className="text-sm font-semibold text-brand-charcoal/50">
                    {group.installs.length} install{group.installs.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {group.installs.map((install, i) => (
                    <article
                      key={i}
                      className="group overflow-hidden rounded-xl border border-brand-grey/30 bg-white transition-all hover:border-brand-red hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal-dark">
                        <Image
                          src={install.photo}
                          alt={`${install.make ?? "Press brake"}${install.model ? ` ${install.model}` : ""} with Lazer Safe ${install.system ?? "Sentinel"} installed`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                        {install.system && (
                          <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-red px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white lg:left-4 lg:top-4 lg:gap-2 lg:px-3 lg:py-1 lg:text-xs">
                            <span className="h-1 w-1 rounded-full bg-brand-amber lg:h-1.5 lg:w-1.5" />
                            {install.system}
                          </div>
                        )}
                        {!install.system && !install.pending && (
                          <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-red px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white lg:left-4 lg:top-4 lg:gap-2 lg:px-3 lg:py-1 lg:text-xs">
                            <span className="h-1 w-1 rounded-full bg-brand-amber lg:h-1.5 lg:w-1.5" />
                            LS Installed
                          </div>
                        )}
                        {install.pending && (
                          <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-amber/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal lg:right-4 lg:top-4 lg:px-3 lg:py-1 lg:text-xs">
                            ID pending
                          </div>
                        )}
                      </div>
                      <div className="p-3 lg:p-6">
                        <h4 className="text-sm font-bold text-brand-charcoal lg:text-xl">
                          {install.model || `${install.make} brake`}
                        </h4>
                        {install.tonnage && (
                          <p className="mt-0.5 text-xs font-semibold text-brand-charcoal/60 lg:mt-1 lg:text-sm">{install.tonnage}</p>
                        )}
                        {install.caption && (
                          <p className="mt-2 text-xs leading-snug text-brand-charcoal/70 lg:text-sm">
                            {install.caption}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
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
