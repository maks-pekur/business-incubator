import { appWithTranslation } from 'next-i18next'
import { Modal } from '../components/Modal'
import { RootLayout } from '../components/RootLayout'
import { ModalProvider } from '../contexts/ModalContext'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
		<ModalProvider>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
			<Modal />
		</ModalProvider>
	)
}

export default appWithTranslation(App)
