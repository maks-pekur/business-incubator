import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import google from '../public/assets/images/google.svg'
import Date from './ui/Date'
import { NavigateArrow } from './ui/NavigateArrow'
import { NumSection } from './ui/NumSection'
import { Rating } from './ui/Rating'

export const Reviews = ({ reviews }) => {
	console.log(reviews)
	return (
		<section className="p-14 bg-[var(--light-gray)] rounded-3xl">
			<div className="grid grid-cols-3 h-full">
				<div className="flex flex-col justify-between h-full">
					<div>
						<NumSection number={'06'} title={'Отзывы'} variant={'green'} />
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
				<div className="col-span-2 h-full">
					<Swiper
						loop={true}
						modules={[Navigation]}
						navigation={{
							nextEl: '#swiper-next',
							prevEl: '#swiper-prev',
						}}
						spaceBetween={60}
						slidesPerView={2}
						className="w-full h-full flex"
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
