import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      {/* Background photo of LazerSafe Sentinel Plus install, heavy dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/photos/sentinel-plus-hero.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-brand-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
      </div>

      {/* Subtle yellow laser-curtain beams — atmospheric only */}
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beamY" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB500" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFB500" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#FFB500" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFB500" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              x2="1440"
              y1={200 + i * 100}
              y2={200 + i * 100}
              stroke="url(#beamY)"
              strokeWidth="0.5"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.4;0.9;0.4"
                dur={`${4 + (i % 2)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </line>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="inline-block h-3 w-1 bg-brand-amber" />
            LazerSafe Authorized Master Distributor
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl">
            Machine guarding that
            <br />
            doesn&rsquo;t compromise.
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-brand-grey lg:text-xl">
            LazerSafe-certified press brake retrofits and complete machine guarding solutions — trusted by industrial fabricators for over 30 years.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/press-brake-safety"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Explore LazerSafe Systems
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/search"
              className="group inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:bg-brand-amber hover:text-brand-charcoal"
            >
              Shop Machine Guarding
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-white/10 pt-8 text-sm text-brand-grey">
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
      </div>
    </section>
  );
}
