import Head from 'next/head'
import { AboutUs } from '../components/AboutUs'
import { Consultation } from '../components/Consultation'
import { GreenSection } from '../components/GreenSection'
import { Hero } from '../components/Hero'
import { HowWeWork } from '../components/HowWeWork'
import { LinkScroll } from '../components/ui/LinkScroll'
import { VS } from '../components/VS'
import { WhatYouGet } from '../components/WhatYouGet'
import { WhyPayMore } from '../components/WhyPayMore'
import { useDevice } from '../hooks/useDevice'
const Home = () => {
	const device = useDevice()
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

			<Hero />
			<AboutUs />
			<WhatYouGet />
			<GreenSection
				title={'Бесплатная консультация'}
				textBtn={'Присоединиться'}
				href={'consultation'}
			>
				<LinkScroll
					href={'consultation'}
					title={'Присоединиться'}
					variant={'black'}
				/>
			</GreenSection>
			<HowWeWork />
			<VS />
			<WhyPayMore />
			<Consultation />
		</>
	)
}

export default Home
