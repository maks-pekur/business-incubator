import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Hero } from '../../components/Hero'
import post1 from '../../public/assets/images/1.png'
import post2 from '../../public/assets/images/2.png'
import post3 from '../../public/assets/images/3.png'
import post4 from '../../public/assets/images/4.png'
import post5 from '../../public/assets/images/5.png'
import post6 from '../../public/assets/images/6.png'

const insta = [
	{
		id: '01',
		img: post1,
		href: 'https://www.instagram.com/p/CoC42xlsGjm/?igshid=YmMyMTA2M2Y=',
	},
	{
		id: '02',
		img: post2,
		href: 'https://www.instagram.com/p/Cn17R-vsebO/?igshid=YmMyMTA2M2Y=',
	},
	{
		id: '03',
		img: post3,
		href: 'https://www.instagram.com/reel/Cnwwmi6Bwwb/?igshid=YmMyMTA2M2Y=',
	},
	{
		id: '04',
		img: post4,
		href: 'https://www.instagram.com/p/CnmdMLfMBUg/?igshid=YmMyMTA2M2Y=',
	},
	{
		id: '05',
		img: post5,
		href: 'https://www.instagram.com/p/CnhZyH6Mw8f/?igshid=YmMyMTA2M2Y=',
	},
	{
		id: '06',
		img: post6,
		href: 'https://www.instagram.com/reel/CnXHQgwh68s/?igshid=YmMyMTA2M2Y=',
	},
]

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['contact'])),
		},
	}
}

const index = ({ props }) => {
	const { t } = useTranslation()

	return (
		<>
			<Head>
				<title>Freedom Business Area - Contacts</title>
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
			<div>
				<Hero />
			</div>
		</>
	)
}

export default index
