import Link from "next/link";

const EQUIPMENT_CATEGORIES = [
  { name: "Anti-Restart Controls", slug: "anti-restart-controls", count: 12 },
  { name: "Drill Press Guards", slug: "drill-press-guards", count: 5 },
  { name: "Press Safety Clutch Valves", slug: "press-safety-clutch-valves", count: 4 },
  { name: "Emergency Stops", slug: "emergency-stops", count: 3 },
  { name: "Milling Machine Guards", slug: "milling-machine-guards", count: 3 },
  { name: "Grinder Guards", slug: "grinder-guards", count: 3 },
  { name: "Band Saw Guards", slug: "band-saw-guards", count: 2 },
  { name: "Light Curtains", slug: "light-curtains", count: 0 },
  { name: "Safety Mats", slug: "safety-mats", count: 0 },
  { name: "Interlock Switches", slug: "interlock-switches", count: 0 },
  { name: "Guarding Fences & Gates", slug: "guarding-fences-gates", count: 0 },
  { name: "Motor Braking Systems", slug: "motor-braking", count: 0 },
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
              key={cat.slug}
              href={`/search/${cat.slug}`}
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
