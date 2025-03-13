import ContactLink from 'components/ContactLink';
import Header from 'components/Header';
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
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-tertiary'>Links</h1>
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

function About() {
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-tertiary'>About Me</h1>
			<p>
				I&apos;m passionate about turning ideas into seamless digital solutions,
				where code, design, and innovation come together effortlessly. If
				I&apos;m not coding, I&apos;m probably at the gym, playing guitar, or
				watching anime.
			</p>
			<p>
				Check out my{' '}
				<Link className='underline' href={'/highlights'}>
					highlights and projects
				</Link>{' '}
				to get a better sense of my work.
			</p>
			<p>
				Currently studying Software Engineering at UAM. I bring curiosity,
				precision, and a keen eye for detail, shoot me a message and let&apos;s
				bring your idea to life!
			</p>
		</div>
	);
}

function Experience() {
	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-tertiary'>Experience</h1>
			<p>
				Currently studying Software Engineering at UAM. I bring curiosity,
				precision, and a keen eye for detail, shoot me a message and let&apos;s
				bring your idea to life!
			</p>
		</div>
	);
}
