import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Authorized Brand Partners",
  description:
    "Guardomation is an authorized distributor for 30+ established machine safety brands — Lazer Safe, Banner, OMRON/STI, IDEM, Pinnacle, Saf-T-Block, and more.",
};

const PARTNERS = [
  { name: "Lazer Safe", focus: "Press brake retrofit safety (Sentinel, Sentinel Plus)", featured: true, url: "https://www.lazersafe.com" },
  { name: "Banner Engineering", focus: "Light curtains, safety relays, sensors", url: "https://www.bannerengineering.com" },
  { name: "OMRON / STI", focus: "Safety controllers, light curtains, e-stops", url: "https://www.omron.com" },
  { name: "IDEM Safety", focus: "Interlock switches, e-stops, safety locks", url: "https://www.idemsafety.com" },
  { name: "Pinnacle Systems", focus: "Press brake and machine controls", url: "https://www.pinnaclesystems.com" },
  { name: "Triad", focus: "Press automation and safety controls", url: "https://www.triadcontrols.com" },
  { name: "Pressroom Electronics", focus: "Light curtains and press controls", url: "https://www.pressroomelectronics.com" },
  { name: "Ferndale", focus: "Safety mats and presence-sensing devices", url: "https://www.ferndalesafety.com" },
  { name: "HERION", focus: "Safety valves and pneumatic controls", url: "https://www.herion-systemtechnik.com" },
  { name: "EUCHNER", focus: "Safety switches and access systems", url: "https://www.euchner.com" },
  { name: "Nolatron", focus: "Anti-restart and motor control", url: "https://www.nolatron.com" },
  { name: "Toledo", focus: "Press components and safety", url: "https://www.toledointegratedsystems.com" },
  { name: "GEMCO", focus: "Stop-time meters and machine instruments", url: "https://www.ametekapt.com" },
  { name: "KAMCO", focus: "Light curtains and press safety", url: "https://www.kamcosafety.com" },
  { name: "ROSS", focus: "Safety-rated pneumatic valves", url: "https://www.rosscontrols.com" },
  { name: "REES", focus: "Foot switches and operator controls", url: "https://www.reesinc.com" },
  { name: "Saf-T-Block", focus: "Press brake safety blocks", url: "https://www.safetyblocks.com" },
  { name: "FLEXBAR", focus: "Machine guards (lathe, drill press, band saw)", url: "https://www.flexbar.com" },
  { name: "DANRAY", focus: "Drill press guards and accessories", url: "https://www.danrayproducts.com" },
  { name: "WIRECRAFTERS", focus: "Custom mesh enclosures and fencing", url: "https://www.wirecrafters.com" },
  { name: "Metal Form", focus: "Press tooling and accessories", url: "https://www.metalformsafety.com" },
  { name: "NASP", focus: "Press safety controls", url: "https://www.naspinc.com" },
  { name: "ATS Safety", focus: "Drill press guards (DPG series)", url: "https://www.atssafety.com" },
  { name: "MAKESAFE", focus: "Lockout/tagout equipment", url: "https://www.makesafetools.com" },
  { name: "SICK", focus: "Industrial safety sensors and scanners", url: "https://www.sick.com" },
  { name: "Pilz", focus: "Safety relays and controllers", url: "https://www.pilz.com" },
  { name: "Schmersal", focus: "Safety switches and interlocks", url: "https://www.schmersal.com" },
  { name: "Allen-Bradley", focus: "Safety PLCs and controls", url: "https://www.rockwellautomation.com" },
  { name: "Odiz Safety", focus: "Machine safety controls and accessories", url: "https://www.odizsafety.com" },
  { name: "Cascade Coil", focus: "Coiled safety barriers and woven mesh", url: "https://www.cascadecoil.com" },
];

export default function LineCardsPage() {
  return (
    <>
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Authorized partners
          </p>
          <h1 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">
            {PARTNERS.length}+ brands. One installation team.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70 lg:text-lg">
            Guardomation is an authorized distributor and service partner for established machine safety manufacturers. We source, install, and stand behind the work — across press brakes, light curtains, fencing, interlocks, sensors, and controls.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Featured: Lazer Safe */}
          <div className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Master Distributorship
            </p>
            <div className="rounded-xl border-2 border-brand-red bg-brand-charcoal p-8 lg:p-10">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-white lg:text-4xl">Lazer Safe</h2>
                  <p className="mt-3 text-base text-brand-grey">
                    Appointed U.S. Master Distributor for Lazer Safe press brake retrofit systems. Sentinel, Sentinel Plus with Rapid Bend Plus, and full spare-parts support.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-5">
                    <Link
                      href="/press-brake-safety"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-amber hover:underline"
                    >
                      Explore systems
                      <span aria-hidden>→</span>
                    </Link>
                    <a
                      href="https://www.lazersafe.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-grey hover:text-brand-amber"
                    >
                      lazersafe.com ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All partners grid */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/60">
            Distributor partners
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.filter((p) => !p.featured).map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-brand-grey/30 bg-white p-5 transition-all hover:border-brand-red hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-brand-charcoal">{p.name}</h3>
                  <span className="text-xs text-brand-charcoal/40 group-hover:text-brand-red" aria-hidden>↗</span>
                </div>
                <p className="mt-1 text-sm text-brand-charcoal/60">{p.focus}</p>
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs text-brand-charcoal/50">
            Brand links open the manufacturer&rsquo;s official site in a new tab.
          </p>
        </div>
      </section>

      <section className="bg-brand-charcoal py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-white lg:text-4xl">
            Looking for a brand we don&rsquo;t list?
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            We work with most major machine safety manufacturers. Tell us what you&rsquo;re trying to source — we can usually get it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
          >
            Ask about a brand
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
