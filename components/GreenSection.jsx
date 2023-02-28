import { Heading } from './ui/Heading'
import { LinkComponent } from './ui/Link'

export const GreenSection = ({ children, title, textBtn }) => {
	return (
		<section className="bg-white p-2">
			<div className="bg-[var(--green)] p-10 md:p-20 flex flex-col items-center justify-center w-full h-full space-y-6 md:space-y-10 rounded-xl">
				<Heading tag={'h2'}>{title}</Heading>
				<div className="text-center flex items-center justify-center">
					{children}
				</div>
				<LinkComponent href={'/career'} variant={'black'} title={textBtn} />
			</div>
		</section>
	)
}
