import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientVideos } from "@/components/client-videos";
import { packages, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "GTS dispatch at 4% of gross, and fleet management or freight dispatch at 5%.",
};

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">Pricing</p>
      <h1 className="mt-2 text-4xl font-semibold">Packages</h1>
      <p className="mt-4 max-w-2xl leading-7 text-[#3a3d40]">
        Truck dispatch is 4% of the gross on loads booked through GTS. Complete fleet
        management and freight dispatch are 5%. Choose a card and tell us about the fleet.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {packages.map((item) => (
          <Link key={item.title} href="/contact" className="block rounded-2xl transition hover:-translate-y-1">
            <Image src={item.image} alt={item.alt} width={720} height={1000} className="h-auto w-full" />
          </Link>
        ))}
      </div>
      <h2 className="mt-16 text-3xl font-semibold">What our clients say about us</h2>
      <div className="mt-6">
        <ClientVideos />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="rounded-2xl border p-5">
            <blockquote className="text-sm leading-6 text-[#3a3d40]">“{item.quote}”</blockquote>
            <figcaption className="mt-4 font-semibold">
              {item.name}
              <span className="mt-1 block text-sm font-normal text-[#5c6166]">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
