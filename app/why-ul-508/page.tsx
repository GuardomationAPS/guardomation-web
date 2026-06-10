import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Why UL 508A Matters — Anti-Restart & Machine Safety Controls",
  description:
    "UL 508A is what AHJ inspectors and insurance carriers look for on industrial control panels. Guardomation's GS-series anti-restart controls carry UL 508A certification; uncertified clones don't.",
};

export default function WhyUL508Page() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Certification matters
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
            Why UL 508A is the standard that matters.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-grey">
            When an inspector or insurance carrier looks at your machine&rsquo;s safety controls, they look for a single thing: third-party safety certification. UL 508A is the U.S. standard for industrial control panels — and it&rsquo;s what plant managers, code officials, and underwriters actually recognize.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            OSHA + ANSI compliance ≠ panel certification.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/80 lg:text-lg">
            A lot of anti-restart devices are marketed as &ldquo;OSHA compliant&rdquo; or &ldquo;ANSI compliant.&rdquo; That phrasing is doing a lot of work. OSHA 1910.213 sets behavioral requirements for what a machine must do — it doesn&rsquo;t certify any particular product. ANSI publishes standards. Neither inspects panels.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-charcoal/80 lg:text-lg">
            <strong>UL 508A</strong> is different. It&rsquo;s a third-party safety certification specifically for the industrial control panel itself. UL evaluates the build quality, electrical safety, component ratings, and labeling, and lists the product publicly. Look it up in <a href="https://iq.ulprospector.com/en" target="_blank" rel="noopener noreferrer" className="text-brand-red font-semibold hover:underline">UL Product iQ</a> — every UL 508A panel is searchable by file number.
          </p>

          <div className="my-12 rounded-xl border-l-4 border-brand-red bg-brand-cream p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The blunt version</p>
            <p className="mt-2 text-lg font-semibold text-brand-charcoal lg:text-xl">
              Lookalike anti-restart controls on the market today are <em>not</em> UL 508A listed. They borrow OSHA / ANSI language, but the panel itself carries no third-party safety certification.
            </p>
          </div>

          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Why this matters to you (specifically).
          </h2>
          <div className="mt-8 space-y-6">
            <ValueRow
              title="Insurance carriers look for it"
              desc="Property and liability underwriters routinely require UL 508A on safety control panels. An uncertified panel can void coverage on a work-related injury claim — exactly the moment you can&rsquo;t afford it."
            />
            <ValueRow
              title="AHJ inspectors verify it"
              desc="City and county code officials enforce NEC 2014 requirements. Listed panels carry the UL label; unlisted ones get red-tagged. Re-doing electrical work after a failed inspection is expensive."
            />
            <ValueRow
              title="OSHA citations cite it"
              desc="When an OSHA inspector evaluates your machine safeguarding, they verify that listed components are present where required by 29 CFR 1910 Subpart O and S. Listed components shift the burden of proof on you."
            />
            <ValueRow
              title="It&rsquo;s verifiable, in public"
              desc="UL 508A panels are searchable by file number in UL Product iQ. Guardomation's anti-restart panels are listed. Uncertified competitor products aren't."
            />
          </div>

          <div className="mt-12 rounded-xl border border-brand-grey/30 bg-white p-7">
            <h3 className="text-xl font-bold text-brand-charcoal">Pay attention to the spec sheet.</h3>
            <p className="mt-3 text-base text-brand-charcoal/80">
              Before buying any anti-restart device, ask the seller to send you the spec sheet. Look for:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-charcoal/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                <span><strong>UL 508A listing</strong> with a file number — searchable in UL Product iQ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                <span><strong>Published HP rating</strong> — if you can&rsquo;t find a horsepower rating, the panel hasn&rsquo;t been spec&rsquo;d for your application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                <span><strong>NEMA enclosure rating</strong> (NEMA 4, 12, etc.) — matched to your environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                <span><strong>NFPA 79 compliance</strong> language for industrial machine wiring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                <span><strong>Country of origin</strong> — Made in USA matters for some inspectors and many customers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Guardomation&rsquo;s GS-series: UL 508A listed.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/80 lg:text-lg">
            Our anti-restart panel family — GS-104 plug-and-play, GS-104 hardwired, GS-104 MBAP &amp; MBAI motor braking variants — all carry UL 508A certification. Made in USA, NEMA-rated enclosures, latching E-stop, published HP and amperage ratings on every spec sheet. The label is on the panel; the file number is in Product iQ. The option insurers and inspectors actually recognize.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/search?q=anti-restart"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Shop GS-series anti-restart
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-brand-charcoal px-8 py-4 text-base font-semibold text-brand-charcoal transition-all hover:bg-brand-charcoal hover:text-white"
            >
              Ask which one fits your machine
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ValueRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-5">
      <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
        <span className="text-lg font-bold">✓</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-brand-charcoal">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/70 lg:text-base">{desc}</p>
      </div>
    </div>
  );
}
