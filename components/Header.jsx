import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { navBtn } from '../translations/header'
import { Navbar } from './Navbar'
import { Languages } from './ui/Languages'
import { LinkComponent } from './ui/Link'
import Logo from './ui/Logo'

export const Header = () => {
	const { locale } = useRouter()
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setScroll(window.scrollY > 90)
		}
		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header className="text-white font-['Roboto-100'] fixed top-0 w-full z-10 pt-8 px-10 pb-4">
			<div
				className={`absolute inset-0 ${
					scroll && 'bg-black opacity-80 z-[-10]'
				}`}
			></div>
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-6">
					<Logo width={70} height={70} variant={'white'} />
					<Link
						href="/"
						className="text-lg items-center hidden lg:flex border-l-2 border-white pl-4"
					>
						Freedom Business Area
					</Link>
				</div>
				<div className="hidden md:block lg:flex items-center space-x-10">
					<Navbar />
					<Languages classNames={'top-7'} />
					<LinkComponent
						href={'/'}
						variant={'green'}
						title={navBtn.title[locale]}
					/>
				</div>
			</div>
		</header>
	)
}
