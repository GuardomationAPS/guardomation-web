import Link from "next/link";
import Image from "next/image";

const FOOTER_NAV = {
  Solutions: [
    { label: "Press Brake Safety", href: "/press-brake-safety" },
    { label: "Lazer Safe Sentinel Plus", href: "/press-brake-safety/sentinel-plus" },
    { label: "Rear Guarding", href: "/press-brake-safety/rear-guarding" },
    { label: "Machine Guarding", href: "/search" },
    { label: "Anti-Restart Controls (GS Series)", href: "/search/anti-restart-controls" },
    { label: "Safety Assessments", href: "/services" },
  ],
  Shop: [
    { label: "All Products", href: "/search" },
    { label: "Anti-Restart Controls", href: "/search/anti-restart-controls" },
    { label: "Light Curtains", href: "/search/light-curtains" },
    { label: "E-Stops", href: "/search/emergency-stops" },
    { label: "Press Brake Guards", href: "/search/press-brake-guards" },
    { label: "Drill Press Guards", href: "/search/drill-press-guards" },
  ],
  Company: [
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
    { label: "Authorized Partners", href: "/line-cards" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-charcoal text-brand-grey">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-block rounded bg-white p-3">
              <Image
                src="/brand/guardomation-logo.jpg"
                alt="Guardomation — Machine Guarding Solutions"
                width={220}
                height={44}
                className="h-auto w-auto"
                style={{ maxHeight: "44px" }}
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              U.S. Master Distributor for Lazer Safe and the country&rsquo;s most comprehensive machine guarding partner. Three decades guarding press brakes, shears, turret presses, robot cells, and every machine in between.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+12812652832"
                className="flex items-center gap-3 text-white transition-colors hover:text-brand-amber"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-brand-amber">
                  ☎
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-grey">Call</div>
                  <div className="font-display text-lg font-semibold">(281) 265-2832</div>
                </div>
              </a>
              <a
                href="mailto:info@guardomation.com"
                className="flex items-center gap-3 text-white transition-colors hover:text-brand-amber"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-brand-amber">
                  ✉
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-grey">Email</div>
                  <div className="font-display text-lg font-semibold">info@guardomation.com</div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {Object.entries(FOOTER_NAV).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                  {heading}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-grey transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-brand-grey/70 lg:flex-row lg:items-center lg:px-8">
          <p>
            &copy; {currentYear} Guardomation APS LLC. All rights reserved. &nbsp;·&nbsp; U.S. Master Distributor for Lazer Safe.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span className="text-brand-grey/30">·</span>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span className="text-brand-grey/30">·</span>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
