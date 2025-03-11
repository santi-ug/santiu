'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<Image
				src='/images/sun.svg'
				width={36}
				height={36}
				alt='Loading Light/Dark Toggle'
				priority={false}
				title='Loading Light/Dark Toggle'
			></Image>
		);

	if (resolvedTheme === 'dark') {
		return (
			<FiSun
				className='cursor-pointer transition-transform duration-200 hover:scale-110'
				onClick={() => setTheme('light')}
			/>
		);
	}

	if (resolvedTheme === 'light') {
		return (
			<FiMoon
				className='cursor-pointer transition-transform duration-200 hover:scale-110'
				onClick={() => setTheme('dark')}
			/>
		);
	}
}
