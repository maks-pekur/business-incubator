import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Founders } from '../../components/Founders'
import { GreenSection } from '../../components/GreenSection'
import { Hero } from '../../components/Hero'
import { Personal } from '../../components/Personal'
import { Heading } from '../../components/ui/Heading'
import { LinkComponent } from '../../components/ui/LinkComponent'
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
				<meta
					name="keywords"
					content="incubator, business incubator team, it incubator, dream team"
				/>
			</Head>

			<Hero />
			<div className="py-20">
				<section className="pb-20 sticky bg-black">
					<div className="bg-white p-6 md:p-20 rounded-3xl ">
						<div className="mb-6 md:mb-0">
							<NumSection
								number={'01'}
								title={t('team:section')}
								variant={'green'}
							/>
						</div>
						<div className="flex justify-end w-full">
							<div className="md:max-w-[50%] space-y-4 md:space-y-10">
								<Heading tag={'h2'}>{t('team:title')}</Heading>
								<p className="text-gray-700 text-sm lg:text-xl leading-10">
									{t('team:subtitle')}
								</p>
							</div>
						</div>
						<Founders />
					</div>
				</section>
				<Personal />
				<GreenSection title={t('team:part')}>
					<div className="flex flex-col items-center space-y-6 md:space-y-14">
						<Heading classNames="max-w-[70%]" tag={'h4'}>
							{t('team:part_descr')}
						</Heading>
						<LinkComponent
							href={'/career'}
							title={t('team:part_btn')}
							variant={'black'}
						/>
					</div>
				</GreenSection>
			</div>
		</>
	)
}

export default Team
