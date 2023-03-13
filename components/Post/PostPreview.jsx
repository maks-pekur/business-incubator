import Link from 'next/link'
import { useRouter } from 'next/router'
import { blogTranslation } from '../../translations/blog'
import { CoverImage } from '../ui/CoverImage'
import Date from '../ui/Date'
import { Heading } from '../ui/Heading'
import { LinkComponent } from '../ui/LinkComponent'
export const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) => {
	const { locale } = useRouter()
	return (
		<div className="flex flex-col justify-between">
			<div>
				<div className="mb-5 rounded-3xl overflow-hidden">
					<CoverImage
						slug={slug}
						title={title}
						responsiveImage={coverImage.responsiveImage}
					/>
				</div>
				<div className="mb-4 min-h-[100px]">
					<Heading tag={'h3'}>
						<Link href={`/posts/${slug}`}>{title}</Link>
					</Heading>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="text-lg">
					<Date dateString={date} />
				</div>
				<div className="flex items-start">
					<LinkComponent
						href={`/posts/${slug}`}
						variant={'outline'}
						title={blogTranslation.btn[locale]}
					/>
				</div>
			</div>
		</div>
	)
}
