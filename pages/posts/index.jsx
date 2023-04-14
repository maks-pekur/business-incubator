import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuerySubscription } from 'react-datocms'
import { Hero } from '../../components/Hero'
import { MoreStories } from '../../components/Post/MoreStories'
import { NumSection } from '../../components/ui/NumSection'
import { imageFields, request } from '../../lib/datocms'

import { blogTranslation } from '../../translations/blog'

export async function getServerSideProps({ locale }) {
	const graphqlRequest = {
		query: `
      {
        posts: allPosts(locale: ${locale}) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...imageFields
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }
      ${imageFields}
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
	const { locale } = useRouter()
	const { data, error, status } = useQuerySubscription(subscription)

	return (
		<>
			<Head>
				<title>Freedom Business Area - Blog</title>
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
					content="incubator, business incubator, it incubator, blog, business blog, it blog"
				/>
			</Head>
			<Hero />
			<section className="bg-white rounded-3xl p-6 md:p-20 sticky top-0">
				<div className="mb-10">
					<NumSection
						number={'01'}
						title={blogTranslation.section[locale]}
						variant={'green'}
					/>
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
					<MoreStories posts={data.posts} />
				</div>
			</section>
		</>
	)
}

export default index
