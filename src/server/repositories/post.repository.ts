import { eq, desc, and } from 'drizzle-orm';
import { getDB } from '@/server/db';
import { posts, tags, postTags } from '@/db/schema';

export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  published: number;
  created_at: string;
  tags: Tag[];
}

export const getPosts = async (): Promise<Post[]> => {
  const db = await getDB();

  const rows = await db
    .select({
      id: posts.id,
      slug: posts.slug,
      title: posts.title,
      content: posts.content,
      published: posts.published,
      createdAt: posts.createdAt,
      tagId: tags.id,
      tagName: tags.name,
    })
    .from(posts)
    .leftJoin(postTags, eq(postTags.postId, posts.id))
    .leftJoin(tags, eq(tags.id, postTags.tagId))
    .where(eq(posts.published, 1))
    .orderBy(desc(posts.createdAt));

  const map = new Map<number, Post>();

  for (const r of rows) {
    if (!map.has(r.id)) {
      map.set(r.id, {
        id: r.id,
        slug: r.slug,
        title: r.title,
        content: r.content,
        published: r.published,
        created_at: r.createdAt,
        tags: [],
      });
    }

    if (r.tagId != null && r.tagName != null) {
      map.get(r.id)!.tags.push({
        id: r.tagId,
        name: r.tagName,
      });
    }
  }

  return Array.from(map.values());
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const db = await getDB();

  const rows = await db
    .select({
      id: posts.id,
      slug: posts.slug,
      title: posts.title,
      content: posts.content,
      published: posts.published,
      createdAt: posts.createdAt,
      tagId: tags.id,
      tagName: tags.name,
    })
    .from(posts)
    .leftJoin(postTags, eq(postTags.postId, posts.id))
    .leftJoin(tags, eq(tags.id, postTags.tagId))
    .where(and(eq(posts.slug, slug), eq(posts.published, 1)));

  if (rows.length === 0) return null;

  const base = rows[0];

  return {
    id: base.id,
    slug: base.slug,
    title: base.title,
    content: base.content,
    published: base.published,
    created_at: base.createdAt,
    tags: rows.filter((r) => r.tagId != null && r.tagName != null).map((r) => ({ id: r.tagId as number, name: r.tagName as string })),
  };
};

export const isSlugExists = async (slug: string): Promise<boolean> => {
  const db = await getDB();
  const result = await db.select({ id: posts.id }).from(posts).where(eq(posts.slug, slug)).limit(1);
  return result.length > 0;
};

export const createPost = async (data: { title: string; slug: string; content: string; published: boolean }): Promise<void> => {
  const db = await getDB();
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    const finalSlug = attempt === 0 ? data.slug : `${data.slug}-${Math.random().toString(36).substring(2, 8)}`;

    try {
      await db.insert(posts).values({
        title: data.title,
        slug: finalSlug,
        content: data.content,
        published: data.published ? 1 : 0,
        createdAt: new Date().toISOString(),
      });
      return;
    } catch (error) {
      // ユニーク制約違反の場合はリトライ
      if (error instanceof Error && error.message.includes('UNIQUE constraint')) {
        attempt++;
        continue;
      }
      throw error;
    }
  }
  throw new Error('Failed to create post: slug collision after max retries');
};
