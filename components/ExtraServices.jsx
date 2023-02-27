import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { NavigateArrow } from './ui/NavigateArrow'
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
		<section className="p-14 bg-[var(--light-gray)] rounded-3xl">
			<div className="grid grid-cols-3 h-full">
				<div className="flex flex-col justify-between p-14">
					<div>
						<NumSection
							number={'03'}
							title={'Дополнительные услуги'}
							variant={'green'}
						/>
					</div>
					<div className="flex items-center space-x-6">
						<NavigateArrow
							direction={'left'}
							variant={'outline'}
							id={'swiper-prev'}
						/>
						<NavigateArrow
							direction={'right'}
							variant={'outline'}
							id={'swiper-next'}
						/>
					</div>
				</div>
				<div className="col-span-2 py-14 h-full">
					<Swiper
						loop={true}
						modules={[Navigation]}
						navigation={{
							nextEl: '#swiper-next',
							prevEl: '#swiper-prev',
						}}
						spaceBetween={40}
						slidesPerView={2}
						className="w-full h-full flex"
					>
						{slides.map(slide => (
							<SwiperSlide key={slide.id}>
								<div className="border-2 border-black h-full rounded-2xl pt-20 grid grid-rows-2">
									<div className="flex items-center justify-center w-full h-full">
										<Image src={slide.image} width={150} height={150} alt="" />
									</div>
									<div className="w-full h-full flex items-end justify-center">
										<div className="text-2xl text-center bg-black text-white w-full rounded-2xl p-10">
											{slide.title}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
