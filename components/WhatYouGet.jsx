import { CircleSlider } from './CircleSlider'
import { NumSection } from './ui/NumSection'

export const WhatYouGet = () => {
	return (
		<section className="rounded-t-3xl bg-black pb-28 sticky top-0">
			<div className="h-screen bg-[var(--dark-gray)] p-4 md:p-20 rounded-3xl">
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
