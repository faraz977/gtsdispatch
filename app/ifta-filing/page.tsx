import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { iftaPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "IFTA Filing",
  description: iftaPage.description,
};

export default function Page() {
  return <ContentPage page={iftaPage} />;
}
