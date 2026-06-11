import { predictiveSearch } from "lib/shopify";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return NextResponse.json({ products: [] });
  }

  try {
    const products = await predictiveSearch(q);
    return NextResponse.json({ products });
  } catch (err) {
    console.error("predictive search error", err);
    return NextResponse.json({ products: [], error: "search failed" }, { status: 500 });
  }
}
