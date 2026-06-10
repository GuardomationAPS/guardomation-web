import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Press Brake Safety · Lazer Safe Retrofits",
  description:
    "Guardomation is the U.S. Master Distributor for Lazer Safe — Sentinel Plus with Rapid Bend Plus, Sentinel, and rear guarding for press brake retrofits. Turn-key packages, on-site installation, operator training.",
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
            style={{ objectPosition: "65% 30%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/50 to-brand-charcoal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              Appointed U.S. Master Distributor for Lazer Safe
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Press brake retrofits, done right.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-grey lg:text-xl">
              Lazer Safe AOPD safety mounted beneath the punch. Operators hold the work piece as tools close at high speed — no fixed guards in the way, no compromise on production. We&rsquo;ve been supplying and installing these systems for over a decade.
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
              Three solutions for press brake safety.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ProductCard
              tag="Flagship"
              title="Sentinel Plus"
              tagline="The most advanced press brake guarding system ever designed for retrofit. Camera-based, optimized for high-speed."
              img="/photos/sentinel-plus-detail.jpg"
              features={[
                "Rapid Bend Plus — close at high speed down to 2mm above material",
                "Automatic tool alignment in seconds",
                "Multiple operating modes (Normal, Tray, Field-Muted, etc.)",
                "Graphical user interface with live status",
                "Optional e-stop &amp; rear gate monitoring",
                "Special Tools Mode for any size/profile",
              ]}
            />
            <ProductCard
              tag="Proven"
              title="Lazer Safe Sentinel"
              tagline="The original AOPD retrofit — billed by Lazer Safe as the world's #1 press brake guarding solution."
              img="/photos/press-brake-diamond.jpg"
              features={[
                "Continuous dual laser field below the punch tip",
                "Operator holds work piece during high-speed close",
                "Compatible with a wide range of press brakes",
                "Mute-point optically verified every cycle",
                "Light curtain option available",
                "Reduces operator fatigue vs. traditional curtains",
              ]}
            />
            <ProductCard
              tag="Complement"
              title="Rear Guarding"
              tagline="Interlocked scissor gates protecting the rear access space on every press brake we touch."
              img="/photos/press-brake-rear-guarding.jpg"
              features={[
                "Expandable aluminum barrier kit, safety yellow + black",
                "Electrically interlocked",
                "Opens completely for maintenance",
                "Heights: 4ft, 5ft, 6ft · Widths: 76&quot;, 100&quot;, 124&quot;, 140&quot;",
                "Stand-off options for back-gauge clearance",
                "Includes mounting brackets",
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
                desc: "Send us your brake make/model, tonnage, and a few photos. We come back with a system spec and a turn-key package quote. Site visit if needed for complex installs.",
              },
              {
                num: "02",
                title: "Turn-key package",
                desc: "Quote includes the Lazer Safe system, interface equipment, consumables, installation, operator training, and travel costs. Multi-machine discounts when we can do them in the same visit.",
              },
              {
                num: "03",
                title: "On-site install",
                desc: "Our field engineers travel outfitted for virtually any application. They remove existing safety devices, mount and calibrate the Lazer Safe system, and clean the site when done.",
              },
              {
                num: "04",
                title: "Train & sign off",
                desc: "Operators trained on Normal, Tray, Field-Muted, Faulting, and Tooling Set Up modes. Sign-off sheet completed. Brake back in production once everything checks out.",
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

      {/* WHY GUARDOMATION */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              How we work
            </p>
            <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
              In service of your operators and your production.
            </h2>
            <p className="mt-4 text-base text-brand-charcoal/70">
              We&rsquo;ve been supplying and installing Lazer Safe retrofit systems on a wide range of press brake makes and models for over a decade. Here&rsquo;s what comes with that.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Appointed Master Distributor"
              desc="Authorized to distribute and service Lazer Safe systems across the United States."
            />
            <ValueCard
              title="Stocked stateside"
              desc="Systems and common spare parts kept locally so you&rsquo;re not waiting on overseas freight when you need them."
            />
            <ValueCard
              title="Complete project packages"
              desc="One quote covers system, interface equipment, consumables, installation, operator training, and travel — no hidden extras."
            />
            <ValueCard
              title="Experienced field engineers"
              desc="Our installers travel the country outfitted for nearly any press brake application. Many years on the road behind them."
            />
            <ValueCard
              title="Operator training, every time"
              desc="Hands-on training on Normal, Tray, Field-Muted, Faulting, and Tooling Set Up modes with signed documentation for your safety records."
            />
            <ValueCard
              title="Phone tech support"
              desc="A direct call to experienced technicians during business hours. We&rsquo;ll diagnose what we can over the phone."
            />
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

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-brand-grey/30 bg-brand-cream p-7 transition-all hover:border-brand-amber hover:shadow-md">
      <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
        <span className="h-3 w-1 bg-brand-amber" aria-hidden />
      </div>
      <h3 className="text-xl font-bold text-brand-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}
