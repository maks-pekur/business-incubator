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
					name="description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				{/* Twitter Tags */}
				<meta name="twitter:title" content="Freedom Business Area" />
				<meta
					name="twitter:description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				<meta name="twitter:image" content="/code-of-relevancy-logo.png" />
				<meta name="twitter:image:alt" content="Freedom Business Area" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@codeofrelevancy" />
				{/* Open Graph Tags */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Freedom Business Area" />
				<meta
					property="og:description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				<meta property="og:url" content="https://fba.ink" />
				<meta property="og:site_name" content="Freedom Business Area" />
				<meta property="og:image" content="/code-of-relevancy-logo.png" />
				<meta property="og:image:width" content="200" />
				<meta property="og:image:height" content="200" />
				<meta property="og:locale" content="en" />
				<meta
					name="keywords"
					content="incubator, business incubator, it incubator, freedom business area"
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
