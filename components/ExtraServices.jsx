import Image from 'next/image'

import { NumSection } from './ui/NumSection'

import { useTranslation } from 'react-i18next'
import img1 from '../public/assets/images/service-card1.svg'
import img2 from '../public/assets/images/service-card2.svg'
import img3 from '../public/assets/images/service-card3.svg'
import { Heading } from './ui/Heading'

const cards = [
	{
		id: '01',
		image: img1,
		title: 'card1',
	},
	{
		id: '02',
		image: img2,
		title: 'card2',
	},
	{
		id: '03',
		image: img3,
		title: 'card3',
	},
]

export const ExtraServices = () => {
	const { t } = useTranslation()
	return (
		<section className="pb-6 sticky md:top-0 bg-black rounded-t-3xl">
			<div className="bg-[var(--light-gray)] rounded-3xl md:p-20 p-6 ">
				<div className="mb-10 md:mb-20">
					<NumSection
						number={'03'}
						title={t('services:03.section')}
						variant={'green'}
					/>
				</div>
				<div className="grid md:grid-cols-3 gap-10">
					{cards.map(card => (
						<div
							key={card.id}
							className="border-2 border-black rounded-3xl flex flex-col overflow-hidden"
						>
							<div className="flex items-center justify-center w-full h-full p-10">
								<Image src={card.image} width={150} height={150} alt="" />
							</div>

							<div className="bg-black text-white w-full rounded-2xl p-6 md:p-10">
								<Heading tag={'h4'} classNames={'text-center'}>
									{t(`services:03.${card.title}`)}
								</Heading>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
