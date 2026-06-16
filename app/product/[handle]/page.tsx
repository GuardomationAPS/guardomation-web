import { GridTileImage } from "components/grid/tile";
import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import type { Image } from "lib/shopify/types";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage?.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  // Tag badge — prefer the product Type (e.g. "Band Saw Guard"), since
  // first-alphabetical-tag was returning useless labels like "ANSI B01.1".
  const labelTag = product.productType || product.tags?.[0] || "Guardomation";
  const isQuoteOnly = parseFloat(product.priceRange.minVariantPrice.amount) === 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      {/* Breadcrumb header */}
      <div className="border-b border-brand-grey/20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs lg:px-8">
          <nav className="flex items-center gap-2 text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-brand-red">Shop</Link>
            <span>/</span>
            <span className="text-brand-charcoal">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main product layout */}
      <div className="bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Gallery */}
            <div className="w-full lg:basis-3/5">
              <Suspense
                fallback={
                  <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden rounded-lg bg-brand-cream" />
                }
              >
                <Gallery
                  images={product.images.slice(0, 5).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText,
                  }))}
                />
              </Suspense>
            </div>

            {/* Description + CTA */}
            <div className="w-full lg:basis-2/5">
              {/* Tag badge */}
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                <span className="h-3 w-1 bg-brand-amber" aria-hidden />
                {labelTag}
              </p>

              <Suspense fallback={null}>
                <ProductDescription product={product} />
              </Suspense>

              {/* Quote helper for products without prices */}
              {isQuoteOnly && (
                <div className="mt-8 rounded-xl border border-brand-red/30 bg-brand-red/5 p-5">
                  <p className="text-sm font-semibold text-brand-charcoal">
                    Pricing varies based on configuration.
                  </p>
                  <p className="mt-1 text-sm text-brand-charcoal/70">
                    Tell us about your application and we&rsquo;ll come back with a quote.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark"
                  >
                    Request a quote
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              )}

              {/* Support strip */}
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-brand-grey/20 pt-6 text-xs text-brand-charcoal/60">
                <a href="tel:+12812652832" className="flex items-center gap-2 hover:text-brand-red">
                  <span className="text-brand-amber">☎</span>
                  <span>(281) 265-2832</span>
                </a>
                <a href="mailto:info@guardomation.com" className="flex items-center gap-2 hover:text-brand-red">
                  <span className="text-brand-amber">✉</span>
                  <span>info@guardomation.com</span>
                </a>
                <Link href="/support" className="flex items-center gap-2 hover:text-brand-red">
                  <span className="text-brand-amber">●</span>
                  <span>Installation &amp; support</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-2 hover:text-brand-red">
                  <span className="text-brand-amber">●</span>
                  <span>Talk to a specialist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <RelatedProducts id={product.id} />
      </Suspense>

      <Footer />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <section className="border-t border-brand-grey/20 bg-brand-cream py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            <span className="h-3 w-1 bg-brand-amber" aria-hidden />
            Related
          </p>
          <h2 className="text-3xl font-bold text-brand-charcoal lg:text-4xl">You might also need</h2>
        </div>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {relatedProducts.slice(0, 4).map((product) => (
            <li key={product.handle} className="aspect-square">
              <Link
                className="relative block h-full w-full"
                href={`/product/${product.handle}`}
                prefetch={true}
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
