import Image from 'next/image'

import { NumSection } from './ui/NumSection'

import 'swiper/css'
import slide1 from '../public/assets/images/service-slide1.svg'
import slide2 from '../public/assets/images/service-slide2.svg'
import slide3 from '../public/assets/images/service-slide3.svg'

const slides = [
	{
		id: '01',
		image: slide1,
		title: 'Присяжный переводчик',
	},
	{
		id: '02',
		image: slide2,
		title: 'Налоговый консультант',
	},
	{
		id: '03',
		image: slide3,
		title: 'Кредитный брокер',
	},
]

export const ExtraServices = () => {
	return (
		<section className="md:p-14 p-6 bg-[var(--light-gray)] rounded-3xl mb-6">
			<div>
				<div className="mb-10">
					<NumSection
						number={'03'}
						title={'Дополнительные услуги'}
						variant={'green'}
					/>
				</div>
				<div className="grid md:grid-cols-3 gap-10">
					{slides.map(slide => (
						<div
							key={slide.id}
							className="border-2 border-black rounded-2xl flex flex-col"
						>
							<div className="flex items-center justify-center w-full h-full p-10">
								<Image src={slide.image} width={150} height={150} alt="" />
							</div>

							<div className="text-2xl text-center bg-black text-white w-full rounded-2xl p-10">
								{slide.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
