import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDevice } from '../hooks/useDevice'
import figure from '../public/assets/images/fgs-hero.jpeg'
import { hero } from '../translations/hero'
import { Heading } from './ui/Heading'

export const Hero = () => {
	const { locale } = useRouter()
	const device = useDevice()
	return (
		<section id="hero" className="sticky top-0 overflow-hidden w-full h-full">
			<div className="relative w-full min-h-screen">
				<motion.div
					initial={{
						scale: 1.3,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{ duration: 1.7 }}
					className="absolute inset-0"
				>
					<Image src={figure} fill style={{ objectFit: 'cover' }} />
				</motion.div>

				<div className="absolute inset-6 text-white flex items-center md:items-end md:left-10 md:w-[55%] mb-24">
					<motion.div
						initial={{
							y: '100%',
							x: '-100%',
							scale: 0,
							opacity: 0,
						}}
						animate={{
							y: 0,
							x: 0,
							scale: 1,
							opacity: 1,
						}}
						transition={{ duration: 1 }}
					>
						<Heading tag={'h1'} classNames={'mb-8 font-bold'}>
							{hero.title[locale]}
						</Heading>
						<Heading tag={'span'} classNames="text-white text-lg lg:text-2xl">
							{hero.subtitle[locale]}
						</Heading>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
