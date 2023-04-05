import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import { AboutUs } from '../components/AboutUs'
import { Consultation } from '../components/Consultation'
import { GreenSection } from '../components/GreenSection'
import { Hero } from '../components/Hero'
import { HowWeWork } from '../components/HowWeWork'
import { VS } from '../components/VS'
import { WhatYouGet } from '../components/WhatYouGet'
import { WhatYouGetMobile } from '../components/WhatYouGetMobile'
import { WhyPayMore } from '../components/WhyPayMore'
import { LinkScroll } from '../components/ui/LinkScroll'
import { useDevice } from '../hooks/useDevice'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['home'])),
		},
	}
}

const Home = () => {
	const device = useDevice()
	const { t } = useTranslation()
	return (
		<>
			<Head>
				<title>Freedom Business Area - Home</title>
				<meta
					name="keywords"
					content="incubator, business incubator, it incubator"
				/>
			</Head>

			<Hero />
			<AboutUs />
			{device === 'mobile' ? <WhatYouGetMobile /> : <WhatYouGet />}
			<GreenSection title={t('home:consultation.title')}>
				<LinkScroll
					href={'consultation'}
					title={t('home:consultation.btn')}
					variant={'black'}
				/>
			</GreenSection>
			<HowWeWork />
			<VS />
			<WhyPayMore />
			<Consultation numSection={'05'} />
		</>
	)
}

export default Home
