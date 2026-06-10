import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { getCart } from "lib/shopify";
import { Inter, Manrope } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";

const { SITE_NAME } = process.env;

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_NAME} — Machine Guarding Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "U.S. Master Distributor for Lazer Safe. Press brake retrofits, light curtains, fencing, e-stops, anti-restart controls — three decades of machine safeguarding for every machine in your shop.",
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cart = getCart();

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="bg-brand-cream text-brand-charcoal selection:bg-brand-red selection:text-white antialiased">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
