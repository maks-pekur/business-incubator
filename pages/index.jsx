import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import {
	batch,
	Fade,
	FadeIn,
	Move,
	Sticky,
	StickyIn,
	ZoomIn,
} from 'react-scroll-motion'
import { AboutUs } from '../components/AboutUs'
import { Consultation } from '../components/Consultation'
import { GreenSection } from '../components/GreenSection'
import { Hero } from '../components/Hero'
import { HowWeWork } from '../components/HowWeWork'
import { LinkScroll } from '../components/ui/LinkScroll'
import { VS } from '../components/VS'
import { WhatYouGet } from '../components/WhatYouGet'
import { WhatYouGetMobile } from '../components/WhatYouGetMobile'
import { WhyPayMore } from '../components/WhyPayMore'
import { useDevice } from '../hooks/useDevice'

import dynamic from 'next/dynamic'

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
	const Animator = dynamic(
		import('react-scroll-motion').then(it => it.Animator),
		{ ssr: false }
	)
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
	const FadeUp = batch(Fade(), Move(), Sticky())
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
