import Link from 'next/link';
import { getPosts } from '@/server/repositories/post.repository';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const posts = await getPosts();

  return (
    <main>
      {/* Hero Section - Serene & Analytical */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="fs-hero">Precision in Every Story</h1>
            <p className={`fs-sub ${styles.heroDescription}`}>A high-quality blog platform focused on professional insights, serene design, and refined experiences.</p>
            <div className={styles.heroCta}>
              <Button href="#posts" className="button--primary">
                Read Latest
              </Button>
              <Button href="/about" className="button--outline">
                Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="posts" className={styles.postsSection}>
        <div className="container">
          <div className={styles.postsHeader}>
            <h2 className="fs-section">最新の投稿</h2>
            <Link href="/posts" className="nav-link fs-caption">
              View All Archive
            </Link>
          </div>

          {posts.length === 0 ? (
            <div className={`glass ${styles.emptyState}`}>
              <h3 className={`fs-sub ${styles.emptyStateTitle}`}>No posts yet</h3>
              <p className="fs-body">現在、新しいコンテンツを制作中です。最新情報については、後日改めてご確認ください。</p>
            </div>
          ) : (
            <div className="posts-grid">
              {posts.map((post) => (
                <article key={post.id} className={`glass`}>
                  <Link href={`/posts/${post.slug}`} className={`${styles.postCard}`}>
                    <div className={styles.postMeta}>
                      <time className="fs-caption" dateTime={post.created_at}>
                        {new Intl.DateTimeFormat('ja-JP', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                        }).format(new Date(post.created_at))}
                      </time>
                      <span className={`fs-caption ${styles.postTag}`}>TAG</span>
                    </div>
                    <h3 className={`fs-sub ${styles.postTitle}`}>{post.title}</h3>
                    <p className={`fs-body ${styles.postExcerpt}`}>{post.content}</p>
                    <div className={styles.postFooter}>READ MORE →</div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
