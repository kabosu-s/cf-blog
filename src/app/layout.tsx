import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoLinesJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "My Blog | Precision & Quality",
	description: "A high-quality blog platform focused on professional insights.",
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
			<body className={`${notoLinesJP.variable} antialiased`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<header className="header">
					<div className="container header__inner">
						<Link href="/" className="header__logo">MY BLOG</Link>
						<nav className="header__nav">
							<Link href="/" className="nav-link">Home</Link>
							<Link href="/posts" className="nav-link">Posts</Link>
							<Link href="/about" className="nav-link">About</Link>
						</nav>
					</div>
				</header>

				{children}

				<footer className="footer">
					<div className="container footer__inner">
						<p className="footer__copy">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
						<nav className="header__nav">
							<Link href="/privacy" className="nav-link">Privacy Policy</Link>
							<Link href="/terms" className="nav-link">Terms of Service</Link>
						</nav>
					</div>
				</footer>
			</body>
		</html>
	);
}
