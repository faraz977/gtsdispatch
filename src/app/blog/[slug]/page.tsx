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
    <article className="gts-page mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link href="/blog" className="text-sm text-[#f47c2c] hover:underline">
        ← Back to blog
      </Link>
      <WpContent html={post.html} className="mt-6" />
    </article>
  );
}
