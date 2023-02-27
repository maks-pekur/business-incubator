import { Image, StructuredText } from 'react-datocms'

export const PostBody = ({ content }) => {
	return (
		<div className="max-w-4xl mx-auto">
			<div className="prose prose-lg prose-blue">
				<StructuredText
					data={content}
					renderBlock={({ record }) => {
						if (record.__typename === 'ImageBlockRecord') {
							return <Image data={record.image.responsiveImage} />
						}

						return (
							<>
								<p>Don't know how to render a block!</p>
								<pre>{JSON.stringify(record, null, 2)}</pre>
							</>
						)
					}}
				/>
			</div>
		</div>
	)
}
