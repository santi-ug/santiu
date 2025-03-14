import AnimateEnter from 'components/AnimateEnter';
import Footer from 'components/Footer';
import { Navbar } from 'components/Navbar';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
	variable: '--font-inter', // Defines a CSS variable for the font
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500', '600'], // Choose specific weights
	display: 'swap', // Prevents FOIT (Flash of Invisible Text)
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

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${inter.variable} h-full min-h-screen relative w-full my-4 sm:my-24 motion-reduce:transform-none motion-reduce:transition-none  antialiased`}
			>
				<NextIntlClientProvider>
					<Providers>
						<AnimateEnter>
							<Navbar />
							{children}
							<Footer />
						</AnimateEnter>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
