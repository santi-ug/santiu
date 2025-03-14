'use client';

import { useEffect, useState } from 'react';

interface TextPillProps {
	text?: string;
	className?: string;
}

export default function TextPill({ text, className = '' }: TextPillProps) {
	const [hovering, setHovering] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Check if dark mode is active
	useEffect(() => {
		// Initial check
		const checkDarkMode = () => {
			const isDark =
				document.documentElement.getAttribute('data-theme') === 'dark';
			setIsDarkMode(isDark);
		};

		checkDarkMode();

		// Set up observer to detect theme changes
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'data-theme') {
					checkDarkMode();
				}
			});
		});

		observer.observe(document.documentElement, { attributes: true });

		return () => observer.disconnect();
	}, []);

	return (
		<div
			className={`
        flex relative items-center justify-center
        h-[36px] w-fit px-5 my-3
        backdrop-blur-[15px]
        border rounded-[24px]
        pointer-events-auto
        transition-all duration-1000
        ${
					hovering
						? 'shadow-[0_5px_5px_rgba(0,0,0,0.25)]'
						: 'shadow-[0_5px_5px_rgba(0,0,0,0.15)]'
				}
        ${className}
      `}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			style={{
				backgroundColor: isDarkMode
					? 'rgba(242, 242, 242, 0.03)' // Dark mode
					: 'rgba(60, 60, 60, 0.1)', // Light mode
				borderColor: isDarkMode
					? hovering
						? 'rgba(242, 242, 242, 0.12)'
						: 'rgba(242, 242, 242, 0.08)' // Dark mode
					: hovering
					? 'rgba(60, 60, 60, 0.2)'
					: 'rgba(60, 60, 60, 0.18)', // Light mode
				transition:
					'box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1), border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
			}}
		>
			<span className='inline-block text-[14px] leading-[20px] text-secondary no-underline z-10 relative whitespace-nowrap'>
				{text}
			</span>
			<div
				className={`
          absolute inset-[2px] 
          rounded-[22px] 
          transition-all duration-300
        `}
				style={{
					backgroundColor: isDarkMode
						? hovering
							? 'rgba(255, 255, 255, 0.08)'
							: 'rgba(255, 255, 255, 0.03)' // Dark mode
						: hovering
						? 'rgba(0, 0, 0, 0.12)'
						: 'rgba(0, 0, 0, 0.08)', // Light mode
					boxShadow: hovering
						? `inset 0 0 2px ${
								isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.2)'
						  }`
						: 'none',
				}}
			/>
		</div>
	);
}
