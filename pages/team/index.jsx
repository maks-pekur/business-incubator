import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Founders } from '../../components/Founders'
import { GreenSection } from '../../components/GreenSection'
import { Hero } from '../../components/Hero'
import { Personal } from '../../components/Personal'
import { Heading } from '../../components/ui/Heading'
import { NumSection } from '../../components/ui/NumSection'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['team'])),
		},
	}
}

const Team = () => {
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

			<Hero />
			<section className="bg-white p-14 rounded-3xl mb-8 sticky top-0">
				<div>
					<NumSection
						number={'01'}
						title={t('team:section')}
						variant={'green'}
					/>
				</div>
				<div className="flex justify-end w-full">
					<div className="max-w-[50%] space-y-6">
						<Heading tag={'h2'}>{t('team:title')}</Heading>
						<p>{t('team:subtitle')}</p>
					</div>
				</div>
				<Founders />
			</section>
			<Personal />
			<GreenSection title={t('team:part')} textBtn={t('team:part_btn')}>
				<p className="text-gray-400 max-w-[50%]">{t('team:part_descr')}</p>
			</GreenSection>
		</>
	)
}

export default Team
