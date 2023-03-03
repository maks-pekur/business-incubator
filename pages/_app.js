import { appWithTranslation } from 'next-i18next'
import { Modal } from '../components/Modal'
import { RootLayout } from '../components/RootLayout'
import { DeviceProvider } from '../hooks/useDevice'
import { ModalProvider } from '../hooks/useModal'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
		<ModalProvider>
			<DeviceProvider>
				<RootLayout>
					<Component {...pageProps} />
				</RootLayout>
				<Modal />
			</DeviceProvider>
		</ModalProvider>
	)
}

export default appWithTranslation(App)
