import Hamburger from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { navLinks } from '../translations/header'
import SocialLinks from './ui/SocialLinks'

const flags = {
	pl: '/assets/images/pl.svg',
	en: '/assets/images/gb.svg',
	uk: '/assets/images/ua.svg',
	ru: '/assets/images/ru.svg',
}

export const Navbar = () => {
	const { pathname, locale, locales, asPath } = useRouter()
	const [lang, setLang] = useState(locale)
	const [isOpen, setOpen] = useState(false)

	const handleClick = locale => {
		setLang(locale)
		setOpen(false)
	}

	return (
		<nav>
			<div className="hidden md:block font-thin	">
				<div>
					<ul className="flex space-x-6 items-center text-[14px]">
						{navLinks.map(link => (
							<li key={link.id} onClick={() => setOpen(false)}>
								<Link
									className={`${
										pathname === link.path && 'text-[#bcef30]'
									} hover:text-[#bcef30] transition-colors duration-200`}
									href={link.path}
								>
									{link.title[locale]}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="md:hidden">
				<Hamburger size={22} toggled={isOpen} toggle={setOpen} />
			</div>
			{isOpen && (
				<div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-white">
					<div
						className="absolute top-6 right-6 text-xl"
						onClick={() => setOpen(false)}
					>
						X
					</div>
					<div className="flex flex-col items-center justify-between h-full py-24">
						<ul className="flex flex-col space-y-6 w-full items-center text-[26px]">
							{navLinks.map(link => (
								<li key={link.id} onClick={() => setOpen(false)}>
									<Link
										className={pathname === link.path ? 'activeLink' : ''}
										href={link.path}
									>
										{link.title[locale]}
									</Link>
								</li>
							))}
						</ul>
						<div>
							<div className="flex items-center justify-center my-10 space-x-6">
								{locales.map((l, index) => {
									return (
										<Link
											key={l}
											href={asPath}
											locale={l}
											onClick={() => handleClick(l)}
											className={`${
												lang === l ? 'opacity-40' : ''
											} border-[1px] border-black`}
										>
											<Image src={flags[l]} width={22} height={22} alt="" />
										</Link>
									)
								})}
							</div>
							<div className="flex flex-col items-center justify-center text-gray-500 text-[14px] space-y-8">
								<div className="flex flex-col items-center justify-center space-y-2">
									<Link href={'https://goo.gl/maps/sUhsAFsmjaRGcGPAA'}>
										Ogrodowa 58, Warszawa, 00-876
									</Link>
									<Link href="tel:48737308669">+48 737 308 669</Link>
								</div>
								<div>
									<SocialLinks fill={'#929292'} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}