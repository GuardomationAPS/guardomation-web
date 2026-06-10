import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import Hero from "components/home/hero";
import InstallsGallery from "components/home/installs-gallery";
import BrandBar from "components/home/brand-bar";
import EquipmentGrid from "components/home/equipment-grid";
import CTASection from "components/home/cta-section";

export const metadata = {
  description:
    "LazerSafe-certified press brake retrofits and complete machine guarding solutions — trusted by industrial fabricators for over 30 years.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <InstallsGallery />
      <BrandBar />
      <EquipmentGrid />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              Featured
            </p>
            <h2 className="text-3xl font-bold text-brand-charcoal lg:text-4xl">
              Most-requested products
            </h2>
          </div>
        </div>
        <ThreeItemGrid />
        <Carousel />
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
