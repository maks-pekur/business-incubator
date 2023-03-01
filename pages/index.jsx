// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import {
	Animator,
	batch,
	Fade,
	ScrollContainer,
	ScrollPage,
} from 'react-scroll-motion'
import { AboutUs } from '../components/AboutUs'
import { Consultation } from '../components/Consultation'
import { GreenSection } from '../components/GreenSection'
import { Hero } from '../components/Hero'
import { HowWeWork } from '../components/HowWeWork'
import { VS } from '../components/VS'
import { WhatYouGet } from '../components/WhatYouGet'

// export async function getStaticProps({ locale }) {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale, ['home'])),
// 		},
// 	}
// }


const Home = () => {
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
			<main className="relative px-4">
				<ScrollContainer>
					<ScrollPage>
						<Animator animation={batch(Fade())}>
							<Hero />
						</Animator>
					</ScrollPage>
					<AboutUs />
					<WhatYouGet />
					<GreenSection
						title={'Бесплатная консультация'}
						textBtn={'Присоединиться'}
					></GreenSection>
					<HowWeWork />
					<VS />
					<Consultation />
				</ScrollContainer>
			</main>
		</>
	)
}

export default Home
