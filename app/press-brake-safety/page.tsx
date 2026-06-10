import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Press Brake Safety · Lazer Safe Retrofits",
  description:
    "Guardomation is the U.S. Master Distributor for Lazer Safe — Sentinel Plus retrofits, rear guarding, automatic alignment, and on-site install for press brakes of every make and model.",
};

export default function PressBrakeSafetyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/photos/sentinel-plus-hero.jpg"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover opacity-30"
            style={{ objectPosition: "75% center" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/50 to-brand-charcoal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              Exclusive U.S. Master Distributor for Lazer Safe
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Press brake retrofits done right.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-grey lg:text-xl">
              Sentinel Plus is the world&rsquo;s #1 retrofit solution for press brake guarding. We&rsquo;ve installed thousands across U.S. shops over the past decade — across a wide range of makes, models, and tonnages.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
              >
                Request a retrofit quote
                <span aria-hidden>→</span>
              </Link>
              <a
                href="tel:+12812652832"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
              >
                Call (281) 265-2832
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TIERS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              Lazer Safe systems
            </p>
            <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
              Three retrofit solutions. One trusted installer.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ProductCard
              tag="Flagship"
              title="Sentinel Plus"
              tagline="Camera-based AOPD for high-speed performance press brakes."
              img="/photos/sentinel-plus-detail.jpg"
              features={[
                "Camera-based protection (no fixed guards in the way)",
                "Automatic alignment — no manual setup between dies",
                "Speed-dependent muting for production throughput",
                "RapidBend Plus technology integration",
                "ANSI B11.3 &amp; OSHA compliant",
              ]}
            />
            <ProductCard
              tag="Proven"
              title="Lazer Safe Sentinel"
              tagline="The original AOPD retrofit. Trusted on thousands of brakes worldwide."
              img="/photos/sentinel-plus-hmi.jpg"
              features={[
                "Single-laser AOPD safety field below the punch",
                "Compatible with a wide range of press brakes",
                "Mute point + speed monitoring",
                "Light curtain option available",
                "Local stock + overnight shipping",
              ]}
            />
            <ProductCard
              tag="Complement"
              title="Rear Guarding Systems"
              tagline="Engineered scissor gates, light curtains, and mesh guards for press brake back."
              img="/photos/guarding-mg-02.jpg"
              features={[
                "Custom-sized for any brake footprint",
                "Powder-coated steel construction",
                "Optional interlocks + e-stops",
                "Designed and installed in-house",
                "Photo gallery from real installs",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              How a retrofit works
            </p>
            <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
              From quote to certified install.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Spec & quote",
                desc: "Send us your brake make/model, tonnage, and a few photos. We come back with a system spec and quote. Site visit if needed for complex installs.",
              },
              {
                num: "02",
                title: "PO & order",
                desc: "We pull from local U.S. stock. Most retrofits ship in 1–2 weeks. Spare parts overnight to most locations.",
              },
              {
                num: "03",
                title: "On-site install",
                desc: "Our crew flies in, removes any existing safety device, mounts and calibrates the Lazer Safe system on your brake.",
              },
              {
                num: "04",
                title: "Train & sign off",
                desc: "Operators trained on the new system, sign-off sheet completed, machine back in production same day.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative rounded-xl border border-white/10 bg-brand-charcoal/60 p-7"
              >
                <div className="font-display mb-3 text-5xl font-bold text-brand-amber">{step.num}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-brand-grey">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            U.S. Master Distributor for Lazer Safe
          </p>
          <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
            Have a press brake? Let&rsquo;s talk retrofit.
          </h2>
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

function ProductCard({
  tag,
  title,
  tagline,
  img,
  features,
}: {
  tag: string;
  title: string;
  tagline: string;
  img: string;
  features: string[];
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-brand-grey/30 bg-white transition-all hover:border-brand-red hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-brand-charcoal">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">{tag}</p>
        <h3 className="mt-2 text-2xl font-bold text-brand-charcoal">{title}</h3>
        <p className="mt-3 text-sm text-brand-charcoal/70">{tagline}</p>
        <ul className="mt-5 space-y-2 text-sm text-brand-charcoal/85">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
              <span dangerouslySetInnerHTML={{ __html: f }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
