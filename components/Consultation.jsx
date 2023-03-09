import { useRouter } from 'next/router'
import { consultation } from '../translations/consultation'
import { ContactForm } from './ui/ContactForm'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const Consultation = ({ numSection, top }) => {
	const { locale } = useRouter()
	return (
		<section
			id="consultation"
			className={`bg-black sticky rounded-t-3xl ${top}`}
		>
			<div className="bg-[var(--green)] md:p-20 p-6 rounded-3xl">
				<div className="mb-10 md:mb-0">
					<NumSection
						number={numSection}
						title={consultation.section[locale]}
						variant={'black'}
					/>
				</div>
				<div>
					<div className="w-full flex flex-col items-end mb-10 md:mb-20">
						<div className="md:w-[50%] mb-10">
							<Heading tag={'h2'}>{consultation.title[locale]}</Heading>
						</div>
						<div className="lg:w-[50%]">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
