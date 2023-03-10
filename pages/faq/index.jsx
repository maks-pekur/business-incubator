import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import { Hero } from '../../components/Hero'
import { Heading } from '../../components/ui/Heading'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['faq'])),
		},
	}
}

const index = () => {
	const { t } = useTranslation()

	return (
		<>
			<Head></Head>
			<Hero />
			<section className="p-20">
				<div className="bg-white">
					<div className="mb-10">
						<Heading tag={'h2'}>{t('services:05.title')}</Heading>
					</div>
					<div>
						{[...Array(10)].map((item, idx) => (
							<div className="border-b-[1px] w-full">
								<Disclosure as="div">
									{({ open }) => (
										<>
											<Disclosure.Button className="w-full text-start py-3 md:text-2xl flex items-center justify-between">
												{t(`services:05.questions.${idx + 1}.q`)}
												<ChevronRightIcon
													className={open && 'rotate-90 transform'}
													width={24}
													height={24}
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="py-8">
												{t(`services:05.questions.${idx + 1}.a`)}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default index
