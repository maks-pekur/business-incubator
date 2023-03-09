import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDevice } from '../hooks/useDevice'
import google from '../public/assets/images/google.svg'
import Date from './ui/Date'
import { NavigateArrow } from './ui/NavigateArrow'
import { NumSection } from './ui/NumSection'
import { Rating } from './ui/Rating'

import 'swiper/css'

export const Reviews = ({ reviews }) => {
	const device = useDevice()
	return (
		<section className="pb-6 sticky top-0 bg-black">
			<div className="md:grid md:grid-cols-3 md:p-20 p-6 bg-[var(--light-gray)] rounded-3xl ">
				<div className="flex flex-col justify-between h-full">
					<div className="mb-6 md:mb-0">
						<NumSection number={'06'} title={'Отзывы'} variant={'green'} />
					</div>
					<div className="w-full flex items-center justify-center md:justify-start space-x-6 mb-10 md:mb-0">
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
				<div className="md:col-span-2 md:h-full w-full">
					<Swiper
						loop={true}
						modules={[Navigation]}
						navigation={{
							nextEl: '#swiper-next',
							prevEl: '#swiper-prev',
						}}
						spaceBetween={60}
						slidesPerView={device === 'mobile' ? 1 : 2}
						className="grid"
					>
						{reviews.map(review => (
							<SwiperSlide>
								<div className="rounded-2xl p-8 flex flex-col justify-between h-full bg-white shadow-md">
									<div>
										<div className="flex items-center space-x-4">
											<div>{review.user}</div>
											<div>
												<Rating value={review.rating} />
											</div>
										</div>
										<div className="text-[12px] mb-6">{review.text}</div>
									</div>
									<div className="flex items-center space-x-4 text-[12px]">
										<Image src={google} width={30} height={30} alt="google" />
										<Date dateString={review.date} />
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
