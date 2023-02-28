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
			<div className="absolute left-10 top-[60%] space-y-2 text-white w-[45%]">
				<Heading tag={'h1'}>{hero.title[locale]}</Heading>
				<Heading tag={'h4'}>{hero.subtitle[locale]}</Heading>
			</div>
		</section>
	)
}
