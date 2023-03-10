import { useRouter } from 'next/router'
import { animateScroll, Link } from 'react-scroll'

import Logo from './ui/Logo'

import Image from 'next/image'
import MailIcon from '../components/ui/MailIcon'
import PhoneIcon from '../components/ui/PhoneIcon'
import PointIcon from '../components/ui/PointIcon'

import { useEffect, useState } from 'react'
import facebook from '../public/assets/images/facebook.svg'
import insta from '../public/assets/images/insta.svg'
import linkedin from '../public/assets/images/linkedin.svg'
import tiktok from '../public/assets/images/tiktok.svg'

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
		<footer className="bg-transparent text-gray-400 relative py-10">
			<div className="grid md:grid-cols-4">
				<div className="md:col-span-2 text-white flex flex-col items-center justify-between">
					<div className="flex items-center h-full lg:ml-10 text-gray-400">
						<div>
							<Logo width={120} variant={'white'} />
						</div>
						<div className="text-[24px] border-l-2 border-white h-10 items-center pl-4 ml-4 hidden lg:flex">
							Freedom Business Area
						</div>
					</div>
					<div className="text-gray-400">
						{`© ${year} Freedom Business Area. All rights reserved.`}
					</div>
				</div>

				<div className="hidden md:flex w-full items-center justify-center text-gray-400">
					<div className="h-full flex flex-col justify-between">
						<div>
							<div className="mb-6 text-white">Контакты:</div>
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

						<Link
							href={''}
							className="hover:text-white transition duration-300"
						>
							Правила и Условия
						</Link>
					</div>
				</div>

				<div className="h-full hidden md:block">
					<div className="mb-6 text-white">Социальные сети:</div>
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
					<Link href={''} className="hover:text-white transition duration-300">
						Политика конфиденциальности
					</Link>
				</div>

				<div
					onClick={() => scrollToTop()}
					className="bg-white absolute right-14 lg:bottom-40 bottom-14 h-12 w-12 rounded-full flex items-center justify-center animate-bounce text-black"
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
		</footer>
	)
}
