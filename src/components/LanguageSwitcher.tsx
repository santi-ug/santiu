'use client';

import { LanguageIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

export default function LanguageSwitcher() {
	const pathname = usePathname();
	const router = useRouter(); // ✅ Allows programmatic navigation
	const [isPending, startTransition] = useTransition();

	// ✅ Extract current locale from the URL
	const currentLocale = pathname.startsWith('/es') ? 'es' : 'en';

	// ✅ Determine the next locale
	const nextLocale = currentLocale === 'en' ? 'es' : 'en';

	function handleChange() {
		startTransition(() => {
			// ✅ Replace the current locale in the pathname
			const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);

			// ✅ Push the new path without a full refresh
			router.push(newPath, { scroll: false });
		});
	}

	return (
		<button
			onClick={handleChange}
			className='relative flex items-center rounded-md transition hover:scale-105 cursor-pointer'
			disabled={isPending}
		>
			<LanguageIcon className='w-6 h-6 fill-[rgba(var(--foreground-rgb),0.4)]' />
			<span className='absolute -right-3.5 transition-opacity text-xs font-medium text-quaternary'>
				{nextLocale.toUpperCase()}
			</span>
		</button>
	);
}
