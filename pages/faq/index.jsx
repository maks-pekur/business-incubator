import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import { Consultation } from '../../components/Consultation'
import { Hero } from '../../components/Hero'
import { NumSection } from '../../components/ui/NumSection'

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

			<section className="sticky -top-[50vh] bg-black pb-10">
				<div className="bg-white p-6 lg:p-20 rounded-3xl">
					<div className="mb-10">
						<NumSection
							number={'01'}
							variant={'green'}
							title={t('faq:section')}
						/>
					</div>
					<div>
						{[...Array(10)].map((item, idx) => (
							<div className="border-b-[1px] border-black w-full p-3">
								<Disclosure as="div">
									{({ open }) => (
										<>
											<Disclosure.Button className="w-full text-start py-3 md:text-2xl flex items-center justify-between">
												{t(`faq:${idx + 1}.q`)}
												<ChevronRightIcon
													className={open && 'rotate-90 transform'}
													width={24}
													height={24}
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="py-8">
												{t(`faq:${idx + 1}.a`)}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						))}
					</div>
				</div>
			</section>
			<Consultation numSection={'02'} />
		</>
	)
}

export default index
