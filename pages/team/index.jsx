import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Founders } from '../../components/Founders'
import { GreenSection } from '../../components/GreenSection'
import { Hero } from '../../components/Hero'
import { Personal } from '../../components/Personal'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['team'])),
		},
	}
}

const Team = ({ props }) => {
	const { t } = useTranslation()
	return (
		<>
			<Head>
				<title>Freedom Business Area - Team</title>
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
			<main className="pt-22 px-4">
				<Hero />
				<div className="space-y-8">
					<Founders />
					<Personal />
				</div>
				<GreenSection
					title={'Ты можешь стать частью нашей команды'}
					textBtn={'Карьера'}
				>
					<p className="text-gray-400 max-w-[50%]">
						Мы рады сообщить, что наш фонд стремительно развивается, как и штат
						сотрудников. Мы ищем целеустремлённых специалистов, желающих расти
						вместе с нами. Оставляй свою заявку.{' '}
					</p>
				</GreenSection>
			</main>
		</>
	)
}

export default Team
