import Footer from "components/layout/footer";
import Hero from "components/home/hero";
import InstallsGallery from "components/home/installs-gallery";
import BrandBar from "components/home/brand-bar";
import EquipmentGrid from "components/home/equipment-grid";

export const metadata = {
  description:
    "U.S. Master Distributor for Lazer Safe. Press brake retrofits, light curtains, fencing, e-stops, anti-restart controls — three decades of machine safeguarding for every machine in your shop.",
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
      <Footer />
    </>
  );
}
