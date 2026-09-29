import type { Metadata } from "next";
import { PostTruckForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Post Your Truck",
  description:
    "Send GTS your origin, equipment, and MC number for custom load offers. Dispatch fee is 4% of gross.",
};

export default function PostTruckPage() {
  return (
    <div className="bg-[#f4f5f6]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">Load offers</p>
        <h1 className="mt-2 text-4xl font-semibold">Post Your Truck For Our Custom Load Offers!</h1>
        <p className="mt-4 max-w-2xl leading-7 text-[#3a3d40]">
          Tell us where the truck is empty, what it pulls, and how to reach the carrier.
          Loads booked through GTS Dispatch carry a 4% fee on the gross.
        </p>
        <div className="mt-8 rounded-2xl bg-[#0563ad] p-5 text-white sm:p-8">
          <PostTruckForm returnPath="/post-your-truck" />
        </div>
      </div>
    </div>
  );
}
