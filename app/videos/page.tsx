import type { Metadata } from "next";
import { ClientVideos } from "@/components/client-videos";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Owner-operator and small fleet reviews on the GTS Truck Dispatch YouTube channel.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">YouTube</p>
      <h1 className="mt-2 text-4xl font-semibold">Client review videos</h1>
      <p className="mt-4 max-w-2xl leading-7 text-[#3a3d40]">
        Both reviews from the archived site are here. Open either title to watch it on YouTube,
        or play it on this page.
      </p>
      <div className="mt-8">
        <ClientVideos />
      </div>
      <p className="mt-8 text-sm">
        More videos:{" "}
        <a
          className="font-semibold text-[#0563ad] hover:underline"
          href="https://www.youtube.com/@GTSTruckDispatch"
          target="_blank"
          rel="noreferrer"
        >
          youtube.com/@GTSTruckDispatch
        </a>
      </p>
    </div>
  );
}
