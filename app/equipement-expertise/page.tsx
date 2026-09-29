import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { equipmentPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Equipment Expertise",
  description: equipmentPage.description,
};

export default function Page() {
  return <ContentPage page={equipmentPage} />;
}
