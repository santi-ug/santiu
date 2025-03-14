'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export function Navbar() {
	const router = useRouter();
	const pathname = usePathname(); // Get full pathname (e.g., "/en/cv")
	const t = useTranslations('Navbar');

	// Extract the page name (removes locale from the path)
	const pathSegments = pathname.split('/');
	const page = pathSegments.length > 2 ? `/${pathSegments[2]}` : '/';

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (
				document.activeElement?.tagName === 'INPUT' ||
				document.activeElement?.tagName === 'TEXTAREA' ||
				event.target instanceof HTMLInputElement
			) {
				return;
			}

			switch (event.key.toLowerCase()) {
				case 'h':
					router.push('/');
					break;
				case 'p':
					router.push('/projects');
					break;
				case 'c':
					router.push('/cv');
					break;
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [router]);

	return (
		<nav className='flex items-center justify-between mb-12 text-sm mx-auto max-w-2xl px-8'>
			<div className='flex space-x-4'>
				<Link
					href='/'
					className={`transition-colors duration-200 hover:scale-102 ${
						page === '/'
							? 'text-[rgba(var(--foreground-rgb),1)] sm:text-[rgba(var(--foreground-rgb),0.4)] sm:hover:text-[rgba(var(--foreground-rgb),1)]'
							: 'text-[rgba(var(--foreground-rgb),0.4)] hover:text-[rgba(var(--foreground-rgb),1)]'
					}`}
				>
					[h] home
				</Link>

				<Link
					href='/projects'
					className={`transition-colors duration-200 hover:scale-102 ${
						page === '/projects'
							? 'text-[rgba(var(--foreground-rgb),1)] sm:text-[rgba(var(--foreground-rgb),0.4)] sm:hover:text-[rgba(var(--foreground-rgb),1)]'
							: 'text-[rgba(var(--foreground-rgb),0.4)] hover:text-[rgba(var(--foreground-rgb),1)]'
					}`}
				>
					[p] {t('projects')}
				</Link>

				<Link
					href='/cv'
					prefetch={true}
					className={`transition-colors duration-200 hover:scale-102 ${
						page === '/cv'
							? 'text-[rgba(var(--foreground-rgb),1)] sm:text-[rgba(var(--foreground-rgb),0.4)] sm:hover:text-[rgba(var(--foreground-rgb),1)]'
							: 'text-[rgba(var(--foreground-rgb),0.4)] hover:text-[rgba(var(--foreground-rgb),1)]'
					}`}
				>
					[c] cv
				</Link>
			</div>
			<div>
				<div className='flex gap-8 mt-1 items-center '>
					<LanguageSwitcher />
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	);
}
