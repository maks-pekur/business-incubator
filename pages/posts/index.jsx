import Head from 'next/head'
import { useRouter } from 'next/router'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { Hero } from '../../components/Hero'
import { MoreStories } from '../../components/Post/MoreStories'
import { NumSection } from '../../components/ui/NumSection'
import { request } from '../../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../../lib/fragments'

import { blogTranslation } from '../../translations/blog'

export async function getServerSideProps({ locale }) {
	const graphqlRequest = {
		query: `
      {
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        posts: allPosts(locale: ${locale}) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
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
      ${responsiveImageFragment}
			${metaTagsFragment}
    `,
	}

	return {
		props: {
			subscription: {
				...graphqlRequest,
				initialData: await request(graphqlRequest),
				token: process.env.NEXT_PUBLIC_EXAMPLE_CMS_DATOCMS_API_TOKEN,
			},
		},
	}
}

const index = ({ subscription }) => {
	const { locale } = useRouter()
	const { data, error, status } = useQuerySubscription(subscription)
	const metaTags = data.blog.seo

	return (
		<>
			<Head>{renderMetaTags(metaTags)}</Head>
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
