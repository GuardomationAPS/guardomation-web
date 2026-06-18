import Link from "next/link";

// Equipment categories. Route to search queries (not Shopify collections) until
// proper collections are built in admin — search/?q= always returns results, while
// /search/<slug> 404s if the collection handle doesn't exist.
const EQUIPMENT_CATEGORIES = [
  { name: "Anti-Restart Controls", href: "/search?q=anti-restart" },
  { name: "Drill Press Guards", href: "/search?q=drill+press" },
  { name: "Press Safety Clutch Valves", href: "/search?q=clutch+valve" },
  { name: "Emergency Stops", href: "/search?q=emergency+stop" },
  { name: "Milling Machine Guards", href: "/search?q=milling+machine" },
  { name: "Grinder Guards", href: "/search?q=grinder" },
  { name: "Band Saw Guards", href: "/search?q=band+saw" },
  { name: "Light Curtains", href: "/search?q=light+curtain" },
  { name: "Safety Mats", href: "/search?q=safety+mat" },
  { name: "Interlock Switches", href: "/search?q=interlock" },
  { name: "Guarding Fences & Gates", href: "/search?q=fence" },
  { name: "Motor Braking Systems", href: "/search?q=motor+brake" },
];

export default function EquipmentGrid() {
  return (
    <section className="bg-brand-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            By equipment type
          </p>
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Find guarding for your machine.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {EQUIPMENT_CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group rounded-lg border border-brand-grey/30 bg-white p-5 transition-all hover:border-brand-red hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-brand-charcoal lg:text-base">
                {cat.name}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-charcoal/50 transition-colors group-hover:text-brand-red">
                Browse <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
