import Link from "next/link";
import { site, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="ct-footer"
      data-id="type-1"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div data-row="top">
        <div className="ct-container">
          <div data-column="widget-area-3">
            <div className="ct-widget widget_block widget_text">
              <p className="wp-block-paragraph">
                <strong>
                  Call:{" "}
                  <a href={site.phoneHref} className="ct-menu-link">
                    {site.phone}
                  </a>
                </strong>
                <br />
                <strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </strong>
                <br />
                <strong>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </strong>
              </p>
            </div>
          </div>

          <div data-column="socials">
            <div className="ct-footer-socials" data-id="socials">
              <div
                className="ct-social-box"
                data-icon-size="custom"
                data-color="official"
                data-icons-type="rounded:solid"
              >
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ct-label">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
