import Link from "next/link";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-wide text-white">
            {site.name}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-sky-300">
            Truck Dispatch Services
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          {site.phone}
        </a>
      </div>
    </header>
  );
}
