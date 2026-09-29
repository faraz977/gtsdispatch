import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dispatch notes, market briefings, and carrier commentary from GTS.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">Insights</p>
      <h1 className="mt-2 text-4xl font-semibold">Blog</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-2xl border bg-white">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/9]">
                <Image src={post.image} alt={post.imageAlt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold tracking-wide text-[#0563ad] uppercase">
                  {post.category}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-[#5c6166]">
                  {post.author} · {post.date}
                </p>
                <p className="mt-3 leading-7 text-[#3a3d40]">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
