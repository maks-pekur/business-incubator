import { appWithTranslation } from 'next-i18next'
import { ModalProvider } from '../contexts/ModalContext'

import Modal from '../components/Modal'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
		<ModalProvider>
			<Component {...pageProps} />
			<Modal />
		</ModalProvider>
	)
}

export default appWithTranslation(App)
