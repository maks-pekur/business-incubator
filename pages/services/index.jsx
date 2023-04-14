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
import { LinkScroll } from '../../components/ui/LinkScroll'
import { request } from '../../lib/datocms'

export async function getStaticProps({ locale }) {
	const graphqlRequest = {
		query: `
      {
        comments: allComments(locale: ${locale}) {
          slug
          text
          user
          date
          rating
					path
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
				...graphqlRequest,
				initialData: await request(graphqlRequest),
				token: process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN,
			},
			...(await serverSideTranslations(locale, ['services'])),
		},
	}
}

const index = ({ props, subscription }) => {
	const { t } = useTranslation()
	const { data } = useQuerySubscription(subscription)

	return (
		<>
			<Head>
				<title>Freedom Business Area - Service</title>
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
					content="incubator, business incubator, it incubator, services business incubator"
				/>
			</Head>

			<Hero />
			<UmbrellaSection />
			<ServicePrice />
			<ExtraServices />
			<GreenSection title={t('services:consultation.title')}>
				<LinkScroll
					href={'consultation'}
					title={t('services:consultation.btn')}
					variant={'black'}
				/>
			</GreenSection>
			<ForWhom />
			<ServiceWhatYouGet />
			<Reviews reviews={data.comments} />
			<Consultation numSection={'07'} />
		</>
	)
}

export default index
