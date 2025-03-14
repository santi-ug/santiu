import clsx from 'clsx';
import ContactLink from 'components/ContactLink';
import ExperienceRole from 'components/ExperienceRole';
import Header from 'components/Header';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='mx-auto flex max-w-2xl flex-col gap-16 px-8'>
			<Header />
			<Contact />
			<About />
			<Experience />
		</div>
	);
}

function Contact() {
	const t = useTranslations();

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-tertiary'>{t('Links.title')}</h1>
			<div
				className={clsx(
					'flex flex-col gap-4',
					'sm:flex sm:flex-col sm:gap-4',
					'md:flex md:flex-row md:items-center md:gap-12'
				)}
			>
				<ContactLink href='https://x.com/hate_santi' title='X' />
				<ContactLink href='https://github.com/santi-ug' title='Github' />
				<ContactLink
					href='https://www.linkedin.com/in/santiuribeg'
					title='Linkedin'
				/>
				<ContactLink email='santi.uribegil@gmail.com' title='Email' />
				<ContactLink href={'/cv'} title='CV' />
			</div>
		</div>
	);
}

function About() {
	const t = useTranslations('About');

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-tertiary'>{t('title')}</h1>
			<p className='text-primary'>{t('par1')}</p>
			<p className='text-primary'>
				{t('par2start')}{' '}
				<Link className='underline' href={'/highlights'}>
					{t('par2underlined')}
				</Link>{' '}
				{t('par2end')}
			</p>
			<p className='text-primary'>{t('par3')}</p>
		</div>
	);
}

function Experience() {
	const t = useTranslations('Experience');

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-tertiary'>{t('title')}</h1>
			<ExperienceRole
				date={t('job1.date')}
				company={t('job1.company')}
				position={t('job1.position')}
				desc={t('job1.desc')}
			/>
			<ExperienceRole
				date={t('job2.date')}
				company={t('job2.company')}
				position={t('job2.position')}
				desc={t('job2.desc')}
			/>
		</div>
	);
}
