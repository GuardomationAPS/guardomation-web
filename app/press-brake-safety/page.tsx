import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import PhotoCarousel from "components/photo-carousel";
import { INSTALLS, installsToCarouselPhotos } from "lib/brake-installs";

// Use the full brand-confirmed install gallery as the carousel source.
const INSTALL_PHOTOS = installsToCarouselPhotos();
const TOTAL_BRAKES = INSTALLS.length;
const CONFIRMED_BRAKES = INSTALLS.filter((i) => !i.pending).length;

export const metadata = {
  title: "Press Brake Safety · Lazer Safe Retrofits",
  description:
    "Guardomation is the U.S. Master Distributor for Lazer Safe — Sentinel Plus Automatic, Sentinel Plus, Sentinel Plus XL, and rear guarding for press brake retrofits. Turn-key packages, on-site installation, operator training.",
};

export default function PressBrakeSafetyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/photos/sentinel-plus-hero.jpg"
            alt="Lazer Safe Sentinel sensor module on a press brake"
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

      {/* SENTINEL PLUS AUTOMATIC — NEW flagship tier */}
      <section className="bg-brand-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-charcoal-dark">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Video / image side */}
              <div className="relative aspect-video overflow-hidden bg-brand-charcoal-dark lg:aspect-auto lg:min-h-[480px]">
                {/*
                  Looped clip of Lazer Safe's official Sentinel Plus Automatic demo (BtY_ujYEQbk).
                  Auto-plays muted (browsers require mute for autoplay), loops via the YouTube
                  playlist trick (loop=1 needs playlist=<same id>), hides chrome, plays inline on
                  mobile. start/end define the bracket-motion window — tweak in lockstep if you
                  want a tighter loop.
                */}
                <iframe
                  src="https://www.youtube.com/embed/BtY_ujYEQbk?autoplay=1&mute=1&loop=1&playlist=BtY_ujYEQbk&controls=0&modestbranding=1&rel=0&playsinline=1&start=27&end=60&iv_load_policy=3"
                  title="Sentinel Plus Automatic — auto-positioning brackets in action"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand-amber/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                  Auto-brackets in action
                </div>
                <a
                  href="https://www.youtube.com/watch?v=BtY_ujYEQbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-brand-charcoal/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-brand-red"
                >
                  Watch full demo
                  <span aria-hidden>↗</span>
                </a>
              </div>

              {/* Copy side */}
              <div className="p-8 lg:p-12">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                  New flagship tier
                </p>
                <h2 className="text-balance text-4xl font-bold leading-tight text-white lg:text-5xl">
                  Sentinel Plus <span className="text-brand-amber">Automatic</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-grey lg:text-lg">
                  Everything in Sentinel Plus, plus <strong className="text-white">automatic brackets</strong> that handle the transmitter/receiver positioning during tool changes. Mount the system once, change tools as fast as you ever did, and let the system re-align itself.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/85 lg:text-base">
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />Auto-positioning brackets — no manual realignment</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />Tool changes in seconds, not minutes</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />All Sentinel Plus features included (Rapid Bend Plus, multiple modes, GUI panel)</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />The upgrade operators ask for after the demo</li>
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact?topic=press-brake-retrofit"
                    className="inline-flex items-center justify-center gap-2 bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark"
                  >
                    Get a quote
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/press-brake-safety/sentinel-plus"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
                  >
                    Learn more about Sentinel Plus
                  </Link>
                </div>
              </div>
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
              Four solutions for press brake safety.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <ProductCard
              tag="Premium · Auto"
              tagHighlight
              title="Sentinel Plus Automatic"
              tagline="Sentinel Plus with auto-positioning brackets — the system re-aligns itself on every tool change, saving real minutes per cycle."
              img="/photos/sentinel-plus-detail.jpg"
              features={[
                "Auto-positioning brackets — no manual realignment after a tool change",
                "Minutes saved per tool change add up fast over a shift",
                "All Sentinel Plus features included",
                "Rapid Bend Plus high-speed close",
                "The upgrade operators ask for after the demo",
              ]}
            />
            <ProductCard
              tag="Flagship · Manual brackets"
              title="Sentinel Plus"
              tagline="Lazer Safe's flagship press brake retrofit — camera-based AOPD safety, manual bracket positioning. Proven on thousands of brakes."
              img="/photos/sentinel-plus-hero.jpg"
              features={[
                "Rapid Bend Plus — close at high speed down to 2mm above material",
                "Manual bracket positioning during tool changes",
                "Multiple operating modes (Normal, Tray, Field-Muted, etc.)",
                "Graphical user interface with live status",
                "Optional e-stop &amp; rear gate monitoring",
                "Special Tools Mode for any size/profile",
              ]}
            />
            <ProductCard
              tag="Long range · XL"
              title="Sentinel Plus XL"
              tagline="The robust guarding solution for long press brakes — optional upgrade for Sentinel Plus that extends optical range from 26ft (8m) to 50ft (15m max) for long-bed retrofits."
              img="/photos/sentinel-plus-xl.jpg"
              features={[
                "Long-range laser transmitter + camera receiver — extends range 8m → 15m",
                "Wider optical coverage for the tool sets used on long brakes",
                "Greater resistance to machine vibration and environmental effects",
                "All Sentinel Plus features (Rapid Bend Plus, GUI, all modes)",
                "Optional upgrade installed on top of standard Sentinel Plus",
                "We&rsquo;re a Lazer Safe Retrofit Dealer set up to spec and install it",
              ]}
            />
            <ProductCard
              tag="Complement"
              title="Rear Guarding"
              tagline="Interlocked scissor gates + side fencing protecting the rear access space on every press brake we touch."
              img="/photos/guarding-scissor-gate-on-brake.jpg"
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

      {/* COMPATIBILITY — rotating preview of every brake we've retrofitted */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                <span className="h-3 w-1 bg-brand-amber" aria-hidden />
                Compatibility · {TOTAL_BRAKES} brakes pictured
              </p>
              <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
                Press brakes we&rsquo;ve retrofitted.
              </h2>
              <p className="mt-3 text-base text-brand-charcoal/70">
                Find your brake in the rotating gallery below, or open the full grid to scan every make and model we&rsquo;ve installed Lazer Safe on.
              </p>
            </div>
            <Link
              href="/press-brake-safety/compatibility"
              className="inline-flex flex-none items-center gap-2 rounded-full border border-brand-red bg-white px-5 py-2.5 text-sm font-semibold text-brand-red transition-all hover:bg-brand-red hover:text-white"
            >
              View full gallery
              <span aria-hidden>→</span>
            </Link>
          </div>
          <Link
            href="/press-brake-safety/compatibility"
            className="block"
            aria-label="Open the full press brake compatibility gallery"
          >
            <PhotoCarousel photos={INSTALL_PHOTOS} autoAdvanceMs={2500} />
          </Link>
          <p className="mt-5 text-center text-sm text-brand-charcoal/60">
            {CONFIRMED_BRAKES} brand-confirmed installs in the gallery · pause on hover to read the caption · tap the gallery to see all {TOTAL_BRAKES} brakes
          </p>
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

      {/* LEGACY BLOCK LASER — spare parts + upgrade callout */}
      <section className="bg-brand-cream py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-brand-grey/30 bg-white shadow-sm">
            <div className="grid items-stretch md:grid-cols-[180px_1fr]">
              <div className="relative h-44 md:h-auto">
                <Image
                  src="/photos/sentinel-block-laser.jpg"
                  alt="Lazer Safe original Sentinel block-laser sensor module"
                  fill
                  sizes="(max-width: 768px) 100vw, 180px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 lg:p-7">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                  <span className="h-3 w-1 bg-brand-amber" aria-hidden />
                  Existing block-laser customers
                </p>
                <h3 className="text-balance text-xl font-bold text-brand-charcoal lg:text-2xl">
                  Already running a Sentinel block-laser system?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70 lg:text-base">
                  We still support the original Lazer Safe Sentinel and Sentinel block-laser XL. Spare parts, recalibration, and plug-and-play upgrades to Sentinel Plus are available — minor software config, no rewiring on most installs.
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/contact?topic=service"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark"
                  >
                    Ask about parts or an upgrade
                    <span aria-hidden>→</span>
                  </Link>
                  <a
                    href="tel:+12812652832"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-charcoal/30 px-5 py-2.5 text-sm font-semibold text-brand-charcoal transition-all hover:border-brand-charcoal"
                  >
                    (281) 265-2832
                  </a>
                </div>
              </div>
            </div>
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

      {/* Learn more at Lazer Safe */}
      <section className="border-y border-brand-grey/20 bg-brand-cream py-12">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                Deep technical specs
              </p>
              <p className="text-base text-brand-charcoal">
                Full manuals, brochures, certifications, and demo videos live on Lazer Safe&rsquo;s site.
              </p>
            </div>
            <a
              href="https://www.lazersafe.com/solutions/retrofit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-none items-center gap-2 border border-brand-charcoal bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal transition-all hover:bg-brand-charcoal hover:text-white"
            >
              Learn more at lazersafe.com
              <span aria-hidden>↗</span>
            </a>
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

function ProductCard({
  tag,
  title,
  tagline,
  img,
  features,
  tagHighlight = false,
}: {
  tag: string;
  title: string;
  tagline: string;
  img: string;
  features: string[];
  tagHighlight?: boolean;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-xl border bg-white transition-all hover:shadow-xl ${
        tagHighlight
          ? "border-brand-amber/60 ring-1 ring-brand-amber/30 hover:border-brand-amber"
          : "border-brand-grey/30 hover:border-brand-red"
      }`}
    >
      <div className="relative h-48 overflow-hidden bg-brand-charcoal">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {tagHighlight && (
          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-amber px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal">
            ★ Top tier
          </div>
        )}
      </div>
      <div className="p-7">
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tagHighlight ? "text-brand-amber" : "text-brand-red"}`}>{tag}</p>
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
