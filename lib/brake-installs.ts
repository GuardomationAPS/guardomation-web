// Shared source of truth for the press-brake install gallery.
// Used by:
// - /press-brake-safety/compatibility (full gallery grid)
// - /press-brake-safety (rotating carousel preview)
// - /                                (homepage preview, if wired)
//
// Add new installs here and they appear everywhere.

export type Install = {
  make?: string;
  model?: string;
  photo: string;
  caption?: string;
  tonnage?: string;
  notes?: string;
  pending?: boolean; // true = brake identification not yet confirmed
};

export const INSTALLS: Install[] = [
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
    make: "Allsteel",
    photo: "/photos/brake-allsteel.jpg",
    caption: "Allsteel press brake with Lazer Safe sensors mounted on white stand-off arms",
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

];

export const BRAKES_WITHOUT_PHOTOS = [
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

// Helper: map INSTALLS → carousel photo array (just the fields the carousel needs).
// Drops the "ID pending" entries from the carousel preview since they don't tell as
// strong a story as the brand-confirmed installs.
export function installsToCarouselPhotos() {
  return INSTALLS.filter((i) => !i.pending).map((i) => ({
    src: i.photo,
    alt: `${i.make ?? "Press brake"}${i.model ? ` ${i.model}` : ""} with Lazer Safe Sentinel installed`,
    caption:
      i.make
        ? `${i.make}${i.model ? ` ${i.model}` : ""}${i.tonnage ? ` · ${i.tonnage}` : ""}`
        : i.caption,
  }));
}
