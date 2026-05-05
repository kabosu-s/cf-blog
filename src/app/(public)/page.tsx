import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from "@/server/repositories/post.repository";
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const dynamic = 'force-dynamic';

export const Page = async () => {
  const posts = await getPosts();

  return (
    <main>
      {/* Hero Section */}
      <section className="section section--alt">
        <div className="container hero">
          <div className="hero__content">
            <h1 className="fs-hero">Precision in Every Story</h1>
            <p className="fs-sub">A high-quality blog platform focused on professional insights, consistent design, and interactive experiences.</p>
            <div className="hero__cta">
              <Button href="#posts">Read Latest</Button>
              <Button href="/about" variant="outline">
                Our Vision
              </Button>
            </div>
          </div>
          <div className="hero__image-wrapper">
            <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" alt="Professional Workspace" className="hero__image" fill priority style={{ objectFit: 'cover' }} />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="posts" className="section">
        <div className="container">
          <h2 className="fs-section">Latest Posts</h2>
          {posts.length === 0 ? (
            <Card style={{ marginTop: '4rem' }}>
              <h3 className="fs-sub">No posts yet</h3>
              <p className="fs-body">We&rsquo;re working on new content. Check back soon for updates.</p>
              <p className="fs-caption">There are currently no published posts to display.</p>
            </Card>
          ) : (
            <div className="posts-grid">
              {posts.map((post) => (
                <Card key={post.id}>
                  <h3 className="fs-sub">{post.title}</h3>
                  <p className="fs-body">{post.content.length > 120 ? `${post.content.substring(0, 120)}...` : post.content}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <time className="fs-caption" dateTime={post.created_at}>
                      {new Intl.DateTimeFormat('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(new Date(post.created_at))}
                    </time>
                    <Link href={`/posts/${post.slug}`} aria-label={`「${post.title}」を読む`} className="fs-body nav-link" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
                      Read more →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default Page;
