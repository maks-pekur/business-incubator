import { useTranslation } from 'react-i18next'
import { CircleSlider } from './CircleSlider'
import { NumSection } from './ui/NumSection'

export const WhatYouGet = () => {
	const { t } = useTranslation()
	return (
		<section className="rounded-t-3xl bg-black pb-28 sticky top-0">
			<div className="h-screen bg-[var(--dark-gray)] p-4 md:p-20 rounded-3xl">
				<div>
					<NumSection
						number={'02'}
						title={t('home:02.section')}
						variant={'green'}
						classNames={'text-white'}
					/>
				</div>
				<CircleSlider />
			</div>
		</section>
	)
}
