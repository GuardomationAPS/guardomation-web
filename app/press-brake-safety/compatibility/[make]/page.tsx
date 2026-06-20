import Footer from "components/layout/footer";
import { BackButton } from "components/layout/back-button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMakesWithCounts,
  getInstallsForMakeGroupedByFamily,
} from "lib/brake-installs";

export async function generateStaticParams() {
  return getMakesWithCounts().map((m) => ({ make: m.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ make: string }>;
}) {
  const { make: makeSlugParam } = await props.params;
  const makes = getMakesWithCounts();
  const match = makes.find((m) => m.slug === makeSlugParam);
  if (!match) return { title: "Press Brake Installs" };
  return {
    title: `${match.make} press brake installs — Lazer Safe retrofits | Guardomation`,
    description: `Lazer Safe retrofits we've photographed on ${match.make} press brakes. Find your model.`,
  };
}

export default async function MakeDetailPage(props: {
  params: Promise<{ make: string }>;
}) {
  const { make: makeSlugParam } = await props.params;
  const makes = getMakesWithCounts();
  const match = makes.find((m) => m.slug === makeSlugParam);
  if (!match) return notFound();

  const groups = getInstallsForMakeGroupedByFamily(match.make);

  return (
    <>
      <BackButton href="/press-brake-safety/compatibility" label="all brake brands" />
      {/* HERO */}
      <section className="bg-brand-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link>
            {" · "}
            <Link href="/press-brake-safety/compatibility" className="hover:underline">Compatibility</Link>
            {" · "}
            {match.make}
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
            {match.make} installs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
            Lazer Safe retrofits we&rsquo;ve photographed on {match.make} press brakes. We&rsquo;ve done many more &mdash; this is just the pictured ones.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/press-brake-safety/quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Ask about your {match.make}
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

      {/* INSTALLS — grouped by family if applicable */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Family jump nav — only when there are multiple families */}
          {groups.filter((g) => g.name).length > 1 && (
            <nav
              aria-label="Jump to model family"
              className="mb-10 flex flex-wrap gap-2"
            >
              <span className="py-1 pr-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal/50">
                Jump to:
              </span>
              {groups.map((g) =>
                g.name && g.slug ? (
                  <a
                    key={g.slug}
                    href={`#${g.slug}`}
                    className="rounded-full border border-brand-grey/30 bg-white px-3 py-1 text-sm font-medium text-brand-charcoal transition-all hover:border-brand-red hover:text-brand-red"
                  >
                    {g.name}
                  </a>
                ) : null,
              )}
            </nav>
          )}

          <div className="space-y-14">
            {groups.map((group, gi) => (
              <div
                key={group.slug ?? `nofam-${gi}`}
                id={group.slug ?? undefined}
                className="scroll-mt-24"
              >
                {group.name && (
                  <div className="mb-6 border-b border-brand-charcoal/15 pb-3">
                    <h2 className="text-2xl font-bold text-brand-charcoal lg:text-3xl">
                      {match.make} {group.name}
                    </h2>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {group.installs.map((install, i) => (
                    <article
                      key={`${group.slug ?? "nofam"}-${i}`}
                      className="group overflow-hidden rounded-xl border border-brand-grey/30 bg-white transition-all hover:border-brand-red hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal-dark">
                        <Image
                          src={install.photo}
                          alt={`${install.make ?? "Press brake"}${install.model ? ` ${install.model}` : ""} with Lazer Safe ${install.system ?? "Sentinel"} installed`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                        {install.system && (
                          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                            {install.system}
                          </div>
                        )}
                        {!install.system && !install.pending && (
                          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                            LS Installed
                          </div>
                        )}
                        {install.pending && (
                          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-amber/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                            ID pending
                          </div>
                        )}
                      </div>
                      <div className="p-4 lg:p-5">
                        <h3 className="text-base font-bold text-brand-charcoal lg:text-lg">
                          {install.model || `${install.make} brake`}
                        </h3>
                        {install.tonnage && (
                          <p className="mt-0.5 text-xs font-semibold text-brand-charcoal/60 lg:text-sm">{install.tonnage}</p>
                        )}
                        {install.caption && (
                          <p className="mt-2 text-sm leading-snug text-brand-charcoal/70">
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

      {/* CTA */}
      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-white lg:text-4xl">
            Got a {match.make} brake to retrofit?
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Send us the make, model, tonnage, and a few photos. We&rsquo;ll come back with a straight answer on the retrofit and what it would cost.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/press-brake-safety/quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Request a quote
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/press-brake-safety/compatibility"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              ← All brake brands
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
