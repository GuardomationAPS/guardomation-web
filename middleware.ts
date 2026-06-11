import { NextRequest, NextResponse } from "next/server";

// Dev-gate: when SITE_PASSWORD env var is set, the site is protected behind
// HTTP Basic Auth. Username is ignored; only the password matters. When the
// env var is unset (e.g., production), the gate is disabled and requests
// pass through normally.
const SITE_PASSWORD = process.env.SITE_PASSWORD;

export function middleware(req: NextRequest) {
  if (!SITE_PASSWORD) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const encoded = auth.slice(6);
      const decoded = atob(encoded);
      const colonIdx = decoded.indexOf(":");
      const pass = colonIdx >= 0 ? decoded.slice(colonIdx + 1) : "";
      if (pass === SITE_PASSWORD) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Guardomation Dev"',
    },
  });
}

export const config = {
  // Run on every request except static assets, the Next.js image optimizer,
  // robots.txt (so search engines can still fetch the noindex directive),
  // and favicon.
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
