import { useRouter } from 'next/router'
import { animateScroll, Link } from 'react-scroll'

import { i18n } from '../constants'
import Logo from './ui/Logo'
import SocialLinks from './ui/SocialLinks'

import MailIcon from '../components/ui/MailIcon'
import PhoneIcon from '../components/ui/PhoneIcon'
import PointIcon from '../components/ui/PointIcon'

export const Footer = () => {
	const { locale } = useRouter()

	const scrollToTop = () => {
		animateScroll.scrollToTop()
	}

	return (
		<footer className="w-full min-h-80 bg-transparent text-white relative">
			<div className="h-full w-full p-6 grid items-center sm:grid-cols-3 space-y-10">
				<div>
					<div className="flex items-center justify-center">
						<div>
							<Logo width={120} variant={'white'} />
						</div>
						<div className="text-[24px] border-l-2 border-white h-[50%] items-center pl-4 ml-4 hidden lg:flex">
							Freedom Business Area
						</div>
					</div>
					<div className="p-6 text-gray-400 space-y-4">
						<Link href={''} className="block">
							ПРАВИЛА И УСЛОВИЯ
						</Link>
						<Link href={''} className="block">
							ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
						</Link>
					</div>
				</div>

				<div className="flex justify-center">
					<SocialLinks fill={'#a2a2a2'} />
				</div>

				<div className="flex w-full items-center justify-center">
					<div className="space-y-2">
						<h3 className="w-full md:text-left text-center">
							{i18n.footer[locale]}
						</h3>
						<div className="flex items-center text-[#929292] space-x-2">
							<PhoneIcon
								width={15}
								height={15}
								fill={'#929292'}
								stroke={'#929292'}
							/>
							<Link href="tel:+48737308669" className="text-[17px] ">
								+48 737 308 669
							</Link>
						</div>
						<div className="flex items-center text-[#929292] space-x-2">
							<MailIcon
								width={15}
								height={15}
								fill={'#929292'}
								stroke={'#929292'}
							/>
							<Link
								href="mailto:manager@mtk-logistics.ru"
								className="text-[17px] text-[#929292]"
							>
								office@fba.ink
							</Link>
						</div>
						<div className="flex items-center text-[#929292] space-x-2">
							<PointIcon
								width={15}
								height={15}
								fill={'#929292'}
								stroke={'#929292'}
							/>
							<Link
								href="https://goo.gl/maps/sUhsAFsmjaRGcGPAA"
								className="text-[17px] text-[#929292]"
							>
								Ogrodowa 58, <br /> Warszawa, 00-876
							</Link>
						</div>

						<div
							onClick={() => scrollToTop()}
							className="bg-white absolute right-14 bottom-14 h-12 w-12 rounded-full flex items-center justify-center animate-bounce text-black"
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
			</div>
		</footer>
	)
}
