import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">{post.category}</p>
      <h1 className="mt-2 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-3 text-sm text-[#5c6166]">
        {post.author} · {post.date}
      </p>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
      </div>
      {post.note ? (
        <p className="mt-6 rounded-xl bg-[#f4f5f6] px-4 py-3 text-sm leading-6 text-[#3a3d40]">
          {post.note}
        </p>
      ) : null}
      <div className="mt-8 space-y-5 text-[1.05rem] leading-8 text-[#3a3d40]">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {post.comment ? (
        <div className="mt-10 rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Comments</h2>
          <p className="mt-2 text-sm text-[#3a3d40]">{post.comment}</p>
        </div>
      ) : null}
      <h2 className="mt-12 text-2xl font-semibold">Recent blogs</h2>
      <ul className="mt-4 space-y-2">
        {more.map((item) => (
          <li key={item.slug}>
            <Link className="text-[#0563ad] hover:underline" href={`/blog/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
