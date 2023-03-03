import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { Hero } from '../../components/Hero'
import { MoreStories } from '../../components/Post/MoreStories'
import { NumSection } from '../../components/ui/NumSection'
import { request } from '../../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../../lib/fragments'

export async function getStaticProps({ locale }) {
	const formattedLocale = locale.split('-')[0]
	const graphqlRequest = {
		query: `
      {
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(locale: ${formattedLocale}) {
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
      ${metaTagsFragment}
      ${responsiveImageFragment}
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
		data: { allPosts, blog },
	} = useQuerySubscription(subscription)
	const morePosts = allPosts.slice(0)
	const metaTags = blog.seo

	return (
		<>
			<Head>{renderMetaTags(metaTags)}</Head>

			<Hero />
			<div className="bg-white rounded-3xl p-14 sticky top-0 px-4">
				<div className="mb-6">
					<NumSection number={'01'} title={'Блог'} variant={'green'} />
				</div>
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</div>
		</>
	)
}

export default index
