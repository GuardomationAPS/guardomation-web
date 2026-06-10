"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export type CarouselPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export default function PhotoCarousel({
  photos,
  autoAdvanceMs = 5000,
}: {
  photos: CarouselPhoto[];
  autoAdvanceMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || photos.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % photos.length);
    }, autoAdvanceMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, photos.length, autoAdvanceMs]);

  const goPrev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);
  const goNext = () => setIdx((i) => (i + 1) % photos.length);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-brand-charcoal-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative aspect-[16/9] w-full">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              quality={85}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority={i === 0}
            />
            {photo.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/60 to-transparent p-6 lg:p-8">
                <p className="text-sm font-semibold text-white lg:text-base">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-charcoal shadow-md transition-all hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-charcoal shadow-md transition-all hover:bg-white"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {photos.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-brand-amber" : "w-1.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
