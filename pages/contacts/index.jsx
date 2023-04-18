import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
				<meta name="keywords" content="contacts business incubator" />
			</Head>

			<Hero />
			<section className="sticky bg-black pb-20 -top-[50vh]">
				<div className="bg-white p-6 md:p-20 rounded-3xl">
					<div className="mb-8 md:mb-0">
						<NumSection
							number={'01'}
							title={t('contact:section')}
							variant={'green'}
						/>
					</div>
					<div className="w-full flex flex-col items-end">
						<div className="md:max-w-[50%] mb-10">
							<Heading tag={'h2'} classNames="mb-8">
								{t('contact:title')}
							</Heading>
							<Heading tag={'h4'} classNames={'text-gray-500 mb-4'}>
								{t('contact:text_1')}
							</Heading>
							<div className="text-sm text-gray-500 mb-6">
								{t('contact:text_2')}{' '}
								<Link
									href="/privacy"
									target="_blank"
									className="text-black underline"
								>
									{t('contact:text_3')}
								</Link>
							</div>
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
									{t('contact:street')} <br /> {t('contact:warsaw')}
								</Link>
							</div>
							<div className="md:w-[50%] flex items-center space-x-6 border-t-[1px] border-black py-6"></div>
						</div>
					</div>
					<Partners />
				</div>
			</section>
		</>
	)
}

export default index
