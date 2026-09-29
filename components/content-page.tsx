import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { PageDoc } from "@/lib/pages";
import { cn } from "@/lib/utils";

export function ContentPage({ page }: { page: PageDoc }) {
  return (
    <article>
      <header className="relative isolate overflow-hidden bg-[#231f20] text-white">
        <Image
          src={page.image}
          alt=""
          fill
          className={cn("object-cover opacity-35", page.bannerPosition)}
          priority
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-sky-200 uppercase">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{page.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{page.description}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="max-w-3xl">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl bg-[#f4f5f6]">
            <Image src={page.image} alt={page.imageAlt} fill className="object-cover" />
          </div>
          <div className="space-y-4 text-[1.05rem] leading-8 text-[#3a3d40]">
            {page.blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="pt-4 text-2xl font-semibold text-[#231f20]">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={index} className="pt-2 text-xl font-semibold text-[#0563ad]">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-5">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </div>
        <aside className="h-fit rounded-2xl bg-[#f4f5f6] p-6 lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold text-[#231f20]">Ready to run with structure?</h2>
          <p className="mt-2 text-sm leading-6 text-[#5c6166]">
            Tell us about your truck, lanes, and home time. A dispatcher will follow up.
          </p>
          <Link href="/contact" className={cn(buttonVariants(), "mt-5 h-10 w-full")}>
            Contact GTS
          </Link>
          <Link
            href="/post-your-truck"
            className={cn(buttonVariants({ variant: "outline" }), "mt-3 h-10 w-full bg-white")}
          >
            Post your truck
          </Link>
        </aside>
      </div>
    </article>
  );
}
