import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WpContent } from "@/components/wp-content";
import { getPageBySlug, getPageSlugs } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.seo.title || page.title.replace(/<[^>]+>/g, ""),
    description: page.seo.description || undefined,
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page || slug === "home") {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200">
          ← Back to home
        </Link>
        <h1
          className="mt-4 text-4xl font-bold text-white"
          dangerouslySetInnerHTML={{ __html: page.title }}
        />
      </div>
      <WpContent html={page.html} />
    </main>
  );
}
