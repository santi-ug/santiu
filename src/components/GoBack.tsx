'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
	const router = useRouter();

	return (
		<div className='flex items-center justify-between mb-12 text-sm mx-auto max-w-2xl px-8'>
			<button
				onClick={() => router.back()} // Goes back to the previous page
				className='text-[rgba(var(--foreground-rgb),1)] hover:text-[rgba(var(--foreground-rgb),0.6)] transition-colors duration-200 hover:scale-102 cursor-pointer'
			>
				cd ..
			</button>
		</div>
	);
}
