import { Avatar } from '../ui/Avatar'
import { CoverImage } from '../ui/CoverImage'
import  Date  from '../ui/Date'

export const PostHeader = ({ title, coverImage, date, author }) => {
	return (
		<>
			<h1 className="text-xl md:text-2xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
				{title}
			</h1>
			<div className="hidden md:block md:mb-12">
				<Avatar name={author.name} picture={author.picture} />
			</div>
			<div className="mb-8 md:mb-16">
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
				/>
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className="mb-6 text-lg">
					<Date dateString={date} />
				</div>
			</div>
		</>
	)
}
