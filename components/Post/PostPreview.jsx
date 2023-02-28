import Link from 'next/link'
import { CoverImage } from '../ui/CoverImage'
import Date from '../ui/Date'
import { Heading } from '../ui/Heading'
import { LinkComponent } from '../ui/Link'

export const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) => {
	return (
		<div>
			<div className="mb-5 rounded-3xl overflow-hidden">
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div className="mb-4">
				<Heading tag={'h3'}>
					<Link href={`/posts/${slug}`}>{title}</Link>
				</Heading>
			</div>

			<div className="flex items-center justify-between">
				<div className="text-lg">
					<Date dateString={date} />
				</div>
				<div className="flex items-start">
					<LinkComponent
						href={`/posts/${slug}`}
						variant={'outline'}
						title={'Подробнее'}
					/>
				</div>
			</div>
		</div>
	)
}
