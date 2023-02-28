import Image from 'next/image'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigateArrow } from './ui/NavigateArrow'
import { NumSection } from './ui/NumSection'

import { Navigation } from 'swiper'
import slide1 from '../public/assets/images/slide1.svg'
import slide2 from '../public/assets/images/slide2.svg'
import slide3 from '../public/assets/images/slide3.svg'
import slide4 from '../public/assets/images/slide4.svg'
import slide5 from '../public/assets/images/slide5.svg'
import slide6 from '../public/assets/images/slide6.svg'

const slides = [
	{
		id: '01',
		image: slide1,
		step: 'шаг 1',
		title: 'Ваш звонок или заявка на сайте',
	},
	{
		id: '02',
		image: slide2,
		step: 'шаг 2',
		title: 'Обработка данных менеджерами',
	},
	{
		id: '03',
		image: slide3,
		step: 'шаг 3',
		title: 'Бесплатная консультация',
	},
	{
		id: '04',
		image: slide4,
		step: 'шаг 4',
		title: 'Онлайн-сбор необходимых данных',
	},
	{
		id: '05',
		image: slide5,
		step: 'шаг 5',
		title: 'Подписание документов онлайн',
	},
	{
		id: '06',
		image: slide6,
		step: 'шаг 6',
		title: 'Старт вашей деятельности',
	},
]

export const HowWeWork = () => {
	return (
		<section className="bg-[var(--light-gray)] rounded-3xl">
			<div className="md:grid md:grid-cols-3 h-full p-6 md:py-14 md:pl-14">
				<div className="flex flex-col md:justify-between">
					<div className="mb-10 md:mb-0">
						<NumSection
							number={'03'}
							title={'Как мы работаем'}
							variant={'green'}
						/>
					</div>
					<div className="flex items-center justify-center md:justify-start space-x-6 mb-6 md:mb-0">
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

				<div className="md:col-span-2 h-full">
					<Swiper
						loop={true}
						modules={[Navigation]}
						navigation={{
							nextEl: '#swiper-next',
							prevEl: '#swiper-prev',
						}}
						spaceBetween={40}
						slidesPerView={1.5}
						className="flex"
					>
						{slides.map(slide => (
							<SwiperSlide key={slide.id}>
								<div className="border-2 border-black rounded-2xl p-4 md:p-14 grid grid-rows-2">
									<div className="flex items-center justify-center w-full">
										<Image src={slide.image} width={150} height={150} alt="" />
									</div>
									<div className="flex flex-col items-start">
										<div className="bg-black text-white py-1 px-4 rounded-xl my-8">
											{slide.step}
										</div>
										<div className="text-2xl">{slide.title}</div>
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