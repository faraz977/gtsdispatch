import pagesData from "@/content/pages.json";
import postsData from "@/content/posts.json";

export type ContentItem = {
  id: number;
  slug: string;
  title: string;
  html: string;
  link: string;
  date: string | null;
  excerpt: string;
  type: "page" | "post";
  seo: {
    title: string;
    description: string;
    ogImage: string | null;
  };
};

const pages = pagesData as ContentItem[];
const posts = postsData as ContentItem[];

const skipSlugs = new Set(["checkout", "my-account", "home"]);

export function getPages() {
  return pages.filter((page) => !skipSlugs.has(page.slug));
}

export function getPosts() {
  return posts.sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

export function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPageSlugs() {
  return getPages()
    .map((page) => page.slug)
    .filter((slug) => slug !== "blog");
}

export function getPostSlugs() {
  return getPosts().map((post) => post.slug);
}
