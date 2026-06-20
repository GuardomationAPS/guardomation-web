import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      {/* Background photo: Lazer Safe sensor + press brake tooling, focal point upper-right above cards */}
      <div className="absolute inset-0">
        <Image
          src="/photos/sentinel-plus-hero.jpg"
          alt="Lazer Safe Sentinel sensor module installed beneath the punch on a press brake"
          fill
          priority
          quality={85}
          className="object-cover opacity-30"
          style={{ objectPosition: "65% 30%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/50 to-brand-charcoal" />
      </div>

      {/* Subtle yellow laser-curtain beams */}
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 1200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="beamY" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB500" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFB500" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#FFB500" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFB500" stopOpacity="0" />
            </linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="2" /></filter>
          </defs>
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1="0" x2="1440" y1={180 + i * 100} y2={180 + i * 100} stroke="url(#beamY)" strokeWidth="0.5" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${4 + (i % 2)}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </line>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        {/* TOP: HERO TEXT */}
        <div className="max-w-3xl">
          <p className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="inline-block h-3 w-1 bg-brand-amber" />
            Machine Guarding Solutions
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl">
            Authorized distribution.
            <br />
            <span className="text-brand-grey">Application expertise. On-site installation.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-brand-grey lg:text-xl">
            U.S. Master Distributor for Lazer Safe. 30+ safety brand partnerships across press brakes, shears, turret presses, and beyond.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 text-sm text-brand-grey">
            <div>
              <div className="font-display text-3xl font-bold text-brand-amber">30+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em]">Years guarding</div>
            </div>
            <div className="h-12 w-px bg-white/15" />
            <div>
              <div className="font-display text-3xl font-bold text-brand-amber">3,000+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em]">Installs nationwide</div>
            </div>
            <div className="h-12 w-px bg-white/15" />
            <div>
              <div className="font-display text-3xl font-bold text-brand-amber">30+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em]">Brand partners</div>
            </div>
          </div>
        </div>

        {/* DUAL CARDS — LazerSafe + Machine Guarding, equal width */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LAZERSAFE */}
          <div className="group relative overflow-hidden rounded-xl border border-brand-red/30 bg-brand-charcoal/80 backdrop-blur-sm transition-all hover:border-brand-red/70">
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg, #812866 0%, #BA0C2F 50%, #CF732E 100%)" }} aria-hidden />

            <Link href="/press-brake-safety" className="relative block h-72 overflow-hidden">
              <img
                src="/photos/sentinel-plus-hero.jpg"
                alt="Lazer Safe Sentinel transmitter sensor module mounted on a press brake"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "75% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                Exclusive U.S. Distributor
              </div>
            </Link>

            <div className="p-8 lg:p-10">
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                <span className="h-3 w-1 bg-brand-red" aria-hidden />
                Lazer Safe Partnership
              </p>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">Press Brake Retrofit Systems</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-grey">
                Camera-based AOPD safety mounted beneath the punch. Operators hold the work piece as the tools close at high speed — no fixed guards in the way, no compromise on production.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/press-brake-safety/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red-dark hover:shadow-brand-red/50"
                >
                  Get a Lazer Safe quote
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/press-brake-safety"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-grey transition-all hover:text-white"
                >
                  Or learn more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* MACHINE GUARDING — equal size; uses 2 real photos for visual parity */}
          <Link
            href="/machine-guarding"
            className="group relative overflow-hidden rounded-xl border border-brand-amber/20 bg-brand-charcoal/80 backdrop-blur-sm transition-all hover:border-brand-amber/60"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-amber" aria-hidden />

            {/* Two real Guardomation guarding installs side-by-side for visual richness */}
            <div className="relative h-72 overflow-hidden bg-brand-charcoal-dark">
              <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                <div className="relative overflow-hidden">
                  <img
                    src="/photos/guarding-mg-02.jpg"
                    alt="Yellow scissor gate and perimeter fencing"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/photos/guarding-mg-03.jpg"
                    alt="Turret press with bright yellow safety mat"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-brand-amber px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Whole-Shop Coverage
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl font-bold leading-tight text-white lg:text-3xl">
                  Our expertise doesn&rsquo;t<br />stop with press brakes.
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                <span className="h-3 w-1 bg-brand-amber" aria-hidden />
                Guardomation
              </p>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">Machine Guarding</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-grey">
                Shears, turret presses, robot cells, drill presses — fencing, light curtains, mats, interlocks, e-stops, and our GS-series controls. 30+ brand partners. Three decades on shop floors.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 text-base font-semibold text-brand-amber transition-all group-hover:gap-3">
                  Shop the catalog
                  <span aria-hidden>→</span>
                </span>
                <span className="text-xs text-brand-grey">
                  · Custom guarding? <span className="underline">Request a quote</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
