import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = "https://gtsdispatch.us/wp-json/wp/v2";
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "content");

async function fetchAll(endpoint) {
  const items = [];
  let page = 1;

  while (true) {
    const url = `${BASE}/${endpoint}?per_page=100&page=${page}&_fields=id,slug,title,content,link,date,excerpt,yoast_head_json`;
    const response = await fetch(url);
    if (!response.ok) break;

    const batch = await response.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    items.push(...batch);
    const totalPages = Number(response.headers.get("x-wp-totalpages") ?? "1");
    if (page >= totalPages) break;
    page += 1;
  }

  return items;
}

function normalize(item, type) {
  const yoast = item.yoast_head_json ?? {};
  return {
    id: item.id,
    slug: item.slug,
    title: item.title?.rendered ?? "",
    html: item.content?.rendered ?? "",
    link: item.link,
    date: item.date ?? null,
    excerpt: item.excerpt?.rendered ?? "",
    type,
    seo: {
      title: yoast.title ?? item.title?.rendered ?? "",
      description: yoast.description ?? "",
      ogImage: yoast.og_image?.[0]?.url ?? null,
    },
  };
}

mkdirSync(OUT_DIR, { recursive: true });

const [pages, posts] = await Promise.all([fetchAll("pages"), fetchAll("posts")]);

const normalizedPages = pages.map((page) => normalize(page, "page"));
const normalizedPosts = posts.map((post) => normalize(post, "post"));

writeFileSync(join(OUT_DIR, "pages.json"), JSON.stringify(normalizedPages, null, 2));
writeFileSync(join(OUT_DIR, "posts.json"), JSON.stringify(normalizedPosts, null, 2));

console.log(`Exported ${normalizedPages.length} pages and ${normalizedPosts.length} posts.`);
