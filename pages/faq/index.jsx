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
	const graphqlRequest = {
		query: `
      {
        faqs: allFaqs(locale: ${locale}) {
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
				...graphqlRequest,
				initialData: await request(graphqlRequest),
				token: process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN,
			},
		},
	}
}

const index = ({ subscription }) => {
	const { data, error, status } = useQuerySubscription(subscription)

	const getFormatedText = text => {
		return text.split('\n').map((str, i) => <p key={`p_${i}`}>{str}</p>)
	}
	return (
		<>
			<Head>
				<title>Freedom Business Area - F.A.Q</title>
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
				<meta name="keywords" content="faq, business incubator" />
			</Head>
			<Hero />
			<section className="sticky bg-black pb-10">
				<div className="bg-white p-6 lg:p-20 rounded-3xl">
					<div className="mb-10">
						<NumSection number={'01'} variant={'green'} title={'F.A.Q.'} />
					</div>
					{error && (
						<div className="max-w-screen-sm my-12 mx-auto">
							<h1 className="title-font text-lg font-bold text-gray-900 mb-3">
								Error: {error.code}
							</h1>
							<div className="my-5">{error.message}</div>
							{error.response && (
								<pre className="bg-gray-100 p-5 mt-5 font-mono">
									{JSON.stringify(error.response, null, 2)}
								</pre>
							)}
						</div>
					)}
					<div>
						{data.faqs.map(item => (
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
											<Disclosure.Panel className="py-4">
												{getFormatedText(item.answer)}
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
