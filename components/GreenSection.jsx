import { Button } from './ui/Button'
import { Heading } from './ui/Heading'

export const GreenSection = ({ children, title, textBtn }) => {
	return (
		<section className="bg-white p-2">
			<div className="bg-[var(--green)] p-20 flex flex-col items-center justify-center w-full h-full space-y-10 rounded-xl">
				<Heading tag={'h2'}>{title}</Heading>
				<div className="text-center flex items-center justify-center">
					{children}
				</div>
				<Button variant={'black'} title={textBtn} />
			</div>
		</section>
	)
}
