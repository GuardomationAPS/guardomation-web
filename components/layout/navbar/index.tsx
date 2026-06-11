import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  // Default IA — will eventually come from Shopify menu management
  const defaultMenu: Menu[] = [
    { title: "Press Brake Safety", path: "/press-brake-safety" },
    { title: "Machine Guarding", path: "/search" },
    { title: "Shop", path: "/search" },
    { title: "Support", path: "/support" },
    { title: "Contact", path: "/contact" },
  ];
  const navItems = menu.length ? menu : defaultMenu;

  return (
    <>
      {/* Corner logo badge — sits in top-right, persists on scroll (LazerSafe-inspired) */}
      <Link
        href="/"
        prefetch={true}
        aria-label="Guardomation home"
        className="group fixed top-0 right-0 z-40 hidden md:block"
      >
        <div
          className="bg-white pl-12 pr-6 py-4 shadow-lg transition-shadow group-hover:shadow-xl"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Image
            src="/brand/guardomation-logo.jpg"
            alt="Guardomation — Machine Guarding Solutions"
            width={160}
            height={32}
            priority
            className="h-auto w-auto"
            style={{ maxHeight: "32px" }}
          />
        </div>
      </Link>

      {/* Main nav bar */}
      <nav className="sticky top-0 z-30 border-b border-brand-grey/20 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
          {/* Left: hamburger + mobile logo */}
          <div className="flex items-center gap-3">
            <div className="block md:hidden">
              <Suspense fallback={null}>
                <MobileMenu menu={navItems} />
              </Suspense>
            </div>
            {/* Mobile-only inline logo (since corner badge is hidden on mobile) */}
            <Link href="/" prefetch={true} className="block md:hidden" aria-label="Guardomation home">
              <Image
                src="/brand/guardomation-logo.jpg"
                alt="Guardomation"
                width={140}
                height={28}
                priority
                className="h-auto w-auto"
                style={{ maxHeight: "28px" }}
              />
            </Link>
          </div>

          {/* Center: nav links + search (desktop) */}
          <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
            <ul className="flex gap-7 text-sm font-medium tracking-tight md:items-center">
              {navItems.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-brand-charcoal transition-colors hover:text-brand-red"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-64 flex-none xl:w-72">
              <Suspense fallback={<SearchSkeleton />}>
                <Search />
              </Suspense>
            </div>
          </div>

          {/* Right: phone + cart (reserves space for the corner badge) */}
          <div className="flex items-center gap-4 md:pr-[220px]">
            <a
              href="tel:+12812652832"
              className="hidden text-sm font-semibold text-brand-charcoal hover:text-brand-red xl:inline-block"
            >
              (281) 265-2832
            </a>
            <CartModal />
          </div>
        </div>
      </nav>
    </>
  );
}
