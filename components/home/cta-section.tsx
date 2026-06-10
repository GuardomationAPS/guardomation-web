export default function CTASection() {
  return (
    <section className="bg-brand-charcoal py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-amber">
              Custom challenge?
            </p>
            <h2 className="text-balance text-4xl font-bold leading-tight text-white lg:text-5xl">
              Talk to a machine guarding specialist.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-grey">
              Whether it&rsquo;s a Lazer Safe retrofit, a custom fence, or a full plant safeguarding assessment — we&rsquo;ve installed it before. Tell us about your application. Simple quotes can come back same week; complex installs may need a site visit before we scope.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href="tel:+12812652832"
              className="group flex flex-col rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:border-brand-red hover:bg-white/10"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-grey">
                Call us
              </span>
              <span className="mt-2 text-3xl font-bold text-white">
                (281) 265-2832
              </span>
              <span className="mt-1 text-sm text-brand-grey">
                Mon–Fri, 8am–5pm CT
              </span>
            </a>
            <a
              href="mailto:info@guardomation.com"
              className="group flex flex-col rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:border-brand-red hover:bg-white/10"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-grey">
                Email us
              </span>
              <span className="mt-2 text-2xl font-bold text-white">
                info@guardomation.com
              </span>
              <span className="mt-1 text-sm text-brand-grey">
                We reply with next steps quickly
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
