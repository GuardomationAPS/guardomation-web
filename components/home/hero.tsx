import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      {/* Background photo of LazerSafe Sentinel Plus install */}
      <div className="absolute inset-0">
        <Image
          src="/photos/sentinel-plus-hero.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-brand-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/60 to-brand-charcoal" />
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
            U.S. Master Distributor for Lazer Safe
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl">
            Press brake retrofits done right.
            <br />
            <span className="text-brand-grey">Whole-shop guarding to match.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-brand-grey lg:text-xl">
            The only U.S. company with full Lazer Safe distribution and retrofit rights — and three decades of guarding expertise that doesn&rsquo;t stop with press brakes.
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
              <div className="font-display text-3xl font-bold text-brand-amber">28</div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em]">Brand partners</div>
            </div>
          </div>
        </div>

        {/* DUAL CARDS — LazerSafe leads (left), Machine Guarding extends (right) */}
        <div className="mt-20 grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* LAZERSAFE — leads, larger (3/5) */}
          <Link
            href="/press-brake-safety"
            className="group relative overflow-hidden rounded-xl border border-brand-red/30 bg-brand-charcoal/80 backdrop-blur-sm transition-all hover:border-brand-red/70 lg:col-span-3"
          >
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg, #812866 0%, #BA0C2F 50%, #CF732E 100%)" }} aria-hidden />

            <div className="relative h-56 overflow-hidden lg:h-72">
              <img
                src="/photos/sentinel-plus-detail.jpg"
                alt="Lazer Safe Sentinel sensor module mounted on a press brake"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                Exclusive U.S. Distribution
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                <span className="h-3 w-1 bg-brand-red" aria-hidden />
                Lazer Safe Partnership
              </p>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">Press Brake Retrofit Systems</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-grey">
                Sentinel Plus is the world&rsquo;s #1 retrofit solution for press brake guarding. Camera-based AOPD safety that mounts beneath the punch — speed, alignment, and protection without compromising production. We&rsquo;ve installed Lazer Safe systems on every make and model of press brake in U.S. shops.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/85">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />Sentinel Plus retrofits</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />Automatic alignment</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />Rear guarding systems</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />On-site install &amp; training</li>
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-brand-red transition-all group-hover:gap-3">
                Explore Lazer Safe systems
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          {/* MACHINE GUARDING — the expansion (2/5) */}
          <Link
            href="/search"
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-brand-charcoal/80 backdrop-blur-sm transition-all hover:border-brand-amber/60 lg:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-amber" aria-hidden />

            {/* Real Guardomation guarding install — yellow scissor gate + perimeter fence */}
            <div className="relative h-56 overflow-hidden bg-brand-charcoal-dark lg:h-72">
              <img
                src="/photos/guarding-mg-02.jpg"
                alt="Yellow scissor gate and perimeter fencing on a shop machine"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-brand-charcoal-dark/40" />
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
              <p className="mt-4 text-sm leading-relaxed text-brand-grey">
                From shears and turret presses to robot cells and conveyors — fencing, light curtains, mats, interlocks, e-stops, and our GS-series anti-restart controls. 28 brand partners, one team installing the whole shop.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-brand-amber transition-all group-hover:gap-3">
                Shop machine guarding
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
