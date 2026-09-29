import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { driversPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Drivers Recruitment & Social Media Marketing",
  description: driversPage.description,
};

export default function Page() {
  return <ContentPage page={driversPage} />;
}
