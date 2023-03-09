import { useTranslation } from 'react-i18next'
import { Button } from './ui/Button'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const AboutUs = () => {
	const { t } = useTranslation()
	return (
		<section className="bg-white md:h-screen rounded-3xl p-4 md:p-20 mb-6 sticky top-0">
			<div className="grid md:grid-cols-2">
				<div>
					<NumSection
						number={'01'}
						title={t('home:01.section')}
						variant={'green'}
					/>
				</div>
				<div className="w-full h-full 2xl:space-y-20 space-y-10 py-10 md:py-20 xl:pr-20 lg:pr-14">
					<Heading tag={'h2'}>{t('home:01.title')}</Heading>
					<div className="text-gray-400 text-sm md:text-lg 2xl:text-xl leading-10 space-y-4 lg:space-y-10">
						<p>{t('home:01.text.1')}</p>
						<p>{t('home:01.text.2')}</p>
					</div>
					<Button title={t('home:01.btn')} variant={'outline'} />
				</div>
			</div>
		</section>
	)
}
