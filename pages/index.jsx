import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AboutUs } from '../components/AboutUs'
import { Callback } from '../components/Callback'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HowWeWork } from '../components/HowWeWork'
import { Hero } from '../components/ui/Hero'
import { VS } from '../components/VS'
import { WhatYouGet } from '../components/WhatYouGet'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['home'])),
		},
	}
}
const Home = () => {
	const { locale } = useRouter()
	const { t } = useTranslation()
	return (
		<>
			<Head>
				<title>Freedom Business Area - Home</title>
				<meta property="og:title" content="Freedom Business Area" />
				<meta
					name="description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				<meta
					property="og:description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				<meta name="twitter:title" content="Freedom Business Area - Home" />
				<meta name="twitter:description" content="None" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Freedom Business Area" />
				<meta property="og:title" content="Freedom Business Area" />
			</Head>
			<main className="px-4 relative">
				<Header />
				<Hero />
				<AboutUs />
				<WhatYouGet />
				<Callback />
				<HowWeWork />
				<VS />
				<Footer />
			</main>
		</>
	)
}

export default Home
