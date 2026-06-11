"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Suggestion = {
  id: string;
  handle: string;
  title: string;
  featuredImage?: { url: string; altText?: string } | null;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
};

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") ?? "";

  const [q, setQ] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Click-outside closes the dropdown
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Debounced predictive fetch
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const trimmed = q.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search/predict?q=${encodeURIComponent(trimmed)}`);
        const data = await res.json();
        setSuggestions(data.products ?? []);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [q]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      const pick = suggestions[activeIdx];
      if (pick) {
        setOpen(false);
        router.push(`/product/${pick.handle}`);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const formatPrice = (s: Suggestion) => {
    const amt = parseFloat(s.priceRange.minVariantPrice.amount);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: s.priceRange.minVariantPrice.currencyCode || "USD",
      maximumFractionDigits: amt < 100 ? 2 : 0,
    }).format(amt);
  };

  return (
    <div ref={wrapperRef} className="relative w-full lg:max-w-sm">
      <Form action="/search" className="relative">
        <input
          key={initialQuery}
          type="text"
          name="q"
          placeholder="Search products, GS-104, light curtain…"
          autoComplete="off"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setActiveIdx(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKey}
          className="w-full rounded-lg border border-brand-grey/30 bg-white px-4 py-2 pr-10 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-0 top-0 flex h-full items-center pr-3 text-brand-charcoal/60 hover:text-brand-red"
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
        </button>
      </Form>

      {open && q.trim().length >= 2 && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 overflow-hidden rounded-lg border border-brand-grey/30 bg-white shadow-xl">
          {loading && suggestions.length === 0 && (
            <div className="px-4 py-3 text-xs text-brand-charcoal/50">Searching…</div>
          )}
          {!loading && suggestions.length === 0 && (
            <div className="px-4 py-3 text-xs text-brand-charcoal/50">
              No matches. Try less specific terms, or{" "}
              <Link href="/contact" className="font-semibold text-brand-red hover:underline" onClick={() => setOpen(false)}>
                request a quote
              </Link>
              .
            </div>
          )}
          {suggestions.length > 0 && (
            <ul role="listbox" className="max-h-[420px] overflow-y-auto">
              {suggestions.map((s, i) => (
                <li key={s.id}>
                  <Link
                    href={`/product/${s.handle}`}
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`flex items-center gap-3 px-3 py-2.5 transition-colors ${
                      i === activeIdx ? "bg-brand-cream" : "hover:bg-brand-cream/60"
                    }`}
                  >
                    <div className="relative h-12 w-12 flex-none overflow-hidden rounded border border-brand-grey/20 bg-brand-cream">
                      {s.featuredImage?.url ? (
                        <Image
                          src={s.featuredImage.url}
                          alt={s.featuredImage.altText || s.title}
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-brand-charcoal">{s.title}</p>
                      <p className="text-xs text-brand-charcoal/60">{formatPrice(s)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {suggestions.length > 0 && (
            <Link
              href={`/search?q=${encodeURIComponent(q.trim())}`}
              prefetch={false}
              onClick={() => setOpen(false)}
              className="block border-t border-brand-grey/20 bg-brand-cream/60 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-red hover:bg-brand-cream"
            >
              View all results for &ldquo;{q.trim()}&rdquo; →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="relative w-full lg:max-w-sm">
      <input
        placeholder="Search products…"
        className="w-full rounded-lg border border-brand-grey/30 bg-white px-4 py-2 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40"
        disabled
      />
      <div className="absolute right-0 top-0 flex h-full items-center pr-3 text-brand-charcoal/40">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </div>
    </div>
  );
}
