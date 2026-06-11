import { NextRequest, NextResponse } from "next/server";

// Dev-gate: when SITE_PASSWORD env var is set, the site is protected behind
// a custom login page at /enter. On success the gate sets an httpOnly cookie
// (gd_access) whose value matches SITE_PASSWORD. When the env var is unset
// (e.g., production), the gate is disabled and requests pass through.
const SITE_PASSWORD = process.env.SITE_PASSWORD;

export function middleware(req: NextRequest) {
  if (!SITE_PASSWORD) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Allow the gate page and its API endpoint to render — otherwise we'd
  // redirect /enter → /enter and loop.
  if (pathname === "/enter" || pathname === "/api/enter") {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("gd_access")?.value;
  if (cookie === SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Redirect to the gate page, preserving the path they wanted so we can
  // bounce them back after login.
  const url = req.nextUrl.clone();
  url.pathname = "/enter";
  url.search = `?next=${encodeURIComponent(pathname + (req.nextUrl.search || ""))}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|opengraph-image).*)",
  ],
};
