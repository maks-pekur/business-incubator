import { Image, StructuredText } from 'react-datocms'

const renderBlock = ({ record }) => {
	console.log(record)
	switch (record.__typename) {
		case 'ImageBlockRecord':
			return <Image data={record.image.responsiveImage} />
		default:
			return <pre>{JSON.stringify(record, null, 2)}</pre>
	}
}

export const PostBody = ({ content }) => {
	return (
		<div className="prose prose-lg prose-blue">
			<StructuredText
				data={content}
				renderBlock={({ record }) => renderBlock(record)}
			/>
		</div>
	)
}
