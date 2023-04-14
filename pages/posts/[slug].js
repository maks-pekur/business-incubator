import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { imageFields, request, seoMetaTagsFields } from '../../lib/datocms'

import { useRouter } from 'next/router'
import { MoreStories } from '../../components/Post/MoreStories'
import { PostBody } from '../../components/Post/PostBody'
import { PostHeader } from '../../components/Post/PostHeader'
import { Heading } from '../../components/ui/Heading'
import { blogTranslation } from '../../translations/blog'

export async function getStaticPaths({ locales }) {
	const data = await request({ query: `{ allPosts { slug } }` })
	const pathsArray = []

	data.allPosts.map(post => {
		locales.map(language => {
			pathsArray.push({ params: { slug: post.slug }, locale: language })
		})
	})

	return {
		paths: pathsArray,
		fallback: false,
	}
}

export async function getStaticProps({ params, locale }) {
	const graphqlRequest = {
		query: `
      query PostBySlug($slug: String) {
        post(locale: ${locale}, filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          title
          slug
          content {
            links
      			value
      			blocks {
        			id
      			}
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
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
        morePosts: allPosts(locale: ${locale}, orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
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
      ${seoMetaTagsFields}
    `,
		variables: {
			slug: params.slug,
		},
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

const Post = ({ subscription }) => {
	const { locale } = useRouter()
	const { data, error, status } = useQuerySubscription(subscription)
	const metaTags = data.post.seo

	return (
		<>
			<Head>{renderMetaTags(metaTags)}</Head>

			<div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-10 my-20 md:my-36">
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

				<article>
					<PostHeader
						title={data.post.title}
						coverImage={data.post.coverImage}
						date={data.post.date}
						author={data.post.author}
					/>
					<PostBody content={data.post.content} />
				</article>
			</div>

			<div className="bg-white p-6 md:p-20 rounded-3xl">
				<div className="mb-10">
					<Heading tag={'h2'}>{blogTranslation.more[locale]}</Heading>
				</div>
				{data.morePosts.length > 0 && <MoreStories posts={data.morePosts} />}
			</div>
		</>
	)
}

export default Post
