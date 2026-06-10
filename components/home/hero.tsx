import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-charcoal-dark">
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 49.5%, currentColor 49.5%, currentColor 50.5%, transparent 50.5%),
            linear-gradient(150deg, transparent 49.5%, currentColor 49.5%, currentColor 50.5%, transparent 50.5%),
            linear-gradient(90deg, transparent 49.5%, currentColor 49.5%, currentColor 50.5%, transparent 50.5%)
          `,
          backgroundSize: "40px 70px",
          color: "white",
        }}
        aria-hidden
      />
      {/* Accent gradient on right */}
      <div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #ba0c2f 0%, #812866 60%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
            LazerSafe Authorized Master Distributor
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl">
            Machine guarding that
            <br />
            <span className="text-brand-red">doesn&rsquo;t compromise.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-brand-grey lg:text-xl">
            LazerSafe-certified press brake retrofits and complete machine guarding solutions — trusted by industrial fabricators for over 30 years.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/press-brake-safety"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Explore LazerSafe Systems
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Shop Machine Guarding
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 text-sm text-brand-grey">
            <div>
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="mt-1 text-xs uppercase tracking-wider">Years guarding</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">3,000+</div>
              <div className="mt-1 text-xs uppercase tracking-wider">Installs nationwide</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="mt-1 text-xs uppercase tracking-wider">Brand partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
