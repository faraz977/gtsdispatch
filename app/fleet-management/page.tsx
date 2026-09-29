import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { fleetPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Fleet Management",
  description: fleetPage.description,
};

export default function Page() {
  return <ContentPage page={fleetPage} />;
}
