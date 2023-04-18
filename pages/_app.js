import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import CookieConsent from 'react-cookie-consent'
import { Modal } from '../components/Modal'
import { RootLayout } from '../components/RootLayout'
import { DeviceProvider } from '../hooks/useDevice'
import { ModalProvider } from '../hooks/useModal'

import '../styles/globals.css'

const coockieText = {
	message: {
		uk: 'Цей сайт використовує coockie-файли та інші технології для надання кращого користувацького досвіду та аналізу використання наших продуктів і послуг.',
		en: 'This site uses coockie files and other technologies to provide a better user experience and analysis of the use of our products and services.',
		pl: 'Ta strona internetowa wykorzystuje pliki coockie i inne technologie w celu zapewnienia lepszego doświadczenia użytkownika i analizy korzystania z naszych produktów i usług.',
		ru: 'Этот сайт использует coockie-файлы и другие технологии для предоставления лучшего пользовательского опыта и анализа использования наших продуктов и услуг.',
	},
	btn: {
		uk: 'Так, я згоден',
		en: 'Yes I agree',
		pl: 'Tak, zgadzam się.',
		ru: 'Да, я согласен.',
	},
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
				buttonText={coockieText.btn[locale]}
				cookieName="fba_coockie"
				expires={999}
				overlay
				style={{
					background: '#2B373B',
					display: 'flex',
					alignItems: 'center',
					textAlign: 'center',
					justifyContent: 'center',
					borderRadius: '0px 0px 30px 30px',
					padding: '10px 30px',
					zIndex: 10000,
					opacity: 1,
				}}
				buttonStyle={{
					color: '#4e503b',
					fontSize: '13px',
					background: '#BCEF30',
					borderRadius: '30px',
					padding: '12px 30px',
				}}
				overlayStyle={{
					backgroundColor: 'rgba(0,0,0,0.8)',
					zIndex: 9999,
				}}
			>
				{coockieText.message[locale]}
			</CookieConsent>
		</ModalProvider>
	)
}

export default appWithTranslation(App)
