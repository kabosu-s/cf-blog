import type { Metadata } from 'next';
import { Noto_Sans_JP, Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-en',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Blog | Precision & Quality',
  description: 'ブログを作ってみる。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <header className="header">
          <div className="container header__inner">
            <Link href="/" className="header__logo">
              MY BLOG
            </Link>
            <nav className="header__nav" aria-label="メインナビゲーション">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/posts" className="nav-link">
                Posts
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container footer__inner">
            <p className="footer__copy">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
            <nav className="header__nav" aria-label="フッターナビゲーション">
              <Link href="/privacy" className="nav-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="nav-link">
                Terms of Service
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
