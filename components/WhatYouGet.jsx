import { CircleSlider } from './CircleSlider'
import { NumSection } from './ui/NumSection'

export const WhatYouGet = () => {
	return (
		<section className="bg-[var(--dark-gray)] p-20 rounded-3xl mb-6 sticky -top-24">
			<div>
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
