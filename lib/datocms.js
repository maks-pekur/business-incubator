import tiny from 'tiny-json-http'

export async function request({ query, variables, preview }) {
	const { body } = await tiny.post({
		url: `https://graphql.datocms.com${preview ? '/preview' : '/'}`,
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN}`,
		},
		data: {
			query,
			variables,
		},
	})
	if (body.errors) {
		console.log(body.errors)

		throw `Invalid GraphQL response! Query: ${JSON.stringify(
			query
		)}, Variables: ${JSON.stringify(
			variables
		)}, Preview: ${preview}, Response: ${JSON.stringify(body)}`
	}

	if (body.errors) {
		console.error('Ouch! The query has some errors!')
		throw body.errors
	}

	return body.data
}

export const imageFields = `
fragment imageFields on ResponsiveImage {
  aspectRatio
  base64
  height
  sizes
  src
  srcSet
  width
  alt
  title
}
`

export const seoMetaTagsFields = `
fragment seoMetaTagsFields on Tag {
  attributes
  content
  tag
}
`
