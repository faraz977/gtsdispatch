import Image from "next/image";
import Link from "next/link";
import { company, serviceLinks, socials } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#231f20] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="GTS Dispatch"
            width={981}
            height={186}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-6 text-white/75">
            Dedicated truck dispatch, fleet support, and back-office work for
            owner-operators and small carriers. Established in {company.established}.
          </p>
          <p className="mt-4 text-sm text-white/75">{company.legal}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/how-we-work">
                How we work
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/packages">
                Packages
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a className="hover:text-white" href={company.phoneHref}>
                Call: {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={company.emailHref}>
                {company.email}
              </a>
            </li>
            <li>{company.address}</li>
            <li>Our remote dispatch team across the U.S.</li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {socials.map((item) => (
              <li key={item.label}>
                <a className="underline-offset-2 hover:underline" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Image
            src="/images/payment-options.png"
            alt="Payment options"
            width={640}
            height={200}
            className="mt-6 h-10 w-auto rounded bg-white px-2 py-1"
          />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/60 sm:px-6">
          Copyright © {company.legal} 2023-26. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
