// Visual section: two safety laser technologies, unified message

export default function TechnologiesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Two laser technologies, one mission
          </p>
          <h2 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
            Safety at the speed of light.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-charcoal/70">
            Whether it&rsquo;s a horizontal beam array protecting a punch press operator or a single
            laser line monitoring a press brake&rsquo;s working zone — the principle is the same: invisible
            light fields that stop machinery faster than human reflexes ever could.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LIGHT CURTAIN VISUAL */}
          <div className="group relative overflow-hidden rounded-xl bg-brand-charcoal p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-amber" aria-hidden />

            <svg
              className="mb-8 h-44 w-full"
              viewBox="0 0 400 180"
              fill="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="lcBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFB500" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FFB500" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFB500" stopOpacity="0.2" />
                </linearGradient>
                <filter id="lcGlow">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>
              {/* Emitter post (left) */}
              <rect x="40" y="20" width="14" height="140" rx="3" fill="#A7A8AA" />
              <rect x="42" y="20" width="10" height="140" rx="2" fill="#25282A" />
              {/* Receiver post (right) */}
              <rect x="346" y="20" width="14" height="140" rx="3" fill="#A7A8AA" />
              <rect x="348" y="20" width="10" height="140" rx="2" fill="#25282A" />
              {/* Beams */}
              {[35, 50, 65, 80, 95, 110, 125, 140].map((y, i) => (
                <g key={y}>
                  <line
                    x1="54"
                    x2="346"
                    y1={y}
                    y2={y}
                    stroke="url(#lcBeam)"
                    strokeWidth="1.5"
                    filter="url(#lcGlow)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.6;1;0.6"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${i * 0.1}s`}
                    />
                  </line>
                  <circle cx="52" cy={y} r="2" fill="#FFB500" />
                  <circle cx="348" cy={y} r="2" fill="#FFB500" />
                </g>
              ))}
            </svg>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              Guardomation heritage
            </p>
            <h3 className="text-2xl font-bold text-white lg:text-3xl">Light Curtains</h3>
            <p className="mt-4 text-brand-grey">
              Multi-beam optical safety devices that create a vertical detection field across the
              dangerous zone of presses, robotic cells, and assembly stations. Trip a beam, the
              machine stops in milliseconds.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />
                Banner, Omron, Pinnacle, IDEM compatible
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />
                Type 4 ANSI/PLe ISO 13849 certified
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />
                Muting &amp; blanking for material flow applications
              </li>
            </ul>
          </div>

          {/* LAZERSAFE VISUAL — real product photo */}
          <div className="group relative overflow-hidden rounded-xl bg-brand-charcoal p-8 lg:p-10">
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: "linear-gradient(90deg, #812866 0%, #BA0C2F 50%, #CF732E 100%)",
              }}
              aria-hidden
            />

            <div className="relative mb-8 h-44 overflow-hidden rounded-lg">
              <img
                src="/photos/sentinel-plus-detail.jpg"
                alt="LazerSafe Sentinel sensor module mounted on a press brake"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent" />
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              LazerSafe partnership
            </p>
            <h3 className="text-2xl font-bold text-white lg:text-3xl">LazerSafe Systems</h3>
            <p className="mt-4 text-brand-grey">
              Single-laser AOPD safety devices mounted directly beneath the press brake punch.
              Monitors the tool path itself — no fixed guards in the way of production, no
              compromise on safety.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                Sentinel Plus &amp; LZS-2 retrofit kits
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                Automatic alignment + speed-dependent muting
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                ANSI B11.3 &amp; OSHA compliant by design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
