import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { boxPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Box Truck Dispatch",
  description: boxPage.description,
};

export default function Page() {
  return <ContentPage page={boxPage} />;
}
