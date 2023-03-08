import { Roboto } from '@next/font/google'
import { Footer } from './Footer'
import { Header } from './Header'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '400', '700'],
})

export const RootLayout = ({ children }) => {
	return (
		<div className={`${roboto.className} font-light tracking-normal	leading-10`}>
			<Header />
			<main className="scroll-smooth relative bg-black px-1 md:px-4">
				{children}
			</main>
			<Footer />
		</div>
	)
}
