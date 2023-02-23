import { CircleSlider } from './CircleSlider'
import { NumSection } from './ui/NumSection'

export const WhatYouGet = () => {
	return (
		<section className="bg-[var(--dark-gray)] p-14 rounded-3xl min-h-screen">
			<div className="h-full">
				<div>
					<NumSection
						number={'02'}
						title={'Что ты получишь'}
						variant={'green'}
						classNames={'text-white'}
					/>
				</div>
				<CircleSlider />
			</div>
		</section>
	)
}
