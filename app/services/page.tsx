import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Safety assessments, custom engineering, on-site installation, and turn-key project packages for press brakes and machine guarding.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Services
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Safety assessments. Custom engineering. On-site installs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
              Whether you need to scope a Lazer Safe retrofit, design custom rear guarding, or run a complete plant safeguarding assessment — we&rsquo;re hands-on from quote to certification.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard
              title="Plant safeguarding assessment"
              desc="Walk your shop with our team. We identify safety gaps machine-by-machine, propose layered safeguarding, and quote remediation. Useful for OSHA prep, insurance audits, or just sleeping at night."
              bullets={[
                "Press brakes, shears, presses, robot cells, conveyors",
                "Operator interview + observation",
                "Written report with recommendations",
              ]}
            />
            <ServiceCard
              title="Custom engineering"
              desc="Off-the-shelf doesn&rsquo;t fit every machine. We design custom fencing, mesh guards, rear scissor gates, and interlocked enclosures sized to your footprint."
              bullets={[
                "Powder-coated steel construction",
                "Optional interlocks + e-stops",
                "Stand-off accommodations for back gauges, conveyors",
              ]}
            />
            <ServiceCard
              title="On-site installation"
              desc="Our field engineers travel nationwide outfitted for nearly any application. They remove existing safety devices, mount and calibrate Lazer Safe systems, hang fences, wire interlocks — and clean up when they&rsquo;re done."
              bullets={[
                "Removal of existing guards",
                "Mount + calibrate + commission",
                "Site cleaned at hand-off",
              ]}
            />
            <ServiceCard
              title="Turn-key project packages"
              desc="One quote covers the system, interface equipment, consumables, installation, operator training, and travel. No hidden extras. Multi-machine discounts when we can do them in the same visit."
              bullets={[
                "System + interface + consumables",
                "Installation + training + travel",
                "Multi-machine discounts on same visit",
              ]}
            />
            <ServiceCard
              title="Operator training"
              desc="Every install includes hands-on training on all operating modes (Normal, Tray, Field-Muted, Faulting, Tooling Set Up) plus signed documentation for your safety records."
              bullets={[
                "All Lazer Safe operating modes covered",
                "Sign-off sheets for safety records",
                "Refresher training available",
              ]}
            />
            <ServiceCard
              title="Spare parts &amp; phone support"
              desc="Lazer Safe systems and common spare parts stocked stateside. Dedicated phone tech support during business hours from people who&rsquo;ve actually done the installs."
              bullets={[
                "U.S. stock of systems + common parts",
                "Phone diagnosis during business hours",
                "Service visits when needed",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
            Tell us about your project.
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Send a few photos, the machine make/model, and what you&rsquo;re trying to accomplish. We&rsquo;ll come back with next steps.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
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

function ServiceCard({ title, desc, bullets }: { title: string; desc: string; bullets: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-brand-charcoal/60 p-7 transition-all hover:border-brand-amber">
      <h3 className="text-xl font-bold text-white" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="mt-3 text-sm leading-relaxed text-brand-grey" dangerouslySetInnerHTML={{ __html: desc }} />
      <ul className="mt-5 space-y-2 text-sm text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />
            <span dangerouslySetInnerHTML={{ __html: b }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
