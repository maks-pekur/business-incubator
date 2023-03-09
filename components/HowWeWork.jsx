import Image from 'next/image'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigateArrow } from './ui/NavigateArrow'
import { NumSection } from './ui/NumSection'

import { useTranslation } from 'react-i18next'
import { Autoplay, Navigation } from 'swiper'
import { useDevice } from '../hooks/useDevice'

import { howWeWorkList } from '../constants'

export const HowWeWork = () => {
	const device = useDevice()
	const { t } = useTranslation()
	return (
		<section className="bg-black sticky md:h-screen top-0 pb-10">
			<div className="bg-[var(--light-gray)] rounded-3xl md:grid md:grid-cols-3 h-full p-6 md:py-20 md:pl-20">
				<div className="flex flex-col md:justify-between mb-10 lg:mb-20">
					<div className="mb-10 md:mb-0">
						<NumSection
							number={'03'}
							title={t('home:03.section')}
							variant={'green'}
						/>
					</div>
					<div className="flex items-center justify-center md:justify-start space-x-8 md:mb-0">
						<NavigateArrow
							direction={'left'}
							variant={'outline'}
							id={'swiper-prev-work'}
						/>
						<NavigateArrow
							direction={'right'}
							variant={'outline'}
							id={'swiper-next-work'}
						/>
					</div>
				</div>

				<div className="md:col-span-2 h-full flex items-center mb-14 md:mb-0">
					<div className="flex w-full">
						<Swiper
							modules={[Navigation, Autoplay]}
							loop={true}
							navigation={{
								nextEl: '#swiper-next-work',
								prevEl: '#swiper-prev-work',
							}}
							spaceBetween={40}
							slidesPerView={device === 'mobile' ? 1 : 2}
						>
							{howWeWorkList.map((card, idx) => (
								<SwiperSlide key={card.id}>
									<div className="border-2 border-black rounded-2xl p-4 md:p-10 h-full flex flex-col justify-between">
										<div className="flex items-center justify-center w-full">
											<Image src={card.image} width={200} height={200} alt="" />
										</div>
										<div className="flex flex-col items-start">
											<div className="bg-black text-white py-1 px-4 rounded-xl my-8 text-xl lg:text-2xl">
												{t(`home:03.card${idx + 1}.${card.step}`)}
											</div>
											<div className="text-2xl xl:text-2xl min-h-[100px]">
												{t(`home:03.card${idx + 1}.${card.title}`)}
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
