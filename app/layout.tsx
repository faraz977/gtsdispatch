import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: {
    default: "Truck Dispatch Services | GTS",
    template: "%s | GTS Dispatch",
  },
  description:
    "GTS Dispatch provides dedicated truck dispatch, fleet management, IFTA filing, payroll settlements, and driver recruiting for carriers across the United States.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#231f20]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
