import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import figure from '../../public/assets/images/fgs-hero.jpeg'
import { Heading } from '../ui/Heading'

export const Hero = () => {
	const { t } = useTranslation()
	return (
		<section className="h-screen relative">
			<div className="absolute inset-0 opacity-90">
				<Image src={figure} fill />
			</div>
			<div className="absolute left-10 top-[60%] space-y-2 text-white w-[45%]">
				<Heading tag={'h1'}>{t('home:title')} </Heading>
				<Heading tag={'h4'}>{t('home:subtitle')}</Heading>
			</div>
		</section>
	)
}
