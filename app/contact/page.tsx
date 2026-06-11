import Footer from "components/layout/footer";
import ContactForm from "components/contact-form";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "Talk to a Guardomation machine guarding specialist. Phone, email, or quote request. U.S. Master Distributor for Lazer Safe.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Get in touch
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Talk to a machine guarding specialist.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
              Lazer Safe retrofit, custom fencing, or a full plant safeguarding assessment — we&rsquo;ve installed it before. Call, email, or fill out the form and we&rsquo;ll come back with next steps.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="tel:+12812652832"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-brand-charcoal/80 p-5 transition-all hover:border-brand-amber hover:bg-brand-charcoal lg:gap-5 lg:p-7"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-brand-amber/40 text-2xl text-brand-amber lg:h-14 lg:w-14">
                  ☎
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-[0.15em] text-brand-grey">Call</div>
                  <div className="font-display text-xl font-bold text-white lg:text-2xl">(281) 265-2832</div>
                  <div className="mt-1 text-xs text-brand-grey lg:text-sm">Mon–Fri 8a–5p CT · Mobile (281) 384-6607</div>
                </div>
              </a>

              <a
                href="mailto:info@guardomation.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-brand-charcoal/80 p-5 transition-all hover:border-brand-amber hover:bg-brand-charcoal lg:gap-5 lg:p-7"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-brand-amber/40 text-2xl text-brand-amber lg:h-14 lg:w-14">
                  ✉
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-[0.15em] text-brand-grey">Email</div>
                  <div className="font-display truncate text-lg font-bold text-white lg:text-2xl">info@guardomation.com</div>
                  <div className="mt-1 text-xs text-brand-grey lg:text-sm">Simple quotes within the week. Complex jobs may need a site visit.</div>
                </div>
              </a>

              <div className="rounded-xl border border-white/10 bg-brand-charcoal/50 p-7">
                <div className="text-xs uppercase tracking-[0.15em] text-brand-amber">Fax</div>
                <div className="font-display mt-1 text-xl font-bold text-white">(281) 265-1276</div>
              </div>
            </div>

            {/* Quote form */}
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
