import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import umbrella from '../public/assets/images/umbrella.jpeg'
import { Heading } from './ui/Heading'
import { NumSection } from './ui/NumSection'

export const UmbrellaSection = () => {
	const { t } = useTranslation()
	return (
		<section className="sticky -top-24 md:top-0 h-screen bg-black mb-10">
			<div className="h-full p-6 md:px-20 md:pt-20 bg-white rounded-3xl overflow-hidden">
				<div className="mb-6 md:mb-0">
					<NumSection number={'01'} title={''} variant={'green'} />
				</div>
				<div className="w-full h-full grid md:grid-cols-2 gap-10">
					<div className="hidden md:flex items-end justify-center pointer-events-none">
						<Image
							src={umbrella}
							width={500}
							height={500}
							alt=""
							className="flex-end"
							style={{pointerEvents: "none"}}
						/>
					</div>
					<div className="md:space-y-10 space-y-4">
						<Heading tag={'h2'}>{t('services:01.title')}</Heading>
						<div className="text-gray-700 text-sm lg:text-xl leading-10 space-y-4 md:space-y-10">
							<p>{t('services:01.text1')}</p>
							<p>{t('services:01.text2')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
