import Link from 'next/link'
import { Navbar } from './Navbar'
import Logo from './ui/Logo'

export const Header = () => {
	return (
		<header className="text-white fixed top-0 left-0 w-full pt-8 px-10 pb-4 z-50">
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center space-x-6">
					<Logo width={70} height={70} variant={'white'} />
					<Link
						href="/"
						className="text-lg items-center hidden lg:flex border-l-2 border-white pl-4"
					>
						Freedom Business Area
					</Link>
				</div>
				<div>
					<Navbar />
				</div>
			</div>
		</header>
	)
}
