import ContactLink from 'components/ContactLink';
import ThemeSwitcher from 'components/ThemeSwitcher';
import Image from 'next/image';

// export default function Home() {
// 	return (
// 		<div className='grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
// 			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
// 				<div className='flex gap-4 items-center'>
// 					<Image
// 						className='dark:invert'
// 						src='/next.svg'
// 						alt='Next.js logo'
// 						width={38}
// 						height={38}
// 						priority
// 					/>
// 					<div>
// 						<h1 className='text-primary'>Santiago Uribe</h1>
// 						<h3 className='text-quaternary'>Software Engineer</h3>
// 					</div>
// 				</div>

// 				<div className='flex flex-col gap-4'>
// 					<h2 className='text-tertiary'>Links</h2>
// 					<div>
// 						{/* x, github, figma, email, cv */}
// 						<ThemeSwitcher />
// 					</div>
// 				</div>
// 			</main>
// 		</div>
// 	);
// }

export default function Home() {
	return (
		<div className='mx-auto flex max-w-2xl flex-col gap-16 px-8'>
			<Header />
			<Contact />
		</div>
	);
}

function Header() {
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
			<div className='flex '>
				<div className='flex flex-col'>
					<h1 className='text-primary'>Santiago Uribe Gil</h1>
					<h2 className='text-quaternary'>Software Engineer</h2>
				</div>
				<div className='mt-0.5 ml-2'>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}

function Contact() {
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-secondary'>Links</h1>
			<div className='flex items-center gap-12'>
				<ContactLink href='https://github.com/santi-ug' title='Github' />
				<ContactLink
					href='https://www.linkedin.com/in/santiuribeg'
					title='Linkedin'
				/>
				<ContactLink email='santi.uribegil@gmail.com' title='Email' />
			</div>
		</div>
	);
}
