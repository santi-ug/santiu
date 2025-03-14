'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Navbar() {
	const router = useRouter();
	const t = useTranslations('Navbar');

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			// Don't trigger if any input elements are focused or if event target is an input
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
					className='text-[rgba(var(--foreground-rgb),0.4)] hover:text-[rgba(var(--foreground-rgb),1)] transition-colors duration-200 hover:scale-102'
				>
					[h] home
				</Link>

				<Link
					href='/projects'
					className='text-[rgba(var(--foreground-rgb),0.4)] hover:text-[rgba(var(--foreground-rgb),1)] transition-colors duration-200 hover:scale-102'
				>
					[p] {t('projects')}
				</Link>
				<Link
					href='/cv'
					prefetch={true}
					className='text-[rgba(var(--foreground-rgb),0.4)] hover:text-[rgba(var(--foreground-rgb),1)] transition-colors duration-200 hover:scale-102'
				>
					[c] cv
				</Link>
			</div>
		</nav>
	);
}
