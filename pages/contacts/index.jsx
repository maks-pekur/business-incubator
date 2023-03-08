import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Consultation } from '../../components/Consultation'
import { Hero } from '../../components/Hero'
import { Partners } from '../../components/Partners'
import { Heading } from '../../components/ui/Heading'
import { NumSection } from '../../components/ui/NumSection'
import SocialLinks from '../../components/ui/SocialLinks'
import local from '../../public/assets/images/local.svg'
import mail from '../../public/assets/images/mail.svg'
import phone from '../../public/assets/images/phone.svg'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['contact'])),
		},
	}
}

const index = () => {
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

			<Hero />
			<section className="sticky bg-black pb-20 -top-24">
				<div className="bg-white p-6 md:p-20 rounded-3xl">
					<div className="mb-8 md:mb-0">
						<NumSection number={'01'} title={'Контакты'} variant={'green'} />
					</div>
					<div className="w-full flex flex-col items-end">
						<div className="md:max-w-[50%] space-y-10 mb-10">
							<Heading tag={'h2'}>Свяжись с нами</Heading>
							<Heading tag={'h4'} classNames={'text-gray-500'}>
								Мы с радостью ответим на все волнующие тебя вопросы! Отравляй
								свою заявку и наш менеджер свяжется с тобой.
							</Heading>
							<SocialLinks fill={'#929292'} />
						</div>
						<div className="w-full flex flex-col md:items-end mb-10">
							<div className="md:w-[50%] flex items-center space-x-6 border-t-[1px] border-black py-6">
								<Image src={mail} width={40} height={40} alt="mail" />
								<Link href={'mailto:office@fba.ink'}>office@fba.ink</Link>
							</div>
							<div className="md:w-[50%] flex items-center space-x-6 border-t-[1px] border-black py-6">
								<Image src={phone} width={40} height={40} alt="mail" />
								<Link href={'tel:+48737308669'}>+48 737 308 669</Link>
							</div>
							<div className="md:w-[50%] flex items-center space-x-6 border-t-[1px] border-black py-6">
								<Image src={local} width={40} height={40} alt="mail" />
								<Link
									href="https://goo.gl/maps/pv7HM48oZC6Hby247"
									target="_blank"
								>
									Ogrodowa 58 <br /> Warszawa, 00-876
								</Link>
							</div>
							<div className="md:w-[50%] flex items-center space-x-6 border-t-[1px] border-black py-6"></div>
						</div>
					</div>
					<Partners />
				</div>
			</section>

			<Consultation />
		</>
	)
}

export default index
