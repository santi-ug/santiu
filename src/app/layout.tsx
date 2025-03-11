import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const viewport: Viewport = {
	initialScale: 1,
	themeColor: [
		{ color: 'var(--background)', media: '(prefers-color-scheme: light)' },
		{ color: 'var(--background)', media: '(prefers-color-scheme: dark)' },
	],
	width: 'device-width',
};

export const metadata: Metadata = {
	title: 'santi',
	description: 'Santiago Uribes Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter} h-full min-h-screen relative w-full my-4 sm:my-24 motion-reduce:transform-none motion-reduce:transition-none antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
