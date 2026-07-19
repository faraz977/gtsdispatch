import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "News and insights from GTS Dispatch.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
        Blog
      </p>
      <h1 className="mt-3 text-4xl font-bold text-white">Recent blog posts</h1>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
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
            <h2 className="mt-3 text-2xl font-semibold text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-sky-300">
                {post.title.replace(/<[^>]+>/g, "")}
              </Link>
            </h2>
            {post.excerpt ? (
              <div
                className="mt-3 text-sm leading-7 text-slate-300"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
