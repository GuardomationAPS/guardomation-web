import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
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
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
  ];
  const navItems = menu.length ? menu : defaultMenu;

  return (
    <nav className="sticky top-0 z-40 border-b border-brand-grey/20 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={navItems} />
          </Suspense>
        </div>
        <div className="flex items-center gap-8">
          <LogoSquare />
          {navItems.length ? (
            <ul className="hidden gap-7 text-sm font-medium tracking-tight md:flex md:items-center">
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
          ) : null}
        </div>
        <div className="hidden flex-1 justify-center max-w-md md:flex">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+12812652832"
            className="hidden text-sm font-semibold text-brand-charcoal hover:text-brand-red lg:inline-block"
          >
            (281) 265-2832
          </a>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
