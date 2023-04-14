import { StructuredText } from 'react-datocms'

const renderBlock = ({ record }) => {
	if (record.__typename === 'ImageBlockRecord') {
		return <Image data={record.image.responsiveImage} />
	}
	return <pre>{JSON.stringify(record, null, 2)}</pre>
}

export const PostBody = ({ content }) => {
	return (
		<div className="prose prose-lg prose-blue">
			<StructuredText data={content} renderBlock={renderBlock} />
		</div>
	)
}
