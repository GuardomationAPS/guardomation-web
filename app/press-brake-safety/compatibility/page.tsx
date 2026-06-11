import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Press Brake Compatibility — Lazer Safe Installs",
  description:
    "Lazer Safe retrofits we've completed on a wide range of press brake makes and models — Accurpress, Cincinnati, Diamond, Guifil, and more. Find yours.",
};

type Install = {
  make?: string;
  model?: string;
  photo: string;
  caption?: string;
  tonnage?: string;
  notes?: string;
  pending?: boolean; // true = brake identification not yet confirmed
};

const INSTALLS: Install[] = [
  // === Original archive (5 confirmed) ===
  {
    make: "Accurpress",
    model: "72501 (Advantage)",
    photo: "/photos/press-brake-rear-guarding.jpg",
    tonnage: "250 ton",
    caption: "Advantage panels with Sentinel Plus + integrated rear scissor gate guarding",
  },
  {
    make: "Accurpress",
    model: "713010",
    photo: "/photos/press-brake-accurpress.jpg",
    tonnage: "130 ton",
    caption: "Sentinel system mounted on a 10-ft Accurpress 713010",
  },
  {
    make: "Diamond",
    model: "DA8525",
    photo: "/photos/press-brake-diamond.jpg",
    tonnage: "85 ton · 8 ft",
    caption: "Diamond DA8525 Sentinel retrofit — clean install on a modern hydraulic brake",
  },
  {
    make: "Cincinnati",
    photo: "/photos/press-brake-cincinnati.jpg",
    caption: "Older Cincinnati hydraulic press brake — Sentinel installed alongside existing controls",
    notes: "Cincinnati brakes (including Iris / Iris Plus) — established retrofit candidate",
  },
  {
    make: "Guifil",
    photo: "/photos/press-brake-guifil.jpg",
    caption: "Guifil press brake with Sentinel retrofit",
  },

  // === LinkedIn archive — Accurpress family ===
  {
    make: "Accurpress",
    model: "Advantage 710010 — BEFORE",
    photo: "/photos/brake-accurpress-710010-before.jpg",
    caption: "Original LZS-003-HS guarding system installed ~20 years ago — same brake, before the Sentinel Plus upgrade",
    notes: "Paired with the AFTER photo — same brake, 20-year service life",
  },
  {
    make: "Accurpress",
    model: "Advantage 710010 — AFTER",
    photo: "/photos/brake-accurpress-710010-after.jpg",
    caption: "Same brake upgraded with a Lazer Safe Sentinel Plus guarding system — generational refresh",
    notes: "Lazer Safe stays current with the brake — not the other way around",
  },
  {
    make: "Accurpress",
    model: "Advantage 717516",
    photo: "/photos/brake-accurpress-advantage-717516.jpg",
    caption: "Advantage line Accurpress with factory-integrated Lazer Safe guarding",
  },
  {
    make: "Accurpress",
    model: "Advantage 725012",
    photo: "/photos/brake-accurpress-advantage-725012.jpg",
    caption: "Mid-size Accurpress Advantage with Sentinel-protected die area",
  },
  {
    make: "Accurpress",
    model: "Absolute",
    photo: "/photos/brake-accurpress-absolute.jpg",
    caption: "Accurpress Absolute (Y1/Y2 axes) with Lazer Safe transmitter/receiver pair mounted on stand-off brackets",
  },
  {
    make: "Accurpress",
    model: "Accell 425012",
    photo: "/photos/brake-accurpress-accell-425012.jpg",
    caption: "Accurpress with Accell tonnage side panels — Lazer Safe Sentinel installed at table level",
  },
  {
    make: "Accurpress",
    model: "Edge 5012",
    photo: "/photos/brake-accurpress-edge-5012.jpg",
    caption: "Accurpress Edge series with Lazer Safe behind the punch — clean modern install",
  },
  {
    make: "Accurpress",
    model: "7254",
    photo: "/photos/brake-accurpress-7254.jpg",
    caption: "Smaller Accurpress 7254 with Sentinel-protected work area",
  },
  {
    make: "Accurpress",
    model: "Advantage",
    photo: "/photos/brake-accurpress-advantage-warehouse.jpg",
    caption: "Accurpress Advantage with Sentinel install at customer warehouse",
  },

  // === LinkedIn archive — Amada family ===
  {
    make: "Amada",
    model: "HDS 1303 NT",
    photo: "/photos/brake-amada-hds1303nt.jpg",
    tonnage: "130 ton",
    caption: "Amada HDS 1303 NT — large-format Amada brake with Sentinel transmitter pair on the ram",
  },
  {
    make: "Amada",
    model: "Promecam",
    photo: "/photos/brake-amada-promecam.jpg",
    caption: "Classic Amada Promecam retrofit — Sentinel sensors on stand-off arms at table level",
  },
  {
    make: "Amada",
    model: "RG-35S",
    photo: "/photos/brake-amada-rg35s.jpg",
    caption: "Compact Amada RG-35S with Lazer Safe controller cabinet mounted alongside",
  },
  {
    make: "Amada",
    model: "NC9-EX1",
    photo: "/photos/brake-amada-nc9ex1.jpg",
    caption: "Amada NC9-EX1 with full Sentinel sensor pair at table level",
  },
  {
    make: "Amada",
    model: "3512 (red panel)",
    photo: "/photos/brake-amada-3512.jpg",
    caption: "Smaller Amada-style brake with Lazer Safe sensor pair and HMI display",
  },
  {
    make: "Amada",
    photo: "/photos/brake-amada-small-red.jpg",
    caption: "Smaller red Amada brake — Sentinel install at the table edge",
    pending: true,
  },

  // === LinkedIn archive — Cincinnati family ===
  {
    make: "Cincinnati",
    photo: "/photos/brake-cincinnati-modern.jpg",
    caption: "Modern blue Cincinnati hydraulic brake with Sentinel guarding installed",
  },
  {
    make: "Cincinnati",
    photo: "/photos/brake-cincinnati-target-zero.jpg",
    caption: "Cincinnati brake at a Target Zero Accidents shop floor — Sentinel HMI mounted on ram",
  },

  // === LinkedIn archive — Trumpf, Ermak, Clearing, KRRAS, Steel ===
  {
    make: "Trumpf",
    model: "TrumaBend V170",
    photo: "/photos/brake-trumpf-trumabend-v170.jpg",
    caption: "Trumpf TrumaBend V170 retrofitted with Lazer Safe — controller wired into the Trumpf cabinet",
  },
  {
    make: "Trumpf",
    model: "TrumaBend V130",
    photo: "/photos/brake-trumpf-trumabend-v130.jpg",
    caption: "Trumpf TrumaBend V130 with Lazer Safe sensors mounted at the table edge",
  },
  {
    make: "Ermak",
    model: "CNB HAP 12",
    photo: "/photos/brake-ermak-cnb-hap12.jpg",
    caption: "Ermak CNB HAP 12 — long-bed Ermak brake with Sentinel guarding",
  },
  {
    make: "Ermak",
    model: "CNC HAP 12' x 175 ton",
    photo: "/photos/brake-ermak-cnc-hap12-175.jpg",
    tonnage: "175 ton · 12 ft",
    caption: "Heavier Ermak CNC HAP with Sentinel HMI mounted on the ram face",
  },
  {
    make: "Clearing Niagara",
    model: "HBM-100-8-10",
    photo: "/photos/brake-clearing-niagara-hbm100.jpg",
    tonnage: "100 ton · 8 ft",
    caption: "Clearing Niagara HBM-100-8-10 retrofit — Sentinel sensors on both sides of the ram",
  },
  {
    make: "Clearing",
    model: "HBM (smaller)",
    photo: "/photos/brake-clearing-hbm-small.jpg",
    caption: "Smaller Clearing HBM brake with Sentinel sensor on the left ram corner",
  },
  {
    make: "KRRAS",
    photo: "/photos/brake-krras.jpg",
    caption: "KRRAS press brake with Lazer Safe sensors at table level + controller cabinet at front",
  },
  {
    photo: "/photos/brake-steel-asteel.jpg",
    caption: "Press brake (label partially visible) with Lazer Safe sensors mounted on white stand-off arms",
    notes: "Brand confirmation pending",
    pending: true,
  },

  // === Vintage / unknown make ===
  {
    photo: "/photos/brake-vintage-heavy.jpg",
    caption: "Heavy-duty vintage hydraulic press brake with Lazer Safe sensors on ram corners — proof Lazer Safe works on older iron",
    notes: "Make/model to confirm",
    pending: true,
  },
  {
    photo: "/photos/brake-vintage-cincinnati-advantage.jpg",
    caption: "Older brake with red Advantage-style side panels and Lazer Safe sensor mounted on the ram",
    notes: "Make to confirm",
    pending: true,
  },

  // === Pre-LinkedIn archive — keeping the original 4 ID-pending installs ===
  {
    photo: "/photos/install-161a0335.jpg",
    caption: "Heavy-tonnage hydraulic brake with extended tooling array — Sentinel transmitter mounted upper-right",
    pending: true,
  },
  {
    photo: "/photos/install-161a0471.jpg",
    caption: "Long-bed press brake with full die row — Sentinel system in field operation",
    pending: true,
  },
  {
    photo: "/photos/install-img9144.jpg",
    caption: "Upper-tool array with Sentinel sensor at the right side of the bed",
    pending: true,
  },
  {
    photo: "/photos/install-img9143.jpg",
    caption: "Wide view through the working area — sheet metal forming under Sentinel-protected die",
    pending: true,
  },
];

