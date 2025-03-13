import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	const t = useTranslations();

	return (
		<header className='flex flex-row items-center gap-4'>
			<div className='relative h-12 w-12'>
				<Image
					alt='pfp'
					className='rounded-full'
					layout='fill'
					objectFit='contain'
					src='https://robohash.org/PMV.png?set=set4'
				/>

				<div className='absolute -bottom-2 -right-2 rounded-full bg-[var(--background)] px-1 py-0.5 text-sm transition-colors duration-300'>
					✨
				</div>
			</div>
			<div className='flex flex-row justify-between w-full'>
				<div className='flex flex-col'>
					<h1 className='text-primary'>Santiago Uribe Gil</h1>
					<h2 className='text-quaternary'>{t('Header.profession')}</h2>
				</div>
				<div className='flex flex-col  items-center relative mr-7'>
					<div className='flex flex-col absolute gap-1 items-center '>
						<div className='mr-4'>
							<LanguageSwitcher />
						</div>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
