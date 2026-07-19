import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WpContent } from "@/components/wp-content";
import { getPostBySlug, getPostSlugs } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seo.title || post.title.replace(/<[^>]+>/g, ""),
    description: post.seo.description || undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/blog" className="text-sm text-sky-300 hover:text-sky-200">
        ← Back to blog
      </Link>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
        {post.date
          ? new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : ""}
      </p>
      <h1
        className="mt-3 text-4xl font-bold text-white"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
      <div className="mt-8">
        <WpContent html={post.html} />
      </div>
    </main>
  );
}
