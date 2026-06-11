import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) {
    // Gate is disabled — just send them home.
    return NextResponse.redirect(new URL("/", req.url));
  }

  const form = await req.formData();
  const password = String(form.get("password") || "");
  const next = String(form.get("next") || "/");

  // Normalize the next param so an attacker can't redirect to an off-site URL
  // by passing ?next=https://evil.example.com.
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  if (password !== expected) {
    const url = new URL("/enter", req.url);
    url.searchParams.set("next", safeNext);
    url.searchParams.set("e", "1");
    return NextResponse.redirect(url, 303);
  }

  const res = NextResponse.redirect(new URL(safeNext, req.url), 303);
  res.cookies.set("gd_access", password, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
  return res;
}
