import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import PhotoCarousel from "components/photo-carousel";

const GUARDING_PHOTOS = [
  { src: "/photos/guarding-mg-02.jpg", alt: "Yellow scissor gate and side fencing on a press brake", caption: "Scissor gate + side fencing — rear access protection on a press brake" },
  { src: "/photos/guarding-mg-03.jpg", alt: "Strippit turret press with bright yellow safety mat", caption: "Pressure-sensitive safety mat around a Strippit 1000 turret press" },
  { src: "/photos/guarding-mg-05.jpg", alt: "Punch press with full perimeter guarding", caption: "Vertical-bar perimeter guarding around a punch press" },
  { src: "/photos/guarding-mg-04.jpg", alt: "Light curtain installation around a hydraulic press", caption: "Light curtains creating a non-contact safety field at the point of operation" },
  { src: "/photos/guarding-mg-06.jpg", alt: "Anti-restart control panel internal wiring", caption: "GS-series anti-restart control panel — UL 508A listed, made in USA" },
  { src: "/photos/guarding-mg-01.jpg", alt: "Yellow safety enclosure around a CNC turret", caption: "Custom yellow enclosure with viewing windows around a CNC turret" },
];

export const metadata = {
  title: "Machine Guarding · Whole-shop safety — Guardomation",
  description:
    "Whole-shop machine guarding: light curtains, safety mats, fencing & gates, anti-restart controls, e-stops, and custom guarding for presses, shears, lathes, drills, grinders, robot cells, and every machine in between.",
};

