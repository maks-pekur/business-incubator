import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useQuerySubscription } from 'react-datocms'
import { Consultation } from '../../components/Consultation'
import { ExtraServices } from '../../components/ExtraServices'
import { ForWhom } from '../../components/ForWhom'
import { GreenSection } from '../../components/GreenSection'
import { Hero } from '../../components/Hero'
import { Reviews } from '../../components/Reviews'
import { ServicePrice } from '../../components/ServicePrice'
import { ServiceWhatYouGet } from '../../components/ServiceWhatYouGet'
import { UmbrellaSection } from '../../components/UmbrellaSection'
import { request } from '../../lib/datocms'

export async function getStaticProps({ locale }) {
	const formattedLocale = locale.split('-')[0]
	const graphqlRequest = {
		query: `
      {
        allComments(locale: ${formattedLocale}) {
          slug
          text
          user
          date
          rating
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
          }
        }
      }
    `,
	}

	return {
		props: {
			subscription: {
				enabled: false,
				initialData: await request(graphqlRequest),
			},
			...(await serverSideTranslations(locale, ['services'])),
		},
	}
}

const index = ({ props, subscription }) => {
	const { t } = useTranslation()
	const { data } = useQuerySubscription(subscription)
	const { allComments } = data
	return (
		<>
			<Head>
				<title>Freedom Business Area - Service</title>
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
				<UmbrellaSection />
				<ServicePrice />
				<ExtraServices />
				<GreenSection
					title={'Бесплатная консультация'}
					textBtn={'Присоединиться'}
				/>
				<ForWhom />
				<ServiceWhatYouGet />
				<Reviews reviews={allComments} />
				<Consultation />
			</main>
		</>
	)
}

export default index
