import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Support",
  description:
    "Installation, training, spare parts, and ongoing support for Lazer Safe systems and Guardomation machine guarding installs.",
};

export default function SupportPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              We stand behind every install
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Support that doesn&rsquo;t end at install day.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
              Lazer Safe systems and our GS-series controls are stocked stateside. Operator training, spare parts, troubleshooting — we&rsquo;re a phone call away.
            </p>
            <p className="mt-3 text-sm text-brand-amber">
              <span className="font-semibold">Phone support:</span> Mon–Fri 8a–5p Central Time · (281) 265-2832
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "On-site installation",
                desc: "Our crew handles every retrofit and machine guarding install in person. We don&rsquo;t ship a box and hope you figure it out.",
              },
              {
                title: "Operator training",
                desc: "Every Lazer Safe install includes operator training on Normal, Tray, Field-Muted, Faulting, and Tooling Set Up modes. Sign-off sheets included.",
              },
              {
                title: "Spare parts — U.S. stock",
                desc: "Lazer Safe systems and common spare parts stocked stateside, so you&rsquo;re not waiting on overseas freight when you need them.",
              },
              {
                title: "Phone troubleshooting",
                desc: "Call (281) 265-2832 during business hours. We&rsquo;ll help diagnose over the phone, ship parts when available, or schedule a service visit.",
              },
              {
                title: "Safety assessments",
                desc: "Walk your shop with our team. We identify gaps, propose layered safeguarding, and quote any remediation. Useful for OSHA prep and insurance audits.",
              },
              {
                title: "Datasheets &amp; brochures",
                desc: "Lazer Safe Sentinel and Sentinel Plus product brochures available on request. Email info@guardomation.com.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-brand-charcoal/60 p-6"
              >
                <h3 className="text-lg font-bold text-white">
                  <span dangerouslySetInnerHTML={{ __html: card.title }} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-grey">
                  <span dangerouslySetInnerHTML={{ __html: card.desc }} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
            Need support right now?
          </h2>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+12812652832"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Call (281) 265-2832
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              Email a specialist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
