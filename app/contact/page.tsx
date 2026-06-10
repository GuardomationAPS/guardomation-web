import Footer from "components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description:
    "Talk to a Guardomation machine guarding specialist. Phone, email, or quote request. U.S. Master Distributor for Lazer Safe.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Get in touch
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Talk to a machine guarding specialist.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey">
              Lazer Safe retrofit, custom fencing, or a full plant safeguarding assessment — we&rsquo;ve installed it before. Call, email, or fill out the form and we&rsquo;ll come back with next steps.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="tel:+12812652832"
                className="group flex items-center gap-5 rounded-xl border border-white/10 bg-brand-charcoal/80 p-7 transition-all hover:border-brand-amber hover:bg-brand-charcoal"
              >
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-brand-amber/40 text-2xl text-brand-amber">
                  ☎
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-brand-grey">Call</div>
                  <div className="font-display text-2xl font-bold text-white">(281) 265-2832</div>
                  <div className="mt-1 text-sm text-brand-grey">Mon–Fri 8a–5p CT · Mobile: (281) 384-6607</div>
                </div>
              </a>

              <a
                href="mailto:info@guardomation.com"
                className="group flex items-center gap-5 rounded-xl border border-white/10 bg-brand-charcoal/80 p-7 transition-all hover:border-brand-amber hover:bg-brand-charcoal"
              >
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-brand-amber/40 text-2xl text-brand-amber">
                  ✉
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-brand-grey">Email</div>
                  <div className="font-display text-2xl font-bold text-white">info@guardomation.com</div>
                  <div className="mt-1 text-sm text-brand-grey">Simple quotes within the week. Complex jobs may need a site visit.</div>
                </div>
              </a>

              <div className="rounded-xl border border-white/10 bg-brand-charcoal/50 p-7">
                <div className="text-xs uppercase tracking-[0.15em] text-brand-amber">Fax</div>
                <div className="font-display mt-1 text-xl font-bold text-white">(281) 265-1276</div>
              </div>
            </div>

            {/* Quote form */}
            <form
              className="rounded-xl border border-white/10 bg-brand-charcoal/80 p-7 lg:p-10"
              action="mailto:info@guardomation.com"
              method="post"
              encType="text/plain"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                Request a quote
              </p>
              <h2 className="text-2xl font-bold text-white">Tell us about your application</h2>

              <div className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" type="tel" name="phone" />
                </div>
                <Field label="Machine make / model" name="machine" placeholder="e.g. Cincinnati 1000-20 press brake" />

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
                    What do you need?
                  </label>
                  <select
                    name="topic"
                    className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-amber focus:outline-none"
                  >
                    <option value="press-brake-retrofit">Lazer Safe press brake retrofit</option>
                    <option value="rear-guarding">Press brake rear guarding</option>
                    <option value="light-curtain">Light curtain / safety mat</option>
                    <option value="fencing">Custom fencing or gate</option>
                    <option value="anti-restart">Anti-restart control (GS series)</option>
                    <option value="assessment">Plant safeguarding assessment</option>
                    <option value="service">Service / spare parts</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
                    Tell us more
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tonnage, voltage, environment, timeline, any photos you can email separately..."
                    className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-grey/60 focus:border-brand-amber focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark"
                >
                  Send request
                  <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-brand-grey/70">
                  Or email <Link href="mailto:info@guardomation.com" className="text-brand-amber hover:underline">info@guardomation.com</Link> directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-grey/60 focus:border-brand-amber focus:outline-none"
      />
    </div>
  );
}
