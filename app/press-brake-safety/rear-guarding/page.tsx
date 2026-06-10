import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Press Brake Rear Guarding",
  description:
    "Interlocked press brake rear-area scissor gate. Expandable aluminum barrier in safety yellow + black. Sizes from 4ft to 6ft high, 76\" to 140\" wide.",
};

const SIZES_4FT = [
  { code: "KT-RG3-4076", width: "76\"" },
  { code: "KT-RG3-4100", width: "100\"" },
  { code: "KT-RG3-4124", width: "124\"" },
  { code: "KT-RG3-4140", width: "140\"" },
];
const SIZES_5FT = [
  { code: "KT-RG3-5076", width: "76\"" },
  { code: "KT-RG3-5100", width: "100\"" },
  { code: "KT-RG3-5124", width: "124\"" },
  { code: "KT-RG3-5140", width: "140\"" },
];
const SIZES_6FT = [
  { code: "KT-RG3-6076", width: "76\"" },
  { code: "KT-RG3-6100", width: "100\"" },
  { code: "KT-RG3-6124", width: "124\"" },
  { code: "KT-RG3-6140", width: "140\"" },
];

export default function RearGuardingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/photos/press-brake-rear-guarding.jpg"
            alt="Accurpress press brake with Lazer Safe sensors and yellow rear guarding installed"
            fill
            priority
            quality={85}
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/50 to-brand-charcoal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link> · Rear Guarding
            </p>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-amber px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Interlocked Scissor Gate
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Press brake rear guarding.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey lg:text-xl">
              Protect the rear access space from personnel on every press brake. Expandable scissor-type guard, electrically interlocked, opens completely for maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            How it works.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-charcoal/80">
            Our expandable scissor-type press brake rear guard is electrically interlocked and can open completely to allow maintenance functions without restriction. Choose the size below that&rsquo;s closest to your horizontal rear opening and pick your height. If the guard requires a stand-off due to obstructions like back-gauge arms, indicate the width needed for installation of side wings.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Construction", value: "Expandable aluminum barrier kit" },
              { label: "Color", value: "Safety yellow + black" },
              { label: "Interlock", value: "Electrically interlocked to the press" },
              { label: "Access", value: "Opens completely for maintenance" },
              { label: "Includes", value: "Mounting brackets" },
              { label: "Optional", value: "Stand-off side wings for back-gauge clearance" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-brand-grey/30 bg-brand-cream p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">{item.label}</div>
                <div className="mt-1 text-base font-semibold text-brand-charcoal">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Sizes &amp; model numbers.
          </h2>
          <p className="mt-4 text-base text-brand-charcoal/70">
            Heights in three sizes; four expanded widths each. Folded dimensions vary by width — ask us for the exact folded size when ordering.
          </p>

          <div className="mt-10 space-y-8">
            <SizeGroup label="4 ft high (47.5&quot;)" sizes={SIZES_4FT} />
            <SizeGroup label="5 ft high (61.5&quot;)" sizes={SIZES_5FT} />
            <SizeGroup label="6 ft high" sizes={SIZES_6FT} />
          </div>

          <p className="mt-10 text-sm text-brand-charcoal/60">
            Pricing varies by size and configuration. <Link href="/contact" className="font-semibold text-brand-red hover:underline">Request a quote</Link> with your specs and we&rsquo;ll come back with the right size + price.
          </p>
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
            Need a size that&rsquo;s not listed?
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            We can design custom rear guarding for unusual openings or stand-off requirements. Tell us your dimensions and we&rsquo;ll engineer it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
          >
            Request custom rear guarding
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

function SizeGroup({ label, sizes }: { label: string; sizes: { code: string; width: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-brand-charcoal/60">{label}</h3>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {sizes.map((s) => (
          <div key={s.code} className="flex items-center justify-between rounded-lg border border-brand-grey/30 bg-white p-4">
            <div>
              <div className="font-display text-sm font-bold text-brand-charcoal">{s.code}</div>
              <div className="text-xs text-brand-charcoal/60">{s.width} expanded</div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Quote</span>
          </div>
        ))}
      </div>
    </div>
  );
}
