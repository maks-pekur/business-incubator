import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'
import { Swiper, SwiperSlide } from 'swiper/react'
import circl from '../public/assets/images/circle-group.svg'
import { Heading } from './ui/Heading'
import { NavigateArrow } from './ui/NavigateArrow'

import { circlList } from '../constants'

export const CircleSlider = () => {
	const [corner, setCorner] = useState(0)
	const { t } = useTranslation()

	const nextSlide = () => {
		setCorner(prev => prev + 45)
	}

	const prevSlide = () => {
		setCorner(prev => prev - 45)
	}

	return (
		<div className="flex items-center justify-between h-full w-full relative">
			<NavigateArrow
				direction={'left'}
				variant={'white'}
				id={'swiper-prev-circle'}
				onClick={() => prevSlide()}
			/>

			<div className="overflow-hidden w-full h-full relative">
				<Image
					src={circl}
					fill
					alt="circl"
					style={{
						transform: `rotate(${corner}deg)`,
						transition: 'all 0.5s linear',
					}}
				/>
				<div className="absolute inset-0 flex items-center justify-center text-center">
					<div className="max-w-[200px]">
						<Swiper
							modules={[Navigation]}
							loop={true}
							spaceBetween={40}
							navigation={{
								nextEl: '#swiper-next-circle',
								prevEl: '#swiper-prev-circle',
							}}
						>
							<div>
								{circlList.map(item => (
									<SwiperSlide
										className="text-white w-full h-full"
										key={item.id}
									>
										<Heading tag={'h4'}>
											{t(`home:02.circl.${item.title}`)}
										</Heading>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
					</div>
				</div>
			</div>

			<NavigateArrow
				direction={'right'}
				id={'swiper-next-circle'}
				variant={'white'}
				onClick={() => nextSlide()}
			/>
		</div>
	)
}
