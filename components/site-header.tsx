"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="bg-[#0563ad] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <p>Driver support 24/7 · Remote dispatch across the U.S.</p>
          <a className="font-medium hover:underline" href={company.phoneHref}>
            {company.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center gap-4 px-4">
        <Link href="/" className="shrink-0" aria-label="GTS Dispatch home">
          <Image
            src="/images/logo.png"
            alt="GTS Dispatch"
            width={981}
            height={186}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-[#231f20] hover:text-[#0563ad]"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute top-full left-0 z-20 w-80 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-xl border bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[#231f20] hover:bg-[#e8f1f8] hover:text-[#0563ad]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#231f20] hover:text-[#0563ad]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="ml-auto hidden items-center gap-2 lg:ml-0 lg:flex">
          <a
            href={company.portal}
            className={cn(buttonVariants({ variant: "outline" }), "h-10 px-3")}
            target="_blank"
            rel="noreferrer"
          >
            Client Portal
          </a>
          <Link href="/post-your-truck" className={cn(buttonVariants(), "h-10 px-4")}>
            Post Your Truck
          </Link>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="ml-auto inline-flex size-10 items-center justify-center rounded-lg border lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,22rem)] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>GTS Dispatch</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-6" aria-label="Mobile">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg py-1.5 pr-2 pl-5 text-sm text-[#5c6166]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/faq"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-base font-medium"
              >
                FAQ
              </Link>
              <a
                href={company.phoneHref}
                className="mt-3 inline-flex items-center gap-2 px-2 text-sm font-semibold text-[#0563ad]"
              >
                <Phone className="size-4" />
                {company.phoneDisplay}
              </a>
              <a
                href={company.portal}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "mt-3 h-10")}
              >
                Client Portal
              </a>
              <Link
                href="/post-your-truck"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "h-10")}
              >
                Post Your Truck
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
