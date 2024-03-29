import { useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useDevice } from '../hooks/useDevice'
import { Navbar } from './Navbar'
import Logo from './ui/Logo'

export const Header = () => {
	const [header, setHeader] = useState(false)
	const { scrollY } = useScroll()
	const device = useDevice()

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > 90) {
			setHeader(true)
		} else {
			setHeader(false)
		}
	})

	return (
		<header
			className={`text-white fixed top-0 left-0 right-0 z-10 transition-all duration-1000  ${
				header && 'opacity-0'
			} ${device === 'mobile' && 'opacity-100'}`}
		>
			<div className="relative w-full flex justify-end lg:items-center lg:justify-between  p-4 md:pt-8 md:px-10 pb-4 z-50">
				<div className="items-center space-x-6 hidden lg:flex">
					<Logo width={70} height={70} variant={'white'} />
					<Link
						href="/"
						className="text-lg items-center hidden lg:flex border-l-2 border-white pl-4"
					>
						Freedom Business Area
					</Link>
				</div>
				<div>
					<Navbar header={header} />
				</div>
			</div>
		</header>
	)
}
