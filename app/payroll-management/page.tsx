import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { payrollPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Payroll Management",
  description: payrollPage.description,
};

export default function Page() {
  return <ContentPage page={payrollPage} />;
}
