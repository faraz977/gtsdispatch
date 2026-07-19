import type { Metadata } from "next";
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
    <article className="gts-page">
      <WpContent html={page.html} />
    </article>
  );
}
