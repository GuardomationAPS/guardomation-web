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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/60 to-brand-charcoal" />
      </div>

      {/* Subtle yellow laser-curtain beams — atmospheric only */}
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 1200"
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
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              x2="1440"
              y1={180 + i * 100}
              y2={180 + i * 100}
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

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        {/* TOP: HERO TEXT */}
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
            Custom safety fencing, light curtains, and complete machine guarding — plus
            LazerSafe-certified press brake retrofits. Trusted by industrial fabricators for over 30 years.
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

        {/* DUAL CARDS: TWO APPROACHES */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* MACHINE GUARDING (Yellow — Guardomation) */}
          <Link
            href="/search"
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-brand-charcoal/80 p-8 backdrop-blur-sm transition-all hover:border-brand-amber/60 hover:bg-brand-charcoal lg:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-amber" aria-hidden />

            <svg className="mb-6 h-36 w-full" viewBox="0 0 480 180" fill="none" aria-hidden>
              <defs>
                <linearGradient id="gFloor" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3a3d40" />
                  <stop offset="100%" stopColor="#1a1c1f" />
                </linearGradient>
                <filter id="gGlow">
                  <feGaussianBlur stdDeviation="1.5" />
                </filter>
                <pattern id="matDot" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#FFB500" opacity="0.6" />
                </pattern>
              </defs>
              <rect x="0" y="145" width="480" height="35" fill="url(#gFloor)" />
              <rect x="80" y="145" width="120" height="18" fill="url(#matDot)" />
              <g stroke="#A7A8AA" strokeWidth="1" fill="none">
                <line x1="40" y1="50" x2="320" y2="50" />
                {Array.from({ length: 14 }).map((_, i) => (
                  <line key={`r${i}`} x1={40 + i * 20} y1="50" x2={40 + i * 20} y2="145" />
                ))}
                <line x1="40" y1="145" x2="320" y2="145" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`x${i}`} x1={40 + i * 23} y1="50" x2={60 + i * 23} y2="145" stroke="#A7A8AA" strokeWidth="0.4" opacity="0.6" />
                ))}
              </g>
              <rect x="120" y="75" width="160" height="70" rx="3" fill="#25282A" stroke="#A7A8AA" strokeWidth="1" />
              <rect x="135" y="88" width="40" height="35" fill="#3a3d40" />
              <rect x="180" y="88" width="40" height="35" fill="#3a3d40" />
              <rect x="225" y="88" width="40" height="35" fill="#3a3d40" />
              <g>
                <rect x="335" y="65" width="6" height="80" rx="1.5" fill="#A7A8AA" />
                <rect x="336" y="65" width="4" height="80" fill="#25282A" />
                <rect x="395" y="65" width="6" height="80" rx="1.5" fill="#A7A8AA" />
                <rect x="396" y="65" width="4" height="80" fill="#25282A" />
                {[75, 87, 99, 111, 123, 135].map((y, i) => (
                  <line key={y} x1="341" x2="395" y1={y} y2={y} stroke="#FFB500" strokeWidth="1" filter="url(#gGlow)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
                  </line>
                ))}
              </g>
              <g>
                <circle cx="440" cy="120" r="13" fill="#25282A" stroke="#A7A8AA" strokeWidth="1" />
                <circle cx="440" cy="120" r="9" fill="#BA0C2F" />
                <circle cx="440" cy="120" r="6" fill="#8d0823" />
                <rect x="436" y="128" width="8" height="12" fill="#25282A" stroke="#A7A8AA" strokeWidth="0.5" />
              </g>
            </svg>

            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Guardomation
            </p>
            <h3 className="text-2xl font-bold text-white lg:text-3xl">Machine Guarding</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-grey">
              Layered safety for every machine in your shop. Custom fencing, light curtains, mats, interlocks, e-stops, anti-restart controls, motor braking — sourced from 28 brand partners + our GS-series house brand.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-amber transition-all group-hover:gap-3">
              Shop machine guarding
              <span aria-hidden>→</span>
            </span>
          </Link>

          {/* LAZERSAFE (Red — Partnership) */}
          <Link
            href="/press-brake-safety"
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-brand-charcoal/80 p-8 backdrop-blur-sm transition-all hover:border-brand-red/60 hover:bg-brand-charcoal lg:p-10"
          >
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: "linear-gradient(90deg, #812866 0%, #BA0C2F 50%, #CF732E 100%)",
              }}
              aria-hidden
            />

            <div className="relative mb-6 h-36 overflow-hidden rounded-lg">
              <img
                src="/photos/sentinel-plus-detail.jpg"
                alt="LazerSafe Sentinel sensor module on a press brake"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent" />
            </div>

            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              <span className="h-3 w-1 bg-brand-red" aria-hidden />
              LazerSafe Partnership
            </p>
            <h3 className="text-2xl font-bold text-white lg:text-3xl">Press Brake Retrofits</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-grey">
              Sentinel Plus and LZS-2 single-laser AOPD retrofit kits. Automatic alignment, speed-dependent muting, rear guarding. We&rsquo;re the U.S. authorized Master Distributor.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition-all group-hover:gap-3">
              Explore LazerSafe systems
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
