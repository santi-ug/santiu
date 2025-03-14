export default function ExperienceRole({
	date,
	company,
	position,
	desc,
}: {
	date: string;
	company: string;
	position: string;
	desc: string;
}) {
	return (
		<div className='flex flex-col gap-2 sm:flex-row sm:gap-6 mb-4'>
			<h1 className='text-quaternary text-sm flex-shrink-0 min-w-[85px] mt-0.25'>
				{date}
			</h1>
			<div>
				<div className='flex flex-row gap-2 mb-2 items-center flex-wrap'>
					<h1 className='text-primary uppercase'>{company}</h1>
					<h2 className='text-secondary text-sm '>{position}</h2>
				</div>
				<p className='text-tertiary'>{desc}</p>
				{/* <div className='flex flex-wrap gap-2'>
					{techs.map((tech, index) => (
						<TextPill key={index} text={tech} />
					))}
				</div> */}
			</div>
		</div>
	);
}
