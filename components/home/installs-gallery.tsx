import Image from "next/image";

const INSTALLS = [
  {
    src: "/photos/install-161a0335.jpg",
    title: "Press Brake Retrofit",
    caption: "LazerSafe Sentinel mounted on a heavy-tonnage press brake with full upper-tool array.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/photos/install-img9141.jpg",
    title: "Active Detection",
    caption: "Camera-based safety field scanning the punch zone during a live forming operation.",
    span: "",
  },
  {
    src: "/photos/install-161a0426.jpg",
    title: "Operator Workflow",
    caption: "Speed-muted operation lets the operator work close to the tool — safely.",
    span: "",
  },
  {
    src: "/photos/install-161a0614.jpg",
    title: "Sentinel HMI",
    caption: "Operator-friendly touch panel with mode selection and live diagnostics.",
    span: "",
  },
  {
    src: "/photos/install-161a0444.jpg",
    title: "Field Install",
    caption: "Retrofit complete and certified — back in production same day.",
    span: "",
  },
];

export default function InstallsGallery() {
  return (
    <section className="bg-brand-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-amber">
              <span className="h-3 w-1 bg-brand-amber" aria-hidden />
              Field work
            </p>
            <h2 className="text-balance text-4xl font-bold text-white lg:text-5xl">
              Real installs. Real shops.
            </h2>
            <p className="mt-4 text-lg text-brand-grey">
              Every retrofit done in person, on your shop floor, with operator training included.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">
          {INSTALLS.map((shot) => (
            <figure
              key={shot.src}
              className={`group relative overflow-hidden rounded-lg bg-brand-charcoal-dark ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.title}
                width={1400}
                height={930}
                className="aspect-[3/2] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/60 to-transparent p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-0.5 bg-brand-amber" aria-hidden />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-amber">
                    LazerSafe
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{shot.title}</h3>
                <p className="mt-1 hidden text-sm text-brand-grey lg:block">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
