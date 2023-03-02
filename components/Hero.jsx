import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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
					className="absolute w-full h-full"
				>
					<Image src={figure} fill />
				</motion.div>
				<div className="absolute inset-0 flex items-end md:left-10 text-white md:w-[55%]">
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
						className="space-y-6 mb-24"
					>
						<Heading tag={'h1'}>{hero.title[locale]}</Heading>
						<Heading tag={'h4'} classNames="text-gray-400">
							{hero.subtitle[locale]}
						</Heading>
					</motion.div>
				</div>
				<Link
					href={'#section-1'}
					className="bg-white absolute right-24 bottom-24 h-12 w-12 rounded-full flex items-center justify-center animate-bounce rotate-180"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</Link>
			</div>
		</section>
	)
}
