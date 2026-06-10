import Link from "next/link";

const MACHINES = [
  { label: "All machines", q: "" },
  { label: "Press Brakes", q: "press brake" },
  { label: "Punch Presses", q: "press" },
  { label: "Shears", q: "shear" },
  { label: "Lathes", q: "lathe" },
  { label: "Drill Presses", q: "drill press" },
  { label: "Grinders", q: "grinder" },
  { label: "Band Saws", q: "band saw" },
  { label: "Milling Machines", q: "milling" },
  { label: "Robot Cells", q: "robot" },
];

export default function MachineFilter({ active }: { active?: string }) {
  return (
    <ul className="space-y-1.5">
      {MACHINES.map((m) => {
        const isActive = active === m.q || (!active && m.q === "");
        const href = m.q ? `/search?q=${encodeURIComponent(m.q)}` : "/search";
        return (
          <li key={m.label}>
            <Link
              href={href}
              className={`block rounded-md px-3 py-2 text-sm transition-all ${
                isActive
                  ? "bg-brand-amber text-brand-charcoal font-semibold"
                  : "text-brand-charcoal/80 hover:bg-brand-cream hover:text-brand-red"
              }`}
            >
              {m.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
