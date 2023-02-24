import { Footer } from './Footer'
import { Header } from './Header'

export const RootLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
