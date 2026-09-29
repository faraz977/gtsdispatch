import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { semiPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Semi-Truck Dispatch",
  description: semiPage.description,
};

export default function Page() {
  return <ContentPage page={semiPage} />;
}