export default function MachineGuardingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/photos/guarding-mg-02.jpg"
            alt="Press brake with yellow scissor gate and side fencing"
            fill
            priority
            quality={85}
            className="object-cover opacity-25"
            style={{ objectPosition: "50% 50%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/40 to-brand-charcoal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          <div className="max-w-3xl">
            <p className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="inline-block h-3 w-1 bg-brand-amber" />
              30+ brand partners · three decades of guarding
            </p>

            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl">
              Whole-shop machine guarding.
              <br />
              <span className="text-brand-grey">Not just press brakes.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-brand-grey lg:text-xl">
              Light curtains, safety mats, fencing &amp; gates, anti-restart controls, e-stops, and custom guarding. Service the press brake guarding you already trust us with — and the rest of the machines in your shop too.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=assessment"
                className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
              >
                Request a plant assessment
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
              >
                Shop the catalog
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 text-sm text-brand-grey">
              <div>
                <div className="font-display text-3xl font-bold text-brand-amber">30+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em]">Years guarding</div>
              </div>
              <div className="h-12 w-px bg-white/15" />
              <div>
                <div className="font-display text-3xl font-bold text-brand-amber">30+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em]">Brand partners</div>
              </div>
              <div className="h-12 w-px bg-white/15" />
              <div>
                <div className="font-display text-3xl font-bold text-brand-amber">UL 508A</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em]">GS-series controls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS ROW */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              Most-requested categories
            </p>
            <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
              Four of the products we move every week.
            </h2>
            <p className="mt-4 text-base text-brand-charcoal/70 lg:text-lg">
              These are the high-volume categories — but they&rsquo;re a fraction of what we install. Most jobs blend two or three into one solution, and the rest of the catalog (chip guards, area scanners, custom enclosures, and more) is below.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <CategoryCard
              tag="Non-contact"
              title="Light Curtains"
              tagline="Optical safety field at the point of operation — no fixed barrier in the operator's way."
              img="/photos/guarding-mg-04.jpg"
              features={[
                "Type 2 &amp; Type 4 PSDI options",
                "Banner, OMRON/STI, SICK, Pilz catalogue",
                "Muting + blanking for material feed",
                "Integrate with anti-restart + e-stop",
              ]}
              shopHref="/search/light-curtains"
            />
            <CategoryCard
              tag="Pressure-sensitive"
              title="Safety Mats"
              tagline="Floor-level presence sensing around the perimeter of a machine or cell."
              img="/photos/guarding-mg-03.jpg"
              features={[
                "12 sizes in stock — and custom cuts",
                "Anti-slip surface, oil/coolant resistant",
                "Integrate with safety relay + e-stop",
                "Replaceable wear strips and edges",
              ]}
              shopHref="/search/safety-mats"
            />
            <CategoryCard
              tag="Hard barrier"
              title="Fencing &amp; Gates"
              tagline="Aluminum or steel perimeter fencing with interlocked access doors and expandable scissor gates."
              img="/photos/guarding-scissor-gate-on-brake.jpg"
              features={[
                "Modular panels — scale to any footprint",
                "Interlocked swing &amp; sliding doors",
                "Scissor gates for rear/side access",
                "Safety yellow + black or custom color",
              ]}
              shopHref="/search/guarding-fences-gates"
            />
            <CategoryCard
              tag="Controls"
              tagHighlight
              title="Anti-Restart Controls"
              tagline="Our GS-series — UL 508A listed motor disconnect &amp; restart-prevention panels."
              img="/photos/guarding-mg-06.jpg"
              features={[
                "GS-104 plug-and-play (120V single-phase)",
                "GS-104 MBAP/MBAI motor braking variants",
                "UL 508A panel listing — searchable in Product iQ",
                "NEMA-rated enclosure, latching e-stop",
              ]}
              shopHref="/search/anti-restart-controls"
            />
          </div>

          {/* AND MORE — broader catalog */}
          <div className="mt-16 rounded-xl border border-brand-grey/30 bg-brand-cream p-7 lg:p-10">
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              And a lot more
            </p>
            <h3 className="text-balance text-2xl font-bold text-brand-charcoal lg:text-3xl">
              What we also install, fabricate, and source.
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-brand-charcoal/70 lg:text-base">
              Three decades on shop floors means we&rsquo;ve covered just about everything. If it isn&rsquo;t on this list, it&rsquo;s still worth asking — we have 30+ brand partners and an in-house fab capability for custom work.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Chip guards",
                "Chuck guards",
                "Area scanners (SICK, OMRON)",
                "Single-axis light beams",
                "Two-hand controls",
                "Pull-back / hand-restraint devices",
                "Presence-sensing mats &amp; edges",
                "Safety relays &amp; safety PLCs",
                "Lockout / tagout devices",
                "E-stop pendants &amp; foot switches",
                "Custom welded enclosures",
                "Interlock switches (RFID, key, hinge)",
                "Robot-cell area scanners (3D)",
                "Conveyor pull cords",
                "Bridge crane safety",
                "Forklift / pedestrian alerting",
                "Sound-level &amp; arc-flash signage",
                "Saw safety (riving knives, blade guards)",
                "Coolant &amp; chip splash guards",
                "Hot-work &amp; weld curtains",
                "Custom fab + paint",
                "OEM machine retrofits",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-grey/40 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-charcoal/80"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
              <span className="rounded-full border border-brand-red/40 bg-brand-red/5 px-3.5 py-1.5 text-sm font-semibold text-brand-red">
                + custom solutions
              </span>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=other"
                className="inline-flex items-center justify-center gap-2 bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark"
              >
                Ask about a specific job
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/line-cards"
                className="inline-flex items-center justify-center gap-2 border border-brand-charcoal/30 px-5 py-2.5 text-sm font-semibold text-brand-charcoal transition-all hover:border-brand-charcoal"
              >
                See our 30+ brand partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVERY MACHINE — coverage section */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Coverage
            </p>
            <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
              Every machine in your shop.
            </h2>
            <p className="mt-4 text-base text-brand-charcoal/70 lg:text-lg">
              Press brakes are where we built the practice — but the same crew handles light curtains on a turret press, scissor gates on a shear, anti-restart panels on a band saw, and full robot-cell perimeters.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { name: "Press Brakes", href: "/press-brake-safety", desc: "Lazer Safe retrofits, rear scissor gates, side fencing" },
              { name: "Punch Presses", href: "/search?q=punch+press", desc: "Light curtains, point-of-operation guards, pull-back devices" },
              { name: "Shears", href: "/search?q=shear", desc: "Front guards, rear fencing, interlocked covers" },
              { name: "Turret Presses", href: "/search?q=turret", desc: "Perimeter fencing, safety mats, light curtains" },
              { name: "Robot Cells", href: "/search?q=robot", desc: "Full enclosures, interlocked doors, area scanners" },
              { name: "Drill Presses", href: "/search/drill-press-guards", desc: "Chuck guards, anti-restart, e-stop foot switches" },
              { name: "Grinders", href: "/search/grinder-guards", desc: "Wheel guards, work rests, eye shields" },
              { name: "Band Saws", href: "/search/band-saw-guards", desc: "Blade guards, anti-restart, two-hand controls" },
              { name: "Lathes", href: "/search?q=lathe", desc: "Chuck guards, chip guards, interlocked covers" },
              { name: "Milling Machines", href: "/search/milling-machine-guards", desc: "Spindle guards, work area covers, e-stops" },
              { name: "Saws", href: "/search?q=saw", desc: "Riving knives, blade guards, anti-kickback" },
              { name: "Conveyors", href: "/search?q=conveyor", desc: "Pull cords, edge guards, e-stop chains" },
            ].map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group rounded-xl border border-brand-grey/30 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-red hover:shadow-md"
              >
                <h3 className="text-base font-bold text-brand-charcoal group-hover:text-brand-red">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs text-brand-charcoal/60">{m.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red opacity-0 transition-all group-hover:opacity-100">
                  Browse <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALL CAROUSEL */}
      <section className="bg-brand-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Field work
            </p>
            <h2 className="text-balance text-3xl font-bold text-white lg:text-4xl">
              Real guarding installs.
            </h2>
            <p className="mt-3 text-base text-brand-grey">
              A mix of light curtains, safety mats, fencing, and custom enclosures from shop floors we&rsquo;ve been on.
            </p>
          </div>
          <PhotoCarousel photos={GUARDING_PHOTOS} autoAdvanceMs={5000} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              How a guarding job works
            </p>
            <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
              From walkthrough to certified install.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Walk the floor",
                desc: "We come on-site (or you send photos + a machine list) and identify what needs guarding under OSHA 1910 Subpart O.",
              },
              {
                num: "02",
                title: "Spec &amp; quote",
                desc: "Per-machine recommendation with the specific products we&rsquo;d use, install cost, and any custom fabrication. Multi-machine discounts when possible.",
              },
              {
                num: "03",
                title: "Install on-site",
                desc: "Field technicians come outfitted to do the install in your shop. We handle interfacing with existing controls, removing old devices, and final calibration.",
              },
              {
                num: "04",
                title: "Document &amp; train",
                desc: "Operators trained on the new guarding. Sign-off sheets completed. Documentation for your insurance carrier or AHJ inspector if requested.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-brand-grey/30 bg-brand-cream p-7"
              >
                <div className="font-display text-5xl font-bold text-brand-red">{step.num}</div>
                <h3
                  className="mt-4 text-xl font-bold text-brand-charcoal"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p
                  className="mt-3 text-sm text-brand-charcoal/70"
                  dangerouslySetInnerHTML={{ __html: step.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY UL 508A callout — compact card */}
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Link
            href="/why-ul-508"
            className="group block overflow-hidden rounded-xl border border-brand-grey/40 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-red hover:shadow-lg"
          >
            <div className="flex items-stretch">
              {/* Left accent strip with the UL 508A mark */}
              <div className="flex flex-none flex-col items-center justify-center bg-brand-charcoal px-5 py-6 text-center md:px-7">
                <div className="font-display text-3xl font-bold leading-none text-brand-amber md:text-4xl">
                  UL
                </div>
                <div className="mt-1 font-display text-xl font-bold leading-none text-white md:text-2xl">
                  508A
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-grey">
                  Listed panel
                </div>
              </div>
              {/* Copy */}
              <div className="flex flex-1 items-center justify-between gap-3 px-5 py-5 md:px-7">
                <div>
                  <p className="text-sm font-bold text-brand-charcoal md:text-base">
                    Buying an anti-restart? Check the spec sheet.
                  </p>
                  <p className="mt-1 text-xs text-brand-charcoal/70 md:text-sm">
                    Not all are UL 508A listed — and that&rsquo;s the line underwriters and AHJ inspectors actually look for.
                  </p>
                </div>
                <span
                  aria-hidden
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-red text-white transition-all group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal-dark py-20 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Next step
          </p>
          <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
            Have a machine you&rsquo;re worried about?
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Tell us what it is, send a photo, and we&rsquo;ll come back with what we&rsquo;d guard it with and what it would cost. Site walkthroughs available for full-shop projects.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?topic=assessment"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Request an assessment
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

function CategoryCard({
  tag,
  title,
  tagline,
  img,
  features,
  shopHref,
  tagHighlight = false,
}: {
  tag: string;
  title: string;
  tagline: string;
  img: string;
  features: string[];
  shopHref: string;
  tagHighlight?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-xl border bg-white transition-all hover:shadow-xl ${
        tagHighlight
          ? "border-brand-amber/60 ring-1 ring-brand-amber/30 hover:border-brand-amber"
          : "border-brand-grey/30 hover:border-brand-red"
      }`}
    >
      <div className="relative h-48 overflow-hidden bg-brand-charcoal">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {tagHighlight && (
          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-amber px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal">
            ★ UL 508A
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tagHighlight ? "text-brand-amber" : "text-brand-red"}`} dangerouslySetInnerHTML={{ __html: tag }} />
        <h3 className="mt-2 text-xl font-bold text-brand-charcoal" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="mt-2 text-sm text-brand-charcoal/70">{tagline}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-brand-charcoal/85">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
              <span dangerouslySetInnerHTML={{ __html: f }} />
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-3 pt-3">
          <Link
            href={shopHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
          >
            Shop {title.toLowerCase()}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
