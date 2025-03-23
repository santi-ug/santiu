'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	// Ensure theme is set correctly and force an instant background update
	useEffect(() => {
		setMounted(true);
		if (resolvedTheme) {
			document.documentElement.setAttribute('data-theme', resolvedTheme);
		}
	}, [resolvedTheme]);

	if (!mounted) {
		// Prevent hydration mismatch by rendering a placeholder before mounting
		return (
			<FiSun size={17} className="text-quaternary" />
		);
	}

	return (
		<button
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			aria-label='Toggle Dark Mode'
			className='rounded-full text-quaternary transition-transform duration-200 hover:scale-110 cursor-pointer'
		>
			{resolvedTheme === 'dark' ? <FiMoon size={17} /> : <FiSun size={17} />}
		</button>
	);
}
