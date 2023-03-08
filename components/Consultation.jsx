import { useRouter } from 'next/router'
import { consultation } from '../translations/consultation'
import { ContactForm } from './ui/ContactForm'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const Consultation = ({ numSection }) => {
	const { locale } = useRouter()
	return (
		<section id="consultation" className="bg-black sticky rounded-t-3xl">
			<div className="bg-[var(--green)] md:p-20 p-6 rounded-3xl">
				<div className="mb-10 md:mb-0">
					<NumSection
						number={numSection}
						title={consultation.section[locale]}
						variant={'black'}
					/>
				</div>
				<div className="w-full flex justify-end mb-10 md:mb-20">
					<div className="md:w-[50%]">
						<Heading tag={'h2'}>{consultation.title[locale]}</Heading>
					</div>
				</div>
				<div>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
