import Link from "next/link";

// Static category list mirroring the imported product types
const CATEGORIES = [
  { label: "All products", q: "", count: null },
  { label: "Anti-Restart Controls", q: "anti-restart", count: 12 },
  { label: "Drill Press Guards", q: "drill press", count: 5 },
  { label: "Press Safety Clutch Valves", q: "clutch valve", count: 4 },
  { label: "Emergency Stops", q: "emergency stop", count: 3 },
  { label: "Milling Machine Guards", q: "milling", count: 3 },
  { label: "Grinder Guards", q: "grinder", count: 3 },
  { label: "Band Saw Guards", q: "band saw", count: 2 },
  { label: "Stop Time Measurement", q: "stop time", count: 1 },
];

export default function CategoryFilter({ active }: { active?: string }) {
  return (
    <ul className="space-y-1.5">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.q || (!active && cat.q === "");
        const href = cat.q ? `/search?q=${encodeURIComponent(cat.q)}` : "/search";
        return (
          <li key={cat.label}>
            <Link
              href={href}
              className={`group flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-all ${
                isActive
                  ? "bg-brand-red text-white font-semibold"
                  : "text-brand-charcoal/80 hover:bg-brand-cream hover:text-brand-red"
              }`}
            >
              <span>{cat.label}</span>
              {cat.count !== null && (
                <span
                  className={`text-xs ${
                    isActive ? "text-white/80" : "text-brand-charcoal/40"
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
