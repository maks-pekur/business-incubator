import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { Consultation } from '../../components/Consultation'
import { Hero } from '../../components/Hero'
import { NumSection } from '../../components/ui/NumSection'
import { request } from '../../lib/datocms'

const section = {
	pl: '',
	uk: '',
	en: '',
	ru: '',
}

export async function getStaticProps({ locale }) {
	const formattedLocale = locale.split('-')[0]
	const graphqlRequest = {
		query: `
      {
        allFaqs(locale: ${formattedLocale}) {
					id
          question
					answer
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
		},
	}
}

const index = ({ subscription }) => {
	const {
		data: { allFaqs },
	} = useQuerySubscription(subscription)
	return (
		<>
			<Head></Head>
			<Hero />
			<section className="sticky bg-black pb-10">
				<div className="bg-white p-6 lg:p-20 rounded-3xl">
					<div className="mb-10">
						<NumSection number={'01'} variant={'green'} title={'F.A.Q.'} />
					</div>
					<div>
						{allFaqs.map(item => (
							<div
								key={item.id}
								className="border-b-[1px] border-black w-full p-3"
							>
								<Disclosure as="div">
									{({ open }) => (
										<>
											<Disclosure.Button className="w-full text-start py-3 md:text-2xl flex items-center justify-between">
												{item.question}
												<ChevronRightIcon
													className={open && 'rotate-90 transform'}
													width={24}
													height={24}
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="py-8">
												{item.answer}
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
