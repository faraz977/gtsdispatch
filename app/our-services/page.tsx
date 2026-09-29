import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { servicesPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Our Services",
  description: servicesPage.description,
};

export default function Page() {
  return <ContentPage page={servicesPage} />;
}
