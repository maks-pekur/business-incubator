import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import figure from '../public/assets/images/fgs-hero.jpeg'
import { hero } from '../translations/hero'
import { Heading } from './ui/Heading'

export const Hero = () => {
	const { locale } = useRouter()
	return (
		<section id="hero" className="sticky inset-0">
			<div className="relative w-full h-screen">
				<motion.div
					initial={{
						scale: 1.5,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{ duration: 1.5 }}
					className="absolute inset-0"
				>
					<Image src={figure} fill />
				</motion.div>

				<div className="absolute inset-0 text-white flex items-center md:items-end md:left-10 md:w-[55%]">
					<motion.div
						initial={{
							y: '100%',
							x: '-100%',
							rotate: '50',
							scale: 0,
							opacity: 0,
						}}
						animate={{
							y: 0,
							x: 0,
							rotate: 0,
							scale: 1,
							opacity: 1,
						}}
						transition={{ duration: 1.2 }}
						className="space-y-6 mb-24 px-4"
					>
						<Heading tag={'h1'}>{hero.title[locale]}</Heading>
						<Heading tag={'h4'} classNames="text-gray-400">
							{hero.subtitle[locale]}
						</Heading>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
