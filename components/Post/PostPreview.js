import Link from 'next/link'
import { Avatar } from '../ui/Avatar'
import { CoverImage } from '../ui/CoverImage'
import  Date  from '../ui/Date'

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
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<h3 className="text-3xl mb-3 leading-snug">
				<Link href={`/posts/${slug}`}>{title}</Link>
			</h3>
			<div className="text-lg mb-4">
				<Date dateString={date} />
			</div>
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			<Avatar name={author.name} picture={author.picture} />
		</div>
	)
}
