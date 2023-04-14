import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import { Hero } from '../../components/Hero'
import { Resume } from '../../components/Resume'
import { Heading } from '../../components/ui/Heading'
import { NumSection } from '../../components/ui/NumSection'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['career'])),
		},
	}
}

const index = () => {
	const { t } = useTranslation()
	return (
		<>
			<Head>
				<title>Freedom Business Area - Career</title>
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
					content="career business incubator, work in business incubator"
				/>
			</Head>

			<Hero />
			<section className="bg-white p-6 lg:p-20 sticky rounded-3xl">
				<div>
					<div className="mb-10 md:mb-0">
						<NumSection
							number={'01'}
							title={t('career:section')}
							variant={'green'}
						/>
					</div>
					<div className="flex justify-center md:justify-end w-full mb-10 md:pr-10">
						<Heading tag={'h2'}>{t('career:resume.title')}</Heading>
					</div>
					<div>
						<Resume />
					</div>
				</div>
			</section>
		</>
	)
}

export default index
