import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { aboutPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.description,
};

export default function Page() {
  return <ContentPage page={aboutPage} />;
}
