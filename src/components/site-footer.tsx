import Link from "next/link";
import { mainNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05101c] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-3 text-sm leading-7">
            Dedicated truck dispatch and fleet support for carriers across the
            United States since 2018.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={site.phoneHref} className="block hover:text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">
              {site.email}
            </a>
            <Link href="/privacy-policy" className="block hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
