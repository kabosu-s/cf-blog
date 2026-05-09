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
  title: 'Moon Jelly | Precision & Quality',
  description: 'A serene and analytical blog platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <header className="header">
          <div className="container header__inner">
            <Link href="/" className="header__logo">
              MOON JELLY
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

        <div className="flex-1">
          {children}
        </div>

        <footer className="footer">
          <div className="container footer__inner">
            <p className="fs-caption">&copy; {new Date().getFullYear()} Moon Jelly. All rights reserved.</p>
            <nav className="header__nav" aria-label="フッターナビゲーション">
              <Link href="/privacy" className="nav-link fs-caption">
                Privacy
              </Link>
              <Link href="/terms" className="nav-link fs-caption">
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
