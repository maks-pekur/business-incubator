import Image from 'next/image'

import { NumSection } from './ui/NumSection'

import img1 from '../public/assets/images/service-card1.svg'
import img2 from '../public/assets/images/service-card2.svg'
import img3 from '../public/assets/images/service-card3.svg'
import { Heading } from './ui/Heading'

const cards = [
	{
		id: '01',
		image: img1,
		title: 'Присяжный переводчик',
	},
	{
		id: '02',
		image: img2,
		title: 'Налоговый консультант',
	},
	{
		id: '03',
		image: img3,
		title: 'Кредитный брокер',
	},
]

export const ExtraServices = () => {
	return (
		<section className="pb-6 sticky bg-black rounded-t-3xl">
			<div className="bg-[var(--light-gray)] rounded-3xl md:p-20 p-6 ">
				<div className="mb-10 md:mb-20">
					<NumSection
						number={'03'}
						title={'Дополнительные услуги'}
						variant={'green'}
					/>
				</div>
				<div className="grid md:grid-cols-3 gap-10">
					{cards.map(slide => (
						<div
							key={slide.id}
							className="border-2 border-black rounded-3xl flex flex-col overflow-hidden"
						>
							<div className="flex items-center justify-center w-full h-full p-10">
								<Image src={slide.image} width={150} height={150} alt="" />
							</div>

							<div className="bg-black text-white w-full rounded-2xl p-6 md:p-10">
								<Heading tag={'h4'} classNames={'text-center'}>
									{slide.title}
								</Heading>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
