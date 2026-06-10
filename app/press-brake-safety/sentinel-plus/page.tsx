import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lazer Safe Sentinel Plus",
  description:
    "Sentinel Plus is Lazer Safe's most advanced camera-based press brake guarding system. Rapid Bend Plus technology, automatic tool alignment, multiple operating modes — installed and serviced by Guardomation.",
};

export default function SentinelPlusPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/photos/sentinel-plus-hero.jpg"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover opacity-30"
            style={{ objectPosition: "65% 30%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/50 to-brand-charcoal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <Link href="/press-brake-safety" className="hover:underline">Press Brake Safety</Link> · Sentinel Plus
            </p>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              Flagship Lazer Safe System
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Sentinel Plus.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey lg:text-xl">
              Lazer Safe&rsquo;s most advanced press brake guarding system designed for retrofit applications. Camera-based, optimized for high-speed performance machines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            Go faster than ever before.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-charcoal/80">
            The Sentinel Plus Press Brake Guarding System includes <strong>Rapid Bend Plus</strong> technology. Rapid Bend Plus works with flat sheets and box profile parts, so the machine can close at high speed right down to 2mm above the material — significantly boosting your productivity.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <FeatureRow title="Automatic mute-point" desc="Mute-point is easily set according to material position and optically verified automatically on every cycle." />
            <FeatureRow title="Graphical user interface" desc="GUI panel displays system and machine status in real time. Simple instructions and messages make the system easy to operate." />
            <FeatureRow title="Multiple operating modes" desc="Modes for any shape and profile of work piece. Press a button to select the mode that best suits each bend job." />
            <FeatureRow title="Integrated status LEDs" desc="LEDs on the transmitter and receiver make set-up and adjustment simpler and faster." />
            <FeatureRow title="Speed monitoring" desc="Automatic monitoring of machine speed and stopping performance." />
            <FeatureRow title="Quick adjust brackets" desc="Tool-lock brackets keep the transmitter and receiver clear during tool change." />
            <FeatureRow title="Automatic tool alignment" desc="Simple tool change that takes only a matter of seconds." />
            <FeatureRow title="Special Tools Mode" desc="Automatically detects and adjusts for any size and profile tool." />
            <FeatureRow title="Optional machine safety monitoring" desc="Monitor additional safety elements — e-stop buttons, side and rear gate interlock switches — with real-time status on the GUI panel." />
            <FeatureRow title="Dual guarding option" desc="Combine with a light curtain for layered protection on demanding applications." />
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-brand-charcoal lg:text-4xl">
            What ships with a Sentinel Plus retrofit.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Sentinel Plus camera-based AOPD system",
              "Mounting hardware sized to your brake",
              "Interface equipment to your press control",
              "Required consumables",
              "On-site installation by experienced field engineers",
              "Operator training with sign-off documentation",
              "Travel costs included in the quote",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                <span className="text-sm text-brand-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal-dark py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
            Ready to spec a Sentinel Plus install?
          </h2>
          <p className="max-w-xl text-base text-brand-grey">
            Send us your brake make/model, tonnage, and a few photos. We&rsquo;ll come back with a quote.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
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

function FeatureRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-brand-grey/30 bg-white p-5 transition-all hover:border-brand-red hover:shadow-sm">
      <h3 className="text-base font-bold text-brand-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">{desc}</p>
    </div>
  );
}
