import { getPosts } from '@/server/db';




export default async function Page() {


  const posts = await getPosts();

  return (
    <main className="container section">
      <h1 className="fs-hero">Latest Posts</h1>
      {posts.length === 0 ? (
        <article className="card">
          <h2 className="fs-section">No posts yet</h2>
          <p className="fs-body">We&rsquo;re working on new content. Check back soon for updates.</p>
          <p className="fs-caption">There are currently no published posts to display.</p>
        </article>
      ) : (
        <div className="grid-container">
          {posts.map((post) => (
            <article key={post.id} className="card">
              <h2 className="fs-section">{post.title}</h2>
              <p className="fs-body">{post.content.substring(0, 100)}...</p>
              <time className="fs-caption" dateTime={post.created_at}>
                {new Date(post.created_at).toLocaleDateString()}
              </time>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
