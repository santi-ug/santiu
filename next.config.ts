import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ['via.placeholder.com', 'robohash.org'],
	},
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
