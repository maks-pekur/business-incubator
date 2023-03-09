import { Footer } from './Footer'
import { Header } from './Header'

export const RootLayout = ({ children }) => {
	return (
		<div className="leading-6 lg:leading-10">
			<Header />
			<main className="scroll-smooth relative bg-black px-1 md:px-4">
				{children}
			</main>
			<Footer />
		</div>
	)
}
