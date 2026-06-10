import Footer from "components/layout/footer";

export const metadata = {
  title: "Terms of Service",
  description: "Guardomation APS LLC terms of service.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Legal</p>
          <h1 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-brand-charcoal/60">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="prose prose-lg mx-auto max-w-3xl px-4 text-brand-charcoal lg:px-8">
          <h2>Acceptance</h2>
          <p>
            By using guardomation.com and the products and services offered by Guardomation APS LLC, you agree to these terms.
          </p>

          <h2>Products and quotes</h2>
          <p>
            Product specifications, prices, and availability are subject to change without notice. Quotes are valid for 30 days unless otherwise stated. Custom installations may require a site visit before scope and pricing can be finalized.
          </p>

          <h2>Orders and payment</h2>
          <ul>
            <li>All orders are subject to acceptance by Guardomation.</li>
            <li>Payment terms are stated on each quote or invoice.</li>
            <li>Title to goods passes upon full payment.</li>
            <li>Sales tax is collected where applicable.</li>
          </ul>

          <h2>Shipping and lead times</h2>
          <p>
            Shipping costs are quoted separately or included in pricing as noted. Lead times depend on system, brake make/model, and stock availability — we communicate timelines on a per-order basis.
          </p>

          <h2>Returns</h2>
          <p>
            Standard catalog items in unused, original condition may be returned within 30 days subject to a restocking fee. Custom-engineered systems and special orders are non-returnable. Contact us before initiating a return.
          </p>

          <h2>Installation services</h2>
          <p>
            On-site installation services are scheduled by agreement. Customer is responsible for ensuring machine is in safe operating condition prior to installation and providing safe site access for our technicians.
          </p>

          <h2>Warranty</h2>
          <p>
            Products are sold with manufacturer warranties — terms vary by brand. Lazer Safe systems carry the manufacturer&rsquo;s standard warranty. Installation labor is warranted for 90 days from completion. Contact us with warranty questions.
          </p>

          <h2>Liability</h2>
          <p>
            Guardomation&rsquo;s liability is limited to the purchase price of the products or services in question. We are not liable for indirect, incidental, or consequential damages.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, United States.
          </p>

          <h2>Contact</h2>
          <p>
            Guardomation APS LLC<br />
            Email: <a href="mailto:info@guardomation.com">info@guardomation.com</a><br />
            Phone: <a href="tel:+12812652832">(281) 265-2832</a>
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
