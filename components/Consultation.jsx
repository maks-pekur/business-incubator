import { ContactForm } from './ui/ContactForm'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const Consultation = () => {
	return (
		<section id="consultation" className="bg-black sticky top-0">
			<div className="bg-[var(--green)] md:p-20 p-6 rounded-3xl">
				<div className="mb-10 md:mb-0">
					<NumSection
						number={'05'}
						title={'Бесплатная консультация'}
						variant={'black'}
					/>
				</div>
				<div className="w-full flex justify-end mb-10 md:mb-20">
					<div className="md:w-[50%]">
						<Heading tag={'h2'}>
							Оставляй заявку и наш менеджер свяжется с тобой.
						</Heading>
					</div>
				</div>
				<div>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
