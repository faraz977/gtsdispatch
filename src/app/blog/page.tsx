import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog - Truck Dispatch Services | GTS",
  description: "News and insights from GTS Dispatch.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <article className="gts-page mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-[#1c2d5a]">Blog</h1>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {post.date
                ? new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : ""}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1c2d5a]">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#f47c2c]">
                {post.title.replace(/<[^>]+>/g, "")}
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </article>
  );
}
