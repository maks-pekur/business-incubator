import { Footer } from './Footer'
import { Header } from './Header'

export const RootLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="scroll-smooth relative bg-black">{children}</div>
			<Footer />
		</>
	)
}
