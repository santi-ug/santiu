import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'!./node_modules',
	],
	darkMode: 'class',
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [import('@tailwindcss/typography')],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
			},
		},
	},
};
