import Footer from "components/layout/footer";
import { BackButton } from "components/layout/back-button";
import Link from "next/link";
import PressBrakeQuoteForm from "components/press-brake-quote-form";

export const metadata = {
  title: "Request a Press Brake Retrofit Quote | Guardomation",
  description:
    "Tell us about your press brake and we'll come back with an assessment and quote for a Lazer Safe retrofit. Two decades of brake installs across most machines in the industry.",
};

export default function PressBrakeQuotePage() {
  return (
    <>
      <BackButton href="/press-brake-safety" label="Press Brake Safety" />

      {/* HERO */}
      <section className="bg-brand-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link>
            {" · "}
            <Link href="/press-brake-safety/compatibility" className="hover:underline">Compatibility</Link>
            {" · "}
            Request a quote
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl">
            Tell us about your brake and we&rsquo;ll get back to you with a quote.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
            Two decades of Lazer Safe retrofits on most makes in the industry. The more detail you give us up front, the closer the first number will be to final.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-brand-charcoal-dark py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <PressBrakeQuoteForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
