import Link from "next/link";
import PhotoCarousel from "components/photo-carousel";
import { INSTALLS, installsToCarouselPhotos } from "lib/brake-installs";

const photos = installsToCarouselPhotos();
const total = INSTALLS.length;
const confirmed = INSTALLS.filter((i) => !i.pending).length;

export default function InstallsGallery() {
  return (
    <section className="bg-brand-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Compatibility · {total} brakes pictured
            </p>
            <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
              Real installs. Real shops.
            </h2>
            <p className="mt-4 text-base text-brand-grey lg:text-lg">
              Every retrofit done in person, on your shop floor, with operator training included. Browse the press brakes we&rsquo;ve installed Lazer Safe on.
            </p>
          </div>
          <Link
            href="/press-brake-safety/compatibility"
            className="inline-flex flex-none items-center gap-2 rounded-full border border-brand-amber bg-brand-amber px-5 py-2.5 text-sm font-semibold text-brand-charcoal transition-all hover:bg-brand-amber/90"
          >
            View full gallery
            <span aria-hidden>→</span>
          </Link>
        </div>

        <Link
          href="/press-brake-safety/compatibility"
          className="block"
          aria-label="Open the full press brake compatibility gallery"
        >
          <PhotoCarousel photos={photos} autoAdvanceMs={2500} />
        </Link>

        <p className="mt-5 text-center text-sm text-brand-grey">
          {confirmed} brand-confirmed installs · pause on hover to read the caption · tap the gallery to see all {total} brakes
        </p>
      </div>
    </section>
  );
}
