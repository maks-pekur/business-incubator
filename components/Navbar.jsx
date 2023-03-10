import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { navBtn, navLinks } from '../translations/header'
import { Languages } from './ui/Languages'
import { LinkComponent } from './ui/LinkComponent'
import { LinkScroll } from './ui/LinkScroll'
import SocialLinks from './ui/SocialLinks'

const flags = {
	pl: '/assets/images/pl.svg',
	en: '/assets/images/gb.svg',
	uk: '/assets/images/ua.svg',
	ru: '/assets/images/xx.svg',
}

export const Navbar = ({ header }) => {
	const { pathname, locale, locales, asPath } = useRouter()
	const [lang, setLang] = useState(locale)
	const [isOpen, setOpen] = useState(false)

	const handleLang = locale => {
		setLang(locale)
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
		document.body.classList.add('overflow-hidden')
	}

	const handleClose = () => {
		setOpen(false)
		document.body.classList.remove('overflow-hidden')
	}

	return (
		<nav>
			<div
				className={`md:hidden text-white p-1 ${
					header &&
					'bg-[var(--green)] rounded-full flex items-center justify-center p-1 transition-colors duration-300'
				}`}
			>
				<Hamburger size={22} toggled={isOpen} toggle={handleOpen} />
			</div>
			{isOpen && (
				<div className="fixed inset-0 z-50 bg-[var(--green)] p-1">
					<div
						className="absolute top-6 right-6 text-xl"
						onClick={() => handleClose()}
					>
						X
					</div>
					<div className="flex flex-col items-center justify-between h-full py-24 bg-black rounded-3xl">
						<ul className="flex flex-col space-y-6 w-full items-center text-[26px]">
							{navLinks.map(link => (
								<li key={link.id} onClick={() => handleClose()}>
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
											onClick={() => handleLang(l)}
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
			<div className="hidden md:flex lg:items-center space-x-8">
				<div className="flex items-center space-x-6 mr-6">
					<ul className="flex space-x-6 items-center text-[14px]">
						{navLinks.map(link => (
							<motion.li
								initial={{
									y: -100,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{ duration: 1.5, type: 'tween' }}
								key={link.id}
								onClick={() => handleClose()}
							>
								<Link
									className={`p-2 ${
										pathname === link.path && 'border-b-2 '
									} hover:border-b-2 border-[var(--green)] transition-colors duration-300`}
									href={link.path}
								>
									{link.title[locale]}
								</Link>
							</motion.li>
						))}
					</ul>
					<Languages />
				</div>

				<div className="hidden lg:block">
					{pathname === '/team' ? (
						<LinkComponent
							href={'/career'}
							variant={'green'}
							title={navBtn.title[locale]}
						/>
					) : (
						<LinkScroll
							href={'consultation'}
							variant={'green'}
							title={navBtn.title[locale]}
						/>
					)}
				</div>
			</div>
		</nav>
	)
}
