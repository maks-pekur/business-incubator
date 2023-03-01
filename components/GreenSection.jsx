import { Heading } from './ui/Heading'
import { LinkComponent } from './ui/Link'

export const GreenSection = ({ children, title, textBtn }) => {
	return (
		<section className="pb-6 sticky top-0 bg-black rounded-3xl">
			<div className="bg-[var(--green)] p-10 md:p-20 rounded-3xl ">
				<div className="flex flex-col items-center justify-center w-full h-full space-y-6 md:space-y-10 rounded-xl">
					<Heading tag={'h2'}>{title}</Heading>
					<div className="text-center flex items-center justify-center">
						{children}
					</div>
					<LinkComponent href={'/career'} variant={'black'} title={textBtn} />
				</div>
			</div>
		</section>
	)
}