// Brake brands we've worked with but don't have install photos for yet
const BRAKES_WITHOUT_PHOTOS = [
  "Allied",
  "Bystronic",
  "Cincinnati Incorporated",
  "Dener",
  "Durma",
  "HACO",
  "JMT",
  "LVD",
  "Niagara",
  "Pacific",
  "Piranha",
  "Standard Industrial",
  "Toyokoki",
  "US Industrial Machinery",
  "Verson",
  "Wysong",
];

export default function CompatibilityPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link> · Compatibility
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
            Press brakes we&rsquo;ve retrofitted.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
            A growing gallery of Lazer Safe Sentinel and Sentinel Plus installs across U.S. shop floors. If you don&rsquo;t see your brake here, it doesn&rsquo;t mean we can&rsquo;t do it — send us your make, model, and tonnage and we&rsquo;ll come back with a quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?topic=press-brake-retrofit"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Ask about your brake
              <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+12812652832"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              (281) 265-2832
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                {INSTALLS.length} press brakes pictured · {INSTALLS.filter((i) => !i.pending).length} brand-confirmed
              </p>
              <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
                Find your brake.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {INSTALLS.map((install, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-xl border border-brand-grey/30 bg-white transition-all hover:border-brand-red hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal-dark">
                  <Image
                    src={install.photo}
                    alt={`${install.make ?? "Press brake"}${install.model ? ` ${install.model}` : ""} with Lazer Safe Sentinel installed`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-red px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white lg:left-4 lg:top-4 lg:gap-2 lg:px-3 lg:py-1 lg:text-xs">
                    <span className="h-1 w-1 rounded-full bg-brand-amber lg:h-1.5 lg:w-1.5" />
                    LS Installed
                  </div>
                  {install.pending && (
                    <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-amber/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal lg:right-4 lg:top-4 lg:px-3 lg:py-1 lg:text-xs">
                      ID pending
                    </div>
                  )}
                </div>
                <div className="p-3 lg:p-6">
                  {install.make ? (
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-red lg:text-xs lg:tracking-[0.2em]">{install.make}</p>
                  ) : (
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-charcoal/40 lg:text-xs lg:tracking-[0.2em]">Make to confirm</p>
                  )}
                  <h3 className="mt-0.5 text-sm font-bold text-brand-charcoal lg:mt-1 lg:text-xl">{install.model || "Hydraulic press brake"}</h3>
                  {install.tonnage && (
                    <p className="mt-0.5 text-xs font-semibold text-brand-charcoal/60 lg:mt-1 lg:text-sm">{install.tonnage}</p>
                  )}
                  {install.caption && (
                    <p className="mt-2 hidden text-sm leading-relaxed text-brand-charcoal/70 lg:mt-3 lg:block">{install.caption}</p>
                  )}
                  {install.notes && (
                    <p className="mt-2 hidden rounded-md bg-brand-cream p-2 text-xs italic text-brand-charcoal/70 lg:mt-3 lg:block">{install.notes}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brakes-we-know-but-don't-have-photos */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            We&rsquo;ve also worked on
          </p>
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Other brake brands in the field.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-charcoal/70">
            Photos coming as we add them. Don&rsquo;t see yours? Send us the make, model, and tonnage — we&rsquo;ve installed Lazer Safe on a much wider range than what&rsquo;s pictured.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {BRAKES_WITHOUT_PHOTOS.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-brand-grey/30 bg-brand-cream px-4 py-1.5 text-sm font-medium text-brand-charcoal/70"
              >
                {brand}
              </span>
            ))}
            <span className="rounded-full border border-brand-red/30 bg-brand-red/5 px-4 py-1.5 text-sm font-semibold text-brand-red">
              + many more
            </span>
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-white lg:text-4xl">
            Don&rsquo;t see your brake? We&rsquo;ve probably done it.
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Send us your make, model, tonnage, and a few photos. We&rsquo;ll come back with a straight answer on whether it&rsquo;s a candidate and what a retrofit would look like.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?topic=press-brake-retrofit"
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
            >
              Request a quote
              <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+12812652832"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
            >
              (281) 265-2832
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
