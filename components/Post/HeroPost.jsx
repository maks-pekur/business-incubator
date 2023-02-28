import Link from 'next/link'

import { CoverImage } from '../ui/CoverImage'
import Date from '../ui/Date'
import { Heading } from '../ui/Heading'
import { LinkComponent } from '../ui/Link'

export const HeroPost = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) => {
	return (
		<div className="mb-28">
			<div className="rounded-3xl overflow-hidden mb-4">
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
					slug={slug}
				/>
			</div>
			<div className="mb-4">
				<Heading tag={'h3'} classNames={'text-start'}>
					<Link href={`/posts/${slug}`}>{title}</Link>
				</Heading>
			</div>
			<div className="flex items-start justify-between">
				<div className="text-lg">
					<Date dateString={date} />
				</div>
				<LinkComponent
					href={`/posts/${slug}`}
					variant={'outline'}
					title={'Подробнее'}
				/>
			</div>
		</div>
	)
}
