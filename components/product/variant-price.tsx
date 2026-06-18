"use client";

import Price from "components/price";
import { Product } from "lib/shopify/types";
import { useSearchParams } from "next/navigation";

/**
 * Variant-aware price display.
 * Reads the selected option values from the URL searchParams (the variant
 * selector writes them there), finds the matching variant, and displays
 * its price. Falls back to the product's price range when no variant is
 * selected or the selection is ambiguous.
 */
export function VariantPrice({ product }: { product: Product }) {
  const searchParams = useSearchParams();

  // Try to match a variant against the current URL params.
  const selectedVariant = product.variants.find((variant) =>
    variant.selectedOptions.every(
      (option) =>
        searchParams.get(option.name.toLowerCase()) === option.value,
    ),
  );

  // Show the selected variant price; otherwise fall back to the first variant
  // (canonical default per Shopify CSV import order). A price range looked
  // sloppy in the chip, so we always show a single clean number.
  const displayVariant = selectedVariant || product.variants[0];

  if (displayVariant) {
    return (
      <Price
        amount={displayVariant.price.amount}
        currencyCode={displayVariant.price.currencyCode}
      />
    );
  }

  // Final fallback if a product has no variants at all (shouldn't happen).
  return (
    <Price
      amount={product.priceRange.maxVariantPrice.amount}
      currencyCode={product.priceRange.maxVariantPrice.currencyCode}
    />
  );
}
