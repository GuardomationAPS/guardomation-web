import Link from "next/link";

// Equipment categories. Collections with confirmed products use Shopify collection routes
// (/search/<slug>); those still being populated route to a search query to avoid 404ing
// when the Shopify collection doesn't exist yet. Flip to the collection route once the
// expansion CSV gets imported and the collection is live.
const EQUIPMENT_CATEGORIES = [
  { name: "Anti-Restart Controls", href: "/search/anti-restart-controls" },
  { name: "Drill Press Guards", href: "/search/drill-press-guards" },
  { name: "Press Safety Clutch Valves", href: "/search/press-safety-clutch-valves" },
  { name: "Emergency Stops", href: "/search/emergency-stops" },
  { name: "Milling Machine Guards", href: "/search/milling-machine-guards" },
  { name: "Grinder Guards", href: "/search/grinder-guards" },
  { name: "Band Saw Guards", href: "/search/band-saw-guards" },
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
