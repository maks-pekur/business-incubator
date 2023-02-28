import { CoverImage } from '../ui/CoverImage'
import Date from '../ui/Date'
import { Heading } from '../ui/Heading'

export const PostHeader = ({ title, coverImage, date, author }) => {
	return (
		<div className="pt-28">
			<div className="mb-8">
				<Heading tag={'h2'} classNames={'text-white'}>
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
					<Heading tag={'h4'} classNames={'text-white'}>
						<Date dateString={date} />
					</Heading>
				</div>
			</div>
		</div>
	)
}
