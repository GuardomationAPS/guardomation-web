import Link from "next/link";

export default function SplitSection() {
  return (
    <section className="bg-brand-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            Two specialties, one team
          </p>
          <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
            Press brake retrofits & complete machine guarding.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LazerSafe / Press Brake Safety */}
          <Link
            href="/press-brake-safety"
            className="group relative overflow-hidden rounded-xl bg-brand-charcoal p-10 transition-all hover:shadow-2xl"
          >
            {/* LazerSafe gradient accent */}
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: "linear-gradient(90deg, #812866 0%, #ba0c2f 50%, #cf732e 100%)",
              }}
              aria-hidden
            />
            <div
              className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full opacity-20 blur-2xl"
              style={{
                background: "radial-gradient(circle, #ba0c2f 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                LazerSafe Certified
              </p>
              <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Press Brake Safety
              </h3>
              <p className="mb-8 max-w-md text-base leading-relaxed text-brand-grey">
                Sentinel Plus retrofits, rear guarding systems, automatic alignment, and complete LazerSafe installs for press brakes of every make and tonnage.
              </p>
              <ul className="mb-10 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  Lazer Safe Sentinel Plus
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  Automatic alignment feature
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  Press brake rear guarding
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  On-site install &amp; training
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3 group-hover:text-brand-amber">
                Explore LazerSafe systems
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          {/* General Machine Guarding */}
          <Link
            href="/search"
            className="group relative overflow-hidden rounded-xl border border-brand-grey/30 bg-white p-10 transition-all hover:border-brand-red/40 hover:shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-red" aria-hidden />
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              28 Brand Partners · House-brand GS Series
            </p>
            <h3 className="mb-4 text-3xl font-bold text-brand-charcoal lg:text-4xl">
              Machine Guarding
            </h3>
            <p className="mb-8 max-w-md text-base leading-relaxed text-brand-charcoal/70">
              Custom safety fencing, light curtains, safety mats, e-stops, interlocks, palm buttons, anti-restart controls, motor braking, and complete safeguarding assessments for every machine in your shop.
            </p>
            <ul className="mb-10 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-brand-charcoal/90">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Fencing &amp; gates
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Light curtains
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Safety mats
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                E-stops &amp; relays
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Interlock switches
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Anti-restart controls
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Motor braking
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-charcoal" />
                Safety assessments
              </li>
            </ul>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal transition-all group-hover:gap-3 group-hover:text-brand-red">
              Shop machine guarding
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
