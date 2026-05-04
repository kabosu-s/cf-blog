import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Post } from "@/domain/post";

export const getPosts = async (): Promise<Post[]> => {
  const { env } = await getCloudflareContext();
  const db = env.blog_db as D1Database;

  const { results } = await db
    .prepare(`SELECT * FROM posts WHERE published = 1 ORDER BY created_at DESC`)
    .all<Post>();

  return results ?? [];
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const { env } = await getCloudflareContext();
  const db = env.blog_db as D1Database;

  const result = await db
    .prepare(`SELECT * FROM posts WHERE slug = ? LIMIT 1`)
    .bind(slug)
    .first<Post>();

  return result;
};
