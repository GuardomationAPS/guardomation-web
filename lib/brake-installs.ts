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
  system?: "Sentinel Plus" | "Sentinel Plus Automatic" | "Sentinel" | "LZS-003-HS"; // which Lazer Safe system
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
    model: "RG-50",
    photo: "/photos/brake-amada-small-red.jpg",
    caption: "Compact Amada RG-50 — Sentinel install at the table edge",
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
    make: "KRRAS",
    photo: "/photos/brake-krras.jpg",
    caption: "KRRAS press brake with Lazer Safe sensors at table level + controller cabinet at front",
  },
  {
    make: "Allsteel",
    photo: "/photos/brake-allsteel.jpg",
    caption: "Allsteel press brake with Lazer Safe sensors mounted on white stand-off arms",
  },

  // === Older / hand-identified ===
  {
    make: "Cincinnati",
    photo: "/photos/brake-cincinnati-older.jpg",
    caption: "Heavy-duty older Cincinnati hydraulic press brake — Lazer Safe sensors mounted on the ram corners",
  },
  {
    make: "Accurpress",
    model: "7-series Advantage",
    photo: "/photos/brake-accurpress-7series-advantage.jpg",
    caption: "Accurpress 7-series Advantage with Lazer Safe sensor mounted on the ram",
  },

  // === 2026 Drive-folder archive — Sentinel Plus retrofits ===
  // Accurpress
  {
    make: "Accurpress",
    model: "4ft Rockerarm",
    photo: "/photos/installs/accurpress-4ft-rockerarm.jpg",
    caption: "Compact 4-ft rockerarm Accurpress retrofitted with Sentinel Plus",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Accell",
    photo: "/photos/installs/accurpress-accell.jpg",
    caption: "Accurpress Accell with Sentinel Plus — sensors mounted in line with the ram",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Accell (custom brackets)",
    photo: "/photos/installs/accurpress-accell-brackets.jpg",
    caption: "Accurpress Accell with Sentinel Plus on custom stand-off brackets for awkward die geometry",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Advantage (2)",
    photo: "/photos/installs/accurpress-advantage-2.jpg",
    caption: "A second Accurpress Advantage build with Sentinel Plus — different shop, same system",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Advantage — BEFORE (LZS-003-HS)",
    photo: "/photos/installs/accurpress-advantage-lzs003-before.jpg",
    caption: "The original LZS-003-HS guarding system on an Accurpress Advantage — 20+ years of service before upgrade",
    system: "LZS-003-HS",
  },
  {
    make: "Accurpress",
    model: "Advantage — AFTER (Sentinel Plus)",
    photo: "/photos/installs/accurpress-advantage-lzs003-after.jpg",
    caption: "Same Advantage brake, now upgraded to Sentinel Plus — generational refresh on a 20-year-old install",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Edge",
    photo: "/photos/installs/accurpress-edge.jpg",
    caption: "Accurpress Edge with Sentinel Plus integrated into the existing control envelope",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Edge ETS3000",
    photo: "/photos/installs/accurpress-edge-ets3000.jpg",
    caption: "Accurpress Edge ETS3000 — Sentinel Plus with full operator-interface tie-in",
    system: "Sentinel Plus",
  },
  {
    make: "Accurpress",
    model: "Rockerarm",
    photo: "/photos/installs/accurpress-rockerarm.jpg",
    caption: "Larger Accurpress rockerarm with Sentinel Plus sensors on the ram",
    system: "Sentinel Plus",
  },

  // Allsteel
  {
    make: "Allsteel",
    photo: "/photos/installs/allsteel-1.jpg",
    caption: "Allsteel press brake retrofitted with Sentinel Plus — clean install on the table edge",
    system: "Sentinel Plus",
  },
  {
    make: "Allsteel",
    photo: "/photos/installs/allsteel-2.jpg",
    caption: "Another Allsteel install — Sentinel Plus controller and sensor pair from a different angle",
    system: "Sentinel Plus",
  },

  // Amada
  {
    make: "Amada",
    model: "FBD NC9-EXII",
    photo: "/photos/installs/amada-fbd-nc9-exii.jpg",
    caption: "Amada FBD NC9-EXII with Sentinel Plus — sensors on extended horizontal brackets",
    system: "Sentinel Plus",
  },
  {
    make: "Amada",
    model: "FBDIIINT",
    photo: "/photos/installs/amada-fbdiiint.jpg",
    caption: "Amada FBDIII NT with Sentinel Plus — PGS-IM2 interface tied into the original Amada cabinet",
    system: "Sentinel Plus",
  },
  {
    make: "Amada",
    model: "HFBO",
    photo: "/photos/installs/amada-hfbo.jpg",
    caption: "Amada HFBO with Sentinel Plus — heavy hydraulic brake, custom interface harness",
    system: "Sentinel Plus",
  },
  {
    make: "Amada",
    model: "RG NC9-EXII",
    photo: "/photos/installs/amada-rg-nc9-exii.jpg",
    caption: "Amada RG NC9-EXII with Sentinel Plus — interface cabinet mounted to the side of the brake",
    system: "Sentinel Plus",
  },
  {
    make: "Amada",
    model: "RG-80",
    photo: "/photos/installs/amada-rg-80.jpg",
    caption: "Compact Amada RG-80 with Sentinel Plus",
    system: "Sentinel Plus",
  },
  {
    make: "Amada",
    model: "RGM2",
    photo: "/photos/installs/amada-rgm2.jpg",
    caption: "Amada RGM2 with Sentinel Plus — clean ram-mounted sensor configuration",
    system: "Sentinel Plus",
  },
  {
    make: "Amada",
    model: "RGM2 (alt)",
    photo: "/photos/installs/amada-rgm2-alt.jpg",
    caption: "Second Amada RGM2 build — Sentinel Plus with side-mounted interface cabinet",
    system: "Sentinel Plus",
  },

  // Other Sentinel Plus makes
  {
    make: "Betenbender",
    photo: "/photos/installs/betenbender.jpg",
    caption: "Betenbender press brake retrofitted with Sentinel Plus",
    system: "Sentinel Plus",
  },
  {
    make: "Bystronic",
    model: "Xpert 150 — BEFORE",
    photo: "/photos/installs/bystronic-xpert-150-before.jpg",
    caption: "Bystronic Xpert 150 before retrofit — original guarding configuration",
  },
  {
    make: "Bystronic",
    model: "Xpert 150 — AFTER",
    photo: "/photos/installs/bystronic-xpert-150-after.jpg",
    caption: "Same Xpert 150 with Sentinel Plus and PGS-3 interface — a clean Bystronic retrofit",
    system: "Sentinel Plus",
  },
  {
    make: "Cincinnati",
    model: "AutoForm",
    photo: "/photos/installs/cincinnati-autoform.jpg",
    caption: "Cincinnati AutoForm with Sentinel Plus — modern hybrid brake retrofit",
    system: "Sentinel Plus",
  },
  {
    make: "Cincinnati",
    model: "FMII",
    photo: "/photos/installs/cincinnati-fmii.jpg",
    caption: "Cincinnati FMII with Sentinel Plus — controller wired into the existing Cincinnati panel",
    system: "Sentinel Plus",
  },
  {
    make: "Dener",
    photo: "/photos/installs/dener.jpg",
    caption: "Dener press brake with Sentinel Plus",
    system: "Sentinel Plus",
  },
  {
    make: "Ermak",
    model: "2023 build",
    photo: "/photos/installs/ermak-2023.jpg",
    caption: "Ermak press brake with Sentinel Plus guarding — 2023 retrofit",
    system: "Sentinel Plus",
  },
  {
    make: "KRRAS",
    model: "Sentinel Plus build",
    photo: "/photos/installs/krras-sentinel-plus.jpg",
    caption: "KRRAS press brake with Sentinel Plus — cleaner build than the earlier Sentinel install",
    system: "Sentinel Plus",
  },
  {
    make: "KRRAS",
    model: "FCNC",
    photo: "/photos/installs/krras-fcnc.jpg",
    caption: "KRRAS FCNC variant — Sentinel Plus with custom interface routing",
    system: "Sentinel Plus",
  },
  {
    make: "Masteel",
    photo: "/photos/installs/masteel.jpg",
    caption: "Masteel press brake with Sentinel Plus guarding system",
    system: "Sentinel Plus",
  },
  {
    make: "Pacific",
    model: "J Series",
    photo: "/photos/installs/pacific-j-series.jpg",
    caption: "Pacific J Series with dual Sentinel Plus guarding",
    system: "Sentinel Plus",
  },
  {
    make: "Trumpf",
    model: "V Series",
    photo: "/photos/installs/trumpf-v-series.jpg",
    caption: "Trumpf V Series with Sentinel Plus — controller tied into the Trumpf safety bus",
    system: "Sentinel Plus",
  },
  {
    make: "Trumpf",
    model: "TrumaBend V130 (detail)",
    photo: "/photos/installs/trumpf-v130-detail.jpg",
    caption: "Detail of the Sentinel Plus install on a Trumpf TrumaBend V130",
    system: "Sentinel Plus",
  },
  {
    make: "Trumpf",
    model: "TrumaBend V170 (detail)",
    photo: "/photos/installs/trumpf-v170-detail.jpg",
    caption: "Detail of the Sentinel Plus install on a Trumpf TrumaBend V170",
    system: "Sentinel Plus",
  },
  {
    make: "Toyokoki",
    model: "HYB",
    photo: "/photos/installs/toyokoki-hyb.jpg",
    caption: "Toyokoki HYB press brake retrofitted with Sentinel Plus",
    system: "Sentinel Plus",
  },
  {
    make: "Toyokoki",
    model: "HYB-125",
    photo: "/photos/installs/toyokoki-hyb-125.jpg",
    caption: "Toyokoki HYB-125 — Sentinel Plus with hardware mounted at the table edge",
    system: "Sentinel Plus",
  },
  {
    make: "Wysong",
    model: "MTH",
    photo: "/photos/installs/wysong-mth.jpg",
    caption: "Wysong MTH retrofitted with Sentinel Plus",
    system: "Sentinel Plus",
  },

  // === Sentinel Plus AUTOMATIC (motorised bracket systems) ===
  {
    make: "Accurpress",
    model: "Absolute (Automatic)",
    photo: "/photos/installs/auto-accurpress-absolute.jpg",
    caption: "Accurpress Absolute with Sentinel Plus Automatic — motorised brackets reposition the sensor pair on each bend",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Accurpress",
    model: "Accell (Automatic)",
    photo: "/photos/installs/auto-accurpress-accell.jpg",
    caption: "Accurpress Accell with Sentinel Plus Automatic — full hands-free reconfiguration between dies",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Accurpress",
    model: "Accell (Automatic — brackets)",
    photo: "/photos/installs/auto-accurpress-accell-brackets.jpg",
    caption: "Detail of the motorised bracket mounts on an Accurpress Accell Sentinel Plus Automatic install",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Accurpress",
    model: "Edge (Automatic)",
    photo: "/photos/installs/auto-accurpress-edge.jpg",
    caption: "Accurpress Edge with Sentinel Plus Automatic motorised brackets",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Accurpress",
    model: "Series 7 (Automatic)",
    photo: "/photos/installs/auto-accurpress-series-7.jpg",
    caption: "Accurpress Series 7 with Sentinel Plus Automatic — high-throughput shop install",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Accurpress",
    model: "Rockerarm (Automatic)",
    photo: "/photos/installs/auto-accurpress-rockerarm.jpg",
    caption: "Accurpress rockerarm with Sentinel Plus Automatic — motorised brackets on a non-standard ram geometry",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Amada",
    model: "FBDIIINT (Automatic)",
    photo: "/photos/installs/auto-amada-fbdiiint.jpg",
    caption: "Amada FBDIIINT with Sentinel Plus Automatic — motorised brackets integrated with Amada's existing safety bus",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Amada",
    model: "HDS 1303 NT (Automatic)",
    photo: "/photos/installs/auto-amada-hds-1303nt.jpg",
    caption: "Amada HDS 1303 NT with Sentinel Plus Automatic",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Amada",
    model: "RG (Automatic)",
    photo: "/photos/installs/auto-amada-rg.jpg",
    caption: "Amada RG with Sentinel Plus Automatic motorised brackets",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Amada",
    model: "RG-35 (Automatic)",
    photo: "/photos/installs/auto-amada-rg-35.jpg",
    caption: "Amada RG-35 with Sentinel Plus Automatic — compact build with motorised brackets",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Ermak",
    model: "Sentinel Plus Automatic",
    photo: "/photos/installs/auto-ermak.jpg",
    caption: "Ermak press brake with Sentinel Plus Automatic",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Chicago",
    photo: "/photos/installs/auto-chicago.jpg",
    caption: "Chicago press brake with Sentinel Plus Automatic motorised brackets",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Murata",
    model: "BH",
    photo: "/photos/installs/auto-murata-bh.jpg",
    caption: "Murata BH press brake with Sentinel Plus Automatic",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Pacific",
    model: "J Series (Automatic)",
    photo: "/photos/installs/auto-pacific-j-series.jpg",
    caption: "Pacific J Series with Sentinel Plus Automatic — upgrade from the earlier dual-guarding build",
    system: "Sentinel Plus Automatic",
  },
  {
    make: "Accurpress",
    model: "Sentinel Plus Automatic",
    photo: "/photos/installs/auto-accurpress-generic.jpg",
    caption: "Another Accurpress Sentinel Plus Automatic install — motorised bracket detail",
    system: "Sentinel Plus Automatic",
  },

];

export const BRAKES_WITHOUT_PHOTOS = [
  "Allied",
  "Cincinnati Incorporated",
  "Durma",
  "HACO",
  "JMT",
  "LVD",
  "Niagara",
  "Piranha",
  "Standard Industrial",
  "US Industrial Machinery",
  "Verson",
];

// Helper: list of unique makes, alphabetically, with their install counts.
// Used by the compatibility page to build the jump-nav at top.
export function getMakesWithCounts() {
  const counts = new Map<string, number>();
  for (const i of INSTALLS) {
    const make = i.make ?? "Unidentified";
    counts.set(make, (counts.get(make) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([make, count]) => ({
      make,
      count,
      slug: make.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    }))
    .sort((a, b) => a.make.localeCompare(b.make));
}

// Helper: installs grouped by make (alphabetical).
export function getInstallsByMake() {
  const groups = new Map<string, Install[]>();
  for (const i of INSTALLS) {
    const make = i.make ?? "Unidentified";
    if (!groups.has(make)) groups.set(make, []);
    groups.get(make)!.push(i);
  }
  return Array.from(groups.entries())
    .map(([make, installs]) => ({
      make,
      installs,
      slug: make.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    }))
    .sort((a, b) => a.make.localeCompare(b.make));
}

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
