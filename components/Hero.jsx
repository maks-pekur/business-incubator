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

	const Elem = ({ children }) => {
		const Tag = device === 'mobile' ? 'div' : 'motion.div'
		return <Tag>{children}</Tag>
	}

	return (
		<section id="hero" className="sticky top-0">
			<div className="relative w-full min-h-screen">
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
					<Image
						src={figure}
						fill
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</motion.div>

				<div className="absolute inset-6 text-white flex items-center md:items-end md:left-10 md:w-[55%] mb-24">
					<Elem
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
					>
						<Heading tag={'h1'} classNames={'mb-8'}>
							{hero.title[locale]}
						</Heading>
						<Heading tag={'h4'} classNames="text-gray-400">
							{hero.subtitle[locale]}
						</Heading>
					</Elem>
				</div>
			</div>
		</section>
	)
}
