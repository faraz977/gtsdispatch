"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceLinks, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      id="header"
      className="ct-header"
      data-id="type-1"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div data-device="desktop">
        <div className="ct-sticky-container">
          <div data-sticky="shrink">
            <div data-row="middle" data-column-set="2">
              <div className="ct-container">
                <div data-column="start" data-placements="1">
                  <div data-items="primary">
                    <div className="site-branding" data-id="logo">
                      <Link href="/" className="site-logo-container" rel="home">
                        <Image
                          src={site.logo}
                          alt={site.tagline}
                          width={1041}
                          height={240}
                          className="default-logo"
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div data-column="end" data-placements="1">
                  <div data-items="primary">
                    <nav
                      id="header-menu-1"
                      className="header-menu-1"
                      data-id="menu"
                      aria-label="Header Menu"
                    >
                      <ul id="menu-menu" className="menu" role="menubar">
                        <li
                          className={`menu-item menu-item-home ${isActive(pathname, "/") ? "current-menu-item" : ""}`}
                          role="none"
                        >
                          <Link href="/" className="ct-menu-link" role="menuitem">
                            Home
                          </Link>
                        </li>
                        <li
                          className={`menu-item ${isActive(pathname, "/about") ? "current-menu-item" : ""}`}
                          role="none"
                        >
                          <Link href="/about" className="ct-menu-link" role="menuitem">
                            About
                          </Link>
                        </li>
                        <li
                          className={`menu-item menu-item-has-children animated-submenu ${isActive(pathname, "/our-services") ? "current-menu-item" : ""}`}
                          role="none"
                        >
                          <Link
                            href="/our-services"
                            className="ct-menu-link"
                            role="menuitem"
                          >
                            Our Services
                          </Link>
                          <ul className="sub-menu" role="menu">
                            {serviceLinks.map((item) => (
                              <li key={item.href} className="menu-item" role="none">
                                <Link
                                  href={item.href}
                                  className="ct-menu-link"
                                  role="menuitem"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li
                          className={`menu-item ${isActive(pathname, "/blog") ? "current-menu-item" : ""}`}
                          role="none"
                        >
                          <Link href="/blog" className="ct-menu-link" role="menuitem">
                            Blog
                          </Link>
                        </li>
                        <li
                          className={`menu-item ${isActive(pathname, "/contact") ? "current-menu-item" : ""}`}
                          role="none"
                        >
                          <Link href="/contact" className="ct-menu-link" role="menuitem">
                            Contact
                          </Link>
                        </li>
                        <li
                          className={`menu-item ${isActive(pathname, "/how-we-work") ? "current-menu-item" : ""}`}
                          role="none"
                        >
                          <Link
                            href="/how-we-work"
                            className="ct-menu-link"
                            role="menuitem"
                          >
                            How we work
                          </Link>
                        </li>
                        <li className="menu-item" role="none">
                          <a
                            href={site.portalUrl}
                            className="ct-menu-link"
                            role="menuitem"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Client Portal
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
