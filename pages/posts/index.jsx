import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { Hero } from '../../components/Hero'
import { HeroPost } from '../../components/Post/HeroPost'
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
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)
	const metaTags = blog.seo

	return (
		<>
			<Head>{renderMetaTags(metaTags)}</Head>
			<main className="px-4">
				<Hero />
				<div className="bg-white rounded-3xl p-14">
					<div className="mb-6">
						<NumSection number={'01'} title={'Блог'} variant={'green'} />
					</div>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</div>
			</main>
		</>
	)
}

export default index
