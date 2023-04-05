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
			<Reviews reviews={allComments} />
			<Consultation numSection={'07'} />
		</>
	)
}

export default index
