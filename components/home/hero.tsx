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
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-brand-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent" />
      </div>

      {/* Animated laser-curtain SVG over photo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beamY" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB500" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFB500" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#FFB500" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFB500" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beamR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BA0C2F" stopOpacity="0" />
              <stop offset="50%" stopColor="#BA0C2F" stopOpacity="1" />
              <stop offset="100%" stopColor="#812866" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              x2="1440"
              y1={150 + i * 60}
              y2={150 + i * 60}
              stroke="url(#beamY)"
              strokeWidth="0.6"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.15}s`}
              />
            </line>
          ))}
          <line
            x1="-100"
            x2="1540"
            y1="180"
            y2="620"
            stroke="url(#beamR)"
            strokeWidth="1.5"
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-width"
              values="1;2.5;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="inline-block h-3 w-1 bg-brand-amber" />
            LazerSafe Authorized Master Distributor
            <span className="inline-block h-3 w-1 bg-brand-amber" />
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight text-white lg:text-7xl">
            Machine guarding that
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-white">doesn&rsquo;t compromise.</span>
              <span
                className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-red lg:h-4"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-brand-grey lg:text-xl">
            LazerSafe-certified press brake retrofits and complete machine guarding solutions — trusted by industrial fabricators for over 30 years.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/press-brake-safety"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Explore LazerSafe Systems
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/search"
              className="group inline-flex items-center justify-center gap-2 border border-brand-amber/60 bg-transparent px-8 py-4 text-base font-semibold text-brand-amber transition-all hover:bg-brand-amber hover:text-brand-charcoal"
            >
              Shop Machine Guarding
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8 text-sm text-brand-grey">
            <div className="flex items-center gap-3">
              <span className="h-10 w-1 bg-brand-amber" aria-hidden />
              <div>
                <div className="font-display text-3xl font-bold text-brand-amber">30+</div>
                <div className="mt-1 text-xs uppercase tracking-wider">Years guarding</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-10 w-1 bg-brand-amber" aria-hidden />
              <div>
                <div className="font-display text-3xl font-bold text-brand-amber">3,000+</div>
                <div className="mt-1 text-xs uppercase tracking-wider">Installs nationwide</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-10 w-1 bg-brand-amber" aria-hidden />
              <div>
                <div className="font-display text-3xl font-bold text-brand-amber">28</div>
                <div className="mt-1 text-xs uppercase tracking-wider">Brand partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
