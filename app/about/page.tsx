import type { Metadata } from "next";
import { ClientVideos } from "@/components/client-videos";
import { ContentPage } from "@/components/content-page";
import { aboutPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.description,
};

export default function Page() {
  return (
    <>
      <ContentPage page={aboutPage} />
      <section className="border-t bg-[#f4f5f6] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold">What our clients say about us</h2>
          <p className="mt-3 max-w-2xl text-[#3a3d40]">
            Owner-operators and small fleets talk about working with the GTS dispatch desk.
          </p>
          <div className="mt-8">
            <ClientVideos />
          </div>
        </div>
      </section>
    </>
  );
}
