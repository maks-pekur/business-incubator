import { useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Navbar } from './Navbar'
import Logo from './ui/Logo'

export const Header = () => {
	const [header, setHeader] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > 90) {
			setHeader(true)
		} else {
			setHeader(false)
		}
	})

	return (
		<header
			className={`text-white fixed top-0 left-0 w-full  z-50 ${
				header && 'text-black'
			}`}
		>
			<div className="w-full flex items-center justify-between relative pt-8 px-10 pb-4">
				<div
					className={`absolute -z-10 inset-0 rounded-b-3xl transition-all duration-300 ${
						header && 'bg-[var(--green)] opacity-80'
					}`}
				></div>
				<div className="flex items-center space-x-6">
					<Logo width={70} height={70} variant={'white'} />
					<Link
						href="/"
						className="text-lg items-center hidden lg:flex border-l-2 border-white pl-4"
					>
						Freedom Business Area
					</Link>
				</div>
				<div className={`${header && 'text-black'}`}>
					<Navbar />
				</div>
			</div>
		</header>
	)
}
