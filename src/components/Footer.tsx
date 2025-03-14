export default function Footer() {
	return (
		<footer className='text-quaternary mx-auto max-w-2xl px-8 py-12 pb-24 pt-12 text-sm '>
			<p className='flex flex-col gap-2'>
				© {new Date().getFullYear()} Santiago Uribe. All Rights Reserved.
				<span>santiu.co</span>
			</p>
		</footer>
	);
}
