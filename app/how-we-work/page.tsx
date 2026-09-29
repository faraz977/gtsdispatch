import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { howPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "How We Work",
  description: howPage.description,
};

export default function Page() {
  return <ContentPage page={howPage} />;
}
