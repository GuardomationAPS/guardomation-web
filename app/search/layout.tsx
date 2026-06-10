import Footer from "components/layout/footer";
import CategoryFilter from "components/layout/search/category-filter";
import MachineFilter from "components/layout/search/machine-filter";
import FilterList from "components/layout/search/filter";
import Link from "next/link";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-brand-grey/20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Shop
          </p>
          <h1 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
            Machine Guarding Catalog
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70 lg:text-lg">
            Anti-restart controls, drill press guards, light curtains, e-stops, and the full Guardomation product family. Don&rsquo;t see what you need? <a href="/contact" className="font-semibold text-brand-red hover:underline">Request a quote</a>.
          </p>
        </div>
      </section>

      {/* Catalog body */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 text-brand-charcoal md:flex-row lg:px-8">
        <aside className="order-first w-full flex-none md:w-[220px]">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
            By product type
          </h2>
          <CategoryFilter />

          <h2 className="mt-8 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
            By machine
          </h2>
          <MachineFilter />

          {/* Custom guarding callout */}
          <div className="mt-8 rounded-xl border border-brand-red/30 bg-brand-red/5 p-5">
            <p className="text-sm font-bold text-brand-charcoal">Don&rsquo;t see what you need?</p>
            <p className="mt-2 text-xs leading-relaxed text-brand-charcoal/70">
              Custom guarding, fencing, or full plant assessments often need a quote or a site visit.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:underline"
            >
              Request a quote
              <span aria-hidden>→</span>
            </Link>
          </div>
        </aside>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>
        <aside className="order-none flex-none md:order-last md:w-[140px]">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
            Sort
          </h2>
          <FilterList list={sorting} title="Sort by" />
        </aside>
      </div>
      <Footer />
    </>
  );
}
