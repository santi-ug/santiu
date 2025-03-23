import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Header() {
	const t = useTranslations('Header');

	return (
		<header className='flex flex-row items-center gap-4'>
			<div className='relative h-12 w-12'>
				<Image
					alt='pfp'
					className='rounded-full'
					fill
					sizes="48px"
					src='https://robohash.org/PMV.png?set=set4'
				/>

				<div className='absolute -bottom-2 -right-2 rounded-full bg-[var(--background)] px-1 py-0.5 text-sm transition-colors duration-300'>
					✨
				</div>
			</div>
			<div className='flex flex-row justify-between w-full'>
				<div className='flex flex-col'>
					<h1 className='text-primary'>Santiago Uribe Gil</h1>
					<h2 className='text-quaternary'>{t('profession')}</h2>
				</div>
			</div>
		</header>
	);
}
