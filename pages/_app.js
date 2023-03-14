import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import CookieConsent from 'react-cookie-consent'
import { Modal } from '../components/Modal'
import { RootLayout } from '../components/RootLayout'
import { DeviceProvider } from '../hooks/useDevice'
import { ModalProvider } from '../hooks/useModal'

import '../styles/globals.css'

const coockieText = {
	uk: 'Этот сайт использует coockie-файлы и другие технологии для предоставления лучшего пользовательского опыта и анализа использования наших продуктов и услуг.',
	en: 'Этот сайт использует coockie-файлы и другие технологии для предоставления лучшего пользовательского опыта и анализа использования наших продуктов и услуг.',
	pl: 'Этот сайт использует coockie-файлы и другие технологии для предоставления лучшего пользовательского опыта и анализа использования наших продуктов и услуг.',
	ru: 'Этот сайт использует coockie-файлы и другие технологии для предоставления лучшего пользовательского опыта и анализа использования наших продуктов и услуг.',
}
const App = ({ Component, pageProps }) => {
	const { locale } = useRouter()
	return (
		<ModalProvider>
			<DeviceProvider>
				<RootLayout>
					<Component {...pageProps} />
				</RootLayout>
				<Modal />
			</DeviceProvider>
			<CookieConsent
				location="top"
				buttonText="Ok"
				cookieName="fbacoockie"
				style={{
					background: '#2B373B',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '0px 0px 30px 30px',
				}}
				buttonStyle={{
					color: '#4e503b',
					fontSize: '13px',
					background: '#BCEF30',
					borderRadius: '30px',
					padding: '12px 30px',
				}}
				expires={150}
			>
				{coockieText[locale]}
			</CookieConsent>
		</ModalProvider>
	)
}

export default appWithTranslation(App)
