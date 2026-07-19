import type { Metadata } from "next";
import { WpContent } from "@/components/wp-content";
import { getPageBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home - Truck Dispatch Services | GTS",
  description:
    "GTS Dispatch provides truck dispatch services, fleet management, payroll, and compliance support for carriers across the USA.",
};

export default function HomePage() {
  const home = getPageBySlug("home");

  if (!home) {
    return null;
  }

  return (
    <article className="gts-homepage">
      <WpContent html={home.html} />
    </article>
  );
}
