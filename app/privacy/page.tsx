import Footer from "components/layout/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Guardomation APS LLC privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Legal</p>
          <h1 className="text-balance text-4xl font-bold text-brand-charcoal lg:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-brand-charcoal/60">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <article className="bg-white py-12 lg:py-16">
        <div className="prose prose-lg mx-auto max-w-3xl px-4 text-brand-charcoal lg:px-8">
          <h2>Who we are</h2>
          <p>
            Guardomation APS LLC (&ldquo;Guardomation,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website at guardomation.com and provides machine guarding products and services to industrial customers in the United States.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Contact information</strong> you submit through forms — name, company, email, phone, and details about your machine guarding application.</li>
            <li><strong>Order information</strong> when you purchase through our online store — billing/shipping addresses, payment details (handled by our payment processor), and order history.</li>
            <li><strong>Site analytics</strong> — pages visited, referring sources, and similar usage data via standard web analytics.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to quote requests and customer inquiries.</li>
            <li>To process and fulfill orders.</li>
            <li>To improve our website and services.</li>
            <li>To comply with our legal obligations.</li>
          </ul>

          <h2>Who we share it with</h2>
          <p>
            We don&rsquo;t sell your information. We share data with service providers necessary to operate our business — payment processors, shipping carriers, our CRM, and our accounting system. We may disclose information if required by law.
          </p>

          <h2>Your choices</h2>
          <p>
            You can request a copy of personal information we hold about you, ask us to correct or delete it, or opt out of marketing communications by emailing <a href="mailto:info@guardomation.com">info@guardomation.com</a>.
          </p>

          <h2>Contact us</h2>
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
