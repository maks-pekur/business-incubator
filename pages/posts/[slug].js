import Head from 'next/head'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { request } from '../../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../../lib/fragments'

import { MoreStories } from '../../components/Post/MoreStories'
import { PostBody } from '../../components/Post/PostBody'
import { PostHeader } from '../../components/Post/PostHeader'

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
	const formattedLocale = locale.split('-')[0]
	const graphqlRequest = {
		query: `
      query PostBySlug($slug: String) {
        post(locale: ${formattedLocale}, filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
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
        morePosts: allPosts(locale: ${formattedLocale}, orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
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
		variables: {
			slug: params.slug,
		},
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

const Post = ({ subscription }) => {
	const {
		data: { post, morePosts },
	} = useQuerySubscription(subscription)

	const metaTags = post.seo

	return (
		<>
			<Head>{renderMetaTags(metaTags)}</Head>

			<article>
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
				/>
				<PostBody content={post.content} />
			</article>
			{morePosts.length > 0 && <MoreStories posts={morePosts} />}
		</>
	)
}

export default Post
