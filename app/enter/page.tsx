export const metadata = {
  title: "Dev access — Guardomation",
  robots: { index: false, follow: false },
};

export default async function EnterPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; e?: string }>;
}) {
  const params = await searchParams;
  const next = params.next || "/";
  const showError = params.e === "1";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-charcoal px-4 py-12">
      {/* Background laser beams motif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="beamY" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB500" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFB500" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFB500" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={i} x1="0" x2="1440" y1={150 + i * 200} y2={150 + i * 200} stroke="url(#beamY)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="relative w-full max-w-md">
        {/* Brand mark */}
        <div className="mb-10 text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Pre-launch · invite only
          </p>
          <h1 className="font-display text-3xl font-bold text-white">GUARDOMATION</h1>
          <p className="mt-1 text-sm italic text-brand-grey">Machine Guarding Solutions</p>
        </div>

        {/* Login card */}
        <div className="rounded-xl border border-white/10 bg-brand-charcoal-dark/80 p-7 backdrop-blur-sm shadow-2xl">
          <h2 className="text-lg font-semibold text-white">Enter access password</h2>
          <p className="mt-1 text-sm text-brand-grey">
            This site is in pre-launch development. Ask Mike for the password.
          </p>

          <form method="POST" action="/api/enter" className="mt-5 space-y-3">
            <input type="hidden" name="next" value={next} />
            <input
              type="password"
              name="password"
              autoFocus
              required
              autoComplete="current-password"
              placeholder="Password"
              className="w-full rounded-lg border border-white/20 bg-brand-charcoal px-4 py-3 text-base text-white placeholder:text-brand-grey/60 focus:border-brand-amber focus:outline-none focus:ring-1 focus:ring-brand-amber"
            />
            {showError && (
              <p className="text-sm text-brand-red">Incorrect password. Try again.</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Enter site
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-brand-grey">
          Live site at <a href="https://guardomation.com" className="text-brand-amber hover:underline">guardomation.com</a> · (281) 265-2832
        </p>
      </div>
    </div>
  );
}
