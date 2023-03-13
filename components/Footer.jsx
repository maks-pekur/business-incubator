import { useRouter } from 'next/router'
import { animateScroll } from 'react-scroll'

import Logo from './ui/Logo'

import Image from 'next/image'
import MailIcon from '../components/ui/MailIcon'
import PhoneIcon from '../components/ui/PhoneIcon'
import PointIcon from '../components/ui/PointIcon'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import facebook from '../public/assets/images/facebook.svg'
import insta from '../public/assets/images/insta.svg'
import linkedin from '../public/assets/images/linkedin.svg'
import tiktok from '../public/assets/images/tiktok.svg'
import { footerTranslation } from '../translations/Footer'
export const Footer = () => {
	const { locale } = useRouter()
	const [year, setYear] = useState()

	useEffect(() => {
		const date = new Date()
		setYear(date.getFullYear())
	}, [])

	const scrollToTop = () => {
		animateScroll.scrollToTop()
	}

	return (
		<footer className="bg-transparent text-gray-400 relative p-10">
			<div className="grid md:grid-cols-5">
				<div className="md:col-span-2 text-white flex items-center justify-center md:justify-between">
					<div className="flex items-center h-full text-gray-400">
						<div>
							<Logo width={120} variant={'white'} />
						</div>
						<div className="text-[24px] border-l-2 border-white h-10 items-center pl-4 ml-4 hidden lg:flex">
							Freedom Business Area
						</div>
					</div>
				</div>

				<div className="hidden h-full md:flex justify-end">
					<div>
						<div className="mb-6 text-white">
							{footerTranslation.contact[locale]}
						</div>
						<div className="flex items-center space-x-3">
							<PhoneIcon
								width={15}
								height={15}
								fill={'#929292'}
								stroke={'#929292'}
							/>
							<Link
								href="tel:+48737308669"
								className="hover:text-white transition duration-300"
							>
								+48 737 308 669
							</Link>
						</div>
						<div className="flex items-center space-x-3">
							<MailIcon
								width={15}
								height={15}
								fill={'#929292'}
								stroke={'#929292'}
							/>
							<Link
								href="mailto:manager@mtk-logistics.ru"
								className="hover:text-white transition duration-300"
							>
								office@fba.ink
							</Link>
						</div>
						<div className="flex items-center space-x-3">
							<PointIcon
								width={15}
								height={15}
								fill={'#929292'}
								stroke={'#929292'}
							/>
							<Link
								href="https://goo.gl/maps/sUhsAFsmjaRGcGPAA"
								className="hover:text-white transition duration-300 leading-normal"
							>
								Ogrodowa 58, <br /> Warszawa, 00-876
							</Link>
						</div>
					</div>
				</div>

				<div className="hidden md:flex justify-end">
					<div>
						<div className="mb-6 text-white">
							{footerTranslation.social[locale]}
						</div>
						<div className="flex flex-col">
							<Link
								href={''}
								className="hover:text-white transition duration-300 flex space-x-3"
							>
								<Image src={insta} width={20} height={20} alt="" />
								<span>Instagram</span>
							</Link>
							<Link
								href={''}
								className="hover:text-white transition duration-300 flex space-x-3"
							>
								<Image src={linkedin} width={20} height={20} alt="" />
								<span>Linkedln</span>
							</Link>
							<Link
								href={''}
								className="hover:text-white transition duration-300 flex space-x-3"
							>
								<Image src={tiktok} width={20} height={20} alt="" />
								<span>TikTok</span>
							</Link>
							<Link
								href={''}
								className="hover:text-white transition duration-300 flex space-x-3"
							>
								<Image src={facebook} width={20} height={20} alt="" />
								<span>Facebook</span>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<div
						onClick={() => scrollToTop()}
						className="bg-white h-12 w-12 rounded-full flex items-center justify-center animate-bounce text-black"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5 rotate-180"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="hidden md:grid grid-cols-5 text-gray-400">
				<div className="col-span-2">
					{`© ${year} Freedom Business Area. All rights reserved.`}
				</div>
				<div className="flex justify-end">
					<Link href={'/'} className="hover:text-white transition duration-300">
						Terms & Conditions
					</Link>
				</div>
				<div className="flex justify-end">
					<Link
						href={'/cookies'}
						className="hover:text-white transition duration-300"
					>
						Cookies policy
					</Link>
				</div>
				<div className="flex justify-center">
					<Link
						href={'/privacy'}
						className="hover:text-white transition duration-300"
					>
						Privacy policy
					</Link>
				</div>
			</div>
		</footer>
	)
}
