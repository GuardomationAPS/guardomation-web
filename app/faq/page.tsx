import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description:
    "Common questions about Lazer Safe retrofits, GS-series anti-restart controls, machine guarding installs, quotes, and ongoing support.",
};

const FAQS: { section: string; items: { q: string; a: string }[] }[] = [
  {
    section: "Lazer Safe retrofits",
    items: [
      {
        q: "What is Lazer Safe and how is it different from a traditional light curtain?",
        a: "Lazer Safe uses a camera-based AOPD (Active Optical Protective Device) safety field mounted beneath the press brake punch. Unlike traditional light curtains that block access to the machine area, Lazer Safe monitors the actual tool path. The operator can stand close and hold the work piece as the brake closes at high speed — no fixed barrier in the way of production.",
      },
      {
        q: "Will Lazer Safe work on my press brake?",
        a: "We&rsquo;ve installed Lazer Safe systems on a wide range of press brake makes and models in U.S. shops. Some very old or specialty brakes may need additional engineering or aren&rsquo;t a fit. Send us your brake make, model, tonnage, and a few photos and we&rsquo;ll tell you straight whether it&rsquo;s a candidate.",
      },
      {
        q: "What&rsquo;s included in a Lazer Safe retrofit quote?",
        a: "Our turn-key packages include the Lazer Safe system, interface equipment, required consumables, on-site installation, operator training, and travel costs. No hidden extras. Multi-machine discounts available when we can do them in the same visit.",
      },
      {
        q: "How long does an install take?",
        a: "Most installs are completed in a focused visit. We can&rsquo;t commit to an exact duration without knowing your brake and site conditions — we&rsquo;ll communicate timelines upfront on each quote.",
      },
      {
        q: "What&rsquo;s included in operator training?",
        a: "Hands-on training on all Lazer Safe operating modes (Normal, Tray, Field-Muted, Faulting, Tooling Set Up). Each operator initials a sign-off sheet for your safety records.",
      },
      {
        q: "Where can I find the full technical specifications?",
        a: 'Detailed manuals, brochures, certifications, and demo videos live on <a href="https://www.lazersafe.com" target="_blank" rel="noopener noreferrer" class="text-brand-red font-semibold hover:underline">lazersafe.com</a>. We&rsquo;ll help with anything specific to your application — call (281) 265-2832.',
      },
    ],
  },
  {
    section: "GS-series anti-restart controls",
    items: [
      {
        q: "Are GS-series anti-restart controls UL listed?",
        a: "Yes — our GS-series anti-restart panels are UL 508A listed. Look for the certification mark on the product page. Not all competing anti-restart controls carry UL 508A; it&rsquo;s a meaningful safety and compliance differentiator that inspectors and insurance carriers actually recognize.",
      },
      {
        q: "What&rsquo;s the difference between GS-104, GS-104 MBAP, and GS-104 MBAI?",
        a: "GS-104 is the base anti-restart control. GS-104 MBAP and MBAI add DC braking — when the e-stop is pressed, the system shorts the motor coils to stop residual spindle spin instead of letting it coast. Useful on saws, drills, and other rotating equipment where you need a complete stop before opening guards.",
      },
      {
        q: "How do I pick the right GS-series part for my machine?",
        a: "Match voltage (120V vs 240V), phase (single vs three), and motor horsepower. If you&rsquo;re unsure, call us — we&rsquo;ll size it correctly. Wrong sizing is a safety issue we&rsquo;d rather catch before you order.",
      },
    ],
  },
  {
    section: "Machine guarding (general)",
    items: [
      {
        q: "Do you do custom fencing and rear guarding?",
        a: "Yes. Custom-sized fences, scissor gates, mesh enclosures, and rear guarding designed in-house and installed by our field engineers. Send us your machine type, footprint, and any photos — we&rsquo;ll engineer the solution.",
      },
      {
        q: "Do you sell light curtains and safety mats online?",
        a: "We&rsquo;re adding basic light curtain sizes and safety mat sizes to the catalog. For anything beyond standard sizing, or if you&rsquo;re not sure which device fits your application, call us first — wrong selection in safety devices is a problem we want to prevent.",
      },
      {
        q: "Can you do a full plant safeguarding assessment?",
        a: "Yes. Walk-through assessments machine-by-machine with a written report and recommendations. Useful for OSHA prep, insurance audits, or building a safety remediation plan.",
      },
    ],
  },
  {
    section: "Orders & support",
    items: [
      {
        q: "What&rsquo;s your return policy?",
        a: "Standard catalog items in unused, original condition may be returned within 30 days subject to a restocking fee. Custom-engineered systems and special orders are non-returnable. Contact us before initiating a return.",
      },
      {
        q: "Do you offer payment terms?",
        a: "For established customers, yes. New customer terms vary — let us know your purchasing process and we&rsquo;ll work it out on the quote.",
      },
      {
        q: "How do I get tech support after install?",
        a: "Call (281) 265-2832 during business hours (Mon-Fri 8a-5p CT). Lazer Safe systems and common spare parts stocked stateside.",
      },
      {
        q: "Do you ship internationally?",
        a: "Most of our work is in the U.S. International requests case-by-case — let us know what you need.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            FAQ
          </p>
          <h1 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
            Common questions.
          </h1>
          <p className="mt-4 text-base text-brand-charcoal/70 lg:text-lg">
            Quick answers on Lazer Safe retrofits, GS-series controls, custom guarding, and ongoing support. Don&rsquo;t see your question? <Link href="/contact" className="font-semibold text-brand-red hover:underline">Get in touch</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {FAQS.map((section) => (
            <div key={section.section} className="mb-12 last:mb-0">
              <h2 className="mb-6 border-b border-brand-grey/30 pb-3 text-2xl font-bold text-brand-charcoal">
                {section.section}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-brand-grey/30 bg-white p-6 transition-all hover:border-brand-red/50 open:border-brand-red"
                  >
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-semibold text-brand-charcoal group-open:text-brand-red lg:text-lg">
                          {item.q}
                        </h3>
                        <span
                          className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-brand-grey/40 text-sm text-brand-charcoal transition-transform group-open:rotate-45 group-open:border-brand-red group-open:text-brand-red"
                          aria-hidden
                        >
                          +
                        </span>
                      </div>
                    </summary>
                    <div
                      className="mt-4 text-sm leading-relaxed text-brand-charcoal/80 lg:text-base"
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-white lg:text-4xl">
            Still have a question?
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Talk to someone who&rsquo;s actually installed this stuff. No call center.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+12812652832"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Call (281) 265-2832
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              Email a specialist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
