import { baseUrl } from "lib/utils";

export default function robots() {
  // When the dev-gate is active (SITE_PASSWORD set in Vercel), disallow all
  // crawlers so dev.guardomation.com doesn't get indexed. When the gate is
  // disabled (production), allow normal crawling.
  const gated = Boolean(process.env.SITE_PASSWORD);
  return {
    rules: gated
      ? [{ userAgent: "*", disallow: "/" }]
      : [{ userAgent: "*" }],
    sitemap: gated ? undefined : `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
