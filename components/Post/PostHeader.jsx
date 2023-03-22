import { CoverImage } from '../ui/CoverImage'
import Date from '../ui/Date'
import { Heading } from '../ui/Heading'

export const PostHeader = ({ title, coverImage, date, author }) => {
	return (
		<div>
			<div className="mb-8">
				<Heading classNames="font-bold mb-8" tag={'h2'}>
					{title}
				</Heading>
			</div>
			<div className="mb-10">
				<div className="rounded-3xl overflow-hidden">
					<CoverImage
						title={title}
						responsiveImage={coverImage.responsiveImage}
					/>
				</div>
				<div className="pt-6">
					<Heading tag={'h4'}>
						<Date dateString={date} />
					</Heading>
				</div>
			</div>
		</div>
	)
}
