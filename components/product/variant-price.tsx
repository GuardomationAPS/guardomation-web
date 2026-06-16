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

  // Show selected variant price if found; otherwise show a price range
  // (min – max) so visitors landing without a selection still see real numbers.
  if (selectedVariant) {
    return (
      <Price
        amount={selectedVariant.price.amount}
        currencyCode={selectedVariant.price.currencyCode}
      />
    );
  }

  const minAmt = parseFloat(product.priceRange.minVariantPrice.amount);
  const maxAmt = parseFloat(product.priceRange.maxVariantPrice.amount);
  if (minAmt === maxAmt) {
    return (
      <Price
        amount={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
      />
    );
  }

  return (
    <span>
      <Price
        amount={product.priceRange.minVariantPrice.amount}
        currencyCode={product.priceRange.minVariantPrice.currencyCode}
      />
      <span aria-hidden> – </span>
      <Price
        amount={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
      />
    </span>
  );
}
