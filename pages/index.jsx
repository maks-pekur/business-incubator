import { motion } from 'framer-motion'
import Head from 'next/head'
import { AboutUs } from '../components/AboutUs'
import { Consultation } from '../components/Consultation'
import { GreenSection } from '../components/GreenSection'
import { Hero } from '../components/Hero'
import { HowWeWork } from '../components/HowWeWork'
import { Heading } from '../components/ui/Heading'
import { VS } from '../components/VS'
import { WhatYouGet } from '../components/WhatYouGet'

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
				<Hero />
				<AboutUs />
				<WhatYouGet />
				<GreenSection
					title={'Бесплатная консультация'}
					textBtn={'Присоединиться'}
				></GreenSection>
				<HowWeWork />
				<VS />
				<section className="bg-[var(--dark-gray)] rounded-3xl px-20 py-10 sticky top-0 h-screen pb-10">
					<div className="text-white">
						<div className=" text-center pt-14 pb-20">
							<Heading tag={'h3'}>
								Зачем платить больше, если можно платить меньше.
							</Heading>
						</div>

						<div className="flex justify-between items-end gap-10 text-4xl mb-10">
							<div className="w-full h-[450px] border-[1px] border-white rounded-3xl relative overflow-hidden">
								<span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white font-bold text-5xl">
									~3653 PLN
								</span>
								<motion.div
									initial={{ y: '100%' }}
									whileInView={{ y: 0 }}
									transition={{ duration: 1.5 }}
									className="w-full h-full bg-gray-300 opacity-10 flex items-center justify-center"
								></motion.div>
							</div>
							<div className="w-full border-[1px] bg-[var(--green)] text-black border-white rounded-3xl flex items-center justify-center p-20">
								500 PLN
							</div>
						</div>
					</div>
				</section>
				<Consultation />
			</main>
		</>
	)
}

export default Home
