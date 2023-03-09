import { Montserrat } from '@next/font/google'
import { appWithTranslation } from 'next-i18next'
import { Modal } from '../components/Modal'
import { RootLayout } from '../components/RootLayout'
import { DeviceProvider } from '../hooks/useDevice'
import { ModalProvider } from '../hooks/useModal'

import '../styles/globals.css'

const montserrat = Montserrat({
	subsets: ['latin'],
	style: ['normal'],
	weight: ['100', '300', '700'],
})

const App = ({ Component, pageProps }) => {
	return (
		<ModalProvider>
			<DeviceProvider>
				<div className={`${montserrat.className} leading-6 lg:leading-10`}>
					<RootLayout>
						<Component {...pageProps} />
					</RootLayout>
					<Modal />
				</div>
			</DeviceProvider>
		</ModalProvider>
	)
}

export default appWithTranslation(App)
