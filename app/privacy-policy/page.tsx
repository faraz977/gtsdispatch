import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { privacyPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyPage.description,
};

export default function Page() {
  return <ContentPage page={privacyPage} />;
}
