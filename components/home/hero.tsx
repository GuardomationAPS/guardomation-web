import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      {/* Light curtain — animated yellow horizontal beams */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.45]" aria-hidden>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beamY" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB500" stopOpacity="0" />
              <stop offset="20%" stopColor="#FFB500" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#FFB500" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFB500" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beamR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BA0C2F" stopOpacity="0" />
              <stop offset="50%" stopColor="#BA0C2F" stopOpacity="1" />
              <stop offset="100%" stopColor="#812866" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Light-curtain beam array (Guardomation heritage) — horizontal yellow */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              x2="1440"
              y1={120 + i * 45}
              y2={120 + i * 45}
              stroke="url(#beamY)"
              strokeWidth="0.75"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-width"
                values="0.5;1.5;0.5"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.15}s`}
              />
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.15}s`}
              />
            </line>
          ))}

          {/* LazerSafe diagonal red laser line — single, sharp */}
          <line
            x1="-100"
            x2="1540"
            y1="160"
            y2="640"
            stroke="url(#beamR)"
            strokeWidth="2"
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-width"
              values="1.5;3;1.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>

          {/* Detection-zone dots where beams converge */}
          {[200, 500, 800, 1100].map((cx, i) => (
            <circle key={cx} cx={cx} cy={160 + (cx / 1440) * 480} r="3" fill="#FFB500">
              <animate
                attributeName="r"
                values="2;5;2"
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>
          ))}
        </svg>
      </div>

      {/* Soft radial glow on right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #BA0C2F 0%, #812866 50%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          {/* Yellow-bracketed pill, echoing Guardomation logo brackets */}
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

          {/* Stats with yellow accent numbers */}
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
