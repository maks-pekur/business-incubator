import Image from 'next/image'
import { useRouter } from 'next/router'
import figure from '../public/assets/images/fgs-hero.jpeg'
import { hero } from '../translations/hero'
import { Heading } from './ui/Heading'

export const Hero = () => {
	const { locale } = useRouter()
	return (
		<section className="h-screen relative">
			<div className="absolute inset-0 opacity-90">
				<Image src={figure} fill />
			</div>
			<div className="absolute inset-0 flex items-center justify-center md:left-10 md:top-[60%]  text-white md:w-[45%]">
				<div className="space-y-2">
					<Heading tag={'h1'}>{hero.title[locale]}</Heading>
					<Heading tag={'h4'}>{hero.subtitle[locale]}</Heading>
				</div>
			</div>
		</section>
	)
}
