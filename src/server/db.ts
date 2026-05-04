import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Post } from "@/domain/post";

type PostRow = Omit<Post, "tags"> & { tags_json: string };

const mapPostRow = (row: PostRow): Post => {
  const tags = (() => {
    try {
      const parsed = JSON.parse(row.tags_json);
      return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
      return [];
    }
  })();

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    content: row.content,
    published: row.published,
    created_at: row.created_at,
    tags,
  };
};

export const getPosts = async (): Promise<Post[]> => {
  const { env } = await getCloudflareContext();
  const db = env.blog_db;

  const { results } = await db
    .prepare(`
      SELECT
        posts.id,
        posts.slug,
        posts.title,
        posts.content,
        posts.published,
        posts.created_at,
        COALESCE(
          json_group_array(
            CASE
              WHEN tags.id IS NULL THEN NULL
              ELSE json_object('id', tags.id, 'name', tags.name)
            END
          ),
          '[]'
        ) AS tags_json
      FROM posts
      LEFT JOIN post_tags ON post_tags.post_id = posts.id
      LEFT JOIN tags ON tags.id = post_tags.tag_id
      WHERE published = 1
      GROUP BY posts.id
      ORDER BY posts.created_at DESC
    `)
    .all<PostRow>();

  return (results ?? []).map(mapPostRow);
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const { env } = await getCloudflareContext();
  const db = env.blog_db;

  const result = await db
    .prepare(`
      SELECT
        posts.id,
        posts.slug,
        posts.title,
        posts.content,
        posts.published,
        posts.created_at,
        COALESCE(
          json_group_array(
            CASE
              WHEN tags.id IS NULL THEN NULL
              ELSE json_object('id', tags.id, 'name', tags.name)
            END
          ),
          '[]'
        ) AS tags_json
      FROM posts
      LEFT JOIN post_tags ON post_tags.post_id = posts.id
      LEFT JOIN tags ON tags.id = post_tags.tag_id
      WHERE slug = ?
      GROUP BY posts.id
      LIMIT 1
    `)
    .bind(slug)
    .first<PostRow>();

  return result ? mapPostRow(result) : null;
};
