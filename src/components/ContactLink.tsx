'use client';

import { useTranslations } from 'next-intl';
import type React from 'react';

export default function ContactLink({
	href,
	title,
	email,
}: {
	email?: string;
	href?: string;
	title: string;
}) {
	const t = useTranslations('Links');

	const handleClick = (e: React.MouseEvent) => {
		if (email) {
			e.preventDefault();
			window.open(`mailto:${email}`, '_blank');
		}
	};

	return (
		<span className='block items-center gap-4'>
			{href && (
				<a
					className='text-secondary hover:text-primary transition-opacity duration-150'
					href={href}
					rel='noopener noreferrer'
					target='_blank'
				>
					{t(title)}{' '}
					<svg
						className=' inline-block h-3 w-3'
						fill='none'
						stroke='currentColor'
						strokeWidth={1.5}
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</a>
			)}
			{email && (
				<a
					className='text-secondary hover:text-primary transition-opacity duration-150'
					href={`mailto:${email}`}
					rel='noopener noreferrer'
					target='_blank'
					onClick={email ? handleClick : undefined} // Only add event handler for `mailto:`
				>
					{t(title)}{' '}
					<svg
						className=' inline-block h-3 w-3'
						fill='none'
						stroke='currentColor'
						strokeWidth={1.5}
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</a>
			)}
		</span>
	);
}
