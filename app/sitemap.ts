import { getCollections, getPages, getProducts } from "lib/shopify";
import { getMakesWithCounts } from "lib/brake-installs";
import { baseUrl, validateEnvironmentVariables } from "lib/utils";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

export const dynamic = "force-dynamic";

// Hand-authored marketing/content routes (not backed by Shopify). Keep in sync
// with the app/ directory — these are the pages we want crawled and indexed.
const STATIC_ROUTES = [
  "",
  "/press-brake-safety",
  "/press-brake-safety/sentinel-plus",
  "/press-brake-safety/rear-guarding",
  "/press-brake-safety/compatibility",
  "/press-brake-safety/quote",
  "/machine-guarding",
  "/line-cards",
  "/services",
  "/support",
  "/faq",
  "/why-ul-508",
  "/contact",
  "/privacy",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const now = new Date().toISOString();

  const routesMap = [
    ...STATIC_ROUTES,
    // Per-brand press-brake compatibility pages (one per pictured make).
    ...getMakesWithCounts().map(
      (m) => `/press-brake-safety/compatibility/${m.slug}`,
    ),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt,
    })),
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt,
    })),
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${baseUrl}/${page.handle}`,
      lastModified: page.updatedAt,
    })),
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([collectionsPromise, productsPromise, pagesPromise])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
