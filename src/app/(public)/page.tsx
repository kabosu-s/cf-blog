import { getPosts } from '@/server/db';
import { Post } from '@/domain/post';

interface PageProps {
  params: Promise<{ slug?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  // Await params and searchParams as per Next.js 16/App Router guidelines
  await params;
  await searchParams;

  const posts = await getPosts();

  return (
    <main className="container section">
      <h1 className="fs-hero">Latest Posts</h1>
      <div className="grid-container">
        {posts.map((post: Post) => (
          <article key={post.id} className="card">
            <h2 className="fs-section">{post.title}</h2>
            <p className="fs-body">{post.content.substring(0, 100)}...</p>
            <time className="fs-caption">{new Date(post.created_at).toLocaleDateString()}</time>
          </article>
        ))}
      </div>
    </main>
  );
}
