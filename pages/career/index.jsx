import Head from 'next/head'
import { Hero } from '../../components/Hero'
import { Resume } from '../../components/Resume'
import { Heading } from '../../components/ui/Heading'
import { NumSection } from '../../components/ui/NumSection'

const index = () => {
	return (
		<>
			<Head>
				<title>Freedom Business Area - Career</title>
				<meta property="og:title" content="Freedom Business Area" />
				<meta
					name="description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				<meta
					property="og:description"
					content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
				/>
				<meta name="twitter:title" content="Freedom Business Area " />
				<meta name="twitter:description" content="None" />
			</Head>

			<main className="relative overflow-x-hidden px-4">
				<Hero />
				<section className="bg-white p-14 rounded-3xl">
					<div>
						<div>
							<NumSection number={'01'} title={'Карьера'} variant={'green'} />
						</div>
						<div className="flex justify-end w-full mb-10 pr-10">
							<Heading tag={'h2'}>Отправить резюме</Heading>
						</div>
						<div>
							<Resume />
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default index
