import Link from 'next/link'

import Navbar from './Navbar'
import { Button } from './ui/Button'
import Languages from './ui/Languages'
import Logo from './ui/Logo'

export const Header = () => {
	return (
		<header className="text-white font-['Roboto-100'] fixed top-0 w-full z-10 pt-10 px-10">
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
					<Button variant={"green"} title={'Присоедениться'} />
				</div>
			</div>
		</header>
	)
}
